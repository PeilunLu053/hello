const assert = require('assert');
const fs = require('fs');
const path = require('path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

test('Netlify deploy contexts use the repository build pipeline', () => {
  const config = read('netlify.toml');

  assert.match(config, /\[build\][\s\S]*command = "npm run ci"/);
  assert.match(config, /\[build\][\s\S]*publish = "dist"/);
  assert.match(config, /\[build\.environment\][\s\S]*NODE_VERSION = "20"/);

  for (const context of ['production', 'deploy-preview', 'branch-deploy']) {
    assert.match(
      config,
      new RegExp(
        `\\[context\\.${context}\\]\\s*\\n\\s*command = "npm run ci"`,
      ),
      `${context} should run the same build and regression checks`,
    );
  }

  assert.match(config, /X-Content-Type-Options = "nosniff"/);
  assert.match(config, /Referrer-Policy = "strict-origin-when-cross-origin"/);
  assert.strictEqual(
    [...config.matchAll(/Cache-Control = "public, max-age=0, must-revalidate"/g)]
      .length,
    4,
    'website HTML, unversioned assets, and Qishu BP HTML routes should be revalidated',
  );
  assert.doesNotMatch(
    config,
    /from = "\/\*"\s+to = "\/index\.html"\s+status = 200/,
    'the multi-page site must not be rewritten as an SPA',
  );
});

test('GitHub validates pushes without deploying a second time', () => {
  const workflow = read('.github/workflows/deploy.yml');

  assert.match(workflow, /actions\/checkout@v7/);
  assert.match(workflow, /actions\/setup-node@v6/);
  assert.match(workflow, /node-version:\s*20/);
  assert.match(workflow, /run:\s*npm ci/);
  assert.match(workflow, /run:\s*npm run ci/);
  assert.doesNotMatch(
    workflow,
    /NETLIFY_AUTH_TOKEN|NETLIFY_SITE_ID|run:\s*netlify deploy|actions-netlify/i,
  );
});

test('hosted builds pin the supported Node baseline', () => {
  const pkg = JSON.parse(read('package.json'));

  assert.strictEqual(pkg.private, true);
  assert.strictEqual(pkg.scripts.test, 'node --test');
  assert.strictEqual(
    pkg.scripts.ci,
    'npm run build:netlify && npm run verify:netlify && npm test',
  );
  assert.strictEqual(
    pkg.scripts['verify:netlify'],
    'node scripts/verify-netlify-bundle.js',
  );
  assert.strictEqual(pkg.engines.node, '>=20');
  assert.strictEqual(read('.nvmrc').trim(), '20');
});
