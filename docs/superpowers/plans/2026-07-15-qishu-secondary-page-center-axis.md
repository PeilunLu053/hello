# Qishu Secondary Page Center Axis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 修复启枢指标截断和两处旧文案，并让首页与八个二级页面在导航栏 Logo 到“联系我们”的统一内容轨道内形成完整、居中、响应式的版式系统。

**Architecture:** 保持 `scripts/build-site.js` 作为唯一页面生成源，测试继续验证生成后的 24 个 HTML 页面。新增一个轻量图标供应脚本，仅复制 Phosphor Regular 字体与 CSS 到现有 `assets/`；页面级 CSS 通过 `project-secondary-page` 限定，避免影响其他 Harness 过程页。

**Tech Stack:** Node.js 静态生成、原生 HTML/CSS、GSAP 3 + ScrollTrigger、`@phosphor-icons/web@2.1.2`、Node test runner、Netlify CLI。

## Global Constraints

- 不修改页面 URL、导航标签、Logo、品牌字标、启枢 25 页顺序和商业数据。
- 桌面端内容边界必须对齐导航栏 Logo 左边缘与“联系我们”右边缘。
- 1023px 以下使用 `clamp(20px, 5vw, 32px)` 安全边距。
- 所有目标正文完整显示，不使用省略号、两行截断或固定正文高度。
- 八个二级页面的首屏、章节、卡片标题和小字居中；表格数据保持可扫描列结构。
- 只使用 Phosphor Regular 一个图标家族；Iconic 与 Skill Icons 不用于业务语义卡片。
- GSAP 动效只表达进入层级和交互反馈；reduced motion 时内容静态可见。
- 所有生产代码修改遵循测试先失败、最小实现、测试转绿的顺序。

---

### Task 1: 修复 P3、P6 文案与七项指标截断

**Files:**
- Modify: `tests/index-smoke.test.js`
- Modify: `scripts/build-site.js:850-875`
- Modify: `scripts/build-site.js:5240-5305`
- Modify: `scripts/build-site.js:7400-7445`

**Interfaces:**
- Consumes: `qishuValidationMetrics`、`qishuIntegratedContent()` 和现有 `.financing-card-grid--seven`。
- Produces: 完整 P3/P6 文案；七项验证指标在所有视口完整显示的 CSS 契约。

- [ ] **Step 1: 写入失败测试**

在启枢页面断言区加入：

```js
assert.match(html, /AI 正在从内容生成工具走向能够理解任务、调用专业工具、协同执行并交付可复核结果的生产系统。/);
assert.match(html, /建筑、工程、制造和工业空间任务具有高度结构化的对象、明确的规则约束、可复核的交付结果/);
assert.match(html, /启枢切入的不是更会生成说明或图片的单点工具/);
assert.match(html, /由此不断增加信息偏差、遗漏、版本不一致和后续返工的风险。/);
assert.match(html, /这些工作单独看只是局部任务，但叠加后会持续消耗高成本专业人力/);
assert.doesNotMatch(html, /AI 的机会正在从内容生成走向工作执行/);
assert.doesNotMatch(html, /出错和返工机会/);
assert.match(html, /\.financing-card-grid--seven \.financing-card p \{[\s\S]*?-webkit-line-clamp: unset;[\s\S]*?overflow: visible;/);
assert.match(html, /@media \(min-width: 1600px\)[\s\S]*?\.financing-card-grid--seven \{[\s\S]*?repeat\(7, minmax\(0, 1fr\)\)/);
assert.match(html, /@media \(min-width: 1024px\) and \(max-width: 1599px\)[\s\S]*?\.financing-card-grid--seven \{[\s\S]*?repeat\(4, minmax\(0, 1fr\)\)/);
```

- [ ] **Step 2: 运行测试并确认按预期失败**

Run: `npm test`

Expected: FAIL，首先报告完整 P3 文案不存在。

- [ ] **Step 3: 替换生成源中的完整文案**

将 P3 改为三个独立段落：

```js
'AI 正在从内容生成工具走向能够理解任务、调用专业工具、协同执行并交付可复核结果的生产系统。',
'建筑、工程、制造和工业空间任务具有高度结构化的对象、明确的规则约束、可复核的交付结果，以及大量高频重复工作，因此天然适合从“生成内容”升级为“执行任务并交付成果”。',
'启枢切入的不是更会生成说明或图片的单点工具，而是把图纸、模型、规则、材料、人员和交付物组织成连续作业链。企业真正需要的 AI，必须能够理解资料、调度工具、记录过程、输出结果，并由专业人员完成最终确认。',
```

