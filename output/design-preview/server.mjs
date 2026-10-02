import { createServer, build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const directory = fileURLToPath(new URL('.', import.meta.url));
const project = path.resolve(directory, '../..');
const modulePath = name => `/@fs/${path.join(directory, name).replaceAll('\\', '/')}`;
// Render every original page unchanged. Only an appearance stylesheet and review control
// are injected in this preview process; there are no page/component replacements.
const config = {
  configFile: false,
  root: path.join(project, 'client'),
  base: './',
  resolve: { alias: { '@': path.join(project, 'client/src'), '@shared': path.join(project, 'shared') } },
  plugins: [{
    name: 'isolated-design-preview',
    enforce: 'pre',
    transform(code, id) {
      const file = id.split('?')[0].replaceAll('\\', '/');
      if (file.endsWith('/client/src/main.tsx')) {
        // Preserve the original/refined comparison after the approved theme ships.
        code = code.replace('import "./styles/common/site-refinement.css";', '');
        return { code: `${code.replace('.render(<App />)', '.render(<><App /><RefinementControls /></>)')}\nimport ${JSON.stringify(modulePath('refinement.css'))};\nimport { RefinementControls } from ${JSON.stringify(modulePath('RefinementControls.tsx'))};`, map: null };
      }
    },
    transformIndexHtml(html) {
      return html.replace('<html lang="ko">', '<html lang="ko" data-refinement="on">')
        .replace('</head>', '<meta name="robots" content="noindex,nofollow" /><link rel="icon" type="image/svg+xml" href="./images/home/logo1.svg" /></head>');
    },
  }, react(), tailwindcss()],
  server: { host: '127.0.0.1', port: 4325, strictPort: true, fs: { allow: [project] } },
  build: { outDir: path.join(directory, 'build'), emptyOutDir: true },
};

if (process.argv.includes('--build')) {
  await build(config);
} else {
  const server = await createServer(config);
  await server.listen();
  console.log('Design preview: http://127.0.0.1:4325/#/');
}
