const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const bp = path.join(root, 'bp');
const qishuBp = path.join(root, 'qishu-bp');
const excludedHtmlFiles = new Set(['qishu-ai-gpt-analysis-package.html']);
const externallyHostedAssets = new Set(
  [
    'assets/qishu-building-industry-demo.mp4',
    'assets/qishu-cost-management-demo.mp4',
    'assets/qishu-decoration-demo.mp4',
  ].map((file) => path.join(root, file)),
);

function copyDirectory(source, target, excludedPaths = new Set()) {
  fs.cpSync(source, target, {
    recursive: true,
    force: true,
    errorOnExist: false,
    filter: (sourcePath) => !excludedPaths.has(path.resolve(sourcePath)),
  });
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

if (!fs.existsSync(path.join(qishuBp, 'index.html'))) {
  throw new Error('Missing Qishu financing page at qishu-bp/index.html');
}

if (!fs.existsSync(path.join(bp, 'index.html'))) {
  throw new Error('Missing BP entry redirect at bp/index.html');
}

const htmlFiles = fs
  .readdirSync(root, { withFileTypes: true })
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.endsWith('.html') &&
      !excludedHtmlFiles.has(entry.name),
  )
  .map((entry) => entry.name)
  .sort();

for (const file of htmlFiles) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

copyDirectory(
  path.join(root, 'assets'),
  path.join(dist, 'assets'),
  externallyHostedAssets,
);
copyDirectory(qishuBp, path.join(dist, 'qishu-bp'));
copyDirectory(bp, path.join(dist, 'bp'));

console.log(
  `Prepared Netlify bundle: ${htmlFiles.length} website HTML pages, assets/, bp/, and qishu-bp/; ` +
    `${externallyHostedAssets.size} externally hosted media files excluded.`,
);