将 P6 改为两个独立段落：

```js
'设计师完成图纸后，BIM 团队需要重新建模，造价人员需要重新算量，工厂拆单人员需要再次识别尺寸、材料和构件关系，施工现场还要依据图纸进行人工核对。每经过一个新的环节，数据都可能被重新录入、重新解释和重新转换，由此不断增加信息偏差、遗漏、版本不一致和后续返工的风险。',
'这些工作单独看只是局部任务，但叠加后会持续消耗高成本专业人力，并使问题在流程后端才被发现。启枢解决的不是单个孤立功能，而是这些环节背后共同的矢量对象理解、规则核验、数据复用和交付闭环问题。',
```

- [ ] **Step 4: 添加指标完整显示与响应式列数**

```css
.financing-card-grid--seven .financing-card p {
  display: block;
  overflow: visible;
  -webkit-line-clamp: unset;
}

@media (min-width: 1600px) {
  .financing-card-grid--seven { grid-template-columns: repeat(7, minmax(0, 1fr)); }
}
@media (min-width: 1024px) and (max-width: 1599px) {
  .financing-card-grid--seven { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .financing-card-grid--seven { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 767px) {
  .financing-card-grid--seven { grid-template-columns: 1fr; }
}
```

- [ ] **Step 5: 构建并验证测试转绿**

Run: `npm run build && npm test`

Expected: `Generated 24 pages.`，1 个 test 通过，0 个失败。

- [ ] **Step 6: 提交本任务**

```bash
git add scripts/build-site.js tests/index-smoke.test.js qishu-ai.html
git commit -m "fix: restore complete Qishu copy and metrics"
```

---

### Task 2: 建立导航栏对齐的共享二级页面内容轨道

**Files:**
- Modify: `tests/index-smoke.test.js`
- Modify: `scripts/build-site.js:5605-5620`
- Modify: `scripts/build-site.js:10940-11080`
- Modify: `scripts/build-site.js:13710-13845`

**Interfaces:**
- Consumes: `pageClassName(file)`、`--site-rail`、`.hero-inner`、`.section`、`.project-secondary-page`。
- Produces: `project-secondary-page` 覆盖八个目标文件；统一 `--content-track-width` 和中心轴布局。

- [ ] **Step 1: 写入失败测试**

```js
for (const file of [
  'ecosystem-pilot.html', 'ecosystem-university.html', 'ecosystem-global.html', 'ecosystem-media.html',
  'fengju-ai.html', 'north-ai.html', 'axion-os.html', 'acausal.html',
]) {
  assert.match(generatedPages.get(file), /class="page-shell [^"]*project-secondary-page/);
}
assert.match(html, /--content-track-width: calc\(100vw - var\(--content-track-rail\) \* 2\);/);
assert.match(html, /\.project-secondary-page > \.hero \.hero-inner,[\s\S]*?\.project-secondary-page > \.section \{[\s\S]*?width: var\(--content-track-width\);/);
assert.match(html, /\.project-secondary-page \.hero-title \{[\s\S]*?white-space: normal;[\s\S]*?text-wrap: balance;/);
assert.match(html, /@media \(max-width: 1023px\)[\s\S]*?--content-track-rail: clamp\(20px, 5vw, 32px\);/);
```

- [ ] **Step 2: 运行测试并确认失败**

Run: `npm test`

Expected: FAIL，生态页面缺少 `project-secondary-page`。

- [ ] **Step 3: 扩展页面集合**

```js
const alignedProjects = new Set([
  'ecosystem-pilot.html',
  'ecosystem-university.html',
  'ecosystem-global.html',
  'ecosystem-media.html',
  'axion-os.html',
  'north-ai.html',
  'fengju-ai.html',
  'acausal.html',
]);
```

- [ ] **Step 4: 定义统一内容轨道与标题换行规则**

```css
.project-secondary-page {
  --content-track-rail: var(--site-rail);
  --content-track-width: calc(100vw - var(--content-track-rail) * 2);
}
.project-secondary-page > .hero .hero-inner,
.project-secondary-page > .section {
  width: var(--content-track-width);
  max-width: none;
  margin-inline: auto;
}
.project-secondary-page .hero-title {
  max-width: min(18ch, 100%);
  white-space: normal;
  text-wrap: balance;
  overflow-wrap: anywhere;
}
@media (max-width: 1023px) {
  .project-secondary-page { --content-track-rail: clamp(20px, 5vw, 32px); }
}
```

