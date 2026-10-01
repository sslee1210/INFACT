import http from 'node:http';
import net from 'node:net';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const upstreamHost = '127.0.0.1';
const upstreamPort = 3000;
const previewModule = `/@fs/${fileURLToPath(new URL('./ReferencesPreview.tsx', import.meta.url)).replaceAll('\\', '/')}`;
const pageExports = new Map([
  ['/src/pages/ReferencesCSV.tsx', 'CsvPreview'],
  ['/src/pages/ReferencesDesign.tsx', 'DesignPreview'],
  ['/src/pages/ReferencesGMP.tsx', 'GmpPreview'],
]);
const dataSources = [
  ['csv', '../../client/src/pages/ReferencesCSV.tsx', 'csvReferenceYears'],
  ['design', '../../client/src/content/references/conceptualDesignReferences.ts', 'conceptualDesignReferenceYears'],
  ['gmp', '../../client/src/content/references/gmpReferences.ts', 'gmpReferenceYears'],
];

async function readLogoFiles() {
  try {
    const files = await readdir(new URL('../../client/public/images/clients/', import.meta.url), { withFileTypes: true });
    return new Map(files.filter((file) => file.isFile()).map((file) => [file.name.toLowerCase(), file.name]));
  } catch (error) {
    if (error.code === 'ENOENT') return new Map();
    throw error;
  }
}

function withLogos(years, files) {
  return years.map((section) => ({
    ...section,
    clients: section.clients.map((client) => {
      const filename = ['svg', 'png', 'webp', 'jpg', 'jpeg']
        .map((extension) => files.get(`${client.logo}.${extension}`.toLowerCase()))
        .find(Boolean);
      return { ...client, logoSrc: filename ? `/images/clients/${encodeURIComponent(filename)}` : null };
    }),
  }));
}

function readLiteral(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(readLiteral);
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties.map((property) => {
      if (!ts.isPropertyAssignment(property)
        || !(ts.isIdentifier(property.name) || ts.isStringLiteral(property.name))) {
        throw new Error('Reference data must contain literal properties only.');
      }
      return [property.name.text, readLiteral(property.initializer)];
    }));
  }
  throw new Error('Reference data must contain literals only.');
}

async function readReferenceData(relativePath, variableName) {
  const fileUrl = new URL(relativePath, import.meta.url);
  const source = ts.createSourceFile(
    fileURLToPath(fileUrl),
    await readFile(fileUrl, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    relativePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  if (source.parseDiagnostics.length) throw new Error('Reference source contains syntax errors.');

  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const declaration = statement.declarationList.declarations.find(
      (item) => ts.isIdentifier(item.name) && item.name.text === variableName,
    );
    if (!declaration?.initializer) continue;
    const data = readLiteral(declaration.initializer);
    if (!Array.isArray(data) || !data.every((section) => (
      section && Number.isInteger(section.year) && Array.isArray(section.clients)
      && section.clients.every((client) => (
        client && typeof client.client === 'string' && typeof client.logo === 'string'
        && Array.isArray(client.systems ?? client.projects)
        && (client.systems ?? client.projects).every((item) => typeof item === 'string')
      ))
    ))) throw new Error('Reference data has an unexpected shape.');
    return data;
  }
  throw new Error('Reference data declaration was not found.');
}

function sendResponse(req, res, status, contentType, body) {
  res.writeHead(status, {
    'content-type': contentType,
    'cache-control': 'no-store',
    'content-length': Buffer.byteLength(body),
  });
  res.end(req.method === 'HEAD' ? undefined : body);
}

const server = http.createServer(async (req, res) => {
  let pathname;
  try {
    pathname = new URL(req.url, `http://${upstreamHost}:4323`).pathname;
  } catch {
    sendResponse(req, res, 400, 'text/plain; charset=utf-8', 'Invalid request URL.');
    return;
  }

  if (pathname === '/__references-data') {
    try {
      const logoFiles = await readLogoFiles();
      const entries = await Promise.all(dataSources.map(async ([key, path, name]) => (
        [key, withLogos(await readReferenceData(path, name), logoFiles)]
      )));
      sendResponse(req, res, 200, 'application/json; charset=utf-8', JSON.stringify(Object.fromEntries(entries)));
    } catch {
      sendResponse(req, res, 500, 'application/json; charset=utf-8', JSON.stringify({ error: 'Reference data is unavailable.' }));
    }
    return;
  }

  const exportName = pageExports.get(pathname);
  if (exportName) {
    sendResponse(req, res, 200, 'text/javascript; charset=utf-8',
      `export { ${exportName} as default } from ${JSON.stringify(previewModule)};\n`);
    return;
  }

  const headers = { ...req.headers, host: `${upstreamHost}:${upstreamPort}` };
  delete headers['if-none-match'];
  delete headers['if-modified-since'];
  const upstream = http.request({
    hostname: upstreamHost,
    port: upstreamPort,
    path: req.url,
    method: req.method,
    headers,
  }, (response) => {
    res.writeHead(response.statusCode ?? 502, { ...response.headers, 'cache-control': 'no-store' });
    response.pipe(res);
  });
  upstream.on('error', () => {
    if (res.headersSent) res.destroy();
    else sendResponse(req, res, 502, 'text/plain; charset=utf-8', 'Start the website on port 3000 to use this preview.');
  });
  req.on('aborted', () => upstream.destroy());
  req.pipe(upstream);
});

server.on('upgrade', (req, socket, head) => {
  const upstream = net.connect(upstreamPort, upstreamHost, () => {
    const headers = Object.entries({ ...req.headers, host: `${upstreamHost}:${upstreamPort}` })
      .map(([key, value]) => `${key}: ${value}`).join('\r\n');
    upstream.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n${headers}\r\n\r\n`);
    if (head.length) upstream.write(head);
    upstream.pipe(socket);
    socket.pipe(upstream);
  });
  upstream.on('error', () => socket.destroy());
  socket.on('error', () => upstream.destroy());
  socket.on('close', () => upstream.destroy());
});

server.listen(4323, upstreamHost, () => {
  console.log('References preview: http://127.0.0.1:4323/#/references-csv');
});
