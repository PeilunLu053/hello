const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
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

console.log(
  `Prepared Netlify bundle: ${htmlFiles.length} HTML pages plus assets/; ` +
    `${externallyHostedAssets.size} externally hosted media files excluded.`,
);