首页首屏同步使用 `width: calc(100vw - var(--site-rail) * 2)`，确保与导航边界一致。

- [ ] **Step 5: 构建并验证测试转绿**

Run: `npm run build && npm test`

Expected: 24 页生成成功，全部断言通过。

- [ ] **Step 6: 提交本任务**

```bash
git add scripts/build-site.js tests/index-smoke.test.js index.html ecosystem-*.html fengju-ai.html north-ai.html axion-os.html acausal.html
git commit -m "fix: align secondary pages to navigation rail"
```

---

### Task 3: 统一二级页面内部居中、框线与语义图标

**Files:**
- Create: `scripts/vendor-phosphor-icons.js`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `tests/index-smoke.test.js`
- Modify: `scripts/build-site.js:2975-3055`
- Modify: `scripts/build-site.js:3330-3390`
- Modify: `scripts/build-site.js:5620-5655`
- Modify: `scripts/build-site.js:13720-13830`
- Generated: `assets/phosphor/regular/style.css`
- Generated: `assets/phosphor/regular/Phosphor.woff2`

**Interfaces:**
- Consumes: `metricGrid(items)`、`cardGrid(items)`、`detailCardGrid(items)`；每项可选 `icon` 字段为 Phosphor kebab-case 名称。
- Produces: `cardIcon(icon, className)` 返回带 `aria-hidden="true"` 的 `<i class="ph ph-${icon}">`；构建时本地化 Regular 图标字体。

- [ ] **Step 1: 写入失败测试**

```js
assert.match(html, /href="assets\/phosphor\/regular\/style\.css"/);
assert.match(html, /class="ph ph-file-text detail-card__icon" aria-hidden="true"/);
assert.match(html, /\.project-secondary-page :is\(\.detail-body, \.detail-card, \.info-card, \.metric, \.case-card\)[\s\S]*?text-align: center;/);
assert.match(html, /\.project-secondary-page \.detail-card \{[\s\S]*?border-radius: 8px;[\s\S]*?box-shadow: none;/);
```

- [ ] **Step 2: 运行测试并确认失败**

Run: `npm test`

Expected: FAIL，页面尚未加载本地图标样式。

- [ ] **Step 3: 安装并本地化单一图标家族**

Run: `npm install --save-dev @phosphor-icons/web@2.1.2`

新增 `scripts/vendor-phosphor-icons.js`：

```js
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'node_modules', '@phosphor-icons', 'web', 'src', 'regular');
const target = path.join(root, 'assets', 'phosphor', 'regular');
fs.mkdirSync(target, { recursive: true });
for (const file of ['style.css', 'Phosphor.woff2']) {
  fs.copyFileSync(path.join(source, file), path.join(target, file));
}
```

将脚本调整为：

```json
{
  "scripts": {
    "vendor:icons": "node scripts/vendor-phosphor-icons.js",
    "build": "npm run vendor:icons && node scripts/build-site.js",
    "build:netlify": "npm run vendor:icons && node scripts/build-site.js && node scripts/prepare-netlify.js"
  }
}
```

- [ ] **Step 4: 添加图标接口与目标卡片映射**

```js
function cardIcon(icon, className = 'card-icon') {
  return icon ? `<i class="ph ph-${esc(icon)} ${className}" aria-hidden="true"></i>` : '';
}
```

在生态模块中使用 `file-text`、`user-focus`、`arrows-left-right`、`chart-line-up`、`flask`、`cube`、`book-open`、`student`、`globe-hemisphere-west`、`vector-three`、`magnifying-glass`、`users-three`、`broadcast`、`megaphone`、`handshake`、`seal-check`。产品页只给关键能力卡添加语义匹配图标，不为每个标题机械加图标。

- [ ] **Step 5: 添加中心对齐与框线规则**

```css
.project-secondary-page :is(.detail-body, .detail-card, .info-card, .metric, .case-card) {
  text-align: center;
}
.project-secondary-page .detail-body {
  max-width: 72ch;
  margin-inline: auto;
}
.project-secondary-page :is(.detail-card, .info-card, .metric, .case-card) {
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  box-shadow: none;
}
.project-secondary-page .card-icon,
.project-secondary-page .detail-card__icon {
  display: inline-grid;
  place-items: center;
  color: var(--accent);
  font-size: clamp(24px, 2vw, 34px);
}
```

- [ ] **Step 6: 构建并验证图标资产与测试**

Run: `npm run build && test -s assets/phosphor/regular/style.css && test -s assets/phosphor/regular/Phosphor.woff2 && npm test`

