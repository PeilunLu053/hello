const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const bp = path.join(root, 'bp');
const qishuBp = path.join(root, 'qishu-bp');
const excludedHtmlFiles = new Set(['qishu-ai-gpt-analysis-package.html']);
const externallyHostedAssets = [
  'assets/qishu-building-industry-demo.mp4',
  'assets/qishu-cost-management-demo.mp4',
  'assets/qishu-decoration-demo.mp4',
  'qishu-bp/assets/qishu-architecture-cad-workflow.mp4',
  'qishu-bp/assets/qishu-cad-recognition-demo.mp4',
  'qishu-bp/assets/qishu-cost-management-demo.mp4',
  'qishu-bp/assets/qishu-decoration-demo.mp4',
];
const externalAssetOrigin = 'https://friendly-griffin-a8be75.netlify.app';
const maximumDeployFileSize = 10 * 1024 * 1024;

function listRelativeFiles(directory, relativeDirectory = '') {
  const currentDirectory = path.join(directory, relativeDirectory);

  return fs
    .readdirSync(currentDirectory, { withFileTypes: true })
    .flatMap((entry) => {
      const relativePath = path.join(relativeDirectory, entry.name);
      return entry.isDirectory()
        ? listRelativeFiles(directory, relativePath)
        : [relativePath.split(path.sep).join('/')];
    })
    .sort();
}

assert.ok(fs.existsSync(dist), 'dist/ should exist before bundle verification');
assert.ok(
  fs.existsSync(path.join(dist, 'assets')),
  'dist/assets/ should exist before bundle verification',
);
assert.ok(
  fs.existsSync(path.join(dist, 'bp', 'index.html')),
  'dist/bp/index.html should exist before bundle verification',
);
assert.ok(
  fs.existsSync(path.join(dist, 'qishu-bp', 'index.html')),
  'dist/qishu-bp/index.html should exist before bundle verification',
);

const expectedHtmlFiles = fs
  .readdirSync(root, { withFileTypes: true })
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.endsWith('.html') &&
      !excludedHtmlFiles.has(entry.name),
  )
  .map((entry) => entry.name)
  .sort();
const publishedRootFiles = fs
  .readdirSync(dist, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .sort();

assert.deepStrictEqual(
  publishedRootFiles,
  expectedHtmlFiles,
  'dist/ should publish every public HTML page and no unexpected root files',
);

const expectedAssetFiles = listRelativeFiles(path.join(root, 'assets')).filter(
  (file) => !externallyHostedAssets.includes(`assets/${file}`),
);
const publishedAssetFiles = listRelativeFiles(path.join(dist, 'assets'));
const expectedBpFiles = listRelativeFiles(bp);
const publishedBpFiles = listRelativeFiles(path.join(dist, 'bp'));
const expectedQishuBpFiles = listRelativeFiles(qishuBp);
const publishedQishuBpFiles = listRelativeFiles(path.join(dist, 'qishu-bp'));

assert.deepStrictEqual(
  publishedAssetFiles,
  expectedAssetFiles,
  'dist/assets/ should match the source asset set except externally hosted media',
);
assert.deepStrictEqual(
  publishedBpFiles,
  expectedBpFiles,
  'dist/bp/ should match the BP entry redirect source files',
);
assert.deepStrictEqual(
  publishedQishuBpFiles,
  expectedQishuBpFiles,
  'dist/qishu-bp/ should match the namespaced Qishu financing source files',
);

const normalizedConfig = fs
  .readFileSync(path.join(root, 'netlify.toml'), 'utf8')
  .replace(/\r\n/g, '\n');

for (const assetPath of externallyHostedAssets) {
  assert.ok(
    !fs.existsSync(path.join(dist, assetPath)),
    `${assetPath} should be excluded so its Netlify redirect is not shadowed`,
  );

  const destinationPath = assetPath.startsWith('qishu-bp/')
    ? assetPath.slice('qishu-bp/'.length)
    : assetPath;
  const redirectBlock = [
    `from = "/${assetPath}"`,
    `  to = "${externalAssetOrigin}/${destinationPath}"`,
    '  status = 302',
  ].join('\n');
  assert.ok(
    normalizedConfig.includes(redirectBlock),
    `${assetPath} should have a 302 redirect to the external media host`,
  );
}

const oversizedFiles = listRelativeFiles(dist).filter((file) => {
  return fs.statSync(path.join(dist, file)).size > maximumDeployFileSize;
});

assert.deepStrictEqual(
  oversizedFiles,
  [],
  'dist/ should not contain files larger than 10 MB',
);

console.log(
  `Verified Netlify bundle: ${expectedHtmlFiles.length} HTML pages, ` +
    `${publishedAssetFiles.length} local assets, and ` +
    `${publishedQishuBpFiles.length} Qishu BP files, with ` +
    `${externallyHostedAssets.length} external media redirects.`,
);
