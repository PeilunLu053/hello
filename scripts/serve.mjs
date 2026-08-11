import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const port = Number(process.env.PORT || 4173);

if (!fs.existsSync(path.join(distRoot, 'index.html'))) {
  throw new Error('缺少 dist，请先执行 npm run build。');
}

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.mp4', 'video/mp4'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
  ['.ttf', 'font/ttf'],
  ['.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
]);

const routeAliases = new Map([
  ['/', '/index.html'],
  ['/qishu-ai', '/qishu-ai.html'],
  ['/qishu-funding-workbook', '/qishu-funding-workbook.html']
]);

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
  const routedPath = routeAliases.get(pathname) || pathname;
  const absolutePath = path.resolve(distRoot, `.${routedPath}`);

  if (!absolutePath.startsWith(`${distRoot}${path.sep}`) || !fs.existsSync(absolutePath) || fs.statSync(absolutePath).isDirectory()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not Found');
    return;
  }

  const stat = fs.statSync(absolutePath);
  const type = contentTypes.get(path.extname(absolutePath).toLowerCase()) || 'application/octet-stream';
  const range = request.headers.range;

  if (range) {
    const match = range.match(/bytes=(\d*)-(\d*)/);
    if (match) {
      const start = match[1] ? Number(match[1]) : 0;
      const end = match[2] ? Number(match[2]) : stat.size - 1;
      if (start <= end && end < stat.size) {
        response.writeHead(206, {
          'Accept-Ranges': 'bytes',
          'Content-Range': `bytes ${start}-${end}/${stat.size}`,
          'Content-Length': end - start + 1,
          'Content-Type': type
        });
        fs.createReadStream(absolutePath, { start, end }).pipe(response);
        return;
      }
    }
  }

  response.writeHead(200, {
    'Accept-Ranges': 'bytes',
    'Content-Length': stat.size,
    'Content-Type': type
  });
  fs.createReadStream(absolutePath).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`启枢融资页面：http://127.0.0.1:${port}`);
});