Expected: 两个资产非空，24 页生成，测试全部通过。

- [ ] **Step 7: 提交本任务**

```bash
git add package.json package-lock.json scripts/vendor-phosphor-icons.js scripts/build-site.js tests/index-smoke.test.js assets/phosphor ecosystem-*.html fengju-ai.html north-ai.html axion-os.html acausal.html
git commit -m "feat: unify secondary page cards and icons"
```

---

### Task 4: 完成响应式、动效降级与浏览器回归

**Files:**
- Modify: `tests/index-smoke.test.js`
- Modify: `scripts/build-site.js:12920-14430`
- Modify: `design-qa.md`
- Create: `design-qa-secondary-pages-comparison.png`

**Interfaces:**
- Consumes: Task 1-3 的共享类、内容轨道、完整文案和图标资产。
- Produces: 目标视口无横向溢出；reduced motion 内容可见；同屏视觉对比报告。

- [ ] **Step 1: 写入失败测试**

```js
assert.match(html, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.reveal,[\s\S]*?opacity: 1 !important;[\s\S]*?transform: none !important;/);
assert.match(html, /@media \(max-width: 767px\)[\s\S]*?\.project-secondary-page :is\(\.detail-card-grid, \.card-grid, \.metric-grid\)[\s\S]*?grid-template-columns: 1fr/);
```

- [ ] **Step 2: 运行测试并确认失败**

Run: `npm test`

Expected: FAIL，目标 reduced-motion 可见性契约缺失或不完整。

- [ ] **Step 3: 添加最小 CSS 修复**

```css
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal-up,
  .reveal-left,
  .reveal-right,
  .reveal-scale,
  .stagger-item {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
@media (max-width: 767px) {
  .project-secondary-page :is(.detail-card-grid, .card-grid, .metric-grid) {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: 构建并运行自动化回归**

Run: `npm run build && npm test && git diff --check`

Expected: 24 页生成；1 个 test 通过；无 whitespace error。

- [ ] **Step 5: 在浏览器验证目标视口**

依次打开 `index.html`、`qishu-ai.html` 与八个二级页面，在 1920、1662、1440、1280、1024、768、390 宽度检查：

```js
({
  overflow: document.documentElement.scrollWidth > innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth,
})
```

Expected: 每页 `overflow: false` 且 `scrollWidth <= innerWidth`；目标标题与小字计算样式为 `text-align: center`。

- [ ] **Step 6: 完成同屏 Design QA**

保存修改后截图，与用户四张参考截图及 Task 2 的修改前截图合成一张对比板。更新 `design-qa.md`，覆盖 typography、spacing/layout、color/tokens、image quality、copy/content；只有无 P0/P1/P2 问题时写入最终结果 `passed`。

- [ ] **Step 7: 提交本任务**

```bash
git add scripts/build-site.js tests/index-smoke.test.js design-qa.md design-qa-secondary-pages-comparison.png index.html qishu-ai.html ecosystem-*.html fengju-ai.html north-ai.html axion-os.html acausal.html
git commit -m "fix: harden responsive secondary page layout"
```

---

### Task 5: 生产构建、Netlify 发布与线上复核

**Files:**
- Generated: `dist/`
- Verify only: production routes

**Interfaces:**
- Consumes: 所有已验证生成页面与资产。
- Produces: Netlify 生产部署 URL 和线上桌面/手机验收证据。

- [ ] **Step 1: 运行最终验证**

Run: `npm run build:netlify && npm test && git diff --check`

Expected: Netlify bundle 包含 24 个 HTML 页面、Phosphor CSS/字体和全部现有资产；测试 0 失败。

- [ ] **Step 2: 部署生产站**

Run:

```bash
npx netlify deploy --prod --dir=dist --site=1da06b3d-04e1-459a-a838-af56d66c3a1e --message='Center secondary pages and restore Qishu copy 2026-07-15'
```

Expected: `Deploy is live!` 并返回生产 URL 与唯一部署 URL。

- [ ] **Step 3: 线上复核**

在生产 URL 重新检查：

- P3、P6 新文案完整；
- 七项指标无省略号；
- 八个二级页面与首页内容边界对齐导航轨道；
- 1662px 与 390px 无横向溢出；
- Phosphor 图标字体加载成功；
- 页面首屏无加载遮罩残留。

- [ ] **Step 4: 保持最终浏览器视图可交付**

将浏览器恢复到 1662×900，停留在生产 `qishu-ai.html` 的验证指标板块，并返回可点击生产链接与 QA 报告路径。

