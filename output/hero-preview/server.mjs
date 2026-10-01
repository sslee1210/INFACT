import http from 'node:http';
import net from 'node:net';
import { readFile } from 'node:fs/promises';

const server = http.createServer(async (req, res) => {
  if (req.url === '/__hero-preview/' || req.url === '/__hero-preview') {
    try {
      const html = await readFile(new URL('./index.html', import.meta.url));
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
      res.end(html);
    } catch {
      res.writeHead(500);
      res.end('Preview file unavailable');
    }
    return;
  }
  const upstream = http.request({ hostname: '127.0.0.1', port: 3000, path: req.url, method: req.method,
    headers: { ...req.headers, host: '127.0.0.1:3000' } }, response => {
    res.writeHead(response.statusCode, response.headers);
    response.pipe(res);
  });
  upstream.on('error', () => { res.writeHead(502); res.end('Start the website on port 3000 to use this preview.'); });
  req.pipe(upstream);
});
server.on('upgrade', (req, socket, head) => {
  const upstream = net.connect(3000, '127.0.0.1', () => {
    const headers = Object.entries({ ...req.headers, host: '127.0.0.1:3000' })
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
server.listen(4322, '127.0.0.1', () => console.log('Hero preview: http://127.0.0.1:4322/__hero-preview/'));
