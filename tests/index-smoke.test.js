const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const harnessSecondaryPages = [
  { file: 'harness-complex-intent.html', title: '听懂复杂商业意图', required: ['不是理解一句 prompt', '多源输入', '责任边界', '系统识别项目类型为地库施工图深化任务'] },
  { file: 'harness-orchestration.html', title: '组织模型、软件与智能体', required: ['不是一个大模型回答问题', '图纸语义引擎', '反馈学习闭环', 'CAD/BIM 之上的 AI 设计审图层'] },
  { file: 'harness-workflow.html', title: '沉入原有业务流', required: ['不改变设计院原有流程', 'GIBIRA 增强工作流', '接入方式', 'CAD 可编辑闭环'] },
  { file: 'harness-deterministic-delivery.html', title: '只交付确定性结果', required: ['可复核、可执行、可归档', '问题定位', '条文依据', '复核闭环'] },
  { file: 'harness-process-intent-input.html', title: '意图输入', required: ['把复杂项目目标输入为可执行任务', '输入对象', '结构化任务卡'] },
  { file: 'harness-process-task-breakdown.html', title: '任务解构', required: ['拆成多个可执行工作包', '图纸处理任务', '交付任务'] },
  { file: 'harness-process-path-planning.html', title: '路径规划', required: ['最短、最准、最可交付', '审图路径', '协同路径'] },
  { file: 'harness-process-tool-dispatch.html', title: '工具调度', required: ['动态调用模型、软件和智能体', '需要理解图纸时', '需要交付成果时'] },
  { file: 'harness-process-workflow-entry.html', title: '流程切入', required: ['进入设计院原有 CAD/BIM 流程', '切入前', '切入后'] },
  { file: 'harness-process-performance-validation.html', title: '效能校验', required: ['真实项目数据校验效率', '节省约 65.9%', '复核通过'] },
  { file: 'harness-process-delivery.html', title: '成果交付', required: ['能进入项目现场的工程成果', 'CAD/DXF 可编辑成果', '反馈数据'] },
  { file: 'ecosystem-pilot.html', title: '设计院与工程试点', required: ['真实工程场景出发', '真实图纸样本', 'ROI 报告沉淀'] },
  { file: 'ecosystem-university.html', title: '高校共研资源', required: ['连接高校科研', '算法共研', '人才培养'] },
  { file: 'ecosystem-global.html', title: '海外学术与技术共建', required: ['引入全球 AI', '矢量图生成与编辑', '国际研发协同'] },
  { file: 'ecosystem-media.html', title: '产业传播与场景协同', required: ['让技术能力进入更复杂的产业场景', '标杆案例传播', '品牌资产沉淀'] },
];

const pages = [
  {
    file: 'index.html',
    title: '幻醒科技 GIBIRA',
    required: [
      'Harness 驾驭系统',
      'AI Harness 驾驭系统',
      '幻醒科技 GIBIRA 的核心',
      '项目验证与共建生态',
      '高校共研资源',
      '核心团队成员',
      '研发团队成员',
      '合作研发实验室',
      '学术与行业专家顾问',
      'Joan Rodriguez Ph.D',
      'Saverio Perugini Ph.D',
      'James Buckley Ph.D',
      '王茹 Ph.D',
      '张宗良',
      'GIBIRA 核心项目',
      '启枢、蜂聚、诺思、非因果律与巨灵',
      '与幻醒同行，把 AI 带进真实世界',
      '觉于核心，成于真实',
      '启枢AI',
      '蜂聚',
      '诺思',
      'ACAUSAL',
      '非因果律',
      'AXION',
      '具身智能与机器人作业系统',
    ],
  },
  {
    file: 'qishu-ai.html',
    title: '启枢AI',
    required: [
      '<h1>启枢AI</h1>',
      '幻醒科技｜GIBIRA AI',
      '启枢',
      'AI Harness（智能协同作业中枢）',
      '企业真正需要的AI',
      'Harness系统',
      '全屋定制自动拆单',
      'AI工作流激活指标',
      '企业部署与工作流激活费',
      '高阶工作流认证与效能升级费',
      '3—5家 POC / 2—3家付费',
      '巨灵｜Axion Robotics Systems',
    ],
  },
  {
    file: 'axion-os.html',
    title: 'AXION OS',
    required: ['巨灵装卸机器人', '面向具身机器人与物理作业调度的 AI Harness 应用场景', '机器人任务拆解', '多设备协同', '空间感知', '物理世界执行闭环', '历史任务回放'],
  },
  {
    file: 'north-ai.html',
    title: '诺思AI',
    required: ['AI+生理学', '西安交通大学', '面向知识密集型任务、教学协同和长期反馈的 AI 协同系统', '学习路径生成', '多角色协同', '长期学习记录', 'AI助教', '3D建模'],
  },
  {
    file: 'acausal.html',
    title: 'ACAUSAL',
    required: ['非因果律', '面向长期认知交互、多模态表达和个人与组织智能体体验的 AI 交互系统', '长期上下文', '多模态体验', '角色记忆', '情境反馈', 'ACAUSAL不进行医学诊断，不替代心理治疗，也不替代专业医疗服务'],
  },
  {
    file: 'fengju-ai.html',
    title: '蜂聚AI',
    required: ['短视频平台', '面向商业增长、电商内容和转化流程的 AI 增长协同系统', '多平台内容分发', '用户反馈收集', '转化路径优化', '活动复盘', '品牌内容资产沉淀'],
  },
  {
    file: 'jintanglang-cad.html',
    title: '金螳螂',
    required: ['CAD 平面图', '三维建模', '立面投影', '高斯泼溅', 'DXF', '金螳螂 CAD 三维建模是启枢空间设计能力的专项验证'],
  },
  ...harnessSecondaryPages,
];

const pageFiles = pages.map((page) => page.file);
for (const removedPath of ['financing.html', 'qishu-funding-workbook.html', 'assets/qishu-funding-use.xlsx']) {
  assert.ok(!fs.existsSync(path.join(root, removedPath)), `${removedPath} should be removed from the public site`);
}
const homepageProjectFiles = ['qishu-ai.html', 'fengju-ai.html', 'north-ai.html', 'acausal.html', 'axion-os.html'];
const alignedProjectPages = ['axion-os.html', 'north-ai.html', 'fengju-ai.html', 'acausal.html'];
const brandLogoPath = path.join(root, 'assets', 'gibira-wordmark-white.png');
const liquidEtherScriptPath = path.join(root, 'assets', 'liquid-ether.js');
const cadEngineeringCaseImages = Array.from({ length: 6 }, (_, index) => `assets/cad-engineering-case-${String(index + 1).padStart(2, '0')}.png`);
const qishuCoreImageAssets = [
  'assets/qishu-core-design-work.png',
  'assets/qishu-core-production-cost.png',
  'assets/qishu-core-spatial-work.png',
];
const qishuAddedVisualAssets = [
  'assets/qishu-pain-points-continuous-data-v3.png',
  'assets/qishu-drawing-six-side-updated.png',
  'assets/qishu-spatial-six-side-updated.png',
  'assets/qishu-scene-building-flow.png',
  'assets/qishu-scene-industrial-space-v2.png',
];
const qishuOrderDemoAssets = [
  'assets/qishu-demo-cabinet-recognition.png',
  'assets/qishu-demo-panel-splitting.png',
  'assets/qishu-demo-rule-matching.png',
  'assets/qishu-demo-production-output.png',
];
const qishuNumberedModuleAssets = [
  ...qishuCoreImageAssets,
  'assets/qishu-drawing-case-cad-to-model.png',
  'assets/qishu-drawing-case-plan-to-elevation.png',
  'assets/qishu-drawing-six-side-updated.png',
  'assets/qishu-spatial-six-side-updated.png',
  'assets/qishu-spatial-case-dxf-output.png',
  'assets/qishu-spatial-case-ai-parsing.png',
  'assets/qishu-spatial-case-auto-delivery.png',
];
const qishuOpportunityModelingAssets = Array.from(
  { length: 6 },
  (_, index) => `assets/qishu-opportunity-modeling-${String(index + 1).padStart(2, '0')}.png`,
);
const ecosystemLogoAssets = [
  ['assets/logo-scegc-no1.png', '陕建一建'],
  ['assets/logo-cta-town-design.png', 'CTA城镇设计'],
  ['assets/logo-xauat.jpg', '西安建筑科技大学'],
  ['assets/logo-xupt.png', '西安邮电大学'],
  ['assets/logo-xian-jiaotong.svg', '西安交通大学'],
  ['assets/logo-eurasia-university.jpeg', '西安欧亚学院'],
  ['assets/logo-university-dayton.svg', '美国戴顿大学'],
  ['assets/logo-carnegie-mellon.svg', '美国卡内基梅隆大学'],
  ['assets/logo-quiver-ai.png', 'Quiver AI'],
];
const collaborativeTeamHoverImages = [
  'assets/team-hao-yu-hover.png',
  'assets/team-shen-ju-hover.png',
  'assets/team-tam-nguyen-hover.png',
  'assets/team-joan-rodriguez-hover.png',
  'assets/team-saverio-perugini-hover.png',
  'assets/team-james-buckley-hover.png',
];

