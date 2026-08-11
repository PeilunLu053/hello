import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(projectRoot, 'src');
const publicRoot = path.join(projectRoot, 'public');
const distRoot = path.join(projectRoot, 'dist');

const mainSource = path.join(sourceRoot, 'qishu-ai.html');
const workbookSource = path.join(sourceRoot, 'qishu-funding-workbook.html');

for (const source of [mainSource, workbookSource]) {
  if (!fs.existsSync(source)) {
    throw new Error(`缺少页面源码：${path.relative(projectRoot, source)}`);
  }
}

const mainHtml = fs.readFileSync(mainSource, 'utf8');
const workbookHtml = fs.readFileSync(workbookSource, 'utf8');
const header = mainHtml.match(/<header class="site-header(?:\s[^"]*)?"[\s\S]*?<\/header>/)?.[0] ?? '';
const headerLinkCount = (header.match(/<a\b/g) ?? []).length;

const assertions = [
  [headerLinkCount === 1, '顶部导航必须只保留一个 GIBIRA Logo 链接'],
  [!header.includes('<nav'), '顶部不能包含其他导航项'],
  [!header.includes('site-header-action'), '顶部不能包含右侧操作入口'],
  [mainHtml.includes('qishu-funding-workbook.html'), '缺少完整资金详表入口'],
  [mainHtml.includes('https://axion-os-robot-20260712233149.netlify.app'), '缺少 AXION 机器人入口'],
  [mainHtml.includes('<footer class="footer-band footer-screen"'), '主页面页尾缺失'],
  [workbookHtml.includes('assets/qishu-funding-use.xlsx'), '原始 XLSX 下载入口缺失'],
  [workbookHtml.includes('<footer class="footer-band footer-screen"'), '资金详表页尾缺失']
];

for (const [passed, message] of assertions) {
  if (!passed) throw new Error(message);
}

fs.rmSync(distRoot, { recursive: true, force: true });
fs.mkdirSync(distRoot, { recursive: true });
fs.copyFileSync(mainSource, path.join(distRoot, 'index.html'));
fs.copyFileSync(mainSource, path.join(distRoot, 'qishu-ai.html'));
fs.copyFileSync(workbookSource, path.join(distRoot, 'qishu-funding-workbook.html'));
fs.cpSync(publicRoot, distRoot, { recursive: true });

fs.writeFileSync(
  path.join(distRoot, '_redirects'),
  '/qishu-ai  /qishu-ai.html  200\n/qishu-funding-workbook  /qishu-funding-workbook.html  200\n'
);

fs.writeFileSync(
  path.join(distRoot, '_headers'),
  '/*.html\n  Cache-Control: public, max-age=0, must-revalidate\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/qishu-funding-use.xlsx\n  Content-Disposition: attachment; filename="qishu-funding-use.xlsx"\n'
);

console.log('已生成 dist：启枢融资主页、资金详表及独立资源。');
