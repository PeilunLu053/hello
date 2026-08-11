import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const mainPath = path.join(distRoot, 'index.html');
const workbookPath = path.join(distRoot, 'qishu-funding-workbook.html');

const requiredFiles = [
  mainPath,
  path.join(distRoot, 'qishu-ai.html'),
  workbookPath,
  path.join(distRoot, 'assets/gibira-favicon-16-v2.png'),
  path.join(distRoot, 'assets/qishu-funding-use.xlsx'),
  path.join(distRoot, '_redirects'),
  path.join(distRoot, '_headers')
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`构建结果缺少：${path.relative(projectRoot, file)}`);
  }
}

const htmlFiles = fs.readdirSync(distRoot).filter((file) => file.endsWith('.html')).sort();
const expectedHtml = ['index.html', 'qishu-ai.html', 'qishu-funding-workbook.html'];
if (JSON.stringify(htmlFiles) !== JSON.stringify(expectedHtml)) {
  throw new Error(`发现非启枢页面：${htmlFiles.join(', ')}`);
}

const pages = [mainPath, workbookPath];
const assetRefs = new Set();
const externalAssets = new Map([
  [
    'assets/qishu-decoration-demo.mp4',
    'https://friendly-griffin-a8be75.netlify.app/assets/qishu-decoration-demo.mp4'
  ]
]);
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  for (const match of html.matchAll(/assets\/[A-Za-z0-9_@%+.,()\-\/]+/g)) {
    assetRefs.add(match[0].replace(/[.,]+$/, ''));
  }
}

const missingAssets = [...assetRefs].filter((ref) => (
  !fs.existsSync(path.join(distRoot, ref)) && !externalAssets.has(ref)
));
if (missingAssets.length) {
  throw new Error(`缺少页面资源：${missingAssets.join(', ')}`);
}

const netlifyConfig = fs.readFileSync(path.join(projectRoot, 'netlify.toml'), 'utf8');
for (const [ref, destination] of externalAssets) {
  if (!assetRefs.has(ref)) continue;
  const route = '/' + ref;
  if (!netlifyConfig.includes(`from = "${route}"`) || !netlifyConfig.includes(`to = "${destination}"`)) {
    throw new Error(`外部资源缺少 Netlify 重定向：${ref}`);
  }
}

const mainHtml = fs.readFileSync(mainPath, 'utf8');
const workbookHtml = fs.readFileSync(workbookPath, 'utf8');
const report = {
  htmlFiles,
  referencedAssets: assetRefs.size,
  directoryLinks: (mainHtml.match(/<a\b[^>]*data-qishu-directory-link/g) ?? []).length,
  fundingWorkbook: mainHtml.includes('qishu-funding-workbook.html'),
  originalXlsx: workbookHtml.includes('assets/qishu-funding-use.xlsx'),
  axionRobot: mainHtml.includes('https://axion-os-robot-20260712233149.netlify.app'),
  footer: mainHtml.includes('<footer class="footer-band footer-screen"'),
  favicon: mainHtml.includes('assets/gibira-favicon-16-v2.png') && workbookHtml.includes('assets/gibira-favicon-16-v2.png'),
  scrollPositionMemory: mainHtml.includes('scrollVisitedKey') && mainHtml.includes('shouldRestoreSavedScroll'),
  automaticSectionHashing: mainHtml.includes('hashSyncReady'),
  extraBusinessPages: htmlFiles.length - expectedHtml.length
};

if (report.directoryLinks !== 25) throw new Error(`目录数量异常：${report.directoryLinks}`);
if (!report.fundingWorkbook || !report.originalXlsx || !report.axionRobot || !report.footer || !report.favicon) {
  throw new Error(`关键入口检查失败：${JSON.stringify(report)}`);
}
if (!report.scrollPositionMemory || report.automaticSectionHashing) {
  throw new Error(`滚动位置策略检查失败：${JSON.stringify(report)}`);
}

console.log(JSON.stringify(report, null, 2));
