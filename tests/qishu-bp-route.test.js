const assert = require('assert');
const fs = require('fs');
const path = require('path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const qishuBpRoot = path.join(root, 'qishu-bp');
const externallyHostedAssetRefs = new Set([
  'assets/qishu-architecture-cad-workflow.mp4',
  'assets/qishu-cad-recognition-demo.mp4',
  'assets/qishu-cost-management-demo.mp4',
  'assets/qishu-decoration-demo.mp4',
]);

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

test('Qishu financing page is packaged as a self-contained subpath', () => {
  const mainPath = path.join(qishuBpRoot, 'index.html');
  const workbookPath = path.join(qishuBpRoot, 'qishu-funding-workbook.html');

  assert.ok(fs.existsSync(mainPath), 'qishu-bp/index.html should exist');
  assert.ok(fs.existsSync(workbookPath), 'the financing workbook page should exist under qishu-bp');

  const mainHtml = fs.readFileSync(mainPath, 'utf8');
  const workbookHtml = fs.readFileSync(workbookPath, 'utf8');
  assert.strictEqual(
    (mainHtml.match(/<a\b[^>]*data-qishu-directory-link/g) || []).length,
    25,
    'the financing page should retain all 25 directory links',
  );
  assert.match(mainHtml, /href="qishu-funding-workbook\.html"/, 'the main page should link to the local workbook');
  assert.match(workbookHtml, /href="index\.html#overview"/, 'the workbook should return to the subpath index');
  assert.doesNotMatch(mainHtml + workbookHtml, /(?:href|src)="\/assets\//, 'page assets should not depend on root-absolute URLs');

  const assetRefs = new Set();
  for (const html of [mainHtml, workbookHtml]) {
    for (const match of html.matchAll(/assets\/[A-Za-z0-9_@%+.,()\-/]+/g)) {
      assetRefs.add(match[0].replace(/[.,]+$/, ''));
    }
  }

  const missingAssets = [...assetRefs].filter((ref) => (
    !externallyHostedAssetRefs.has(ref) &&
    !fs.existsSync(path.join(qishuBpRoot, ref)) &&
    !fs.existsSync(path.join(root, ref))
  ));
  assert.deepStrictEqual(missingAssets, [], `all local or shared assets should exist: ${missingAssets.join(', ')}`);
  assert.ok(
    fs.existsSync(path.join(qishuBpRoot, 'assets/qishu-funding-use.xlsx')),
    'the downloadable funding workbook should stay namespaced under qishu-bp',
  );

  const publicBase = new URL('https://gibira.com/qishu-bp/');
  assert.strictEqual(new URL('assets/gsap.min.js', publicBase).pathname, '/qishu-bp/assets/gsap.min.js');
  assert.strictEqual(new URL('qishu-funding-workbook.html', publicBase).pathname, '/qishu-bp/qishu-funding-workbook.html');
});

test('Netlify routes the canonical subpath and its asset URLs without affecting other pages', () => {
  const config = read('netlify.toml');
  const prepareScript = read('scripts/prepare-netlify.js');
  const bpRedirect = read('bp/index.html');

  assert.match(bpRedirect, /location\.replace\('\.\.\/qishu-bp\/'/, 'the public /bp/ entry should redirect to the Qishu BP path');
  assert.match(config, /from = "\/qishu-bp"\s+to = "\/qishu-bp\/"\s+status = 301/, 'the route without a slash should redirect to the canonical trailing-slash URL');
  assert.match(config, /from = "\/qishu-bp\/assets\/\*"\s+to = "\/assets\/:splat"\s+status = 200/, 'missing subpath assets should reuse matching website assets');
  for (const asset of externallyHostedAssetRefs) {
    const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.match(
      config,
      new RegExp(`from = "\\/qishu-bp\\/${escapedAsset}"[\\s\\S]*?friendly-griffin-a8be75\\.netlify\\.app`),
      `${asset} should keep its dedicated external redirect`,
    );
  }
  assert.match(prepareScript, /copyDirectory\(bp, path\.join\(dist, 'bp'\)\)/, 'the deployment bundle should include the public BP entry redirect');
  assert.match(prepareScript, /copyDirectory\(qishuBp, path\.join\(dist, 'qishu-bp'\)\)/, 'the Netlify bundle should include the qishu-bp directory');
});