assert.ok(fs.existsSync(brandLogoPath), 'the transparent white GIBIRA wordmark asset should exist');
assert.ok(fs.existsSync(liquidEtherScriptPath), 'the LiquidEther React Bits background module should exist');
const liquidEtherScript = fs.existsSync(liquidEtherScriptPath) ? fs.readFileSync(liquidEtherScriptPath, 'utf8') : '';
assert.match(liquidEtherScript, /document\.querySelectorAll\('\[data-liquid-ether-bg\]'\)/, 'LiquidEther module should target the Qishu hero mount');
assert.match(liquidEtherScript, /three@0\.160\.0\/build\/three\.module\.js/, 'LiquidEther module should load the Three dependency as an ES module');
assert.match(liquidEtherScript, /colors: \['#010103', '#EF4444', '#EAB308'\]/, 'LiquidEther module should use the supplied React Bits color palette');
assert.match(liquidEtherScript, /cursorSize: 245,/, 'LiquidEther cursor field should be widened for a longer Qishu hero effect');
assert.match(liquidEtherScript, /autoResumeDelay: 900,/, 'LiquidEther auto motion should resume quickly enough for the longer tail to be visible on first screen');
assert.match(liquidEtherScript, /vec2 stretchedDelta = vec2\(delta\.x \* 0\.42, delta\.y \* 1\.04\);/, 'LiquidEther shader should stretch the field horizontally');
assert.match(liquidEtherScript, /float field = exp\(-dot\(stretchedDelta, stretchedDelta\)/, 'LiquidEther field should use the stretched distance for a longer effect');
assert.match(liquidEtherScript, /vec2 wakeDirection = normalize\(mix\(vec2\(0\.86, -0\.22\), normalize\(uPointerVelocity \+ vec2\(0\.001\)\), velocityWeight\)\);/, 'LiquidEther shader should add a directional wake for a longer tail');
assert.match(liquidEtherScript, /wakeLength \* wakeLength \/ max\(radius \* radius \* 14\.0, 0\.0001\)/, 'LiquidEther wake should keep a longer directional falloff');
assert.match(liquidEtherScript, /field = max\(field, wake \* 0\.9\);/, 'LiquidEther wake should extend the visible field without turning the whole hero bright');
for (const imagePath of cadEngineeringCaseImages) {
  assert.ok(fs.existsSync(path.join(root, imagePath)), `${imagePath} should exist for the homepage Engineering Cases module`);
}
for (const imagePath of [...new Set([...qishuNumberedModuleAssets, ...qishuOpportunityModelingAssets, ...qishuAddedVisualAssets])]) {
  assert.ok(fs.existsSync(path.join(root, imagePath)), `${imagePath} should exist for the Qishu visual modules`);
}
for (const imagePath of qishuOrderDemoAssets) {
  assert.ok(fs.existsSync(path.join(root, imagePath)), `${imagePath} should exist for the four-stage order demo`);
}
for (const [imagePath] of ecosystemLogoAssets) {
  assert.ok(fs.existsSync(path.join(root, imagePath)), `${imagePath} should exist for the homepage co-build LogoLoop`);
}
for (const imagePath of collaborativeTeamHoverImages) {
  assert.ok(fs.existsSync(path.join(root, imagePath)), `${imagePath} should exist for collaborative team hover backgrounds`);
}

for (const page of pages) {
  const htmlPath = path.join(root, page.file);
  assert.ok(fs.existsSync(htmlPath), `${page.file} should exist`);

  const html = fs.readFileSync(htmlPath, 'utf8');
  const visibleMarkup = html
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '');
  assert.doesNotMatch(
    visibleMarkup,
    /融资|募资|投资人|投资者|资金用途|融资金额|融资轮次|融资进度|天使轮|种子轮|Pre-A|战略投资|fundrais|investor|funding/i,
    `${page.file} should not expose financing or investor content`,
  );
  assert.doesNotMatch(
    visibleMarkup,
    /financing\.html|qishu-funding-workbook\.html|qishu-funding-use\.xlsx|#funding-use|融资展示/,
    `${page.file} should not link to removed financing routes or assets`,
  );
  assert.match(html, /<main class="site-main">/, `${page.file} should use the shared site layout`);
  if (page.file === 'index.html') {
    assert.match(html, /has-profile-hover-image/, 'Homepage collaborative team cards should opt into hover-photo backgrounds');
    for (const imagePath of collaborativeTeamHoverImages) {
      assert.match(html, new RegExp(imagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${imagePath} should be referenced by homepage team cards`);
    }
  }
  if (page.file === 'qishu-ai.html') {
    for (const imagePath of qishuOrderDemoAssets) {
      assert.match(html, new RegExp(imagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${imagePath} should be placed in the matching order-demo module`);
    }
    assert.match(html, /\.qishu-demo-slot__flow img \{[\s\S]*?position: absolute;[\s\S]*?inset: 0;[\s\S]*?object-fit: cover;/, 'order-demo images should fill the existing modules without changing their layout size');
  }
  assert.match(html, /<body class="is-loading">/, `${page.file} should lock scrolling while the loading screen is visible`);
  assert.match(html, /<div class="site-loader site-loader--loading" data-site-loader aria-live="polite" aria-label="GIBIRA 正在加载中">/, `${page.file} should include the imported loading screen shell`);
  assert.match(html, /<div class="site-loader__text"><span>G<\/span><span>I<\/span><span>B<\/span><span>I<\/span><span>R<\/span><span>A<\/span><span style="margin-right:0\.4em"> <\/span><span>正<\/span><span>在<\/span><span>加<\/span><span>载<\/span><span>中<\/span><\/div>/, `${page.file} should reveal the requested loading copy letter by letter`);
  assert.match(html, /\.site-loader \{\n    position: fixed;\n    inset: 0;/, `${page.file} should style the loading screen as a full viewport overlay`);
  assert.match(html, /\.site-loader__dot \{[\s\S]*?background: #EF4444;[\s\S]*?animation: siteLoaderBounce 1s linear infinite;/, `${page.file} should recolor the imported loader dot to red`);
  assert.match(html, /\.site-loader__shadow \{[\s\S]*?background-color: #EF4444;[\s\S]*?box-shadow: 0 4px 22px 0 rgba\(239,68,68,\.82\);/, `${page.file} should use a red loading shadow instead of the source cyan`);
  assert.match(html, /const loader = document\.querySelector\('\[data-site-loader\]'\)/, `${page.file} should initialize the loading screen behavior`);
  const expectedLoaderTiming = page.file === 'index.html'
    ? /const minDuration = reduceMotion \? 0 : 80;/
    : /const minDuration = reduceMotion \? 180 : 650;/;
  assert.match(html, expectedLoaderTiming, `${page.file} should keep its approved loader timing`);
  const expectedRevealObserver = page.file === 'index.html'
    ? /threshold: 0\.01,[\s\S]*?rootMargin: '0px 0px -14% 0px'/
    : /threshold: 0\.08,[\s\S]*?rootMargin: '0px 0px -4% 0px'/;
  assert.match(html, expectedRevealObserver, `${page.file} should preserve its approved reveal observer settings`);
  assert.match(html, /document\.body\.classList\.remove\('is-loading'\)/, `${page.file} should restore page scrolling after the loading screen exits`);
  assert.match(html, /window\.__gibiraShowLoader/, `${page.file} should expose the shared navigation loading transition`);
  assert.match(html, /document\.addEventListener\('click',[\s\S]*?closest\('a\[href\]'\)[\s\S]*?__gibiraShowLoader/, `${page.file} should show the loader before internal page navigation`);
  assert.doesNotMatch(html, /beforeunload[\s\S]{0,500}scrollTo\(0, 0\)/, `${page.file} should not flash the old page hero by forcing scroll to the top during unload`);
  assert.doesNotMatch(html, /styles_wrapper__T3DMI|styles_loader__hSjhZ|It all starts with a spark|#00ffc2|#20e7b7/, `${page.file} should not copy the source project's page content or cyan loader tokens`);
  assert.match(html, /\/\* Mobile containment pass \*\//, `${page.file} should include the final mobile containment override`);
  assert.match(html, /@media \(max-width: 900px\) \{[\s\S]*?\.harness-detail-section \.harness-card-list \.card-grid,[\s\S]*?\.harness-detail-section \.process-flow,[\s\S]*?grid-template-columns: 1fr !important;/, `${page.file} should force late Harness grids back to one column on mobile`);
  assert.match(html, /\.qishu-data-image--flywheel img,[\s\S]*?\.qishu-data-image--loop img \{[\s\S]*?width: 100% !important;[\s\S]*?max-width: 100% !important;/, `${page.file} should scale Qishu data images into the mobile viewport`);
  assert.match(html, /\.team-profile-row \{[\s\S]*?grid-template-columns: 1fr !important;[\s\S]*?\.team-profile-card,[\s\S]*?\.pc-card-wrapper \{[\s\S]*?width: 100% !important;/, `${page.file} should stack team profile cards inside the mobile viewport`);
  assert.match(html, /\.qishu-revenue-chart__labels \{[\s\S]*?position: static !important;[\s\S]*?grid-template-columns: 1fr !important;/, `${page.file} should stack Qishu revenue labels instead of squeezing them into narrow mobile columns`);
  assert.match(html, /\.home-hero \.hero-title \{[\s\S]*?max-width: min\(100%, 1800px\);[\s\S]*?font-size: clamp\(72px, 8\.4vw, 156px\);/, `${page.file} should keep the homepage hero title inside a wider non-clipping container`);
  assert.match(html, /\.vertical-scroll-panel > \.scroll-float:not\(\.scroll-float--inline\) \{[\s\S]*?width: min\(calc\(100vw - var\(--section-x\) \* 2\), 1800px\);[\s\S]*?font-size: clamp\(56px, 6\.8vw, 126px\);/, `${page.file} should keep large homepage section titles inside the viewport width`);
  assert.match(html, /\.vertical-scroll-panel \.harness-copy > \.scroll-float:not\(\.scroll-float--inline\) \{[\s\S]*?width: min\(calc\(100vw - var\(--section-x\) \* 2\), 1800px\);[\s\S]*?font-size: clamp\(40px, 4\.1vw, 82px\);/, `${page.file} should use a narrower desktop scale for long Harness titles so their final characters are not clipped`);
  if (page.file !== 'index.html') {
    assert.match(html, /\.page-qishu-ai \.qishu-wide-image figcaption,[\s\S]*?\.page-qishu-ai \.qishu-opportunity-carousel__slide figcaption \{[\s\S]*?position: static !important;[\s\S]*?margin-top: 10px;/, `${page.file} should place Qishu mobile image captions below images instead of covering them`);
    assert.match(html, /\.page-qishu-ai \.qishu-revenue-detail-table table \{[\s\S]*?display: block !important;[\s\S]*?\.page-qishu-ai \.qishu-revenue-detail-table tr \{[\s\S]*?display: grid !important;[\s\S]*?grid-template-columns: minmax\(0, 1fr\);/, `${page.file} should turn the Qishu mobile revenue detail table into readable stacked rows`);
  }
  const magicRingsMount = /<div class="magic-rings-bg" data-magic-rings-bg aria-hidden="true"><\/div>/;
  const faultyTerminalMount = /<div class="faulty-terminal-bg" data-faulty-terminal-bg aria-hidden="true"><\/div>/;
  const dotFieldMount = /<div class="dot-field-bg" data-dot-field-bg aria-hidden="true"><\/div>/;
  const floatingLinesMount = /<div class="floating-lines-bg" data-floating-lines-bg aria-hidden="true"><\/div>/;
  const gridScanMount = /<div class="grid-scan-bg" data-grid-scan-bg aria-hidden="true"><\/div>/;
  const liquidEtherMount = /<div class="liquid-ether-bg" data-liquid-ether-bg aria-hidden="true"><\/div>/;
  const galaxyFieldMount = /<div class="galaxy-field-bg" data-galaxy-bg aria-hidden="true"><\/div>/;
  const rippleGridMount = /<div class="ripple-grid-bg" data-ripple-grid-bg aria-hidden="true"><\/div>/;
  assert.match(html, /<script type="module" src="assets\/liquid-ether\.js"><\/script>/, `${page.file} should include the LiquidEther module loader`);
  if (page.file === 'qishu-ai.html') {
    assert.match(html, magicRingsMount, 'Integrated Qishu page should use the financing BP MagicRings hero background');
    assert.match(html, /<div class="page-shell page-qishu-ai">/, 'Integrated Qishu page should keep the existing Qishu route shell');
    assert.match(html, /<section class="financing-section financing-hero-section" id="overview" data-financing-section>/, 'Integrated Qishu page should replace the old product hero with the financing-style hero');
    assert.match(html, /<a class="button primary" href="#qishu-product" data-magnetic>查看产品能力<\/a>/, 'Integrated Qishu hero should link to product capability section');
    assert.match(html, /<a class="button secondary" href="#commercial-progress" data-magnetic>查看商业进展<\/a>/, 'Integrated Qishu hero should link to commercial progress');
    assert.match(html, /<a class="button secondary" href="mailto:ys020129@163\.com" data-magnetic>联系我们<\/a>/, 'Integrated Qishu hero should keep a contact CTA');
    const qishuSectionIds = [
      'overview',
      'opportunity',
      'commercial-priority',
      'pain-points',
      'harness',
      'qishu-product',
      'workflow',
      'drawing-intelligence',
      'custom-order',
      'decoration-business',
      'cost-management',
      'spatial-canvas',
      'validation',
      'commercial-progress',
      'revenue-model',
      'market-entry',
      'market-scale',
      'data-flywheel',
      'team-execution',
      'risk-control',
      'cross-scenario',
      'contact',
    ];
    for (const id of qishuSectionIds) {
      assert.match(html, new RegExp(`id="${id}"`), `Integrated Qishu page should include #${id}`);
    }
    assert.strictEqual((html.match(/data-financing-section/g) || []).length, 22, 'Integrated Qishu page should keep the remaining 22 product and business sections');
    assert.match(html, /<section class="financing-section financing-hero-section" id="overview"[\s\S]*?<h1>启枢AI<\/h1>/, 'Integrated Qishu hero headline should keep the concise product name');
    assert.match(html, /AI 矢量线段模型与 3D 矢量模型/, 'Integrated Qishu hero should state the two model foundations');
    assert.match(html, /class="qishu-performance-summary reveal-up"[\s\S]*65\.9%[\s\S]*72\.0%[\s\S]*3—5家 POC \/ 2—3家付费[\s\S]*CAD\/BIM 之上的 AI 作业层/, 'Integrated Qishu hero should retain the performance summary');
    assert.match(html, /18个月客户目标[\s\S]*3—5家 POC \/ 2—3家付费/, 'Integrated Qishu hero summary should use the updated 18-month customer target');
    assert.doesNotMatch(html, /12[ 个]个月(?:客户目标|关键验证|验收)/, 'Integrated Qishu page should not retain the outdated 12-month verification wording');
    assert.match(html, /id="commercial-priority"[\s\S]*商业化优先级[\s\S]*建筑工程图纸与智能审查[\s\S]*工程造价与全屋定制拆单[\s\S]*工业空间、管线、设备与机器人/, 'Integrated Qishu page should separate current, adjacent, and long-term commercialization priorities');
    assert.doesNotMatch(html, /<h1>让AI从“生成内容”，走向“完成工作”<\/h1>/, 'Integrated Qishu hero should not keep the old long financing headline');
    assert.match(html, /--site-rail: clamp\(32px, 7vw, 140px\);/, 'Qishu shared rail should be defined for header and financing sections');
    assert.match(html, /\.site-header \{[\s\S]*?padding: 0 var\(--site-rail\);/, 'Header should use the shared site rail for logo and return-action alignment');
    assert.match(html, /\.page-qishu-ai \{[\s\S]*?scroll-snap-type: y proximity;/, 'Integrated Qishu route should use the financing BP split-screen rhythm');
    assert.match(html, /\.page-qishu-ai \{[\s\S]*?--financing-rail: var\(--site-rail\);/, 'Integrated Qishu sections should align their adaptive rail with the navigation rail');
    assert.match(html, /\.financing-section \{[\s\S]*?min-height: 100svh;[\s\S]*?width: calc\(100vw - var\(--financing-rail\) \* 2\);[\s\S]*?max-width: none;/, 'Integrated Qishu sections should use the financing BP full-width rail');
    assert.match(html, /\.financing-section \{[\s\S]*?grid-template-columns: 1fr;[\s\S]*?justify-items: center;[\s\S]*?text-align: center;/, 'Integrated Qishu sections should stack title and visual content vertically');
    assert.match(html, /\.financing-section__copy h2 \{[\s\S]*?text-align: center;[\s\S]*?text-wrap: pretty;[\s\S]*?word-break: keep-all;/, 'Integrated Qishu titles should use Chinese-friendly wrapping to avoid orphan words');
    assert.match(html, /@media \(min-width: 1400px\) \{[\s\S]*?\.page-qishu-ai \.financing-section__copy h2,[\s\S]*?white-space: nowrap;/, 'Integrated Qishu desktop titles and lead copy should stay on one line when the viewport has room');
    assert.match(html, /id="workflow"[\s\S]*?<h2 class="financing-section__title financing-section__title--stacked"><span>启枢如何工作<\/span><span>输入资料、理解对象、调度任务、输出结果、人工复核<\/span><\/h2>/, 'Integrated Qishu workflow title should render as two intentional centered lines');
    assert.match(html, /#workflow \.financing-section__title--stacked \{[\s\S]*?display: grid;[\s\S]*?justify-items: center;[\s\S]*?white-space: normal;[\s\S]*?max-width: min\(1500px, 100%\);/, 'Integrated Qishu workflow title should stay centered within the viewport');
    assert.match(html, /#workflow \.financing-section__title--stacked span \+ span \{[\s\S]*?font-size: clamp\(14px, 1\.95vw, 38px\);[\s\S]*?white-space: nowrap;/, 'Integrated Qishu workflow subtitle should fit on its own responsive line');
    assert.match(html, /\.financing-contact-section \{[\s\S]*?grid-template-columns: 1fr;[\s\S]*?align-content: center;/, 'Integrated Qishu contact CTA should stack content and cards to avoid headline overlap');
    assert.match(html, /\.financing-contact-section \.financing-section__copy \{[\s\S]*?text-align: center;/, 'Integrated Qishu contact CTA should center its copy');
    assert.match(html, /\.financing-contact-section \.financing-section__visual \{[\s\S]*?width: min\(1120px, 100%\);/, 'Integrated Qishu contact cards should sit below the headline within a bounded row');
    assert.match(html, /\.financing-section__copy \.section-lead,[\s\S]*?max-width: min\(1380px, 100%\);[\s\S]*?-webkit-line-clamp: 2;/, 'Integrated Qishu small copy should use a wider text measure before clamping');
    for (const imagePath of qishuNumberedModuleAssets) {
      assert.match(html, new RegExp(imagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${imagePath} should be referenced by the Qishu capability cards`);
    }
    for (const imagePath of qishuOpportunityModelingAssets) {
      assert.match(html, new RegExp(imagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${imagePath} should be referenced by the Qishu opportunity carousel`);
    }
    for (const imagePath of qishuAddedVisualAssets) {
      assert.match(html, new RegExp(imagePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${imagePath} should be referenced by the integrated Qishu visual modules`);
    }
    assert.match(html, /class="qishu-opportunity-carousel"/, 'Integrated Qishu opportunity page should include the new modeling carousel');
    assert.match(html, /\.qishu-opportunity-carousel \{[\s\S]*?width: 100%;[\s\S]*?max-width: min\(1800px, 100%\);/, 'Integrated Qishu opportunity carousel should stretch to the full visual rail');
    assert.match(html, /@keyframes qishuOpportunityCarousel/, 'Integrated Qishu opportunity carousel should define its looping animation');
    assert.match(html, /class="qishu-image-strip qishu-image-strip--wide/, 'Integrated Qishu drawing module should use image expression');
    assert.match(html, /class="qishu-wide-image qishu-wide-image--pain reveal-scale"/, 'Integrated Qishu pain-points page should add the supplied pain-point image under the table');
    assert.match(html, /id="harness"[\s\S]*assets\/qishu-scene-building-flow\.png[\s\S]*id="cost-management"/, 'Integrated Qishu scene one should replace the investor note with the supplied full-width image');
    assert.doesNotMatch(html, /投资人结论：建筑图纸是第一批商业化验证入口/, 'Integrated Qishu scene one should remove the old investor conclusion text');
    assert.match(html, /id="cross-scenario"[\s\S]*场景五：工业设计、工业管线与空间作业[\s\S]*assets\/qishu-scene-industrial-space-v2\.png[\s\S]*id="validation"/, 'Integrated Qishu scene five should keep the supplied full-width industrial-space image');
    assert.match(html, /class="qishu-compare-chart/, 'Integrated Qishu validation page should use comparison charts');
    assert.match(html, /class="qishu-funnel/, 'Integrated Qishu commercial progress should use a funnel chart');
    assert.match(html, /class="financing-section qishu-revenue-section" id="revenue-model"/, 'Integrated Qishu revenue page should preserve the revenue-model anchor');
    assert.match(html, /收入模型：验证切入，持续扩张/, 'Integrated Qishu revenue page should include the Page 1 overview headline');
    assert.match(html, /单客户价值（ARPU）扩张路径/, 'Integrated Qishu revenue page should include the ARPU growth chart');
    assert.match(html, /class="qishu-revenue-chart__line"/, 'Integrated Qishu revenue page should render the native SVG growth curve');
    assert.doesNotMatch(html, /qishu-revenue-chart__arrow/, 'Integrated Qishu revenue growth chart should not render the extra arrowhead strokes');
    assert.match(html, /class="qishu-revenue-icon qishu-revenue-icon--trend qishu-revenue-icon--metric"/, 'Integrated Qishu revenue KPI cards should include native metric icons');
    assert.match(html, /成熟客户目标收入结构（测算）/, 'Integrated Qishu revenue page should label the composition chart as a target model');
    assert.match(html, /class="qishu-revenue-donut"/, 'Integrated Qishu revenue page should render a native donut chart');
    assert.match(html, /持续收入引擎/, 'Integrated Qishu revenue page should include the recurring revenue engine');
    assert.match(html, /class="qishu-revenue-icon qishu-revenue-icon--coverage qishu-revenue-icon--engine"/, 'Integrated Qishu revenue engine should include node icons');
    assert.match(html, /收入流向（从切入到持续）/, 'Integrated Qishu revenue page should include the revenue flow visual');
    assert.match(html, /<img src="assets\/qishu-revenue-flow-card\.png" alt="收入流向（从切入到持续）图示" \/>/, 'Integrated Qishu revenue flow should use the supplied image asset');
    assert.doesNotMatch(html, /class="qishu-revenue-sankey__stage"/, 'Integrated Qishu revenue flow should replace the native Sankey markup with the image asset');
    assert.match(html, /\.qishu-revenue-analytics \{[\s\S]*?grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);[\s\S]*?align-items: stretch;/, 'Integrated Qishu revenue analytics should keep all three bottom cards aligned');
    assert.match(html, /\.qishu-revenue-sankey--image img \{[\s\S]*?width: min\(510px, 100%\);/, 'Integrated Qishu revenue flow image should stay at its native width to avoid blur');
    assert.match(html, /收入结构明细：平台 \+ 模块 \+ 用量 \+ 行业包/, 'Integrated Qishu revenue page should include the Page 2 detail headline');
    assert.match(html, /class="qishu-revenue-icon qishu-revenue-icon--shield qishu-revenue-icon--type"/, 'Integrated Qishu revenue type strip should include revenue-type icons');
    assert.match(html, /高阶工作流认证与效能升级费/, 'Integrated Qishu revenue detail table should include all seven revenue rows');
    assert.match(html, /单客户 LTV 扩张目标[\s\S]*6x\+[\s\S]*经常性收入占比目标[\s\S]*80%\+[\s\S]*模块渗透目标[\s\S]*3个以上模块[\s\S]*年化留存率目标[\s\S]*90%\+/, 'Integrated Qishu revenue page should label all unproven KPI values as targets');
    assert.match(html, /成熟客户目标模型[\s\S]*以实际合同、系统记录、项目验收与续费数据为准/, 'Integrated Qishu revenue page should disclose the target-model evidence boundary');
    assert.match(html, /收费逻辑[\s\S]*收入属性[\s\S]*触发条件[\s\S]*客户为何付费/, 'Integrated Qishu revenue table should disclose the full charging logic');
    assert.match(html, /class="qishu-revenue-row-number">01<\/span>\s*<i class="qishu-revenue-icon qishu-revenue-icon--shield qishu-revenue-icon--row"/, 'Integrated Qishu revenue table rows should include row icons');
    assert.match(html, /\.qishu-revenue-detail-grid \{[\s\S]*?grid-template-columns: minmax\(0, 1fr\);/, 'Integrated Qishu revenue detail table should use the full content width');
    assert.match(html, /\.qishu-revenue-conclusions \{[\s\S]*?display: grid;[\s\S]*?grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/, 'Integrated Qishu core conclusions should sit below the table in a balanced three-column row');
    assert.match(html, /\.qishu-revenue-conclusions h3 \{[\s\S]*?grid-column: 1 \/ -1;/, 'Integrated Qishu conclusion heading should span the full row');
    assert.match(html, /\.qishu-revenue-detail-table td:first-child \{[\s\S]*?display: table-cell;/, 'Integrated Qishu revenue table should preserve table-cell layout instead of stretching each row with grid sizing');
    assert.match(html, /\.qishu-revenue-detail-table th:nth-child\(1\) \{ width: 24%; \}[\s\S]*?th:nth-child\(5\) \{ width: 21%; \}/, 'Integrated Qishu revenue table should define all five column widths');
    assert.match(html, /三大核心结论/, 'Integrated Qishu revenue page should include investor conclusions');
    assert.match(html, /启枢收入模型 =/, 'Integrated Qishu revenue page should include the revenue formula strip');
    assert.match(html, /class="qishu-revenue-icon qishu-revenue-icon--layers qishu-revenue-icon--formula"/, 'Integrated Qishu revenue formula should include a model icon');
    assert.match(html, /商业价值总结/, 'Integrated Qishu revenue page should use a neutral commercial value summary');
    assert.match(html, /class="qishu-revenue-icon qishu-revenue-icon--users qishu-revenue-icon--note"/, 'Integrated Qishu revenue investor summary should include an audience icon');
    assert.match(html, /class="financing-section qishu-data-flywheel-section" id="data-flywheel"/, 'Integrated Qishu data flywheel should preserve the data-flywheel anchor with the new section shell');
    assert.match(html, /P20\.1｜数据飞轮 \/ DATA FLYWHEEL/, 'Integrated Qishu data flywheel should include the P20.1 overview page marker');
    assert.match(html, /系统为什么会越来越强：<br>真实项目数据沉淀为<span>矢量模型、规则库和交付经验<\/span>/, 'Integrated Qishu data flywheel should use the data flywheel headline');
    assert.match(html, /class="qishu-flywheel qishu-data-flywheel-graphic qishu-data-image qishu-data-image--flywheel/, 'Integrated Qishu data flywheel should use the supplied image visual');
    assert.match(html, /src="assets\/qishu-income-data-flywheel\.png"/, 'Integrated Qishu data flywheel should render the supplied flywheel image asset');
    assert.match(html, /客户使用更多模块/, 'Integrated Qishu data flywheel should include the eighth flywheel node');
    assert.match(html, /P20\.2｜数据资产与闭环路径 \/ DATA ASSETS & VALUE LOOP/, 'Integrated Qishu data flywheel should include the P20.2 asset page marker');
    assert.match(html, /产生更多真实项目数据/, 'Integrated Qishu data flywheel should close the loop with the ninth data-generation node');
    assert.match(html, /\.qishu-data-assets-grid \{[\s\S]*?align-items: stretch;/, 'Integrated Qishu data asset grid should align the table height with the loop visual');
    assert.match(html, /\.qishu-data-assets-table \{[\s\S]*?min-height: clamp\(300px, 23vw, 400px\);/, 'Integrated Qishu data asset table should match the loop visual height');
    assert.match(html, /支撑 3D 空间、工业布局、MR 复核等能力/, 'Integrated Qishu data asset table should include the spatial data business value');
    assert.match(html, /<strong>价值总结：<\/strong>/, 'Integrated Qishu data flywheel should include a neutral value conclusion strip');
    assert.doesNotMatch(html, /启枢核心模块研发<\/td><td>95<\/td><td>17\.6%<\/td><td>50<\/td><td>35<\/td><td>10/, 'Integrated Qishu page should not render the detailed workbook table inside the funding section');
    assert.match(html, /大型装饰企业.*建筑设计院.*工程总包企业.*全屋定制企业.*工程造价机构/s, 'Integrated Qishu commercial section should broaden customer directions to pan-industrial customers');
    assert.match(html, /启枢是当前核心商业化产品。/, 'Integrated Qishu competition section should keep Qishu as the main commercialization product');
    assert.match(html, /展示 AI Harness 在不同任务结构中的场景化能力/, 'Integrated Qishu competition section should describe the broader portfolio positively');
    for (const [href, kicker, title] of [
      ['qishu-ai.html', '商业化主线', '启枢'],
      ['axion-os.html', '机器人', '巨灵｜Axion Robotics Systems'],
      ['north-ai.html', '教育', '诺思'],
      ['fengju-ai.html', '增长', '蜂聚'],
      ['acausal.html', '认知交互', 'ACAUSAL'],
    ]) {
      assert.match(
        html,
        new RegExp(`<a class="financing-card reveal-scale" href="${href}"[\\s\\S]*<span>${kicker}</span>[\\s\\S]*<h3>${title}</h3>`),
        `Integrated Qishu cross-scenario card should link ${title} to ${href}`,
      );
    }
    assert.match(html, /工程矢量智能作业平台/, 'Integrated Qishu page should use the new engineering vector intelligence positioning');
    assert.match(html, /AI 矢量线段模型/, 'Integrated Qishu page should explain the AI vector-line model');
    assert.match(html, /3D 矢量模型/, 'Integrated Qishu page should explain the 3D vector model');
    assert.match(html, /竞争格局：不替代 CAD\/BIM，而是做其上的 AI 作业层/, 'Integrated Qishu page should include the new competition section');
    assert.match(html, /<strong class="financing-brand-slogan">觉于核心<\/strong>/, 'Integrated Qishu hero slogan should remove the trailing punctuation');
    assert.doesNotMatch(html, /<strong class="financing-brand-slogan">觉于核心。<\/strong>/, 'Integrated Qishu hero slogan should not include a Chinese full stop');
    assert.match(html, /样本范围[\s\S]*当前主要来自建筑工程图纸/, 'Integrated Qishu validation section should disclose the current evidence scope');
    assert.match(html, /id="validation"[\s\S]*项目\/样本[\s\S]*样本类型[\s\S]*基线口径[\s\S]*AI 介入范围[\s\S]*专业复核[\s\S]*结果[\s\S]*复现条件/, 'Integrated Qishu validation section should expose a diligence-ready evidence table');
    assert.match(html, /id="commercial-progress"[\s\S]*客户 A[\s\S]*客户 B[\s\S]*客户 C[\s\S]*客户 D[\s\S]*已完成动作[\s\S]*下一动作[\s\S]*预计金额\/预算[\s\S]*当前阻塞/, 'Integrated Qishu commercial section should expose an anonymized CRM pipeline');
    assert.match(html, /id="market-scale"[\s\S]*市场规模与收入推导[\s\S]*可服务客户池[\s\S]*验证漏斗[\s\S]*收入推导/, 'Integrated Qishu market section should use a qualitative funnel without invented TAM');
    assert.match(html, /id="team-execution"[\s\S]*团队执行分工[\s\S]*高溪涵[\s\S]*卢佩伦[\s\S]*许沧洲/, 'Integrated Qishu team section should use the disclosed operating team');
    assert.match(html, /id="risk-control"[\s\S]*关键风险与应对[\s\S]*数据与安全[\s\S]*准确率与责任边界[\s\S]*客户集中度/, 'Integrated Qishu risk section should pair material risks with mitigation');
    assert.match(html, /CAD\/BIM 工具[\s\S]*广联达\/BIM 平台[\s\S]*酷家乐\/三维家[\s\S]*传统人工审查[\s\S]*通用大模型[\s\S]*客户自建/, 'Integrated Qishu competition section should compare all six relevant alternative types');
    assert.match(html, /对手类型[\s\S]*客户为何使用[\s\S]*主要短板[\s\S]*启枢胜出条件/, 'Integrated Qishu competition table should explain customer choice and Qishu win conditions');
    assert.match(html, /id="drawing-intelligence"[\s\S]*assets\/qishu-building-industry-demo\.mp4[\s\S]*id="spatial-canvas"/, 'Integrated Qishu vector drawing section should include the building industry demo video');
    assert.match(html, /id="cost-management"[\s\S]*assets\/qishu-cost-management-demo\.mp4[\s\S]*id="custom-order"/, 'Integrated Qishu cost section should include the cost management demo video');
    assert.match(html, /<video class="qishu-demo-video" controls preload="none" playsinline data-lazy-video>[\s\S]*?<source data-src="assets\/qishu-building-industry-demo\.mp4" type="video\/mp4" \/>/, 'Integrated Qishu demo videos should defer network loading until they approach the viewport');
    assert.match(html, /const lazyVideos = Array\.from\(document\.querySelectorAll\('\[data-lazy-video\]'\)\)/, 'Integrated Qishu page should initialize viewport-based video loading');
    assert.match(html, /const preloadMargin = 360;[\s\S]*getBoundingClientRect\(\)[\s\S]*scheduleVideoCheck/, 'Integrated Qishu lazy video loader should validate the real viewport distance before requesting media');
    assert.match(html, /id="custom-order"[\s\S]*MODULE 03 DEMO[\s\S]*拆单与生产数据流程演示[\s\S]*id="decoration-business"/, 'Integrated Qishu custom-order section should retain a polished production-data demo slot');
    assert.doesNotMatch(html.match(/id="custom-order"[\s\S]*?id="decoration-business"/)?.[0] || '', /qishu-decoration-demo\.mp4/, 'Integrated Qishu custom-order section should no longer contain the decoration video');
    assert.match(html, /id="decoration-business"[\s\S]*场景四：装饰装修业务演示[\s\S]*空间方案理解[\s\S]*多风格表达[\s\S]*材料与构件关联[\s\S]*流程协同衔接[\s\S]*assets\/qishu-decoration-demo\.mp4[\s\S]*id="cross-scenario"/, 'Integrated Qishu scene four should own the decoration video and matching capability copy');
    assert.match(html, /id="drawing-intelligence"[\s\S]*这不是单纯的图纸展示，而是启枢从“看懂工程图纸”到“辅助生成可交付成果”的核心能力演示。/, 'Integrated Qishu drawing demo should use the expanded right-side copy');
    assert.match(html, /id="decoration-business"[\s\S]*装饰装修业务演示[\s\S]*系统可以在同一空间基础上识别墙体、门窗、柜体、家具和主要构件/, 'Integrated Qishu decoration demo should use the supplied scene-four copy');
    assert.match(html, /id="cost-management"[\s\S]*这一模块并不替代造价人员的专业判断，而是把重复识别、数量提取、数据整理和版本追踪前置给系统完成/, 'Integrated Qishu cost demo should use the expanded right-side copy');
    assert.match(html, /id="drawing-intelligence"[\s\S]*class="financing-flow financing-flow--seven"[\s\S]*原始图纸[\s\S]*最终图纸/, 'Integrated Qishu drawing workflow should show all 7 steps in one-row layout');
    assert.match(html, /id="cost-management"[\s\S]*class="financing-flow financing-flow--seven"[\s\S]*结构图纸[\s\S]*输出优化建议/, 'Integrated Qishu cost workflow should show all 7 steps in one-row layout');
    assert.match(html, /id="validation"[\s\S]*class="financing-card-grid financing-card-grid--seven"[\s\S]*总工作时间[\s\S]*最终错误率/, 'Integrated Qishu validation metrics should show all 7 cards in one-row layout');
    assert.strictEqual((html.match(/class="financing-flow financing-flow--seven"/g) || []).length, 2, 'Integrated Qishu page should use the seven-step flow layout in exactly the two requested workflow areas');
    assert.strictEqual((html.match(/class="financing-card-grid financing-card-grid--seven"/g) || []).length, 1, 'Integrated Qishu page should use the seven-card grid layout in exactly the requested metric area');
    assert.match(html, /\.financing-flow--seven \{[\s\S]*?grid-template-columns: repeat\(7, minmax\(0, 1fr\)\);/, 'Integrated Qishu page should define a 7-column workflow grid');
    assert.match(html, /\.financing-card-grid--seven \{[\s\S]*?grid-template-columns: repeat\(7, minmax\(0, 1fr\)\);/, 'Integrated Qishu page should define a 7-column metric card grid');
    assert.doesNotMatch(html, /<section class="section qishu-video-section vertical-scroll-panel" id="video-demo"/, 'Integrated Qishu page should remove the old standalone video second screen');
    assert.doesNotMatch(html, /视频待补充|预留演示位/, 'Integrated Qishu page should not show pending video placeholders');
    assert.doesNotMatch(html, /投资人视角|投资人结论|Investor View|Investor Insight|数据为示意|待补充|占位内容|暂无视频|其他项目只是验证Harness系统|当前板块用于|本模块用于|此处展示|尚未成熟|只是验证|能力不足|仍需证明|假设数据/, 'Integrated Qishu page should remove internal, negative, or investor-view labels');
    assert.doesNotMatch(html, /14 \/ P20 Financing Plan|02 \/ P6 Product Matrix|04A \/ CAD-to-Model Engine/, 'Integrated Qishu page should remove old Word/PPT marker sections');
    assert.doesNotMatch(html, />undefined</, 'Integrated Qishu page should not render undefined values into visible content');
    for (const forbidden of [
      'AI Harness驾驭系统',
      'AI Harness 驾驭系统',
      'Harness驾驭系统',
      'Harness 驾驭系统',
      'AI总指挥',
      'AI作业中枢',
      '中央驾驭系统',
      '修改说明',
      '修改原因',
      '对应投资人问题',
      '处理建议',
      '资金纪律',
      '投资人高频问答',
      '投资人理解',
      '对外核心话术',
      '资方问题',
      '来源假设',
      '尽调问题',
      '资方理解',
      '不做事项',
      '内部敏感假设',
      '为了回答投资人质疑',
      '【必须补充】',
      '【证明材料】',
      '【阶段标识】',
      '待补充',
      'David Skok',
      '完全实现',
      '行业唯一',
      '100%准确',
      '彻底替代人工',
      '尽调资料库',
    ]) {
      assert.doesNotMatch(html, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Integrated Qishu page should not expose forbidden wording: ${forbidden}`);
    }
    assert.doesNotMatch(html, faultyTerminalMount, 'Qishu AI hero should not use the AXION FaultyTerminal mount');
    assert.doesNotMatch(html, dotFieldMount, 'Qishu AI hero should not use the Fengju DotField mount');
    assert.doesNotMatch(html, floatingLinesMount, 'Integrated Qishu hero should not use the old FloatingLines mount');
    assert.doesNotMatch(html, gridScanMount, 'Integrated Qishu hero should not use the old GridScan mount');
    assert.doesNotMatch(html, liquidEtherMount, 'Integrated Qishu hero should no longer use the LiquidEther product-page mount');
    assert.doesNotMatch(html, galaxyFieldMount, 'Qishu AI hero should not use the ACAUSAL Galaxy mount');
    assert.doesNotMatch(html, rippleGridMount, 'Qishu AI hero should not use the North RippleGrid mount');
  } else if (page.file === 'axion-os.html') {
    assert.match(html, faultyTerminalMount, 'AXION OS hero should use the FaultyTerminal background mount');
    assert.doesNotMatch(html, magicRingsMount, 'AXION OS hero should replace the MagicRings mount');
    assert.doesNotMatch(html, dotFieldMount, 'AXION OS hero should not use the Fengju DotField mount');
    assert.doesNotMatch(html, floatingLinesMount, 'AXION OS hero should not use the Qishu FloatingLines mount');
    assert.doesNotMatch(html, gridScanMount, 'AXION OS hero should not use the Qishu GridScan mount');
    assert.doesNotMatch(html, liquidEtherMount, 'AXION OS hero should not use the Qishu LiquidEther mount');
    assert.doesNotMatch(html, galaxyFieldMount, 'AXION OS hero should not use the ACAUSAL Galaxy mount');
    assert.doesNotMatch(html, rippleGridMount, 'AXION OS hero should not use the North RippleGrid mount');
  } else if (page.file === 'fengju-ai.html') {
    assert.match(html, dotFieldMount, 'Fengju AI hero should use the DotField background mount');
    assert.doesNotMatch(html, magicRingsMount, 'Fengju AI hero should replace the MagicRings mount');
    assert.doesNotMatch(html, faultyTerminalMount, 'Fengju AI hero should not use the AXION FaultyTerminal mount');
    assert.doesNotMatch(html, floatingLinesMount, 'Fengju AI hero should not use the Qishu FloatingLines mount');
    assert.doesNotMatch(html, gridScanMount, 'Fengju AI hero should not use the Qishu GridScan mount');
    assert.doesNotMatch(html, liquidEtherMount, 'Fengju AI hero should not use the Qishu LiquidEther mount');
    assert.doesNotMatch(html, galaxyFieldMount, 'Fengju AI hero should not use the ACAUSAL Galaxy mount');
    assert.doesNotMatch(html, rippleGridMount, 'Fengju AI hero should not use the North RippleGrid mount');
  } else if (page.file === 'acausal.html') {
    assert.match(html, galaxyFieldMount, 'ACAUSAL hero should use the Galaxy background mount');
    assert.doesNotMatch(html, magicRingsMount, 'ACAUSAL hero should replace the MagicRings mount');
    assert.doesNotMatch(html, faultyTerminalMount, 'ACAUSAL hero should not use the AXION FaultyTerminal mount');
    assert.doesNotMatch(html, dotFieldMount, 'ACAUSAL hero should not use the Fengju DotField mount');
    assert.doesNotMatch(html, floatingLinesMount, 'ACAUSAL hero should not use the Qishu FloatingLines mount');
    assert.doesNotMatch(html, gridScanMount, 'ACAUSAL hero should not use the Qishu GridScan mount');
    assert.doesNotMatch(html, liquidEtherMount, 'ACAUSAL hero should not use the Qishu LiquidEther mount');
    assert.doesNotMatch(html, rippleGridMount, 'ACAUSAL hero should not use the North RippleGrid mount');
  } else if (page.file === 'north-ai.html') {
    assert.match(html, rippleGridMount, 'North AI hero should use the RippleGrid background mount');
    assert.doesNotMatch(html, magicRingsMount, 'North AI hero should replace the MagicRings mount');
    assert.doesNotMatch(html, faultyTerminalMount, 'North AI hero should not use the AXION FaultyTerminal mount');
    assert.doesNotMatch(html, dotFieldMount, 'North AI hero should not use the Fengju DotField mount');
    assert.doesNotMatch(html, floatingLinesMount, 'North AI hero should not use the Qishu FloatingLines mount');
    assert.doesNotMatch(html, gridScanMount, 'North AI hero should not use the Qishu GridScan mount');
    assert.doesNotMatch(html, liquidEtherMount, 'North AI hero should not use the Qishu LiquidEther mount');
    assert.doesNotMatch(html, galaxyFieldMount, 'North AI hero should not use the ACAUSAL Galaxy mount');
  } else {
    assert.match(html, magicRingsMount, `${page.file} should keep the MagicRings hero background mount`);
    assert.doesNotMatch(html, faultyTerminalMount, `${page.file} should not use the AXION-only FaultyTerminal mount`);
    assert.doesNotMatch(html, dotFieldMount, `${page.file} should not use the Fengju-only DotField mount`);
    assert.doesNotMatch(html, floatingLinesMount, `${page.file} should not use the Qishu-only FloatingLines mount`);
    assert.doesNotMatch(html, gridScanMount, `${page.file} should not use the Qishu-only GridScan mount`);
    assert.doesNotMatch(html, liquidEtherMount, `${page.file} should not use the Qishu-only LiquidEther mount`);
    assert.doesNotMatch(html, galaxyFieldMount, `${page.file} should not use the ACAUSAL-only Galaxy mount`);
    assert.doesNotMatch(html, rippleGridMount, `${page.file} should not use the North-only RippleGrid mount`);
  }
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-magic-rings-bg\]'\)\)/, `${page.file} should include the MagicRings background initializer`);
  const magicRingsStart = html.indexOf("const mounts = Array.from(document.querySelectorAll('[data-magic-rings-bg]'))");
  const faultyTerminalStart = html.indexOf("const mounts = Array.from(document.querySelectorAll('[data-faulty-terminal-bg]'))");
  assert.ok(magicRingsStart >= 0 && faultyTerminalStart > magicRingsStart, `${page.file} should keep MagicRings before FaultyTerminal`);
  const magicRingsBlock = html.slice(magicRingsStart, faultyTerminalStart);
  assert.doesNotMatch(magicRingsBlock, /galaxyConfig/, `${page.file} MagicRings initializer should not depend on Galaxy config`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-faulty-terminal-bg\]'\)\)/, `${page.file} should include the FaultyTerminal background initializer`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-floating-lines-bg\]'\)\)/, `${page.file} should include the FloatingLines background initializer`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-grid-scan-bg\]'\)\)/, `${page.file} should include the GridScan background initializer`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-dot-field-bg\]'\)\)/, `${page.file} should include the DotField background initializer`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-ripple-grid-bg\]'\)\)/, `${page.file} should include the RippleGrid background initializer`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-galaxy-bg\]'\)\)/, `${page.file} should include the Galaxy background initializer`);
  if (page.file === 'qishu-ai.html') {
    assert.match(html, /\.financing-hero-section \{/, 'Integrated Qishu page should inherit the financing hero section styling');
    assert.doesNotMatch(html, /class="hero liquid-ether-hero"/, 'Integrated Qishu page should not keep the old LiquidEther product hero');
  }
  if (page.file === 'north-ai.html') {
    assert.match(html, /\.hero\.ripple-grid-hero \{\n    overflow: hidden;\n  \}/, 'North AI RippleGrid background should be clipped to the hero');
    assert.match(html, /const rippleGridConfig = \{/, 'North AI should include the RippleGrid configuration');
    assert.match(html, /enableRainbow: false,\n    gridColor: '#EF4444',\n    rippleIntensity: 0\.05,\n    gridSize: 10,\n    gridThickness: 15,/, 'North AI RippleGrid should use the provided grid color, ripple, size, and thickness values');
    assert.match(html, /mouseInteraction: true,\n    mouseInteractionRadius: 1\.2,/, 'North AI RippleGrid should preserve the provided mouse interaction settings');
    assert.match(html, /window\.addEventListener\('pointermove', handlePointerMove, \{ passive: true \}\)/, 'North AI RippleGrid should track pointer movement for ripples');
  }
  if (page.file === 'fengju-ai.html') {
    assert.match(html, /\.hero\.dot-field-hero \{\n    overflow: hidden;\n  \}/, 'Fengju AI DotField background should be clipped to the hero to avoid a section seam');
    assert.match(html, /\.hero\.dot-field-hero \.dot-field-bg \{\n    inset: -8vh 0;\n    transform: translateY\(4vh\);/, 'Fengju AI DotField background should sit slightly lower in the hero');
    assert.match(html, /dotRadius: 3,\n    dotSpacing: 16,/, 'Fengju AI DotField background should use a sparser dot spacing');
    assert.match(html, /\.dot-field-bg \{[\s\S]*?filter: saturate\(1\.45\) brightness\(1\.34\) contrast\(1\.08\);/, 'Fengju AI DotField background should render brighter and more saturated');
    assert.match(html, /radial-gradient\(ellipse at 50% 52%, rgba\(0,0,0,0\) 0 42%, rgba\(0,0,0,\.28\) 72%, rgba\(0,0,0,\.72\) 100%\)/, 'Fengju AI DotField hero should darken only the outer edges');
    assert.match(html, /linear-gradient\(90deg, rgba\(0,0,0,\.58\), rgba\(0,0,0,0\) 18%, rgba\(0,0,0,0\) 82%, rgba\(0,0,0,\.58\)\)/, 'Fengju AI DotField hero should reduce full-width edge intensity');
  }
  if (page.file === 'acausal.html') {
    assert.match(html, /\.hero\.galaxy-hero::after \{/, 'ACAUSAL Galaxy hero should use a specific readable overlay');
    assert.match(html, /const galaxyConfig = \{/, 'ACAUSAL should include the Galaxy configuration');
    assert.match(html, /'precision highp float;'/, 'ACAUSAL Galaxy shader should use the React Bits high precision fragment shader');
    assert.match(html, /'#define NUM_LAYER 4\.0'/, 'ACAUSAL Galaxy shader should keep the React Bits four-layer star field');
    assert.match(html, /density: 1\.5,\n    hueShift: 240,/, 'ACAUSAL Galaxy should use the provided density and hue values');
    assert.match(html, /mouseInteraction: true,\n    mouseRepulsion: true,/, 'ACAUSAL Galaxy should preserve the provided mouse interaction settings');
    assert.match(html, /window\.addEventListener\('pointermove', handleMouseMove, \{ passive: true \}\)/, 'ACAUSAL Galaxy should follow pointer movement across the first screen');
  }
  assert.match(html, /class="shape-grid-bg" data-shape-grid-bg/, `${page.file} should include the ShapeGrid background layer for below-hero sections`);
  assert.match(html, /\.shape-grid-bg \{/, `${page.file} should style the ShapeGrid background layer`);
  assert.match(html, /body\.is-past-hero \.shape-grid-bg \{/, `${page.file} should only reveal ShapeGrid after leaving the first screen`);
  assert.match(html, /body\.is-past-hero \.shape-grid-bg \{\n    opacity: \.42;/, `${page.file} should keep the moving ShapeGrid background subtle enough for reading`);
  assert.match(html, /const shapeGridConfig = \{/, `${page.file} should initialize the static ShapeGrid canvas effect`);
  const expectedShapeGridSpeed = page.file === 'index.html'
    ? /speed: reduceMotion \|\| motionProfile\.nativeMobileScroll \? 0 : \(motionProfile\.lowPowerMode \? 0\.07 : 0\.14\)/
    : /speed: reduceMotion \? 0 : 0\.14/;
  assert.match(html, expectedShapeGridSpeed, `${page.file} should preserve its approved ShapeGrid speed profile`);
  assert.match(html, /borderColor: 'rgba\(255,255,255,\.065\)'/, `${page.file} should keep ShapeGrid lines faint`);
  assert.match(html, /squareSize: 36/, `${page.file} should render smaller moving ShapeGrid squares`);
  assert.match(html, /hoverFillColor: 'rgba\(245,155,50,\.09\)'/, `${page.file} should keep ShapeGrid hover squares low contrast`);
  assert.match(html, /hoverTrailAmount: reduceMotion \? 0 : 4/, `${page.file} should keep a lighter ShapeGrid mouse trail after real pointer movement`);
  assert.match(html, /hasPointerActivity: false/, `${page.file} should keep ShapeGrid hover squares hidden before actual pointer movement`);
  assert.match(html, /if \(state\.hoveredCell && state\.hasPointerActivity\) \{/, `${page.file} should not render a hovered ShapeGrid square without pointer activity`);
  assert.match(html, /if \(state\.hasPointerActivity && shapeGridConfig\.hoverTrailAmount > 0\) \{/, `${page.file} should not render ShapeGrid trail squares without pointer activity`);
  assert.match(html, /const clearPointerCells = \(\) => \{\n      state\.hasPointerActivity = false;\n      state\.hoveredCell = null;\n      state\.trailCells = \[\];\n      state\.cellOpacities\.clear\(\);/, `${page.file} should clear stale ShapeGrid hover squares when pointer or scroll state changes`);
  assert.match(html, /document\.body\.classList\.toggle\('is-past-hero', isPastHero\)/, `${page.file} should toggle the ShapeGrid background from scroll position`);
  assert.match(html, /window\.addEventListener\('pointermove', handlePointerMove, \{ passive: true \}\)/, `${page.file} should track pointer movement for ShapeGrid without changing the first-screen cursor effect`);
  assert.doesNotMatch(html, /<div class="galaxy-bg"/, `${page.file} should not render the previous Galaxy background node`);
  assert.match(html, /const float CYCLE = 3\.45;/, `${page.file} should include the MagicRings ring cycle shader`);
  assert.match(html, /uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst/, `${page.file} should preserve MagicRings mouse, hover, parallax, and burst uniforms`);
  assert.match(html, /followMouse: true/, `${page.file} should enable MagicRings mouse following`);
  assert.match(html, /clickBurst: true/, `${page.file} should enable MagicRings click burst animation`);
  assert.match(html, /hoverScale: 1\.2/, `${page.file} should preserve MagicRings hover scale`);
  assert.match(html, /parallax: 0\.05/, `${page.file} should preserve MagicRings parallax`);
  assert.match(html, /ringCount: 6/, `${page.file} should preserve the six-ring MagicRings configuration`);
  assert.match(html, /pixelRatioCap: 1/, `${page.file} should keep MagicRings resolution bounded for performance`);
  assert.match(html, /IntersectionObserver/, `${page.file} should pause expensive background drawing when the hero is off-screen`);
  assert.doesNotMatch(html, /class="plasma-wave-bg"/, `${page.file} should not keep the previous PlasmaWave background layer`);
  assert.doesNotMatch(html, /uFocalLength/, `${page.file} should not keep the previous PlasmaWave shader controls`);
  assert.match(html, /class="magnetic-cursor"/, `${page.file} should include the magnetic cursor`);
  assert.doesNotMatch(html, /class="spotlight"/, `${page.file} should remove the hero mouse-follow halo`);
  assert.doesNotMatch(html, /\.spotlight/, `${page.file} should remove the spotlight halo styles`);
  assert.match(html, /<img class="brand-logo brand-wordmark" src="assets\/gibira-wordmark-white\.png" alt="GIBIRA" \/>/, `${page.file} should use the supplied GIBIRA wordmark image in the nav`);
  assert.doesNotMatch(html, /<span class="brand-name">幻醒科技 GIBIRA<\/span>/, `${page.file} should replace the old text nav brand with the supplied GIBIRA wordmark`);
  assert.match(html, /<a href="index\.html#harness" data-magnetic>Harness<\/a><a href="index\.html#projects" data-magnetic>应用场景<\/a><a href="qishu-ai\.html" data-magnetic>启枢AI<\/a><a href="index\.html#team" data-magnetic>关于我们<\/a>/, `${page.file} should route the main financing narrative through the Qishu page instead of a standalone BP entry`);
  assert.doesNotMatch(html, /class="brand-mark"/, `${page.file} should not keep the old text-based logo mark`);
  assert.match(html, /\.brand-logo \{\n    display: block; width: auto; height: clamp\(20px, 1\.35vw, 28px\); max-width: 158px; object-fit: contain; flex: 0 0 auto;/, `${page.file} should size the supplied wordmark as a real image asset`);
  assert.match(html, /\.site-header \{\n    position: fixed; inset: 0 0 auto 0; z-index: 30;\n    display: flex; align-items: center; justify-content: space-between; gap: 22px;\n    width: 100%; min-height: clamp\(74px, 5\.6vw, 96px\);/, `${page.file} should make the nav bar span the full viewport width`);
  assert.match(html, /background: rgba\(255,255,255,0\); box-shadow: none;/, `${page.file} should keep the first-screen nav transparent`);
  assert.match(html, /\.site-header\.is-scrolled \{\n    color: #050505;\n    background: rgba\(255,255,255,\.96\);/, `${page.file} should switch the second-screen nav to a smooth white bar`);
  assert.match(html, /\.site-header\.is-scrolled \.brand-logo \{ filter: brightness\(0\) saturate\(100%\); \}/, `${page.file} should turn the white logo black on the white nav bar`);
  assert.match(html, /header\.classList\.toggle\('is-scrolled', window\.scrollY > 2\)/, `${page.file} should switch the nav theme as soon as the page starts scrolling`);
  assert.match(html, /window\.addEventListener\('wheel', handleWheelTheme, \{ passive: true \}\)/, `${page.file} should trigger the nav color animation immediately on mouse wheel movement`);
  assert.match(html, /header\.classList\.add\('is-scrolled'\)/, `${page.file} should make the nav color respond before the second screen threshold`);
  assert.match(html, /\.section\[id\] \{ scroll-margin-top: clamp\(86px, 7vw, 116px\); \}/, `${page.file} should offset anchor navigation below the fixed header`);
  if (page.file !== 'index.html') {
    assert.match(html, /window\.history\.scrollRestoration = 'manual'/, `${page.file} should disable browser scroll restoration for deterministic initial state`);
    assert.match(html, /window\.__gibiraInitialScrollTarget = 0/, `${page.file} should publish a zero initial scroll target before the smooth scroll engine initializes`);
    assert.match(html, /Number\.isFinite\(window\.__gibiraInitialScrollTarget\) \? window\.__gibiraInitialScrollTarget : getActualScroll\(\)/, `${page.file} should initialize the smooth scroll engine from the forced top target instead of restored browser scrollY`);
    assert.match(html, /const navigationEntry = window\.performance\?\.getEntriesByType\?\.\('navigation'\)\?\.\[0\];/, `${page.file} should inspect the browser navigation type before choosing the initial scroll target`);
    assert.match(html, /const isReload = navigationType === 'reload';/, `${page.file} should distinguish refreshes from deep-link navigation`);
    assert.match(html, /if \(isReload && window\.location\.hash\) \{[\s\S]*?window\.history\.replaceState\(null, '', window\.location\.pathname \+ window\.location\.search\);[\s\S]*?\}/, `${page.file} should clear a stale section hash when the document is refreshed`);
    assert.match(html, /const shouldRestoreHistory = isHistoryRestore && !window\.location\.hash && Number\.isFinite\(savedScroll\);/, `${page.file} should distinguish browser history restoration from a new page visit`);
    assert.match(html, /const shouldStartAtTop = isReload \|\| \(!window\.location\.hash && !shouldRestoreHistory\);/, `${page.file} should always initialize a refreshed document at the page top`);
    assert.match(html, /window\.addEventListener\('pageshow', \(event\) => \{[\s\S]*?if \(event\.persisted \|\| shouldRestoreHistory\) \{[\s\S]*?restoreHistoryScroll\(\);/, `${page.file} should restore the previous reading position after browser back navigation`);
    assert.match(html, /window\.addEventListener\('pagehide', \(\) => \{[\s\S]*?window\.sessionStorage\.setItem\(scrollStorageKey/, `${page.file} should save the current reading position without exposing the old page hero`);
    assert.match(html, /window\.addEventListener\('hashchange', \(\) => \{/, `${page.file} should still support user-triggered hash navigation after load`);
    assert.match(html, /const scrollEngineConfig = \{[\s\S]*?source: 'nk\.studio Lenis-style scroll system'[\s\S]*?lenisVersion: '1\.0\.42'[\s\S]*?lerp: 0\.1[\s\S]*?syncTouchLerp: 0\.075[\s\S]*?touchInertiaMultiplier: 35/, `${page.file} should include the migrated Lenis-style scroll engine parameters`);
    assert.match(html, /const normalizeWheelDelta = \(event\) => \{[\s\S]*?scrollEngineConfig\.lineHeight/, `${page.file} should normalize wheel input before smoothing`);
    assert.match(html, /window\.addEventListener\('wheel', handleWheel, \{ passive: false \}\)/, `${page.file} should bind the migrated wheel controller with preventDefault support`);
    assert.match(html, /window\.addEventListener\('touchmove', handleTouchMove, \{ passive: false \}\)/, `${page.file} should bind the migrated touch controller with preventDefault support`);
    assert.match(html, /const frame = window\.requestAnimationFrame\(raf\)/, `${page.file} should animate scroll movement through requestAnimationFrame`);
    assert.match(html, /data-lenis-prevent|data-lenis-prevent-wheel|data-lenis-prevent-touch/, `${page.file} should preserve Lenis-style prevent attributes for nested scroll areas`);
    assert.match(html, /window\.__gibiraScrollEngine = \{/, `${page.file} should expose one scroll engine handle for page-level integrations`);
    assert.match(html, /window\.__gibiraScrollEngine\?\.scrollTo/, `${page.file} should route hash navigation through the migrated scroll engine when available`);
    assert.match(html, /window\.addEventListener\('load', \(\) => \{/, `${page.file} should decide top-vs-hash scrolling after full layout`);
  }
  assert.match(html, /width: 168px; height: 168px;/, `${page.file} should use a much larger crisp cursor follower without a halo`);
  assert.match(html, /cursorSize: 168/, `${page.file} should restore the tripled cursor size after hover`);
  assert.match(html, /compactCursorSize: 56/, `${page.file} should shrink the cursor follower to one third after the page starts scrolling`);
  assert.match(html, /const isPageScrolled = \(\) => window\.scrollY > 2/, `${page.file} should keep the cursor compact anywhere after the first screen starts scrolling`);
  assert.match(html, /const getCursorSize = \(\) => isPageScrolled\(\) \? config\.compactCursorSize : config\.cursorSize/, `${page.file} should derive cursor size from page scroll state instead of hero visibility`);
  assert.doesNotMatch(html, /rect\.bottom > 2/, `${page.file} should not restore the large cursor after the hero leaves the viewport`);
  assert.match(html, /window\.addEventListener\('scroll', updateCursorSizeForScroll, \{ passive: true \}\)/, `${page.file} should update the cursor follower size as soon as the page scrolls`);
  assert.match(html, /<script src="assets\/gsap\.min\.js"><\/script>/, `${page.file} should load local GSAP`);
  assert.match(html, /pointermove/, `${page.file} should wire pointer movement`);
  assert.match(html, /quickSetter\(cursor, 'x', 'px'\)/, `${page.file} should use GSAP quick setters for fast cursor following`);
  assert.match(html, /latestPointerEvent/, `${page.file} should coalesce pointer movement to one update per animation frame`);
  assert.match(html, /pointerFrame = requestAnimationFrame/, `${page.file} should throttle cursor work with requestAnimationFrame`);
  assert.doesNotMatch(html, /item\.addEventListener\('mousemove', move\)/, `${page.file} should avoid duplicate magnetic mousemove handlers`);
  assert.doesNotMatch(html, /lerpAmount/, `${page.file} should not lag the cursor with lerped following`);
  assert.doesNotMatch(html, /spotX|spotY/, `${page.file} should not run the removed halo follow animation`);
  assert.match(html, /prefers-reduced-motion/, `${page.file} should respect reduced motion`);
  assert.match(html, /repeating-linear-gradient/, `${page.file} should use the black line-pattern system`);
  assert.match(html, /overflow-x: hidden;/, `${page.file} should clip horizontal overflow at the body level`);
  assert.match(html, /\.site-main \{ min-height: 100vh; overflow: visible; \}/, `${page.file} should not create an overflow ancestor that breaks sticky sections`);
  assert.match(html, /\.hero \{\n    position: relative; min-height: 100svh; display: grid; align-items: center;/, `${page.file} should present the hero as a centered full-screen viewport`);
  assert.match(html, /--page-rail: var\(--site-rail\);/, `${page.file} should define the content rail from the fixed navigation rail`);
  assert.match(html, /--small-copy-size: 18px;/, `${page.file} should define one readable small-copy size token`);
  assert.match(html, /\.site-main :is\(p, small, td, th\),\n  \.site-main :is\(\.section-lead, \.section-kicker, \.eyebrow, \.button\),/, `${page.file} should apply the small-copy size to body text, labels, buttons, and table text`);
  assert.match(html, /\.footer-inner :is\(p, small, a, span, strong\) \{/, `${page.file} should apply the same small-copy size to footer text`);
  assert.match(html, /font-size: var\(--small-copy-size\) !important;/, `${page.file} should override scattered smaller text rules with the shared readable size`);
  assert.doesNotMatch(html, /\.site-main :is\(h1, h2, h3/, `${page.file} should not include headings in the global small-copy override`);
  assert.match(html, /\.hero-inner, \.section, \.footer-inner \{ width: calc\(100% - var\(--page-rail\) \* 2\); margin: 0 auto; \}/, `${page.file} should align responsive content rails with the fixed navigation`);
  assert.match(html, /<footer class="footer-band footer-screen" id="site-footer">/, `${page.file} should render the footer as a dedicated full-screen closing section`);
  assert.match(html, /<h2>让 AI 从“生成内容”<span class="footer-title-break">走向“完成工作”。<\/span><\/h2>/, `${page.file} footer should force the closing phrase onto a second line without the comma`);
  assert.doesNotMatch(html, /让 AI 从“生成内容”，走向“完成工作”。/, `${page.file} footer should remove the old comma in the closing headline`);
  assert.match(html, /\.footer-inner h2 \.footer-title-break \{[\s\S]*?display: block;[\s\S]*?font-size: inherit !important;[\s\S]*?font-weight: inherit !important;[\s\S]*?line-height: inherit !important;/, `${page.file} footer should render the closing phrase as a full-size second title line`);
  assert.match(html, /<div class="footer-shape-grid-bg" data-shape-grid-bg data-shape-grid-mode="always" aria-hidden="true">\n        <canvas class="shapegrid-canvas"><\/canvas>\n      <\/div>/, `${page.file} should render a real ShapeGrid canvas inside the footer`);
  assert.doesNotMatch(html, /<footer class="footer-band" id="contact">/, `${page.file} should not duplicate the homepage contact anchor on the footer`);
  assert.match(html, /\.footer-band \{\n    min-height: 100svh;/, `${page.file} should make the closing footer occupy a full viewport`);
  assert.match(html, /\.footer-inner \{[\s\S]*?width: calc\(100vw - var\(--site-rail\) \* 2\);[\s\S]*?max-width: none;/, `${page.file} footer content should align to the same rail as the fixed navigation`);
  assert.match(html, /\.footer-shape-grid-bg \{\n    position: absolute;/, `${page.file} should style the footer ShapeGrid layer independently`);
  assert.match(html, /\.footer-shape-grid-bg \{[\s\S]*?opacity: \.38;/, `${page.file} footer ShapeGrid should stay faint behind large footer text`);
  assert.match(html, /const mounts = Array\.from\(document\.querySelectorAll\('\[data-shape-grid-bg\]'\)\)/, `${page.file} should initialize every ShapeGrid mount, including the footer`);
  assert.match(html, /const mode = mount\.dataset\.shapeGridMode \|\| 'below-hero'/, `${page.file} should allow the footer ShapeGrid to run independently of the hero threshold`);
  assert.doesNotMatch(html, /footer-transition/, `${page.file} should remove the stray footer yellow transition marks`);
  assert.match(html, /\.footer-wordmark \{\n    position: relative;/, `${page.file} should include the oversized GIBIRA footer wordmark styling`);
  assert.match(html, /\.footer-wordmark \{[\s\S]*?width: calc\(100vw - var\(--site-rail\) \* 2\);[\s\S]*?padding: 0;/, `${page.file} footer wordmark should align with the navigation rail instead of the viewport edge`);
  if (page.file === 'index.html') {
    assert.match(html, /<div class="footer-wordmark" aria-label="GIBIRA">[\s\S]*?footer-wordmark-logo--base[\s\S]*?footer-wordmark-logo--shine/, 'Homepage should preserve the published dual-layer shining GIBIRA footer wordmark');
  } else {
    assert.match(html, /<div class="footer-wordmark animated-gradient-text footer-gradient-wordmark" aria-label="GIBIRA">\n        <span class="text-content footer-wordmark-logo" aria-hidden="true"><\/span>\n      <\/div>/, `${page.file} should end with a GradientText-powered supplied GIBIRA wordmark`);
    assert.match(html, /\.animated-gradient-text \{\n    position: relative;/, `${page.file} should include the React Bits GradientText base styling`);
    assert.match(html, /\.animated-gradient-text \.text-content \{[\s\S]*?background-image: linear-gradient\(to right, #f8f8f8, #EF4444, #F97316, #FDBA74, #f8f8f8\);[\s\S]*?animation: gradientTextSweep 5s ease-in-out infinite alternate;/, `${page.file} should animate the footer wordmark gradient text without black color blocks`);
    assert.match(html, /\.footer-wordmark-logo\.text-content \{[\s\S]*?width: 100%;/, `${page.file} footer wordmark mask should fill the aligned footer rail`);
    assert.match(html, /\.footer-wordmark-logo\.text-content \{[\s\S]*?-webkit-mask: url\("assets\/gibira-wordmark-white\.png"\) center \/ contain no-repeat;[\s\S]*?mask: url\("assets\/gibira-wordmark-white\.png"\) center \/ contain no-repeat;/, `${page.file} should use the supplied GIBIRA image as the footer GradientText mask`);
    assert.match(html, /@keyframes gradientTextSweep \{\n    0% \{ background-position: 0% 50%; \}\n    100% \{ background-position: 100% 50%; \}\n  \}/, `${page.file} should include the GradientText sweep keyframes`);
  }
  assert.match(html, /\.hero-inner \{\n    position: relative; z-index: 1;\n    display: grid; place-items: center; text-align: center;\n    opacity: calc\(1 - var\(--hero-progress, 0\) \* \.46\);/, `${page.file} should center the first-screen content group with scroll camera progress`);
  assert.match(html, /\.hero \.hero-inner \{ width: calc\(100% - var\(--page-rail\) \* 2\); \}/, `${page.file} should align the hero headline rail with the fixed navigation`);
  assert.match(html, /\.hero h1 \{\n    max-width: none; width: 100%; margin: 0 auto;/, `${page.file} should let the hero headline span the viewport`);
  assert.match(html, /white-space: nowrap;\n    text-align: center; text-wrap: normal;/, `${page.file} should keep the hero headline in one horizontal row`);
  assert.match(html, /\.shiny-text \{\n    display: inline-block;/, `${page.file} should include the ShinyText-style text treatment`);
  assert.match(html, /background-image: linear-gradient\(120deg, var\(--shiny-base\) 0%, var\(--shiny-base\) 35%, var\(--shiny-shine\) 50%, var\(--shiny-base\) 65%, var\(--shiny-base\) 100%\);/, `${page.file} should render the ShinyText gradient sweep`);
  assert.match(html, /@keyframes shiny-text-sweep/, `${page.file} should animate the ShinyText background position`);
  assert.match(html, /\.hero-title-line \{ width: 100%; \}/, `${page.file} should make the ShinyText headline occupy the whole line`);
  assert.doesNotMatch(html, /Roboto\+Flex:opsz,wdth,wght/, `${page.file} should not load the removed TextPressure variable font`);
  assert.doesNotMatch(html, /--text-pressure-font/, `${page.file} should not include the removed TextPressure font variable`);
  assert.doesNotMatch(html, /text-pressure-title|text-pressure-char/, `${page.file} should not split titles into TextPressure characters`);
  assert.doesNotMatch(html, /pressureTargets|__gibiraTextPressure|isCjkPressureChar/, `${page.file} should not include the removed TextPressure runtime`);
  assert.doesNotMatch(html, /span\.style\.fontVariationSettings = nextSettings/, `${page.file} should not animate title characters with TextPressure axes`);
  assert.match(html, /\.section > \.section-kicker,\n  \.section > h2,\n  \.section > \.section-lead \{\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n  \}/, `${page.file} should center regular section titles and lead content`);
  assert.match(html, /\.section:has\(> \.split\),\n  \.cad-model-story,\n  \.cad-model-story__left,\n  \.footer-band \{\n    text-align: left;\n  \}/, `${page.file} should keep left-right display modules left aligned`);
  assert.match(html, /\.hero-copy \{\n    display: grid; grid-template-columns: minmax\(0, 1080px\); justify-content: center; justify-items: center;/, `${page.file} should center the smaller hero copy below the headline`);
  assert.match(html, /\.hero-actions \{ display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; \}/, `${page.file} should center the hero buttons`);
  assert.match(html, /button:hover, \.button:focus-visible \{ transform: translateY\(-2px\); outline: none; \}/, `${page.file} should preserve button hover motion`);
  assert.match(html, /:where\(\n    \.eyebrow,\n    \.hero-project-card,[\s\S]*?\.contact-stack a,\n    \[data-animated-list-item\]\.is-list-selected\n  \) \{\n    background: transparent !important;\n    border-color: transparent !important;\n    box-shadow: none !important;\n    backdrop-filter: none !important;\n    -webkit-backdrop-filter: none !important;/, `${page.file} should remove glass backgrounds, borders, shadows, and blur from boxed UI surfaces`);
  assert.doesNotMatch(html, /table-wrap,\n    \.mini-projects a,\n    \.logoloop__logo-shell,\n    \.contact-stack a,/, `${page.file} should keep LogoLoop shell styling controlled by the partner rail override`);
  assert.match(html, /\/\* Borderless editorial system \*\//, `${page.file} should include the high-end borderless editorial layout layer`);
  assert.match(html, /--container-max: 1520px;\n    --section-x: var\(--site-rail\);\n    --section-y: clamp\(96px, 14vw, 220px\);\n    --fg: #f5f5f2;\n    --grid: rgba\(255,255,255,\.08\);/, `${page.file} should define unified editorial layout variables aligned to the navigation rail`);
  assert.match(html, /\.hero-inner,\n  \.section,\n  \.footer-inner \{\n    width: min\(var\(--container-max\), calc\(100% - var\(--section-x\) \* 2\)\);/, `${page.file} should use one max-width content rail aligned to the fixed navigation`);
  assert.match(html, /\.section \{\n    position: relative;\n    width: min\(var\(--container-max\), calc\(100% - var\(--section-x\) \* 2\)\);\n    padding: var\(--section-y\) 0;/, `${page.file} should use a unified section rhythm`);
  assert.match(html, /\.section::after \{[\s\S]*?background: linear-gradient\(90deg, transparent, rgba\(245,155,50,\.3\), transparent\);/, `${page.file} should separate sections with a subtle editorial axis instead of module borders`);
  assert.match(html, /\.hero-project-list\.circular-gallery \{[\s\S]*?overflow: hidden;[\s\S]*?cursor: grab;/, `${page.file} should render hero projects through a CircularGallery-style viewport`);
  assert.match(html, /\.hero-project-list\.circular-gallery \{[\s\S]*?--gallery-card-width: clamp\(196px, 14vw, 248px\);[\s\S]*?--gallery-card-height: clamp\(118px, 12vh, 150px\);[\s\S]*?--gallery-viewport-height: calc\(var\(--gallery-card-height\) \+ clamp\(10px, 2vh, 24px\)\);[\s\S]*?width: min\(100vw, 1040px\);[\s\S]*?margin-top: clamp\(12px, 2vh, 26px\);/, `${page.file} should keep the first-screen CircularGallery smaller and tucked under the hero copy`);
  assert.match(html, /\.hero-projects\.circular-gallery-track \{[\s\S]*?bottom: clamp\(2px, \.8vh, 8px\);[\s\S]*?gap: clamp\(10px, 1\.25vw, 18px\);/, `${page.file} should animate the hero project rail with tighter spacing and less vertical offset`);
  assert.match(html, /\.hero-project-card \{[\s\S]*?background: transparent !important;[\s\S]*?border: 0 !important;[\s\S]*?box-shadow: none !important;/, `${page.file} should render hero project entries as open index items`);
  assert.doesNotMatch(html, /\.hero-project-card::before \{[\s\S]*?rgba\(245,155,50,\.9\)/, `${page.file} should not render the orange decorative rule above hero project cards`);
  assert.match(html, /\.hero-project-card\.circular-gallery-item \{[\s\S]*?flex: 0 0 var\(--gallery-card-width\);[\s\S]*?width: var\(--gallery-card-width\);[\s\S]*?height: var\(--gallery-card-height\);[\s\S]*?text-align: center;[\s\S]*?justify-items: center;[\s\S]*?align-content: center;[\s\S]*?border: 1px solid rgba\(255,255,255,\.22\) !important;[\s\S]*?background: rgba\(0,0,0,\.18\) !important;/, `${page.file} should center text while preserving each first-screen carousel card border`);
  assert.match(html, /\.hero-project-card\.circular-gallery-item \{[\s\S]*?gap: 5px;[\s\S]*?\.hero-project-card\.circular-gallery-item strong \{[\s\S]*?font-size: clamp\(15px, 1\.15vw, 20px\) !important;[\s\S]*?overflow: visible;[\s\S]*?\.hero-project-card\.circular-gallery-item small \{[\s\S]*?font-size: 12px !important;[\s\S]*?\.hero-project-card\.circular-gallery-item p \{[\s\S]*?max-width: 12em;[\s\S]*?font-size: 11px !important;[\s\S]*?-webkit-line-clamp: 2;/, `${page.file} should keep all homepage project card copy compact and prevent the Qishu title from being obscured`);
  assert.match(html, /\.card-grid \{[\s\S]*?grid-template-columns: minmax\(0, 1\.35fr\) minmax\(0, \.85fr\) minmax\(0, 1\.05fr\);/, `${page.file} should use asymmetric open information grids instead of equal cards`);
  assert.match(html, /\.info-card,\n  \.metric,\n  \.project-card,\n  \.timeline-item,\n  \.quote-panel,\n  \.vertical-card,\n  \.special-project,\n  \.mini-projects a \{[\s\S]*?border: 0 !important;[\s\S]*?background: transparent !important;[\s\S]*?box-shadow: none !important;/, `${page.file} should strip card surfaces from content modules`);
  assert.match(html, /\.process-flow::before \{[\s\S]*?height: 1px;[\s\S]*?background: linear-gradient\(90deg, rgba\(245,155,50,\.7\), rgba\(255,255,255,\.18\), transparent\);/, `${page.file} should convert process cards into a lightweight flow axis`);
  assert.match(html, /\.process-node::before \{[\s\S]*?border-radius: 50%;[\s\S]*?box-shadow: 0 0 22px rgba\(245,155,50,\.45\);/, `${page.file} should use small glowing markers for process structure`);
  assert.match(html, /\.team-profile-board\.chroma-grid \{[\s\S]*?--r: 300px;[\s\S]*?width: min\(calc\(100vw - var\(--section-x\) \* 2\), 1560px\);[\s\S]*?padding: clamp\(6px, \.7vw, 10px\);/, `${page.file} should use a viewport-contained ChromaGrid board shell for people`);
  assert.match(html, /\.team-profile-board\.chroma-grid \.team-profile-card:nth-child\(even\) \{\n    margin-top: 0;\n  \}/, `${page.file} should keep ChromaGrid people cards on one clean baseline`);
  assert.match(html, /\.team-profile-card \.pc-card \{[\s\S]*?border: 1px solid #333 !important;[\s\S]*?border-radius: 20px;[\s\S]*?background: var\(--card-gradient\) !important;/, `${page.file} should style people cards with the ChromaGrid card surface`);
  assert.match(html, /\.hero:not\(\.home-hero\) \.hero-title \{[\s\S]*?max-width: min\(1480px, 100%\);[\s\S]*?font-size: clamp\(48px, 7vw, 112px\);[\s\S]*?white-space: nowrap;[\s\S]*?word-break: keep-all;/, `${page.file} should stretch project hero titles across a longer desktop line`);
  assert.match(html, /@media \(max-width: 900px\) \{[\s\S]*?\.hero:not\(\.home-hero\) \.hero-title \{[\s\S]*?font-size: clamp\(27px, 6vw, 44px\);[\s\S]*?text-wrap: balance;/, `${page.file} should compress long project hero titles on small screens`);
  assert.match(html, /\.vertical-grid \{[\s\S]*?grid-template-columns: repeat\(5, minmax\(0, 1fr\)\);[\s\S]*?align-items: stretch;/, `${page.file} should render project routes as a tidy full-screen row`);
  assert.match(html, /\.vertical-card h3,\n  \.project-card h3 \{[\s\S]*?max-width: min\(100%, 16ch\);[\s\S]*?text-wrap: balance;[\s\S]*?word-break: keep-all;/, `${page.file} should keep project card titles to one or two balanced lines where possible`);
  assert.match(html, /\.contact-stack a \{[\s\S]*?grid-template-columns: 96px minmax\(0, 1fr\);[\s\S]*?border: 0 !important;[\s\S]*?background: transparent !important;/, `${page.file} should make contact rows feel like editorial data, not cards`);
  assert.match(html, /\.logoloop__logo-shell \{[\s\S]*?border: 1px solid rgba\(255,255,255,\.22\) !important;[\s\S]*?border-radius: 8px;[\s\S]*?background: #000 !important;/, `${page.file} should restore bordered black partner logo containers`);
  assert.match(html, /\.logoloop__item img \{[\s\S]*?opacity: \.78;[\s\S]*?mix-blend-mode: screen;/, `${page.file} should normalize partner logos without white logo cards`);
  assert.match(html, /@media \(max-width: 900px\) \{[\s\S]*?\.hero-project-list\.circular-gallery \{[\s\S]*?--gallery-viewport-height: calc\(var\(--gallery-card-height\) \+ 30px\);[\s\S]*?height: var\(--gallery-viewport-height\);[\s\S]*?\.hero-project-card\.circular-gallery-item \{[\s\S]*?flex-basis: min\(72vw, 300px\);/, `${page.file} should keep the CircularGallery hero rail usable on mobile without clipping card borders`);
  assert.match(html, /@media \(max-width: 900px\) \{[\s\S]*?\.hero-project-list\.circular-gallery \{[\s\S]*?max-width: 100vw;[\s\S]*?overflow: hidden;[\s\S]*?\.hero-projects\.circular-gallery-track \{[\s\S]*?max-width: none;[\s\S]*?overflow: visible;/, `${page.file} should clip only the mobile gallery viewport while leaving the repeated card track visible`);
  assert.match(html, /\.team-profile-row \{\n      grid-auto-flow: row;\n      grid-auto-columns: auto;\n    \}/, `${page.file} should reset the old horizontal team scroller in mobile editorial mode`);
  assert.match(html, /\.button\.primary,\n  \.button\.secondary \{\n    color: #fff;\n  \}/, `${page.file} should keep transparent buttons readable after removing boxed fills`);
  assert.match(html, /\.team-profile-card\.chroma-card::before \{[\s\S]*?background: radial-gradient\(circle at var\(--mouse-x\) var\(--mouse-y\), var\(--spotlight-color\), transparent 70%\);/, `${page.file} should preserve ChromaGrid per-card spotlight hover`);
  assert.match(html, /\.reveal,\n  \.reveal-up,\n  \.reveal-left,\n  \.reveal-right,\n  \.reveal-scale,\n  \.stagger-item \{/, `${page.file} should include the shared reveal animation system`);
  assert.match(html, /\.animated-list-container \{/, `${page.file} should include the AnimatedList container styles`);
  assert.match(html, /\.content-list-shell \.animated-list \{/, `${page.file} should let regular page modules use AnimatedList scrolling`);
  assert.match(html, /\[data-animated-list-item\] \{/, `${page.file} should include AnimatedList item entrance styles`);
  assert.match(html, /\.process-flow \[data-animated-list-item\] \{ --animated-scale: 1; \}/, `${page.file} should keep process flow modules from shrinking when AnimatedList selection changes`);
  assert.match(html, /\.is-animated-visible/, `${page.file} should include AnimatedList in-view state styles`);
  assert.match(html, /\.is-list-selected/, `${page.file} should include AnimatedList selected state styles`);
  assert.match(html, /document\.querySelectorAll\('\[data-animated-list\]'\)/, `${page.file} should initialize static AnimatedList modules`);
  assert.match(html, /document\.querySelectorAll\('\[data-circular-gallery\]'\)/, `${page.file} should initialize CircularGallery hero modules`);
  assert.match(html, /requestAnimationFrame\(animateCircularGallery\)/, `${page.file} should animate CircularGallery inertia through requestAnimationFrame`);
  assert.match(html, /const autoSpeed = reduceMotion \? 0 : Number\(container\.dataset\.autoSpeed \|\| 0\)/, `${page.file} should read the CircularGallery autoplay speed from markup`);
  assert.match(html, /const cloneSets = Math\.max\(5, Math\.ceil\(\(containerWidth \+ sequenceWidth \* 2\) \/ Math\.max\(sequenceWidth, 1\)\)\)/, `${page.file} should clone enough carousel sets to keep the first card following the last without blank space`);
  assert.match(html, /clone\.classList\.remove\('reveal', 'reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale', 'stagger-item'\)/, `${page.file} should keep repeated carousel cards visible by stripping one-time reveal animation classes from clones`);
  assert.match(html, /clone\.dataset\.circularGallerySet = String\(copyIndex\)/, `${page.file} should label carousel clone sets for stable seamless measurement`);
  assert.match(html, /const firstClone = track\.querySelector\('\[data-circular-gallery-clone="true"\]\[data-circular-gallery-set="1"\]\[data-index="0"\]'\)/, `${page.file} should measure the loop width from the first repeated card rather than half the whole track`);
  assert.match(html, /state\.segmentWidth = Math\.max\(1, firstClone \? firstClone\.offsetLeft - first\.offsetLeft : measureOriginalSequenceWidth\(\)\)/, `${page.file} should use a true sequence width so manual wheel loops do not show a seam`);
  assert.match(html, /isPointerInside: false/, `${page.file} should track whether the pointer is hovering the CircularGallery`);
  assert.match(html, /if \(autoSpeed && !state\.isDown && !state\.isPointerInside\) \{[\s\S]*?state\.target \+= autoSpeed \* deltaSeconds;/, `${page.file} should slowly autoplay the CircularGallery toward the left only when the user is not trying to click it`);
  assert.match(html, /const freezeAtCurrentOffset = \(\) => \{[\s\S]*?state\.target = state\.current;[\s\S]*?state\.lastFrameTime = 0;[\s\S]*?\}/, `${page.file} should stop CircularGallery inertia before a user clicks a moving card`);
  assert.match(html, /container\.addEventListener\('pointerenter', onPointerEnter, \{ passive: true \}\)/, `${page.file} should pause CircularGallery autoplay when the pointer enters the card rail`);
  assert.match(html, /container\.addEventListener\('pointerleave', onPointerLeave, \{ passive: true \}\)/, `${page.file} should resume CircularGallery autoplay after the pointer leaves the card rail`);
  assert.match(html, /if \(event\.cancelable\) event\.preventDefault\(\);\n      event\.stopPropagation\(\);/, `${page.file} should keep wheel input inside the hero carousel instead of scrolling the page`);
  assert.match(html, /container\.addEventListener\('wheel', onWheel, \{ passive: false \}\)/, `${page.file} should let the hero CircularGallery take manual wheel control`);
  assert.match(html, /suppressClickUntil: 0/, `${page.file} should keep drag click suppression time-boxed so normal project links remain clickable`);
  assert.match(html, /if \(!state\.dragged \|\| performance\.now\(\) > state\.suppressClickUntil\) \{[\s\S]*?return;[\s\S]*?\}/, `${page.file} should allow normal clicks through to the linked project pages`);
  assert.match(html, /container\.addEventListener\('touchstart', onPointerDown, \{ passive: true \}\)/, `${page.file} should let the hero CircularGallery respond to touch drag`);
  assert.match(html, /entry\.target\.classList\.toggle\('is-animated-visible', entry\.isIntersecting\)/, `${page.file} should animate project items based on viewport visibility`);
  assert.match(html, /container\.style\.setProperty\('--top-gradient-opacity'/, `${page.file} should drive AnimatedList top gradient opacity from scroll`);
  assert.match(html, /event\.key === 'ArrowDown'/, `${page.file} should support AnimatedList arrow key navigation`);
  assert.match(html, /data-cad-model-story/, `${page.file} should include hooks for the CAD-to-model scroll story script`);
  assert.match(html, /data-cad-model-visual/, `${page.file} should include a model visual stage controller`);
  assert.match(html, /\.cad-model-story \{\n    position: relative;\n    min-height: 520vh;/, `${page.file} should make the CAD-to-model module a long sticky scroll story without an excessive blank tail`);
  assert.doesNotMatch(html, /margin-bottom: -100svh;/, `${page.file} should not pull later sections over the CAD sticky story`);
  assert.match(html, /\.cad-model-story__sticky \{\n    position: sticky;\n    top: 0;\n    min-height: 100svh;/, `${page.file} should pin the CAD story while the section scrolls`);
  assert.match(html, /min-height: clamp\(640px, calc\(100svh - clamp\(122px, 12vh, 158px\)\), 880px\);/, `${page.file} should make the CAD model visual fill the sticky viewport instead of leaving a blank lower half`);
  assert.match(html, /document\.querySelectorAll\('\[data-cad-step\]'\)/, `${page.file} should query the left-side CAD step cards once`);
  assert.match(html, /card\.classList\.toggle\('is-active', current === stage\)/, `${page.file} should activate the current CAD step card from scroll stage`);
  assert.match(html, /card\.classList\.toggle\('is-passed', current < stage\)/, `${page.file} should mark previous CAD step cards as passed`);
  assert.match(html, /modelVisual\.dataset\.stage = String\(stage\)/, `${page.file} should switch the model visual through scroll stages`);
  assert.match(html, /const scrollable = Math\.max\(rect\.height - viewportHeight, 1\)/, `${page.file} should compute scroll story progress from section scrollable height`);
  assert.match(html, /const progress = clamp\(-rect\.top \/ scrollable, 0, 1\)/, `${page.file} should use true module-local scroll progress`);
  assert.match(html, /--cad-base-offset/, `${page.file} should drive CAD base line drawing through a CSS variable`);
  assert.match(html, /--cad-highlight-offset/, `${page.file} should drive highlighted vector drawing through a CSS variable`);
  for (const stage of ['1', '2', '3', '4', '5', '6']) {
    assert.match(html, new RegExp(`data-stage="${stage}"|data-stage=\\\\\\\\"${stage}\\\\\\\\"|\\\\.cad-model-visual\\\\[data-stage="${stage}"\\\\]`), `${page.file} should define CSS or markup for stage ${stage}`);
  }
  assert.match(html, /\.architecture-graph\.is-visible \.arch-line \{ stroke-dashoffset: 0; \}/, `${page.file} should animate architecture connector lines when revealed`);
  if (page.file === 'qishu-ai.html') {
    assert.doesNotMatch(html, /class="financing-card[^"]*"[^>]*data-tilt/, 'Integrated Qishu financing cards should avoid legacy tilt hover effects');
  } else {
    assert.match(html, /data-tilt/, `${page.file} should expose lightweight card tilt interactions`);
  }
  assert.match(html, new RegExp(page.title), `${page.file} should include ${page.title}`);
  assert.match(html, /15686239953/, `${page.file} should include the public phone`);
  assert.match(html, /ys020129@163\.com/, `${page.file} should include the public email`);
  assert.match(html, /gibira\.com/, `${page.file} should include the domain`);

  for (const needle of page.required) {
    assert.ok(html.includes(needle), `${page.file} should include ${needle}`);
  }

  if (page.file === 'qishu-ai.html') {
    assert.match(html, /class="financing-card-grid/, 'Integrated Qishu page should use dedicated static financing grids instead of legacy project lists');
    assert.match(html, /class="financing-flow/, 'Integrated Qishu page should use dedicated static financing flows instead of legacy project lists');
  } else {
    assert.match(html, /class="animated-list-container content-list-shell/, `${page.file} should wrap page content modules in AnimatedList shells`);
    assert.match(html, /class="(metric-grid|card-grid|timeline|process-flow|mini-projects) animated-list" data-animated-list-scroll/, `${page.file} should expose project page module lists as AnimatedList scroll surfaces`);
  }
}

for (const file of alignedProjectPages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.match(html, new RegExp(`page-${file.replace(/\.html$/, '')} project-secondary-page`), `${file} should opt into the Qishu-aligned project layout`);
  assert.match(html, /class="section project-contact-section"/, `${file} should include a clear cooperation entry before the project matrix`);
  assert.match(html, /Validation &amp; Progress/, `${file} should include a validation and progress section`);
  assert.match(html, /@media \(max-width: 900px\) \{[\s\S]*?\.project-secondary-page \.table-wrap table[\s\S]*?display: block !important;/, `${file} should render project tables as stacked mobile records`);
  assert.match(html, /<td data-label="[^"]+">/, `${file} should label responsive table cells for mobile records`);
}

const crypto = require('crypto');
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const visibleHome = home
  .replace(/<style\b[\s\S]*?<\/style>/gi, '')
  .replace(/<script\b[\s\S]*?<\/script>/gi, '');

assert.match(home, /<h1 class="hero-title reveal-up"><span class="shiny-text hero-title-line">Harness 驾驭系统<\/span><\/h1>/, 'homepage should preserve the published Harness hero');
assert.match(home, /让 AI 理解目标 拆解任务 调度工具 进入真实流程 并在人工复核后形成可验证结果/, 'homepage should preserve the published Harness hero copy');
assert.match(home, /<a href="index\.html#harness" data-magnetic>Harness<\/a><a href="index\.html#projects" data-magnetic>应用场景<\/a><a href="qishu-ai\.html" data-magnetic>启枢AI<\/a><a href="index\.html#team" data-magnetic>关于我们<\/a>/, 'homepage navigation should remain usable in the local static preview');

const orderedSectionIds = [
  'harness',
  'harness-loop',
  'ecosystem',
  'team',
  'ai-research-team',
  'collaborative-research-team',
  'advisors',
  'projects',
  'contact',
];
let previousSectionIndex = -1;
for (const id of orderedSectionIds) {
  const sectionIndex = home.indexOf(`id="${id}"`);
  assert.ok(sectionIndex > previousSectionIndex, `homepage should preserve published section order through #${id}`);
  previousSectionIndex = sectionIndex;
}

for (const marker of [
  '03 / Team & Co-build',
  '04 / Core Team',
  '05 / AI R&D Team',
  '06 / Collaborative R&D Lab',
  '07 / Advisors',
  '08 / Project Routes',
  '09 / Contact',
]) {
  assert.ok(home.includes(marker), `homepage should preserve published marker ${marker}`);
}

for (const file of homepageProjectFiles) {
  assert.ok(home.includes(`href='${file}'`), `homepage should link locally to ${file}`);
}
for (const file of harnessSecondaryPages.map((page) => page.file)) {
  assert.ok(home.includes(`href='${file}'`), `homepage Harness routes should link locally to ${file}`);
}

for (const phrase of ['启枢｜融资展示', '公司战略与融资', '融资推进', '本轮融资', '与投资人']) {
  assert.ok(!visibleHome.includes(phrase), `homepage visible copy should remove ${phrase}`);
}
assert.doesNotMatch(visibleHome, /financing\.html|qishu-funding-workbook\.html|qishu-funding-use\.xlsx|#funding-use/, 'homepage should not expose removed financing routes or downloads');

for (const asset of [
  'assets/team-wang-ru.png',
  'assets/team-zhang-zongliang.png',
  'assets/phosphor/regular/style.css',
]) {
  assert.ok(fs.existsSync(path.join(root, asset)), `published homepage asset ${asset} should exist locally`);
  assert.ok(home.includes(asset), `published homepage should reference ${asset}`);
}

const preservedSurface = [
  home.match(/<style>[\s\S]*?<\/style>/)?.[0] || '',
  home.match(/<main class="site-main">[\s\S]*?<\/main>/)?.[0] || '',
  [...home.matchAll(/<script\b[\s\S]*?<\/script>/g)].map((match) => match[0]).join('\n'),
].join('\n');
assert.strictEqual(
  crypto.createHash('sha256').update(preservedSurface).digest('hex'),
  'd24ddc009020e9f8062cfbac2fa9287794786a6dca874154f477d7d5bab7a7ce',
  'homepage published middle styles, markup, and interactions should remain unchanged',
);

console.log('GIBIRA website smoke test passed');
