const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const contact = {
  phone: '15686239953',
  email: 'ys020129@163.com',
  domain: 'gibira.com',
};

const projects = [
  {
    title: '启枢AI',
    en: 'Qishu AI',
    href: 'qishu-ai.html',
    tag: '建筑设计审图一体化操作系统',
    summary: '接入 CAD/BIM 工作流，围绕图纸解析、规范审查、施工图辅助深化和审图报告生成，替代设计院高频重复劳动。',
  },
  {
    title: '蜂聚AI',
    en: 'Fengju AI',
    href: 'fengju-ai.html',
    tag: '短视频商家增长工具',
    summary: '面向抖音与短视频平台商家，提供 AI 客服、AI 自动获客、AI 转化、私域跟进和 AI 店铺管理。',
  },
  {
    title: '诺思AI',
    en: 'North AI',
    href: 'north-ai.html',
    tag: 'AI+生理学智慧教学',
    summary: '与西安交通大学真实课堂共研，将 AI 助教、机制卡、3D 建模、AR 交互和大师数字智能体引入医学教育。',
  },
  {
    title: 'ACAUSAL',
    en: 'ACAUSAI / 非因果律',
    href: 'acausal.html',
    tag: 'AI精神疗愈体验',
    summary: '以荣格心理学与《金花的秘密》为思想底座，构建面向海外独立站的精神探索、认知陪伴和疗愈手串体验项目。',
  },
  {
    title: 'AXION OS',
    en: '巨灵装卸机器人',
    href: 'axion-os.html',
    tag: '具身智能操作系统',
    summary: '为装卸机器人安装 AI 大脑与智慧双眼，打通自然语言、视觉感知、安全挂起、控制台和历史回放闭环。',
  },
  {
    title: '金螳螂 CAD 三维建模',
    en: 'CAD-to-Scene',
    href: 'jintanglang-cad.html',
    tag: '启枢AI合作开发项目',
    summary: '基于 CAD 平面图实时三维建模、立面投影生成与高斯泼溅真实场景渲染，服务装饰设计与甲方汇报。',
  },
];

const featuredProjects = projects.filter((project) => project.href !== 'jintanglang-cad.html');

const verticalApplications = [
  {
    number: '01',
    title: '启枢AI',
    en: 'Qishu',
    href: 'qishu-ai.html',
    tag: '建筑工程与设计作业系统',
    positioning: '面向建筑、工程、装饰装修与设计产业，将 AI 深度注入 CAD 绘图、图纸深化、空间渲染、全屋拆单、智能配筋与工程造价等硬核专业流程。',
    value: '驱动复杂工程设计，从繁重的人工重复操作，跨越至高精度的 AI 自动化作业。',
    brief: '面向工程设计与 CAD 工作流，承接审图、建模、深化和交付。',
    keywords: 'CAD / 审图 / 工程交付',
  },
  {
    number: '02',
    title: '蜂聚AI',
    en: 'Fengju',
    href: 'fengju-ai.html',
    tag: '电商营销与增长协作系统',
    positioning: '专为电商与内容营销场景打造。打通选品趋势分析、爆款内容生成、达人矩阵协作、智能投放策略与转化数据复盘，让营销增长实现系统化协同。',
    value: '让 AI 成为品牌增长流程中，兼具策略流与执行力的协作中枢。',
    brief: '组织内容、电商、达人协作、投放策略和转化复盘。',
    keywords: '内容营销 / 电商增长 / 投放复盘',
  },
  {
    number: '03',
    title: '诺思AI',
    en: 'North',
    href: 'north-ai.html',
    tag: '教育行业 AI 应用系统',
    positioning: '深度重塑教育生态。围绕课程动态设计、教学智能辅助、个性化学习路径、多维知识评测与启发式辅导，为学校、教师和学生构建全新的智能教学闭环。',
    value: '将 AI 编织进教学流程，让真正的因材施教与高效学习成为常态。',
    brief: '服务课程设计、课堂辅助、学习路径和知识评测。',
    keywords: '智能教学 / 学习路径 / 个性化辅导',
  },
  {
    number: '04',
    title: 'ACAUSAL',
    en: 'ACAUSAI',
    href: 'acausal.html',
    tag: '心理学模型与认知交互系统',
    positioning: '聚焦人类内在精神系统。融合前沿心理学模型、人格拓扑结构、细腻的情绪理解与长期记忆交互，协助个体完成深度自我梳理与复杂生命决策。',
    value: '让 AI 穿透表层对话，精准触达并理解人类复杂的内在状态与核心需求。',
    brief: '聚焦心理模型、情绪理解、人格结构与长期认知交互。',
    keywords: '心理模型 / 情绪理解 / 认知陪伴',
  },
  {
    number: '05',
    title: 'AXION OS',
    en: '巨灵装卸机器人',
    href: 'axion-os.html',
    tag: '具身智能与机器人作业系统',
    positioning: '赋能物理世界。深度探索 AI 空间感知、高级任务规划与机器人硬件执行力的重组，重塑搬运、物流、仓储及工业辅助等实体作业场景。',
    value: '打破屏幕限制，让 AI 获得物理实体，在真实空间中高效执行具身作业。',
    brief: '让 AI 进入机器人作业、空间感知、路径规划与实体执行。',
    keywords: '具身智能 / 机器人作业 / 人机协作',
  },
];

const cadModelSteps = [
  {
    label: 'Input',
    title: '上传 CAD / DWG / DXF 图纸',
    body: '接入真实工程图纸、图层、标注与比例信息，把设计输入转为可解析的作业对象。',
  },
  {
    label: 'Geometry',
    title: '解析矢量线段与空间坐标',
    body: '识别线段、端点、闭合区域、尺寸关系与坐标拓扑，建立几何底座。',
  },
  {
    label: 'AI Understanding',
    title: 'AI 识别墙体、门窗、立面关系',
    body: '将图元关系转译为墙体、门窗、开洞、房间与立面语义，而不是只看像素。',
  },
  {
    label: 'Model',
    title: '生成三维结构模型',
    body: '从平面图中抬升空间结构，形成可计算、可投影、可复核的三维线框。',
  },
  {
    label: 'Projection',
    title: '输出六面视图 / 立面图 / DXF 文件包',
    body: '将模型展开为前后左右、顶面、底面等工程视图，支持立面图自动生成。',
  },
  {
    label: 'Delivery',
    title: '支持二次编辑与工程交付',
    body: '输出可编辑 CAD/DXF 成果，让设计师继续修改、校验与交付。',
  },
];

const architectureLayers = [
  {
    title: 'Input Layer',
    subtitle: 'DWG / DXF / PDF / CAD 图纸',
    body: '接收项目图纸、图层、标注、比例尺与多专业输入。',
  },
  {
    title: 'Geometry Parsing Layer',
    subtitle: '矢量线段 / 坐标点 / 图元拓扑',
    body: '抽取墙线、门窗、坐标点、闭合区域与图元关系。',
  },
  {
    title: 'AI Understanding Layer',
    subtitle: '空间语义 / 构件识别 / 标注理解',
    body: '把几何对象转成房间、构件、立面、尺寸和规范上下文。',
  },
  {
    title: 'Model Generation Layer',
    subtitle: '三维模型 / 六面投影 / 立面生成',
    body: '形成可计算的线框模型，并生成多视图工程表达。',
  },
  {
    title: 'Output Layer',
    subtitle: 'DXF / 可编辑线段 / 工程文件包',
    body: '输出可二次编辑、可复核、可交付的 CAD/DXF 文件包。',
  },
];

const cadCaseCards = [
  {
    title: 'CAD 平面图转三维模型',
    body: '从墙线、门窗和空间坐标中抬升模型，让图纸从静态文件变成可计算空间。',
    meta: 'CAD / 3D Model',
    image: 'assets/cad-engineering-case-01.png',
  },
  {
    title: '平面图转立面图',
    body: '基于空间拓扑和高度约束自动生成立面表达，减少重复绘制与人工核对。',
    meta: 'Plan / Elevation',
    image: 'assets/cad-engineering-case-02.png',
  },
  {
    title: '六面视图生成',
    body: '围绕模型自动展开顶、底、前、后、左、右视图，服务工程审查和汇报。',
    meta: 'Six-side Views',
    image: 'assets/cad-engineering-case-03.png',
  },
  {
    title: 'DXF 文件包输出',
    body: '将 AI 生成结果回到可编辑工程文件，而不是停留在不可修改的图片预览。',
    meta: 'DXF Delivery',
    image: 'assets/cad-engineering-case-04.png',
  },
  {
    title: 'AI 图纸理解',
    body: '识别构件、标注、空间关系和专业语义，为审图、深化和校验提供底层能力。',
    meta: 'AI Parsing',
    image: 'assets/cad-engineering-case-05.png',
  },
  {
    title: '工程图纸自动化交付',
    body: '把图纸解析、模型生成、视图输出和人工复核串成可落地的作业闭环。',
    meta: 'Workflow',
    image: 'assets/cad-engineering-case-06.png',
  },
];

const qishuDrawingCaseCards = [
  {
    title: 'CAD 平面图转三维模型',
    body: '从墙线、门窗和空间坐标中抬升模型，让图纸从静态文件变成可计算空间。',
    meta: 'CAD / 3D Model',
    image: 'assets/qishu-drawing-case-cad-to-model.png',
  },
  {
    title: '平面图转立面图',
    body: '基于空间拓扑和高度约束自动生成立面表达，减少重复绘制与人工核对。',
    meta: 'Plan / Elevation',
    image: 'assets/qishu-drawing-case-plan-to-elevation.png',
  },
  {
    title: '六面视图生成',
    body: '围绕模型自动展开顶、底、前、后、左、右视图，服务工程审查和汇报。',
    meta: 'Six-side Views',
    image: 'assets/qishu-drawing-six-side-updated.png',
  },
];

const qishuSpatialCaseCards = [
  {
    title: '六面视图生成',
    body: '围绕模型自动展开顶、底、前、后、左、右视图，服务工程审查和汇报。',
    meta: 'Six-side Views',
    image: 'assets/qishu-spatial-six-side-updated.png',
  },
  {
    title: 'DXF 文件包输出',
    body: '将 AI 生成结果回到可编辑工程文件，而不是停留在不可修改的图片预览。',
    meta: 'DXF Delivery',
    image: 'assets/qishu-spatial-case-dxf-output.png',
  },
  {
    title: 'AI 图纸理解',
    body: '识别构件、标注、空间关系和专业语义，为审图、深化和校验提供底层能力。',
    meta: 'AI Parsing',
    image: 'assets/qishu-spatial-case-ai-parsing.png',
  },
  {
    title: '工程图纸自动化交付',
    body: '把图纸解析、模型生成、视图输出和人工复核串成可落地的作业闭环。',
    meta: 'Workflow',
    image: 'assets/qishu-spatial-case-auto-delivery.png',
  },
];

const qishuOpportunityModelingSlides = [
  { title: '源CAD图纸', meta: '01 / Source CAD', image: 'assets/qishu-opportunity-modeling-01.png' },
  { title: 'AI空间模型', meta: '02 / AI Model', image: 'assets/qishu-opportunity-modeling-02.png' },
  { title: '正交审查草案', meta: '03 / Review Draft', image: 'assets/qishu-opportunity-modeling-03.png' },
  { title: '墙面审查视图', meta: '04 / Wall Review', image: 'assets/qishu-opportunity-modeling-04.png' },
  { title: '模型细部视角', meta: '05 / Model Detail', image: 'assets/qishu-opportunity-modeling-05.png' },
  { title: '空间模型复核', meta: '06 / Spatial Check', image: 'assets/qishu-opportunity-modeling-06.png' },
];

const qishuMarketMetrics = [
  { label: 'Market Logic', value: '三层测算', note: '不直接把 32.7 万亿元建筑业总产值当作可服务市场，而是按目标企业、年度付费和渗透率估算。' },
  { label: 'Layer 01', value: '设计工程', note: '建筑设计院、装饰设计企业、工程总包与专业深化机构。' },
  { label: 'Layer 02', value: '生产成本', note: '全屋定制、钢筋加工、工程造价、工程咨询等生产与成本相关企业。' },
  { label: 'Layer 03', value: '工业空间', note: '工业厂房设计、工业管线、设备布局、机器人空间建模和智能制造相关企业。' },
];

const qishuReviewMetrics = [
  { label: 'Review Time', value: '分钟级', note: '单张图纸审查时间压缩至分钟级，适合嵌入设计过程。' },
  { label: 'Rules', value: '12000部+', note: '内嵌国家及地方建筑规范、消防、防火、节能与强条知识库。' },
  { label: 'Recall', value: '76.8%', note: '问题召回率口径，仍需在更多真实项目中持续验证。' },
  { label: 'False Positive', value: '20.3%', note: '误报率口径，用于评估人工复核成本和模型迭代方向。' },
  { label: 'Pass Rate', value: '83%', note: '人工复核通过率口径，目标是让总工和专业负责人更早发现风险。' },
  { label: 'Report', value: '自动化', note: '自动生成问题位置、风险等级、条文依据、修改建议与审图报告。' },
];

const qishuDemoVideos = [
  {
    meta: 'Building Industry',
    title: '建筑行业表现演示',
    body: '展示启枢 AI 在建筑行业图纸理解、空间解析、审查提示与交付链路中的实际表现。',
    src: 'assets/qishu-building-industry-demo.mp4',
  },
  {
    meta: 'Decoration',
    title: '装饰装修行业演示',
    body: '展示启枢 AI 在装饰装修场景中的图纸处理、空间表达与业务流程协同能力。',
    src: 'assets/qishu-decoration-demo.mp4',
  },
  {
    meta: 'Cost Management',
    title: '工程造价管理演示',
    body: '展示启枢 AI 在工程造价管理中的图纸信息提取、清单理解与管理流程辅助能力。',
    src: 'assets/qishu-cost-management-demo.mp4',
  },
  {
    meta: 'Reserved',
    title: '预留演示位',
    body: '后续补充启枢 AI 的新行业或新业务线演示视频。',
    placeholder: true,
  },
];

const qishuModuleDemoVideos = {
  drawingIntelligence: {
    meta: 'Module 01 Demo',
    title: '工程设计与图纸智能演示',
    body: [
      '展示启枢 AI 在建筑设计场景下，对 CAD 图纸、BIM 视图和项目资料进行连续解析的过程。',
      '系统会识别图纸中的线段、图层、构件、标注和空间边界，并将其转化为可计算、可复核、可编辑的工程对象，为后续图纸清洗、施工图辅助生成、规范预检和多专业协同提供基础。',
      '这不是单纯的图纸展示，而是启枢从“看懂工程图纸”到“辅助生成可交付成果”的核心能力演示。',
    ],
    src: 'assets/qishu-building-industry-demo.mp4',
  },
  decoration: {
    meta: 'Module 04 Demo',
    title: '装饰装修业务演示',
    body: [
      '展示启枢 AI 在装饰装修场景中，从空间方案理解到风格表达、流程协同的演示过程。',
      '系统可以在同一空间基础上识别墙体、门窗、柜体、家具和主要构件，并根据不同设计方向生成多风格空间表达结果。该能力为施工图深化、材料匹配、定制拆单和客户沟通提供结构化基础。',
      '通过这一模块，启枢帮助装饰企业缩短方案沟通周期，让设计表达、客户确认和后续交付流程更连续。',
    ],
    src: 'assets/qishu-decoration-demo.mp4',
  },
  costManagement: {
    meta: 'Module 03 Demo',
    title: '工程造价管理演示',
    body: [
      '展示启枢 AI 在工程造价场景中，对图纸信息、构件对象、工程量和材料数据进行提取、理解与管理辅助的过程。',
      '系统会从结构图纸和项目资料中识别墙体、柱梁、门窗、管线、板件、区域和楼层等对象，并按照专业、区域、楼层和构件类型提取工程量，辅助生成工程量清单、材料统计、报价底稿和差异提示。',
      '这一模块并不替代造价人员的专业判断，而是把重复识别、数量提取、数据整理和版本追踪前置给系统完成，帮助团队减少漏项风险、提升核算效率，并形成从图纸到成本的可追踪工作闭环。',
    ],
    src: 'assets/qishu-cost-management-demo.mp4',
  },
};

const qishuProductPillars = [
  { kicker: 'Design', title: '工程设计与图纸工作', body: '图纸清洗与标准化、立面施工图生成、规范预检与智能审图，以及建筑、结构、水、电、暖通等专业 AI 协同。' },
  { kicker: 'Production', title: '生产与成本工作', body: '全屋定制自动拆单、钢筋排布与材料优化、工程量提取与造价辅助，把设计成果连接到生产和成本管理。' },
  { kicker: 'Spatial', title: '三维空间工作', body: '3D 多维空间画布、真实空间快速重建与实时渲染、混合现实现场交互，让二维图纸进入可操作空间。' },
];

const qishuInputTypes = ['CAD图纸', 'BIM模型', '效果图', '文字需求', '行业规范', '企业内部标准', '空间扫描资料', '材料信息', '工艺信息', '项目历史数据'];

const qishuWorkMethod = [
  '接收企业资料',
  '把图纸变成AI能够理解的数据',
  'Harness系统拆解任务并安排工作',
  '调用行业知识、企业规则和专业软件',
  '检查结果并交给专业人员确认',
  '保存反馈并持续优化下一次任务',
];

const qishuEngineeringModules = [
  { kicker: 'Module 01', title: '图纸清洗与标准化', body: '识别多余线条、重复图形、错误图层、断开墙体、无效图块和不规范标注，帮助输出可继续用于 BIM、审图、拆单和施工的标准图纸。' },
  { kicker: 'Module 02', title: '立面施工图生成', body: '根据平面图、效果图、空间关系和客户制图标准，辅助生成立面施工图，再由设计师进行专业调整和确认。' },
  { kicker: 'Module 03', title: '规范预检与智能审图', body: '将图纸与行业规范对照，说明问题位置、可能违反的规则、风险等级、修改建议和判断依据。' },
  { kicker: 'Module 04', title: '多专业AI协同', body: '面向建筑、结构、给排水、电气、暖通等专业，让多个专业 AI 分工检查，帮助工程师更早发现冲突。' },
];

const qishuProductionCostModules = [
  { kicker: 'Whole-house', title: '全屋定制自动拆单', body: '从设计方案识别柜体和构件，拆分板件，加载工厂规则，匹配五金和孔位，检查冲突后输出生产文件。' },
  { kicker: 'Rebar', title: '钢筋优化', body: '辅助识别结构构件、读取钢筋参数、模拟节点排布、检查碰撞和间距，并比较不同方案的材料成本。' },
  { kicker: 'Cost', title: '工程造价管理', body: '从图纸中提取构件数量、材料信息、工程量和项目参数，减少造价人员重复计算、录入和核对工作。' },
];

const qishuSpatialModules = [
  { kicker: 'Canvas', title: '3D多维空间画布', body: '将二维图纸和真实空间转化为可操作三维场景，支持自由查看、布局调整、材质更换和多人评审。' },
  { kicker: 'Scan', title: '真实空间快速重建', body: '结合照片、视频或空间扫描资料建立可浏览的真实空间数字模型，降低重复建模成本。' },
  { kicker: 'MR', title: '混合现实现场交互', body: '让三维空间数据继续服务施工图生成、拆单、工程量计算、材料配置、现场指导和机器人空间建模。' },
];

const qishuCustomerLifecycle = [
  '初步接触',
  '深入了解需求',
  '提交解决方案',
  '技术测试',
  'POC验证',
  '付费试点',
  '工作流激活',
  '正式部署',
  '项目验收',
  '完成回款',
];

const qishuBusinessProgressRows = [
  ['业务转化指标', '客户数量、POC、合同、收入和回款', '按已接触、深度沟通、已提交方案、正在测试、已完成POC、已签约、已交付、已验收、已回款分层披露。'],
  ['工作流激活指标', '企业内训、认证人员、激活工作流数量、月活使用人数和模块接入深度', '准确区分完成培训、通过认证、实际进入日常项目使用三个层级。'],
  ['重点客户方向', '大型装饰企业、建筑设计院、工程总包、全屋定制、工程造价、工业空间和智能制造客户', '具体客户按真实进展写为需求交流、方案提交、技术验证、POC、合同、交付或回款。'],
];

const qishuRevenueStages = [
  { stage: '验证切入', title: 'POC 验证费' },
  { stage: '部署激活', title: '企业部署与工作流激活费' },
  { stage: '平台使用', title: '年度平台使用费' },
  { stage: '模块订阅', title: '功能模块订阅' },
  { stage: '用量计费', title: '按使用量收费' },
  { stage: '行业规则包', title: '行业规则包' },
  { stage: '客户成功 / 认证', title: '客户成功 / 认证服务' },
];

const qishuRevenueMetrics = [
  { icon: 'trend', label: '单客户 LTV 扩张目标', value: '6x+', note: '成熟客户从验证向平台、模块和用量扩张的目标' },
  { icon: 'pie', label: '经常性收入占比目标', value: '80%+', note: '平台、订阅、用量与规则包形成的目标占比' },
  { icon: 'grid', label: '模块渗透目标', value: '3个以上模块', note: '成熟客户跨工作流增购的目标深度' },
  { icon: 'shield', label: '年化留存率目标', value: '90%+', note: '以续费和持续使用记录验证的目标' },
];

const qishuRevenueComposition = [
  ['28%', '平台使用费'],
  ['22%', '模块订阅'],
  ['20%', '用量计费'],
  ['15%', '行业规则包'],
  ['10%', '客户成功 / 认证服务'],
  ['5%', 'POC / 部署激活费'],
];

const qishuRevenueDrivers = [
  ['coverage', '更广覆盖', '多场景 / 行业渗透'],
  ['depth', '更深的使用', '多模块 / 多角色使用'],
  ['satisfaction', '更高满意度', '成功体系与价值交付'],
  ['link', '更强粘性', '流程嵌入与数据沉淀'],
  ['renewal', '更高的续费', '长期合同与扩展增购'],
];

const qishuRevenueTypes = [
  ['shield', '验证收入', '降低验证门槛，快速建立信任', '小额切入，缩短成交周期'],
  ['cube', '落地收入', '打通系统与流程，完成部署落地', '一次性费用，价值兑现'],
  ['coin-cycle', '经常性收入', '平台费 + 模块订阅 + 用量计费', '持续产生，稳定可预期'],
  ['trend', '扩张收入', '用量增长 + 规则包升级 + 认证培训', '提升客单价与续费率'],
];

const qishuRevenueDetailRows = [
  ['01', 'shield', 'POC 验证费', '按项目或场景收取', '阶段性收入', '明确样本、指标与验收范围后启动', '用较低试错成本验证 ROI'],
  ['02', 'building', '企业部署与工作流激活费', '按部署复杂度收取', '一次性落地收入', '进入集成、配置和数据导入', '完成权限、接口与业务流程上线'],
  ['03', 'window', '年度平台使用费', '按企业规模、席位或项目数', '经常性收入', '工作流进入日常运行', '获得统一平台能力与运维保障'],
  ['04', 'puzzle', '功能模块订阅', '按模块类型与数量订阅', '经常性收入', '新增业务单元或工作流', '按实际业务价值扩展能力'],
  ['05', 'usage', '按使用量收费', '按任务、数据或存储量阶梯计费', '弹性经常性收入', '使用量达到约定计量单位', '业务增长时成本仍可核算'],
  ['06', 'package', '行业规则包', '按行业或规则包授权', '订阅或授权收入', '采用专项规范与企业规则', '缩短交付周期并提升一致性'],
  ['07', 'medal', '高阶工作流认证与效能升级费', '按服务包或认证等级', '服务与扩张收入', '岗位认证或流程升级', '提升团队效能与流程成熟度'],
];

const qishuRevenueConclusions = [
  ['不是单次授权', '从验证到运营，覆盖全周期价值。', '收入持续发生，客户持续获益。'],
  ['不是单一客单价', '多维计费结构，匹配不同规模与阶段。', '实现价值与付费的动态对齐。'],
  ['不是一次性交付', '持续交付与迭代，驱动长期合作。', '客户成功，带来扩张与续费。'],
];

const qishuRevenueCards = [
  { kicker: 'Revenue 01', title: '企业部署与工作流激活费', body: '包含系统安装、私有化部署、企业数据接入、原有软件对接、规则配置、关键岗位内训和首批项目上线陪跑。' },
  { kicker: 'Revenue 02', title: '年度平台使用费', body: '企业按年度支付平台使用费用，价格依据使用人数、使用模块、项目数量、企业规模和部署方式确定。' },
  { kicker: 'Revenue 03', title: '功能模块订阅', body: '客户可按需购买图纸清洗、施工图生成、智能审图、全屋拆单、钢筋优化、工程造价和3D空间画布。' },
  { kicker: 'Revenue 04', title: '按使用量收费', body: '可按图纸张数、项目数量、建筑面积、拆单数量、三维场景数量、计算任务数量或接口调用量计费。' },
  { kicker: 'Revenue 05', title: '高阶工作流认证与效能升级费', body: '围绕岗位认证、行业模板、流程优化、效能复盘、新规范和新场景升级，持续提升客户工作流成熟度。' },
];

const qishuMarketEntrySteps = [
  { title: '第一步：与头部客户共同验证', body: '优先选择需求明确、人工成本高、重复工作多、结果可量化、付费意愿强的具体场景。' },
  { title: '第二步：把客户项目变成标准产品', body: '从项目需求中提炼标准功能、接口、规则、交付流程和价格体系。' },
  { title: '第三步：复制到同类企业', body: '建立统一产品演示、POC方案、部署流程、培训体系、客户成功体系和售后升级机制。' },
  { title: '第四步：进入相邻工业场景', body: '从建筑工程和生产制造扩展到工业厂房改造、管线设计、设备布局、机器人空间建模等任务。' },
];

const qishuCompetitiveRows = [
  ['CAD/BIM 工具', '专业制图、建模能力成熟，是工程交付底座', '跨软件协同和重复操作仍依赖人工', '作为其上的 AI 作业层，读取对象并回写可编辑成果'],
  ['广联达/BIM 平台', '覆盖算量、造价和工程管理流程', '跨场景智能执行与企业规则闭环仍需专项配置', '以矢量理解、任务调度和专业复核连接既有平台'],
  ['酷家乐/三维家', '空间设计、效果表达和定制业务链成熟', '复杂工程规则与跨专业交付并非核心', '在工程图纸、规则核验和生产数据连接上形成互补'],
  ['传统人工审查', '经验可信，责任边界清晰', '耗时高、重复劳动多、知识难结构化复用', '先做风险前置与问题清单，保留专业人员最终确认'],
  ['通用大模型', '语言、图像与通用知识能力强', '不天然理解 CAD 图层、矢量关系和工程交付格式', '以专业对象模型、规则库和可复核流程补齐企业可用性'],
  ['客户自建', '贴合内部系统与数据权限', '建设周期、维护成本和跨项目复用压力高', '以标准模块、部署能力和持续升级降低总拥有成本'],
];

const qishuCommercialPriorityRows = [
  ['01｜当前切入', '建筑工程图纸与智能审查', '已有双轨实验与量化工时证据', 'POC、部署与审查工作流付费'],
  ['02｜相邻增购', '工程造价与全屋定制拆单', '共享图纸、构件、材料与规则对象', '在同一客户或同类客户中增加模块收入'],
  ['03｜长期扩展', '工业空间、管线、设备与机器人', '复用 3D 矢量模型与空间规则', '以联合试点验证，不作为当前收入承诺'],
];

const qishuValidationEvidenceRows = [
  ['CTA 地库车库施工图联合双轨实验', '建筑工程施工图', '传统人工总工时 128.5h', '图纸清洗、对象识别、问题前置、可编辑输出', '专业人员全程复核', '人机协同 43.8h，释放 65.9% 工时', '同类图纸、同一任务边界与统一计时口径'],
  ['陕建一建设计院车道坡双轨试验', '车道坡施工图', '传统综合工时 116.0h', '矢量解析、规则预警、问题清单与交付辅助', '设计院专业人员复核', '综合工时 32.5h，节省约 72.0%', '同专业样本、同一交付标准与统一复核口径'],
  ['规则风险前置复测', '建筑工程图纸', '风险前置率 62%', '规则匹配与问题定位', '专业负责人确认', '风险前置率提升至 88%', '固定规则集、固定样本与相同责任边界'],
  ['一次复核通过复测', '建筑工程图纸', '一次复核通过率 69%', '对象识别、问题修正与成果整理', '专业负责人验收', '一次复核通过率提升至 86%', '固定验收清单与相同复核人员口径'],
];

const qishuPipelineRows = [
  ['客户 A', '建筑设计院', '双轨实验完成', '完成施工图样本验证与工时记录', '明确付费 POC 范围、验收指标和采购路径', '未披露', '商务边界与采购流程确认'],
  ['客户 B', '工程建设企业', '案例验证', '完成车道坡施工图双轨试验', '确认下一批项目样本与部署方式', '未披露', '项目排期与数据授权'],
  ['客户 C', '装饰/全屋定制企业', '场景沟通', '完成需求与拆单流程梳理', '选择样板项目并定义 ROI 口径', '未披露', '样本完整性与工厂规则接入'],
  ['客户 D', '工程造价/总包方向', '方案准备', '完成造价能力方案与样本需求定义', '获取脱敏样本并启动基线测量', '未披露', '数据提供与专业复核资源'],
];

const qishuMarketScaleRows = [
  ['可服务客户池', '建筑设计院、工程总包、装饰与定制、造价机构及相邻工业空间企业', '按目标客户名单、业务频次和可验证痛点筛选'],
  ['验证漏斗', '需求沟通 → 样本评估 → POC → 付费试点 → 部署 → 增购', '按 CRM 阶段、转化时间和验收结果滚动复盘'],
  ['收入推导', '客户数 × 部署/平台收入 + 模块增购 + 用量收入', '以实际合同金额、回款和系统用量更新，不预设 TAM 数字'],
];

const qishuTeamExecutionRows = [
  ['高溪涵｜CEO', '公司经营、重点客户与项目推进', '客户决策、交付节奏'],
  ['卢佩伦 Ph.D｜CTO', '算法与模型技术方向', '矢量理解、模型评估与技术路线'],
  ['魏雅楠｜产品', 'AI 平台产品战略', '需求归一、产品边界与版本规划'],
  ['张晓晨｜行业/BIM', 'BIM 项目与行业资源协同', '专业流程、样本验收与场景扩展'],
  ['许沧洲｜架构', 'AI 架构与系统整合', '工程实现、数据链路与交付环境'],
  ['杨宇轩｜运营', '运营与组织协同', '项目台账、客户成功与运营节奏'],
];

const qishuRiskRows = [
  ['数据与安全', '工程资料涉及客户核心项目数据', '脱敏样本、最小权限、部署边界、访问日志与合同约束'],
  ['准确率与责任边界', 'AI 输出不能直接替代专业签审', '固定验收清单、问题可追溯、专业人员最终确认'],
  ['客户集中度', '早期标杆客户数量有限', '并行维护 3—5 家 POC 管线并沉淀可复制产品模块'],
  ['定制化失控', '单客户需求可能拉低产品复用率', '把需求拆为标准模块、企业配置与明确边界的专项服务'],
  ['跨行业扩张过快', '资源分散会削弱当前入口证据', '建筑工程图纸优先，相邻场景按复用条件和联合试点推进'],
];

const qishuGrowthMoats = [
  { kicker: 'Layer 01', title: '读懂专业图纸', body: '理解线条、图层、构件、尺寸、标注和空间关系，而不是把图纸当成普通图片。' },
  { kicker: 'Layer 02', title: '组织完整工作流程', body: 'Harness系统安排 AI 模型、专业智能体、软件工具、企业规则和人工复核共同完成复杂任务。' },
  { kicker: 'Layer 03', title: '积累行业规则', body: '持续积累国家标准、地方规范、企业标准、项目经验、生产规则和人工判断结果。' },
  { kicker: 'Layer 04', title: '连接客户现有系统', body: '进入客户正在使用的 CAD、BIM、造价软件、渲染系统、生产系统和企业内部平台。' },
  { kicker: 'Layer 05', title: '积累真实项目数据', body: '每个项目沉淀原始资料、AI处理结果、人工调整过程、最终交付成果、客户反馈和生产施工结果。' },
];

const financingOpportunityPath = ['生成内容', '理解任务', '调用工具', '协同执行', '交付结果'];

const qishuCommonAiRows = [
  ['当前常见AI', '回答一个问题、生成一段内容、主要理解文字、单模型独立工作、结果需要人工整理。'],
  ['企业真正需要的AI', '完成一整项任务、交付可使用成果、理解图纸图片规则和数据、多AI分工合作、每一步可以检查和追溯。'],
];

const financingHarnessNodes = ['业务目标', 'AI智能体', '专业软件', '行业知识', '企业人员', '项目数据'];
const financingHarnessOutputs = ['可执行工作方案', '可检查执行过程', '可验证专业成果', '可交付业务结果'];

const financingProductPillars = [
  { kicker: 'Core 01', title: '工程设计与图纸工作', body: '图纸清洗、施工图辅助生成、规范预检、智能审图和多专业协同。', image: 'assets/qishu-core-design-work.png' },
  { kicker: 'Core 02', title: '生产与成本工作', body: '全屋定制拆单、钢筋优化、工程量提取和造价管理辅助。', image: 'assets/qishu-core-production-cost.png' },
  { kicker: 'Core 03', title: '三维空间工作', body: '2D到3D空间画布、真实空间重建、混合现实现场表达和空间数据复用。', image: 'assets/qishu-core-spatial-work.png' },
];

const financingQishuFlow = [
  '接收企业资料',
  '把图纸变成AI能够理解的数据',
  'Harness系统安排工作',
  '检查并交付结果',
];

const qishuInputCards = [
  { kicker: '资料输入', title: 'CAD / BIM / 效果图', body: '接收图纸、模型、效果图、文字需求、空间扫描资料、材料和工艺信息。' },
  { kicker: '数据理解', title: '识别工程语义', body: '识别线条、墙体、门窗、构件、尺寸、标注和空间关系。' },
  { kicker: '任务调度', title: '安排AI角色和工具', body: '拆解步骤、调用客户规则、操作专业软件，并协调不同模块推进。' },
  { kicker: '交付检查', title: '专业人员最终确认', body: '检查完整性、尺寸、规则和专业冲突，再进入专业人员确认。' },
];

const financingDrawingModules = [
  { kicker: 'Drawing 01', title: '图纸清洗与标准化', body: '识别错误图层、断裂墙线、重复构件和无效标注，形成可继续计算的工程数据。' },
  { kicker: 'Drawing 02', title: '立面施工图生成', body: '结合平面图、效果图和客户制图标准，辅助生成立面施工图并进入人工确认。' },
  { kicker: 'Drawing 03', title: '规范预检与智能审图', body: '对照国家、地方和企业标准，提示问题位置、风险等级、依据和修改方向。' },
  { kicker: 'Drawing 04', title: '多专业AI协同', body: '让建筑、结构、给排水、电气、暖通等专业在同一图纸语义上分工检查。' },
];

const qishuOpportunityRows = [
  ['当前常见AI', '回答一个问题、生成一段内容、主要理解文字或图片，结果仍要由人工重新整理到专业软件和交付流程里。'],
  ['企业真正需要的AI', '完成一整项任务，理解图纸、模型、规则、材料和企业数据，调度软件与人员，输出可检查、可追溯、可交付的成果。'],
];

const qishuObjectRuleRows = [
  ['建筑设计/审查', '墙线、门窗、柱网、标注、楼层、规范条文', '图纸清洗、施工图深化、风险预检、CAD/BIM可编辑成果'],
  ['工程造价', '构件边界、区域、楼层、材料、规格、版本差异', '工程量提取、材料统计、报价底稿、差异提示'],
  ['定制拆单', '柜体、板件、孔位、五金、封边、工艺规则', '拆单表、加工文件、材料清单、冲突检查'],
  ['工业空间', '设备边界、管线走向、安全距离、通道、现场空间', '设备布局评审、碰撞检查、厂房改造、机器人空间建模'],
];

const qishuPainRows = [
  ['建筑设计', '图纸重复绘制、人工审图、多专业协同靠经验', '返工、延期、总工复核压力', '图纸语义理解 + 智能审查'],
  ['工程造价', '重复算量、材料统计和清单复核大量依赖人工', '报价偏差、漏项、版本不一致', '构件识别 + 工程量提取'],
  ['定制拆单', '设计方案不能直接进入工厂生产', '错单漏单、补件返工、客户投诉', '板件识别 + 生产文件输出'],
  ['工业空间', '设备、管线、通道和现场边界关系复杂', '碰撞、返工、现场临时修改', '3D矢量建模 + 空间校验'],
];

const qishuVectorModelRows = [
  ['图层识别', '识别不同图层、线型、颜色、标注与专业分类'],
  ['线段清洗', '发现断线、重线、错误线型和无效标注'],
  ['闭合判断', '判断墙体、房间、柜体、设备边界等闭合结构'],
  ['构件识别', '识别墙、门窗、柱网、管线、板件、孔位等工程对象'],
  ['可编辑输出', '输出保留图层、线型、比例和构件关系的CAD/DXF成果'],
];

const qishuSpatialModelRows = [
  ['2D转3D', '从平面、立面、剖面和图纸关系中重建空间结构'],
  ['空间拓扑', '建立房间、楼层、设备、管线、构件之间的关系'],
  ['碰撞检查', '发现构件、管线、设备、空间边界之间的冲突'],
  ['现场复核', '支持施工、改造、生产现场的空间对照和确认'],
  ['MR表达', '把图纸和模型带到现场评审、汇报和协同中'],
];

const qishuWorkflowRows = [
  ['资料输入', 'DWG、DXF、PDF、BIM、效果图、现场照片、规则、材料表', '原始项目资料池'],
  ['矢量解析', '线段、图层、标注、构件、闭合关系识别', '可计算工程对象'],
  ['3D建模', '空间拓扑、构件体块、设备/管线关系', '可校验空间模型'],
  ['任务调度', 'Harness系统调用Agent、专业软件、知识库和规则', '执行过程记录'],
  ['专业输出', '审查报告、工程量、拆单文件、CAD/DXF、3D模型', '可交付成果'],
  ['人工复核', '设计师、工程师、总工、造价或拆单人员确认修正', '可追溯项目闭环'],
];

const qishuBuildingRows = [
  ['图纸清洗', '图层、线型、标注、断线、重线清洗', '结构化CAD图纸'],
  ['施工图辅助', '平面、立面、剖面、节点辅助生成', '可编辑图纸成果'],
  ['智能审查', '消防、疏散、节能、强条、尺寸预检', '风险点 + 条文依据'],
  ['多专业协同', '建筑、结构、机电、暖通等交叉检查', '问题清单'],
  ['总工复核', '专业人员确认和修正', '审查报告 + 归档记录'],
];

const financingDrawingFlow = ['原始图纸', '自动清洗', '图纸结构化', '施工图生成', '规范检查', '专业人员确认', '最终图纸'];

const financingOrderPath = [
  { title: '方案输入', body: '平面图、立面图、效果图和柜体图进入同一对象池。' },
  { title: '构件拆分', body: '识别柜体、板件、门板、背板、层板和组装关系。' },
  { title: '规则匹配', body: '匹配孔位、五金、封边、材料和工厂工艺约束。' },
  { title: '冲突检查', body: '检查尺寸、孔位、材料和安装顺序冲突。' },
  { title: '生产输出', body: '人工确认后输出拆单表、加工文件和材料清单。' },
];

const qishuOrderValueCards = [
  { kicker: 'Object', title: '空间对象进入生产', body: '先识别空间、柜体、构件和板件边界，再把方案拆成工厂可理解的数据。' },
  { kicker: 'Rule', title: '经验沉淀为规则', body: '把资深拆单人员依赖的孔位、五金、封边和材料口径沉淀到规则库。' },
  { kicker: 'Risk', title: '提前发现错单漏单', body: '在生产前检查尺寸、孔位、材料和组装关系，减少补件和返工。' },
  { kicker: 'Delivery', title: '缩短设计到生产周期', body: '输出仍由拆单人员或工程师确认，但重复识别和文件整理由系统前置。' },
];

const qishuDecorationCapabilities = [
  { kicker: '01', title: '空间方案理解', body: '识别户型、墙体、门窗、家具、柜体和空间边界，形成可继续处理的空间对象。' },
  { kicker: '02', title: '多风格表达', body: '基于同一空间视角生成不同装饰风格方案，辅助设计沟通和客户确认。' },
  { kicker: '03', title: '材料与构件关联', body: '将视觉方案与材料、柜体、板件、饰面和工艺要求建立联系。' },
  { kicker: '04', title: '流程协同衔接', body: '为施工图深化、拆单、造价和现场沟通提供结构化基础。' },
];

const financingCostCards = [
  { kicker: 'Object', title: '构件识别', body: '从图纸中识别墙体、柱梁、门窗、管线、板件、区域和楼层。' },
  { kicker: 'Quantity', title: '工程量提取', body: '按专业、区域、楼层和构件类型提取数量，形成可核对底稿。' },
  { kicker: 'Material', title: '材料统计', body: '关联材料规格、工艺参数和用量，减少重复录入和口径差异。' },
  { kicker: 'Cost', title: '成本辅助', body: '生成报价底稿、差异提示和版本追踪，关键口径由造价人员确认。' },
];

const financingSpatialPath = [
  { title: '二维图纸 / 现场资料', body: '接收平面、立面、剖面、照片、扫描资料和BIM视图。' },
  { title: '空间结构组织', body: '建立楼层、房间、构件、设备、管线和标高关系。' },
  { title: '空间规则计算', body: '检查相邻、冲突、避让、安全距离和尺寸规则。' },
  { title: '现场复核与MR评审', body: '把图纸和空间结果带到施工、改造、生产和汇报现场。' },
];

const qishuSpatialApplications = [
  { kicker: 'Factory', title: '工业厂房改造', body: '识别设备、通道和空间边界，辅助改造方案快速评审。' },
  { kicker: 'Pipeline', title: '工业管线', body: '处理管线路径、碰撞、标高关系和运维空间，降低施工冲突。' },
  { kicker: 'Layout', title: '设备布局', body: '围绕设备尺寸、安全距离和运维空间提升布局效率。' },
  { kicker: 'Robot', title: '机器人空间建模', body: '把空间边界、障碍物和路径转换为机器可理解的结构数据。' },
];

const financingValidationCards = [
  { kicker: 'Metric 01', title: '总工作时间', body: '记录人工流程与启枢流程在同一项目中的时间差异。' },
  { kicker: 'Metric 02', title: '参与人数', body: '记录设计、审查、造价、项目管理等角色参与情况。' },
  { kicker: 'Metric 03', title: '第一次提交可用率', body: '观察首次交付成果能否进入专业复核和客户确认。' },
  { kicker: 'Metric 04', title: '修改时间', body: '记录从问题发现到修改完成的闭环效率。' },
  { kicker: 'Metric 05', title: '一次复核通过率', body: '衡量关键节点复核通过情况和返工风险。' },
  { kicker: 'Metric 06', title: '问题闭环率', body: '跟踪问题是否被定位、解释、处理并形成记录。' },
  { kicker: 'Metric 07', title: '最终错误率', body: '以专业人员最终确认后的问题数量作为质量指标。' },
];

const qishuValidationBars = [
  { label: '综合工时试验一', beforeLabel: '传统人工', before: '128.5h', beforePercent: 100, afterLabel: '启枢协同', after: '43.8h', afterPercent: 34, delta: '节省65.9%' },
  { label: '综合工时试验二', beforeLabel: '传统人工', before: '116.0h', beforePercent: 100, afterLabel: '启枢协同', after: '32.5h', afterPercent: 28, delta: '节省约72.0%' },
  { label: '风险前置发现率', beforeLabel: '传统流程', before: '约62%', beforePercent: 62, afterLabel: '启枢流程', after: '约88%', afterPercent: 88, delta: '提升约26pct' },
  { label: '一次复核通过率', beforeLabel: '传统流程', before: '约69%', beforePercent: 69, afterLabel: '启枢流程', after: '约86%', afterPercent: 86, delta: '提升约17pct' },
];

const financingCommercialRows = [
  ['客户生命周期', '接触 → 需求确认 → 方案提交 → 技术测试 → POC验证 → 付费试点 → 工作流激活 → 正式部署 → 项目验收 → 完成回款。'],
  ['业务转化指标', '客户数量、POC、合同、收入和回款必须按真实阶段分层披露，不把沟通写成合作，不把测试写成收入。'],
  ['AI工作流激活指标', '企业内训、认证人员、激活工作流数量、月活使用人数、模块接入深度、认证人员参与项目数量。'],
  ['重点客户方向', '大型装饰企业、建筑设计院、工程总包企业、全屋定制企业、工程造价机构、工业厂房改造客户、工业管线与设备布局客户、机器人/AGV/仓储空间客户。'],
];

const qishuCommercialFunnelItems = [
  { label: '建筑图纸验证入口', value: '已有双轨实验与案例验证', width: 100 },
  { label: '造价/拆单相邻场景', value: '需求确认、样板项目和ROI复测', width: 78 },
  { label: '工业空间延展方向', value: '联合定义首批应用试点与空间复核口径', width: 56 },
  { label: '机器人/AGV空间协同', value: '与巨灵方向形成空间建模与任务协同', width: 38 },
];

const financingRevenueCards = [
  { kicker: 'Revenue 01', title: 'POC验证费', body: '按项目或场景收取，用真实项目验证工时节省、错误减少、周期缩短和复核效率。' },
  { kicker: 'Revenue 02', title: '企业部署与工作流激活费', body: '覆盖本地化、权限、数据安全、企业规则配置、接口接入、关键岗位内训和上线陪跑。' },
  { kicker: 'Revenue 03', title: '年度平台使用费', body: '按企业规模、席位、项目数、模块范围和部署方式形成年度续费基础。' },
  { kicker: 'Revenue 04', title: '功能模块订阅', body: '图纸智能、审查、造价、全屋定制自动拆单、3D空间和行业规则包按需扩展。' },
  { kicker: 'Revenue 05', title: '按使用量收费', body: '按图纸张数、项目数量、拆单数量、三维场景数量或API调用量随使用增长。' },
  { kicker: 'Revenue 06', title: '行业规则包', body: '规范库、工艺库、材料库和企业标准持续升级，提高专业适配和复用能力。' },
  { kicker: 'Revenue 07', title: '高阶工作流认证与效能升级费', body: '作为客户成功、工作流绑定、续费增购和行业效能标准入口，提升组织使用深度。' },
];

const financingMarketEntry = [
  { title: '第一阶段：建立可信标杆', body: '用建筑图纸、智能审查和施工图深化证明工时节省、复核通过率和问题闭环。' },
  { title: '第二阶段：扩展收入模块', body: '把图纸理解延展到工程造价、定制拆单和材料清单，验证单客户增购。' },
  { title: '第三阶段：扩大技术边界', body: '进入工业空间、管线、设备布局和机器人空间建模，验证空间模型复用。' },
  { title: '复制原则：同类作业结构', body: '不是简单跨行业，而是复制资料清晰、任务高频、结果可复核的工程矢量作业。' },
];

const financingMarketCards = [
  { kicker: 'Layer 01', title: '设计工程客户', body: '建筑设计院、装饰设计企业、工程总包和专业深化机构。' },
  { kicker: 'Layer 02', title: '生产成本客户', body: '全屋定制、钢筋加工、工程造价、工程咨询等生产与成本企业。' },
  { kicker: 'Layer 03', title: '工业空间客户', body: '工业厂房设计、工业管线、设备布局、机器人空间建模和智能制造相关企业。' },
  { kicker: 'Formula', title: '底层测算公式', body: '目标企业数量 × 每家企业年度付费 × 可实现客户渗透率。' },
];

const financingCompetitionRows = [
  ['CAD/BIM底层软件', 'AutoCAD、Revit、中望、浩辰等绘图和建模生态强', 'AI审查、规则理解和交付闭环弱', '启枢做其上的AI作业层'],
  ['工程造价/BIM平台', '广联达等客户基础和行业数据强', '设计端AI原生工作流不足', '从图纸理解向造价和成本底稿延展'],
  ['装饰设计软件', '酷家乐、三维家等可视化和家装设计强', '工程规则、生产拆单和工业空间弱', '打通设计到生产数据'],
  ['传统审图软件', '规则稳定，适合固定审查任务', '交互弱、修改建议弱、闭环弱', 'AI定位、解释、建议和复核闭环'],
  ['通用大模型', '语言和通用知识能力强', '不懂CAD图层、线段闭合、构件关系和工程责任', '垂直矢量模型 + 工作流壁垒'],
];

const financingDataFlywheel = [
  '真实项目输入',
  '矢量对象识别',
  '3D空间建模',
  '规则命中与任务执行',
  '专业人员复核',
  '问题回流与经验沉淀',
  '模型判断更准确',
];

const qishuDataAssetItems = [
  {
    icon: 'layers',
    title: '真实图纸与矢量对象',
    body: '线段、图层、构件、标注、闭合关系。',
  },
  {
    icon: 'cube',
    title: '空间数据',
    body: '3D 模型、拓扑关系、碰撞记录、现场反馈。',
  },
  {
    icon: 'book',
    title: '行业规则',
    body: '建筑规范、企业标准、工艺约束、材料规则、生产规则。',
  },
  {
    icon: 'person-check',
    title: '人工复核结果',
    body: '总工、工程师、造价人员、拆单人员对 AI 输出的确认与修正。',
  },
];

const qishuDataFlywheelNodes = [
  { icon: 'folder', title: '真实项目输入', body: 'CAD / BIM / 图纸 / 文档 / 标注 / 工单 / 现场反馈' },
  { icon: 'cube', title: '矢量对象识别', body: '线段 / 图层 / 构件 / 标注 / 闭合关系 / 构件语义' },
  { icon: 'network', title: '3D 空间建模', body: '3D 模型 / 拓扑关系 / 碰撞检测 / 空间理解' },
  { icon: 'checklist', title: '规则命中与任务执行', body: '规范检查 / 工艺约束 / 任务分配 / 自动处理' },
  { icon: 'user', title: '专业人员复核', body: '总工 / 工程师 / 造价 / 拆单确认、修正、补充' },
  { icon: 'cloud-sync', title: '问题回流与经验沉淀', body: '错误原因 / 修正结果 / 经验注入 / 样本沉淀' },
  { icon: 'trend', title: '模型判断更准确', body: '语义更完整 / 规则更全 / 预测更准确 / 误判更少' },
  { icon: 'grid', title: '客户使用更多模块', body: '产生更多真实项目数据，推动模型与规则继续进化' },
];

const qishuDataLiftItems = [
  { icon: 'layers', title: '图纸语义理解更深', body: '识别更全面，理解更准确' },
  { icon: 'target', title: '规则命中更准', body: '误报更少，漏报更低' },
  { icon: 'shield', title: '交付经验更强', body: '问题更少，效率更高' },
  { icon: 'grid', title: '多模块扩张更自然', body: '数据驱动，能力持续进化' },
];

const qishuDataLoopNodes = [
  { icon: 'folder', title: '真实项目输入' },
  { icon: 'cube', title: '矢量对象识别' },
  { icon: 'network', title: '3D 空间建模' },
  { icon: 'checklist', title: '规则命中与任务执行' },
  { icon: 'user', title: '专业人员复核' },
  { icon: 'cloud-sync', title: '问题回流与经验沉淀' },
  { icon: 'trend', title: '模型判断更准确' },
  { icon: 'grid', title: '客户使用更多模块' },
  { icon: 'database', title: '产生更多真实项目数据' },
];

const qishuDataAssetTableRows = [
  ['layers', '真实图纸与矢量对象', '线段、图层、构件、标注、闭合关系', '项目解析与结构化提取', '图纸语义理解更深', '支撑图纸智能、审查、造价、拆单等模块'],
  ['cube', '空间数据', '3D 模型、拓扑关系、碰撞记录、现场反馈', '建模、复核与现场回传', '空间判断与冲突识别更强', '支撑 3D 空间、工业布局、MR 复核等能力'],
  ['book', '行业规则', '建筑规范、企业标准、工艺约束、材料规则、生产规则', '规则匹配、命中记录、持续迭代', '规则库更完整、适配更深', '支撑行业规则包、知识库升级与专业壁垒'],
  ['person-check', '人工复核结果', '总工、工程师、造价人员、拆单人员确认与修正', '专业反馈闭环', '交付经验更强、误报漏报更低', '提高客户信任、续费率与扩张率'],
];

const qishuDataBarrierItems = [
  { icon: 'target', title: '通用 AI 能回答问题，启枢能理解工程对象。' },
  { icon: 'file-text', title: '通用 AI 能生成内容，启枢能沉淀规则与交付经验。' },
  { icon: 'trend', title: '通用 AI 越用未必越专业，启枢越用越贴近真实工作流。' },
];

const financingAppendixCards = [
  { kicker: '商业化主线', title: '启枢', body: '启枢是当前核心商业化产品。', href: 'qishu-ai.html' },
  { kicker: '机器人', title: '巨灵｜Axion Robotics Systems', body: '展示 AI Harness 在机器人和物理作业调度中的场景化能力。', href: 'axion-os.html' },
  { kicker: '教育', title: '诺思', body: '展示知识密集型任务、教学协同和长期反馈的连续工作流。', href: 'north-ai.html' },
  { kicker: '增长', title: '蜂聚', body: '展示商业增长、电商内容和转化流程中的任务组织能力。', href: 'fengju-ai.html' },
  { kicker: '认知交互', title: 'ACAUSAL', body: '展示长期认知交互和多模态体验的持续协作能力。', href: 'acausal.html' },
];

const ecosystemCards = [
  {
    kicker: 'Pilot',
    title: '设计院与工程试点',
    body: '陕建一建、CTA城镇设计等真实工程场景提供图纸样本、专家反馈和项目复核入口。',
    href: 'ecosystem-pilot.html',
  },
  {
    kicker: 'University',
    title: '高校共研资源',
    body: '西安建筑科技大学、西安邮电大学、长安大学、西安科技大学、西安欧亚学院等校企合作方，支撑算法、BIM、工程和教学场景验证。',
    href: 'ecosystem-university.html',
  },
  {
    kicker: 'Global',
    title: '海外学术与技术共建',
    body: '美国戴顿大学、美国卡内基梅隆大学共研实验室及 Quiver AI 等外部资源，补充 AI、多模态生成和矢量技术研究能力。',
    href: 'ecosystem-global.html',
  },
  {
    kicker: 'Media',
    title: '产业传播与场景协同',
    body: 'BesTV 百事通等产业伙伴帮助项目进入更复杂的内容、传播和商业协同场景。',
    href: 'ecosystem-media.html',
  },
];

const commonHarnessDetailClosing = {
  title: '从一次试点开始，进入 AI 原生工程协同。',
  body: 'GIBIRA AI Harness 不承诺替代所有人，也不试图重构整个产业链。第一阶段，它聚焦设计院最可控、最可量化、最愿意付费的场景：重复绘图、施工图深化、规范审查、风险定位与审图报告生成。从真实项目开始，从 CAD/BIM 工作流切入，从问题清单和复核结果形成闭环，GIBIRA 希望把 AI 从“辅助回答”推进到“确定性交付”。',
  actions: [
    { label: '申请项目试点', href: 'mailto:ys020129@163.com' },
    { label: '查看双轨实验数据', href: 'qishu-ai.html#commercial-progress' },
    { label: '了解共建合作', href: 'index.html#ecosystem' },
  ],
};

const harnessCapabilityDetails = [
  {
    file: 'harness-complex-intent.html',
    title: '听懂复杂商业意图',
    kicker: '01 / Core Capability',
    heroTitle: '不是理解一句 prompt，而是理解一个真实项目的业务目标。',
    subtitle: 'GIBIRA AI Harness 面向真实产业场景，不只接收自然语言指令，而是将项目任务书、图纸文件、专业约束、交付标准和责任边界统一解析为可执行的任务结构。',
    paragraphs: [
      '在设计院场景中，一个需求往往不是一句“帮我审图”那么简单。它通常同时包含项目类型、所在地区、抗震等级、消防要求、节能规范、企业内部审查标准、出图格式和总工复核要求。',
      'AI Harness 会先理解任务背后的商业目标：是为了减少重复绘图、提前发现合规风险、辅助施工图深化，还是为了生成可归档的审图报告。系统会把模糊需求拆解为明确的执行对象、规则边界和交付结果。',
    ],
    modules: [
      { title: '多源输入', body: '支持任务书、自然语言、DWG、PDF、BIM 模型、Revit/CAD 文件等多种输入形式。' },
      { title: '约束识别', body: '自动识别项目类型、地区规范、抗震等级、消防重点、节能要求和企业内部标准。' },
      { title: '目标判断', body: '判断当前任务属于图纸解析、施工图深化、规范审查、问题定位、修改建议还是审图报告生成。' },
      { title: '责任边界', body: 'AI 负责理解、拆解、预警和建议，最终技术判断仍由设计师、专业负责人或总工确认。' },
    ],
    example: {
      title: '示例',
      input: '“这是一个地下车库施工图项目，需要检查车位流线、消防疏散、机电冲突，并输出可复核的问题清单。”',
      output: '系统识别项目类型为地库施工图深化任务，自动匹配车位、车道、柱网、消防分区、疏散距离、机电预留等检查对象，并生成审查路径。',
    },
  },
  {
    file: 'harness-orchestration.html',
    title: '组织模型、软件与智能体',
    kicker: '02 / Core Capability',
    heroTitle: '不是一个大模型回答问题，而是一组专业能力被精准调度。',
    subtitle: 'GIBIRA AI Harness 不是依赖单一模型，而是在任务过程中动态调度图纸解析、规范知识库、审图推理、CAD/BIM 插件、报告生成和反馈学习等多个能力模块。',
    paragraphs: [
      '真实工程任务需要的不只是语言理解。图纸要被解析，构件要被识别，规范要被匹配，风险要被定位，修改建议要能落到 CAD/BIM 工作流里，最终结果还要能被总工复核和项目归档。',
      'AI Harness 扮演的是“调度中枢”：它知道什么时候调用图纸语义理解，什么时候调用规范检查，什么时候进入 CAD/BIM 插件，什么时候生成报告，什么时候等待人工确认。',
    ],
    modules: [
      { title: '图纸语义引擎', body: '识别墙体、门窗、管线、柱网、标注、图层关系和空间拓扑。' },
      { title: '规范知识库', body: '调取国家规范、地方规范、消防、节能、强条与企业内部验收标准。' },
      { title: '审图推理引擎', body: '输出问题位置、风险等级、条文依据和修改建议。' },
      { title: 'CAD/BIM 工作流插件', body: '接入 DWG、PDF、Revit、BIM 模型与本地部署环境。' },
      { title: '报告与归档引擎', body: '生成审图报告、问题清单、复核记录和版本追踪。' },
      { title: '反馈学习闭环', body: '将设计师和总工的人工确认结果回流为训练样本，持续优化模型。' },
    ],
    emphasis: 'GIBIRA 不造新的 CAD，也不替代 BIM 软件，而是成为 CAD/BIM 之上的 AI 设计审图层。',
  },
  {
    file: 'harness-workflow.html',
    title: '沉入原有业务流',
    kicker: '03 / Core Capability',
    heroTitle: '不改变设计院原有流程，而是进入它、增强它、加速它。',
    subtitle: 'GIBIRA AI Harness 直接接入 CAD/BIM 工作流，让 AI 生成、审查、修改和报告结果真正进入项目交付流程，而不是停留在不可编辑的图片或文本草稿里。',
    paragraphs: [
      '设计院最难被替换的不是工具，而是长期形成的工作习惯、专业流程和责任体系。GIBIRA 不要求设计师离开熟悉的软件环境，也不强迫企业重建流程。',
      '系统围绕已有工作流进行增强：导入图纸、清洗图层、识别构件、匹配规范、定位问题、输出建议、回到 CAD/BIM 中继续编辑。AI 的价值不是站在流程外给建议，而是在流程内完成可执行的工作。',
    ],
    modules: [
      { title: '原始工作流', body: '方案设计 → 施工图深化 → 人工审图 → 发现问题 → 改图 → 再审 → 返工。' },
      { title: 'GIBIRA 增强工作流', body: '任务输入 → 图纸解析 → 规范匹配 → 风险定位 → 修改建议 → 人工确认 → 可编辑成果交付。' },
      { title: '接入方式', body: '支持 DWG、PDF、CAD、Revit、BIM 模型、API、本地化部署。' },
      { title: '交付形态', body: '保留图层、线型、比例、标注与构件关系，形成 CAD 可编辑闭环。' },
    ],
    emphasis: 'AI 不是把设计师带到另一个系统里，而是回到设计师原本工作的地方。',
  },
  {
    file: 'harness-deterministic-delivery.html',
    title: '只交付确定性结果',
    kicker: '04 / Core Capability',
    heroTitle: '不交付“仅供参考”的草稿，只交付可复核、可执行、可归档的确定性结果。',
    subtitle: 'GIBIRA AI Harness 的结果不是一段泛泛建议，而是带有位置、依据、风险等级、修改路径和复核记录的工程化交付物。',
    paragraphs: [
      '产业级 AI 的核心不是“会回答”，而是“能交付”。在建筑设计场景里，一个结果是否有价值，取决于它能不能被设计师继续编辑，能不能被总工复核，能不能进入项目归档，能不能降低返工和错漏风险。',
      'GIBIRA 的输出围绕真实交付展开：问题清单、风险等级、规范条文依据、修改建议、CAD 可编辑成果、审图报告和人工复核记录。',
    ],
    modules: [
      { title: '问题定位', body: '标注图纸中的具体问题位置，不让设计师在数百张图纸中反复查找。' },
      { title: '条文依据', body: '关联国家规范、地方规范、消防、节能和强条要求。' },
      { title: '修改建议', body: '给出可执行的修改方案，而不是泛泛提示。' },
      { title: '可编辑交付', body: '输出可回到 CAD/BIM 中继续深化的成果。' },
      { title: '复核闭环', body: '总工和专家确认后形成版本记录，沉淀为真实项目反馈数据。' },
    ],
    emphasis: 'AI 负责高精度扫描、重复劳动和风险前置；最终技术责任，仍由专业人员审核确认。',
  },
];

const harnessProcessDetails = [
  {
    file: 'harness-process-intent-input.html',
    title: '意图输入',
    kicker: '01 / Process Node',
    heroTitle: '把复杂项目目标输入为可执行任务。',
    subtitle: '用户可以通过自然语言、项目任务书、CAD 图纸、PDF 图纸、BIM 模型或 Revit 文件输入项目需求。',
    paragraphs: ['AI Harness 会先判断任务类型，再识别项目背景、专业边界和交付目标。'],
    modules: [
      { title: '输入对象', body: '任务书、DWG、PDF、BIM 模型、CAD/Revit 文件、自然语言描述。' },
      { title: '识别维度', body: '项目类型、所在地区、抗震等级、规范范围、图纸专业、交付格式。' },
      { title: '输出结果', body: '生成结构化任务卡，明确本次任务要检查什么、生成什么、交付什么。' },
    ],
    emphasis: '从“帮我检查这套图纸”到“地库施工图消防疏散、车位流线、机电冲突与标注完整性联合检查”。',
  },
  {
    file: 'harness-process-task-breakdown.html',
    title: '任务解构',
    kicker: '02 / Process Node',
    heroTitle: '把一个大目标，拆成多个可执行工作包。',
    subtitle: '真实项目不是单一步骤。AI Harness 会把任务拆解为图纸清洗、构件识别、空间拓扑解析、规范匹配、风险扫描、修改建议和报告生成等多个工作包。',
    paragraphs: [],
    modules: [
      { title: '图纸处理任务', body: '图层清洗、比例统一、坐标基准点对齐、外参完整性检查。' },
      { title: '语义识别任务', body: '识别墙体、门窗、柱网、车位线、管井、风井、楼梯、电梯、标注等对象。' },
      { title: '规则检查任务', body: '匹配消防、疏散、防火、节能、强条和地方规范。' },
      { title: '交付任务', body: '生成问题清单、修改建议、审图报告和 CAD 可编辑成果。' },
    ],
    emphasis: '任务拆得越清楚，执行越稳定；执行越稳定，交付越确定。',
  },
  {
    file: 'harness-process-path-planning.html',
    title: '路径规划',
    kicker: '03 / Process Node',
    heroTitle: '为每个任务选择最短、最准、最可交付的执行路径。',
    subtitle: '不同项目目标需要不同执行路径。AI Harness 会根据任务类型自动规划工作路线。',
    paragraphs: ['审图任务优先调用规范知识库和风险定位；深化任务优先调用图纸解析、构件生成和 CAD 编辑能力；报告任务优先调取问题清单、条文依据和复核记录。'],
    modules: [
      { title: '审图路径', body: '导入图纸 → 规范匹配 → 风险扫描 → 问题定位 → 条文依据 → 审图报告。' },
      { title: '深化路径', body: '图层清洗 → 构件识别 → 标准节点生成 → 尺寸校核 → CAD 可编辑输出。' },
      { title: '协同路径', body: '建筑、结构、机电多专业对象识别 → 冲突检查 → 问题闭环 → 版本记录。' },
      { title: '报告路径', body: '问题汇总 → 风险分级 → 修改建议 → 人工确认 → 项目归档。' },
    ],
    emphasis: 'AI Harness 不盲目执行，而是先判断路径，再组织能力。',
  },
  {
    file: 'harness-process-tool-dispatch.html',
    title: '工具调度',
    kicker: '04 / Process Node',
    heroTitle: '按任务动态调用模型、软件和智能体。',
    subtitle: 'GIBIRA 的核心不是单一 AI，而是多能力协同。',
    paragraphs: ['系统会根据任务阶段调度不同工具：图纸解析引擎负责读懂 CAD/BIM，规范知识库负责规则匹配，审图推理引擎负责问题判断，CAD/BIM 插件负责成果落地。'],
    modules: [
      { title: '需要理解图纸时', body: '调用 CAD 解析、矢量识别、图层识别和空间拓扑模型。' },
      { title: '需要判断规范时', body: '调用国家规范、地方规范、消防、节能、强条知识库。' },
      { title: '需要生成建议时', body: '调用审图推理引擎和修改建议生成模块。' },
      { title: '需要交付成果时', body: '调用 CAD/BIM 插件、报告引擎和版本归档模块。' },
    ],
    emphasis: '真正的 AI Harness，是让每一个模型、软件和智能体在正确的时刻完成正确的动作。',
  },
  {
    file: 'harness-process-workflow-entry.html',
    title: '流程切入',
    kicker: '05 / Process Node',
    heroTitle: '让 AI 直接进入设计院原有 CAD/BIM 流程。',
    subtitle: 'AI Harness 不要求用户改变原有工作方式，而是嵌入设计院已有流程。',
    paragraphs: ['它支持从图纸导入、图层清洗、问题定位到 CAD 可编辑输出的完整链路，让 AI 结果能够被继续深化、复核和出图。'],
    modules: [
      { title: '切入前', body: '人工绘图、人工审查、发现问题后改图、再审、返工。' },
      { title: '切入后', body: 'AI 预审、风险前置、问题定位、修改建议、人工确认、可编辑成果交付。' },
      { title: '核心价值', body: '减少低价值重复劳动，把设计师从绘图员升级为质量控制者和技术决策者。' },
    ],
    emphasis: '不是让设计院适应 AI，而是让 AI 适应设计院的真实生产方式。',
  },
  {
    file: 'harness-process-performance-validation.html',
    title: '效能校验',
    kicker: '06 / Process Node',
    heroTitle: '不用概念证明价值，用真实项目数据校验效率。',
    subtitle: 'GIBIRA 的价值不是停留在“看起来智能”，而是通过真实项目的工时、问题闭环率、复核通过率和 CAD 可编辑成果进行验证。',
    paragraphs: [],
    modules: [
      { title: '工时节省', body: '在地下车库施工图联合双轨实验中，综合工时从 128.5 小时降至 43.8 小时，节省约 65.9%。' },
      { title: '风险前置', body: '消防/疏散风险前置发现率从 61.5% 提升至 88.4%。' },
      { title: '闭环能力', body: '问题清单闭环率从 73.0% 提升至 91.0%。' },
      { title: '复核通过', body: '人工复核一次通过率从 68.0% 提升至 87.0%。' },
      { title: '另一类场景验证', body: '在车道坡施工图双轨试验中，综合工时从 116.0 小时降至 32.5 小时，节省约 72.0%。' },
    ],
    emphasis: 'AI Harness 的每一次输出，都应该能被效率、质量和交付结果验证。',
  },
  {
    file: 'harness-process-delivery.html',
    title: '成果交付',
    kicker: '07 / Process Node',
    heroTitle: '交付的不只是答案，而是能进入项目现场的工程成果。',
    subtitle: 'GIBIRA 的最终交付不是一段文字，而是一组能被设计院使用的成果。',
    paragraphs: ['这些成果包括 CAD 可编辑图纸、问题清单、风险等级、条文依据、修改建议、审图报告、复核记录和版本追踪。'],
    modules: [
      { title: 'CAD/DXF 可编辑成果', body: '保留图层、线型、比例、标注和构件关系。' },
      { title: '问题清单', body: '按专业、风险等级、图纸位置和规范条文分类。' },
      { title: '修改建议', body: '输出可执行修改路径，由设计师确认后进入下一版本。' },
      { title: '审图报告', body: '支持项目归档、总工审核和客户沟通。' },
      { title: '反馈数据', body: '人工确认结果进入训练样本，持续优化后续项目表现。' },
    ],
    emphasis: '交付不是结束，而是数据闭环的开始。',
  },
];

const ecosystemDetails = [
  {
    file: 'ecosystem-pilot.html',
    title: '设计院与工程试点',
    kicker: 'PILOT / Ecosystem',
    heroTitle: '从真实工程场景出发，验证 AI 是否真的能交付。',
    subtitle: 'GIBIRA 的产品验证不是停留在 Demo，而是进入真实设计院项目，用真实图纸、真实任务、真实专家反馈和真实复核流程打磨能力。',
    paragraphs: [
      '设计院试点是 GIBIRA 最重要的产品验证入口。通过陕建一建、CTA 城镇设计等真实工程场景，系统能够获得施工图样本、BIM 深化任务、专家复核意见和项目闭环反馈。',
      '这些试点不是简单的展示案例，而是用来验证 AI 是否能减少工时、提前发现风险、提升复核通过率，并最终形成可编辑、可归档、可复用的工程成果。',
    ],
    modules: [
      { title: '真实图纸样本', body: '来自设计院项目的一线施工图、地库图纸、车道坡图纸和多专业图纸。' },
      { title: '专家复核入口', body: '专业负责人、总工和行业专家参与复核，确保 AI 结果符合工程责任制。' },
      { title: '双轨对比实验', body: '以传统人工轨道和 GIBIRA 协同轨道对比工时、质量和交付结果。' },
      { title: 'ROI 报告沉淀', body: '形成可用于客户转化、企业订阅和标杆案例传播的项目价值报告。' },
    ],
    emphasis: 'GIBIRA 不靠概念获得信任，而靠真实工程项目验证价值。',
  },
  {
    file: 'ecosystem-university.html',
    title: '高校共研资源',
    kicker: 'UNIVERSITY / Ecosystem',
    heroTitle: '连接高校科研、工程教学与产业验证。',
    subtitle: 'GIBIRA 通过高校共研资源，将算法研究、BIM 工程、建筑规范、数字化教学和真实项目验证连接成一个持续迭代的研发体系。',
    paragraphs: [
      '建筑 AI 不只是算法问题，更是工程知识、行业标准和真实场景共同作用的结果。高校共研资源为 GIBIRA 提供了算法研究、BIM 技术、结构工程、智能建造和教学场景验证能力。',
      '西安建筑科技大学、西安邮电大学、长安大学、西安科技大学、西安欧亚学院等合作资源，可支持规范拆解、图纸样本标注、模型评测、BIM 场景验证和专业人才培养。',
    ],
    modules: [
      { title: '算法共研', body: '围绕图纸识别、多模态理解、空间语义、矢量生成和智能审查展开研究。' },
      { title: 'BIM 与工程验证', body: '结合真实工程场景，验证模型在建筑、结构、机电、施工图深化中的可用性。' },
      { title: '规范知识拆解', body: '将建筑规范、消防要求、节能标准和强条规则转化为可计算逻辑。' },
      { title: '人才培养', body: '通过联合课程、实训、认证和项目制训练，培养懂建筑也懂 AI 的复合型人才。' },
    ],
    emphasis: '建筑 AI 的护城河，不只是模型能力，而是工程知识、真实样本和持续共研机制。',
  },
  {
    file: 'ecosystem-global.html',
    title: '海外学术与技术共建',
    kicker: 'GLOBAL / Ecosystem',
    heroTitle: '引入全球 AI、多模态生成与矢量技术能力。',
    subtitle: 'GIBIRA 通过海外学术与技术共建资源，补足多模态理解、矢量图生成、AI 交互、数据挖掘和工程软件化能力。',
    paragraphs: [
      '建筑图纸本质上是一种复杂的专业图形语言。要让 AI 真正理解图纸，不仅需要建筑工程经验，也需要计算机视觉、矢量生成、多模态模型、智能检索和人机交互能力。',
      'GIBIRA 与美国戴顿大学、美国卡内基梅隆大学共研实验室、Quiver AI 等外部资源建立技术共建关系，补充 AI 生成、SVG/矢量图编辑、图像到代码、交互式信息检索和工程软件研发能力。',
    ],
    modules: [
      { title: '多模态生成', body: '提升图纸、图像、文本和结构化数据之间的跨模态理解能力。' },
      { title: '矢量图生成与编辑', body: '为 CAD 图纸解析、矢量绘制、图层重构和可编辑成果输出提供技术支撑。' },
      { title: '智能检索与知识发现', body: '支持规范知识库、项目经验库和问题清单的高效检索与推理。' },
      { title: '国际研发协同', body: '通过联合实验室、技术顾问和专项研究，形成面向未来版本的底层技术储备。' },
    ],
    emphasis: 'GIBIRA 的全球共建不是品牌背书，而是补齐建筑 AI 底层技术拼图。',
  },
  {
    file: 'ecosystem-media.html',
    title: '产业传播与场景协同',
    kicker: 'MEDIA / Ecosystem',
    heroTitle: '让技术能力进入更复杂的产业场景。',
    subtitle: 'GIBIRA 通过产业传播与场景协同资源，将设计审图、智能建造、城市更新、绿色建筑和数字内容传播连接起来。',
    paragraphs: [
      'AI 设计审图不是孤立产品，它需要进入行业认知、客户决策、项目案例和产业传播链条。BesTV 百事通等产业伙伴，可帮助 GIBIRA 将技术案例转化为更具传播力的行业内容，并拓展到更复杂的商业协同场景。',
      '在未来，GIBIRA 不仅可以服务设计院内部效率提升，也可以围绕绿色建筑、城市更新、BIM 数据资产、工程项目展示和产业级内容传播形成更丰富的应用边界。',
    ],
    modules: [
      { title: '标杆案例传播', body: '将设计院试点、双轨实验和 ROI 报告转化为行业可理解的传播内容。' },
      { title: '产业内容协同', body: '围绕智能建造、绿色建筑、城市更新和工程数字化进行内容生产。' },
      { title: '场景资源导入', body: '帮助产品进入更复杂的内容、传播、商业协同和政企合作场景。' },
      { title: '品牌资产沉淀', body: '通过白皮书、行业会议、专家共创和案例发布，建立 GIBIRA 的行业可信度。' },
    ],
    emphasis: '传播不是包装技术，而是让行业理解技术为什么值得被采用。',
  },
];

const harnessDetailPages = [
  ...harnessCapabilityDetails,
  ...harnessProcessDetails,
  ...ecosystemDetails,
];

const ecosystemLogos = [
  { src: 'assets/logo-scegc-no1.png', alt: '陕建一建' },
  { src: 'assets/logo-cta-town-design.png', alt: 'CTA城镇设计' },
  { src: 'assets/logo-xauat.jpg', alt: '西安建筑科技大学' },
  { src: 'assets/logo-xupt.png', alt: '西安邮电大学' },
  { src: 'assets/logo-xian-jiaotong.svg', alt: '西安交通大学' },
  { src: 'assets/logo-eurasia-university.jpeg', alt: '西安欧亚学院' },
  { src: 'assets/logo-university-dayton.svg', alt: '美国戴顿大学' },
  { src: 'assets/logo-carnegie-mellon.svg', alt: '美国卡内基梅隆大学' },
  { src: 'assets/logo-quiver-ai.png', alt: 'Quiver AI' },
];

const coreMemberCards = [
  {
    kicker: 'CEO',
    code: 'CEO',
    initials: 'GH',
    lane: 'left',
    title: '高溪涵',
    roleLines: ['AI全栈项目推进专家'],
    image: 'assets/team-gao-xihan.png',
  },
  {
    kicker: 'PM',
    code: 'PM',
    initials: 'WY',
    lane: 'left',
    title: '魏雅楠',
    roleLines: ['AI平台产品战略负责人'],
    image: 'assets/team-wei-yanan.png',
  },
  {
    kicker: 'BM',
    code: 'BM',
    initials: 'ZX',
    lane: 'right',
    title: '张晓晨',
    roleLines: ['BIM项目负责人', '资源协同与行业扩展专家'],
    image: 'assets/team-zhang-xiaochen.png',
  },
  {
    kicker: 'OM',
    code: 'OM',
    initials: 'XC',
    lane: 'right',
    title: '许沧洲',
    roleLines: ['AI架构与视觉系统整合专家'],
    image: 'assets/team-xu-cangzhou.png',
  },
  {
    kicker: 'OD',
    code: 'OD',
    initials: 'YX',
    lane: 'right',
    title: '杨宇轩',
    roleLines: ['运营总监'],
    image: 'assets/team-yang-yuxuan.png',
  },
];

const aiResearchTeamCards = [
  {
    kicker: 'CTO',
    code: 'CTO',
    initials: 'LP',
    lane: 'left',
    title: '卢佩伦 Ph.D',
    roleLines: ['美国卡内基梅隆大学', '计算机算法学博士'],
    image: 'assets/team-lu-peilun.png',
    imageLoading: 'eager',
  },
  {
    kicker: 'PD',
    code: 'PD',
    initials: 'WJ',
    lane: 'left',
    title: '王嘉森',
    roleLines: ['西安邮电大学人工智能专业'],
    image: 'assets/team-wang-jiashen.png',
    imageLoading: 'eager',
  },
  {
    kicker: 'PD',
    code: 'PD',
    initials: 'YY',
    lane: 'right',
    title: '杨岩松',
    roleLines: ['长安大学人工智能专业'],
    image: 'assets/team-yang-yansong.png',
    imageLoading: 'eager',
  },
];

const collaborativeResearchTeamCards = [
  {
    kicker: 'CON',
    code: 'CON',
    initials: 'HY',
    lane: 'right',
    title: '郝羽 Ph.D',
    roleLines: ['英国哈德菲尔德大学', '图像处理与BIM智能融合专家'],
    hoverImage: 'assets/team-hao-yu-hover.png',
  },
  {
    kicker: 'CON',
    code: 'CON',
    initials: 'SJ',
    lane: 'left',
    title: '沈驹 Ph.D',
    roleLines: ['肯塔基大学副教授', '计算机视觉博士'],
    hoverImage: 'assets/team-shen-ju-hover.png',
  },
  {
    kicker: 'ACT',
    code: 'ACT',
    initials: 'TN',
    lane: 'right',
    title: 'Tam Nguyen Ph.D',
    roleLines: ['新加坡国立大学', '计算机工程学博士'],
    hoverImage: 'assets/team-tam-nguyen-hover.png',
  },
  {
    kicker: 'QuiverAI CEO',
    code: 'CEO',
    initials: 'JR',
    lane: 'left',
    title: 'Joan Rodriguez Ph.D',
    roleLines: ['Quiver AI 负责人', 'AI研究与产品公司', '矢量生成与编辑技术', 'Mila 与魁北克高等技术学院', '魁北克大学'],
    hoverImage: 'assets/team-joan-rodriguez-hover.png',
  },
  {
    kicker: 'Joint R&D Lab',
    code: 'LAB',
    initials: 'SP',
    lane: 'right',
    title: 'Saverio Perugini Ph.D',
    roleLines: ['阿维玛利亚大学', '数学与计算机科学教授', '计算机科学博士', '弗吉尼亚理工大学 2004'],
    hoverImage: 'assets/team-saverio-perugini-hover.png',
  },
  {
    kicker: 'Joint R&D Lab',
    code: 'LAB',
    initials: 'JB',
    lane: 'left',
    title: 'James Buckley Ph.D',
    roleLines: ['杜兰大学', '计算机科学副教授', '数据库知识发现', '循环挖掘研究'],
    hoverImage: 'assets/team-james-buckley-hover.png',
  },
];

const advisorCards = [
  {
    kicker: '学术专家顾问',
    title: '王茹 Ph.D',
    body: '西安建筑科技大学土木工程学院教授、硕士生导师，专业方向覆盖结构工程、土木工程建造与管理、BIM、绿色建筑与装配式建筑。',
  },
  {
    kicker: '行业专家顾问',
    title: '张宗良',
    body: 'CTA城镇设计院长，高级工程师、国家一级安全评价师，具备 BIM 专业技能、平台化多专业协同经验与工程数字化转化能力。',
  },
];

const advisorProfileCards = [
  {
    kicker: '学术专家顾问',
    code: 'ADV',
    initials: 'WR',
    title: '王茹 Ph.D',
    roleLines: ['西安建筑科技大学土木工程学院教授、硕士生导师', '结构工程、土木工程建造与管理、BIM、绿色建筑与装配式建筑'],
    borderColor: '#f59b32',
    gradient: 'linear-gradient(145deg, rgba(245,155,50,.34), rgba(20,20,20,.96) 62%)',
  },
  {
    kicker: '行业专家顾问',
    code: 'ADV',
    initials: 'ZZ',
    title: '张宗良',
    roleLines: ['CTA城镇设计院长，高级工程师、国家一级安全评价师', 'BIM 专业技能、平台化多专业协同经验与工程数字化转化能力'],
    borderColor: '#f97316',
    gradient: 'linear-gradient(145deg, rgba(249,115,22,.32), rgba(16,16,16,.96) 62%)',
  },
];

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function scrollFloatTitle(text) {
  return `<h2 class="scroll-float reveal-up" data-scroll-float>${esc(text)}</h2>`;
}

function loadingScreen() {
  const text = 'GIBIRA 正在加载中';
  const letters = Array.from(text)
    .map((char) => {
      const gap = char === ' ' ? ' style="margin-right:0.4em"' : '';
      return `<span${gap}>${char === ' ' ? ' ' : esc(char)}</span>`;
    })
    .join('');

  return `
    <div class="site-loader site-loader--loading" data-site-loader aria-live="polite" aria-label="${text}">
      <div class="site-loader__stage">
        <div class="site-loader__inner">
          <div class="site-loader__mark" aria-hidden="true">
            <div class="site-loader__dot">
              <div class="site-loader__dot-glow"></div>
            </div>
            <div class="site-loader__shadow"></div>
          </div>
          <div class="site-loader__text">${letters}</div>
        </div>
      </div>
      <div class="site-loader__fade" aria-hidden="true"></div>
    </div>`;
}

function nav(current) {
  const items = [
    ['index.html#harness', 'Harness'],
    ['index.html#projects', '应用场景'],
    ['qishu-ai.html', '启枢AI'],
    ['index.html#team', '关于我们'],
  ];

  return `
    <header class="site-header">
      <a class="brand" href="index.html" data-magnetic>
        <img class="brand-logo brand-wordmark" src="assets/gibira-wordmark-white.png" alt="GIBIRA" />
      </a>
      <nav class="nav-links" aria-label="主导航">
        ${items.map(([href, label]) => `<a href="${href}" data-magnetic>${label}</a>`).join('')}
      </nav>
      <a class="header-action" href="${current === 'index.html' ? '#contact' : 'index.html#projects'}" data-magnetic>
        ${current === 'index.html' ? '联系我们' : '返回应用'}
      </a>
    </header>`;
}

function footer(current = '') {
  const bodyCopy = current === 'qishu-ai.html'
    ? '幻醒科技｜GIBIRA AI 以Harness系统为核心，将启枢、蜂聚、诺思、ACAUSAL 与巨灵接入真实产业、商业、教育、认知交互和物理作业场景。'
    : '幻醒科技 / GIBIRA 以 AI Harness 驾驭系统为核心，将启枢AI、蜂聚AI、诺思AI、ACAUSAL 与 AXION OS 接入真实产业、商业、教育、认知交互和物理作业场景。';
  return `
    <footer class="footer-band footer-screen" id="site-footer">
      <div class="footer-shape-grid-bg" data-shape-grid-bg data-shape-grid-mode="always" aria-hidden="true">
        <canvas class="shapegrid-canvas"></canvas>
      </div>
      <div class="footer-inner">
        <div class="footer-copy">
          <p class="section-kicker">Contact</p>
          <h2>让 AI 从“生成内容”<span class="footer-title-break">走向“完成工作”。</span></h2>
          <p>${esc(bodyCopy)}</p>
          <p class="footer-line">觉于核心，成于真实。</p>
        </div>
        <div class="contact-stack">
          <a href="tel:${contact.phone}" data-magnetic><span>Phone</span><strong>${contact.phone}</strong></a>
          <a href="mailto:${contact.email}" data-magnetic><span>Email</span><strong>${contact.email}</strong></a>
          <a href="https://${contact.domain}" data-magnetic><span>Web</span><strong>${contact.domain}</strong></a>
        </div>
      </div>
      <div class="footer-wordmark animated-gradient-text footer-gradient-wordmark" aria-label="GIBIRA">
        <span class="text-content footer-wordmark-logo" aria-hidden="true"></span>
      </div>
    </footer>`;
}

function animatedListShell(listClass, itemsHtml, shellClass = 'content-list-shell', initialSelectedIndex = '-1') {
  return `<div class="animated-list-container ${shellClass}" data-animated-list data-initial-selected-index="${initialSelectedIndex}">
    <div class="${listClass} animated-list" data-animated-list-scroll>${itemsHtml}
    </div>
    <div class="animated-list-gradient animated-list-gradient--top" data-animated-list-top></div>
    <div class="animated-list-gradient animated-list-gradient--bottom" data-animated-list-bottom></div>
  </div>`;
}

function metricGrid(items) {
  const itemsHtml = items
    .map(
      (item, index) => `
        <article class="metric reveal-scale stagger-item tilt-card" data-magnetic data-tilt data-animated-list-item data-index="${index}">
          <span>${esc(item.label)}</span>
          <strong>${esc(item.value)}</strong>
          <p>${esc(item.note)}</p>
        </article>`,
    )
    .join('');
  return animatedListShell('metric-grid', itemsHtml);
}

function cardGrid(items, shellClass = 'content-list-shell') {
  const itemsHtml = items
    .map((item, index) => {
      const tag = item.href ? 'a' : 'article';
      const hrefAttr = item.href ? ` href="${esc(item.href)}"` : '';
      const ariaAttr = item.href ? ` aria-label="查看${esc(item.title)}详情"` : '';
      return `
        <${tag} class="info-card reveal-scale stagger-item tilt-card"${hrefAttr}${ariaAttr} data-magnetic data-tilt data-animated-list-item data-index="${index}">
          <span>${esc(item.kicker)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.body)}</p>
        </${tag}>`;
    })
    .join('');
  return animatedListShell('card-grid', itemsHtml, shellClass);
}

function ecosystemCardGrid(items) {
  const itemsHtml = items
    .map((item, index) => {
      const tag = item.href ? 'a' : 'article';
      const hrefAttr = item.href ? ` href="${esc(item.href)}"` : '';
      const ariaAttr = item.href ? ` aria-label="查看${esc(item.title)}详情"` : '';
      return `
        <${tag} class="info-card reveal-scale stagger-item tilt-card"${hrefAttr}${ariaAttr} data-magnetic data-tilt data-ecosystem-card data-index="${index}">
          <span data-scroll-float-skip>${esc(item.kicker)}</span>
          <h3 data-scroll-float-skip>${esc(item.title)}</h3>
          <p data-scroll-float-skip>${esc(item.body)}</p>
        </${tag}>`;
    })
    .join('');
  return `<div class="ecosystem-card-list">
    <div class="card-grid">
      ${itemsHtml}
    </div>
  </div>`;
}

function logoLoop(items) {
  const itemsHtml = items
    .map(
      (item) => `
          <li class="logoloop__item" role="listitem">
            <span class="logoloop__logo-shell">
              <img src="${esc(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async" draggable="false" />
            </span>
          </li>`,
    )
    .join('');
  return `
      <div class="partner-logo-loop logoloop logoloop--horizontal logoloop--fade logoloop--scale-hover reveal-scale" data-logo-loop data-logo-speed="78" data-logo-hover-speed="0" role="region" aria-label="合作共建 logo 循环">
        <div class="logoloop__track" data-logo-loop-track>
          <ul class="logoloop__list" data-logo-loop-sequence role="list">
            ${itemsHtml}
          </ul>
          <ul class="logoloop__list" role="list" aria-hidden="true">
            ${itemsHtml}
          </ul>
        </div>
      </div>`;
}

function teamProfileCard(item, index) {
  const roleLines = item.roleLines || [item.role || item.body || ''];
  const roleHtml = roleLines.filter(Boolean).map((line) => esc(line)).join('<br>');
  const hoverImageStyle = item.hoverImage ? ` --profile-hover-image: url('${esc(item.hoverImage)}');` : '';
  const hoverImageClass = item.hoverImage ? ' has-profile-hover-image' : '';
  const imageLoading = item.imageLoading || 'lazy';
  const imageHtml = item.image
    ? `<div class="chroma-img-wrapper team-profile-image-wrap">
                      <img class="team-profile-image" src="${esc(item.image)}" alt="${esc(item.title)}人物形象" loading="${esc(imageLoading)}" decoding="async" />
                    </div>`
    : `<div class="chroma-img-wrapper team-profile-image-wrap team-profile-image-wrap--fallback">
                      <div class="team-avatar" aria-hidden="true"><span>${esc(item.initials)}</span></div>
                    </div>`;
  return `
          <article class="pc-card-wrapper chroma-card team-profile-card team-profile-card--vertical${hoverImageClass} reveal-scale stagger-item" data-profile-card data-chroma-card data-profile-index="${index}" style="--card-border: ${esc(item.borderColor || '#ef4444')}; --card-gradient: ${esc(item.gradient || 'linear-gradient(145deg, rgba(239,68,68,.42), #050505 62%)')};${hoverImageStyle}">
            <div class="pc-behind"></div>
            <div class="pc-card-shell">
              <div class="pc-card team-chroma-card">
                <div class="pc-inside">
                  <div class="pc-shine"></div>
                  <div class="pc-glare"></div>
                  ${imageHtml}
                  <footer class="team-profile-content chroma-info">
                    <div class="team-profile-copy">
                      <span class="team-profile-role">${esc(item.kicker)}</span>
                      <h3>${esc(item.title)}</h3>
                      <p>${roleHtml}</p>
                    </div>
                    <strong class="team-profile-code">${esc(item.code)}</strong>
                  </footer>
                </div>
              </div>
            </div>
          </article>`;
}

function teamProfileBoard(items) {
  const cards = items.map((item, index) => teamProfileCard(item, index)).join('');

  return `
      <div class="team-profile-board chroma-grid reveal-up" data-team-profile-board data-chroma-grid style="--team-count: ${items.length}; --cols: ${items.length}; --r: 300px;">
        <div class="team-profile-row">
          ${cards}
        </div>
        <div class="chroma-overlay" aria-hidden="true"></div>
        <div class="chroma-fade" aria-hidden="true"></div>
      </div>`;
}

function timeline(items) {
  const itemsHtml = items
    .map(
      (item, index) => `
        <article class="timeline-item reveal-up stagger-item tilt-card" data-magnetic data-tilt data-animated-list-item data-index="${index}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.body)}</p>
          </div>
        </article>`,
    )
    .join('');
  return animatedListShell('timeline', itemsHtml);
}

function dataTable(headers, rows, className = '') {
  return `<div class="table-wrap${className ? ` ${esc(className)}` : ''}">
      <table>
        <thead><tr>${headers.map((header) => `<th>${esc(header)}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows
            .map((row) => `<tr>${row.map((cell, index) => `<td data-label="${esc(headers[index] || '')}">${esc(cell)}</td>`).join('')}</tr>`)
            .join('')}
        </tbody>
      </table>
    </div>`;
}

function processFlow(items) {
  const itemsHtml = items
    .map((item, index) => {
      const node = typeof item === 'string' ? { title: item } : item;
      const tag = node.href ? 'a' : 'div';
      const hrefAttr = node.href ? ` href="${esc(node.href)}"` : '';
      const ariaAttr = node.href ? ` aria-label="查看${esc(node.title)}详情"` : '';
      return `
        <${tag} class="process-node reveal-up stagger-item tilt-card"${hrefAttr}${ariaAttr} data-magnetic data-tilt data-animated-list-item data-index="${index}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <strong>${esc(node.title)}</strong>
        </${tag}>`;
    })
    .join('');
  return animatedListShell('process-flow', itemsHtml);
}

function verticalApplicationGrid(items) {
  return `<div class="animated-list-container project-list-shell" data-animated-list data-initial-selected-index="0">
    <div class="vertical-grid animated-list" data-animated-list-scroll>
      ${items
        .map(
          (item, index) => `
        <a class="vertical-card reveal-scale stagger-item tilt-card" href="${item.href}" data-magnetic data-tilt data-animated-list-item data-index="${index}">
          <div class="vertical-card-head">
            <span>${item.number} / ${esc(item.title)}</span>
            <small>${esc(item.en)}</small>
          </div>
          <h3>${esc(item.title)}</h3>
          <p class="route-tag">${esc(item.tag)}</p>
          <p>${esc(item.brief)}</p>
          <p class="keyword-line">${esc(item.keywords)}</p>
        </a>`,
        )
        .join('')}
    </div>
    <div class="animated-list-gradient animated-list-gradient--top" data-animated-list-top></div>
    <div class="animated-list-gradient animated-list-gradient--bottom" data-animated-list-bottom></div>
  </div>`;
}

function homeProjectGrid(items) {
  return `<div class="hero-project-list circular-gallery" data-circular-gallery data-scroll-speed="0.7" data-scroll-ease="0.15" data-auto-speed="32" data-bend="0" tabindex="0" role="region" aria-label="幻醒科技五大项目">
    <div class="hero-projects circular-gallery-track" data-circular-gallery-track>
      ${items
        .map(
          (item, index) => `
          <a class="hero-project-card circular-gallery-item reveal-up stagger-item" href="${item.href}" data-circular-gallery-item data-index="${index}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <strong>${esc(item.title)}</strong>
            <small>${esc(item.en)}</small>
            <p>${esc(item.tag)}</p>
          </a>`,
        )
        .join('')}
    </div>
  </div>`;
}

function cadStorySteps(items) {
  return `<div class="cad-steps">${items
    .map(
      (item, index) => `
        <article class="cad-step-card" data-cad-step="${index + 1}" data-magnetic>
          <span>${String(index + 1).padStart(2, '0')}</span>
          <div>
            <small>${esc(item.label)}</small>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.body)}</p>
          </div>
        </article>`,
    )
    .join('')}</div>`;
}

function cadModelStory() {
  return `
    <section class="section cad-model-story" id="cad-model-engine" data-cad-model-story data-active-step="1">
      <div class="cad-model-story__sticky">
        <div class="cad-model-story__left reveal-left">
          <p class="section-kicker">04A / CAD-to-Model Engine</p>
          <h2>图纸空间化引擎：从 CAD 平面线框到三维模型，再到 DXF 工程交付。</h2>
          <p class="section-lead">GIBIRA 将 CAD / DXF 中的矢量线段、尺寸标注与空间关系转译为可计算的三维模型，并进一步生成六面视图、立面表达与可编辑文件包。</p>
          ${cadStorySteps(cadModelSteps)}
        </div>
        <div class="cad-model-visual reveal-right" data-cad-model-visual data-stage="1">
          <div class="cad-model-visual__grid" aria-hidden="true"></div>
          <div class="cad-model-visual__hud">
            <span>Stage <strong data-cad-stage-label>01</strong></span>
            <span>CAD / VECTOR / MODEL / DXF</span>
          </div>
          <div class="cad-model-visual__stage" aria-hidden="true">
            <svg class="cad-plan-svg" viewBox="0 0 800 480" role="img" aria-label="CAD 平面线框">
              <path class="cad-line cad-line--base cad-line--shell" d="M154 108H646V362H154Z" />
              <path class="cad-line cad-line--base" d="M154 194H356V108M356 194H646M246 194V362M486 194V362" />
              <path class="cad-line cad-line--base" d="M154 278H246M246 278H486M486 278H646" />
              <path class="cad-line cad-line--base" d="M356 108V194M486 194H646M486 278H486" />
              <path class="cad-line cad-line--measure" d="M116 78H684M116 392H684M116 80V390M684 80V390" />
              <path class="cad-line cad-line--highlight cad-line--vector" d="M154 108H646M154 194H356M486 278H646" />
              <path class="cad-line cad-line--highlight cad-line--door" d="M356 194c0 58 45 96 102 96" />
              <path class="cad-line cad-line--highlight cad-line--dimension" d="M582 108v34M646 232v72M538 362h96" />
              <g class="cad-nodes">
                <circle class="cad-node" cx="154" cy="108" r="5" />
                <circle class="cad-node" cx="646" cy="108" r="5" />
                <circle class="cad-node" cx="646" cy="362" r="5" />
                <circle class="cad-node" cx="154" cy="362" r="5" />
                <circle class="cad-node" cx="356" cy="194" r="5" />
                <circle class="cad-node" cx="486" cy="278" r="5" />
              </g>
            </svg>
            <span class="cad-label cad-label--vector">VECTOR</span>
            <span class="cad-label cad-label--point">POINT</span>
            <span class="cad-label cad-label--dimension">DIMENSION</span>

            <div class="cad-3d-space">
              <div class="cad-room">
                <div class="cad-wall cad-wall--floor"></div>
                <div class="cad-wall cad-wall--back"></div>
                <div class="cad-wall cad-wall--left"></div>
                <div class="cad-wall cad-wall--right"></div>
                <div class="cad-wall cad-wall--ceiling"></div>
                <span class="cad-edge cad-edge--a"></span>
                <span class="cad-edge cad-edge--b"></span>
                <span class="cad-edge cad-edge--c"></span>
                <span class="cad-edge cad-edge--d"></span>
              </div>
            </div>

            <div class="cad-unfold">
              ${['FRONT', 'LEFT', 'RIGHT', 'TOP', 'BOTTOM', 'BACK']
                .map((view) => `<div class="cad-face">${view}</div>`)
                .join('')}
            </div>
          </div>
          <div class="cad-export">
            <span>DXF</span>
            <span>DWG</span>
            <span>CAD</span>
            <span>EDITABLE VECTOR</span>
            <span>ENGINEERING PACKAGE</span>
            <div class="cad-export-card">
              <strong>GIBIRA_OUTPUT_PACKAGE.dxf</strong>
              <small>Six-side views / Editable vectors / Engineering delivery</small>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function architectureGraph(items) {
  return `
    <section class="section architecture-section" id="architecture">
      <p class="section-kicker reveal-up">04B / System Architecture</p>
      <h2 class="reveal-up">技术架构不是“生成一张图”，而是把图纸变成可计算、可校验、可交付的工作流。</h2>
      <p class="section-lead reveal-up">GIBIRA 将输入层、几何解析层、AI 理解层、模型生成层和输出层串联成工程作业链路，让 AI 进入设计、审查、深化和交付。</p>
      <div class="architecture-graph reveal-scale" data-architecture-graph>
        <svg class="architecture-lines" viewBox="0 0 1000 260" aria-hidden="true">
          <path class="arch-line" d="M90 130 C210 54 290 206 410 130 S610 54 730 130 S850 206 930 130" />
        </svg>
        ${items
          .map(
            (item, index) => `
              <article class="architecture-node stagger-item tilt-card" data-magnetic data-tilt>
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${esc(item.title)}</h3>
                <strong>${esc(item.subtitle)}</strong>
                <p>${esc(item.body)}</p>
              </article>`,
          )
          .join('')}
      </div>
    </section>`;
}

function caseShowcase(items) {
  return `
    <section class="section case-showcase" id="cases">
      <p class="section-kicker reveal-up">04C / Engineering Cases</p>
      <h2 class="reveal-up">把图纸智能化能力拆成可理解、可验证、可交付的应用场景。</h2>
      <p class="section-lead reveal-up">这些不是孤立 demo，而是 GIBIRA 在启枢 AI、CAD 三维建模与工程自动化中的关键能力组件。</p>
      <div class="case-grid">
        ${items
          .map(
            (item, index) => `
              <article class="case-card reveal-scale stagger-item tilt-card" data-magnetic data-tilt>
                <div class="case-preview">
                  <img src="${esc(item.image)}" alt="${esc(item.title)}展示图" loading="lazy" decoding="async" />
                </div>
                <span>${String(index + 1).padStart(2, '0')} / ${esc(item.meta)}</span>
                <h3>${esc(item.title)}</h3>
                <p>${esc(item.body)}</p>
              </article>`,
          )
          .join('')}
      </div>
    </section>`;
}

function qishuVideoShowcase(items) {
  return `
    <section class="section qishu-video-section vertical-scroll-panel" id="video-demo" data-vertical-scroll-panel>
      <p class="section-kicker reveal-up">01 / Video Demo</p>
      <h2 class="reveal-up">启枢 AI 行业演示视频</h2>
      <p class="section-lead reveal-up">建筑行业、装饰装修、工程造价管理三类演示已接入，其余场景按客户沟通开放。</p>
      <div class="qishu-video-grid">
        ${items
          .map(
            (item, index) => `
              <article class="qishu-video-card reveal-scale stagger-item">
                <div class="qishu-video-frame">
                  ${item.src
                    ? `<video class="qishu-demo-video" controls preload="none" playsinline data-lazy-video>
                        <source data-src="${esc(item.src)}" type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>`
                    : `<div class="qishu-video-placeholder" aria-label="${esc(item.title)}">
                        <span>${String(index + 1).padStart(2, '0')}</span>
                        <strong>演示内容规划中</strong>
                      </div>`}
                </div>
                <span>${String(index + 1).padStart(2, '0')} / ${esc(item.meta)}</span>
                <h3>${esc(item.title)}</h3>
                <p>${esc(item.body)}</p>
              </article>`,
          )
          .join('')}
      </div>
    </section>`;
}

function qishuModuleDemoVideo(item) {
  const body = Array.isArray(item.body)
    ? item.body.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')
    : `<p>${esc(item.body)}</p>`;
  return `
    <article class="qishu-module-video reveal-scale">
      <div class="qishu-video-frame">
        <video class="qishu-demo-video" controls preload="none" playsinline data-lazy-video>
          <source data-src="${esc(item.src)}" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      </div>
      <div class="qishu-module-video__copy">
        <span>${esc(item.meta)}</span>
        <h3>${esc(item.title)}</h3>
        ${body}
      </div>
    </article>`;
}

function qishuModuleDemoSlot() {
  const stages = [
    { title: '柜体识别', image: 'assets/qishu-demo-cabinet-recognition.png' },
    { title: '板件拆分', image: 'assets/qishu-demo-panel-splitting.png' },
    { title: '工艺规则匹配', image: 'assets/qishu-demo-rule-matching.png' },
    { title: '生产文件输出', image: 'assets/qishu-demo-production-output.png' },
  ];
  return `
    <article class="qishu-demo-slot reveal-scale" aria-label="全屋定制拆单与生产数据流程演示范围">
      <div class="qishu-demo-slot__flow">
        ${stages
          .map(
            (stage, index) => `
              <div>
                <img src="${esc(stage.image)}" alt="${esc(stage.title)}系统界面" loading="lazy" decoding="async" />
                <span>${String(index + 1).padStart(2, '0')}</span>
                <strong>${esc(stage.title)}</strong>
              </div>`,
          )
          .join('')}
      </div>
      <div class="qishu-module-video__copy">
        <span>MODULE 03 DEMO</span>
        <h3>拆单与生产数据流程演示</h3>
        <p>该演示位承接空间方案、柜体识别、板件拆分、孔位五金匹配、工艺规则校验与生产文件输出的完整流程。</p>
        <p>演示范围已经按生产作业链组织，确保视频内容与场景三的能力说明、流程节点和交付结果保持一致。</p>
      </div>
    </article>`;
}

function qishuTagCloud(items) {
  return `
    <div class="qishu-tag-cloud reveal-up">
      ${items.map((item) => `<span>${esc(item)}</span>`).join('')}
    </div>`;
}

function qishuProductMatrixSection() {
  return `
      <section class="section" id="product-matrix">
        <p class="section-kicker">02 / P6 Product Matrix</p>
        <h2>启枢是一套面向工程设计、生产制造和空间数据的 AI 作业平台。</h2>
        <p class="section-lead">它能够读懂 CAD 图纸中的线条、图层、尺寸、文字、墙体、门窗、构件、材料和空间关系，并继续完成图纸处理、设计深化、规范检查、生产准备、材料计算和三维空间呈现。</p>
        ${cardGrid(qishuProductPillars)}
        ${qishuTagCloud(['概念验证', '产品原型', '内部测试', '客户技术验证', 'POC', '客户试用', '商业交付', '标准化产品'])}
      </section>`;
}

function qishuHowItWorksSection() {
  return `
      <section class="section" id="workflow">
        <p class="section-kicker">03 / P7 How It Works</p>
        <h2>从企业资料进入 Harness 系统，再输出可检查、可追踪的结果。</h2>
        <p class="section-lead">启枢不是只看一张图，而是把图纸、规则、材料、空间扫描和项目历史数据转成 AI 能理解的数据，再由 Harness 系统安排角色、调用工具、检查结果并保存反馈。</p>
        ${qishuTagCloud(qishuInputTypes)}
        ${processFlow(qishuWorkMethod)}
      </section>`;
}

function qishuEngineeringIntelligenceSection() {
  return `
      <section class="section" id="engineering-intelligence">
        <p class="section-kicker">04 / P8 Drawing Intelligence</p>
        <h2>工程设计与图纸智能：清洗、生成、审图和多专业协同。</h2>
        <p class="section-lead">这一屏按照 Word 框架聚焦图纸清洗与标准化、立面施工图生成、规范预检与智能审图、多专业 AI 协同，并保留当前 CAD-to-Model 能力作为工程图纸自动化交付的证明材料。</p>
        ${cardGrid(qishuEngineeringModules)}
      </section>
      ${cadModelStory()}
      ${architectureGraph(architectureLayers)}
      ${caseShowcase(cadCaseCards)}`;
}

function qishuProductionCostSection() {
  return `
      <section class="section" id="production-cost">
        <p class="section-kicker">05 / P9-P10 Production & Cost</p>
        <h2>从全屋拆单到钢筋优化和工程造价，启枢把设计结果继续推向生产和成本。</h2>
        <p class="section-lead">Word 框架要求把全屋定制自动拆单、钢筋优化与工程造价作为启枢生产成本工作主线，最终结果仍由专业工程师审核确认。</p>
        ${cardGrid(qishuProductionCostModules)}
      </section>`;
}

function qishuSpatialSection() {
  return `
      <section class="section" id="spatial-canvas">
        <p class="section-kicker">06 / P11 Spatial Canvas</p>
        <h2>三维空间不是展示噱头，而是让二维图纸进入可操作的业务空间。</h2>
        <p class="section-lead">三维空间数据可以继续用于施工图生成、全屋定制拆单、工程量计算、材料配置、工业厂房改造、机器人空间建模和混合现实现场指导。</p>
        ${cardGrid(qishuSpatialModules)}
      </section>`;
}

function qishuActualValidationSection() {
  return `
      <section class="section" id="validation">
        <p class="section-kicker">07 / P12 Actual Validation</p>
        <h2>不是演示，而是真实结果。</h2>
        <p class="section-lead">页面保留已有演示视频，同时把验证逻辑改为同一真实项目下人工流程与启枢流程对比：人数、时间、一次可用率、修改成本、最终错误和专业人员认可度。</p>
        ${metricGrid(qishuReviewMetrics)}
        ${dataTable(
          ['验证项', '传统人工轨道', 'GIBIRA协同轨道', '变化'],
          [
            ['综合工时试验一', '128.5小时', '43.8小时', '节省65.9%'],
            ['综合工时试验二', '116.0小时', '32.5小时', '节省约72.0%'],
            ['消防/疏散风险前置发现率', '61.5% / 63.0%', '88.4% / 88.5%', '显著提前暴露风险'],
            ['人工复核一次通过率', '68%-69%', '86%-87%', '提升约17-19个百分点'],
            ['成果交付属性', '人工维护', 'CAD/BIM成果关联', '形成可编辑闭环'],
          ],
        )}
      </section>`;
}

function qishuCommercialProgressSection() {
  return `
      <section class="section" id="commercial-progress">
        <p class="section-kicker">08 / P13 Commercial Progress</p>
        <h2>从技术演示到正式收入，必须准确区分每一个客户状态。</h2>
        <p class="section-lead">启枢的商业价值同时看业务转化和工作流激活：不能把沟通写成合作，也不能把测试写成商业落地。</p>
        ${processFlow(qishuCustomerLifecycle)}
        ${dataTable(['指标类型', '展示口径', '页面表达'], qishuBusinessProgressRows)}
      </section>`;
}

function qishuMarketEntrySection() {
  return `
      <section class="section" id="gtm">
        <p class="section-kicker">10 / P15 Market Entry</p>
        <h2>先与头部客户共同验证，再把项目沉淀为标准产品。</h2>
        ${timeline(qishuMarketEntrySteps)}
      </section>`;
}

function qishuMarketSizeSection() {
  return `
      <section class="section tight" id="market">
        <p class="section-kicker">11 / P16 Market Size</p>
        <h2>市场规模不直接取行业总产值，而是按客户真正可能支付的金额测算。</h2>
        <p class="section-lead">32.7 万亿元可作为行业背景，但不作为启枢的可服务市场。页面采用 Word 框架中的三层客户结构和“目标企业数量 × 年度付费 × 渗透率”测算逻辑。</p>
        ${metricGrid(qishuMarketMetrics)}
        ${dataTable(
          ['测算项', '说明'],
          [
            ['目标企业数量', '按设计工程、生产成本、工业空间三类客户分别测算。'],
            ['每家企业每年可能支付的费用', '结合部署费、平台年费、模块订阅、使用量和工作流升级收入。'],
            ['可实现客户渗透率', '依据三年目标客户数量、五年目标客户数量和区域复制能力进行约束。'],
            ['可获得市场规模', '目标企业数量 × 年度付费 × 可实现客户渗透率。'],
          ],
        )}
      </section>`;
}

function qishuCompetitiveAdvantageSection() {
  return `
      <section class="section" id="competition">
        <p class="section-kicker">12 / P17 Competitive Advantage</p>
        <h2>启枢的差异化不是“更会聊天”，而是能进入完整工程作业链。</h2>
        ${dataTable(['竞争者', '优势', '局限', '启枢机会'], qishuCompetitiveRows)}
      </section>`;
}

function qishuGrowthMoatSection() {
  return `
      <section class="section" id="moat">
        <p class="section-kicker">13 / P18 Data & Workflow Moat</p>
        <h2>系统会随着真实项目、行业规则和客户反馈持续变强。</h2>
        <p class="section-lead">项目数量增加 → 获得更多真实数据 → 系统判断更准确 → 客户使用更多模块 → 进入更深工作流程 → 客户更难更换 → 继续产生更多项目数据。</p>
        ${cardGrid(qishuGrowthMoats)}
      </section>`;
}

function financingMarker(page, total = 20) {
  return `<p class="section-kicker financing-section__marker">P${page} / ${total}</p>`;
}

function financingCards(items, extraClass = '') {
  return `
    <div class="financing-card-grid ${extraClass}">
      ${items
        .map((item) => {
          const kicker = item.kicker || item.label || '';
          const title = item.title || item.value || '';
          const body = item.body || item.note || '';
          const content = `
              ${item.image ? `<figure class="financing-card__media"><img src="${esc(item.image)}" alt="${esc(title)}展示图" loading="lazy" decoding="async" /></figure>` : ''}
              <span>${esc(kicker)}</span>
              <h3>${esc(title)}</h3>
              <p>${esc(body)}</p>`;
          if (item.href) {
            return `
            <a class="financing-card reveal-scale" href="${esc(item.href)}" aria-label="查看${esc(title)}项目二级页面">
              ${content}
            </a>`;
          }
          return `
            <article class="financing-card reveal-scale">
              ${content}
            </article>`;
        })
        .join('')}
    </div>`;
}

function qishuOpportunityCarousel(items = qishuOpportunityModelingSlides) {
  const slides = [...items, ...items];
  return `
    <div class="qishu-opportunity-carousel" aria-label="启枢空间建模演示轮播">
      <div class="qishu-opportunity-carousel__track">
        ${slides
          .map((item, index) => {
            const duplicateAttr = index >= items.length ? ' aria-hidden="true"' : '';
            return `
              <figure class="qishu-opportunity-carousel__slide"${duplicateAttr}>
                <img src="${esc(item.image)}" alt="${esc(item.title)}界面截图" loading="lazy" decoding="async" />
                <figcaption>
                  <span>${esc(item.meta)}</span>
                  <strong>${esc(item.title)}</strong>
                </figcaption>
              </figure>`;
          })
          .join('')}
      </div>
    </div>`;
}

function financingFlow(items, extraClass = '') {
  return `
    <div class="financing-flow ${extraClass}">
      ${items
        .map((item, index) => {
          const title = typeof item === 'string' ? item : item.title;
          const detail = typeof item === 'string' ? '' : item.risk || item.body || '';
          return `
            <article class="financing-flow-node reveal-up">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${esc(title)}</strong>
              ${detail ? `<small>${esc(detail)}</small>` : ''}
            </article>`;
        })
        .join('')}
    </div>`;
}

function financingMiniTable(rows) {
  return `
    <div class="financing-mini-table">
      ${rows
        .map(
          (row) => `
            <article class="financing-mini-row">
              <span>${esc(row[0])}</span>
              <p>${esc(row[1])}</p>
            </article>`,
        )
        .join('')}
    </div>`;
}

function financingCompareVisual() {
  return `
    <div class="financing-compare reveal-scale">
      <article>
        <span>当前常见AI</span>
        <h3>生成答案和内容</h3>
        <p>可以回答、总结、生成图文，但通常停留在单次交互，无法稳定承担企业流程责任。</p>
      </article>
      <article class="is-emphasis">
        <span>企业真正需要的AI</span>
        <h3>完成工作并交付结果</h3>
        <p>理解目标、读取资料、调用工具、协同人员、记录过程，并交付可验证的业务结果。</p>
      </article>
    </div>`;
}

function financingHarnessVisual() {
  return `
    <div class="financing-orbit reveal-scale">
      <div class="financing-orbit__center">
        <span>Core</span>
        <strong>Harness系统</strong>
      </div>
      ${financingHarnessNodes
        .map((node, index) => `<span class="financing-orbit__node node-${index + 1}">${esc(node)}</span>`)
        .join('')}
      <div class="financing-output-stack">
        ${financingHarnessOutputs.map((item) => `<strong>${esc(item)}</strong>`).join('')}
      </div>
    </div>`;
}

function financingMarketVisual() {
  return `
    <div class="financing-market-visual reveal-scale">
      ${financingMarketCards
        .map(
          (item) => `
            <article>
              <span>${esc(item.kicker)}</span>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.body)}</p>
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuImageStrip(items, extraClass = '') {
  return `
    <div class="qishu-image-strip ${extraClass} reveal-scale">
      ${items
        .map(
          (item) => `
            <figure>
              <img src="${esc(item.image)}" alt="${esc(item.title)}展示图" loading="lazy" decoding="async" />
              <figcaption>
                <span>${esc(item.meta)}</span>
                <strong>${esc(item.title)}</strong>
              </figcaption>
            </figure>`,
        )
        .join('')}
      </div>`;
}

function qishuWideImage(item, extraClass = '') {
  return `
    <figure class="qishu-wide-image ${extraClass} reveal-scale">
      <img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy" decoding="async" />
      ${item.title || item.meta
        ? `<figcaption>
            ${item.meta ? `<span>${esc(item.meta)}</span>` : ''}
            ${item.title ? `<strong>${esc(item.title)}</strong>` : ''}
          </figcaption>`
        : ''}
    </figure>`;
}

function qishuBodyCopy(paragraphs) {
  return `
    <div class="qishu-body-copy">
      ${paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
    </div>`;
}

function qishuEvidenceLine(text) {
  return `<p class="qishu-evidence-line">${esc(text)}</p>`;
}

function qishuValidationChart() {
  return `
    <div class="qishu-compare-chart reveal-scale">
      ${qishuValidationBars
        .map(
          (item) => `
            <article>
              <header>
                <span>${esc(item.label)}</span>
                <strong>${esc(item.delta)}</strong>
              </header>
              <div class="qishu-compare-row">
                <small>${esc(item.beforeLabel)}</small>
                <div aria-hidden="true"><i style="width:${esc(item.beforePercent)}%"></i></div>
                <em>${esc(item.before)}</em>
              </div>
              <div class="qishu-compare-row is-ai">
                <small>${esc(item.afterLabel)}</small>
                <div aria-hidden="true"><i style="width:${esc(item.afterPercent)}%"></i></div>
                <em>${esc(item.after)}</em>
              </div>
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuCommercialFunnel() {
  return `
    <div class="qishu-funnel reveal-scale">
      ${qishuCommercialFunnelItems
        .map(
          (item, index) => `
            <article style="--funnel-width: ${esc(item.width)}%;">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${esc(item.label)}</strong>
              <small>${esc(item.value)}</small>
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuRevenueMap() {
  return `
    <div class="qishu-revenue-map reveal-scale">
      <div class="qishu-revenue-core">
        <span>Revenue</span>
        <strong>持续收入模型</strong>
      </div>
      <div class="qishu-revenue-lanes">
        ${financingRevenueCards
          .map(
            (item, index) => `
              <article>
                <span>${String(index + 1).padStart(2, '0')}</span>
                <strong>${esc(item.title)}</strong>
                <small>${esc(item.kicker)}</small>
              </article>`,
          )
          .join('')}
      </div>
    </div>`;
}

const qishuRevenueIconPaths = {
  shield: '<path d="M12 3.5 18.5 6v5.2c0 4.2-2.5 7.3-6.5 9.3-4-2-6.5-5.1-6.5-9.3V6L12 3.5Z" /><path d="m9.2 12 1.9 1.9 3.9-4.5" />',
  trend: '<path d="M4 18h16" /><path d="m6 16 4.1-4.1 3.1 3.1L19 7.8" /><path d="M15.4 7.8H19v3.6" />',
  pie: '<path d="M12 3v9h9" /><path d="M20.5 15A9 9 0 1 1 9 3.5" /><path d="M14.2 3.3A9 9 0 0 1 20.7 10h-6.5Z" />',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1.2" /><rect x="14" y="4" width="6" height="6" rx="1.2" /><rect x="4" y="14" width="6" height="6" rx="1.2" /><rect x="14" y="14" width="6" height="6" rx="1.2" />',
  cube: '<path d="m12 3 7 4v10l-7 4-7-4V7Z" /><path d="m5 7 7 4 7-4" /><path d="M12 11v10" />',
  'coin-cycle': '<path d="M7.2 7.5A7 7 0 0 1 18.8 10" /><path d="m18.8 6.8.3 3.4-3.2-.8" /><path d="M16.8 16.5A7 7 0 0 1 5.2 14" /><path d="m5.2 17.2-.3-3.4 3.2.8" /><path d="M12 7.8v8.4" /><path d="M14.2 9.6c-.5-.8-1.2-1.2-2.2-1.2s-1.8.5-1.8 1.3c0 2.2 4.1 1 4.1 3.4 0 .9-.8 1.5-2.2 1.5-1.1 0-2-.4-2.6-1.2" />',
  building: '<path d="M5 20V6.5L13 4v16" /><path d="M13 9h6v11" /><path d="M8 9h1.6M8 13h1.6M8 17h1.6M16 12h1.2M16 16h1.2" />',
  window: '<rect x="4.5" y="5" width="15" height="14" rx="1.8" /><path d="M4.5 9h15" /><path d="M8 13h3.2M8 16h7.8" />',
  puzzle: '<path d="M9.5 4.5h5v3h2.2a2 2 0 1 1 0 4H14.5v3h-3v2.2a2 2 0 1 1-4 0v-2.2h-3v-10h3V7a2 2 0 1 1 4 0v1.5" />',
  usage: '<path d="M4 18h16" /><path d="M7 15v-3M12 15V8M17 15V5" /><path d="m15 5 2-2 2 2" />',
  package: '<path d="M4 5.5h6.5V12H4Z" /><path d="M13.5 5.5H20V12h-6.5Z" /><path d="M4 15h6.5v3.5H4Z" /><path d="M13.5 15H20v3.5h-6.5Z" />',
  medal: '<circle cx="12" cy="8.5" r="4" /><path d="M9.4 12.1 7.8 20l4.2-2.5 4.2 2.5-1.6-7.9" /><path d="m10.4 8.4 1.1 1.1 2.2-2.4" />',
  coverage: '<circle cx="7" cy="8" r="2.4" /><circle cx="17" cy="8" r="2.4" /><circle cx="12" cy="16" r="2.4" /><path d="M9.2 9.4 10.7 14M14.8 9.4 13.3 14M9.4 16h5.2" />',
  depth: '<path d="m12 4 7 3.6-7 3.6-7-3.6Z" /><path d="m5 11 7 3.6 7-3.6" /><path d="m5 15 7 3.6 7-3.6" />',
  satisfaction: '<circle cx="12" cy="12" r="8" /><path d="m8.8 12.2 2.1 2.1 4.5-5" />',
  link: '<path d="M9.8 13.8 8.5 15.1a3.4 3.4 0 0 1-4.8-4.8l2.1-2.1a3.4 3.4 0 0 1 4.8 0" /><path d="m14.2 10.2 1.3-1.3a3.4 3.4 0 0 1 4.8 4.8l-2.1 2.1a3.4 3.4 0 0 1-4.8 0" /><path d="m9.5 14.5 5-5" />',
  renewal: '<path d="M18.5 9A6.8 6.8 0 0 0 6.7 6.7L5 8.4" /><path d="M5 4.5v3.9h3.9" /><path d="M5.5 15A6.8 6.8 0 0 0 17.3 17.3l1.7-1.7" /><path d="M19 19.5v-3.9h-3.9" />',
  layers: '<path d="m12 3.5 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16.5 8 4 8-4" />',
  users: '<path d="M9.5 11.5a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z" /><path d="M3.8 20c.6-3.1 2.6-5 5.7-5s5.1 1.9 5.7 5" /><path d="M16 11.2a2.7 2.7 0 1 0-.9-5.2" /><path d="M15.6 15.1c2.5.3 4 1.9 4.6 4.9" />',
  folder: '<path d="M4 7.2h6.1l1.5 2H20v8.9a1.9 1.9 0 0 1-1.9 1.9H5.9A1.9 1.9 0 0 1 4 18.1Z" /><path d="M4 7.2V6.4A2.4 2.4 0 0 1 6.4 4h3.2l1.4 2h6.6A2.4 2.4 0 0 1 20 8.4v.8" />',
  database: '<ellipse cx="12" cy="6.5" rx="6.6" ry="3" /><path d="M5.4 6.5v5c0 1.7 3 3 6.6 3s6.6-1.3 6.6-3v-5" /><path d="M5.4 11.5v5c0 1.7 3 3 6.6 3s6.6-1.3 6.6-3v-5" />',
  book: '<path d="M5 5.5a2.2 2.2 0 0 1 2.2-2.2H19v15.4H7.2A2.2 2.2 0 0 0 5 20.9Z" /><path d="M5 5.5v15.4" /><path d="M8.4 7.6h6.8M8.4 11h5.2" />',
  'person-check': '<circle cx="9" cy="8" r="3.4" /><path d="M3.6 20c.6-3.5 2.4-5.2 5.4-5.2 1.4 0 2.6.4 3.5 1.1" /><path d="m14.2 17.4 1.7 1.7 4.2-4.6" />',
  user: '<circle cx="12" cy="8" r="3.6" /><path d="M5.8 20c.7-3.7 2.8-5.5 6.2-5.5s5.5 1.8 6.2 5.5" />',
  'cloud-sync': '<path d="M8.4 18.5H7.1a4.1 4.1 0 0 1-.7-8.1A5.7 5.7 0 0 1 17.5 9a4.8 4.8 0 0 1-.6 9.5h-1.3" /><path d="M9.2 15.7A3.7 3.7 0 0 1 15 14.2" /><path d="m15.1 11.8.1 2.8-2.7-.5" /><path d="M14.8 17.7A3.7 3.7 0 0 1 9 19.2" /><path d="m8.9 21.6-.1-2.8 2.7.5" />',
  network: '<path d="m12 4 6.5 3.8v7.6L12 19.2l-6.5-3.8V7.8Z" /><path d="M12 4v7.6l6.5 3.8" /><path d="M5.5 7.8 12 11.6v7.6" /><path d="m18.5 7.8-6.5 3.8-6.5 3.8" />',
  checklist: '<rect x="5" y="4" width="14" height="16" rx="2" /><path d="m8.2 9.2 1.1 1.1 2-2.3" /><path d="M13.3 9.3h2.7" /><path d="m8.2 14.5 1.1 1.1 2-2.3" /><path d="M13.3 14.6h2.7" />',
  target: '<circle cx="12" cy="12" r="7.4" /><circle cx="12" cy="12" r="3.2" /><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3" />',
  'file-text': '<path d="M6 3.8h8.2L18 7.6v12.6H6Z" /><path d="M14.2 3.8v4H18" /><path d="M9 12h6M9 15.4h5" />',
  trophy: '<path d="M8 4h8v4.8c0 3.3-1.5 5.2-4 6.2-2.5-1-4-2.9-4-6.2Z" /><path d="M8 6H5.4v2.1A3.4 3.4 0 0 0 8.9 11" /><path d="M16 6h2.6v2.1A3.4 3.4 0 0 1 15.1 11" /><path d="M12 15v3.3" /><path d="M8.5 20h7" />',
};

function qishuRevenueIcon(name, extraClass = '') {
  const iconPath = qishuRevenueIconPaths[name] || qishuRevenueIconPaths.grid;
  const className = `qishu-revenue-icon qishu-revenue-icon--${name}${extraClass ? ` ${extraClass}` : ''}`;
  return `<i class="${esc(className)}" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${iconPath}</svg></i>`;
}

function qishuPriorityDots(level) {
  const count = level === '高' ? 3 : 2;
  return `<span class="qishu-revenue-priority qishu-revenue-priority--${level === '高' ? 'high' : 'mid'}">${esc(level)} ${Array.from({ length: count }, () => '<i></i>').join('')}</span>`;
}

function qishuRevenueGrowthChart() {
  return `
    <div class="qishu-revenue-chart reveal-scale">
      <header>
        <h3>单客户价值（ARPU）扩张路径</h3>
        <p>从低门槛验证进入部署、订阅、用量与成功服务，逐步拉升单客户生命周期价值。</p>
      </header>
      <div class="qishu-revenue-chart__plot">
        <svg viewBox="0 0 1120 420" role="img" aria-label="单客户价值 ARPU 扩张路径增长曲线">
          <defs>
            <linearGradient id="qishuRevenueArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#ff8a00" stop-opacity=".42" />
              <stop offset="72%" stop-color="#ff8a00" stop-opacity=".08" />
              <stop offset="100%" stop-color="#ff8a00" stop-opacity="0" />
            </linearGradient>
            <filter id="qishuRevenueGlow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path class="qishu-revenue-chart__area" d="M70 306 C190 294, 270 274, 360 258 C468 238, 548 222, 640 196 C746 166, 836 136, 932 96 C1000 68, 1042 50, 1080 32 L1080 358 L70 358 Z" />
          <path class="qishu-revenue-chart__line" d="M70 306 C190 294, 270 274, 360 258 C468 238, 548 222, 640 196 C746 166, 836 136, 932 96 C1000 68, 1042 50, 1080 32" />
          ${[
            [70, 306],
            [250, 282],
            [410, 248],
            [570, 216],
            [730, 170],
            [900, 108],
            [1080, 32],
          ]
            .map(
              ([x, y], index) => `
                <line class="qishu-revenue-chart__stem" x1="${x}" x2="${x}" y1="${y + 9}" y2="358" />
                <circle class="qishu-revenue-chart__node" cx="${x}" cy="${y}" r="10" />
                <circle class="qishu-revenue-chart__node-core" cx="${x}" cy="${y}" r="4" />`,
            )
            .join('')}
        </svg>
        <div class="qishu-revenue-chart__labels">
          ${qishuRevenueStages
            .map(
              (item, index) => `
                <article>
                  <span>${String(index + 1).padStart(2, '0')}　${esc(item.stage)}</span>
                  <strong>${esc(item.title)}</strong>
                </article>`,
            )
            .join('')}
        </div>
      </div>
    </div>`;
}

function qishuRevenueMetricsBlock() {
  return `
    <div class="qishu-revenue-metrics reveal-up">
      ${qishuRevenueMetrics
        .map(
          (item) => `
            <article>
              <header class="qishu-revenue-metric__head">
                <span>${esc(item.label)}</span>
                ${qishuRevenueIcon(item.icon, 'qishu-revenue-icon--metric')}
              </header>
              <strong>${esc(item.value)}</strong>
              <p>${esc(item.note)}</p>
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuRevenueCompositionBlock() {
  return `
    <article class="qishu-revenue-panel qishu-revenue-composition reveal-scale">
      <h3>成熟客户目标收入结构（测算）</h3>
      <div class="qishu-revenue-donut-wrap">
        <div class="qishu-revenue-donut" aria-label="成熟客户目标收入结构测算">
          <div>
            <strong>收入结构</strong>
            <span>COMPOSITION</span>
          </div>
        </div>
        <ul>
          ${qishuRevenueComposition
            .map(
              ([value, label], index) => `
                <li style="--dot-index:${index}">
                  <strong>${esc(value)}</strong>
                  <span>${esc(label)}</span>
                </li>`,
            )
            .join('')}
        </ul>
      </div>
    </article>`;
}

function qishuRevenueEngineBlock() {
  return `
    <article class="qishu-revenue-panel qishu-revenue-engine reveal-scale">
      <h3>持续收入引擎</h3>
      <div class="qishu-revenue-engine__stage">
        <div class="qishu-revenue-engine__core">
          <strong>持续收入<br>引擎</strong>
        </div>
        ${qishuRevenueDrivers
          .map(
            ([icon, title, body], index) => `
              <div class="qishu-revenue-engine__node qishu-revenue-engine__node--${index + 1}">
                <div class="qishu-revenue-engine__node-head">
                  ${qishuRevenueIcon(icon, 'qishu-revenue-icon--engine')}
                  <span>${esc(title)}</span>
                </div>
                <p>${esc(body)}</p>
              </div>`,
          )
          .join('')}
      </div>
    </article>`;
}

function qishuRevenueFlowBlock() {
  return `
    <article class="qishu-revenue-panel qishu-revenue-sankey qishu-revenue-sankey--image reveal-scale">
      <img src="assets/qishu-revenue-flow-card.png" alt="收入流向（从切入到持续）图示" />
    </article>`;
}

function qishuRevenueDetailTable() {
  return `
    <div class="qishu-revenue-detail-table reveal-up">
      <table>
        <thead>
          <tr>
            <th>收入项</th>
            <th>收费逻辑</th>
            <th>收入属性</th>
            <th>触发条件</th>
            <th>客户为何付费</th>
          </tr>
        </thead>
        <tbody>
          ${qishuRevenueDetailRows
            .map(
              ([number, icon, title, logic, property, trigger, reason]) => `
                <tr>
                  <td data-label="收入项">
                    <span class="qishu-revenue-row-number">${esc(number)}</span>
                    ${qishuRevenueIcon(icon, 'qishu-revenue-icon--row')}
                    <strong>${esc(title)}</strong>
                  </td>
                  <td data-label="收费逻辑">${esc(logic)}</td>
                  <td data-label="收入属性">${esc(property)}</td>
                  <td data-label="触发条件">${esc(trigger)}</td>
                  <td data-label="客户为何付费">${esc(reason)}</td>
                </tr>`,
            )
            .join('')}
        </tbody>
      </table>
    </div>`;
}

function qishuRevenueModelSection() {
  return `
    <section class="financing-section qishu-revenue-section" id="revenue-model" data-financing-section>
      <div class="qishu-revenue-page qishu-revenue-page--overview">
        <div class="qishu-revenue-page__intro reveal-up">
          <p class="section-kicker financing-section__marker">P17｜收入模型总览</p>
          <h2>收入模型：验证切入，持续扩张</h2>
          <p class="section-lead">成熟客户目标模型：从验证到规模化的单客户价值增长路径</p>
          <p>启枢 AI 不是一次性交付软件，而是通过 POC 验证、企业部署、平台使用、模块订阅、用量计费、行业规则包与客户成功服务，形成可复用、可扩张的持续收入模型。伴随客户成熟度提升，启枢不断扩展单客户价值（ARPU / LTV）。</p>
        </div>
        ${qishuRevenueGrowthChart()}
        ${qishuRevenueMetricsBlock()}
        <div class="qishu-revenue-analytics">
          ${qishuRevenueCompositionBlock()}
          ${qishuRevenueEngineBlock()}
          ${qishuRevenueFlowBlock()}
        </div>
        <p class="qishu-revenue-note">* 成熟客户目标模型为经营目标测算，以实际合同、系统记录、项目验收与续费数据为准。</p>
      </div>
      <div class="qishu-revenue-page qishu-revenue-page--detail">
        <div class="qishu-revenue-page__intro reveal-up">
          <p class="section-kicker financing-section__marker">P17｜收入模型｜Page 2</p>
          <h2>收入结构明细：平台 + 模块 + 用量 + 行业包</h2>
          <p class="section-lead">启枢收入由验证收入、落地收入、经常性收入、扩张收入构成，沿客户生命周期分阶段驱动价值兑现。从前端低门槛验证，到中段标准化部署与订阅，再到后端用量增长与能力升级，形成可持续、可扩张的收入结构。</p>
        </div>
        <div class="qishu-revenue-type-strip reveal-up">
          ${qishuRevenueTypes
            .map(
              ([icon, title, lineA, lineB]) => `
                <article>
                  ${qishuRevenueIcon(icon, 'qishu-revenue-icon--type')}
                  <div>
                    <strong>${esc(title)}</strong>
                    <p>${esc(lineA)}<br>${esc(lineB)}</p>
                  </div>
                </article>`,
            )
            .join('')}
        </div>
        <div class="qishu-revenue-detail-grid">
          ${qishuRevenueDetailTable()}
          <aside class="qishu-revenue-conclusions reveal-scale" id="revenue-conclusions">
            <h3>三大核心结论</h3>
            ${qishuRevenueConclusions
              .map(
                ([title, lineA, lineB], index) => `
                  <article>
                    <span>${String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>${esc(title)}</strong>
                      <p>${esc(lineA)}<br>${esc(lineB)}</p>
                    </div>
                  </article>`,
              )
              .join('')}
          </aside>
        </div>
        <div class="qishu-revenue-formula reveal-up">
          ${qishuRevenueIcon('layers', 'qishu-revenue-icon--formula')}
          <span>启枢收入模型 =</span>
          <strong>验证收入</strong>
          <b>+</b>
          <strong>部署收入</strong>
          <b>+</b>
          <strong>经常性收入</strong>
          <b>+</b>
          <strong>扩张收入</strong>
        </div>
        <div class="qishu-revenue-value-note reveal-up">
          <div class="qishu-revenue-value-note__heading">
            ${qishuRevenueIcon('users', 'qishu-revenue-icon--note')}
            <strong>商业价值总结</strong>
          </div>
          <p>前端通过 POC 降低成交门槛，快速建立信任并验证价值；中段通过平台费与模块订阅形成稳定、可预测的经常性收入；后端通过用量增长、规则包升级与客户成功服务，持续提升客单价与续费率，构建可扩张、可复制的增长飞轮。</p>
        </div>
      </div>
    </section>`;
}

function qishuDataAssetList() {
  return `
    <div class="qishu-data-asset-list reveal-up">
      ${qishuDataAssetItems
        .map(
          (item) => `
            <article>
              ${qishuRevenueIcon(item.icon, 'qishu-data-icon qishu-data-icon--asset')}
              <strong>${esc(item.title)}</strong>
              <p>${esc(item.body)}</p>
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuDataFlywheelGraphic() {
  return `
    <div class="qishu-flywheel qishu-data-flywheel-graphic qishu-data-image qishu-data-image--flywheel reveal-scale">
      <img src="assets/qishu-income-data-flywheel.png" alt="启枢 AI 数据飞轮：真实项目输入、矢量对象识别、3D 空间建模、规则命中与任务执行、专业人员复核、问题回流与经验沉淀、模型判断更准确、客户使用更多模块、产生更多真实项目数据" loading="lazy" decoding="async">
    </div>`;
}

function qishuDataLiftBand() {
  return `
    <div class="qishu-data-lift-band reveal-up">
      ${qishuDataLiftItems
        .map(
          (item) => `
            <article>
              ${qishuRevenueIcon(item.icon, 'qishu-data-icon qishu-data-icon--lift')}
              <div>
                <strong>${esc(item.title)}</strong>
                <p>${esc(item.body)}</p>
              </div>
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuDataLoopGraphic() {
  return `
    <div class="qishu-data-loop-graphic qishu-data-image qishu-data-image--loop reveal-scale">
      <img src="assets/qishu-income-loop-path.png" alt="启枢 AI 闭环路径：真实项目输入、矢量对象识别、3D 空间建模、规则命中与任务执行、专业人员复核、问题回流与经验沉淀、模型判断更准确、客户使用更多模块、产生更多真实项目数据" loading="lazy" decoding="async">
    </div>`;
}

function qishuDataAssetsTable() {
  return `
    <div class="qishu-data-assets-table reveal-up">
      <table>
        <thead>
          <tr>
            <th>数据资产类型</th>
            <th>数据内容</th>
            <th>形成方式</th>
            <th>可强化能力</th>
            <th>业务价值与支撑</th>
          </tr>
        </thead>
        <tbody>
          ${qishuDataAssetTableRows
            .map(
              ([icon, type, content, method, ability, value]) => `
                <tr>
                  <td>
                    ${qishuRevenueIcon(icon, 'qishu-data-icon qishu-data-icon--table')}
                    <strong>${esc(type)}</strong>
                  </td>
                  <td>${esc(content)}</td>
                  <td>${esc(method)}</td>
                  <td>${esc(ability)}</td>
                  <td>${esc(value)}</td>
                </tr>`,
            )
            .join('')}
        </tbody>
      </table>
    </div>`;
}

function qishuDataBarrierStrip() {
  return `
    <div class="qishu-data-barrier-strip reveal-up">
      ${qishuDataBarrierItems
        .map(
          (item, index) => `
            <article>
              <span>${String(index + 1).padStart(2, '0')}</span>
              <p>${esc(item.title)}</p>
              ${qishuRevenueIcon(item.icon, 'qishu-data-icon qishu-data-icon--barrier')}
            </article>`,
        )
        .join('')}
    </div>`;
}

function qishuDataFlywheelSection() {
  return `
    <section class="financing-section qishu-data-flywheel-section" id="data-flywheel" data-financing-section>
      <div class="qishu-data-page qishu-data-page--overview">
        <div class="qishu-data-copy reveal-up">
          <p class="section-kicker financing-section__marker">P20.1｜数据飞轮 / DATA FLYWHEEL</p>
          <h2>系统为什么会越来越强：<br>真实项目数据沉淀为<span>矢量模型、规则库和交付经验</span></h2>
          <p class="section-lead">启枢 AI 的壁垒不只是调用大模型，而是每一个真实项目都会让系统持续积累更强的图纸语义、空间关系、规则判断和交付经验。</p>
          <p>项目越多，数据越真实；数据越真实，模型越准确；模型越准确，规则越完善，系统能力也会呈指数级增强。</p>
          <p>启枢要沉淀的是工程对象、空间关系、行业规则和人工复核结果，而不是简单保存项目文件。</p>
          ${qishuDataAssetList()}
        </div>
        ${qishuDataFlywheelGraphic()}
        ${qishuDataLiftBand()}
        <div class="qishu-data-conclusion-strip reveal-up">
          <strong>数据飞轮的本质：</strong>
          <span>客户越多 → 数据越真实 → 模型越准确 → 场景越丰富 → 商业价值越强</span>
        </div>
      </div>
      <div class="qishu-data-page qishu-data-page--assets">
        <div class="qishu-data-page__intro reveal-up">
          <p class="section-kicker financing-section__marker">P20.2｜数据资产与闭环路径 / DATA ASSETS & VALUE LOOP</p>
          <h2>数据资产结构与闭环路径</h2>
          <p class="section-lead">启枢 AI 通过真实项目数据的持续输入、智能处理、专业复核与经验沉淀，形成数据资产与业务能力相互强化的正循环。</p>
        </div>
        <div class="qishu-data-assets-grid">
          <div>
            <h3>闭环路径</h3>
            ${qishuDataLoopGraphic()}
          </div>
          <div>
            <h3>数据资产结构</h3>
            ${qishuDataAssetsTable()}
          </div>
        </div>
        <div class="qishu-data-barrier">
          <h3>为什么这不是通用 AI 壁垒</h3>
          ${qishuDataBarrierStrip()}
        </div>
        <div class="qishu-data-value-conclusion reveal-up">
          ${qishuRevenueIcon('trophy', 'qishu-data-icon qishu-data-icon--value')}
          <p><strong>价值总结：</strong>数据飞轮让启枢形成真实项目样本、规则知识、交付经验与客户扩张之间的<span>正循环</span>，构成<span>长期壁垒和收入质量</span>的重要来源。</p>
        </div>
      </div>
    </section>`;
}

function financingSection({ page, id, title, titleLines = [], lead, visual, children = '', className = '', total = 20 }) {
  const hasStackedTitle = Array.isArray(titleLines) && titleLines.length > 0;
  const titleMarkup = hasStackedTitle
    ? `<h2 class="financing-section__title financing-section__title--stacked">${titleLines.map((line) => `<span>${esc(line)}</span>`).join('')}</h2>`
    : `<h2>${esc(title)}</h2>`;
  return `
    <section class="financing-section ${className}" id="${esc(id)}" data-financing-section>
      <div class="financing-section__copy reveal-up">
        ${financingMarker(page, total)}
        ${titleMarkup}
        ${lead ? `<p class="section-lead">${esc(lead)}</p>` : ''}
        ${children}
      </div>
      <div class="financing-section__visual">
        ${visual}
      </div>
    </section>`;
}

const qishuDeckTotal = 25;

function qishuPerformanceSummary() {
  return `
    <div class="qishu-performance-summary reveal-up" aria-label="启枢核心摘要">
      <article><span>双轨实验一</span><strong>工时释放 65.9%</strong></article>
      <article><span>双轨实验二</span><strong>工时节省约 72.0%</strong></article>
      <article><span>18个月客户目标</span><strong>3—5家 POC / 2—3家付费</strong></article>
      <article><span>核心壁垒</span><strong>CAD/BIM 之上的 AI 作业层</strong></article>
    </div>`;
}

function qishuIntegratedHeroSection() {
  return `
    <section class="financing-section financing-hero-section" id="overview" data-financing-section>
      <div class="magic-rings-bg" data-magic-rings-bg aria-hidden="true"></div>
      <div class="financing-hero-content reveal-up">
        ${financingMarker(1, qishuDeckTotal)}
        <p class="financing-brand-line">幻醒科技｜GIBIRA AI</p>
        <h1>启枢AI</h1>
        <p class="section-lead">启枢是工程矢量智能作业平台，基于 AI 矢量线段模型与 3D 矢量模型，理解工程图纸、空间结构、构件关系、行业规则和生产数据，并输出可计算、可校验、可交付的智能作业流程。</p>
        <p class="financing-narrative">当前入口是建筑设计、工程审查、工程造价和定制拆单；长期延展到工业设计、工业管线、设备布局、厂房改造和机器人空间建模。AI Harness（智能协同作业中枢）负责组织任务协同。</p>
        ${qishuPerformanceSummary()}
        <div class="financing-hero-actions">
          <a class="button primary" href="#qishu-product" data-magnetic>查看产品能力</a>
          <a class="button secondary" href="#commercial-progress" data-magnetic>查看商业进展</a>
          <a class="button secondary" href="mailto:${contact.email}" data-magnetic>联系我们</a>
        </div>
        <strong class="financing-brand-slogan">觉于核心</strong>
      </div>
    </section>`;
}

function qishuContactSection() {
  return `
    <section class="financing-section" id="contact" data-financing-section>
      <div class="financing-section__copy reveal-up">
        ${financingMarker(23, qishuDeckTotal)}
        <h2>竞争格局：不替代 CAD/BIM，而是做其上的 AI 作业层</h2>
        <p class="section-lead">客户已经拥有绘图、建模、造价、可视化和通用大模型工具，启枢的机会在于把矢量对象理解、工程规则判断、流程执行、人工复核和专业成果闭环连接起来。</p>
        ${qishuBodyCopy([
          'CAD/BIM 是底层工具，启枢不是要替代它们，而是嵌入其上，成为工程/工业企业现有软件系统之上的智能作业中间层。通用大模型可以理解语言，但不天然理解 CAD 图层、线段闭合、构件关系、工程责任和专业交付格式。',
          '启枢是当前核心商业化产品。巨灵、诺思、蜂聚与 ACAUSAL 展示 AI Harness 在不同任务结构中的场景化能力，共同拓展公司的平台应用边界。',
        ])}
      </div>
      <div class="financing-section__visual">
        ${dataTable(['对手类型', '客户为何使用', '主要短板', '启枢胜出条件'], qishuCompetitiveRows, 'qishu-record-table')}
        ${financingCards(financingAppendixCards, 'financing-card-grid--appendix')}
      </div>
    </section>`;
}

function qishuSection(options) {
  return financingSection({ ...options, total: qishuDeckTotal });
}

function qishuIntegratedContent() {
  return `
    ${qishuIntegratedHeroSection()}
    ${qishuSection({
      page: 3,
      id: 'opportunity',
      title: '为什么现在是机会：AI 从生成内容进入执行工程任务',
      lead: '工程场景需要的不是聊天AI，而是能进入真实项目资料、专业软件、规则判断和人工复核流程的作业系统。',
      children: qishuBodyCopy([
        'AI 的机会正在从内容生成走向工作执行。建筑、工程、制造和工业空间任务具备高度结构化对象、可复核结果、高频重复劳动和高错误代价，天然适合从“生成答案”升级为“交付成果”。',
        '启枢切入的不是更会写说明的工具，而是把图纸、模型、规则、材料、人员和交付物组织成连续流程。企业真正需要的AI，必须能理解资料、调度工具、记录过程、输出结果，并让专业人员最终确认。',
      ]),
      visual: `${financingFlow(financingOpportunityPath, 'financing-flow--path')}${financingMiniTable(qishuOpportunityRows)}${qishuOpportunityCarousel()}`,
    })}
    ${qishuSection({
      page: 4,
      id: 'qishu-product',
      title: '为什么不是建筑工具：启枢服务的是矢量对象与空间规则',
      lead: '建筑设计和工程审查是当前验证最充分的入口，但启枢的底层能力是理解矢量对象、空间关系、行业规则和生产数据。',
      children: qishuBodyCopy([
        '启枢的技术边界不止建筑设计。建筑场景之所以优先，是因为图纸、规范、构件、空间关系和复核责任都非常清晰，ROI 也容易通过真实项目量化。',
        '启枢真正复用的是“矢量对象 + 空间规则 + 专业交付”的作业结构。同一套对象理解能力可以进入图纸审查、工程造价、定制拆单、工业管线、设备布局和机器人空间建模。',
      ]),
      visual: `${dataTable(['场景', '共同对象', '启枢交付'], qishuObjectRuleRows)}${financingCards(financingProductPillars, 'financing-card-grid--three')}`,
    })}
    ${qishuSection({
      page: 5,
      id: 'commercial-priority',
      title: '商业化优先级：当前切入、相邻增购、长期扩展',
      lead: '资源配置围绕证据成熟度排序，长期场景不写成当前收入承诺。',
      children: qishuBodyCopy([
        '建筑工程图纸与智能审查是当前切入点，因为已有双轨实验、专业复核与可量化工时口径。工程造价与全屋定制拆单共享图纸、构件、材料和生产规则，是更近的增购路径。',
        '工业空间、管线、设备与机器人场景体现 3D 矢量模型的长期边界，按联合试点和跨场景复用条件推进。',
      ]),
      visual: dataTable(['优先级', '场景', '判断依据', '商业动作'], qishuCommercialPriorityRows, 'qishu-record-table qishu-priority-table'),
    })}
    ${qishuSection({
      page: 6,
      id: 'pain-points',
      title: '客户痛点：工程数据无法被连续使用',
      lead: '工程企业不是没有软件，而是软件之间、岗位之间、数据之间没有形成连续作业链。',
      children: qishuBodyCopy([
        '设计师画图，BIM 团队翻模，造价人员重新算量，工厂拆单人员重新识别尺寸和材料，施工现场再根据图纸人工核对。每换一个环节，数据就被重新录入、解释和转换，也就多一次出错和返工机会。',
        '这些工作单独看都是小环节，但叠加起来会消耗大量高成本人力，并把错误推迟到交付末端。启枢切入的不是某个孤立功能，而是这些环节背后共同的矢量对象理解、规则核对和交付闭环问题。',
      ]),
      visual: `${dataTable(['场景', '当前问题', '直接损失', '启枢切入点'], qishuPainRows)}${qishuWideImage({
        image: 'assets/qishu-pain-points-continuous-data-v3.png',
        title: '工程数据无法被连续使用',
        meta: 'Pain Point Map',
      }, 'qishu-wide-image--pain')}`,
    })}
    ${qishuSection({
      page: 7,
      id: 'drawing-intelligence',
      title: 'AI 矢量线段模型：让 AI 看懂工程图纸的线、图层和构件',
      lead: '工程图纸不是普通图片；每一条线、每个图层、每个闭合区域都对应构件、尺寸、材料或工艺关系。',
      children: qishuBodyCopy([
        '启枢的第一层能力是 AI 矢量线段模型。它把 DWG、DXF、PDF、CAD 截图、BIM 视图和扫描资料中的线段、轮廓、标注、图层、尺寸、闭合区域和构件边界提取出来，并建立对象关系。',
        '只有先把图纸转化为可计算的矢量语义，后续的审查、生成、算量、拆单、成本优化和生产交付才成立。这也是启枢区别于普通图片识别工具和通用 AI 的基础。',
      ]),
      visual: `${qishuImageStrip(qishuDrawingCaseCards, 'qishu-image-strip--wide')}${dataTable(['能力', '说明'], qishuVectorModelRows)}${financingFlow(financingDrawingFlow, 'financing-flow--seven')}${qishuModuleDemoVideo(qishuModuleDemoVideos.drawingIntelligence)}`,
    })}
    ${qishuSection({
      page: 8,
      id: 'spatial-canvas',
      title: '3D 矢量模型：把二维资料和现场空间变成可计算结构',
      lead: '大量工程/工业任务发生在真实空间中，必须理解标高、碰撞、安全距离、孔位、管线和现场边界。',
      children: qishuBodyCopy([
        '启枢的第二层能力是 3D 矢量模型。它把二维图纸、现场照片、扫描资料、BIM 视图和效果图中的空间结构组织起来，形成可浏览、可修改、可校验、可复用的空间数据。',
        '3D 能力不是为了做一个好看的展示，而是为了让空间关系进入计算：哪些构件相邻，哪些区域冲突，哪些尺寸不满足规则，哪些管线需要避让，哪些部件可以直接进入生产或施工。',
      ]),
      visual: `${qishuImageStrip(qishuSpatialCaseCards, 'qishu-image-strip--quad')}${dataTable(['能力', '说明'], qishuSpatialModelRows)}${financingCards(qishuSpatialApplications, 'financing-card-grid--four')}`,
    })}
    ${qishuSection({
      page: 9,
      id: 'workflow',
      titleLines: ['启枢如何工作', '输入资料、理解对象、调度任务、输出结果、人工复核'],
      lead: '启枢不是点状功能，而是一条由 Harness系统 组织的智能作业链。',
      children: qishuBodyCopy([
        '客户输入的不是单一文件，而是 CAD 图纸、BIM 模型、PDF、效果图、现场照片、空间扫描资料、设计任务书、企业标准、规范条文、材料表、工艺要求和历史项目资料。',
        '系统先进行图纸清洗、图层识别、构件识别和空间拓扑解析，再按任务类型调用审图、造价、拆单或空间校验能力。AI 输出不会直接作为最终成果，而是进入专业人员复核，并回流到项目知识库和规则库。',
      ]),
      visual: `${financingFlow(['资料输入', '矢量解析', '3D建模', '任务调度', '专业输出', '人工复核'], 'financing-flow--six')}${dataTable(['阶段', '具体动作', '输出'], qishuWorkflowRows)}`,
    })}
    ${qishuSection({
      page: 10,
      id: 'harness',
      title: '场景一：建筑设计全流程',
      lead: '建筑设计是启枢当前验证最充分、最适合作为第一批商业化入口的场景。',
      children: qishuBodyCopy([
        '原因不是启枢只属于建筑行业，而是建筑设计高度依赖图纸、规范、空间关系和多专业协同，任务频次高、错误代价高、ROI 容易量化。',
        '启枢可以将平面图、立面图、剖面图、BIM 视图和规范文件组织成同一个工作流，让 AI 先完成重复性识别、预警和整理，再由设计师和总工进行专业判断。它不是替代设计师，而是把专业人员从低价值绘图、查错和整理中释放出来。',
      ]),
      visual: `${dataTable(['环节', '启枢能力', '交付物'], qishuBuildingRows)}${qishuWideImage({
        image: 'assets/qishu-scene-building-flow.png',
        title: '建筑设计全流程能力与交付物',
        meta: 'Scene 01',
      }, 'qishu-wide-image--scene')}`,
    })}
    ${qishuSection({
      page: 11,
      id: 'cost-management',
      title: '场景二：工程造价与成本管理',
      lead: '工程造价不是孤立模块，而是从图纸对象识别自然延展出来的高价值场景。',
      children: qishuBodyCopy([
        '大量成本信息隐藏在图纸和构件关系中。造价人员需要从图纸中反复识别构件、区域、材料、规格、数量和工程量，再结合清单、定额和项目规则进行计算。',
        '启枢可以先从图纸中提取墙体、柱梁、门窗、板件、管线、区域、楼层和构件数量，再辅助生成工程量清单和材料统计。对于需要专业判断的成本口径，系统提供可核对的数据底稿、差异提示和版本追踪。',
      ]),
      visual: `${financingFlow(['结构图纸', '识别构件', '提取工程量', '关联材料规格', '生成报价底稿', '人工复核差异', '输出优化建议'], 'financing-flow--seven')}${financingCards(financingCostCards, 'financing-card-grid--four')}${qishuModuleDemoVideo(qishuModuleDemoVideos.costManagement)}`,
    })}
    ${qishuSection({
      page: 12,
      id: 'custom-order',
      title: '场景三：全屋定制自动拆单与生产数据',
      lead: '定制拆单的本质不是把图纸换成表格，而是把空间对象、构件关系和工厂生产规则连接起来。',
      children: qishuBodyCopy([
        '在装饰装修和全屋定制场景中，设计方案并不能直接进入工厂生产。设计图纸需要被拆解成板件尺寸、孔位、五金、封边方式、材料规格、组装关系和加工文件。',
        '传统拆单高度依赖资深人员经验。启枢先识别空间、柜体、构件、板件边界和工艺要求，再根据工厂规则生成可复核拆单结果，由拆单人员或工程师确认后进入生产。',
      ]),
      visual: `${financingFlow(financingOrderPath)}${financingCards(qishuOrderValueCards, 'financing-card-grid--four')}${qishuModuleDemoSlot()}`,
    })}
    ${qishuSection({
      page: 13,
      id: 'decoration-business',
      title: '场景四：装饰装修业务演示',
      lead: '从方案理解到空间表达，展示启枢在装饰装修场景中的多风格空间生成与流程协同能力。',
      children: qishuBodyCopy([
        '装饰装修场景不仅需要生成视觉效果，更需要把空间方案、风格表达、材料选择、构件关系和后续交付流程连接起来。启枢可以在同一空间基础上理解设计意图、识别空间边界、组织风格变化，并为后续图纸深化、材料匹配、拆单和施工沟通提供结构化基础。',
        '这一场景把客户确认、设计表达和工程交付串联为连续流程，让多风格方案不止停留在效果展示，而是继续进入材料、构件和生产数据协同。',
      ]),
      visual: `${financingCards(qishuDecorationCapabilities, 'financing-card-grid--four')}${qishuModuleDemoVideo(qishuModuleDemoVideos.decoration)}`,
    })}
    ${qishuSection({
      page: 14,
      id: 'cross-scenario',
      title: '场景五：工业设计、工业管线与空间作业',
      lead: '工业空间作业把 3D 矢量模型延展到设备、管线、厂房改造和机器人空间建模。',
      children: qishuBodyCopy([
        '启枢的长期空间不止建筑设计，还包括工业设计、工业管线、设备布局、厂房改造和机器人空间建模。这些场景表面行业不同，底层任务却高度相似：理解图纸线段、设备边界、空间距离、管线走向、构件关系、施工约束和运维规则。',
        '建筑工程图纸建立首批商业化证据，工业空间作业沿同一套矢量模型与 3D 模型自然扩展，通过联合试点、空间复核和跨场景协同持续形成应用资产。',
      ]),
      visual: `${dataTable(
        ['方向', '启枢能力', '潜在价值', '应用阶段'],
        [
          ['工业厂房改造', '设备、通道、空间边界识别', '改造方案快速评审', '场景拓展'],
          ['工业管线', '管线路径、碰撞、标高关系', '降低施工冲突', '场景拓展'],
          ['设备布局', '设备尺寸、安全距离、运维空间', '提升布局效率', '联合试点'],
          ['机器人空间建模', '空间边界、障碍物、路径识别', '服务机器人/AGV作业', '能力协同'],
          ['3D/MR评审', '现场复核、空间展示、协同讨论', '降低沟通成本', '可视化应用'],
        ],
      )}${qishuWideImage({
        image: 'assets/qishu-scene-industrial-space-v2.png',
        title: '工业设计、工业管线与空间作业',
        meta: 'Scene 05',
      }, 'qishu-wide-image--scene')}`,
    })}
    ${qishuSection({
      page: 15,
      id: 'validation',
      title: '实际效果验证：先用建筑工程图纸跑通，再向相邻场景复制',
      lead: '建筑工程图纸相关验证已经形成可量化证据，并为相邻工程场景建立统一复测口径。',
      children: qishuBodyCopy([
        '在 CTA 地库车库施工图联合双轨实验中，人工基线工时为 128.5 小时，GIBIRA 人机协同工时为 43.8 小时，单项目释放工时比例为 65.9%。',
        '在陕建一建设计院车道坡施工图双轨试验中，综合工时从 116.0 小时降至 32.5 小时，节省约 72.0%。这些结果证明图纸清洗、对象识别、风险前置、CAD/BIM 可编辑交付等能力具备可量化效果，并形成造价、拆单和工业空间 POC 的复测基础。',
      ]),
      visual: `${qishuValidationChart()}${financingCards(financingValidationCards, 'financing-card-grid--seven')}${dataTable(
        ['项目/样本', '样本类型', '基线口径', 'AI 介入范围', '专业复核', '结果', '复现条件'],
        qishuValidationEvidenceRows,
        'qishu-record-table qishu-evidence-table',
      )}<p class="financing-note">样本范围：当前主要来自建筑工程图纸，不代表已覆盖每一个行业；相邻场景沿相同基线、复核与验收口径继续验证。</p>`,
    })}
    ${qishuSection({
      page: 16,
      id: 'commercial-progress',
      title: '客户与商业管线：从验证入口到多场景扩散',
      lead: '商业管线按场景证据、客户阶段、POC验收方式和付费价值统一组织。',
      children: qishuBodyCopy([
        '启枢的客户管线要按场景分层：第一层是当前验证最充分的建筑工程图纸和设计审查客户；第二层是工程造价、全屋定制、装饰装修等与图纸/构件/生产数据强相关的客户；第三层是工业空间、管线、设备布局和机器人空间建模等更长期场景。',
        '客户信息按照披露边界呈现场景方向、推进阶段、核心痛点、启枢价值、验收方式和下一步转化动作，让商业证据与客户隐私同时得到保护。',
      ]),
      visual: `${qishuCommercialFunnel()}${dataTable(
        ['客户', '客户类型', '阶段', '已完成动作', '下一动作', '预计金额/预算', '当前阻塞'],
        qishuPipelineRows,
        'qishu-record-table qishu-pipeline-table',
      )}${financingMiniTable(financingCommercialRows)}`,
    })}
    ${qishuRevenueModelSection()}
    ${qishuSection({
      page: 18,
      id: 'market-entry',
      title: '市场进入策略：先验证高频场景，再复制同类作业结构',
      lead: '启枢不是先打一个行业，而是先打可量化ROI的高频工程矢量作业结构。',
      children: qishuBodyCopy([
        '建筑工程图纸、设计审查、造价、拆单之所以优先，是因为它们具备资料形态清晰、任务高频、人工成本高、错误代价高、结果可复核、客户愿意为效率提升付费等共同特征。',
        '第一阶段建立建筑图纸和审查标杆；第二阶段把图纸理解延展到造价和拆单；第三阶段再进入工业空间、厂房改造、管线设计和机器人空间建模，证明 3D 矢量模型的长期扩展能力。',
      ]),
      visual: `${financingCards(financingMarketEntry, 'financing-card-grid--four')}${dataTable(
        ['阶段', '目标', '场景', '关键证据'],
        [
          ['第一阶段', '建立可信标杆', '建筑图纸、智能审查、施工图深化', '工时节省、复核通过率、问题闭环'],
          ['第二阶段', '扩展收入模块', '工程造价、定制拆单、材料清单', '单客户增购、模块付费、项目ROI'],
          ['第三阶段', '扩大技术边界', '工业空间、管线、设备布局、机器人空间', '跨行业POC、空间模型复用、平台壁垒'],
        ],
      )}`,
    })}
    ${qishuSection({
      page: 19,
      id: 'market-scale',
      title: '市场规模与收入推导：从可服务客户池到可核验收入',
      lead: '在缺少可靠公开口径和真实客单价前，不用宏观产值替代可服务市场。',
      children: qishuBodyCopy([
        '市场测算从明确客户名单、业务频次、痛点强度和采购路径出发，再用 POC 转化、付费部署、模块增购和使用量记录逐层更新。',
        '收入规模由真实客户数、合同金额、回款与系统用量推导；任何年度目标都随 CRM 和项目验收数据滚动校准。',
      ]),
      visual: dataTable(['推导层级', '范围', '核验口径'], qishuMarketScaleRows, 'qishu-record-table qishu-market-table'),
    })}
    ${qishuDataFlywheelSection()}
    ${qishuSection({
      page: 21,
      id: 'team-execution',
      title: '团队执行分工：产品、算法、行业与交付闭环',
      lead: '团队职责直接对应客户推进、模型能力、产品版本、专业验收和交付运营。',
      children: qishuBodyCopy([
        '启枢的执行重点不是扩张组织规模，而是让产品、算法、行业知识与客户交付围绕同一套里程碑协同。',
        '每个重点 POC 同时明确业务负责人、技术负责人、专业复核人与验收口径，确保客户结果能够回到产品版本。',
      ]),
      visual: dataTable(['成员', '主要职责', '本轮关键结果'], qishuTeamExecutionRows, 'qishu-record-table qishu-team-table'),
    })}
    ${qishuSection({
      page: 22,
      id: 'risk-control',
      title: '关键风险与应对：把责任边界写进交付流程',
      lead: '早期风险集中在数据安全、专业责任、客户集中、回款周期与定制化边界。',
      children: qishuBodyCopy([
        '启枢以专业人员最终确认作为责任边界，并通过样本授权、过程日志、固定验收清单和分阶段回款降低交付风险。',
        '场景扩张服从证据成熟度：建筑工程图纸优先，相邻场景只有在对象、规则和交付结构可复用时进入联合试点。',
      ]),
      visual: dataTable(['风险', '具体表现', '应对措施'], qishuRiskRows, 'qishu-record-table qishu-risk-table'),
    })}
    ${qishuContactSection()}
`;
}

function ecosystemSection() {
  return `
    <section class="section ecosystem-section vertical-scroll-panel" id="ecosystem" data-vertical-scroll-panel>
      <p class="section-kicker reveal-up">03 / Team & Co-build</p>
      ${scrollFloatTitle('团队与共建生态')}
      <p class="section-lead ecosystem-lead reveal-up" data-scroll-float-skip>公司校企合作方：陕建一建、CTA城镇设计、西安建筑科技大学、西安邮电大学、长安大学、西安科技大学、西安欧亚学院、美国戴顿大学、美国卡内基梅隆大学共研实验室、BesTV百事通、Quiver AI。</p>
      ${ecosystemCardGrid(ecosystemCards)}
      ${logoLoop(ecosystemLogos)}
    </section>`;
}

function coreTeamSection() {
  return `
    <section class="section team-section vertical-scroll-panel" id="team" data-vertical-scroll-panel>
      <p class="section-kicker reveal-up">04 / Core Team</p>
      ${scrollFloatTitle('核心业务团队')}
      <p class="section-lead reveal-up">核心成员按业务推进与研发工程分开展示；本组覆盖 AI 全栈项目推进、AI 平台产品战略、BIM 项目、AI 架构视觉系统与运营管理能力分工。</p>
      ${teamProfileBoard(coreMemberCards)}
    </section>`;
}

function aiResearchTeamSection() {
  return `
    <section class="section team-section vertical-scroll-panel" id="ai-research-team" data-vertical-scroll-panel>
      <p class="section-kicker reveal-up">05 / AI R&D Team</p>
      ${scrollFloatTitle('AI研发团队')}
      <p class="section-lead reveal-up">负责图纸解析、生成式AI、模型部署、前后端工程化。</p>
      ${teamProfileBoard(aiResearchTeamCards)}
    </section>`;
}

function collaborativeResearchTeamSection() {
  return `
    <section class="section team-section vertical-scroll-panel" id="collaborative-research-team" data-vertical-scroll-panel>
      <p class="section-kicker reveal-up">06 / Collaborative R&D Team</p>
      ${scrollFloatTitle('合作研发团队')}
      <p class="section-lead reveal-up">合作研发团队按商业计划书与共同研发实验室资料展示，覆盖图像处理、BIM智能融合、计算机视觉、多模态生成、计算机科学教育与数据挖掘研究。</p>
      ${teamProfileBoard(collaborativeResearchTeamCards)}
    </section>`;
}

function advisorSection() {
  return `
    <section class="section advisor-section vertical-scroll-panel" id="advisors" data-vertical-scroll-panel>
      <p class="section-kicker reveal-up">07 / Advisors</p>
      ${scrollFloatTitle('学术与行业顾问')}
      <p class="section-lead reveal-up">顾问与外部资源按 BP 真实关系展示，不写成全职团队成员或联合创始人。</p>
      ${teamProfileBoard(advisorProfileCards)}
    </section>`;
}

function verticalScrollStory(innerHtml) {
  return `
  <section class="vertical-scroll-story" data-vertical-scroll-story aria-label="GIBIRA 纵向内容叙事">
    ${innerHtml}
  </section>`;
}

function projectLinks() {
  const itemsHtml = featuredProjects
    .map(
      (project, index) => `
        <a href="${project.href}" data-magnetic data-animated-list-item data-index="${index}">
          <span>${project.en}</span>
          <strong>${project.title}</strong>
        </a>`,
    )
    .join('');
  return `<section class="section project-return">
      <p class="section-kicker">Project Matrix</p>
      <h2>继续查看幻醒科技项目矩阵</h2>
      ${animatedListShell('mini-projects', itemsHtml, 'content-list-shell mini-project-list-shell')}
    </section>`;
}

function projectContactSection(projectName) {
  return `<section class="section project-contact-section">
      <p class="section-kicker">Contact &amp; Collaboration</p>
      <h2>围绕${esc(projectName)}建立场景合作与联合验证。</h2>
      <p class="section-lead">欢迎产业客户、技术伙伴与学术机构围绕真实任务、数据接口、联合试点和阶段交付展开合作。</p>
      <div class="cta-grid">
        <a class="button primary" href="mailto:${contact.email}" data-magnetic>建立项目合作</a>
        <a class="button secondary" href="tel:${contact.phone}" data-magnetic>联系项目团队</a>
      </div>
    </section>`;
}

function pageClassName(file) {
  const slug = file === 'index.html' ? 'home' : file.replace(/\.html$/, '');
  const baseClass = `page-${slug.replace(/[^a-z0-9-]/gi, '-').toLowerCase()}`;
  const alignedProjects = new Set(['axion-os.html', 'north-ai.html', 'fengju-ai.html', 'acausal.html']);
  return `${baseClass}${alignedProjects.has(file) ? ' project-secondary-page' : ''}`;
}

function layout(page) {
  const browserTitle = page.file === 'index.html' ? page.title : `${page.title} | 幻醒科技 GIBIRA`;
  const pageClass = pageClassName(page.file);
  const redirectMeta = page.redirectTo
    ? `
    <meta http-equiv="refresh" content="0; url=${esc(page.redirectTo)}" />
    <link rel="canonical" href="${esc(page.redirectTo)}" />`
    : '';
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>${esc(browserTitle)}</title>
    <meta name="description" content="${esc(page.description)}" />
    ${redirectMeta}
    <style>${css}</style>
  </head>
  <body class="is-loading">
    ${loadingScreen()}
    <div class="shape-grid-bg" data-shape-grid-bg aria-hidden="true">
      <canvas class="shapegrid-canvas"></canvas>
    </div>
    <div class="magnetic-cursor" aria-hidden="true"></div>
    ${nav(page.file)}
    <main class="site-main">
      <div class="page-shell ${pageClass}">
        ${page.content}
      </div>
    </main>
    ${footer(page.file)}
    <script src="assets/gsap.min.js"></script>
    <script src="assets/ScrollTrigger.min.js"></script>
    <script type="module" src="assets/liquid-ether.js"></script>
    <script>${siteJs}</script>
  </body>
</html>
`;
}

const css = `
  :root {
    color-scheme: dark;
    --bg: #030303;
    --panel: rgba(255, 255, 255, 0.055);
    --panel-strong: rgba(255, 255, 255, 0.1);
    --line: rgba(255, 255, 255, 0.16);
    --line-bright: rgba(255, 255, 255, 0.34);
    --text: #f7f7f3;
    --muted: rgba(247, 247, 243, 0.7);
    --soft: rgba(247, 247, 243, 0.54);
    --accent: #f59b32;
    --accent-red: #e7472e;
    --shadow: 0 28px 90px rgba(0, 0, 0, 0.42);
    --motion-fast: 360ms;
    --motion-base: 720ms;
    --motion-slow: 1000ms;
    --ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1);
    --site-rail: clamp(32px, 7vw, 140px);
    --page-rail: var(--site-rail);
    --small-copy-size: 18px;
    --small-copy-line-height: 1.72;
    --small-label-line-height: 1.45;
    --model-progress: 0;
    --model-rotate-x: 58deg;
    --model-rotate-y: 0deg;
    --model-rotate-z: -36deg;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    min-width: 320px;
    color: var(--text);
    background:
      linear-gradient(90deg, rgba(0,0,0,.98), rgba(0,0,0,.9)),
      repeating-linear-gradient(90deg, rgba(255,255,255,.055) 0 1px, transparent 1px 96px),
      repeating-linear-gradient(0deg, rgba(255,255,255,.045) 0 1px, transparent 1px 96px),
      #030303;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    letter-spacing: 0;
    overflow-x: hidden;
  }
  body.is-loading {
    height: 100vh;
    overflow: hidden;
  }
  .site-loader {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    color: #fdfdf9;
    background:
      radial-gradient(circle at 50% 44%, rgba(239,68,68,.2), transparent 32%),
      repeating-linear-gradient(90deg, rgba(255,255,255,.045) 0 1px, transparent 1px 96px),
      repeating-linear-gradient(0deg, rgba(255,255,255,.036) 0 1px, transparent 1px 96px),
      linear-gradient(90deg, rgba(0,0,0,.98), rgba(0,0,0,.9)),
      #030303;
    pointer-events: auto;
    user-select: none;
    opacity: 1;
    visibility: visible;
    transition:
      opacity 680ms var(--ease-out-soft),
      visibility 680ms var(--ease-out-soft);
  }
  .site-loader.is-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .site-loader__stage {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .site-loader__inner {
    position: relative;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transform: translateX(16px);
  }
  .site-loader__mark {
    position: absolute;
    width: 10px;
    height: 100%;
    top: 50%;
    left: -16px;
    z-index: 2;
    transform: translate(-100%, -50%);
  }
  .site-loader__dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #EF4444;
    box-shadow: 0 0 12px 0 #fdfdf9, 0 0 28px 0 rgba(239,68,68,.72);
    animation: siteLoaderBounce 1s linear infinite;
    transition: .7s cubic-bezier(.77,0,.175,1);
  }
  .site-loader__dot-glow {
    position: absolute;
    width: 14px;
    height: 14px;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 50%;
    background-color: rgba(239,68,68,.16);
    box-shadow: 0 0 22px 0 rgba(249,115,22,.88);
    filter: blur(10px);
  }
  .site-loader__shadow {
    position: absolute;
    width: 16px;
    height: 4px;
    left: 50%;
    bottom: 0;
    border-radius: 50%;
    background-color: #EF4444;
    box-shadow: 0 4px 22px 0 rgba(239,68,68,.82);
    filter: blur(12px);
    transform: translateX(-50%);
    animation: siteLoaderShadow 1s linear infinite;
    transition: .7s cubic-bezier(.77,0,.175,1);
  }
  .site-loader__text {
    position: relative;
    color: #fdfdf9;
    font-size: clamp(16px, 1.1vw, 20px);
    font-weight: 620;
    line-height: 1.1;
    letter-spacing: 0;
    transform: translateY(-.5rem);
  }
  .site-loader__text span {
    display: inline-block;
    opacity: 0;
    transform-origin: bottom left;
    animation: siteLoaderTextReveal 1s cubic-bezier(.77,0,.175,1) forwards;
    animation-iteration-count: 1;
  }
  .site-loader__text span:nth-child(1) { animation-delay: 0ms; }
  .site-loader__text span:nth-child(2) { animation-delay: 20ms; }
  .site-loader__text span:nth-child(3) { animation-delay: 40ms; }
  .site-loader__text span:nth-child(4) { animation-delay: 60ms; }
  .site-loader__text span:nth-child(5) { animation-delay: 80ms; }
  .site-loader__text span:nth-child(6) { animation-delay: 100ms; }
  .site-loader__text span:nth-child(7) { animation-delay: 120ms; }
  .site-loader__text span:nth-child(8) { animation-delay: 140ms; }
  .site-loader__text span:nth-child(9) { animation-delay: 160ms; }
  .site-loader__text span:nth-child(10) { animation-delay: 180ms; }
  .site-loader__text span:nth-child(11) { animation-delay: 200ms; }
  .site-loader__text span:nth-child(12) { animation-delay: 220ms; }
  .site-loader__fade {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 1;
    background:
      radial-gradient(circle at 50% 50%, rgba(239,68,68,.14), transparent 30%),
      linear-gradient(90deg, rgba(0,0,0,.96), rgba(0,0,0,.86)),
      #030303;
    animation: siteLoaderFadeOut 2s forwards;
  }
  @media (min-width: 1025px) {
    .site-loader__inner { transform: none; }
    .site-loader__mark { left: -48px; }
  }
  @keyframes siteLoaderFadeOut {
    0%, 50% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes siteLoaderTextReveal {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes siteLoaderShadow {
    0% { filter: blur(12px); transform: translate(-50%) scale(.6); opacity: .4; }
    30% { filter: blur(2px); transform: translate(-50%, -.5rem) scale(1); opacity: 1; }
    100% { filter: blur(12px); transform: translate(-50%) scale(.6); opacity: .4; }
  }
  @keyframes siteLoaderBounce {
    0% { transform: translateY(calc(-50% - 1rem)) scaleX(1.4); }
    3% { transform: translateY(calc(-50% - .95rem)) scale(1.1, 1.05); }
    5% { transform: translateY(calc(-50% - .9rem)) scale(1.2, 1.1); }
    8% { transform: translateY(calc(-50% - .8rem)) scale(.98, 1.15); }
    12% { transform: translateY(calc(-50% - .7rem)) scale(.95, 1.2); }
    16% { transform: translateY(calc(-50% - .5rem)) scale(.92, 1.25); }
    20% { transform: translateY(calc(-50% - .2rem)) scale(.9, 1.4); }
    24% { transform: translateY(calc(-50% + .4rem)) scale(.9, 1.7); }
    26% { transform: translateY(calc(-50% + .8rem)) scale(.9, 1.4); }
    28% { transform: translateY(calc(-50% + .95rem)) scale(1.2, .7); }
    30% { transform: translateY(calc(-50% + 1rem)) scale(1.5, .3); }
    32% { transform: translateY(calc(-50% + .8rem)) scale(1.4, .4); }
    36% { transform: translateY(calc(-50% + .5rem)) scale(1.2, .8); }
    42% { transform: translateY(calc(-50% + .2rem)) scaleY(1.2); }
    48% { transform: translateY(calc(-50% - .2rem)) scale(.9, 1.4); }
    54% { transform: translateY(calc(-50% - .3rem)) scale(.92, 1.3); }
    62% { transform: translateY(calc(-50% - .5rem)) scale(.95, 1.2); }
    68% { transform: translateY(calc(-50% - .6rem)) scale(.97, 1.15); }
    75% { transform: translateY(calc(-50% - .7rem)) scale(.98, 1.1); }
    80% { transform: translateY(calc(-50% - .8rem)) scale(.99, 1.08); }
    85% { transform: translateY(calc(-50% - .9rem)) scaleY(1.05); }
    90% { transform: translateY(calc(-50% - .95rem)) scale(1.2, 1.03); }
    95% { transform: translateY(calc(-50% - .98rem)) scale(1.1, 1.01); }
    100% { transform: translateY(calc(-50% - 1rem)) scaleX(1.4); }
  }
  body.cursor-ready, body.cursor-ready a, body.cursor-ready button, body.cursor-ready [data-magnetic] { cursor: none; }
  a { color: inherit; text-decoration: none; }
  p { color: var(--muted); line-height: 1.82; }
  strong { color: var(--text); }
  .shape-grid-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    background:
      radial-gradient(circle at 52% 38%, rgba(245,155,50,.08), transparent 28%),
      linear-gradient(90deg, rgba(0,0,0,.96), rgba(0,0,0,.86)),
      #030303;
    transition:
      opacity 560ms var(--ease-out-soft),
      visibility 560ms var(--ease-out-soft);
  }
  body.is-past-hero .shape-grid-bg {
    opacity: .42;
    visibility: visible;
  }
  .shapegrid-canvas {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .site-main,
  .footer-band {
    position: relative;
    z-index: 1;
  }
  .site-main { min-height: 100vh; overflow: visible; }
  .page-shell {
    min-height: inherit;
  }
  .reveal,
  .reveal-up,
  .reveal-left,
  .reveal-right,
  .reveal-scale,
  .stagger-item {
    opacity: 0;
    transition:
      opacity var(--motion-base) var(--ease-out-soft),
      transform var(--motion-base) var(--ease-out-soft);
    will-change: opacity, transform;
  }
  .reveal,
  .reveal-up,
  .stagger-item { transform: translateY(28px); }
  .reveal-left { transform: translateX(-24px); }
  .reveal-right { transform: translateX(24px); }
  .reveal-scale { transform: translateY(20px) scale(.96); }
  .is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
  .scroll-float {
    overflow: hidden;
    display: block;
  }
  .scroll-float--inline {
    display: inline-block;
    max-width: 100%;
    vertical-align: baseline;
  }
  .scroll-float-text {
    display: inline-block;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
  .scroll-float .char {
    display: inline-block;
    transform-origin: 50% 0%;
    will-change: opacity, transform;
  }
  .stagger-item:nth-child(1) { transition-delay: 0ms; }
  .stagger-item:nth-child(2) { transition-delay: 90ms; }
  .stagger-item:nth-child(3) { transition-delay: 180ms; }
  .stagger-item:nth-child(4) { transition-delay: 270ms; }
  .stagger-item:nth-child(5) { transition-delay: 360ms; }
  .stagger-item:nth-child(6) { transition-delay: 450ms; }
  .stagger-item:nth-child(7) { transition-delay: 540ms; }
  .tilt-card {
    --reveal-y: 28px;
    --animated-scale: 1;
    transform-style: preserve-3d;
    transform: perspective(900px) translateY(var(--reveal-y)) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--animated-scale));
  }
  .tilt-card.is-visible { --reveal-y: var(--tilt-lift, 0px); }
  .animated-list-container {
    position: relative;
    --top-gradient-opacity: 0;
    --bottom-gradient-opacity: 0;
  }
  .animated-list {
    scroll-behavior: smooth;
  }
  .logoloop {
    position: relative;
    --logoloop-gap: 38px;
    --logoloop-logoWidth: clamp(152px, 12vw, 220px);
    --logoloop-logoHeight: clamp(40px, 3.6vw, 62px);
    --logoloop-shellHeight: clamp(78px, 6.5vw, 108px);
    --logoloop-fadeColorAuto: #030303;
    --logoloop-fadeColor: #030303;
    width: 100%;
    max-width: min(92vw, 1760px);
    margin: clamp(24px, 4.2vw, 52px) auto clamp(24px, 3.4vw, 42px);
    overflow: hidden;
  }
  .logoloop--scale-hover {
    padding-top: calc(var(--logoloop-logoHeight) * .16);
    padding-bottom: calc(var(--logoloop-logoHeight) * .16);
  }
  .logoloop__track {
    display: flex;
    width: max-content;
    will-change: transform;
    user-select: none;
    position: relative;
    z-index: 0;
  }
  .logoloop__list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .logoloop__item {
    flex: 0 0 auto;
    margin-right: var(--logoloop-gap);
    line-height: 1;
  }
  .logoloop__logo-shell {
    display: inline-grid;
    place-items: center;
    width: var(--logoloop-logoWidth);
    height: var(--logoloop-shellHeight);
    padding: clamp(10px, .9vw, 16px) clamp(14px, 1.1vw, 20px);
    border: 1px solid rgba(255,255,255,.24);
    border-radius: 8px;
    background: #000;
    box-shadow: none;
    transition:
      transform .3s cubic-bezier(.4,0,.2,1),
      border-color .24s ease,
      background-color .24s ease,
      box-shadow .24s ease;
  }
  .logoloop__item img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: var(--logoloop-logoHeight);
    max-height: none;
    object-fit: contain;
    object-position: center;
    filter: grayscale(1) invert(1) brightness(1.78) contrast(1.18);
    mix-blend-mode: screen;
    opacity: .9;
    image-rendering: -webkit-optimize-contrast;
    -webkit-user-drag: none;
    pointer-events: none;
    transition:
      transform .3s cubic-bezier(.4,0,.2,1),
      opacity .24s ease,
      filter .24s ease;
  }
  .logoloop--scale-hover .logoloop__item:hover .logoloop__logo-shell {
    transform: scale(1.12);
    border-color: rgba(245,155,50,.62);
    background: #000;
    box-shadow: 0 0 26px rgba(245,155,50,.22);
  }
  .logoloop--scale-hover .logoloop__item:hover img {
    transform: scale(1.04);
    transform-origin: center center;
    opacity: 1;
    filter: grayscale(1) invert(1) brightness(1.95) contrast(1.2);
  }
  .logoloop__item img[src="assets/logo-cta-town-design.png"] {
    transform: scale(2.15);
    transform-origin: center center;
  }
  .logoloop--scale-hover .logoloop__item:hover img[src="assets/logo-cta-town-design.png"] {
    transform: scale(2.24);
  }
  .logoloop--fade::before,
  .logoloop--fade::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(36px, 9%, 160px);
    pointer-events: none;
    z-index: 10;
  }
  .logoloop--fade::before {
    left: 0;
    background: linear-gradient(to right, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, rgba(0,0,0,0) 100%);
  }
  .logoloop--fade::after {
    right: 0;
    background: linear-gradient(to left, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, rgba(0,0,0,0) 100%);
  }
  .project-list-shell .animated-list {
    max-height: none;
    overflow: visible;
    padding: 2px;
  }
  .content-list-shell .animated-list {
    max-height: min(76vh, 760px);
    overflow-y: auto;
    padding: 2px 12px 2px 2px;
  }
  .hero-project-list .animated-list {
    overflow: visible;
  }
  .animated-list::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .animated-list::-webkit-scrollbar-track {
    background: rgba(255,255,255,.055);
    border-radius: 999px;
  }
  .animated-list::-webkit-scrollbar-thumb {
    background: rgba(245,155,50,.46);
    border-radius: 999px;
  }
  .animated-list-gradient {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    height: 74px;
    pointer-events: none;
    transition: opacity 300ms ease;
  }
  .animated-list-gradient--top {
    top: 0;
    opacity: var(--top-gradient-opacity);
    background: linear-gradient(to bottom, rgba(3,3,3,.92), transparent);
  }
  .animated-list-gradient--bottom {
    bottom: 0;
    opacity: var(--bottom-gradient-opacity);
    background: linear-gradient(to top, rgba(3,3,3,.92), transparent);
  }
  [data-animated-list-item] {
    --animated-scale: .7;
    opacity: 0;
    cursor: pointer;
    transition:
      opacity 220ms var(--ease-out-soft),
      border-color 220ms var(--ease-out-soft),
      background-color 220ms var(--ease-out-soft),
      transform 220ms var(--ease-out-soft);
  }
  [data-animated-list-item].is-animated-visible {
    --animated-scale: 1;
    opacity: 1;
  }
  [data-animated-list-item].is-list-selected {
    border-color: rgba(245,155,50,.82);
    background: linear-gradient(135deg, rgba(245,155,50,.16), rgba(255,255,255,.075));
  }
  [data-animated-list-item].is-list-selected:focus-visible {
    outline: 1px solid rgba(245,155,50,.9);
    outline-offset: 3px;
  }
  .project-list-shell [data-animated-list-item] {
    --animated-scale: 1;
    --reveal-y: 0px;
    opacity: 1;
  }
  .process-flow [data-animated-list-item] { --animated-scale: 1; }
  .magnetic-cursor {
    position: fixed; top: 0; left: 0; z-index: 9999;
    width: 168px; height: 168px; border-radius: 999px;
    pointer-events: none; background: rgba(255,255,255,.94); mix-blend-mode: difference;
    opacity: 0; visibility: hidden; box-shadow: none; filter: none;
    backdrop-filter: none; -webkit-backdrop-filter: none;
    will-change: transform, width, height, border-radius;
  }
  .site-header {
    position: fixed; inset: 0 0 auto 0; z-index: 30;
    display: flex; align-items: center; justify-content: space-between; gap: 22px;
    width: 100%; min-height: clamp(74px, 5.6vw, 96px); margin: 0; padding: 0 var(--site-rail);
    border: 0; border-radius: 0;
    color: #fff; background: rgba(255,255,255,0); box-shadow: none;
    backdrop-filter: none; -webkit-backdrop-filter: none;
    transition:
      background-color 420ms cubic-bezier(.22, 1, .36, 1),
      box-shadow 420ms cubic-bezier(.22, 1, .36, 1),
      color 260ms ease,
      border-color 420ms cubic-bezier(.22, 1, .36, 1);
  }
  .site-header.is-scrolled {
    color: #050505;
    background: rgba(255,255,255,.96);
    border-bottom: 1px solid rgba(0,0,0,.08);
    box-shadow: 0 14px 42px rgba(0,0,0,.12);
    backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  }
  .brand { display: inline-flex; align-items: center; gap: 12px; min-width: 0; font-weight: 760; }
  .brand-logo {
    display: block; width: auto; height: clamp(20px, 1.35vw, 28px); max-width: 158px; object-fit: contain; flex: 0 0 auto;
    filter: drop-shadow(0 0 14px rgba(255,255,255,.18));
    transition: filter 260ms ease;
  }
  .brand-wordmark {
    aspect-ratio: 1774 / 271;
  }
  .site-header.is-scrolled .brand-logo { filter: brightness(0) saturate(100%); }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-links a, .header-action {
    display: inline-flex; align-items: center; justify-content: center;
    min-height: 40px; padding: 0 12px; border-radius: 0;
    color: rgba(255,255,255,.78); font-size: 14px; border: 0;
    background: transparent;
    transition: color 260ms ease, background-color 260ms ease;
  }
  .nav-links a:hover, .nav-links a:focus-visible, .header-action:hover, .header-action:focus-visible {
    color: #fff; background: transparent; outline: none;
  }
  .header-action { color: #fff; font-weight: 720; }
  .site-header.is-scrolled .brand,
  .site-header.is-scrolled .nav-links a,
  .site-header.is-scrolled .header-action { color: rgba(0,0,0,.78); }
  .site-header.is-scrolled .brand,
  .site-header.is-scrolled .header-action { color: #050505; }
  .site-header.is-scrolled .nav-links a:hover,
  .site-header.is-scrolled .nav-links a:focus-visible,
  .site-header.is-scrolled .header-action:hover,
  .site-header.is-scrolled .header-action:focus-visible {
    color: #000; background: rgba(0,0,0,.05);
  }
  .hero {
    position: relative; min-height: 100svh; display: grid; align-items: center;
    padding: clamp(104px, 11vh, 148px) 0 clamp(64px, 9vh, 112px); isolation: isolate;
    background:
      linear-gradient(90deg, rgba(0,0,0,.99), rgba(0,0,0,.86) 45%, rgba(0,0,0,.76)),
      radial-gradient(circle at 76% 30%, rgba(255,255,255,.16), transparent 24%),
      linear-gradient(116deg, transparent 0 28%, rgba(255,255,255,.24) 28.15% 28.35%, transparent 28.5% 100%),
      linear-gradient(148deg, transparent 0 52%, rgba(255,255,255,.16) 52.12% 52.3%, transparent 52.45% 100%),
      linear-gradient(22deg, transparent 0 64%, rgba(255,255,255,.13) 64.12% 64.3%, transparent 64.45% 100%),
      repeating-linear-gradient(90deg, rgba(255,255,255,.09) 0 1px, transparent 1px 96px),
      repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 96px),
      #050505;
  }
  .home-hero {
    padding: clamp(92px, 9vh, 124px) 0 clamp(34px, 5vh, 70px);
  }
  .magic-rings-bg {
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none; background: #030303;
    filter: saturate(1.08);
  }
  .magic-rings-bg canvas { display: block; width: 100%; height: 100%; }
  .faulty-terminal-bg {
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none; background: #030303;
    filter: saturate(1.16) contrast(1.05);
  }
  .faulty-terminal-bg canvas { display: block; width: 100%; height: 100%; }
  .dot-field-bg {
    --dot-glow-x: -9999px;
    --dot-glow-y: -9999px;
    --dot-glow-opacity: 0;
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none; background: #050505;
    filter: saturate(1.45) brightness(1.34) contrast(1.08);
  }
  .dot-field-bg canvas { display: block; width: 100%; height: 100%; }
  .dot-field-bg::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(circle 240px at var(--dot-glow-x) var(--dot-glow-y), rgba(12,12,12,var(--dot-glow-opacity)), transparent 70%);
    mix-blend-mode: multiply;
  }
  .grid-scan-bg {
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 44%, rgba(239,68,68,.18), transparent 38%),
      linear-gradient(135deg, #09070d, #000000 50%, #111111);
    filter: saturate(1.22) brightness(1.08) contrast(1.08);
  }
  .grid-scan-bg canvas { display: block; width: 100%; height: 100%; mix-blend-mode: screen; }
  .liquid-ether-bg {
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 48%, rgba(239,68,68,.2), transparent 40%),
      radial-gradient(circle at 74% 32%, rgba(234,179,8,.14), transparent 34%),
      linear-gradient(135deg, #050208, #000000 58%, #110704);
    filter: saturate(1.24) brightness(1.08) contrast(1.05);
    touch-action: none;
  }
  .liquid-ether-bg canvas { display: block; width: 100%; height: 100%; mix-blend-mode: screen; }
  .liquid-ether-bg.is-liquid-ether-unavailable::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(circle at 42% 50%, rgba(239,68,68,.24), transparent 36%),
      radial-gradient(circle at 62% 46%, rgba(234,179,8,.16), transparent 34%);
  }
  .ripple-grid-bg {
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none;
    background:
      radial-gradient(ellipse at 50% 50%, rgba(239,68,68,.14), transparent 44%),
      #020202;
    filter: saturate(1.26) brightness(1.12) contrast(1.05);
  }
  .ripple-grid-bg canvas { display: block; width: 100%; height: 100%; }
  .galaxy-field-bg {
    position: absolute; inset: 0; z-index: -2; overflow: hidden;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 50%, rgba(69,105,255,.18), transparent 44%),
      radial-gradient(circle at 82% 18%, rgba(168,85,247,.14), transparent 38%),
      radial-gradient(circle at 24% 72%, rgba(239,68,68,.10), transparent 36%),
      #020208;
    filter: saturate(1.18) brightness(1.1) contrast(1.04);
  }
  .galaxy-field-bg canvas { display: block; width: 100%; height: 100%; }
  .hero::after {
    content: ""; position: absolute; inset: 0; z-index: -1;
    background:
      linear-gradient(90deg, rgba(0,0,0,.66), rgba(0,0,0,.32) 48%, rgba(0,0,0,.34)),
      linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.58));
  }
  .hero.home-hero .magic-rings-bg {
    filter: saturate(1.32) brightness(1.22) contrast(1.06);
  }
  .hero.home-hero::after {
    background:
      radial-gradient(circle at 50% 47%, rgba(0,0,0,.02), rgba(0,0,0,.10) 54%, rgba(0,0,0,.24) 76%, rgba(0,0,0,.42)),
      linear-gradient(90deg, rgba(0,0,0,.28), rgba(0,0,0,.03) 48%, rgba(0,0,0,.22)),
      linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.20));
  }
  .hero.faulty-terminal-hero::after {
    background:
      radial-gradient(circle at 50% 46%, rgba(0,0,0,.12), rgba(0,0,0,.52) 64%, rgba(0,0,0,.74)),
      linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.34) 48%, rgba(0,0,0,.58)),
      linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.62));
  }
  .hero.grid-scan-hero {
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 48%, rgba(239,68,68,.18), transparent 42%),
      linear-gradient(135deg, #0b0710, #000 58%, #111);
  }
  .hero.grid-scan-hero::after {
    background: none;
  }
  .hero.liquid-ether-hero {
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 48%, rgba(239,68,68,.18), transparent 42%),
      linear-gradient(135deg, #08040b, #000 58%, #120604);
  }
  .hero.liquid-ether-hero::after {
    background:
      radial-gradient(circle at 50% 48%, rgba(0,0,0,.04), rgba(0,0,0,.16) 54%, rgba(0,0,0,.48) 82%),
      linear-gradient(90deg, rgba(0,0,0,.58), rgba(0,0,0,.08) 48%, rgba(0,0,0,.54)),
      linear-gradient(180deg, rgba(0,0,0,.20), rgba(0,0,0,.02) 42%, rgba(0,0,0,.46));
  }
  .hero.ripple-grid-hero {
    overflow: hidden;
  }
  .hero.ripple-grid-hero::after {
    background:
      radial-gradient(ellipse at 50% 52%, rgba(0,0,0,.04) 0 44%, rgba(0,0,0,.24) 72%, rgba(0,0,0,.62) 100%),
      linear-gradient(90deg, rgba(0,0,0,.50), rgba(0,0,0,.05) 22%, rgba(0,0,0,.05) 78%, rgba(0,0,0,.50)),
      linear-gradient(180deg, rgba(0,0,0,.42), rgba(0,0,0,.04) 22%, rgba(0,0,0,.08) 76%, rgba(0,0,0,.56));
  }
  .hero.galaxy-hero {
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 50%, rgba(69,105,255,.16), transparent 44%),
      linear-gradient(135deg, #04040d, #000 58%, #0d0713);
  }
  .hero.galaxy-hero::after {
    background:
      radial-gradient(circle at 50% 51%, rgba(0,0,0,.02), rgba(0,0,0,.24) 62%, rgba(0,0,0,.54)),
      linear-gradient(90deg, rgba(0,0,0,.44), rgba(0,0,0,.04) 48%, rgba(0,0,0,.38));
  }
  .hero.dot-field-hero {
    overflow: hidden;
  }
  .hero.dot-field-hero .dot-field-bg {
    inset: -8vh 0;
    transform: translateY(4vh);
  }
  .hero.dot-field-hero::after {
    background:
      radial-gradient(ellipse at 50% 52%, rgba(0,0,0,0) 0 42%, rgba(0,0,0,.28) 72%, rgba(0,0,0,.72) 100%),
      linear-gradient(90deg, rgba(0,0,0,.58), rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,.58)),
      linear-gradient(180deg, rgba(0,0,0,.54), rgba(0,0,0,0) 18%, rgba(0,0,0,0) 76%, rgba(0,0,0,.62));
  }
  .hero-inner, .section, .footer-inner { width: calc(100% - var(--page-rail) * 2); margin: 0 auto; }
  .hero .hero-inner { width: calc(100% - var(--page-rail) * 2); }
  .hero-inner {
    position: relative; z-index: 1;
    display: grid; place-items: center; text-align: center;
    opacity: calc(1 - var(--hero-progress, 0) * .46);
    transform: translateY(calc(var(--hero-progress, 0) * -42px));
    transition: opacity 180ms linear, transform 180ms linear;
  }
  .eyebrow {
    display: inline-flex; align-items: center; gap: 10px; margin: 0 0 22px; padding: 8px 10px;
    border: 1px solid var(--line); border-radius: 8px; color: var(--muted); background: rgba(255,255,255,.07);
  }
  .eyebrow i { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); box-shadow: 0 0 20px rgba(245,155,50,.8); }
  .hero h1 {
    max-width: none; width: 100%; margin: 0 auto;
    font-size: clamp(52px, 6.95vw, 128px); line-height: .9;
    letter-spacing: clamp(.025em, .16vw, .11em);
    white-space: nowrap;
    text-align: center; text-wrap: normal;
  }
  .hero h1 .thin { color: rgba(255,255,255,.58); font-weight: 520; }
  .shiny-text {
    display: inline-block;
    --shiny-base: rgba(238,238,238,.9);
    --shiny-shine: #fff;
    color: var(--shiny-base);
    background-image: linear-gradient(120deg, var(--shiny-base) 0%, var(--shiny-base) 35%, var(--shiny-shine) 50%, var(--shiny-base) 65%, var(--shiny-base) 100%);
    background-size: 200% auto;
    background-position: 150% center;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shiny-text-sweep 2.4s linear infinite;
  }
  .shiny-text--delay { animation-delay: .18s; }
  .hero-title-line { width: 100%; }
  @keyframes shiny-text-sweep {
    0% { background-position: 150% center; }
    100% { background-position: -50% center; }
  }
  .hero-copy {
    display: grid; grid-template-columns: minmax(0, 1080px); justify-content: center; justify-items: center;
    gap: clamp(24px, 3.4vh, 38px); align-items: center; margin-top: clamp(28px, 5vh, 58px);
    text-align: center;
  }
  .hero-copy p {
    max-width: 1080px; min-width: 0; margin: 0;
    font-size: clamp(14px, min(1.18vw, 2vh), 18px); line-height: 2.05;
    letter-spacing: .08em; color: rgba(255,255,255,.78);
    overflow-wrap: break-word;
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
  .hero-projects {
    width: 100%; max-width: 1560px; margin-top: clamp(24px, 4vh, 44px);
    display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px;
  }
  .hero-project-card {
    min-height: 156px; padding: 16px;
    display: grid; align-content: start; gap: 8px;
    text-align: left; border: 1px solid var(--line); border-radius: 8px;
    background: rgba(255,255,255,.068); box-shadow: 0 18px 60px rgba(0,0,0,.18);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
  }
  .hero-project-card:hover, .hero-project-card:focus-visible {
    transform: translateY(-3px); outline: none;
    border-color: rgba(255,255,255,.42); background: rgba(255,255,255,.1);
  }
  .hero-project-card span {
    color: var(--accent); font-size: 12px; font-weight: 840; letter-spacing: .08em;
  }
  .hero-project-card strong { font-size: clamp(18px, 1.35vw, 24px); line-height: 1.1; }
  .hero-project-card small { color: rgba(255,255,255,.48); font-weight: 760; }
  .hero-project-card p { margin: 0; font-size: 13px; line-height: 1.55; color: rgba(255,255,255,.68); }
  .hero-project-list.circular-gallery {
    --gallery-card-width: clamp(260px, 19vw, 340px);
    --gallery-card-height: clamp(188px, 20vh, 230px);
    --gallery-viewport-height: calc(var(--gallery-card-height) + clamp(26px, 4vh, 64px));
    position: relative;
    width: min(100vw, 1480px);
    height: var(--gallery-viewport-height);
    margin-top: clamp(28px, 4vh, 54px);
    overflow: hidden;
    cursor: grab;
    touch-action: pan-y;
    user-select: none;
    outline: none;
  }
  .hero-project-list.circular-gallery.is-dragging {
    cursor: grabbing;
  }
  .hero-project-list.circular-gallery:focus-visible {
    outline: 1px solid rgba(255,255,255,.52);
    outline-offset: 8px;
  }
  .hero-projects.circular-gallery-track {
    position: absolute;
    left: 0;
    right: auto;
    bottom: clamp(8px, 2vh, 24px);
    display: flex;
    align-items: flex-end;
    gap: clamp(18px, 2.2vw, 34px);
    width: max-content;
    max-width: none;
    margin: 0;
    will-change: transform;
    transform: translate3d(0, 0, 0);
  }
  .hero-project-card.circular-gallery-item {
    flex: 0 0 var(--gallery-card-width);
    width: var(--gallery-card-width);
    height: var(--gallery-card-height);
    min-height: auto;
    padding: clamp(14px, 1.25vw, 20px);
    display: grid;
    text-align: center;
    justify-items: center;
    align-content: center;
    border: 1px solid rgba(255,255,255,.22) !important;
    border-radius: 4px;
    background: rgba(0,0,0,.18) !important;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.035), 0 16px 42px rgba(0,0,0,.2) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    overflow: hidden;
    transform: translate3d(0, var(--gallery-y, 0px), 0) rotate(var(--gallery-rotate, 0deg));
    transform-origin: center bottom;
    transition: opacity 240ms ease, filter 240ms ease, transform 240ms ease, border-color 240ms ease, background-color 240ms ease;
  }
  .hero-project-card.circular-gallery-item:hover,
  .hero-project-card.circular-gallery-item:focus-visible {
    filter: brightness(1.18);
    border-color: rgba(245,155,50,.66) !important;
    background: rgba(255,255,255,.075) !important;
    outline: none;
  }
  .button {
    display: inline-flex; align-items: center; justify-content: center; min-height: 50px;
    padding: 0 20px; border: 1px solid var(--line); border-radius: 8px;
    font-weight: 760; transition: transform 180ms ease, background 180ms ease;
  }
  .button.primary { color: #050505; background: #fff; }
  .button.secondary { color: #fff; background: rgba(255,255,255,.08); }
  .button:hover, .button:focus-visible { transform: translateY(-2px); outline: none; }
  .section { padding: 92px 0; text-align: center; }
  .section[id] { scroll-margin-top: clamp(86px, 7vw, 116px); }
  .section.tight { padding-top: 46px; }
  .section-kicker {
    margin: 0 0 14px; color: var(--accent); font-size: 13px; font-weight: 820;
    letter-spacing: .08em; text-transform: uppercase;
  }
  .section h2 { margin: 0 0 20px; font-size: clamp(32px, 5vw, 62px); line-height: 1.02; letter-spacing: 0; }
  .section-lead { max-width: 820px; font-size: 18px; margin-top: 0; }
  .section > .section-kicker,
  .section > h2,
  .section > .section-lead {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .section:has(> .split),
  .cad-model-story,
  .cad-model-story__left,
  .footer-band {
    text-align: left;
  }
  .split {
    display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(28px, 6vw, 84px); align-items: start;
    text-align: left;
  }
  .harness-copy { max-width: 860px; margin: 0 auto 28px; }
  .image-panel {
    overflow: hidden; border: 1px solid var(--line); border-radius: 8px; background: #060606; box-shadow: var(--shadow);
  }
  .image-panel img { display: block; width: 100%; height: auto; }
  .project-grid, .card-grid, .metric-grid {
    display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px;
  }
  .project-card, .info-card, .metric, .timeline-item, .quote-panel {
    border: 1px solid var(--line); border-radius: 8px; background: var(--panel);
    box-shadow: 0 18px 60px rgba(0,0,0,.2); backdrop-filter: blur(14px);
  }
  .project-card { min-height: 276px; display: flex; flex-direction: column; justify-content: space-between; padding: 22px; }
  .project-card span, .info-card span, .metric span { color: var(--accent); font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .project-card h3, .info-card h3 { margin: 16px 0 12px; font-size: clamp(24px, 3vw, 36px); line-height: 1.05; }
  .project-card p, .info-card p, .metric p { margin: 0; color: var(--muted); }
  .project-card small { color: rgba(255,255,255,.46); font-weight: 720; }
  .info-card { min-height: 220px; padding: 22px; }
  .metric { padding: 22px; min-height: 170px; }
  .metric strong { display: block; margin: 12px 0 10px; font-size: clamp(28px, 4vw, 46px); line-height: 1; }
  .process-flow {
    display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px; margin-top: 32px;
  }
  .process-node {
    position: relative; min-height: 148px; padding: 18px 16px;
    border: 1px solid var(--line); border-radius: 8px; background: var(--panel);
    box-shadow: 0 18px 60px rgba(0,0,0,.18);
  }
  .process-node:not(:last-child)::after {
    content: ""; position: absolute; top: 50%; right: -10px; width: 10px; height: 1px;
    background: rgba(255,255,255,.42);
  }
  .process-node > span {
    display: inline-grid; width: 34px; height: 34px; place-items: center; margin-bottom: 24px;
    color: #050505; background: #fff; border-radius: 8px; font-size: 12px; font-weight: 900;
  }
  .process-node strong { display: block; font-size: 18px; line-height: 1.25; }
  .harness-section {
    position: relative;
    display: grid;
    align-content: center;
    padding-bottom: clamp(46px, 6vh, 64px);
  }
  .harness-section .harness-copy {
    margin-bottom: 0;
  }
  .harness-detail-section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .harness-card-list .animated-list {
    max-height: none;
    overflow: visible;
    padding: 0;
  }
  .harness-card-list .card-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }
  .harness-card-list [data-animated-list-item] {
    --animated-scale: 1;
    opacity: 1;
  }
  .harness-card-list .info-card {
    min-height: clamp(176px, 13vw, 214px);
    padding: clamp(18px, 1.35vw, 22px);
  }
  .harness-card-list .info-card h3 {
    font-size: clamp(20px, 1.65vw, 30px);
    line-height: 1.12;
  }
  .harness-card-list .info-card p {
    font-size: clamp(13px, .82vw, 15px);
    line-height: 1.7;
  }
  .harness-card-list .animated-list-gradient {
    display: none;
  }
  .harness-detail-section > .section-lead {
    margin-top: clamp(24px, 3vw, 42px);
  }
  .harness-section .process-flow,
  .harness-detail-section .process-flow { margin-top: 24px; }
  .harness-section .process-node,
  .harness-detail-section .process-node { min-height: 132px; }
  .harness-section::before,
  .harness-detail-section::before,
  .ecosystem-section::before,
  .team-section::before,
  .advisor-section::before,
  .architecture-section::before,
  .case-showcase::before {
    content: ""; position: absolute; left: clamp(16px, 3vw, 58px); right: clamp(16px, 3vw, 58px); top: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
  }
  .ecosystem-section,
  .team-section,
  .advisor-section {
    position: relative;
  }
  .ecosystem-card-list .card-grid,
  .team-card-list .card-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .advisor-card-list .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .team-section {
    overflow: visible;
    isolation: isolate;
  }
  .team-section > * {
    position: relative;
    z-index: 1;
  }
  .team-profile-board {
    width: min(94vw, 1840px);
    margin: clamp(34px, 5vw, 80px) auto 0;
    text-align: center;
  }
  .team-profile-row {
    display: grid;
    grid-template-columns: repeat(var(--team-count), minmax(0, 1fr));
    gap: clamp(14px, 1.25vw, 24px);
    align-items: stretch;
  }
  .pc-card-wrapper {
    --pointer-x: 50%;
    --pointer-y: 50%;
    --pointer-from-center: 0;
    --pointer-from-top: .5;
    --pointer-from-left: .5;
    --card-opacity: 0;
    --rotate-x: 0deg;
    --rotate-y: 0deg;
    --background-x: 50%;
    --background-y: 50%;
    --behind-glow-color: rgba(255, 255, 255, .2);
    --behind-glow-size: 44%;
    position: relative;
    perspective: 620px;
    touch-action: none;
    transform: translate3d(0, 0, .1px);
  }
  .pc-card-wrapper:hover,
  .pc-card-wrapper.active {
    --card-opacity: 1;
  }
  .team-profile-card {
    width: 100%;
    min-width: 0;
    justify-self: stretch;
  }
  .pc-behind {
    position: absolute;
    inset: -18%;
    z-index: 0;
    pointer-events: none;
    border-radius: 18px;
    background: radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size));
    filter: blur(44px) saturate(1.2);
    opacity: calc(.46 * var(--card-opacity));
    transition: opacity 220ms ease;
  }
  .pc-card-shell {
    position: relative;
    z-index: 1;
  }
  .pc-card {
    position: relative;
    min-height: clamp(410px, 26vw, 450px);
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
    background:
      radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,.13), transparent 34%),
      linear-gradient(100deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,.045) 44%, rgba(255,255,255,.025) 100%),
      rgba(3,3,3,.72);
    box-shadow:
      rgba(0, 0, 0, .76) calc((var(--pointer-from-left) * 16px) - 8px) calc((var(--pointer-from-top) * 22px) - 8px) 34px -12px,
      0 18px 60px rgba(0,0,0,.22);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transform: translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
    transition:
      transform 420ms cubic-bezier(.16, 1, .3, 1),
      border-color 260ms ease,
      box-shadow 260ms ease;
  }
  .pc-card-wrapper.active .pc-card {
    border-color: rgba(255,255,255,.2);
    transition: none;
  }
  .pc-card-shell.entering .pc-card {
    transition: transform 180ms ease-out;
  }
  .pc-inside {
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }
  .pc-shine,
  .pc-glare {
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    pointer-events: none;
    opacity: calc(.16 + var(--card-opacity) * .58);
    mix-blend-mode: color-dodge;
  }
  .pc-shine {
    background-image:
      repeating-linear-gradient(
        -45deg,
        rgba(255,255,255,.02) 0%,
        rgba(255,255,255,.16) 4%,
        rgba(255,255,255,.08) 7%,
        rgba(255,255,255,.02) 12%
      ),
      radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,.26), transparent 26%);
    background-size: 260% 260%, 100% 100%;
    background-position: var(--background-x) var(--background-y), center;
  }
  .pc-glare {
    z-index: 3;
    background: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,.22) 0%, rgba(255,255,255,.08) 28%, transparent 64%);
    mix-blend-mode: overlay;
  }
  .team-profile-content {
    position: relative;
    z-index: 5;
    display: flex;
    min-height: clamp(410px, 26vw, 450px);
    padding: clamp(20px, 1.8vw, 32px) clamp(16px, 1.55vw, 28px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: clamp(12px, 1.15vw, 20px);
  }
  .team-avatar {
    display: grid;
    place-items: center;
    width: clamp(68px, 6.4vw, 108px);
    aspect-ratio: 1;
    border-radius: 50%;
    border: clamp(5px, .52vw, 8px) solid rgba(238,238,238,.78);
    background:
      radial-gradient(circle at 40% 30%, rgba(255,255,255,.3), transparent 30%),
      linear-gradient(145deg, rgba(255,255,255,.88), rgba(80,90,90,.42) 48%, rgba(0,0,0,.84));
    box-shadow: inset 0 0 0 6px rgba(0,0,0,.82), 0 18px 36px rgba(0,0,0,.28);
  }
  .team-avatar span {
    color: #f8f8f8;
    font-size: clamp(22px, 2vw, 34px);
    font-weight: 920;
    letter-spacing: .04em;
  }
  .team-profile-copy {
    width: 100%;
    min-width: 0;
    text-align: center;
  }
  .team-profile-copy span {
    display: block;
    margin-bottom: 8px;
    color: rgba(255,255,255,.48);
    font-size: clamp(10px, .7vw, 12px);
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .team-profile-copy h3 {
    margin: 0 0 8px;
    color: rgba(255,255,255,.72);
    font-size: clamp(22px, 1.45vw, 30px);
    line-height: 1.1;
  }
  .team-profile-copy p {
    margin: 0;
    color: #fff;
    font-size: clamp(14px, .9vw, 18px);
    font-weight: 720;
    line-height: 1.42;
  }
  .team-profile-divider {
    width: 72%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.24), transparent);
  }
  .team-profile-code {
    justify-self: center;
    color: rgba(255,255,255,.9);
    font-size: clamp(34px, 3vw, 58px);
    font-weight: 860;
    line-height: .95;
    letter-spacing: .04em;
    text-align: center;
  }
  #collaborative-research-team .team-profile-copy h3 {
    font-size: clamp(18px, 1.18vw, 25px);
  }
  #collaborative-research-team .pc-card {
    min-height: clamp(500px, 32vw, 560px);
  }
  #collaborative-research-team .team-profile-content {
    min-height: clamp(500px, 32vw, 560px);
    padding-top: clamp(24px, 2vw, 38px);
    padding-bottom: clamp(28px, 2.2vw, 42px);
  }
  #collaborative-research-team .team-profile-copy p {
    font-size: clamp(11px, .72vw, 14px);
    line-height: 1.34;
  }
  #collaborative-research-team .team-profile-code {
    font-size: clamp(30px, 2.55vw, 50px);
  }
  .ecosystem-card-list .info-card,
  .team-card-list .info-card,
  .advisor-card-list .info-card {
    min-height: clamp(210px, 17vw, 268px);
  }
  .advisor-card-list .info-card h3 {
    font-size: clamp(30px, 3.6vw, 52px);
  }
  .page-financing,
  .page-qishu-ai {
    --financing-rail: var(--site-rail);
    scroll-snap-type: y proximity;
  }
  .redirect-screen {
    min-height: 100svh;
    display: grid;
    place-items: center;
    padding: clamp(120px, 14vh, 180px) clamp(24px, 6vw, 96px);
  }
  .redirect-screen__panel {
    width: min(760px, 100%);
    padding: clamp(28px, 4vw, 54px);
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 8px;
    background:
      radial-gradient(circle at 20% 0%, rgba(245,155,50,.16), transparent 42%),
      linear-gradient(135deg, rgba(255,255,255,.1), rgba(255,255,255,.03));
    text-align: center;
  }
  .redirect-screen__panel h1 {
    margin: 0;
    font-size: clamp(34px, 4vw, 62px);
    line-height: 1.08;
  }
  .redirect-screen__panel p {
    margin: 18px auto 26px;
    max-width: 620px;
  }
  .financing-section {
    position: relative;
    min-height: 100svh;
    width: calc(100vw - var(--financing-rail) * 2);
    max-width: none;
    margin: 0 auto;
    padding: clamp(106px, 12vh, 142px) 0 clamp(54px, 7vh, 86px);
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(28px, 4.2vh, 54px);
    align-content: center;
    justify-items: center;
    text-align: center;
    scroll-snap-align: start;
    isolation: isolate;
  }
  .financing-hero-section {
    width: 100vw;
    min-height: 100svh;
    place-items: center;
    grid-template-columns: 1fr;
    overflow: hidden;
    padding: clamp(108px, 13vh, 150px) var(--financing-rail) clamp(54px, 7vh, 86px);
  }
  .financing-hero-section::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 48%, rgba(0,0,0,.02), rgba(0,0,0,.18) 54%, rgba(0,0,0,.6) 100%),
      linear-gradient(90deg, rgba(0,0,0,.9), rgba(0,0,0,.18) 50%, rgba(0,0,0,.9));
  }
  .financing-hero-content {
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    width: min(1500px, 100%);
    text-align: center;
  }
  .financing-section__copy,
  .financing-section__visual {
    position: relative;
    z-index: 1;
    min-width: 0;
    width: 100%;
  }
  .financing-section__copy {
    display: grid;
    justify-items: center;
    max-width: 100%;
    margin: 0 auto;
  }
  .financing-section__visual {
    max-width: 100%;
    margin: 0 auto;
  }
  .financing-section__copy h2 {
    width: 100%;
    max-width: 100%;
    margin: 0 0 18px;
    color: #fff;
    font-size: clamp(36px, 3vw, 62px);
    line-height: 1.02;
    letter-spacing: 0;
    text-align: center;
    text-wrap: pretty;
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: normal;
    line-break: strict;
  }
  #workflow .financing-section__title--stacked {
    display: grid;
    justify-items: center;
    white-space: normal;
    max-width: min(1500px, 100%);
    gap: clamp(8px, .8vw, 14px);
  }
  #workflow .financing-section__title--stacked span {
    display: block;
    max-width: 100%;
    text-align: center;
  }
  #workflow .financing-section__title--stacked span + span {
    font-size: clamp(14px, 1.95vw, 38px);
    line-height: 1.22;
    font-weight: 720;
    white-space: nowrap;
  }
  .financing-contact-section {
    grid-template-columns: 1fr;
    align-content: center;
    gap: clamp(30px, 5vh, 58px);
  }
  .financing-contact-section .financing-section__copy {
    display: grid;
    justify-items: center;
    width: 100%;
    text-align: center;
  }
  .financing-contact-section .financing-section__copy h2 {
    max-width: 100%;
    font-size: clamp(38px, 3.2vw, 62px);
    line-height: 1.02;
  }
  .financing-contact-section .financing-section__copy .section-lead {
    max-width: 740px;
    margin-right: auto;
    margin-left: auto;
  }
  .financing-contact-section .financing-section__visual {
    width: min(1120px, 100%);
    margin: 0 auto;
  }
  .financing-contact-section .financing-card-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .financing-contact-section .financing-card {
    min-height: clamp(136px, 12vw, 172px);
  }
  .financing-section__marker {
    margin-bottom: 14px;
    color: var(--accent);
  }
  .financing-brand-line {
    margin: 0 0 16px;
    color: rgba(255,255,255,.72);
    font-size: 13px;
    font-weight: 850;
    letter-spacing: .08em;
  }
  .financing-hero-content h1 {
    width: 100%;
    max-width: 100%;
    margin: 0;
    color: #fff;
    font-size: clamp(64px, 7.2vw, 138px);
    line-height: 1.02;
    letter-spacing: 0;
    text-align: center;
    text-wrap: pretty;
    white-space: nowrap;
    word-break: keep-all;
    overflow-wrap: normal;
  }
  .financing-hero-content .section-lead {
    max-width: min(1500px, 100%);
    margin: 28px auto 0;
    color: rgba(255,255,255,.82);
    font-size: clamp(15px, .98vw, 18px);
    line-height: 1.72;
    text-wrap: pretty;
    word-break: keep-all;
    overflow-wrap: normal;
    line-break: strict;
  }
  .financing-narrative {
    max-width: min(1400px, 100%);
    margin: 18px auto 0;
    color: rgba(255,255,255,.76);
    font-size: 15px;
    font-weight: 700;
    text-wrap: pretty;
    word-break: keep-all;
    overflow-wrap: normal;
  }
  .page-qishu-ai .financing-hero-content h1 {
    font-size: clamp(48px, 5.4vw, 104px);
    line-height: 1.04;
  }
  .qishu-performance-summary {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: 100%;
    margin: clamp(22px, 3vh, 34px) auto 0;
    border-top: 1px solid rgba(255,255,255,.24);
    border-bottom: 1px solid rgba(255,255,255,.24);
    background: rgba(255,255,255,.035);
  }
  .qishu-performance-summary article {
    min-width: 0;
    padding: clamp(14px, 1.4vw, 22px) clamp(10px, 1vw, 18px);
    text-align: left;
  }
  .qishu-performance-summary article + article {
    border-left: 1px solid rgba(255,255,255,.16);
  }
  .qishu-performance-summary span,
  .qishu-performance-summary strong {
    display: block;
  }
  .qishu-performance-summary span {
    margin-bottom: 7px;
    color: var(--accent);
    font-size: clamp(10px, .68vw, 12px);
    font-weight: 850;
  }
  .qishu-performance-summary strong {
    font-size: clamp(14px, 1.08vw, 20px);
    line-height: 1.35;
  }
  .financing-brand-slogan {
    margin-top: clamp(28px, 4vh, 44px);
    color: rgba(255,255,255,.86);
    font-size: 18px;
    font-weight: 820;
  }
  .financing-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-top: clamp(26px, 4vh, 42px);
  }
  .financing-section__copy .section-lead,
  .financing-card p,
  .financing-mini-row p {
    display: -webkit-box;
    max-width: min(1380px, 100%);
    overflow: hidden;
    color: rgba(255,255,255,.72);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .financing-section__copy .section-lead {
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    text-wrap: pretty;
    word-break: keep-all;
    overflow-wrap: normal;
    line-break: strict;
  }
  .financing-section__visual > * + * {
    margin-top: 16px;
  }
  @media (min-width: 1400px) {
    .page-qishu-ai .financing-section__copy h2,
    .page-qishu-ai .financing-section:not(.financing-hero-section) .financing-section__copy .section-lead {
      white-space: nowrap;
    }
    .page-qishu-ai #next-milestones .financing-section__copy h2 {
      white-space: normal;
      word-break: normal;
      overflow-wrap: anywhere;
    }
  }
  .financing-note,
  .financing-vdr-note {
    margin-top: 18px;
    color: rgba(255,255,255,.72);
    font-size: 14px;
    line-height: 1.7;
  }
  .qishu-body-copy {
    display: grid;
    gap: 10px;
    width: min(1120px, 100%);
    margin: 0 auto 20px;
    text-align: left;
  }
  .qishu-body-copy p {
    margin: 0;
    color: rgba(255,255,255,.72);
    font-size: 14px;
    line-height: 1.72;
  }
  .qishu-evidence-line {
    width: min(980px, 100%);
    margin: 16px auto 0;
    padding: 14px 18px;
    border: 1px solid rgba(245,155,50,.28);
    border-radius: 8px;
    background: rgba(245,155,50,.08);
    color: rgba(255,255,255,.78);
    text-align: center;
  }
  .financing-card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
  }
  .financing-card-grid--five,
  .financing-card-grid--metrics {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .financing-card-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .financing-card-grid--four {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .financing-card-grid--six {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .financing-card-grid--appendix {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 14px;
  }
  .financing-card-grid--seven {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    margin-top: 14px;
    gap: 10px;
  }
  .financing-card {
    min-height: 174px;
    padding: clamp(18px, 1.4vw, 26px);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background:
      linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.026)),
      radial-gradient(circle at 10% 0%, rgba(239,68,68,.18), transparent 46%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  }
  .financing-card__media {
    aspect-ratio: 3 / 1;
    margin: 0 0 clamp(14px, 1.2vw, 20px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 6px;
    background: #050505;
  }
  .financing-card__media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(1.05) contrast(1.05);
  }
  a.financing-card {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  a.financing-card:hover {
    border-color: rgba(245,155,50,.45);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.08),
      0 18px 42px rgba(245,155,50,.08);
  }
  a.financing-card:focus-visible {
    outline: 2px solid rgba(245,155,50,.86);
    outline-offset: 4px;
  }
  .financing-card span,
  .financing-mini-row span,
  .financing-market-visual span,
  .financing-compare span {
    display: block;
    margin-bottom: 10px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .financing-card h3,
  .financing-market-visual h3,
  .financing-compare h3 {
    margin: 0 0 10px;
    color: #fff;
    font-size: clamp(19px, 1.28vw, 27px);
    line-height: 1.16;
    letter-spacing: 0;
  }
  .financing-card p,
  .financing-market-visual p,
  .financing-compare p,
  .financing-mini-row p {
    margin: 0;
    font-size: 14px;
    line-height: 1.62;
  }
  .financing-flow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
  }
  .financing-flow--four {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .financing-flow--six {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .financing-flow--dense {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .financing-flow--path {
    margin-bottom: 14px;
  }
  .financing-flow--seven {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }
  .financing-flow-node {
    position: relative;
    min-height: 126px;
    padding: 16px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background: rgba(255,255,255,.045);
  }
  .financing-flow-node::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -10px;
    width: 10px;
    height: 1px;
    background: rgba(245,155,50,.72);
  }
  .financing-flow-node:last-child::after {
    display: none;
  }
  .financing-flow-node span {
    display: block;
    margin-bottom: 16px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
  }
  .financing-flow-node strong {
    display: block;
    color: #fff;
    font-size: 18px;
    line-height: 1.25;
  }
  .financing-flow-node small {
    display: block;
    margin-top: 10px;
    color: rgba(255,255,255,.62);
    font-size: 12px;
    line-height: 1.4;
  }
  .financing-flow--seven .financing-flow-node,
  .financing-card-grid--seven .financing-card {
    min-height: 112px;
    padding: 14px 12px;
  }
  .financing-flow--seven .financing-flow-node span,
  .financing-card-grid--seven .financing-card span {
    margin-bottom: 10px;
    font-size: 10px;
  }
  .financing-flow--seven .financing-flow-node strong {
    font-size: clamp(14px, .88vw, 17px);
    line-height: 1.22;
    text-align: center;
  }
  .financing-card-grid--seven .financing-card h3 {
    font-size: clamp(15px, .95vw, 20px);
    line-height: 1.16;
    text-align: center;
  }
  .financing-card-grid--seven .financing-card p {
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
  }
  .financing-compare {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
  .financing-compare article,
  .financing-market-visual article,
  .financing-mini-row {
    padding: clamp(18px, 1.4vw, 26px);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background: rgba(255,255,255,.052);
  }
  .financing-compare .is-emphasis {
    border-color: rgba(245,155,50,.54);
    background: linear-gradient(145deg, rgba(245,155,50,.16), rgba(255,255,255,.045));
  }
  .financing-orbit {
    position: relative;
    min-height: 560px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background:
      radial-gradient(circle at 50% 42%, rgba(245,155,50,.18), transparent 32%),
      linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.026));
  }
  .financing-orbit::before {
    content: "";
    position: absolute;
    inset: 72px 12%;
    border: 1px dashed rgba(255,255,255,.18);
    border-radius: 50%;
  }
  .financing-orbit__center {
    position: absolute;
    left: 50%;
    top: 42%;
    display: grid;
    place-items: center;
    width: 180px;
    height: 180px;
    border: 1px solid rgba(245,155,50,.68);
    border-radius: 50%;
    background: rgba(0,0,0,.76);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 64px rgba(245,155,50,.18);
  }
  .financing-orbit__center span {
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .12em;
  }
  .financing-orbit__center strong {
    max-width: 126px;
    text-align: center;
    font-size: 24px;
    line-height: 1.1;
  }
  .financing-orbit__node {
    position: absolute;
    display: grid;
    place-items: center;
    width: 120px;
    height: 44px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;
    background: rgba(0,0,0,.72);
    color: rgba(255,255,255,.82);
    font-size: 13px;
    font-weight: 760;
  }
  .financing-orbit__node.node-1 { left: 12%; top: 16%; }
  .financing-orbit__node.node-2 { right: 14%; top: 17%; }
  .financing-orbit__node.node-3 { left: 8%; top: 44%; }
  .financing-orbit__node.node-4 { right: 8%; top: 44%; }
  .financing-orbit__node.node-5 { left: 18%; bottom: 20%; }
  .financing-orbit__node.node-6 { right: 18%; bottom: 20%; }
  .financing-output-stack {
    position: absolute;
    left: 50%;
    bottom: 28px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    width: calc(100% - 48px);
    transform: translateX(-50%);
  }
  .financing-output-stack strong {
    padding: 10px 12px;
    border: 1px solid rgba(245,155,50,.34);
    border-radius: 8px;
    color: rgba(255,255,255,.84);
    background: rgba(245,155,50,.08);
    font-size: 13px;
    text-align: center;
  }
  .financing-mini-table,
  .financing-market-visual {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
  .financing-mini-row {
    min-height: 126px;
  }
  .qishu-image-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
  }
  .qishu-image-strip--quad {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .qishu-image-strip figure {
    position: relative;
    min-height: 0;
    aspect-ratio: 3 / 1;
    margin: 0;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 8px;
    background: #070707;
  }
  .qishu-image-strip img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(1.04) contrast(1.06);
  }
  .qishu-image-strip figcaption {
    position: absolute;
    inset: auto 0 0;
    display: grid;
    gap: 6px;
    padding: 48px 16px 16px;
    color: #fff;
    text-align: left;
    background: linear-gradient(180deg, transparent, rgba(0,0,0,.86));
  }
  .qishu-image-strip figcaption span {
    color: var(--accent);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .qishu-image-strip figcaption strong {
    font-size: clamp(16px, 1.1vw, 21px);
    line-height: 1.16;
  }
  .qishu-wide-image {
    position: relative;
    width: 100%;
    margin: clamp(18px, 1.8vw, 30px) 0 0;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 8px;
    background:
      linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.02)),
      #050505;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.08),
      0 24px 70px rgba(0,0,0,.24);
  }
  .qishu-wide-image img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: saturate(1.04) contrast(1.05);
  }
  .qishu-wide-image figcaption {
    position: absolute;
    left: 16px;
    bottom: 16px;
    display: grid;
    gap: 4px;
    padding: 10px 12px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 6px;
    background: rgba(0,0,0,.62);
    text-align: left;
    backdrop-filter: blur(10px);
  }
  .qishu-wide-image figcaption span {
    color: var(--accent);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .qishu-wide-image figcaption strong {
    color: #fff;
    font-size: clamp(15px, 1vw, 19px);
    line-height: 1.1;
  }
  .qishu-wide-image--pain {
    max-width: min(1800px, 100%);
    margin-right: auto;
    margin-left: auto;
  }
  .qishu-wide-image--scene {
    max-width: min(1580px, 100%);
    margin-right: auto;
    margin-left: auto;
  }
  .qishu-opportunity-carousel {
    width: 100%;
    max-width: min(1800px, 100%);
    margin: clamp(18px, 1.8vw, 28px) auto 0;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 8px;
    background:
      linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.02)),
      #050505;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 22px 60px rgba(0,0,0,.24);
  }
  .qishu-opportunity-carousel__track {
    display: flex;
    gap: 14px;
    width: max-content;
    padding: 12px;
    animation: qishuOpportunityCarousel 44s linear infinite;
  }
  .qishu-opportunity-carousel:hover .qishu-opportunity-carousel__track {
    animation-play-state: paused;
  }
  .qishu-opportunity-carousel__slide {
    position: relative;
    flex: 0 0 min(860px, 72vw);
    aspect-ratio: 2992 / 1634;
    margin: 0;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 6px;
    background: #050505;
  }
  .qishu-opportunity-carousel__slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .qishu-opportunity-carousel__slide figcaption {
    position: absolute;
    left: 12px;
    bottom: 12px;
    display: grid;
    gap: 4px;
    padding: 10px 12px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 6px;
    background: rgba(0,0,0,.62);
    text-align: left;
    backdrop-filter: blur(10px);
  }
  .qishu-opportunity-carousel__slide figcaption span {
    color: var(--accent);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .qishu-opportunity-carousel__slide figcaption strong {
    color: #fff;
    font-size: clamp(15px, .95vw, 18px);
    line-height: 1.1;
  }
  @keyframes qishuOpportunityCarousel {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-50% - 7px)); }
  }
  @media (prefers-reduced-motion: reduce) {
    .qishu-opportunity-carousel {
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }
    .qishu-opportunity-carousel__track {
      animation: none;
    }
    .qishu-opportunity-carousel__slide {
      scroll-snap-align: center;
    }
  }
  .qishu-compare-chart {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
  .qishu-compare-chart article,
  .qishu-funnel article,
  .qishu-revenue-map,
  .qishu-flywheel {
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(255,255,255,.07), rgba(255,255,255,.026));
  }
  .qishu-compare-chart article {
    padding: 18px;
    text-align: left;
  }
  .qishu-compare-chart header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
  }
  .qishu-compare-chart header span {
    color: rgba(255,255,255,.78);
    font-weight: 800;
  }
  .qishu-compare-chart header strong {
    color: var(--accent);
  }
  .qishu-compare-row {
    display: grid;
    grid-template-columns: 86px minmax(0, 1fr) 62px;
    gap: 10px;
    align-items: center;
  }
  .qishu-compare-row + .qishu-compare-row {
    margin-top: 10px;
  }
  .qishu-compare-row small,
  .qishu-compare-row em {
    color: rgba(255,255,255,.62);
    font-size: 12px;
    font-style: normal;
    font-weight: 760;
  }
  .qishu-compare-row div {
    height: 9px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255,255,255,.12);
  }
  .qishu-compare-row i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: rgba(255,255,255,.34);
  }
  .qishu-compare-row.is-ai i {
    background: linear-gradient(90deg, #f59b32, #ef4444);
  }
  .qishu-funnel {
    display: grid;
    gap: 10px;
  }
  .qishu-funnel article {
    width: var(--funnel-width);
    min-height: 78px;
    margin: 0 auto;
    padding: 16px 18px;
    background: linear-gradient(90deg, rgba(245,155,50,.16), rgba(255,255,255,.045));
    text-align: center;
  }
  .qishu-funnel span,
  .qishu-revenue-core span,
  .qishu-flywheel-core span {
    display: block;
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .qishu-funnel strong {
    display: block;
    margin: 4px 0;
    font-size: 21px;
  }
  .qishu-funnel small {
    color: rgba(255,255,255,.68);
    font-size: 13px;
  }
  .qishu-revenue-map {
    position: relative;
    display: grid;
    grid-template-columns: minmax(210px, .34fr) minmax(0, 1fr);
    gap: 18px;
    align-items: center;
    min-height: 360px;
    padding: clamp(20px, 2vw, 34px);
  }
  .qishu-revenue-core {
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    border: 1px solid rgba(245,155,50,.56);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245,155,50,.18), rgba(0,0,0,.74) 70%);
  }
  .qishu-revenue-core strong {
    max-width: 130px;
    font-size: clamp(24px, 2vw, 34px);
    line-height: 1.12;
  }
  .qishu-revenue-lanes {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
  }
  .qishu-revenue-lanes article {
    display: grid;
    align-content: space-between;
    min-height: 210px;
    padding: 16px;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 8px;
    background: rgba(255,255,255,.045);
    text-align: left;
  }
  .qishu-revenue-lanes span {
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
  }
  .qishu-revenue-lanes strong {
    font-size: clamp(18px, 1.2vw, 24px);
    line-height: 1.16;
  }
  .qishu-revenue-lanes small {
    color: rgba(255,255,255,.48);
    font-size: 11px;
    font-weight: 820;
    text-transform: uppercase;
  }
  .qishu-revenue-section {
    display: block;
    min-height: 0;
    padding: clamp(96px, 10vh, 132px) 0 clamp(92px, 11vh, 148px);
  }
  .qishu-revenue-page {
    display: grid;
    gap: clamp(18px, 1.7vw, 30px);
    width: 100%;
  }
  .qishu-revenue-page + .qishu-revenue-page {
    margin-top: clamp(58px, 7vw, 104px);
    padding-top: clamp(42px, 5vw, 76px);
    border-top: 1px solid rgba(255,255,255,.12);
  }
  .qishu-revenue-page--overview {
    grid-template-columns: minmax(300px, .42fr) minmax(0, 1fr);
    align-items: stretch;
  }
  .qishu-revenue-page--overview .qishu-revenue-page__intro {
    align-self: center;
  }
  .qishu-revenue-page__intro h2 {
    margin: 0;
    color: var(--text);
    font-size: clamp(42px, 5.2vw, 88px);
    line-height: .98;
    letter-spacing: 0;
    text-wrap: balance;
  }
  .qishu-revenue-page__intro .section-lead {
    margin: 18px 0 0;
    max-width: 760px;
    color: rgba(247,247,243,.76);
    font-size: clamp(18px, 1.28vw, 25px);
    line-height: 1.48;
  }
  .qishu-revenue-page__intro > p:not(.section-kicker):not(.section-lead) {
    max-width: 760px;
    margin: clamp(22px, 2vw, 34px) 0 0;
    color: rgba(247,247,243,.72);
    font-size: clamp(15px, .94vw, 18px);
    line-height: 1.82;
  }
  .qishu-revenue-chart,
  .qishu-revenue-panel,
  .qishu-revenue-detail-table,
  .qishu-revenue-conclusions,
  .qishu-revenue-formula,
  .qishu-revenue-value-note {
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 8px;
    background:
      radial-gradient(circle at 28% 0%, rgba(245,155,50,.1), transparent 34%),
      linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.024));
  }
  .qishu-revenue-chart {
    min-height: clamp(430px, 33vw, 560px);
    padding: clamp(22px, 2vw, 36px);
    overflow: hidden;
  }
  .qishu-revenue-chart header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 22px;
    margin-bottom: clamp(12px, 1.6vw, 28px);
  }
  .qishu-revenue-chart h3,
  .qishu-revenue-panel h3,
  .qishu-revenue-conclusions h3 {
    margin: 0;
    color: var(--text);
    font-size: clamp(22px, 1.55vw, 32px);
    line-height: 1.14;
    font-weight: 920;
    letter-spacing: 0;
  }
  .qishu-revenue-chart header p {
    max-width: 380px;
    margin: 0;
    color: rgba(247,247,243,.68);
    font-size: clamp(13px, .84vw, 15px);
    line-height: 1.72;
    text-align: right;
  }
  .qishu-revenue-chart__plot {
    position: relative;
    min-height: clamp(326px, 25vw, 430px);
  }
  .qishu-revenue-chart svg {
    display: block;
    width: 100%;
    height: auto;
    min-height: 290px;
  }
  .qishu-revenue-chart__area {
    fill: url(#qishuRevenueArea);
  }
  .qishu-revenue-chart__line {
    fill: none;
    stroke: #ff8a00;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: url(#qishuRevenueGlow);
  }
  .qishu-revenue-chart__stem {
    stroke: rgba(255,138,0,.42);
    stroke-width: 1;
    stroke-dasharray: 6 8;
  }
  .qishu-revenue-chart__node {
    fill: #050505;
    stroke: #ff8a00;
    stroke-width: 5;
    filter: url(#qishuRevenueGlow);
  }
  .qishu-revenue-chart__node-core {
    fill: #fff4dc;
  }
  .qishu-revenue-chart__labels {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 4px;
  }
  .qishu-revenue-chart__labels article {
    min-width: 0;
    padding: 9px 8px 0;
    border-top: 1px solid rgba(255,138,0,.3);
    text-align: center;
  }
  .qishu-revenue-chart__labels span {
    display: block;
    color: var(--accent);
    font-size: clamp(10px, .58vw, 12px);
    font-weight: 900;
    line-height: 1.2;
    white-space: nowrap;
  }
  .qishu-revenue-chart__labels strong {
    display: block;
    margin-top: 6px;
    color: rgba(247,247,243,.9);
    font-size: clamp(12px, .78vw, 15px);
    line-height: 1.28;
    font-weight: 880;
  }
  .qishu-revenue-icon {
    display: inline-grid;
    place-items: center;
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    color: #ff8a00;
    border: 1px solid rgba(255,138,0,.32);
    border-radius: 50%;
    background:
      radial-gradient(circle at 58% 42%, rgba(255,138,0,.22), transparent 62%),
      rgba(255,255,255,.035);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.045), 0 0 24px rgba(255,138,0,.18);
  }
  .qishu-revenue-icon svg {
    width: 58%;
    height: 58%;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .qishu-revenue-metrics,
  .qishu-revenue-analytics,
  .qishu-revenue-note {
    grid-column: 1 / -1;
  }
  .qishu-revenue-metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(12px, 1vw, 18px);
  }
  .qishu-revenue-metrics article {
    min-height: 158px;
    padding: clamp(18px, 1.4vw, 26px);
    border: 1px solid rgba(255,255,255,.13);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.022));
  }
  .qishu-revenue-metric__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
  }
  .qishu-revenue-metric__head > span {
    display: block;
    color: rgba(247,247,243,.76);
    font-size: 14px;
    line-height: 1.4;
  }
  .qishu-revenue-icon--metric {
    width: clamp(52px, 3.9vw, 70px);
    height: clamp(52px, 3.9vw, 70px);
    color: #ff9a1a;
    border-color: rgba(255,138,0,.2);
    background:
      radial-gradient(circle at 50% 50%, rgba(255,138,0,.28), transparent 48%),
      rgba(0,0,0,.34);
  }
  .qishu-revenue-metrics strong {
    display: block;
    margin: 16px 0 12px;
    color: #ff8a00;
    font-size: clamp(40px, 3.5vw, 68px);
    line-height: .92;
    font-weight: 920;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 28px rgba(255,138,0,.34);
  }
  .qishu-revenue-metrics p {
    margin: 0;
    color: rgba(247,247,243,.58);
    font-size: 13px;
    line-height: 1.55;
  }
  .qishu-revenue-analytics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(14px, 1.2vw, 22px);
    align-items: stretch;
  }
  .qishu-revenue-panel {
    min-height: clamp(330px, 26vw, 430px);
    height: 100%;
    padding: clamp(20px, 1.7vw, 30px);
    overflow: hidden;
  }
  .qishu-revenue-sankey--image {
    display: grid;
    place-items: center;
    min-height: clamp(330px, 26vw, 430px);
    padding: clamp(16px, 1.4vw, 24px);
    overflow: hidden;
  }
  .qishu-revenue-sankey--image img {
    display: block;
    width: min(510px, 100%);
    height: auto;
    max-height: 100%;
    border-radius: 8px;
  }
  .qishu-revenue-donut-wrap {
    display: grid;
    grid-template-columns: minmax(190px, .86fr) minmax(140px, .72fr);
    gap: clamp(16px, 1.4vw, 24px);
    align-items: center;
    margin-top: clamp(24px, 2.2vw, 42px);
  }
  .qishu-revenue-donut {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 50%, #050505 0 42%, transparent 43%),
      conic-gradient(from -80deg, #ff8a00 0 28%, #c96d12 28% 50%, #a75615 50% 70%, #8a3f13 70% 85%, rgba(255,179,71,.44) 85% 95%, rgba(255,255,255,.24) 95% 100%);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.08), 0 0 44px rgba(255,138,0,.22);
  }
  .qishu-revenue-donut::after {
    content: "";
    position: absolute;
    inset: 18%;
    border-radius: inherit;
    border: 1px solid rgba(255,255,255,.1);
    background: #050505;
  }
  .qishu-revenue-donut div {
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .qishu-revenue-donut strong {
    display: block;
    color: var(--text);
    font-size: clamp(20px, 1.5vw, 28px);
  }
  .qishu-revenue-donut span {
    display: block;
    margin-top: 4px;
    color: rgba(247,247,243,.62);
    font-size: 12px;
    letter-spacing: .04em;
  }
  .qishu-revenue-donut-wrap ul {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .qishu-revenue-donut-wrap li {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 10px;
    align-items: baseline;
    color: rgba(247,247,243,.68);
    font-size: 14px;
    line-height: 1.35;
  }
  .qishu-revenue-donut-wrap li strong {
    color: var(--accent);
    font-size: 18px;
    font-variant-numeric: tabular-nums;
  }
  .qishu-revenue-engine__stage {
    position: relative;
    min-height: clamp(260px, 20vw, 340px);
    margin-top: clamp(22px, 2vw, 34px);
  }
  .qishu-revenue-engine__stage::before,
  .qishu-revenue-engine__stage::after {
    content: "";
    position: absolute;
    inset: 18% 24%;
    border: 1px solid rgba(255,138,0,.34);
    border-radius: 50%;
  }
  .qishu-revenue-engine__stage::after {
    inset: 31% 37%;
    border-color: rgba(255,255,255,.14);
    box-shadow: 0 0 34px rgba(255,138,0,.22);
  }
  .qishu-revenue-engine__core {
    position: absolute;
    left: 50%;
    top: 50%;
    display: grid;
    place-items: center;
    width: clamp(118px, 9.2vw, 154px);
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255,138,0,.64);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,138,0,.24), rgba(0,0,0,.84) 68%);
    box-shadow: 0 0 36px rgba(255,138,0,.26);
    text-align: center;
  }
  .qishu-revenue-engine__core strong {
    font-size: clamp(17px, 1.2vw, 23px);
    line-height: 1.18;
  }
  .qishu-revenue-engine__node {
    position: absolute;
    width: min(40%, 210px);
    color: rgba(247,247,243,.7);
    font-size: 13px;
    line-height: 1.55;
  }
  .qishu-revenue-engine__node-head {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .qishu-revenue-engine__node--2 .qishu-revenue-engine__node-head,
  .qishu-revenue-engine__node--3 .qishu-revenue-engine__node-head {
    justify-content: flex-end;
  }
  .qishu-revenue-engine__node--4 .qishu-revenue-engine__node-head {
    justify-content: center;
  }
  .qishu-revenue-icon--engine {
    width: 30px;
    height: 30px;
    border-color: rgba(255,138,0,.38);
    background: rgba(255,138,0,.08);
    box-shadow: 0 0 18px rgba(255,138,0,.16);
  }
  .qishu-revenue-engine__node span {
    color: var(--accent);
    font-weight: 860;
  }
  .qishu-revenue-engine__node p {
    margin: 4px 0 0;
  }
  .qishu-revenue-engine__node--1 { left: 4%; top: 8%; text-align: left; }
  .qishu-revenue-engine__node--2 { right: 2%; top: 10%; text-align: right; }
  .qishu-revenue-engine__node--3 { right: 0; bottom: 10%; text-align: right; }
  .qishu-revenue-engine__node--4 { left: 50%; bottom: 0; transform: translateX(-50%); text-align: center; }
  .qishu-revenue-engine__node--5 { left: 0; bottom: 14%; text-align: left; }
  .qishu-revenue-sankey__stage {
    position: relative;
    display: grid;
    grid-template-columns: 90px 130px minmax(92px, 1fr) 126px;
    gap: clamp(8px, .78vw, 12px);
    align-items: center;
    min-height: clamp(246px, 18vw, 318px);
    margin-top: clamp(20px, 2vw, 34px);
  }
  .qishu-revenue-sankey__source,
  .qishu-revenue-sankey__hub span,
  .qishu-revenue-sankey__targets span {
    color: rgba(247,247,243,.9);
    font-size: clamp(12px, .72vw, 14px);
    font-weight: 850;
    line-height: 1.28;
    text-shadow: 0 0 14px rgba(0,0,0,.72);
  }
  .qishu-revenue-sankey__source {
    justify-self: end;
    white-space: nowrap;
  }
  .qishu-revenue-sankey__hub,
  .qishu-revenue-sankey__targets {
    display: grid;
    gap: 12px;
  }
  .qishu-revenue-sankey__hub span,
  .qishu-revenue-sankey__targets span {
    display: grid;
    align-items: center;
    min-height: 30px;
    padding: 7px 9px;
    border-left: 5px solid #ff8a00;
    background: linear-gradient(90deg, rgba(255,138,0,.16), rgba(255,138,0,.035));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.03);
  }
  .qishu-revenue-sankey__targets span {
    border-left-width: 4px;
    background: linear-gradient(90deg, rgba(255,138,0,.2), rgba(255,138,0,.045));
  }
  .qishu-revenue-sankey__streams {
    position: relative;
    height: 100%;
    min-height: 250px;
  }
  .qishu-revenue-sankey__streams i {
    position: absolute;
    left: -12px;
    right: -12px;
    height: var(--stream-h);
    top: var(--stream-y);
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(255,138,0,.18), rgba(255,138,0,.48), rgba(255,138,0,.18));
    filter: blur(.2px);
    transform-origin: left center;
  }
  .qishu-revenue-sankey__streams .stream-1 { --stream-y: 18%; --stream-h: 34px; transform: rotate(-10deg); opacity: .86; }
  .qishu-revenue-sankey__streams .stream-2 { --stream-y: 32%; --stream-h: 40px; transform: rotate(-4deg); opacity: .78; }
  .qishu-revenue-sankey__streams .stream-3 { --stream-y: 48%; --stream-h: 48px; transform: rotate(2deg); opacity: .86; }
  .qishu-revenue-sankey__streams .stream-4 { --stream-y: 63%; --stream-h: 30px; transform: rotate(8deg); opacity: .68; }
  .qishu-revenue-sankey__streams .stream-5 { --stream-y: 78%; --stream-h: 24px; transform: rotate(13deg); opacity: .58; }
  .qishu-revenue-note {
    margin: -6px 0 0;
    color: rgba(247,247,243,.48);
    font-size: 12px;
    line-height: 1.5;
  }
  .qishu-revenue-type-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(255,138,0,.08), rgba(255,255,255,.026));
  }
  .qishu-revenue-type-strip article {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: clamp(14px, 1vw, 20px);
    align-items: center;
    min-height: 116px;
    padding: clamp(18px, 1.3vw, 26px);
  }
  .qishu-revenue-type-strip article + article {
    border-left: 1px solid rgba(255,255,255,.12);
  }
  .qishu-revenue-type-strip strong {
    display: block;
    color: var(--accent);
    font-size: clamp(17px, 1vw, 21px);
  }
  .qishu-revenue-type-strip p {
    margin: 10px 0 0;
    color: rgba(247,247,243,.66);
    font-size: 14px;
    line-height: 1.62;
  }
  .qishu-revenue-icon--type {
    width: clamp(42px, 3.2vw, 58px);
    height: clamp(42px, 3.2vw, 58px);
    border-radius: 8px;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }
  .qishu-revenue-icon--type svg {
    width: 86%;
    height: 86%;
    stroke-width: 1.65;
  }
  .qishu-revenue-detail-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(16px, 1.35vw, 24px);
    align-items: start;
  }
  .qishu-revenue-detail-table {
    overflow: hidden;
  }
  .qishu-revenue-detail-table table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  .qishu-revenue-detail-table th {
    padding: 15px clamp(14px, 1.1vw, 22px);
    color: var(--accent);
    background: rgba(255,138,0,.13);
    font-size: 14px;
    text-align: left;
  }
  .qishu-revenue-detail-table th:nth-child(1) { width: 24%; }
  .qishu-revenue-detail-table th:nth-child(2) { width: 20%; }
  .qishu-revenue-detail-table th:nth-child(3) { width: 15%; }
  .qishu-revenue-detail-table th:nth-child(4) { width: 20%; }
  .qishu-revenue-detail-table th:nth-child(5) { width: 21%; }
  .qishu-revenue-detail-table td {
    padding: clamp(14px, 1.05vw, 20px) clamp(14px, 1.1vw, 22px);
    border-top: 1px solid rgba(255,255,255,.1);
    color: rgba(247,247,243,.78);
    font-size: clamp(13px, .82vw, 16px);
    line-height: 1.55;
    vertical-align: middle;
  }
  .qishu-revenue-detail-table td small {
    color: rgba(247,247,243,.52);
    font-size: .92em;
  }
  .qishu-revenue-detail-table td:first-child {
    display: table-cell;
  }
  .qishu-revenue-detail-table .qishu-revenue-row-number {
    display: inline-grid;
    width: 36px;
    height: 30px;
    place-items: center;
    border: 1px solid rgba(255,138,0,.44);
    border-radius: 6px;
    color: var(--accent);
    font-weight: 900;
    font-variant-numeric: tabular-nums;
  }
  .qishu-revenue-icon--row {
    width: 30px;
    height: 30px;
    color: rgba(247,247,243,.58);
    border-color: rgba(255,255,255,.18);
    border-radius: 6px;
    background: rgba(255,255,255,.03);
    box-shadow: none;
  }
  .qishu-revenue-icon--row svg {
    width: 68%;
    height: 68%;
    stroke-width: 1.65;
  }
  .qishu-revenue-detail-table td:first-child strong {
    display: inline;
    color: rgba(247,247,243,.92);
    font-size: clamp(14px, .9vw, 17px);
    line-height: 1.35;
    vertical-align: middle;
  }
  .qishu-revenue-detail-table td:first-child .qishu-revenue-row-number,
  .qishu-revenue-detail-table td:first-child .qishu-revenue-icon--row {
    margin-right: 8px;
    vertical-align: middle;
  }
  .qishu-revenue-priority {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(247,247,243,.84);
    font-weight: 800;
  }
  .qishu-revenue-priority i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff8a00;
    box-shadow: 0 0 14px rgba(255,138,0,.5);
  }
  .qishu-revenue-conclusions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    padding: clamp(20px, 1.7vw, 30px);
  }
  .qishu-revenue-conclusions h3 {
    grid-column: 1 / -1;
    color: var(--accent);
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255,138,0,.34);
  }
  .qishu-revenue-conclusions article {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    padding: clamp(18px, 1.5vw, 28px) clamp(18px, 1.6vw, 30px);
  }
  .qishu-revenue-conclusions article + article {
    border-left: 1px solid rgba(255,255,255,.1);
  }
  .qishu-revenue-conclusions article:first-of-type { padding-left: 0; }
  .qishu-revenue-conclusions article:last-of-type { padding-right: 0; }
  .qishu-revenue-conclusions article span {
    display: grid;
    place-items: center;
    width: 62px;
    aspect-ratio: 1;
    border: 1px solid rgba(255,138,0,.42);
    border-radius: 50%;
    color: var(--accent);
    font-size: 30px;
    font-weight: 920;
    font-variant-numeric: tabular-nums;
    background: radial-gradient(circle, rgba(255,138,0,.2), rgba(0,0,0,.78) 68%);
    box-shadow: 0 0 28px rgba(255,138,0,.22);
  }
  .qishu-revenue-conclusions strong {
    display: block;
    color: var(--text);
    font-size: clamp(20px, 1.28vw, 28px);
    line-height: 1.24;
  }
  .qishu-revenue-conclusions p {
    margin: 8px 0 0;
    color: rgba(247,247,243,.64);
    font-size: 14px;
    line-height: 1.7;
  }
  .qishu-revenue-formula {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(12px, 1.3vw, 24px);
    padding: clamp(22px, 2vw, 34px);
    border-color: rgba(255,138,0,.28);
    background:
      radial-gradient(circle at 18% 50%, rgba(255,138,0,.12), transparent 28%),
      linear-gradient(90deg, rgba(255,138,0,.06), rgba(255,255,255,.026));
    box-shadow: 0 0 38px rgba(255,138,0,.1);
  }
  .qishu-revenue-formula span,
  .qishu-revenue-formula b {
    color: rgba(247,247,243,.9);
    font-size: clamp(22px, 1.7vw, 34px);
    font-weight: 820;
  }
  .qishu-revenue-formula strong {
    color: var(--accent);
    font-size: clamp(25px, 2vw, 42px);
    font-weight: 920;
    letter-spacing: .04em;
  }
  .qishu-revenue-icon--formula {
    width: clamp(44px, 3.2vw, 62px);
    height: clamp(44px, 3.2vw, 62px);
    color: var(--accent);
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .qishu-revenue-icon--formula svg {
    width: 96%;
    height: 96%;
    stroke-width: 1.7;
    filter: drop-shadow(0 0 12px rgba(255,138,0,.34));
  }
  .qishu-revenue-value-note {
    display: grid;
    grid-template-columns: minmax(180px, .25fr) minmax(0, 1fr);
    gap: clamp(18px, 2vw, 34px);
    align-items: center;
    padding: clamp(22px, 2vw, 34px);
    border-color: rgba(255,138,0,.2);
  }
  .qishu-revenue-value-note__heading {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }
  .qishu-revenue-icon--note {
    width: clamp(42px, 3.1vw, 58px);
    height: clamp(42px, 3.1vw, 58px);
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .qishu-revenue-icon--note svg {
    width: 94%;
    height: 94%;
    stroke-width: 1.75;
  }
  .qishu-revenue-value-note strong {
    color: var(--accent);
    font-size: clamp(20px, 1.28vw, 28px);
  }
  .qishu-revenue-value-note p {
    margin: 0;
    color: rgba(247,247,243,.7);
    font-size: clamp(15px, .9vw, 18px);
    line-height: 1.82;
  }
  .qishu-data-flywheel-section {
    display: block;
    min-height: 0;
    padding: clamp(96px, 10vh, 132px) 0 clamp(92px, 11vh, 148px);
    text-align: left;
  }
  .qishu-data-page {
    display: grid;
    gap: clamp(16px, 1.5vw, 26px);
    width: 100%;
  }
  .qishu-data-page + .qishu-data-page {
    margin-top: clamp(48px, 5vw, 82px);
    padding-top: clamp(32px, 3.8vw, 58px);
    border-top: 1px solid rgba(255,255,255,.12);
  }
  .qishu-data-page--overview {
    grid-template-columns: minmax(520px, .92fr) minmax(620px, 1.08fr);
    align-items: center;
  }
  .qishu-data-copy h2,
  .qishu-data-page__intro h2 {
    margin: 0;
    color: var(--text);
    font-size: clamp(34px, 3.45vw, 62px);
    line-height: 1.08;
    letter-spacing: 0;
    text-wrap: balance;
  }
  .qishu-data-copy h2 span,
  .qishu-data-value-conclusion span {
    color: var(--accent);
  }
  .qishu-data-copy .section-lead,
  .qishu-data-page__intro .section-lead {
    max-width: 920px;
    margin: 16px 0 0;
    color: rgba(247,247,243,.76);
    font-size: clamp(16px, 1vw, 20px);
    line-height: 1.78;
  }
  .qishu-data-copy > p:not(.section-kicker):not(.section-lead) {
    max-width: 760px;
    margin: 10px 0 0;
    color: rgba(247,247,243,.64);
    font-size: clamp(14px, .9vw, 17px);
    line-height: 1.82;
  }
  .qishu-data-icon {
    color: var(--accent);
    border-color: rgba(255,138,0,.36);
    background:
      radial-gradient(circle at 50% 50%, rgba(255,138,0,.16), transparent 58%),
      rgba(0,0,0,.32);
  }
  .qishu-data-asset-list {
    display: grid;
    gap: 8px;
    margin-top: clamp(16px, 1.4vw, 24px);
  }
  .qishu-data-asset-list article {
    display: grid;
    grid-template-columns: 52px minmax(152px, .5fr) minmax(0, 1fr);
    align-items: center;
    gap: clamp(10px, .8vw, 16px);
    min-height: 52px;
    padding: 8px 12px;
    border: 1px solid rgba(255,138,0,.22);
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(255,138,0,.075), rgba(255,255,255,.018));
  }
  .qishu-data-asset-list strong {
    color: rgba(247,247,243,.92);
    font-size: clamp(15px, .9vw, 18px);
    line-height: 1.35;
  }
  .qishu-data-asset-list p {
    margin: 0;
    color: rgba(247,247,243,.56);
    font-size: 14px;
    line-height: 1.45;
  }
  .qishu-data-icon--asset {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: rgba(0,0,0,.32);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.04);
  }
  .qishu-data-flywheel-graphic.qishu-flywheel {
    position: relative;
    min-height: clamp(540px, 42vw, 700px);
    overflow: visible;
    border: 0;
    background: none;
  }
  .qishu-data-flywheel-graphic::before {
    content: "";
    position: absolute;
    inset: 8% 12% 7%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,138,0,.1), transparent 56%);
    filter: blur(6px);
    pointer-events: none;
  }
  .qishu-data-flywheel-orbit {
    position: relative;
    width: min(700px, 100%);
    aspect-ratio: 1;
    margin: 0 auto;
  }
  .qishu-data-flywheel-rings {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .qishu-data-flywheel-ring {
    fill: none;
    stroke: rgba(255,138,0,.38);
    stroke-width: 1.4;
    stroke-dasharray: 2 10;
  }
  .qishu-data-flywheel-ring--inner {
    stroke: rgba(255,255,255,.16);
    stroke-dasharray: none;
  }
  .qishu-data-flywheel-spin {
    fill: none;
    stroke: #ff8a00;
    stroke-width: 5;
    stroke-linecap: round;
    filter: url(#qishuFlywheelGlow);
  }
  .qishu-data-flywheel-spin--inner {
    stroke-width: 3;
    opacity: .8;
  }
  .qishu-data-flywheel-core {
    position: absolute;
    left: 50%;
    top: 50%;
    display: grid;
    place-items: center;
    width: clamp(188px, 15vw, 246px);
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255,138,0,.52);
    border-radius: 50%;
    background:
      radial-gradient(circle, rgba(255,138,0,.18), transparent 46%),
      rgba(0,0,0,.78);
    box-shadow: 0 0 48px rgba(255,138,0,.24), inset 0 0 0 1px rgba(255,255,255,.05);
    text-align: center;
  }
  .qishu-data-flywheel-core span {
    color: rgba(247,247,243,.9);
    font-size: clamp(18px, 1.25vw, 24px);
    font-weight: 720;
  }
  .qishu-data-flywheel-core strong {
    display: block;
    color: var(--accent);
    font-size: clamp(34px, 2.9vw, 54px);
    line-height: 1;
    font-weight: 930;
    text-shadow: 0 0 30px rgba(255,138,0,.38);
  }
  .qishu-data-flywheel-core small {
    color: rgba(247,247,243,.62);
    font-size: 14px;
    letter-spacing: .08em;
  }
  .qishu-data-flywheel-node {
    position: absolute;
    display: grid;
    grid-template-columns: 50px minmax(0, 1fr);
    gap: 11px;
    align-items: center;
    width: 226px;
    min-height: 76px;
    padding: 7px 8px;
    border: 0;
    background: transparent;
    text-align: left;
  }
  .qishu-data-flywheel-node .qishu-data-icon--node {
    width: 48px;
    height: 48px;
    border-color: rgba(255,138,0,.5);
    box-shadow: 0 0 24px rgba(255,138,0,.22);
  }
  .qishu-data-flywheel-node span,
  .qishu-data-loop-node span {
    display: block;
    color: var(--accent);
    font-weight: 920;
    font-size: 16px;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .qishu-data-flywheel-node strong {
    display: block;
    margin-top: 5px;
    color: rgba(247,247,243,.94);
    font-size: clamp(15px, .88vw, 17px);
    line-height: 1.18;
    font-weight: 900;
  }
  .qishu-data-flywheel-node small {
    display: block;
    margin-top: 4px;
    color: rgba(247,247,243,.48);
    font-size: clamp(10px, .64vw, 12px);
    line-height: 1.32;
  }
  .qishu-data-flywheel-node.node-1 { right: 7%; top: 0; }
  .qishu-data-flywheel-node.node-2 { right: -2%; top: 18%; }
  .qishu-data-flywheel-node.node-3 { right: -3%; top: 42%; }
  .qishu-data-flywheel-node.node-4 { right: 8%; bottom: 12%; }
  .qishu-data-flywheel-node.node-5 { left: 27%; bottom: 0; }
  .qishu-data-flywheel-node.node-6 { left: -3%; bottom: 18%; }
  .qishu-data-flywheel-node.node-7 { left: -7%; top: 40%; }
  .qishu-data-flywheel-node.node-8 { left: 6%; top: 14%; }
  .qishu-data-lift-band,
  .qishu-data-conclusion-strip,
  .qishu-data-value-conclusion {
    grid-column: 1 / -1;
  }
  .qishu-data-lift-band {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border: 1px solid rgba(255,138,0,.22);
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(255,138,0,.065), rgba(255,255,255,.024));
  }
  .qishu-data-lift-band article {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 12px;
    align-items: center;
    min-height: 92px;
    padding: clamp(14px, 1.1vw, 20px);
  }
  .qishu-data-lift-band article + article {
    border-left: 1px solid rgba(255,255,255,.12);
  }
  .qishu-data-icon--lift {
    width: 50px;
    height: 50px;
    border-color: rgba(255,138,0,.42);
    box-shadow: 0 0 22px rgba(255,138,0,.16);
  }
  .qishu-data-lift-band strong {
    color: rgba(247,247,243,.92);
    font-size: clamp(18px, 1.12vw, 24px);
  }
  .qishu-data-lift-band p {
    margin: 6px 0 0;
    color: rgba(247,247,243,.54);
    font-size: 13px;
    line-height: 1.45;
  }
  .qishu-data-conclusion-strip {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: clamp(14px, 1.4vw, 24px);
    color: rgba(247,247,243,.86);
    font-size: clamp(18px, 1.32vw, 26px);
    line-height: 1.42;
    border-bottom: 1px solid rgba(255,138,0,.36);
    text-align: center;
    text-shadow: 0 0 18px rgba(255,138,0,.12);
  }
  .qishu-data-conclusion-strip strong,
  .qishu-data-conclusion-strip span {
    font-weight: 850;
  }
  .qishu-data-page__intro {
    max-width: 960px;
  }
  .qishu-data-assets-grid {
    display: grid;
    grid-template-columns: minmax(420px, .96fr) minmax(520px, 1.04fr);
    gap: clamp(22px, 2vw, 34px);
    align-items: stretch;
  }
  .qishu-data-assets-grid > div {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }
  .qishu-data-assets-grid h3,
  .qishu-data-barrier h3 {
    margin: 0 0 18px;
    color: rgba(247,247,243,.94);
    font-size: clamp(23px, 1.55vw, 34px);
    line-height: 1.18;
  }
  .qishu-data-loop-graphic {
    position: relative;
    min-height: clamp(300px, 23vw, 400px);
    overflow: visible;
  }
  .qishu-data-loop-path {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .qishu-data-loop-path path,
  .qishu-data-loop-path ellipse {
    fill: none;
    stroke: #ff8a00;
    stroke-width: 3;
    marker-end: url(#qishuDataLoopArrow);
    filter: url(#qishuDataLoopGlow);
  }
  .qishu-data-loop-path ellipse {
    stroke-width: 1.4;
    stroke-dasharray: 2 10;
    opacity: .7;
    marker-end: none;
  }
  .qishu-data-loop-node {
    position: absolute;
    display: grid;
    justify-items: center;
    gap: 7px;
    width: 112px;
    color: rgba(247,247,243,.78);
    text-align: center;
  }
  .qishu-data-icon--loop {
    width: 50px;
    height: 50px;
    border-color: rgba(255,138,0,.5);
    box-shadow: 0 0 20px rgba(255,138,0,.18);
  }
  .qishu-data-loop-node strong {
    color: rgba(247,247,243,.92);
    font-size: clamp(12px, .78vw, 14px);
    line-height: 1.22;
    font-weight: 880;
    text-shadow: 0 0 14px rgba(0,0,0,.75);
    max-width: 100%;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }
  .qishu-data-loop-node.loop-1 { left: 10%; top: 3%; }
  .qishu-data-loop-node.loop-2 { left: 30%; top: 3%; }
  .qishu-data-loop-node.loop-3 { left: 50%; top: 3%; }
  .qishu-data-loop-node.loop-4 { right: 8%; top: 3%; }
  .qishu-data-loop-node.loop-5 { right: 1%; bottom: 7%; }
  .qishu-data-loop-node.loop-6 { left: 56%; bottom: 7%; }
  .qishu-data-loop-node.loop-7 { left: 36%; bottom: 7%; }
  .qishu-data-loop-node.loop-8 { left: 16%; bottom: 7%; }
  .qishu-data-loop-node.loop-9 { left: 0; top: 40%; }
  .qishu-data-loop-node.loop-9 { width: 128px; }
  .qishu-data-image {
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    border: 0;
    background: none;
    overflow: hidden;
  }
  .qishu-data-image::before {
    display: none;
  }
  .qishu-data-image img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    user-select: none;
  }
  .qishu-data-flywheel-graphic.qishu-data-image--flywheel {
    min-height: clamp(540px, 42vw, 700px);
    padding: clamp(4px, 1vw, 14px);
    overflow: hidden;
  }
  .qishu-data-image--flywheel img {
    width: min(760px, 100%);
    filter: drop-shadow(0 0 22px rgba(255,138,0,.14));
  }
  .qishu-data-loop-graphic.qishu-data-image--loop {
    min-height: clamp(300px, 23vw, 400px);
    padding: 0;
    overflow: hidden;
  }
  .qishu-data-image--loop img {
    filter: drop-shadow(0 0 18px rgba(255,138,0,.16));
  }
  .qishu-data-assets-table {
    min-height: clamp(300px, 23vw, 400px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.018));
  }
  .qishu-data-assets-table table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  .qishu-data-assets-table th,
  .qishu-data-assets-table td {
    padding: clamp(9px, .72vw, 13px);
    border-right: 1px solid rgba(255,255,255,.1);
    border-top: 1px solid rgba(255,255,255,.1);
    color: rgba(247,247,243,.66);
    font-size: clamp(11px, .68vw, 13px);
    line-height: 1.42;
    vertical-align: middle;
    text-align: center;
  }
  .qishu-data-assets-table th {
    border-top: 0;
    color: rgba(247,247,243,.88);
    background: rgba(255,255,255,.035);
    font-weight: 840;
  }
  .qishu-data-assets-table th:last-child,
  .qishu-data-assets-table td:last-child {
    border-right: 0;
  }
  .qishu-data-assets-table td:first-child {
    display: grid;
    justify-items: center;
    gap: 6px;
    color: rgba(247,247,243,.92);
  }
  .qishu-data-icon--table {
    width: 28px;
    height: 28px;
    border: 0;
    background: transparent;
    box-shadow: none;
  }
  .qishu-data-icon--table svg {
    width: 86%;
    height: 86%;
  }
  .qishu-data-barrier {
    display: grid;
    gap: 12px;
  }
  .qishu-data-barrier-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(14px, 1.2vw, 22px);
  }
  .qishu-data-barrier-strip article {
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr) 48px;
    gap: 12px;
    align-items: center;
    min-height: 88px;
    padding: clamp(14px, 1.1vw, 20px);
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 8px;
    background: linear-gradient(145deg, rgba(255,255,255,.052), rgba(255,255,255,.018));
  }
  .qishu-data-barrier-strip article > span {
    display: grid;
    place-items: center;
    width: 50px;
    aspect-ratio: 1;
    border: 1px solid rgba(255,138,0,.28);
    border-radius: 50%;
    color: var(--accent);
    font-size: 24px;
    font-weight: 920;
    background: radial-gradient(circle, rgba(255,138,0,.15), rgba(0,0,0,.78) 70%);
  }
  .qishu-data-barrier-strip p {
    margin: 0;
    color: rgba(247,247,243,.86);
    font-size: clamp(15px, 1vw, 20px);
    line-height: 1.44;
  }
  .qishu-data-icon--barrier {
    width: 46px;
    height: 46px;
    border-style: dashed;
    border-color: rgba(255,138,0,.32);
    background: transparent;
  }
  .qishu-data-value-conclusion {
    display: grid;
    grid-template-columns: 92px minmax(0, 1fr);
    gap: clamp(14px, 1.5vw, 24px);
    align-items: center;
    min-height: 112px;
    padding: clamp(18px, 1.5vw, 26px);
    border: 1px solid rgba(255,138,0,.32);
    border-radius: 8px;
    background:
      radial-gradient(circle at 8% 50%, rgba(255,138,0,.2), transparent 20%),
      linear-gradient(90deg, rgba(255,138,0,.1), rgba(255,255,255,.02));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.035), 0 0 44px rgba(255,138,0,.11);
  }
  .qishu-data-icon--value {
    width: 72px;
    height: 72px;
    border-color: rgba(255,138,0,.46);
    box-shadow: 0 0 34px rgba(255,138,0,.24);
  }
  .qishu-data-value-conclusion p {
    margin: 0;
    color: rgba(247,247,243,.88);
    font-size: clamp(18px, 1.32vw, 28px);
    line-height: 1.48;
  }
  .qishu-flywheel {
    position: relative;
    min-height: 620px;
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 50%, rgba(245,155,50,.16), transparent 34%),
      linear-gradient(145deg, rgba(255,255,255,.07), rgba(255,255,255,.026));
  }
  .qishu-flywheel::before {
    content: "";
    position: absolute;
    inset: 100px 14%;
    border: 1px dashed rgba(255,255,255,.18);
    border-radius: 50%;
  }
  .qishu-flywheel-core {
    position: absolute;
    left: 50%;
    top: 50%;
    display: grid;
    place-items: center;
    width: 190px;
    aspect-ratio: 1;
    border: 1px solid rgba(245,155,50,.56);
    border-radius: 50%;
    background: rgba(0,0,0,.78);
    transform: translate(-50%, -50%);
  }
  .qishu-flywheel-core strong {
    max-width: 126px;
    font-size: 25px;
    line-height: 1.12;
  }
  .qishu-flywheel article {
    position: absolute;
    display: grid;
    gap: 6px;
    width: 168px;
    min-height: 88px;
    padding: 14px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 8px;
    background: rgba(0,0,0,.62);
    text-align: left;
  }
  .qishu-flywheel article span {
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
  }
  .qishu-flywheel article strong {
    font-size: 16px;
    line-height: 1.22;
  }
  .qishu-flywheel .node-1 { left: 50%; top: 38px; transform: translateX(-50%); }
  .qishu-flywheel .node-2 { right: 15%; top: 102px; }
  .qishu-flywheel .node-3 { right: 7%; top: 266px; }
  .qishu-flywheel .node-4 { right: 20%; bottom: 70px; }
  .qishu-flywheel .node-5 { left: 50%; bottom: 38px; transform: translateX(-50%); }
  .qishu-flywheel .node-6 { left: 10%; bottom: 166px; }
  .qishu-flywheel .node-7 { left: 15%; top: 102px; }
  .qishu-data-flywheel-graphic.qishu-flywheel {
    min-height: clamp(540px, 42vw, 700px);
    overflow: visible;
    border: 0;
    background: none;
  }
  .qishu-data-flywheel-graphic::before {
    inset: 8% 12% 7%;
    border: 0;
    background: radial-gradient(circle, rgba(255,138,0,.1), transparent 56%);
    filter: blur(6px);
  }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node {
    display: grid;
    grid-template-columns: 50px minmax(0, 1fr);
    gap: 11px;
    width: 226px;
    min-height: 76px;
    padding: 7px 8px;
    border: 0;
    border-radius: 0;
    background: transparent;
    text-align: left;
  }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-1 { right: 7%; left: auto; top: 0; bottom: auto; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-2 { right: -2%; left: auto; top: 18%; bottom: auto; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-3 { right: -3%; left: auto; top: 42%; bottom: auto; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-4 { right: 8%; left: auto; top: auto; bottom: 12%; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-5 { left: 27%; right: auto; top: auto; bottom: 0; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-6 { left: -3%; right: auto; top: auto; bottom: 18%; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-7 { left: -7%; right: auto; top: 40%; bottom: auto; transform: none; }
  .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-8 { left: 6%; right: auto; top: 14%; bottom: auto; transform: none; }
  .cad-model-story {
    position: relative;
    min-height: 520vh;
    padding: 0;
    z-index: 1;
  }
  .cad-model-story__sticky {
    position: sticky;
    top: 0;
    min-height: 100svh;
    display: grid;
    grid-template-columns: minmax(360px, .88fr) minmax(520px, 1.12fr);
    gap: clamp(32px, 5vw, 84px);
    align-items: stretch;
    width: calc(100% - clamp(32px, 7vw, 140px));
    margin: 0 auto;
    padding: clamp(74px, 8vh, 104px) 0 clamp(28px, 4vh, 54px);
  }
  .cad-model-story__left {
    align-self: center;
  }
  .cad-model-story__left h2 {
    max-width: 820px;
    margin: 0 0 20px;
    font-size: clamp(38px, 4.7vw, 74px);
    line-height: .96;
  }
  .cad-model-story__left .section-lead { max-width: 760px; }
  .cad-steps {
    display: grid;
    gap: 10px;
    margin-top: clamp(24px, 4vh, 44px);
  }
  [data-cad-step] {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 14px;
    min-height: 92px;
    padding: 14px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 8px;
    background: rgba(255,255,255,.043);
    opacity: .38;
    transform: translateX(0);
    transition:
      opacity 280ms var(--ease-out-soft),
      border-color 280ms var(--ease-out-soft),
      background 280ms var(--ease-out-soft),
      transform 280ms var(--ease-out-soft);
  }
  [data-cad-step] > span {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: #060606;
    background: #fff;
    font-size: 12px;
    font-weight: 900;
  }
  [data-cad-step] small {
    color: var(--accent);
    font-size: 11px;
    font-weight: 860;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  [data-cad-step] h3 {
    margin: 4px 0 6px;
    font-size: 16px;
    line-height: 1.2;
  }
  [data-cad-step] p {
    margin: 0;
    font-size: 13px;
    line-height: 1.62;
    color: rgba(255,255,255,.58);
  }
  [data-cad-step].is-active {
    opacity: 1;
    border-color: rgba(255, 160, 32, .95);
    background: linear-gradient(90deg, rgba(255, 150, 30, .18), rgba(255, 255, 255, .035));
    transform: translateX(8px);
  }
  [data-cad-step].is-passed {
    opacity: .65;
  }
  .cad-model-visual {
    --story-progress: 0;
    --stage-progress: 0;
    --cad-base-offset: 1700;
    --cad-highlight-offset: 900;
    --story-rotate-y: 0deg;
    --wall-rise: 0;
    position: relative;
    align-self: stretch;
    min-height: clamp(640px, calc(100svh - clamp(122px, 12vh, 158px)), 880px);
    border: 1px solid var(--line);
    border-radius: 8px;
    background:
      radial-gradient(circle at 58% 63%, rgba(245,155,50,.22), transparent 28%),
      linear-gradient(135deg, rgba(255,255,255,.088), rgba(255,255,255,.025));
    box-shadow: var(--shadow);
    overflow: hidden;
    transform-style: preserve-3d;
    backdrop-filter: blur(18px);
  }
  .cad-model-visual__grid {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(255,255,255,.052) 1px, transparent 1px) 0 0 / 64px 64px,
      linear-gradient(0deg, rgba(255,255,255,.045) 1px, transparent 1px) 0 0 / 64px 64px;
    opacity: .58;
  }
  .cad-model-visual__hud,
  .cad-export {
    position: absolute;
    z-index: 6;
    left: 20px;
    right: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: rgba(255,255,255,.72);
    font-size: 11px;
    font-weight: 860;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .cad-model-visual__hud {
    top: 18px;
    justify-content: space-between;
  }
  .cad-model-visual__stage {
    position: absolute;
    inset: 58px 24px 72px;
    display: grid;
    place-items: center;
    perspective: 1200px;
    isolation: isolate;
  }
  .cad-plan-svg {
    position: absolute;
    z-index: 2;
    width: min(84%, 720px);
    height: auto;
    opacity: 1;
    filter: drop-shadow(0 20px 52px rgba(0,0,0,.48));
    transform: translateY(var(--cad-plan-y, 0px)) rotateX(var(--cad-plan-tilt, 0deg)) scale(var(--cad-plan-scale, 1));
    transition:
      opacity 520ms var(--ease-out-soft),
      transform 720ms var(--ease-out-soft),
      filter 520ms var(--ease-out-soft);
  }
  .cad-model-visual .cad-line {
    fill: none;
    vector-effect: non-scaling-stroke;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .cad-line--base {
    stroke: rgba(255,255,255,.78);
    stroke-width: 2;
    stroke-dasharray: 1700;
    stroke-dashoffset: var(--cad-base-offset);
  }
  .cad-line--measure {
    stroke: rgba(255,255,255,.2);
    stroke-width: 1.3;
    stroke-dasharray: 10 12;
    stroke-dashoffset: 0;
  }
  .cad-line--highlight {
    stroke: rgba(245,155,50,.98);
    stroke-width: 2.4;
    opacity: 0;
    stroke-dasharray: 900;
    stroke-dashoffset: var(--cad-highlight-offset);
    transition: opacity 420ms var(--ease-out-soft);
  }
  .cad-nodes .cad-node {
    fill: #fff;
    opacity: 0;
    transform-origin: center;
    transition: opacity 420ms var(--ease-out-soft);
    filter: drop-shadow(0 0 12px rgba(255,255,255,.64));
  }
  .cad-label {
    position: absolute;
    z-index: 5;
    padding: 6px 8px;
    border: 1px solid rgba(245,155,50,.42);
    border-radius: 999px;
    color: rgba(245,155,50,.95);
    background: rgba(0,0,0,.34);
    font-size: 10px;
    font-weight: 860;
    letter-spacing: .08em;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 420ms var(--ease-out-soft), transform 420ms var(--ease-out-soft);
  }
  .cad-label--vector { left: 22%; top: 24%; }
  .cad-label--point { right: 27%; top: 48%; }
  .cad-label--dimension { right: 20%; bottom: 25%; }
  .cad-3d-space {
    position: absolute;
    z-index: 3;
    inset: 0;
    display: grid;
    place-items: center;
    opacity: 0;
    transform: translateY(46px) scale(.82);
    transition:
      opacity 620ms var(--ease-out-soft),
      transform 820ms var(--ease-out-soft);
  }
  .cad-room {
    position: relative;
    width: min(58%, 520px);
    aspect-ratio: 1.34;
    transform-style: preserve-3d;
    transform:
      rotateX(62deg)
      rotateZ(-38deg)
      rotateY(var(--story-rotate-y))
      scale(var(--room-scale, .9));
    transition: transform 820ms var(--ease-out-soft), opacity 520ms var(--ease-out-soft);
  }
  .cad-wall {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255,255,255,.74);
    background:
      linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px) 0 0 / 44px 44px,
      linear-gradient(0deg, rgba(255,255,255,.1) 1px, transparent 1px) 0 0 / 44px 44px,
      rgba(255,255,255,.028);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.08), 0 0 26px rgba(245,155,50,.05);
    opacity: 0;
    transform-origin: center bottom;
    transition: opacity 520ms var(--ease-out-soft), transform 820ms var(--ease-out-soft);
  }
  .cad-wall--floor {
    opacity: 0;
    transform: rotateX(90deg) translateZ(-112px);
  }
  .cad-wall--ceiling {
    transform: rotateX(90deg) translateZ(112px) scaleY(var(--wall-rise));
  }
  .cad-wall--back {
    transform: translateZ(-112px) scaleY(var(--wall-rise));
  }
  .cad-wall--left {
    width: 44%;
    transform-origin: left bottom;
    transform: rotateY(90deg) translateZ(-112px) scaleY(var(--wall-rise));
  }
  .cad-wall--right {
    width: 44%;
    transform-origin: left bottom;
    transform: rotateY(90deg) translateZ(344px) scaleY(var(--wall-rise));
  }
  .cad-edge {
    position: absolute;
    width: 2px;
    height: 224px;
    background: rgba(245,155,50,.92);
    opacity: 0;
    transition: opacity 520ms var(--ease-out-soft), transform 820ms var(--ease-out-soft);
  }
  .cad-edge--a { left: 0; top: 0; transform: translateZ(-112px) scaleY(var(--wall-rise)); transform-origin: bottom; }
  .cad-edge--b { right: 0; top: 0; transform: translateZ(-112px) scaleY(var(--wall-rise)); transform-origin: bottom; }
  .cad-edge--c { left: 0; bottom: 0; transform: translateZ(112px) scaleY(var(--wall-rise)); transform-origin: bottom; }
  .cad-edge--d { right: 0; bottom: 0; transform: translateZ(112px) scaleY(var(--wall-rise)); transform-origin: bottom; }
  .cad-unfold {
    position: absolute;
    z-index: 4;
    right: clamp(6px, 3vw, 44px);
    bottom: clamp(20px, 5vh, 58px);
    display: grid;
    grid-template-columns: repeat(3, minmax(58px, 82px));
    gap: 10px;
    opacity: 0;
    transform: translateY(22px) scale(.9);
    transition: opacity 620ms var(--ease-out-soft), transform 620ms var(--ease-out-soft);
  }
  .cad-face {
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 6px;
    color: rgba(255,255,255,.74);
    font-size: 10px;
    font-weight: 860;
    letter-spacing: .06em;
    background:
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px) 0 0 / 15px 15px,
      linear-gradient(0deg, rgba(255,255,255,.1) 1px, transparent 1px) 0 0 / 15px 15px,
      rgba(0,0,0,.35);
  }
  .cad-export {
    bottom: 18px;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 620ms var(--ease-out-soft), transform 620ms var(--ease-out-soft);
  }
  .cad-export > span {
    padding: 8px 10px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;
    background: rgba(0,0,0,.32);
  }
  .cad-export-card {
    width: min(100%, 360px);
    padding: 12px;
    border: 1px solid rgba(245,155,50,.35);
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(245,155,50,.14), rgba(255,255,255,.045));
  }
  .cad-export-card strong,
  .cad-export-card small { display: block; }
  .cad-export-card small { margin-top: 4px; color: rgba(255,255,255,.56); text-transform: none; letter-spacing: .02em; }
  .cad-model-visual[data-stage="1"] .cad-plan-svg { opacity: 1; }
  .cad-model-visual[data-stage="1"] .cad-3d-space,
  .cad-model-visual[data-stage="1"] .cad-unfold,
  .cad-model-visual[data-stage="1"] .cad-export {
    opacity: 0;
    pointer-events: none;
  }
  .cad-model-visual[data-stage="2"] .cad-line--highlight,
  .cad-model-visual[data-stage="2"] .cad-nodes .cad-node,
  .cad-model-visual[data-stage="2"] .cad-label,
  .cad-model-visual[data-stage="3"] .cad-line--highlight,
  .cad-model-visual[data-stage="3"] .cad-nodes .cad-node,
  .cad-model-visual[data-stage="3"] .cad-label,
  .cad-model-visual[data-stage="4"] .cad-line--highlight,
  .cad-model-visual[data-stage="4"] .cad-nodes .cad-node,
  .cad-model-visual[data-stage="5"] .cad-line--highlight,
  .cad-model-visual[data-stage="6"] .cad-line--highlight {
    opacity: 1;
    transform: translateY(0);
  }
  .cad-model-visual[data-stage="3"] {
    --wall-rise: .68;
    --room-scale: .92;
  }
  .cad-model-visual[data-stage="3"] .cad-plan-svg {
    opacity: .36;
    filter: drop-shadow(0 20px 52px rgba(0,0,0,.34));
  }
  .cad-model-visual[data-stage="3"] .cad-3d-space {
    opacity: 1;
    transform: rotateX(0deg) translateY(0) scale(.92);
  }
  .cad-model-visual[data-stage="3"] .cad-wall,
  .cad-model-visual[data-stage="3"] .cad-edge {
    opacity: .78;
  }
  .cad-model-visual[data-stage="4"] {
    --wall-rise: 1;
    --room-scale: 1;
  }
  .cad-model-visual[data-stage="4"] .cad-plan-svg,
  .cad-model-visual[data-stage="5"] .cad-plan-svg,
  .cad-model-visual[data-stage="6"] .cad-plan-svg {
    opacity: .18;
    transform: translateY(var(--cad-plan-y, -28px)) rotateX(18deg) scale(.86);
  }
  .cad-model-visual[data-stage="4"] .cad-3d-space,
  .cad-model-visual[data-stage="5"] .cad-3d-space,
  .cad-model-visual[data-stage="6"] .cad-3d-space {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .cad-model-visual[data-stage="4"] .cad-wall,
  .cad-model-visual[data-stage="4"] .cad-edge,
  .cad-model-visual[data-stage="5"] .cad-wall,
  .cad-model-visual[data-stage="5"] .cad-edge,
  .cad-model-visual[data-stage="6"] .cad-wall,
  .cad-model-visual[data-stage="6"] .cad-edge {
    opacity: 1;
  }
  .cad-model-visual[data-stage="5"] .cad-3d-space,
  .cad-model-visual[data-stage="6"] .cad-3d-space {
    opacity: .34;
    transform: translate(-18%, -4%) scale(.72);
  }
  .cad-model-visual[data-stage="5"] .cad-unfold,
  .cad-model-visual[data-stage="6"] .cad-unfold {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .cad-model-visual[data-stage="6"] .cad-export {
    opacity: 1;
    transform: translateY(0);
  }
  .architecture-section,
  .case-showcase { position: relative; }
  .architecture-graph {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
    margin-top: 34px;
    padding: 36px 0 8px;
  }
  .architecture-lines {
    position: absolute; inset: 0 0 auto 0;
    width: 100%; height: 140px;
    pointer-events: none;
  }
  .arch-line {
    fill: none;
    stroke: rgba(245,155,50,.72);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: 1400;
    stroke-dashoffset: 1400;
    transition: stroke-dashoffset 1300ms var(--ease-out-soft) 160ms;
  }
  .architecture-graph.is-visible .arch-line { stroke-dashoffset: 0; }
  .architecture-node {
    position: relative;
    min-height: 280px;
    padding: 20px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(255,255,255,.055);
    box-shadow: 0 18px 60px rgba(0,0,0,.2);
    backdrop-filter: blur(14px);
    z-index: 1;
  }
  .architecture-node > span {
    display: inline-grid; place-items: center;
    width: 34px; height: 34px; margin-bottom: 52px;
    border-radius: 8px; color: #050505; background: #fff; font-size: 12px; font-weight: 900;
  }
  .architecture-node h3 { margin: 0 0 12px; font-size: 20px; line-height: 1.14; }
  .architecture-node strong { display: block; color: var(--accent); font-size: 12px; line-height: 1.45; }
  .architecture-node p { margin: 12px 0 0; font-size: 13px; line-height: 1.7; }
  .case-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: center;
    align-items: stretch;
    gap: 18px;
    width: min(92vw, 1880px);
    max-width: 1880px;
    margin: 34px auto 0;
  }
  .case-card {
    min-height: 0;
    height: 100%;
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    align-content: start;
    justify-items: center;
    gap: 12px;
    padding: 16px;
    text-align: center;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(255,255,255,.055);
    box-shadow: 0 18px 60px rgba(0,0,0,.2);
    overflow: hidden;
    transition:
      opacity var(--motion-base) var(--ease-out-soft),
      transform var(--motion-base) var(--ease-out-soft),
      border-color 180ms ease,
      background-color 180ms ease;
  }
  .case-card:hover,
  .case-card:focus-visible,
  .architecture-node:hover,
  .vertical-card:hover,
  .info-card:hover,
  .metric:hover {
    border-color: rgba(255,255,255,.36);
    background: rgba(255,255,255,.085);
  }
  .case-preview {
    position: relative;
    width: 100%;
    aspect-ratio: 1672 / 941;
    border: 1px solid rgba(255,255,255,.13);
    border-radius: 8px;
    overflow: hidden;
    background:
      linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px) 0 0 / 24px 24px,
      linear-gradient(0deg, rgba(255,255,255,.08) 1px, transparent 1px) 0 0 / 24px 24px,
      rgba(0,0,0,.26);
  }
  .case-preview img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: saturate(1.08) contrast(1.04);
    transform: scale(1.01);
    transition: transform 420ms var(--ease-out-soft), filter 420ms var(--ease-out-soft);
  }
  .case-card:hover .case-preview img { transform: scale(1.045); filter: saturate(1.16) contrast(1.08); }
  .case-card > span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 820;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .case-card h3 { margin: 0; font-size: clamp(22px, 2vw, 30px); line-height: 1.12; }
  .case-card p { margin: 0; font-size: 14px; line-height: 1.74; }
  .page-qishu-ai > .qishu-video-section {
    justify-content: center;
    min-height: 100svh;
    padding-top: clamp(132px, 15vh, 180px);
    padding-bottom: clamp(24px, 4vh, 52px);
  }
  .section.qishu-video-section > .section-kicker,
  .section.qishu-video-section > h2,
  .section.qishu-video-section > .section-lead {
    display: block;
    width: 100%;
    max-width: none;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .section.qishu-video-section > .section-kicker.scroll-float--inline,
  .section.qishu-video-section > .section-lead.scroll-float--inline {
    display: block;
  }
  .section.qishu-video-section > .section-kicker .scroll-float-text,
  .section.qishu-video-section > .section-lead .scroll-float-text {
    display: inline-block;
    max-width: min(980px, 100%);
    text-align: center;
  }
  .section.qishu-video-section > h2 {
    max-width: 1180px;
    margin-bottom: clamp(10px, 1.1vw, 16px);
    font-size: clamp(38px, 3.8vw, 58px);
    line-height: 1;
    white-space: nowrap;
  }
  .section.qishu-video-section > .section-lead {
    max-width: 980px;
    font-size: clamp(14px, 1vw, 17px);
    line-height: 1.58;
  }
  .qishu-video-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(12px, 1.1vw, 18px);
    width: min(94vw, 1780px);
    max-width: 1780px;
    margin: clamp(18px, 2.6vh, 34px) auto 0;
  }
  .qishu-video-card {
    display: grid;
    min-height: 0;
    grid-template-rows: auto auto auto 1fr;
    gap: 12px;
    justify-items: center;
    padding: clamp(10px, .8vw, 14px);
    text-align: center;
    border: 1px solid var(--line);
    border-radius: 8px;
    background:
      linear-gradient(145deg, rgba(239,68,68,.14), rgba(255,255,255,.035) 44%, rgba(0,0,0,.18)),
      rgba(255,255,255,.05);
    box-shadow: 0 18px 60px rgba(0,0,0,.2);
    overflow: hidden;
    transition:
      opacity var(--motion-base) var(--ease-out-soft),
      transform var(--motion-base) var(--ease-out-soft),
      border-color 180ms ease,
      background-color 180ms ease;
  }
  .qishu-video-card:hover,
  .qishu-video-card:focus-within {
    border-color: rgba(245,155,50,.72);
    background-color: rgba(245,155,50,.08);
    box-shadow:
      0 0 0 1px rgba(245,155,50,.18),
      0 0 34px rgba(245,155,50,.18),
      0 18px 60px rgba(0,0,0,.2);
  }
  .qishu-video-frame {
    position: relative;
    aspect-ratio: 16 / 9;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 8px;
    overflow: hidden;
    background:
      linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px) 0 0 / 28px 28px,
      linear-gradient(0deg, rgba(255,255,255,.07) 1px, transparent 1px) 0 0 / 28px 28px,
      rgba(0,0,0,.5);
  }
  .qishu-demo-video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #050505;
  }
  .qishu-video-placeholder {
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
    gap: 10px;
    color: rgba(255,255,255,.78);
    text-align: center;
    background:
      radial-gradient(circle at 50% 48%, rgba(245,155,50,.16), transparent 36%),
      linear-gradient(145deg, rgba(255,255,255,.08), rgba(0,0,0,.34));
  }
  .qishu-video-placeholder span {
    display: inline-grid;
    width: 46px;
    height: 46px;
    place-items: center;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 999px;
    color: var(--accent);
    font-size: 13px;
    font-weight: 900;
  }
  .qishu-video-placeholder strong {
    font-size: clamp(18px, 1.6vw, 26px);
    letter-spacing: .04em;
  }
  .qishu-video-card > span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 820;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .qishu-video-card h3 {
    margin: 0;
    font-size: clamp(19px, 1.35vw, 26px);
    line-height: 1.12;
  }
  .qishu-video-card p {
    margin: 0;
    color: rgba(255,255,255,.68);
    font-size: clamp(12px, .8vw, 14px);
    line-height: 1.58;
    text-align: center;
  }
  .qishu-module-video {
    display: grid;
    grid-template-columns: minmax(300px, .58fr) minmax(0, .42fr);
    gap: clamp(14px, 1.2vw, 20px);
    align-items: stretch;
    padding: clamp(12px, 1vw, 18px);
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 8px;
    background:
      linear-gradient(145deg, rgba(239,68,68,.13), rgba(255,255,255,.04) 48%, rgba(0,0,0,.2)),
      rgba(255,255,255,.04);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,.08),
      0 18px 58px rgba(0,0,0,.18);
    overflow: hidden;
  }
  .qishu-module-video .qishu-video-frame {
    min-height: clamp(210px, 18vw, 320px);
  }
  .qishu-module-video__copy {
    display: grid;
    align-content: center;
    gap: 10px;
    min-width: 0;
    text-align: left;
  }
  .qishu-module-video__copy span {
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .qishu-module-video__copy h3 {
    margin: 0;
    color: #fff;
    font-size: clamp(20px, 1.5vw, 30px);
    line-height: 1.12;
    letter-spacing: 0;
  }
  .qishu-module-video__copy p {
    margin: 0;
    color: rgba(255,255,255,.7);
    font-size: 14px;
    line-height: 1.64;
  }
  .qishu-demo-slot {
    display: grid;
    grid-template-columns: minmax(0, .58fr) minmax(280px, .42fr);
    gap: clamp(18px, 1.6vw, 28px);
    align-items: stretch;
    padding: clamp(18px, 1.5vw, 26px);
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 8px;
    background: rgba(255,255,255,.035);
  }
  .qishu-demo-slot__flow {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px;
    min-height: clamp(210px, 18vw, 320px);
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.1);
  }
  .qishu-demo-slot__flow div {
    position: relative;
    display: grid;
    align-content: space-between;
    gap: 20px;
    min-width: 0;
    padding: clamp(16px, 1.4vw, 24px);
    background: #080808;
    isolation: isolate;
    overflow: hidden;
  }
  .qishu-demo-slot__flow div::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.08) 48%, rgba(0,0,0,.92));
    pointer-events: none;
  }
  .qishu-demo-slot__flow img {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: .74;
  }
  .qishu-demo-slot__flow div:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -5px;
    z-index: 1;
    width: 9px;
    height: 9px;
    border-top: 1px solid var(--accent);
    border-right: 1px solid var(--accent);
    transform: translateY(-50%) rotate(45deg);
  }
  .qishu-demo-slot__flow span {
    position: relative;
    z-index: 1;
    color: var(--accent);
    font-size: 12px;
    font-weight: 900;
    font-variant-numeric: tabular-nums;
  }
  .qishu-demo-slot__flow strong {
    position: relative;
    z-index: 1;
    max-width: 7ch;
    font-size: clamp(16px, 1.25vw, 22px);
    line-height: 1.25;
    text-wrap: balance;
  }
  .qishu-tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: clamp(20px, 3vw, 34px) 0;
  }
  .qishu-tag-cloud span {
    display: inline-flex;
    align-items: center;
    min-height: 36px;
    padding: 8px 12px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 8px;
    color: rgba(255,255,255,.82);
    background: rgba(255,255,255,.045);
    font-size: 13px;
    font-weight: 760;
    letter-spacing: .02em;
  }
  .page-qishu-ai {
    --qishu-section-x: clamp(20px, 2.4vw, 46px);
  }
  .page-qishu-ai > .section:not(.qishu-video-section) {
    width: calc(100vw - var(--qishu-section-x) * 2);
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }
  .page-qishu-ai > .section > .section-kicker,
  .page-qishu-ai > .section > h2,
  .page-qishu-ai > .section > .section-lead {
    max-width: none;
    width: 100%;
  }
  .page-qishu-ai > .section > h2 {
    max-width: none;
    white-space: nowrap;
    overflow: visible;
    font-size: 34px;
    line-height: 1.08;
    margin-bottom: 12px;
  }
  .page-qishu-ai .content-list-shell .animated-list {
    max-height: none;
    overflow: visible;
    padding: 2px;
  }
  .page-qishu-ai .card-grid,
  .page-qishu-ai .metric-grid {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 18px;
  }
  .page-qishu-ai .card-grid [data-animated-list-item],
  .page-qishu-ai .card-grid [data-animated-list-item]:nth-child(3n+2),
  .page-qishu-ai .card-grid [data-animated-list-item]:nth-child(3n),
  .page-qishu-ai .metric-grid [data-animated-list-item],
  .page-qishu-ai .metric-grid [data-animated-list-item]:nth-child(3n+2),
  .page-qishu-ai .metric-grid [data-animated-list-item]:nth-child(3n) {
    margin-top: 0;
  }
  .page-qishu-ai .info-card,
  .page-qishu-ai .metric,
  .page-qishu-ai .timeline-item,
  .page-qishu-ai .case-card {
    min-height: 0;
  }
  .page-qishu-ai .info-card h3,
  .page-qishu-ai .metric strong,
  .page-qishu-ai .timeline-item h3,
  .page-qishu-ai .case-card h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    line-height: 1.18;
  }
  .page-qishu-ai .section-lead,
  .page-qishu-ai .info-card p,
  .page-qishu-ai .metric p,
  .page-qishu-ai .timeline-item p,
  .page-qishu-ai .case-card p,
  .page-qishu-ai .qishu-video-card p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .project-secondary-page {
    --project-section-x: clamp(20px, 2.4vw, 46px);
  }
  .project-secondary-page > .section {
    width: calc(100vw - var(--project-section-x) * 2);
    max-width: none;
    margin-right: auto;
    margin-left: auto;
  }
  .project-secondary-page > .hero {
    width: 100vw;
    max-width: 100vw;
  }
  .project-secondary-page > .hero .hero-inner {
    width: calc(100vw - var(--project-section-x) * 2);
    max-width: none;
  }
  .project-secondary-page > .section > .section-kicker,
  .project-secondary-page > .section > h2,
  .project-secondary-page > .section > .section-lead {
    width: 100%;
    max-width: none;
  }
  .project-secondary-page > .section > h2 {
    margin-bottom: 12px;
    font-size: 34px;
    line-height: 1.08;
    white-space: normal;
    text-wrap: balance;
  }
  .project-secondary-page .content-list-shell .animated-list {
    max-height: none;
    overflow: visible;
    padding: 2px;
  }
  .project-secondary-page .card-grid,
  .project-secondary-page .metric-grid {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 18px;
  }
  .project-secondary-page .card-grid [data-animated-list-item],
  .project-secondary-page .card-grid [data-animated-list-item]:nth-child(3n+2),
  .project-secondary-page .card-grid [data-animated-list-item]:nth-child(3n),
  .project-secondary-page .metric-grid [data-animated-list-item],
  .project-secondary-page .metric-grid [data-animated-list-item]:nth-child(3n+2),
  .project-secondary-page .metric-grid [data-animated-list-item]:nth-child(3n) {
    margin-top: 0;
  }
  .project-secondary-page .info-card,
  .project-secondary-page .metric,
  .project-secondary-page .timeline-item,
  .project-secondary-page .case-card {
    min-height: 0;
  }
  .project-secondary-page .split {
    width: 100%;
    align-items: stretch;
  }
  .project-secondary-page .image-panel,
  .project-secondary-page .image-panel img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0;
    object-fit: contain;
  }
  .project-contact-section .cta-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 760px;
  }
  .vertical-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
    margin-top: 28px;
  }
  .vertical-card {
    display: flex;
    min-height: 210px;
    flex-direction: column;
    gap: 12px;
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--panel);
    box-shadow: 0 18px 60px rgba(0,0,0,.2);
    backdrop-filter: blur(14px);
  }
  .vertical-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
  .vertical-card span, .vertical-card small { color: var(--accent); font-size: 12px; font-weight: 820; letter-spacing: .08em; text-transform: uppercase; }
  .vertical-card small { color: rgba(255,255,255,.46); }
  .vertical-card h3 { margin: 0; font-size: clamp(20px, 1.55vw, 26px); line-height: 1.12; }
  .vertical-card p { margin: 0; font-size: 13px; line-height: 1.62; }
  .vertical-card .route-tag { color: rgba(255,255,255,.88); font-weight: 760; }
  .vertical-card .keyword-line { margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.78); }
  .special-project {
    display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: end; margin-top: 16px; padding: 24px;
    border: 1px solid var(--line); border-radius: 8px; background: linear-gradient(135deg, rgba(255,255,255,.095), rgba(255,255,255,.035));
  }
  .special-project h3 { margin: 0 0 10px; font-size: clamp(24px, 3vw, 36px); }
  .special-project p { margin: 0; }
  .cta-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 28px; }
  .cta-grid .button { min-height: 58px; }
  .timeline { display: grid; gap: 12px; }
  .timeline-item { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 20px; }
  .timeline-item > span {
    display: grid; place-items: center; width: 44px; height: 44px; border-radius: 8px;
    color: #050505; background: #fff; font-weight: 900;
  }
  .timeline-item h3 { margin: 0 0 8px; font-size: 20px; }
  .timeline-item p { margin: 0; }
  .quote-panel { padding: clamp(24px, 5vw, 58px); }
  .quote-panel p { margin: 0; font-size: clamp(26px, 4.6vw, 54px); line-height: 1.25; color: #fff; font-weight: 820; }
  .table-wrap { overflow-x: auto; border: 1px solid var(--line); border-radius: 8px; background: rgba(255,255,255,.045); }
  table { width: 100%; min-width: 760px; border-collapse: collapse; }
  th, td { padding: 16px; border-bottom: 1px solid rgba(255,255,255,.1); text-align: left; vertical-align: top; }
  th { color: #fff; background: rgba(255,255,255,.08); font-size: 13px; letter-spacing: .05em; }
  td { color: var(--muted); line-height: 1.65; }
  .mini-projects { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 28px; }
  .mini-projects a { padding: 18px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); }
  .mini-projects span { display: block; color: var(--accent); font-size: 12px; margin-bottom: 8px; }
  .mini-projects strong { font-size: 20px; }
  .contact-cta {
    max-width: min(1000px, calc(100% - clamp(32px, 12vw, 220px)));
  }
  .contact-cta .section-lead {
    max-width: 780px;
  }
  .contact-cta .cta-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  .contact-cta .quote-panel {
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  .footer-band {
    min-height: 100svh;
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    align-content: stretch;
    gap: clamp(28px, 5vh, 64px);
    padding: clamp(108px, 13vh, 150px) 0 clamp(18px, 3.8vh, 42px);
    border-top: 1px solid rgba(255,255,255,.16);
    background:
      radial-gradient(circle at 52% 38%, rgba(245,155,50,.14), transparent 28%),
      linear-gradient(90deg, rgba(0,0,0,.96), rgba(0,0,0,.86)),
      #030303;
    overflow: hidden;
    isolation: isolate;
  }
  .footer-shape-grid-bg {
    position: absolute;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    opacity: .38;
    background:
      radial-gradient(circle at 52% 38%, rgba(245,155,50,.08), transparent 28%),
      linear-gradient(90deg, rgba(0,0,0,.96), rgba(0,0,0,.86)),
      #030303;
  }
  .footer-band::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.05) 36%, rgba(0,0,0,.58));
    opacity: .96;
  }
  .footer-band::after {
    content: '';
    position: absolute;
    inset: 18% -12% auto 46%;
    height: 46%;
    z-index: -1;
    background: linear-gradient(90deg, transparent, rgba(245,155,50,.18), transparent);
    filter: blur(28px);
    opacity: .7;
  }
  .footer-inner {
    position: relative;
    z-index: 1;
    display: grid;
    width: calc(100vw - var(--site-rail) * 2);
    max-width: none;
    grid-template-columns: minmax(0, 1.15fr) minmax(280px, .52fr);
    gap: clamp(28px, 6vw, 104px);
    align-items: start;
    align-self: start;
    margin: 0 auto;
  }
  .footer-copy { max-width: 1060px; }
  .footer-inner h2 {
    margin: 0 0 clamp(18px, 2.3vw, 30px);
    font-size: clamp(42px, 6.4vw, 96px);
    line-height: .98;
  }
  .footer-inner h2 .footer-title-break {
    display: block;
    color: inherit;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    letter-spacing: inherit;
  }
  .footer-inner p { max-width: 1040px; }
  .footer-line { color: #fff; font-weight: 820; }
  .contact-stack { display: grid; gap: 12px; align-self: start; padding-top: clamp(14px, 1.6vw, 28px); }
  .contact-stack a {
    display: grid;
    grid-template-columns: 86px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    min-height: 62px;
    padding: 16px 18px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(255,255,255,.065);
    font-weight: 760;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: transform 260ms var(--ease-out-soft), border-color 260ms ease, background-color 260ms ease;
  }
  .contact-stack a:hover,
  .contact-stack a:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(245,155,50,.75);
    background: rgba(245,155,50,.13);
    outline: none;
  }
  .contact-stack span {
    color: var(--accent);
    font-size: 11px;
    font-weight: 860;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .contact-stack strong {
    min-width: 0;
    overflow: hidden;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .animated-gradient-text {
    position: relative;
    display: inline-flex;
    max-width: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 1.25rem;
    font-weight: 500;
    overflow: hidden;
    cursor: default;
  }
  .animated-gradient-text .text-content {
    display: inline-block;
    position: relative;
    z-index: 2;
    color: transparent;
    background-image: linear-gradient(to right, #f8f8f8, #EF4444, #F97316, #FDBA74, #f8f8f8);
    background-size: 300% 100%;
    background-repeat: repeat;
    background-position: 0% 50%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientTextSweep 5s ease-in-out infinite alternate;
  }
  @keyframes gradientTextSweep {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
  .footer-wordmark {
    position: relative;
    z-index: 1;
    width: calc(100vw - var(--site-rail) * 2);
    margin: auto auto 0;
    padding: 0;
    color: rgba(255,255,255,.94);
    font-size: clamp(118px, 28vw, 560px);
    font-weight: 950;
    letter-spacing: 0;
    line-height: 0;
    white-space: nowrap;
    text-transform: uppercase;
    text-shadow: 0 0 48px rgba(255,255,255,.14);
    transform: none;
    transform-origin: left bottom;
    user-select: none;
  }
  .footer-wordmark.animated-gradient-text {
    display: flex;
    max-width: none;
    justify-content: flex-start;
    border-radius: 0;
    overflow: visible;
    font-weight: 950;
    backdrop-filter: none;
  }
  .footer-wordmark-logo.text-content {
    display: block;
    width: 100%;
    aspect-ratio: 1774 / 271;
    color: inherit;
    background-clip: border-box;
    -webkit-background-clip: border-box;
    -webkit-mask: url("assets/gibira-wordmark-white.png") center / contain no-repeat;
    mask: url("assets/gibira-wordmark-white.png") center / contain no-repeat;
    filter: drop-shadow(0 0 38px rgba(239,68,68,.2));
  }
  :where(
    .eyebrow,
    .hero-project-card,
    .button,
    .image-panel,
    .project-card,
    .info-card,
    .metric,
    .timeline-item,
    .quote-panel,
    .process-node,
    .pc-card,
    .architecture-node,
    .case-card,
    .case-preview,
    .vertical-card,
    .special-project,
    .table-wrap,
    .mini-projects a,
    .contact-stack a,
    [data-animated-list-item].is-list-selected
  ) {
    background: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
  .button.primary,
  .button.secondary {
    color: #fff;
  }
  @media (min-width: 901px) and (max-width: 1240px) {
    .qishu-video-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 901px) and (max-height: 940px) {
    .cad-model-story__sticky {
      gap: clamp(24px, 3.4vw, 52px);
      min-height: 100svh;
      padding: 48px 0 28px;
    }
    .cad-model-story__left h2 {
      max-width: 680px;
      margin-bottom: 14px;
      font-size: clamp(32px, 3.1vw, 44px);
      line-height: .98;
    }
    .cad-model-story__left .section-lead {
      font-size: 15px;
      line-height: 1.72;
    }
    .cad-steps {
      gap: 6px;
      margin-top: 16px;
    }
    [data-cad-step] {
      grid-template-columns: 34px 1fr;
      gap: 9px;
      min-height: 0;
      padding: 7px 10px;
    }
    [data-cad-step] > span {
      width: 30px;
      height: 30px;
      border-radius: 7px;
    }
    [data-cad-step] small {
      font-size: 10px;
    }
    [data-cad-step] h3 {
      margin: 2px 0 3px;
      font-size: 13px;
      line-height: 1.2;
    }
    [data-cad-step] p {
      font-size: 11px;
      line-height: 1.35;
    }
    .cad-model-visual {
      min-height: clamp(600px, calc(100svh - 84px), 820px);
    }
  }
  @media (max-width: 900px) {
    .nav-links { display: none; }
    .hero { padding: 104px 0 52px; min-height: 100svh; }
    .home-hero { align-items: start; padding-top: 96px; }
    .hero-inner, .section, .footer-inner { width: calc(100% - var(--page-rail) * 2); }
    .hero .hero-inner { width: calc(100% - var(--page-rail) * 2); }
    .footer-inner {
      width: calc(100vw - var(--site-rail) * 2);
    }
    .hero h1 {
      font-size: clamp(34px, 8.4vw, 76px);
      letter-spacing: .06em;
      white-space: normal;
      text-wrap: balance;
    }
    .hero-title-line {
      width: auto;
      max-width: 100%;
    }
    .hero-copy, .split, .footer-inner { grid-template-columns: 1fr; }
    .footer-band {
      min-height: 100svh;
      gap: 26px;
      padding: 92px 0 18px;
      grid-template-rows: auto 1fr auto;
    }
    .footer-inner {
      align-self: start;
      gap: 22px;
    }
    .footer-inner h2 {
      font-size: clamp(36px, 10vw, 68px);
    }
    .contact-stack {
      padding-top: 0;
    }
    .contact-stack a {
      grid-template-columns: 66px minmax(0, 1fr);
      min-height: 56px;
      padding: 14px;
    }
    .footer-wordmark {
      align-self: end;
      width: calc(100vw - var(--site-rail) * 2);
      padding: 0;
      font-size: clamp(92px, 29vw, 190px);
      line-height: .82;
      transform: none;
    }
    .footer-wordmark-logo.text-content {
      width: 100%;
    }
    .hero-actions { justify-content: center; }
    .hero-projects {
      display: flex; overflow-x: auto; padding-bottom: 10px;
      width: 100%; max-width: 100%;
      scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
    }
    .hero-project-list { width: 100%; max-width: 100%; min-width: 0; overflow: hidden; }
    .hero-project-list .animated-list { overflow-x: auto; overflow-y: hidden; }
    .project-list-shell .animated-list { max-height: none; overflow: visible; padding: 0; }
    .content-list-shell .animated-list { max-height: none; overflow: visible; padding: 0; }
    .logoloop {
      --logoloop-gap: 28px;
      --logoloop-logoWidth: clamp(118px, 34vw, 156px);
      --logoloop-logoHeight: 42px;
      --logoloop-shellHeight: 68px;
      max-width: 100%;
    }
    .logoloop__logo-shell {
      padding: 12px 16px;
    }
    .harness-card-list .card-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 8px;
    }
    .harness-card-list .info-card {
      min-height: 146px;
      padding: 12px 10px;
    }
    .harness-card-list .info-card span {
      font-size: 9px;
      line-height: 1.2;
    }
    .harness-card-list .info-card h3 {
      margin: 10px 0 8px;
      font-size: clamp(14px, 3.2vw, 18px);
      line-height: 1.15;
    }
    .harness-card-list .info-card p {
      font-size: 10px;
      line-height: 1.45;
    }
    .ecosystem-card-list .card-grid,
    .team-card-list .card-grid,
    .advisor-card-list .card-grid { grid-template-columns: 1fr; }
    .team-profile-board {
      width: 100%;
      overflow-x: auto;
      padding: 0 2px 12px;
      scroll-snap-type: x proximity;
    }
    .team-profile-row {
      grid-auto-flow: column;
      grid-auto-columns: minmax(214px, 72vw);
      grid-template-columns: none;
      gap: 14px;
    }
    .team-profile-card {
      width: 100%;
      justify-self: stretch;
      scroll-snap-align: center;
    }
    .team-profile-content {
      min-height: 340px;
      padding: 18px 16px;
      gap: 12px;
    }
    .team-avatar {
      width: 58px;
      border-width: 4px;
      box-shadow: inset 0 0 0 4px rgba(0,0,0,.82), 0 14px 24px rgba(0,0,0,.24);
    }
    .team-avatar span {
      font-size: 18px;
    }
    .team-profile-copy h3 {
      font-size: 19px;
    }
    .team-profile-copy p {
      font-size: 13px;
    }
    .team-profile-code {
      font-size: 36px;
    }
    .hero-project-card { min-width: min(78vw, 300px); scroll-snap-align: start; }
    .project-grid, .card-grid, .metric-grid, .mini-projects, .vertical-grid, .cta-grid { grid-template-columns: 1fr; }
    .architecture-graph,
    .case-grid,
    .qishu-video-grid { grid-template-columns: 1fr; }
    .section.qishu-video-section > h2 {
      white-space: normal;
    }
    .architecture-lines { display: none; }
    .architecture-node { min-height: 0; }
    .architecture-node > span { margin-bottom: 24px; }
    .process-flow { grid-template-columns: 1fr; }
    .process-node:not(:last-child)::after { top: auto; right: auto; left: 32px; bottom: -10px; width: 1px; height: 10px; }
    .vertical-card { min-height: 0; }
    .vertical-card:nth-child(5) { grid-column: auto; }
    .special-project { grid-template-columns: 1fr; align-items: start; }
    .section { padding: 68px 0; }
    .cad-model-story {
      min-height: auto;
      margin-bottom: 0;
      padding: 68px 0;
    }
    .cad-model-story__sticky {
      position: relative;
      top: auto;
      min-height: auto;
      grid-template-columns: 1fr;
      width: calc(100% - 24px);
      padding: 0;
    }
    .cad-model-story__left h2 { font-size: clamp(34px, 8vw, 58px); }
    .cad-model-visual { min-height: clamp(480px, 68vh, 620px); }
    .cad-model-visual__stage { inset: 54px 12px 72px; }
    .cad-room { width: min(76%, 420px); }
    .cad-unfold { grid-template-columns: repeat(3, minmax(50px, 62px)); right: 8px; bottom: 72px; }
    .cad-export { left: 12px; right: 12px; }
  }
  @media (max-width: 560px) {
    .site-header { min-height: 68px; padding: 0 var(--site-rail); }
    .brand-logo { height: 22px; max-width: 132px; }
    .hero { padding: 88px 0 34px; }
    .home-hero { padding-top: 82px; }
    .eyebrow { margin-bottom: 16px; }
    .hero h1 { font-size: clamp(24px, 6.75vw, 32px); line-height: 1; letter-spacing: .01em; }
    .hero-copy { gap: 20px; margin-top: 26px; }
    .hero-copy p { width: 100%; font-size: 14px; line-height: 1.82; letter-spacing: .04em; }
    .hero-actions { display: grid; justify-content: stretch; width: 100%; max-width: 360px; }
    .hero-projects { margin-top: 22px; }
    .hero-project-card { min-height: 148px; }
    .cad-model-story { padding: 58px 0; }
    [data-cad-step] { grid-template-columns: 40px 1fr; transform: none; }
    [data-cad-step].is-active { transform: translateX(0); }
    .cad-model-visual { min-height: 500px; }
    .cad-plan-svg { width: min(98%, 520px); }
    .cad-label { display: none; }
    .cad-unfold { grid-template-columns: repeat(3, 48px); gap: 6px; right: 6px; }
    .cad-face { font-size: 8px; }
    .cad-export > span { padding: 6px 8px; font-size: 9px; }
    .cad-export-card { width: 100%; }
    .button { width: 100%; }
    .timeline-item { grid-template-columns: 1fr; }
  }
  /* Borderless editorial system */
  :root {
    --container-max: 1520px;
    --section-x: var(--site-rail);
    --section-y: clamp(96px, 14vw, 220px);
    --fg: #f5f5f2;
    --grid: rgba(255,255,255,.08);
    --muted: rgba(255,255,255,.68);
    --soft: rgba(255,255,255,.42);
  }
  .hero-inner,
  .section,
  .footer-inner {
    width: min(var(--container-max), calc(100% - var(--section-x) * 2));
    margin-left: auto;
    margin-right: auto;
  }
  .hero .hero-inner {
    width: min(1680px, calc(100% - var(--section-x) * 2));
  }
  .section {
    position: relative;
    width: min(var(--container-max), calc(100% - var(--section-x) * 2));
    padding: var(--section-y) 0;
    text-align: left;
  }
  .section::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(245,155,50,.3), transparent);
    opacity: .56;
    pointer-events: none;
  }
  .vertical-scroll-story {
    position: relative;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    overflow: visible;
  }
  .vertical-scroll-panel {
    width: 100vw;
    max-width: none;
    min-height: 100svh;
    margin: 0;
    padding: clamp(92px, 10vh, 132px) var(--section-x) clamp(52px, 7vh, 86px);
    overflow: hidden;
  }
  .vertical-scroll-panel::after {
    left: var(--section-x);
    right: var(--section-x);
  }
  .vertical-scroll-panel > .section-kicker,
  .vertical-scroll-panel > h2,
  .vertical-scroll-panel > .section-lead {
    max-width: 860px;
  }
  .section > .section-kicker,
  .section > h2,
  .section > .section-lead {
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .section-kicker {
    color: var(--accent);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .08em;
  }
  .section h2 {
    margin-bottom: clamp(20px, 2.8vw, 34px);
    color: var(--fg);
    font-size: clamp(48px, 7vw, 96px);
    line-height: .96;
  }
  .section-lead {
    max-width: 860px;
    color: rgba(255,255,255,.72);
    font-size: clamp(16px, 1.18vw, 20px);
    line-height: 1.72;
  }
  .hero h1 {
    font-size: clamp(64px, 10vw, 160px);
    letter-spacing: clamp(.012em, .09vw, .06em);
  }
  .hero:not(.home-hero) .hero-title {
    max-width: min(1480px, 100%);
    font-size: clamp(48px, 7vw, 112px);
    line-height: .92;
    letter-spacing: clamp(.004em, .055vw, .04em);
    white-space: nowrap;
    text-wrap: normal;
    word-break: keep-all;
    overflow-wrap: normal;
  }
  .hero:not(.home-hero) .hero-title .thin {
    display: inline-block;
    max-width: 100%;
  }
  .hero-copy {
    margin-top: clamp(42px, 6vh, 88px);
    gap: clamp(28px, 3.6vh, 48px);
  }
  .hero-copy p {
    max-width: 860px;
    color: rgba(255,255,255,.74);
    line-height: 1.86;
  }
  .hero-projects {
    width: 100%;
    max-width: min(1420px, 100%);
    margin-top: clamp(62px, 8vh, 118px);
    display: grid;
    grid-template-columns: 1.35fr .9fr 1.1fr .85fr 1fr;
    align-items: end;
    gap: clamp(22px, 3.2vw, 58px);
  }
  .hero-project-card {
    min-height: auto;
    padding: clamp(16px, 1.4vw, 22px) 0 0;
    border: 0 !important;
    border-radius: 0;
    background: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
  .hero-project-card:nth-child(2),
  .hero-project-card:nth-child(4) {
    margin-top: clamp(38px, 6vw, 102px);
  }
  .hero-project-card:hover,
  .hero-project-card:focus-visible {
    background: transparent !important;
    border-color: transparent !important;
    filter: brightness(1.16);
  }
  .hero-project-card strong {
    font-size: clamp(24px, 2.2vw, 42px);
    line-height: 1;
    display: block;
    max-width: min(100%, 14ch);
    text-wrap: balance;
    word-break: keep-all;
    overflow-wrap: normal;
  }
  .hero-project-card p {
    max-width: 18em;
    color: rgba(255,255,255,.62);
    font-size: clamp(13px, .9vw, 15px);
    line-height: 1.64;
  }
  .hero-project-list.circular-gallery {
    width: min(100vw, 1480px);
    max-width: none;
    height: var(--gallery-viewport-height);
    margin-top: clamp(44px, 6vh, 86px);
    overflow: hidden;
    cursor: grab;
  }
  .hero-projects.circular-gallery-track {
    display: flex;
    grid-template-columns: none;
    align-items: flex-end;
    justify-content: flex-start;
    gap: clamp(18px, 2.2vw, 34px);
    width: max-content;
    max-width: none;
    margin-top: 0;
    will-change: transform;
  }
  .hero-project-card.circular-gallery-item {
    flex: 0 0 var(--gallery-card-width);
    width: var(--gallery-card-width);
    height: var(--gallery-card-height);
    min-width: 0;
    margin-top: 0;
  }
  .project-grid,
  .card-grid,
  .metric-grid {
    gap: clamp(34px, 5vw, 82px);
    align-items: start;
  }
  .card-grid {
    grid-template-columns: minmax(0, 1.35fr) minmax(0, .85fr) minmax(0, 1.05fr);
  }
  .metric-grid {
    grid-template-columns: minmax(0, 1.18fr) minmax(0, .82fr) minmax(0, 1fr);
  }
  .project-grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, .9fr) minmax(0, 1fr);
  }
  .harness-card-list .card-grid {
    grid-template-columns: 1.18fr .86fr .98fr 1.08fr;
    gap: clamp(28px, 3.6vw, 64px);
  }
  .ecosystem-card-list .card-grid,
  .team-card-list .card-grid {
    grid-template-columns: 1.2fr .92fr 1.04fr .82fr;
  }
  .advisor-card-list .card-grid {
    grid-template-columns: minmax(0, .86fr) minmax(0, 1.14fr);
    gap: clamp(46px, 7vw, 118px);
  }
  .card-grid [data-animated-list-item]:nth-child(3n+2),
  .project-grid [data-animated-list-item]:nth-child(3n+2),
  .metric-grid [data-animated-list-item]:nth-child(3n+2) {
    margin-top: clamp(36px, 5vw, 88px);
  }
  .card-grid [data-animated-list-item]:nth-child(3n),
  .project-grid [data-animated-list-item]:nth-child(3n),
  .metric-grid [data-animated-list-item]:nth-child(3n) {
    margin-top: clamp(12px, 2vw, 40px);
  }
  .harness-detail-section .harness-card-list .card-grid [data-animated-list-item],
  .harness-detail-section .harness-card-list .card-grid [data-animated-list-item]:nth-child(3n+2),
  .harness-detail-section .harness-card-list .card-grid [data-animated-list-item]:nth-child(3n) {
    margin-top: 0;
    align-self: start;
  }
  .info-card,
  .metric,
  .project-card,
  .timeline-item,
  .quote-panel,
  .vertical-card,
  .special-project,
  .mini-projects a {
    min-height: auto;
    padding: 0;
    border: 0 !important;
    border-radius: 0;
    background: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    text-align: left;
  }
  .info-card::before,
  .metric::before,
  .project-card::before,
  .vertical-card::before,
  .mini-projects a::before {
    content: "";
    display: block;
    width: clamp(34px, 4.4vw, 82px);
    height: 1px;
    margin-bottom: clamp(16px, 1.8vw, 28px);
    background: linear-gradient(90deg, rgba(245,155,50,.78), rgba(245,155,50,0));
  }
  .info-card h3,
  .project-card h3,
  .metric strong {
    margin-top: clamp(12px, 1.4vw, 18px);
  }
  .info-card p,
  .project-card p,
  .metric p,
  .vertical-card p {
    color: rgba(255,255,255,.68);
    line-height: 1.72;
  }
  .process-flow {
    position: relative;
    gap: 0;
    margin-top: clamp(54px, 7vw, 104px);
    padding-top: clamp(22px, 2.2vw, 34px);
  }
  .process-flow::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(245,155,50,.7), rgba(255,255,255,.18), transparent);
  }
  .process-node {
    min-height: auto;
    padding: 0 clamp(14px, 1.8vw, 26px) 0 0;
    border: 0 !important;
    border-radius: 0;
    background: transparent !important;
    box-shadow: none !important;
  }
  .harness-detail-section .process-flow [data-animated-list-item].is-list-selected {
    border-color: transparent !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  .process-node::before {
    content: "";
    position: absolute;
    top: calc(clamp(22px, 2.2vw, 34px) * -1 - 3px);
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 22px rgba(245,155,50,.45);
  }
  .process-node:not(:last-child)::after {
    display: none;
  }
  .process-node > span {
    display: block;
    width: auto;
    height: auto;
    margin-bottom: clamp(16px, 1.8vw, 26px);
    color: var(--accent);
    background: transparent;
    border-radius: 0;
    place-items: initial;
  }
  .process-node strong {
    font-size: clamp(16px, 1.18vw, 21px);
  }
  .animated-list-gradient {
    display: none;
  }
  .team-profile-board {
    width: min(var(--container-max), calc(100% - var(--section-x) * 2));
    margin-top: clamp(64px, 8vw, 136px);
    overflow: visible;
  }
  .team-profile-row {
    grid-template-columns: repeat(var(--team-count), minmax(0, 1fr));
    gap: clamp(28px, 2.6vw, 56px);
    align-items: start;
  }
  .team-profile-card:nth-child(even) {
    margin-top: clamp(42px, 6vw, 108px);
  }
  .pc-card {
    min-height: clamp(430px, 27vw, 520px);
    border: 0 !important;
    border-radius: 0;
    background: transparent !important;
    box-shadow: none !important;
    overflow: visible;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
  .pc-card-wrapper.active .pc-card {
    border-color: transparent;
  }
  .pc-behind {
    inset: -34%;
    opacity: calc(.38 * var(--card-opacity));
  }
  .pc-shine,
  .pc-glare {
    opacity: calc(var(--card-opacity) * .42);
  }
  .team-profile-content {
    min-height: clamp(430px, 27vw, 520px);
    padding: 0;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
  }
  #collaborative-research-team .team-profile-content,
  #collaborative-research-team .pc-card {
    min-height: clamp(540px, 33vw, 640px);
  }
  .team-profile-copy {
    text-align: left;
  }
  .team-profile-copy span {
    color: rgba(255,255,255,.42);
    letter-spacing: .14em;
  }
  .team-profile-copy h3 {
    color: rgba(245,245,242,.78);
    font-size: clamp(23px, 1.7vw, 34px);
  }
  .team-profile-copy p {
    color: rgba(255,255,255,.9);
    line-height: 1.5;
  }
  .team-profile-divider {
    width: 100%;
    background: linear-gradient(90deg, rgba(245,155,50,.42), transparent);
    opacity: .5;
  }
  .team-profile-code {
    align-self: flex-start;
    color: rgba(255,255,255,.92);
    font-size: clamp(46px, 5vw, 96px);
    letter-spacing: .02em;
  }
  .team-profile-board.chroma-grid {
    position: relative;
    isolation: isolate;
    --x: 50%;
    --y: 50%;
    --r: 300px;
    width: min(calc(100vw - 32px), 1840px);
    max-width: none;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: clamp(8px, 1vw, 16px);
    box-sizing: border-box;
  }
  .team-profile-board.chroma-grid .team-profile-row {
    position: relative;
    z-index: 1;
    justify-content: center;
    gap: clamp(12px, 1vw, 18px);
  }
  .team-profile-card.chroma-card {
    --mouse-x: 50%;
    --mouse-y: 50%;
    --spotlight-color: rgba(239,68,68,.32);
    border-radius: 20px;
    transition: filter .3s ease, transform .3s ease;
  }
  .team-profile-card.chroma-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    border-radius: 20px;
    background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%);
    opacity: 0;
    transition: opacity .5s ease;
  }
  .team-profile-card.chroma-card:hover::before,
  .team-profile-card.chroma-card.active::before {
    opacity: 1;
  }
  .team-profile-card.chroma-card:hover {
    filter: brightness(1.08);
  }
  .team-profile-board.chroma-grid .team-profile-card:nth-child(even) {
    margin-top: 0;
  }
  .team-profile-card .pc-card {
    min-height: auto;
    border: 1px solid #333 !important;
    border-radius: 20px;
    overflow: hidden;
    background: var(--card-gradient) !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
  .team-profile-card.has-profile-hover-image .pc-card::before,
  .team-profile-card.has-profile-hover-image .pc-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 320ms var(--ease-out-soft), transform 520ms var(--ease-out-soft);
  }
  .team-profile-card.has-profile-hover-image .pc-card::before {
    z-index: 0;
    background-image: var(--profile-hover-image);
    background-size: cover;
    background-position: center top;
    transform: scale(1.04);
    filter: saturate(1.06) contrast(1.04) brightness(.92);
  }
  .team-profile-card.has-profile-hover-image .pc-card::after {
    z-index: 1;
    background:
      linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,.16) 46%, rgba(0,0,0,.62)),
      linear-gradient(90deg, rgba(0,0,0,.20), rgba(0,0,0,.04) 46%, rgba(0,0,0,.18));
  }
  .team-profile-card.has-profile-hover-image:hover .pc-card::before,
  .team-profile-card.has-profile-hover-image.active .pc-card::before,
  .team-profile-card.has-profile-hover-image:hover .pc-card::after,
  .team-profile-card.has-profile-hover-image.active .pc-card::after {
    opacity: 1;
  }
  .team-profile-card.has-profile-hover-image:hover .pc-card::before,
  .team-profile-card.has-profile-hover-image.active .pc-card::before {
    transform: scale(1);
  }
  .team-profile-card.chroma-card:hover .pc-card,
  .team-profile-card.chroma-card.active .pc-card {
    border-color: var(--card-border) !important;
  }
  .team-profile-card .pc-inside {
    position: relative;
    inset: auto;
    z-index: 2;
    display: flex;
    min-height: clamp(420px, 34vw, 620px);
    flex-direction: column;
  }
  .team-profile-image-wrap {
    position: relative;
    z-index: 1;
    flex: 0 0 auto;
    min-height: 0;
    padding: 10px;
    box-sizing: border-box;
    background: transparent;
    aspect-ratio: 1122 / 1402;
  }
  .team-profile-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 10px;
  }
  .team-profile-image-wrap--fallback {
    display: grid;
    min-height: clamp(150px, 13vw, 230px);
    place-items: center;
    aspect-ratio: 4 / 3;
    transition: opacity 260ms var(--ease-out-soft), transform 320ms var(--ease-out-soft);
  }
  .team-profile-card.has-profile-hover-image:hover .team-profile-image-wrap--fallback,
  .team-profile-card.has-profile-hover-image.active .team-profile-image-wrap--fallback {
    opacity: 0;
    transform: translateY(-10px) scale(.92);
  }
  #collaborative-research-team .team-profile-image-wrap--fallback {
    min-height: clamp(92px, 7vw, 140px);
    aspect-ratio: auto;
  }
  .team-profile-content.chroma-info {
    position: relative;
    z-index: 5;
    display: grid;
    min-height: 0;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
    gap: .25rem .75rem;
    padding: .75rem 1rem 1rem;
    color: #fff;
    text-align: left;
  }
  .team-profile-content.chroma-info .team-profile-copy {
    text-align: left;
  }
  .team-profile-content.chroma-info .team-profile-copy span {
    margin-bottom: .35rem;
    color: rgba(255,255,255,.58);
  }
  .team-profile-content.chroma-info .team-profile-copy h3 {
    margin: 0 0 .35rem;
    color: #fff;
    font-size: clamp(20px, 1.35vw, 28px);
  }
  .team-profile-content.chroma-info .team-profile-copy p {
    color: rgba(255,255,255,.72);
    font-size: clamp(12px, .76vw, 15px);
    line-height: 1.38;
  }
  .team-profile-card.has-profile-hover-image:hover .team-profile-content.chroma-info,
  .team-profile-card.has-profile-hover-image.active .team-profile-content.chroma-info {
    text-shadow: 0 2px 18px rgba(0,0,0,.72);
  }
  .team-profile-card.has-profile-hover-image:hover .team-profile-code,
  .team-profile-card.has-profile-hover-image.active .team-profile-code {
    opacity: .42;
  }
  .team-profile-content.chroma-info .team-profile-code {
    align-self: end;
    justify-self: end;
    color: rgba(255,255,255,.92);
    font-size: clamp(28px, 2.6vw, 54px);
    line-height: .9;
  }
  .chroma-overlay,
  .chroma-fade {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    backdrop-filter: grayscale(1) brightness(.78);
    -webkit-backdrop-filter: grayscale(1) brightness(.78);
    background: rgba(0,0,0,.001);
  }
  .chroma-overlay {
    mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 15%, rgba(0,0,0,.1) 30%, rgba(0,0,0,.22) 45%, rgba(0,0,0,.35) 60%, rgba(0,0,0,.5) 75%, rgba(0,0,0,.68) 88%, white 100%);
    -webkit-mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 15%, rgba(0,0,0,.1) 30%, rgba(0,0,0,.22) 45%, rgba(0,0,0,.35) 60%, rgba(0,0,0,.5) 75%, rgba(0,0,0,.68) 88%, white 100%);
  }
  .chroma-fade {
    z-index: 4;
    opacity: 1;
    transition: opacity .25s ease;
    mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 15%, rgba(255,255,255,.9) 30%, rgba(255,255,255,.78) 45%, rgba(255,255,255,.65) 60%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.32) 88%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 15%, rgba(255,255,255,.9) 30%, rgba(255,255,255,.78) 45%, rgba(255,255,255,.65) 60%, rgba(255,255,255,.5) 75%, rgba(255,255,255,.32) 88%, transparent 100%);
  }
  .vertical-grid {
    display: grid;
    grid-template-columns: 1.35fr .98fr 1.2fr .95fr 1.12fr;
    gap: clamp(30px, 4.4vw, 78px);
    align-items: start;
    margin-top: clamp(62px, 7vw, 108px);
  }
  .vertical-card {
    min-height: auto;
  }
  .vertical-card:nth-child(even) {
    margin-top: clamp(36px, 5vw, 94px);
  }
  .vertical-card .keyword-line {
    border-top: 0;
    margin-top: clamp(24px, 3vw, 46px);
    padding-top: 0;
  }
  .vertical-card h3,
  .project-card h3 {
    max-width: min(100%, 16ch);
    text-wrap: balance;
    word-break: keep-all;
    overflow-wrap: normal;
  }
  .special-project {
    margin-top: clamp(54px, 6vw, 96px);
  }
  .mini-projects {
    grid-template-columns: 1.16fr .9fr 1.02fr;
    gap: clamp(28px, 4vw, 72px);
  }
  .contact-cta {
    max-width: min(1120px, calc(100% - var(--section-x) * 2));
  }
  .footer-band {
    border-top: 0;
  }
  .footer-inner {
    grid-template-columns: minmax(0, 1.08fr) minmax(320px, 430px);
    gap: clamp(56px, 8vw, 148px);
  }
  .contact-stack {
    gap: clamp(18px, 2vw, 30px);
  }
  .contact-stack a {
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    min-height: auto;
    padding: clamp(18px, 2vw, 28px) 0;
    border: 0 !important;
    border-radius: 0;
    background: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
  .contact-stack a:hover,
  .contact-stack a:focus-visible {
    background: transparent !important;
    border-color: transparent !important;
    filter: brightness(1.18);
  }
  .footer-wordmark {
    opacity: .82;
  }
  .logoloop {
    --logoloop-gap: clamp(58px, 7vw, 126px);
    --logoloop-logoWidth: clamp(144px, 11.2vw, 214px);
    --logoloop-logoHeight: clamp(38px, 3.2vw, 60px);
    --logoloop-shellHeight: clamp(68px, 5.4vw, 96px);
    max-width: min(var(--container-max), 100%);
    margin-top: clamp(66px, 7vw, 118px);
  }
  .logoloop__logo-shell {
    width: var(--logoloop-logoWidth);
    height: var(--logoloop-shellHeight);
    padding: 0;
    border: 1px solid rgba(255,255,255,.22) !important;
    border-radius: 8px;
    background: #000 !important;
    box-shadow: none !important;
  }
  .logoloop__item img {
    width: 100%;
    height: var(--logoloop-logoHeight);
    opacity: .78;
    mix-blend-mode: screen;
    filter: grayscale(1) invert(1) brightness(1.72) contrast(1.12);
  }
  .logoloop--scale-hover .logoloop__item:hover .logoloop__logo-shell {
    border-color: rgba(245,155,50,.7);
    background: #000;
    transform: scale(1.1);
    box-shadow: 0 0 28px rgba(245,155,50,.2) !important;
  }
  .logoloop--scale-hover .logoloop__item:hover img {
    opacity: .96;
    filter: grayscale(1) invert(1) brightness(1.96) contrast(1.18);
  }
  .logoloop__item img[src="assets/logo-cta-town-design.png"] {
    transform: scale(2.15);
    transform-origin: center center;
  }
  .logoloop--scale-hover .logoloop__item:hover img[src="assets/logo-cta-town-design.png"] {
    transform: scale(2.24);
  }

  /* Screenshot layout refinements */
  .hero-project-list.circular-gallery {
    --gallery-card-width: clamp(196px, 14vw, 248px);
    --gallery-card-height: clamp(118px, 12vh, 150px);
    --gallery-viewport-height: calc(var(--gallery-card-height) + clamp(10px, 2vh, 24px));
    width: min(100vw, 1040px);
    margin-top: clamp(12px, 2vh, 26px);
  }
  .hero-projects.circular-gallery-track {
    bottom: clamp(2px, .8vh, 8px);
    gap: clamp(10px, 1.25vw, 18px);
  }
  .hero-project-card.circular-gallery-item {
    padding: clamp(10px, .85vw, 14px);
    gap: 5px;
    min-width: 0;
  }
  .hero-project-card.circular-gallery-item span {
    font-size: 10px !important;
    line-height: 1.2 !important;
  }
  .hero-project-card.circular-gallery-item strong {
    display: block;
    width: 100%;
    max-width: 100%;
    font-size: clamp(15px, 1.15vw, 20px) !important;
    line-height: 1.15 !important;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  .hero-project-card.circular-gallery-item small {
    width: 100%;
    font-size: 12px !important;
    line-height: 1.25 !important;
    white-space: normal;
  }
  .hero-project-card.circular-gallery-item p {
    display: -webkit-box;
    width: 100%;
    max-width: 12em;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
    font-size: 11px !important;
    line-height: 1.35 !important;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .vertical-scroll-panel {
    padding-top: clamp(82px, 8.5vh, 112px);
    padding-bottom: clamp(34px, 5vh, 66px);
  }
  .harness-section {
    justify-items: center;
  }
  .harness-section .harness-copy {
    width: 100%;
    max-width: none;
    margin: 0 auto;
    text-align: center;
  }
  .harness-section .section-kicker,
  .harness-section h2,
  .harness-section .section-lead,
  .harness-section .harness-copy > p:not(.section-kicker):not(.section-lead) {
    max-width: min(1120px, 100%);
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .harness-section .section-lead.scroll-float--inline,
  .harness-section .harness-copy > p:not(.section-kicker):not(.section-lead).scroll-float--inline {
    display: block;
  }
  .harness-section .section-lead {
    max-width: min(760px, 100%);
    margin-top: clamp(20px, 2.8vh, 34px);
  }
  .harness-section .harness-copy > p:not(.section-kicker):not(.section-lead) {
    max-width: min(1120px, 100%);
    margin-top: clamp(26px, 4vh, 48px);
    text-align: center;
  }
  .vertical-scroll-panel > .scroll-float:not(.scroll-float--inline),
  .vertical-scroll-panel .harness-copy > .scroll-float:not(.scroll-float--inline) {
    width: min(calc(100vw - var(--section-x) * 2), 1760px);
    max-width: none;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    white-space: nowrap;
    font-size: min(clamp(52px, 9.2vw, 154px), var(--scroll-float-fit-size, 999px));
    line-height: .86;
  }
  .vertical-scroll-panel > .scroll-float:not(.scroll-float--inline) .scroll-float-text,
  .vertical-scroll-panel .harness-copy > .scroll-float:not(.scroll-float--inline) .scroll-float-text {
    white-space: nowrap;
  }
  .harness-detail-section {
    display: grid;
    grid-template-rows: auto auto auto;
    align-content: center;
    justify-content: stretch;
    gap: clamp(22px, 3vh, 34px);
  }
  .harness-detail-section .harness-card-list,
  .harness-detail-section .process-flow {
    width: 100%;
  }
  .harness-detail-section .harness-card-list .card-grid,
  .ecosystem-card-list .card-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(26px, 3.2vw, 56px);
    align-items: start;
  }
  .harness-detail-section .harness-card-list .card-grid [data-animated-list-item],
  .ecosystem-card-list .card-grid [data-animated-list-item],
  .ecosystem-card-list .card-grid [data-animated-list-item]:nth-child(3n+2),
  .ecosystem-card-list .card-grid [data-animated-list-item]:nth-child(3n) {
    margin-top: 0;
  }
  .harness-detail-section .info-card::before,
  .ecosystem-section .info-card::before,
  .advisor-section .info-card::before,
  .vertical-card::before {
    display: none;
  }
  .harness-detail-section > .section-lead {
    width: min(960px, 100%);
    margin: 0 auto;
  }
  .harness-detail-section .process-flow {
    gap: clamp(10px, .9vw, 16px);
    margin-top: clamp(16px, 2vh, 28px);
    padding-top: 0;
  }
  .harness-detail-section .process-flow::before {
    display: none;
  }
  .harness-detail-section .harness-card-list .info-card {
    position: relative;
    min-height: clamp(150px, 11vw, 188px);
    padding: clamp(18px, 1.5vw, 26px);
    border: 1px solid rgba(255,255,255,.24) !important;
    border-radius: 8px;
    background: rgba(0,0,0,.18) !important;
    box-shadow: none !important;
    overflow: hidden;
  }
  .harness-detail-section .harness-card-list .info-card h3 {
    width: fit-content;
    max-width: 100%;
    margin: clamp(8px, .75vw, 12px) auto 12px;
    text-align: center;
    color: #fff;
    font-size: clamp(26px, 2.15vw, 38px);
    line-height: 1.05;
  }
  .harness-detail-section .harness-card-list .info-card > span {
    display: block;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: var(--accent);
    font-size: clamp(13px, .9vw, 16px);
    font-weight: 850;
    letter-spacing: .06em;
  }
  .harness-detail-section .harness-card-list .info-card p {
    color: #fff;
    font-size: clamp(15px, 1vw, 18px);
    line-height: 1.58;
    font-weight: 720;
  }
  .harness-detail-section .harness-card-list .info-card h3 .scroll-float-text,
  .harness-detail-section .harness-card-list .info-card h3 .char,
  .harness-detail-section .harness-card-list .info-card p .scroll-float-text,
  .harness-detail-section .harness-card-list .info-card p .char {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: none;
  }
  .harness-detail-section .process-node {
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: clamp(84px, 5.6vw, 108px);
    padding: clamp(12px, .9vw, 16px);
    border: 1px solid rgba(255,255,255,.22) !important;
    border-radius: 8px;
    background: rgba(0,0,0,.12) !important;
    box-shadow: none !important;
  }
  .harness-detail-section .process-node > span {
    margin-bottom: clamp(8px, .75vw, 12px);
    font-size: clamp(10px, .68vw, 12px);
  }
  .harness-detail-section .process-node strong {
    color: #fff;
    font-size: clamp(13px, .9vw, 16px);
    line-height: 1.2;
  }
  .harness-detail-section .process-node strong .scroll-float-text,
  .harness-detail-section .process-node strong .char {
    color: inherit;
  }
  .harness-detail-section .process-flow [data-animated-list-item].is-list-selected {
    border-color: rgba(245,155,50,.82) !important;
    background: rgba(0,0,0,.16) !important;
    box-shadow: 0 0 26px rgba(245,155,50,.38), inset 0 0 0 1px rgba(245,155,50,.28) !important;
    filter: brightness(1.16);
  }
  .ecosystem-section,
  .team-section,
  .advisor-section,
  #projects,
  .contact-cta {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  .ecosystem-section {
    gap: clamp(20px, 2.6vh, 36px);
  }
  .ecosystem-section .section-lead {
    width: min(1240px, calc(100vw - var(--section-x) * 2));
    max-width: min(1240px, calc(100vw - var(--section-x) * 2));
    margin-bottom: clamp(8px, 1vh, 14px);
    font-size: clamp(17px, 1vw, 19px);
    line-height: 1.5;
    word-break: normal;
    overflow-wrap: normal;
  }
  .ecosystem-card-list {
    width: min(100%, 1460px);
    margin: 0 auto;
  }
  .ecosystem-card-list .card-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(18px, 2.4vw, 42px);
    align-items: stretch;
  }
  .ecosystem-card-list .info-card {
    --tilt-lift: 0px;
    display: flex;
    min-height: clamp(220px, 26vh, 310px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: clamp(22px, 2vw, 34px) clamp(24px, 2.2vw, 38px);
    border: 1px solid rgba(255,255,255,.22) !important;
    border-radius: 8px;
    background: rgba(0,0,0,.14) !important;
    box-shadow: none !important;
    overflow: hidden;
    transition:
      transform .26s cubic-bezier(.4,0,.2,1),
      border-color .22s ease,
      background .22s ease,
      box-shadow .22s ease,
      filter .22s ease;
  }
  .ecosystem-card-list .info-card:hover,
  .ecosystem-card-list .info-card:focus-within {
    --tilt-lift: -3px;
    --animated-scale: 1.012;
    border-color: rgba(245,155,50,.82) !important;
    background:
      radial-gradient(circle at 18% 0%, rgba(245,155,50,.2), transparent 46%),
      rgba(0,0,0,.3) !important;
    box-shadow: 0 0 30px rgba(245,155,50,.24), inset 0 0 0 1px rgba(245,155,50,.22) !important;
    filter: brightness(1.12);
  }
  .ecosystem-card-list .info-card > span {
    color: var(--accent);
    font-size: clamp(18px, 1.08vw, 20px);
    font-weight: 860;
    line-height: 1.2;
  }
  .ecosystem-card-list .info-card h3,
  .ecosystem-card-list .info-card p {
    color: #fff;
    max-width: 100%;
    white-space: normal;
    word-break: normal;
    overflow-wrap: anywhere;
  }
  .ecosystem-card-list .info-card h3 {
    margin: clamp(10px, 1vw, 16px) 0 clamp(10px, .85vw, 15px);
    font-size: clamp(28px, 1.72vw, 36px);
    line-height: 1.22;
  }
  .ecosystem-card-list .info-card p {
    font-size: clamp(15px, .9vw, 18px);
    font-weight: 720;
    line-height: 1.56;
  }
  .ecosystem-card-list .info-card > span .scroll-float-text,
  .ecosystem-card-list .info-card > span .char,
  .ecosystem-card-list .info-card h3 .scroll-float-text,
  .ecosystem-card-list .info-card h3 .char,
  .ecosystem-card-list .info-card p .scroll-float-text,
  .ecosystem-card-list .info-card p .char {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
  .ecosystem-card-list .info-card > span .scroll-float-text,
  .ecosystem-card-list .info-card h3 .scroll-float-text,
  .ecosystem-card-list .info-card p .scroll-float-text {
    display: inline;
  }
  .ecosystem-section .logoloop {
    margin-top: clamp(72px, 10vh, 132px);
  }
  .logoloop {
    --logoloop-gap: clamp(42px, 5vw, 88px);
    --logoloop-logoWidth: clamp(150px, 11vw, 220px);
    --logoloop-logoHeight: clamp(40px, 3vw, 58px);
    --logoloop-shellHeight: clamp(72px, 5.8vw, 102px);
    margin-top: clamp(30px, 4vh, 56px);
  }
  .logoloop__logo-shell {
    padding: clamp(10px, .9vw, 16px) clamp(15px, 1.1vw, 22px);
    border: 1px solid rgba(255,255,255,.22) !important;
    border-radius: 8px;
    background: #000 !important;
  }
  .team-section,
  .advisor-section {
    --profile-card-height: clamp(360px, 48vh, 500px);
  }
  .team-section > .section-kicker,
  .team-section > h2,
  .team-section > .section-lead,
  .advisor-section > .section-kicker,
  .advisor-section > h2,
  .advisor-section > .section-lead {
    flex: 0 0 auto;
  }
  .team-section h2,
  .advisor-section h2 {
    margin-bottom: clamp(14px, 1.8vh, 24px);
    font-size: clamp(48px, 5.8vw, 86px);
  }
  .team-section .section-lead,
  .advisor-section .section-lead {
    max-width: 860px;
  }
  .team-profile-board {
    margin-top: clamp(26px, 4vh, 54px);
  }
  .team-profile-board.chroma-grid {
    --r: 300px;
    width: min(calc(100vw - var(--section-x) * 2), 1560px);
    padding: clamp(6px, .7vw, 10px);
  }
  .team-profile-board.chroma-grid .team-profile-row {
    gap: clamp(10px, .8vw, 16px);
    align-items: stretch;
  }
  .team-profile-card .pc-card,
  .team-profile-card .pc-inside {
    height: var(--profile-card-height);
    min-height: 0;
  }
  .team-profile-card .pc-inside {
    display: flex;
    flex-direction: column;
  }
  .team-profile-image-wrap {
    flex: 1 1 auto;
    height: auto;
    min-height: 0;
    aspect-ratio: auto;
    overflow: hidden;
    padding: 8px 8px 0;
  }
  .team-profile-image {
    object-fit: contain;
  }
  .team-profile-image-wrap--fallback {
    flex: 1 1 auto;
    min-height: 0;
    aspect-ratio: auto;
  }
  .team-profile-content.chroma-info {
    flex: 0 0 auto;
    min-height: clamp(88px, 11vh, 118px);
    padding: .65rem .85rem .85rem;
  }
  #ai-research-team,
  #collaborative-research-team {
    justify-content: flex-start;
    padding-top: clamp(78px, 8vh, 104px);
  }
  #ai-research-team {
    --profile-card-height: clamp(640px, 72vh, 720px);
  }
  #ai-research-team .team-profile-board.chroma-grid {
    width: min(calc(100vw - var(--section-x) * 2), 1260px);
  }
  #ai-research-team .team-profile-board.chroma-grid .team-profile-row {
    gap: clamp(18px, 2vw, 32px);
  }
  #ai-research-team .team-profile-card .pc-inside {
    justify-content: flex-start;
    background: #050505;
  }
  #ai-research-team .team-profile-image-wrap {
    position: relative;
    inset: auto;
    z-index: 1;
    flex: 1 1 auto;
    width: 100%;
    height: auto;
    padding: 10px 10px 0;
    aspect-ratio: auto;
  }
  #ai-research-team .team-profile-image {
    object-fit: cover;
    object-position: center top;
    border-radius: 14px;
  }
  #ai-research-team .team-profile-content.chroma-info {
    flex: 0 0 clamp(220px, 25vh, 270px);
    display: flex;
    min-height: clamp(220px, 25vh, 270px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: clamp(10px, 1.2vh, 16px);
    overflow: visible;
    padding: clamp(16px, 2vh, 26px) clamp(20px, 1.8vw, 30px) clamp(24px, 3vh, 40px);
    border-top: 1px solid rgba(255,255,255,.12);
    background: #050505;
  }
  #ai-research-team .team-profile-content.chroma-info .team-profile-copy {
    display: grid;
    gap: clamp(6px, .7vh, 10px);
  }
  #ai-research-team .team-profile-content.chroma-info .team-profile-copy h3 {
    margin: 0;
  }
  #ai-research-team .team-profile-content.chroma-info .team-profile-copy p {
    margin: 0;
  }
  #ai-research-team .team-profile-content.chroma-info .team-profile-code {
    align-self: flex-start;
    justify-self: start;
    margin-top: clamp(8px, 1.2vh, 18px);
    color: rgba(255,255,255,.92);
    font-size: clamp(36px, 3.4vw, 58px);
    line-height: 1;
  }
  #collaborative-research-team {
    --profile-card-height: clamp(540px, 68vh, 680px);
  }
  #collaborative-research-team .team-profile-board {
    margin-top: clamp(18px, 3vh, 42px);
  }
  #collaborative-research-team .team-profile-image-wrap--fallback {
    flex: 0 0 clamp(88px, 11vh, 122px);
  }
  #collaborative-research-team .team-profile-content.chroma-info {
    display: grid;
    flex: 1 1 auto;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr) auto;
    align-items: stretch;
    gap: clamp(8px, 1vh, 14px);
    min-height: clamp(248px, 34vh, 360px);
    padding: clamp(16px, 1.35vw, 24px);
    overflow: visible;
  }
  #collaborative-research-team .team-profile-content,
  #collaborative-research-team .pc-card {
    min-height: 0;
  }
  #collaborative-research-team .team-profile-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: clamp(4px, .55vh, 8px);
    overflow: visible;
    text-align: left;
  }
  #collaborative-research-team .team-profile-role {
    display: block;
    margin: 0;
    white-space: normal;
    word-break: normal;
    overflow-wrap: break-word;
  }
  #collaborative-research-team .team-profile-copy h3 {
    margin: 0;
    word-break: normal;
    overflow-wrap: break-word;
  }
  #collaborative-research-team .team-profile-copy p {
    overflow: visible;
    word-break: normal;
    overflow-wrap: break-word;
  }
  #collaborative-research-team .team-profile-content.chroma-info .team-profile-copy p {
    font-size: clamp(10px, .66vw, 13px);
    line-height: 1.36;
  }
  #collaborative-research-team .team-profile-code {
    justify-self: end;
    align-self: end;
    font-size: clamp(28px, 2.25vw, 44px);
  }
  .advisor-section {
    --profile-card-height: clamp(340px, 44vh, 460px);
  }
  .advisor-section .team-profile-board.chroma-grid {
    width: min(820px, calc(100vw - var(--section-x) * 2));
  }
  .advisor-section .team-profile-image-wrap--fallback {
    flex: 0 0 clamp(112px, 15vh, 158px);
  }
  #projects {
    gap: clamp(18px, 2.4vh, 32px);
  }
  .vertical-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: clamp(26px, 3vw, 54px);
    align-items: stretch;
    margin-top: clamp(42px, 5vh, 64px);
  }
  .vertical-card,
  .vertical-card:nth-child(even) {
    min-height: clamp(228px, 30vh, 310px);
    margin-top: 0;
  }
  .vertical-card .keyword-line {
    margin-top: auto;
    padding-top: clamp(18px, 2vh, 30px);
  }
  .contact-cta {
    max-width: none;
    width: 100vw;
    margin-left: 0;
    align-items: center;
    gap: clamp(22px, 3vh, 42px);
  }
  .contact-cta .section-lead {
    max-width: 960px;
  }
  .contact-cta .cta-grid,
  .contact-cta .quote-panel {
    max-width: 880px;
  }
  .footer-band {
    padding: clamp(126px, 15vh, 168px) 0 clamp(18px, 3.2vh, 36px);
  }
  .footer-inner {
    width: calc(100vw - var(--site-rail) * 2);
    max-width: none;
    grid-template-columns: minmax(0, 1fr) minmax(360px, .62fr);
    align-self: start;
    margin: 0 auto;
    transform: translateY(clamp(24px, 4vh, 54px));
  }
  .footer-copy {
    max-width: none;
  }
  .footer-inner h2 {
    font-size: clamp(52px, 6.8vw, 108px);
  }
  .contact-stack {
    padding-top: clamp(42px, 7vh, 88px);
  }
  .footer-wordmark-logo.text-content {
    width: 100%;
  }
  @media (max-width: 900px) {
    :root {
      --section-x: var(--site-rail);
      --section-y: clamp(82px, 18vw, 132px);
    }
    .vertical-scroll-story {
      overflow: visible;
    }
    .vertical-scroll-panel {
      width: calc(100% - var(--section-x) * 2);
      min-height: 0;
      margin-left: auto;
      margin-right: auto;
      padding: var(--section-y) 0;
      overflow: visible;
    }
    .vertical-scroll-panel::after {
      left: 0;
      right: 0;
    }
    .hero-inner,
    .section,
    .footer-inner,
    .hero .hero-inner,
    .team-profile-board {
      width: calc(100% - var(--section-x) * 2);
    }
    .hero h1 {
      font-size: clamp(42px, 13vw, 86px);
      white-space: normal;
      text-wrap: balance;
    }
    .hero:not(.home-hero) .hero-title {
      max-width: calc(100vw - 16px);
      font-size: clamp(27px, 6vw, 44px);
      line-height: 1.05;
      letter-spacing: .015em;
      white-space: normal;
      text-wrap: balance;
    }
    .hero:not(.home-hero) .hero-title br {
      display: none;
    }
    .hero:not(.home-hero) .hero-title .thin::before {
      content: " ";
    }
    .hero-projects,
    .project-grid,
    .card-grid,
    .metric-grid,
    .harness-card-list .card-grid,
    .ecosystem-card-list .card-grid,
    .team-card-list .card-grid,
    .advisor-card-list .card-grid,
    .qishu-video-grid,
    .mini-projects,
    .vertical-grid,
    .team-profile-row,
    .footer-inner {
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(34px, 9vw, 64px);
      overflow: visible;
    }
    .hero-project-card,
    .hero-project-card:nth-child(2),
    .hero-project-card:nth-child(4),
    .card-grid [data-animated-list-item],
    .project-grid [data-animated-list-item],
    .metric-grid [data-animated-list-item],
    .vertical-card:nth-child(even),
    .team-profile-card:nth-child(even) {
      min-width: 0;
      margin-top: 0;
      scroll-snap-align: none;
    }
    .hero-project-list.circular-gallery {
      --gallery-card-width: min(78vw, 340px);
      --gallery-card-height: 196px;
      --gallery-viewport-height: calc(var(--gallery-card-height) + 30px);
      width: min(100vw, calc(100% + var(--section-x) * 2));
      height: var(--gallery-viewport-height);
      margin-left: calc(var(--section-x) * -1);
      margin-right: calc(var(--section-x) * -1);
      overflow: hidden;
      cursor: grab;
    }
    .hero-projects.circular-gallery-track {
      display: flex;
      grid-template-columns: none;
      gap: clamp(14px, 4vw, 24px);
      overflow: visible;
    }
    .hero-project-card.circular-gallery-item {
      flex-basis: min(72vw, 300px);
      width: min(72vw, 300px);
      height: var(--gallery-card-height);
      min-width: 0;
    }
    .team-profile-row {
      grid-auto-flow: row;
      grid-auto-columns: auto;
    }
    .team-profile-board {
      padding: 0;
      overflow: visible;
      scroll-snap-type: none;
    }
    .team-profile-content,
    #collaborative-research-team .team-profile-content,
    #collaborative-research-team .pc-card {
      min-height: auto;
      gap: clamp(20px, 6vw, 36px);
    }
    .process-flow {
      grid-template-columns: 1fr;
      gap: clamp(28px, 7vw, 44px);
      padding-top: 0;
      padding-left: 22px;
    }
    .process-flow::before {
      left: 0;
      right: auto;
      top: 0;
      bottom: 0;
      width: 1px;
      height: auto;
      background: linear-gradient(180deg, rgba(245,155,50,.7), rgba(255,255,255,.16), transparent);
    }
    .process-node::before {
      top: .45em;
      left: -22px;
    }
    .contact-stack a {
      grid-template-columns: 76px minmax(0, 1fr);
    }
    .logoloop {
      --logoloop-gap: 44px;
      max-width: 100%;
    }
  }
  @media (max-width: 560px) {
    :root {
      --section-x: var(--site-rail);
      --section-y: clamp(76px, 20vw, 116px);
    }
    .section h2 {
      font-size: clamp(38px, 13vw, 62px);
    }
    .section-lead,
    .hero-copy p {
      font-size: 14px;
      line-height: 1.72;
    }
    .hero-projects,
    .card-grid,
    .metric-grid,
    .vertical-grid,
    .team-profile-row {
      gap: 34px;
    }
    .team-avatar {
      width: clamp(66px, 20vw, 86px);
    }
    .team-profile-code {
      font-size: clamp(40px, 18vw, 72px);
    }
    .footer-inner h2 {
      font-size: clamp(36px, 13vw, 68px);
    }
    .contact-stack a {
      grid-template-columns: 1fr;
      gap: 6px;
    }
  }
  @media (max-width: 1180px) {
    .financing-section {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .financing-section__copy h2,
    .financing-hero-content h1 {
      white-space: normal;
      text-wrap: balance;
    }
    .financing-card-grid--five,
    .financing-card-grid--metrics,
    .financing-card-grid--appendix,
    .financing-flow,
    .financing-flow--six {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .financing-card-grid--seven,
    .financing-flow--seven {
      grid-template-columns: repeat(7, minmax(160px, 1fr));
      overflow-x: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
    }
    .qishu-revenue-map {
      grid-template-columns: 1fr;
    }
    .qishu-image-strip--quad,
    .qishu-revenue-lanes {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .qishu-flywheel {
      min-height: 680px;
    }
    .qishu-revenue-page--overview,
    .qishu-revenue-analytics,
    .qishu-revenue-detail-grid,
    .qishu-data-page--overview,
    .qishu-data-assets-grid {
      grid-template-columns: 1fr;
    }
    .qishu-revenue-metrics,
    .qishu-revenue-type-strip,
    .qishu-data-lift-band {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .qishu-data-flywheel-graphic.qishu-flywheel {
      min-height: 760px;
    }
    .qishu-revenue-type-strip article:nth-child(3) {
      border-left: 0;
      border-top: 1px solid rgba(255,255,255,.12);
    }
    .qishu-revenue-type-strip article:nth-child(4) {
      border-top: 1px solid rgba(255,255,255,.12);
    }
  }
  @media (max-width: 900px) {
    :root {
      --site-rail: clamp(18px, 5vw, 28px);
    }
    .page-financing,
    .page-qishu-ai {
      --financing-rail: var(--site-rail);
      scroll-snap-type: none;
    }
    .financing-section,
    .financing-hero-section {
      width: calc(100vw - var(--financing-rail) * 2);
      min-height: 0;
      padding: clamp(96px, 22vw, 138px) 0 clamp(54px, 15vw, 92px);
      grid-template-columns: 1fr;
    }
    .financing-hero-section {
      width: 100vw;
      padding-left: var(--financing-rail);
      padding-right: var(--financing-rail);
    }
    .financing-hero-content {
      width: 100%;
      min-width: 0;
      max-width: 100% !important;
    }
    .financing-hero-content > * {
      min-width: 0;
      max-width: 100%;
    }
    .financing-section__copy h2 {
      font-size: clamp(34px, 10vw, 56px);
      line-height: 1.06;
      white-space: normal;
      word-break: normal;
      overflow-wrap: anywhere;
      line-break: auto;
    }
    .page-qishu-ai .financing-hero-content h1 {
      font-size: clamp(42px, 12vw, 76px);
      white-space: normal;
      word-break: normal;
      overflow-wrap: anywhere;
      line-break: auto;
    }
    .page-qishu-ai .financing-hero-content .section-lead {
      display: block;
      overflow: visible;
      -webkit-line-clamp: initial;
    }
    .qishu-performance-summary {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .qishu-performance-summary article {
      border-top: 1px solid rgba(255,255,255,.14);
    }
    .qishu-performance-summary article:nth-child(odd) {
      border-left: 0;
    }
    .qishu-revenue-conclusions {
      grid-template-columns: minmax(0, 1fr);
    }
    .qishu-revenue-conclusions article,
    .qishu-revenue-conclusions article:first-of-type,
    .qishu-revenue-conclusions article:last-of-type {
      padding: 18px 0;
    }
    .qishu-revenue-conclusions article + article {
      border-top: 1px solid rgba(255,255,255,.1);
      border-left: 0;
    }
    .financing-section__copy .section-lead,
    .qishu-body-copy,
    .qishu-body-copy p {
      word-break: normal;
      overflow-wrap: anywhere;
      line-break: auto;
    }
    .financing-section__copy .section-lead,
    .financing-card p,
    .financing-mini-row p {
      display: block;
      overflow: visible;
      -webkit-line-clamp: initial;
    }
    .financing-card-grid,
    .financing-card-grid--five,
    .financing-card-grid--three,
    .financing-card-grid--four,
    .financing-card-grid--six,
    .financing-card-grid--metrics,
    .financing-card-grid--appendix,
    .financing-flow,
    .financing-flow--four,
    .financing-flow--six,
    .financing-flow--dense,
    .financing-mini-table,
    .financing-market-visual,
    .financing-compare,
    .qishu-image-strip,
    .qishu-image-strip--quad,
    .qishu-module-video,
    .qishu-demo-slot,
    .qishu-compare-chart,
    .qishu-revenue-lanes,
    .financing-output-stack {
      grid-template-columns: 1fr;
    }
    .financing-card-grid--seven,
    .financing-flow--seven {
      grid-template-columns: repeat(7, minmax(158px, 1fr));
      overflow-x: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
    }
    .financing-flow-node::after {
      display: none;
    }
    .qishu-demo-slot__flow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      min-height: 0;
    }
    .financing-orbit {
      min-height: 560px;
    }
    .financing-orbit__center {
      top: 34%;
      width: 150px;
      height: 150px;
    }
    .financing-orbit__node {
      width: 104px;
    }
    .financing-output-stack {
      bottom: 20px;
    }
    .qishu-funnel article {
      width: 100%;
    }
    .qishu-revenue-map {
      grid-template-columns: 1fr;
    }
    .qishu-revenue-section {
      padding: clamp(96px, 22vw, 138px) 0 clamp(64px, 16vw, 96px);
    }
    .qishu-data-flywheel-section {
      padding: clamp(96px, 22vw, 138px) 0 clamp(64px, 16vw, 96px);
    }
    .qishu-revenue-page__intro h2 {
      font-size: clamp(36px, 10vw, 58px);
      line-height: 1.06;
      overflow-wrap: anywhere;
    }
    .qishu-data-copy h2,
    .qishu-data-page__intro h2 {
      font-size: clamp(36px, 10vw, 58px);
      line-height: 1.08;
      overflow-wrap: anywhere;
    }
    .qishu-revenue-chart {
      min-height: 0;
      padding: 16px;
    }
    .qishu-revenue-chart header {
      display: grid;
      gap: 8px;
    }
    .qishu-revenue-chart header p {
      max-width: none;
      text-align: left;
    }
    .qishu-revenue-chart__plot {
      min-height: 420px;
      overflow-x: auto;
      padding-bottom: 112px;
    }
    .qishu-revenue-chart svg {
      width: 920px;
      max-width: none;
    }
    .qishu-revenue-chart__labels {
      width: 920px;
      right: auto;
    }
    .qishu-revenue-metrics,
    .qishu-revenue-type-strip,
    .qishu-revenue-donut-wrap,
    .qishu-revenue-sankey__stage,
    .qishu-revenue-value-note,
    .qishu-data-asset-list article,
    .qishu-data-lift-band,
    .qishu-data-barrier-strip,
    .qishu-data-value-conclusion {
      grid-template-columns: 1fr;
    }
    .qishu-data-asset-list article,
    .qishu-data-lift-band article,
    .qishu-data-barrier-strip article,
    .qishu-data-value-conclusion {
      align-items: start;
    }
    .qishu-data-page,
    .qishu-data-page--overview,
    .qishu-data-assets-grid,
    .qishu-data-page--overview > *,
    .qishu-data-assets-grid > * {
      min-width: 0;
    }
    .qishu-data-lift-band article + article {
      border-left: 0;
      border-top: 1px solid rgba(255,255,255,.12);
    }
    .qishu-data-flywheel-graphic.qishu-flywheel,
    .qishu-data-loop-graphic {
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 12px;
      scrollbar-width: thin;
    }
    .qishu-data-flywheel-orbit {
      width: 760px;
      max-width: none;
    }
    .qishu-data-assets-grid > div:first-child {
      overflow-x: auto;
      padding-bottom: 12px;
      scrollbar-width: thin;
    }
    .qishu-data-loop-graphic {
      min-height: 470px;
      width: 920px;
      min-width: 920px;
      max-width: none;
    }
    .qishu-data-flywheel-graphic.qishu-data-image--flywheel,
    .qishu-data-loop-graphic.qishu-data-image--loop {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      min-height: 0;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 12px;
      scrollbar-width: thin;
    }
    .qishu-data-image--flywheel img {
      width: 720px;
      max-width: none;
    }
    .qishu-data-image--loop img {
      width: 920px;
      max-width: none;
    }
    .qishu-data-assets-table {
      overflow-x: auto;
    }
    .qishu-data-assets-table table {
      min-width: 980px;
    }
    .qishu-revenue-type-strip article + article {
      border-left: 0;
      border-top: 1px solid rgba(255,255,255,.12);
    }
    .qishu-revenue-panel {
      min-height: 0;
    }
    .qishu-revenue-engine__stage {
      min-height: 560px;
    }
    .qishu-revenue-engine__stage::before,
    .qishu-revenue-engine__stage::after {
      display: none;
    }
    .qishu-revenue-engine__core,
    .qishu-revenue-engine__node {
      position: relative;
      left: auto;
      right: auto;
      top: auto;
      bottom: auto;
      width: 100%;
      transform: none;
      text-align: left;
    }
    .qishu-revenue-engine__core {
      width: 152px;
      margin: 0 0 20px;
    }
    .qishu-revenue-engine__node {
      padding: 14px 0;
      border-top: 1px solid rgba(255,255,255,.1);
    }
    .qishu-revenue-engine__node-head,
    .qishu-revenue-engine__node--2 .qishu-revenue-engine__node-head,
    .qishu-revenue-engine__node--3 .qishu-revenue-engine__node-head,
    .qishu-revenue-engine__node--4 .qishu-revenue-engine__node-head {
      justify-content: flex-start;
    }
    .qishu-revenue-sankey__streams {
      display: none;
    }
    .qishu-revenue-sankey__source {
      color: var(--accent);
      font-weight: 900;
      justify-self: start;
    }
    .qishu-revenue-detail-table {
      overflow-x: auto;
    }
    .qishu-revenue-detail-table table {
      min-width: 920px;
    }
    .qishu-revenue-formula {
      justify-content: flex-start;
    }
    .qishu-flywheel {
      display: grid;
      gap: 10px;
      min-height: 0;
      padding: 18px;
    }
    .qishu-flywheel::before {
      display: none;
    }
    .qishu-flywheel-core,
    .qishu-flywheel article,
    .qishu-flywheel .node-1,
    .qishu-flywheel .node-2,
    .qishu-flywheel .node-3,
    .qishu-flywheel .node-4,
    .qishu-flywheel .node-5,
    .qishu-flywheel .node-6,
    .qishu-flywheel .node-7 {
      position: static;
      width: 100%;
      transform: none;
    }
    .qishu-flywheel-core {
      aspect-ratio: auto;
      min-height: 150px;
      border-radius: 8px;
    }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node {
      position: absolute;
      display: grid;
      grid-template-columns: 50px minmax(0, 1fr);
      width: 226px;
      min-height: 86px;
      transform: none;
    }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-1 { right: 7%; left: auto; top: 0; bottom: auto; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-2 { right: -2%; left: auto; top: 18%; bottom: auto; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-3 { right: -3%; left: auto; top: 42%; bottom: auto; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-4 { right: 8%; left: auto; top: auto; bottom: 12%; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-5 { left: 27%; right: auto; top: auto; bottom: 0; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-6 { left: -3%; right: auto; top: auto; bottom: 18%; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-7 { left: -7%; right: auto; top: 40%; bottom: auto; }
    .qishu-data-flywheel-graphic .qishu-data-flywheel-node.node-8 { left: 6%; right: auto; top: 14%; bottom: auto; }
  }
  @media (max-width: 900px) {
    .page-qishu-ai {
      --qishu-section-x: clamp(18px, 5vw, 24px);
    }
    .project-secondary-page {
      --project-section-x: clamp(18px, 5vw, 24px);
    }
    .page-qishu-ai > .section > h2 {
      white-space: normal;
      overflow-wrap: anywhere;
      font-size: 28px;
      line-height: 1.16;
    }
    .page-qishu-ai .card-grid,
    .page-qishu-ai .metric-grid {
      grid-template-columns: 1fr;
    }
    .project-secondary-page > .section > h2 {
      font-size: 28px;
      line-height: 1.16;
      overflow-wrap: anywhere;
    }
    .project-secondary-page .card-grid,
    .project-secondary-page .metric-grid,
    .project-secondary-page .split,
    .project-secondary-page .project-contact-section .cta-grid {
      grid-template-columns: 1fr !important;
    }
    .project-secondary-page .table-wrap {
      overflow: visible !important;
      border: 0;
      background: transparent;
    }
    .project-secondary-page .table-wrap table {
      display: block !important;
      width: 100% !important;
      min-width: 0 !important;
    }
    .project-secondary-page .table-wrap thead {
      display: none !important;
    }
    .project-secondary-page .table-wrap tbody {
      display: grid !important;
      gap: 12px;
      width: 100%;
    }
    .project-secondary-page .table-wrap tr {
      display: grid !important;
      gap: 10px;
      width: 100%;
      padding: 14px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 8px;
      background: rgba(255,255,255,.045);
    }
    .project-secondary-page .table-wrap td {
      display: grid !important;
      grid-template-columns: minmax(7em, .38fr) minmax(0, 1fr);
      gap: 10px;
      width: 100%;
      min-width: 0;
      padding: 0;
      border: 0;
      white-space: normal;
      overflow-wrap: anywhere;
    }
    .project-secondary-page .table-wrap td::before {
      content: attr(data-label);
      color: var(--accent);
      font-size: 11px;
      font-weight: 900;
      line-height: 1.4;
    }
  }
  .site-main :is(p, small, td, th),
  .site-main :is(.section-lead, .section-kicker, .eyebrow, .button),
  .site-main :is(.project-card, .info-card, .metric, .vertical-card, .timeline-item, .case-card, .mini-projects) :is(span, small, p),
  .site-main :is(.financing-brand-line, .financing-narrative, .financing-note, .financing-vdr-note, .financing-section__copy .section-lead),
  .site-main :is(.financing-card, .financing-mini-row, .financing-market-visual, .financing-compare, .financing-flow-node, .qishu-funnel, .qishu-revenue-map, .qishu-flywheel, .qishu-compare-chart) :is(span, small, p),
  .site-main :is(.contact-stack, .cta-grid) :is(a, span, small, p),
  .footer-inner :is(p, small, a, span, strong) {
    font-size: var(--small-copy-size) !important;
    line-height: var(--small-copy-line-height) !important;
  }
  .site-main :is(.section-kicker, .eyebrow, .button),
  .site-main :is(.project-card, .info-card, .metric, .vertical-card, .mini-projects, .financing-card, .financing-mini-row, .financing-market-visual, .financing-compare, .financing-flow-node) :is(span, small),
  .site-main :is(.contact-stack, .cta-grid) :is(a, span, small),
  .footer-inner :is(.section-kicker, a, span, small, strong) {
    line-height: var(--small-label-line-height) !important;
  }
  .site-main :is(p, small, td, th, .section-lead, .section-kicker, .eyebrow, .button, span) :is(.scroll-float-text, .char),
  .footer-inner :is(p, small, a, span, strong) :is(.scroll-float-text, .char) {
    font-size: inherit !important;
    line-height: inherit !important;
  }
  .site-main .qishu-data-copy > p,
  .site-main .qishu-data-page__intro > p:not(.section-kicker) {
    font-size: clamp(16px, .94vw, 19px) !important;
    line-height: 1.76 !important;
  }
  .site-main .qishu-data-copy .section-lead,
  .site-main .qishu-data-page__intro .section-lead {
    display: block !important;
    overflow: visible !important;
    -webkit-line-clamp: initial !important;
    font-size: clamp(18px, 1.1vw, 23px) !important;
    line-height: 1.62 !important;
  }
  .site-main .qishu-data-flywheel-core span {
    font-size: clamp(16px, 1vw, 19px) !important;
    line-height: 1.2 !important;
  }
  .site-main .qishu-data-flywheel-core small {
    font-size: clamp(15px, .96vw, 18px) !important;
    line-height: 1.25 !important;
  }
  .site-main .qishu-data-flywheel-node span {
    font-size: clamp(13px, .8vw, 16px) !important;
    line-height: 1 !important;
  }
  .site-main .qishu-data-flywheel-node small {
    font-size: clamp(12px, .74vw, 14px) !important;
    line-height: 1.36 !important;
  }
  .site-main .qishu-data-asset-list p,
  .site-main .qishu-data-lift-band p,
  .site-main .qishu-data-barrier-strip p {
    font-size: clamp(14px, .86vw, 17px) !important;
    line-height: 1.5 !important;
  }
  .site-main .qishu-data-value-conclusion p {
    font-size: clamp(18px, 1.32vw, 28px) !important;
    line-height: 1.48 !important;
  }
  .site-main .qishu-data-assets-table :is(th, td) {
    font-size: clamp(11px, .68vw, 13px) !important;
    line-height: 1.42 !important;
  }
  .harness-detail-page-hero .hero-inner {
    max-width: min(1380px, calc(100vw - var(--page-rail) * 2));
  }
  .harness-detail-page-hero .hero-title {
    max-width: 15ch;
    font-size: clamp(48px, 6.2vw, 118px);
    line-height: .98;
  }
  .detail-content-section,
  .detail-example-section,
  .detail-closing-section {
    width: min(1380px, calc(100vw - var(--page-rail) * 2));
    max-width: min(1380px, calc(100vw - var(--page-rail) * 2));
    margin-inline: auto;
  }
  .detail-content-section h2,
  .detail-example-section h2,
  .detail-closing-section h2 {
    max-width: 920px;
  }
  .detail-body {
    display: grid;
    gap: clamp(14px, 1.3vw, 22px);
    max-width: 1040px;
    margin: clamp(22px, 3vw, 46px) 0;
  }
  .detail-body p {
    margin: 0;
    color: rgba(247,247,243,.76);
    font-size: clamp(18px, 1.02vw, 22px) !important;
    line-height: 1.72 !important;
  }
  .detail-card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.6vw, 26px);
    margin-top: clamp(24px, 3vw, 48px);
  }
  .detail-card {
    min-height: clamp(180px, 18vh, 240px);
    padding: clamp(20px, 2vw, 32px);
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 8px;
    background:
      radial-gradient(circle at 12% 0%, rgba(245,155,50,.12), transparent 42%),
      rgba(0,0,0,.18);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.04);
  }
  .detail-card span {
    color: var(--accent);
    font-size: clamp(12px, .75vw, 14px) !important;
    font-weight: 900;
    line-height: 1.2 !important;
  }
  .detail-card h3 {
    margin: clamp(12px, 1vw, 18px) 0 clamp(10px, .9vw, 14px);
    font-size: clamp(24px, 1.8vw, 34px);
    line-height: 1.18;
  }
  .detail-card p {
    margin: 0;
    color: rgba(247,247,243,.72);
    font-size: clamp(16px, .96vw, 20px) !important;
    line-height: 1.65 !important;
  }
  .detail-emphasis {
    max-width: 1080px;
    margin: clamp(28px, 3vw, 52px) 0 0;
    padding: clamp(20px, 2vw, 30px);
    color: #fff;
    border: 1px solid rgba(245,155,50,.44);
    border-left: 3px solid var(--accent);
    border-radius: 8px;
    background: rgba(245,155,50,.08);
    font-size: clamp(22px, 1.35vw, 30px);
    font-weight: 850;
    line-height: 1.5;
  }
  .detail-example {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.6vw, 28px);
    margin-top: clamp(22px, 2.6vw, 42px);
  }
  .detail-example div {
    padding: clamp(20px, 2vw, 32px);
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 8px;
    background: rgba(0,0,0,.18);
  }
  .detail-example span {
    color: var(--accent);
    font-size: clamp(12px, .75vw, 14px) !important;
    font-weight: 900;
    line-height: 1.2 !important;
  }
  .detail-example p {
    margin: clamp(12px, 1vw, 16px) 0 0;
    color: rgba(247,247,243,.78);
    font-size: clamp(18px, 1vw, 21px) !important;
    line-height: 1.72 !important;
  }
  .detail-closing-section .cta-grid {
    margin-top: clamp(24px, 2.4vw, 42px);
  }
  @media (max-width: 900px) {
    .harness-detail-page-hero .hero-title {
      max-width: 100%;
      font-size: clamp(38px, 13vw, 70px);
    }
    .detail-card-grid,
    .detail-example {
      grid-template-columns: 1fr;
    }
  }
  #team .team-profile-content.chroma-info {
    position: relative;
    min-height: clamp(128px, 15vh, 170px);
    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
    padding: clamp(12px, 1.2vw, 18px) clamp(12px, 1.1vw, 18px) clamp(16px, 1.35vw, 22px);
  }
  #team .team-profile-content.chroma-info .team-profile-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(5px, .55vw, 8px);
    padding-right: clamp(70px, 4.6vw, 96px);
  }
  #team .team-profile-content.chroma-info .team-profile-copy span,
  #team .team-profile-content.chroma-info .team-profile-copy h3,
  #team .team-profile-content.chroma-info .team-profile-copy p {
    margin: 0;
    letter-spacing: 0 !important;
    text-align: left;
  }
  #team .team-profile-content.chroma-info .team-profile-copy span {
    font-size: clamp(13px, .78vw, 15px) !important;
    line-height: 1.25 !important;
    letter-spacing: .04em !important;
  }
  #team .team-profile-content.chroma-info .team-profile-copy h3 {
    font-size: clamp(14px, .86vw, 16px);
    line-height: 1.32;
  }
  #team .team-profile-content.chroma-info .team-profile-copy p {
    max-width: none;
    font-size: clamp(16px, .95vw, 18px) !important;
    line-height: 1.55 !important;
    letter-spacing: 0 !important;
    word-break: keep-all;
    overflow-wrap: normal;
  }
  #team .team-profile-content.chroma-info .team-profile-code {
    position: absolute;
    right: clamp(10px, 1vw, 16px);
    bottom: clamp(9px, .9vw, 16px);
    font-size: clamp(34px, 3vw, 58px);
    line-height: .92;
  }
  #ai-research-team {
    --profile-card-height: clamp(700px, 78vh, 820px);
  }
  #ai-research-team .team-profile-content.chroma-info {
    flex-basis: clamp(300px, 33vh, 370px);
    min-height: clamp(300px, 33vh, 370px);
    padding-bottom: clamp(30px, 4vh, 54px);
  }
  #ai-research-team .team-profile-content.chroma-info .team-profile-code {
    margin-top: auto;
  }
  #collaborative-research-team .team-profile-card.has-profile-hover-image .team-profile-content.chroma-info {
    transition: opacity 220ms var(--ease-out-soft), transform 260ms var(--ease-out-soft);
  }
  #collaborative-research-team .team-profile-card.has-profile-hover-image:hover .team-profile-content.chroma-info,
  #collaborative-research-team .team-profile-card.has-profile-hover-image.active .team-profile-content.chroma-info {
    opacity: 0;
    transform: translateY(8px);
  }
  .home-hero .hero-title {
    max-width: min(100%, 1800px);
    font-size: clamp(72px, 8.4vw, 156px);
    line-height: .92;
    letter-spacing: clamp(.004em, .055vw, .035em);
    white-space: nowrap;
  }
  .vertical-scroll-panel > .scroll-float:not(.scroll-float--inline) {
    width: min(calc(100vw - var(--section-x) * 2), 1800px);
    font-size: clamp(56px, 6.8vw, 126px);
    line-height: .92;
  }
  .vertical-scroll-panel .harness-copy > .scroll-float:not(.scroll-float--inline) {
    width: min(calc(100vw - var(--section-x) * 2), 1800px);
    font-size: clamp(40px, 4.1vw, 82px);
    line-height: 1;
  }
  /* Mobile containment pass */
  @media (max-width: 900px) {
    html,
    body,
    .site-main,
    .page-shell {
      max-width: 100%;
      overflow-x: hidden;
    }

    body.cursor-ready,
    body.cursor-ready a,
    body.cursor-ready button,
    body.cursor-ready [data-magnetic] {
      cursor: auto;
    }

    .magnetic-cursor {
      display: none !important;
    }

    .site-header {
      width: 100%;
      max-width: 100vw;
      min-height: 68px;
      gap: 14px;
      padding-right: max(var(--site-rail), env(safe-area-inset-right));
      padding-left: max(var(--site-rail), env(safe-area-inset-left));
      overflow: hidden;
    }

    .brand {
      min-width: 0;
      flex: 1 1 auto;
    }

    .brand-logo {
      width: min(136px, 42vw);
      max-width: 100%;
      height: auto;
      max-height: 28px;
      object-fit: contain;
    }

    .nav-links {
      display: none !important;
    }

    .header-action {
      flex: 0 0 auto;
      min-height: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      white-space: nowrap;
      font-size: clamp(14px, 4vw, 18px);
      line-height: 1.1;
    }

    .hero,
    .financing-section,
    .vertical-scroll-panel,
    .section {
      overflow-x: hidden;
    }

    .scroll-float,
    .scroll-float-text,
    .scroll-float .char,
    .shiny-text,
    .animated-gradient-text,
    .hero-title-line {
      max-width: 100%;
      overflow: visible !important;
    }

    .hero h1,
    .hero:not(.home-hero) .hero-title,
    .section h2,
    .vertical-scroll-panel > .scroll-float:not(.scroll-float--inline),
    .vertical-scroll-panel .harness-copy > .scroll-float:not(.scroll-float--inline),
    .financing-section__copy h2,
    .qishu-revenue-page__intro h2,
    .qishu-data-copy h2,
    .qishu-data-page__intro h2,
    .footer-inner h2 {
      max-width: 100%;
      white-space: normal !important;
      word-break: normal;
      overflow-wrap: anywhere;
      text-wrap: balance;
      line-height: 1.12 !important;
      letter-spacing: 0 !important;
    }

    .hero h1 {
      font-size: clamp(36px, 12vw, 64px) !important;
    }

    .home-hero .hero-title {
      font-size: clamp(34px, 11vw, 58px) !important;
    }

    .section h2,
    .footer-inner h2 {
      font-size: clamp(32px, 10vw, 54px) !important;
    }

    .vertical-scroll-panel > .scroll-float:not(.scroll-float--inline),
    .vertical-scroll-panel .harness-copy > .scroll-float:not(.scroll-float--inline) {
      width: 100%;
      font-size: clamp(32px, 10vw, 54px) !important;
      text-align: left;
    }

    .vertical-scroll-panel > .scroll-float:not(.scroll-float--inline) .scroll-float-text,
    .vertical-scroll-panel .harness-copy > .scroll-float:not(.scroll-float--inline) .scroll-float-text {
      white-space: normal !important;
    }

    .animated-list-container,
    .content-list-shell,
    .project-list-shell,
    .harness-card-list,
    .workbook-list-shell,
    .animated-list,
    .card-grid,
    .metric-grid,
    .project-grid,
    .vertical-grid,
    .mini-projects,
    .cta-grid,
    .qishu-video-grid,
    .financing-card-grid,
    .financing-flow,
    .financing-mini-table,
    .financing-output-stack,
    .qishu-image-strip,
    .qishu-module-video,
    .qishu-demo-slot,
    .qishu-compare-chart,
    .qishu-revenue-lanes,
    .qishu-revenue-metrics,
    .qishu-revenue-type-strip,
    .qishu-revenue-analytics,
    .qishu-data-lift-band,
    .qishu-data-barrier-strip,
    .qishu-data-assets-grid,
    .harness-detail-section .harness-card-list .card-grid,
    .harness-detail-section .process-flow,
    .ecosystem-card-list .card-grid,
    .team-card-list .card-grid,
    .advisor-card-list .card-grid {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      grid-template-columns: 1fr !important;
      overflow: visible !important;
    }

    .card-grid [data-animated-list-item],
    .metric-grid [data-animated-list-item],
    .project-grid [data-animated-list-item],
    .harness-detail-section .harness-card-list .card-grid [data-animated-list-item],
    .harness-detail-section .harness-card-list .card-grid [data-animated-list-item]:nth-child(3n+2),
    .harness-detail-section .harness-card-list .card-grid [data-animated-list-item]:nth-child(3n),
    .ecosystem-card-list .card-grid [data-animated-list-item],
    .ecosystem-card-list .card-grid [data-animated-list-item]:nth-child(3n+2),
    .ecosystem-card-list .card-grid [data-animated-list-item]:nth-child(3n) {
      width: 100% !important;
      min-width: 0 !important;
      margin-top: 0 !important;
    }

    .info-card,
    .metric,
    .project-card,
    .vertical-card,
    .timeline-item,
    .case-card,
    .mini-projects a,
    .financing-card,
    .financing-mini-row,
    .financing-market-visual,
    .financing-compare,
    .financing-flow-node,
    .process-node,
    .harness-detail-section .harness-card-list .info-card,
    .harness-detail-section .process-node,
    .ecosystem-card-list .info-card {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      min-height: 0 !important;
      height: auto !important;
      overflow: visible !important;
      text-align: left;
    }

    .harness-detail-section .harness-card-list .info-card,
    .harness-detail-section .process-node {
      padding: clamp(16px, 5vw, 22px);
    }

    .harness-detail-section .harness-card-list .info-card > span,
    .harness-detail-section .harness-card-list .info-card h3,
    .harness-detail-section .harness-card-list .info-card p {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
      text-align: left;
    }

    .harness-detail-section .harness-card-list .info-card h3 {
      font-size: clamp(24px, 7.2vw, 32px);
      line-height: 1.18;
    }

    .harness-detail-section .harness-card-list .info-card p,
    .harness-detail-section .process-node strong {
      word-break: normal;
      overflow-wrap: anywhere;
      line-height: 1.62;
    }

    .team-profile-board.chroma-grid,
    .team-profile-row {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      overflow: visible !important;
    }

    .team-profile-row {
      grid-template-columns: 1fr !important;
      grid-auto-flow: row !important;
      grid-auto-columns: minmax(0, 1fr) !important;
    }

    .team-profile-card,
    .team-profile-card:nth-child(even),
    .team-profile-card.chroma-card,
    .pc-card-wrapper {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      margin-top: 0 !important;
    }

    .team-profile-card .pc-card,
    .team-profile-card .pc-inside,
    .team-profile-content.chroma-info,
    .team-profile-content.chroma-info .team-profile-copy {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      overflow: visible !important;
    }

    .team-profile-content.chroma-info {
      grid-template-columns: minmax(0, 1fr) !important;
    }

    .team-profile-content.chroma-info .team-profile-copy {
      padding-right: 0 !important;
    }

    .team-profile-content.chroma-info .team-profile-code {
      position: static !important;
      align-self: flex-start;
      margin-top: 12px;
      font-size: clamp(28px, 11vw, 42px);
    }

    .process-flow {
      padding-left: 22px;
    }

    .financing-card-grid--seven,
    .financing-flow--seven {
      grid-template-columns: 1fr !important;
      overflow: visible !important;
      padding-bottom: 0 !important;
    }

    .table-wrap,
    .qishu-data-assets-table,
    .qishu-revenue-detail-table {
      max-width: 100%;
      overflow-x: hidden !important;
    }

    .page-qishu-ai .table-wrap table,
    .page-qishu-ai .qishu-data-assets-table table,
    .page-qishu-ai .qishu-revenue-detail-table table {
      width: 100% !important;
      min-width: 0 !important;
      table-layout: fixed;
    }

    .page-qishu-ai .table-wrap th,
    .page-qishu-ai .table-wrap td,
    .page-qishu-ai .qishu-data-assets-table th,
    .page-qishu-ai .qishu-data-assets-table td,
    .page-qishu-ai .qishu-revenue-detail-table th,
    .page-qishu-ai .qishu-revenue-detail-table td {
      min-width: 0 !important;
      max-width: none !important;
      padding: 10px 8px;
      white-space: normal !important;
      word-break: normal;
      overflow-wrap: anywhere;
      font-size: 12px !important;
      line-height: 1.48 !important;
    }

    .page-qishu-ai .qishu-revenue-detail-table table {
      display: block !important;
      width: 100% !important;
      border-collapse: separate;
    }

    .page-qishu-ai .qishu-revenue-detail-table thead {
      display: none !important;
    }

    .page-qishu-ai .qishu-revenue-detail-table tbody {
      display: grid !important;
      gap: 12px;
      width: 100%;
    }

    .page-qishu-ai .qishu-revenue-detail-table tr {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      width: 100%;
      padding: 14px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 8px;
      background: rgba(255,255,255,.045);
    }

    .page-qishu-ai .qishu-revenue-detail-table td {
      display: grid !important;
      grid-template-columns: minmax(7em, .42fr) minmax(0, 1fr);
      gap: 10px;
      align-items: start;
      width: 100% !important;
      padding: 0 !important;
      border-top: 0 !important;
      font-size: 13px !important;
      text-align: left;
    }

    .page-qishu-ai .qishu-revenue-detail-table td::before {
      content: attr(data-label);
      color: var(--accent);
      font-size: 11px;
      font-weight: 900;
      line-height: 1.35;
      letter-spacing: .04em;
    }

    .page-qishu-ai .qishu-revenue-detail-table td:first-child {
      grid-template-columns: 42px 34px minmax(0, 1fr) !important;
      gap: 10px;
    }

    .page-qishu-ai .qishu-revenue-detail-table td:first-child::before {
      display: none;
    }

    .page-qishu-ai .qishu-revenue-detail-table td:first-child strong {
      white-space: normal !important;
      word-break: normal;
      overflow-wrap: anywhere;
      line-height: 1.35;
    }

    .image-panel,
    .image-panel img,
    .financing-card__media,
    .financing-card__media img,
    .qishu-wide-image,
    .qishu-wide-image img,
    .qishu-revenue-sankey--image,
    .qishu-revenue-sankey--image img,
    .qishu-demo-video,
    .qishu-data-image,
    .qishu-data-image img,
    .qishu-data-image--flywheel img,
    .qishu-data-image--loop img {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      height: auto !important;
      object-fit: contain;
    }

    .qishu-data-flywheel-graphic.qishu-data-image--flywheel,
    .qishu-data-loop-graphic.qishu-data-image--loop,
    .qishu-data-loop-graphic {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
      min-height: 0 !important;
      overflow: hidden !important;
      padding-bottom: 0 !important;
    }

    .qishu-data-flywheel-graphic.qishu-data-image--flywheel img,
    .qishu-data-loop-graphic.qishu-data-image--loop img {
      display: block;
    }

    .qishu-revenue-chart__plot,
    .qishu-data-assets-grid > div:first-child {
      width: 100%;
      overflow-x: hidden !important;
    }

    .qishu-revenue-chart svg,
    .qishu-revenue-chart__labels {
      width: 100% !important;
      min-width: 0 !important;
      max-width: 100% !important;
    }

    .qishu-revenue-chart__plot {
      min-height: 0 !important;
      padding-bottom: 0 !important;
    }

    .qishu-revenue-chart svg {
      min-height: 180px;
    }

    .qishu-revenue-chart__labels {
      position: static !important;
      right: auto !important;
      bottom: auto !important;
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 10px;
      margin-top: 14px;
    }

    .qishu-revenue-chart__labels article {
      width: 100%;
      min-width: 0;
      padding: 10px 12px;
      border: 1px solid rgba(255,138,0,.24);
      border-radius: 8px;
      background: rgba(0,0,0,.16);
      text-align: left;
    }

    .qishu-revenue-chart__labels span,
    .qishu-revenue-chart__labels strong {
      white-space: normal !important;
      overflow-wrap: anywhere;
    }

    .page-qishu-ai .qishu-wide-image,
    .page-qishu-ai .qishu-opportunity-carousel__slide {
      overflow: visible !important;
    }

    .page-qishu-ai .qishu-wide-image figcaption,
    .page-qishu-ai .qishu-opportunity-carousel__slide figcaption {
      position: static !important;
      margin-top: 10px;
      width: 100%;
      padding: 12px 14px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 8px;
      background: rgba(0,0,0,.42);
      backdrop-filter: none;
      text-align: left;
    }

    .qishu-opportunity-carousel {
      max-width: 100%;
      overflow: hidden;
    }

    .hero-project-list.circular-gallery {
      max-width: 100vw;
      overflow: hidden;
    }
    .hero-projects.circular-gallery-track {
      max-width: none;
      overflow: visible;
    }
  }

  @media (max-width: 560px) {
    .page-qishu-ai .financing-hero-content h1 {
      font-size: clamp(34px, 10.4vw, 48px);
      line-height: 1.08;
    }
    .qishu-performance-summary {
      grid-template-columns: 1fr;
    }
    .qishu-performance-summary article + article {
      border-top: 1px solid rgba(255,255,255,.14);
      border-left: 0;
    }
    .qishu-performance-summary article {
      display: grid;
      grid-template-columns: minmax(92px, .42fr) minmax(0, 1fr);
      gap: 12px;
      align-items: baseline;
      padding: 12px 10px;
    }
    .qishu-performance-summary span {
      margin: 0;
    }
    .page-qishu-ai .qishu-record-table table {
      display: block !important;
      width: 100% !important;
    }
    .page-qishu-ai .qishu-record-table thead {
      display: none !important;
    }
    .page-qishu-ai .qishu-record-table tbody {
      display: grid !important;
      gap: 12px;
    }
    .page-qishu-ai .qishu-record-table tr {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
      padding: 14px;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 8px;
      background: rgba(255,255,255,.045);
    }
    .page-qishu-ai .qishu-record-table td {
      display: grid !important;
      grid-template-columns: minmax(7.5em, .44fr) minmax(0, 1fr);
      gap: 10px;
      width: 100% !important;
      padding: 0 !important;
      border: 0 !important;
      font-size: 13px !important;
      text-align: left;
    }
    .page-qishu-ai .qishu-record-table td::before {
      content: attr(data-label);
      color: var(--accent);
      font-size: 11px;
      font-weight: 900;
      line-height: 1.35;
    }
    .qishu-demo-slot__flow {
      grid-template-columns: 1fr;
    }
    .qishu-demo-slot__flow div {
      min-height: 92px;
    }
    .qishu-demo-slot__flow div:not(:last-child)::after {
      top: auto;
      right: 50%;
      bottom: -5px;
      transform: translateX(50%) rotate(135deg);
    }
    .qishu-opportunity-carousel {
      border: 0;
      background: transparent;
      box-shadow: none;
      overflow: visible;
    }

    .qishu-opportunity-carousel__track {
      display: grid;
      width: 100% !important;
      gap: 14px;
      padding: 0;
      animation: none !important;
    }

    .qishu-opportunity-carousel__slide {
      width: 100% !important;
      max-width: 100% !important;
      flex-basis: auto;
    }

    .qishu-opportunity-carousel__slide:nth-child(n+7) {
      display: none;
    }

    .page-qishu-ai .table-wrap th,
    .page-qishu-ai .table-wrap td,
    .page-qishu-ai .qishu-data-assets-table th,
    .page-qishu-ai .qishu-data-assets-table td,
    .page-qishu-ai .qishu-revenue-detail-table th,
    .page-qishu-ai .qishu-revenue-detail-table td {
      padding: 9px 6px;
      font-size: 11px !important;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
    .shiny-text { background-position: 50% center; }
    .animated-gradient-text .text-content { background-position: 50% 50%; }
    .reveal,
    .reveal-up,
    .reveal-left,
    .reveal-right,
    .reveal-scale,
    .stagger-item {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .tilt-card,
    .tilt-card.is-visible {
      transform: none;
    }
    .cad-line { stroke-dashoffset: 0; }
    [data-cad-step] { opacity: 1; transform: none; }
    .cad-line--base,
    .cad-line--highlight { stroke-dashoffset: 0; opacity: 1; }
    .cad-node,
    .cad-label,
    .cad-3d-space,
    .cad-wall,
    .cad-edge,
    .cad-unfold,
    .cad-export { opacity: 1; transform: none; }
    .cad-model-visual { --wall-rise: 1; --room-scale: 1; --story-rotate-y: 0deg; }
    .arch-line { stroke-dashoffset: 0; }
    .logoloop__track { transform: translate3d(0, 0, 0) !important; }
    .logoloop__item img,
    .logoloop__logo-shell { transition: none !important; }
  }
`;

const siteJs = `
(() => {
  const loader = document.querySelector('[data-site-loader]');
  if (!loader) return;

  const startedAt = Date.now();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const minDuration = reduceMotion ? 180 : 650;
  let hideTimer = 0;
  let navigationTransitionActive = false;
  const showLoader = () => {
    window.clearTimeout(hideTimer);
    navigationTransitionActive = true;
    loader.classList.remove('is-hidden');
    loader.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-loading');
    document.documentElement.classList.add('is-navigating');
  };
  const hideLoader = ({ respectMinimum = true } = {}) => {
    const elapsed = Date.now() - startedAt;
    const wait = respectMinimum ? Math.max(0, minDuration - elapsed) : 120;
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => {
      loader.classList.add('is-hidden');
      loader.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-loading');
      document.documentElement.classList.remove('is-navigating');
      navigationTransitionActive = false;
    }, wait);
  };

  window.__gibiraShowLoader = showLoader;
  window.__gibiraHideLoader = hideLoader;

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    hideLoader();
  } else {
    document.addEventListener('DOMContentLoaded', hideLoader, { once: true });
    window.addEventListener('load', hideLoader, { once: true });
    window.setTimeout(hideLoader, minDuration + 1400);
  }
  window.addEventListener('pageshow', (event) => {
    if (event.persisted || navigationTransitionActive) hideLoader({ respectMinimum: false });
  });
})();

(() => {
  const isPlainPrimaryClick = (event) => event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
  document.addEventListener('click', (event) => {
    if (!isPlainPrimaryClick(event) || event.defaultPrevented) return;
    const link = event.target.closest('a[href]');
    if (!link || link.hasAttribute('download') || link.target === '_blank') return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    const sameDocument = destination.pathname === window.location.pathname && destination.search === window.location.search;
    if (sameDocument) return;
    window.__gibiraShowLoader?.();
  });
  window.addEventListener('pagehide', () => {
    window.__gibiraShowLoader?.();
  });
})();

(() => {
  const lazyVideos = Array.from(document.querySelectorAll('[data-lazy-video]'));
  if (!lazyVideos.length) return;

  const loadVideo = (video) => {
    if (video.dataset.lazyLoaded === 'true') return;
    const source = video.querySelector('source[data-src]');
    if (!source) return;
    source.src = source.dataset.src;
    source.removeAttribute('data-src');
    video.dataset.lazyLoaded = 'true';
    video.preload = 'metadata';
    video.load();
  };

  const preloadMargin = 360;
  const isNearViewport = (video) => {
    const bounds = video.getBoundingClientRect();
    return bounds.top <= window.innerHeight + preloadMargin && bounds.bottom >= -preloadMargin;
  };
  const loadNearbyVideos = () => {
    lazyVideos.forEach((video) => {
      if (video.dataset.lazyLoaded !== 'true' && isNearViewport(video)) loadVideo(video);
    });
    if (lazyVideos.every((video) => video.dataset.lazyLoaded === 'true')) {
      window.removeEventListener('scroll', scheduleVideoCheck);
      window.removeEventListener('resize', scheduleVideoCheck);
    }
  };
  let videoCheckFrame = 0;
  const scheduleVideoCheck = () => {
    if (videoCheckFrame) return;
    videoCheckFrame = window.requestAnimationFrame(() => {
      videoCheckFrame = 0;
      loadNearbyVideos();
    });
  };

  window.addEventListener('scroll', scheduleVideoCheck, { passive: true });
  window.addEventListener('resize', scheduleVideoCheck, { passive: true });
  scheduleVideoCheck();
})();

(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let frame = 0;
  const updateHeaderTheme = () => {
    frame = 0;
    header.classList.toggle('is-scrolled', window.scrollY > 2);
  };
  const scheduleHeaderTheme = () => {
    if (frame) return;
    frame = requestAnimationFrame(updateHeaderTheme);
  };
  const handleWheelTheme = (event) => {
    if (Math.abs(event.deltaY) > 0 && event.deltaY > 0) {
      header.classList.add('is-scrolled');
    }
    scheduleHeaderTheme();
  };

  updateHeaderTheme();
  window.addEventListener('wheel', handleWheelTheme, { passive: true });
  window.addEventListener('scroll', scheduleHeaderTheme, { passive: true });
  window.addEventListener('resize', scheduleHeaderTheme, { passive: true });
  window.addEventListener('load', scheduleHeaderTheme, { once: true });
})();

(() => {
  let hashScrollAttempts = 0;
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  const navigationEntry = window.performance?.getEntriesByType?.('navigation')?.[0];
  const legacyNavigationType = window.performance?.navigation?.type;
  const navigationType = navigationEntry?.type || (legacyNavigationType === 1 ? 'reload' : legacyNavigationType === 2 ? 'back_forward' : 'navigate');
  const isReload = navigationType === 'reload';
  const isHistoryRestore = navigationType === 'back_forward';
  if (isReload && window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  const scrollStorageKey = 'gibira:scroll:' + window.location.pathname + window.location.search;
  const savedScroll = Number(window.sessionStorage.getItem(scrollStorageKey));
  const shouldRestoreHistory = isHistoryRestore && !window.location.hash && Number.isFinite(savedScroll);
  const shouldStartAtTop = isReload || (!window.location.hash && !shouldRestoreHistory);
  if (shouldRestoreHistory) {
    window.__gibiraInitialScrollTarget = Math.max(0, savedScroll);
  }
  if (shouldStartAtTop) {
    window.__gibiraInitialScrollTarget = 0;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }
  const scrollToTop = () => {
    window.__gibiraInitialScrollTarget = 0;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      if (window.__gibiraScrollEngine?.scrollTo) {
        window.__gibiraScrollEngine.scrollTo(0, { immediate: true, programmatic: true });
      }
    });
  };
  const restoreHistoryScroll = () => {
    const top = Math.max(0, Number.isFinite(savedScroll) ? savedScroll : 0);
    window.__gibiraInitialScrollTarget = top;
    window.scrollTo({ top, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = top;
    if (document.body) document.body.scrollTop = top;
    requestAnimationFrame(() => {
      if (window.__gibiraScrollEngine?.scrollTo) {
        window.__gibiraScrollEngine.scrollTo(top, { immediate: true, programmatic: true });
      }
    });
  };
  const scrollToHashTarget = () => {
    if (!window.location.hash) return;
    const hash = window.location.hash.slice(1);
    const target = document.getElementById(decodeURIComponent(hash));
    if (!target) return;
    requestAnimationFrame(() => {
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      if (window.__gibiraScrollEngine?.scrollTo) {
        window.__gibiraScrollEngine.scrollTo(Math.max(0, top), { immediate: false, programmatic: true });
        return;
      }
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
    });
  };
  const retryHashScroll = () => {
    scrollToHashTarget();
    hashScrollAttempts += 1;
    if (window.location.hash && hashScrollAttempts < 5) {
      window.setTimeout(retryHashScroll, hashScrollAttempts * 180);
    }
  };
  window.addEventListener('hashchange', () => {
    hashScrollAttempts = 0;
    scrollToHashTarget();
  });
  window.addEventListener('load', () => {
    if (shouldStartAtTop) {
      scrollToTop();
      return;
    }
    if (shouldRestoreHistory) {
      restoreHistoryScroll();
      return;
    }
    retryHashScroll();
  }, { once: true });
  window.addEventListener('pageshow', (event) => {
    if (event.persisted || shouldRestoreHistory) {
      restoreHistoryScroll();
      return;
    }
    if (shouldStartAtTop) {
      scrollToTop();
      return;
    }
    retryHashScroll();
  });
  window.addEventListener('pagehide', () => {
    window.sessionStorage.setItem(scrollStorageKey, String(Math.max(0, window.scrollY || document.documentElement.scrollTop || 0)));
  });
  document.addEventListener('DOMContentLoaded', () => {
    if (shouldStartAtTop) scrollToTop();
    else if (shouldRestoreHistory) restoreHistoryScroll();
  }, { once: true });
  window.setTimeout(() => {
    if (shouldStartAtTop) scrollToTop();
    else if (shouldRestoreHistory) restoreHistoryScroll();
    else retryHashScroll();
  }, 80);
})();

(() => {
  if (document.documentElement.dataset.scrollEngineReady === 'true') return;
  if (!window.requestAnimationFrame || !window.cancelAnimationFrame) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scrollEngineConfig = {
    source: 'nk.studio Lenis-style scroll system',
    lenisVersion: '1.0.42',
    smoothWheel: true,
    syncTouch: true,
    lerp: 0.1,
    syncTouchLerp: 0.075,
    touchInertiaMultiplier: 35,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    lineHeight: 100 / 6
  };
  const root = document.documentElement;
  const forceNativeAutoScroll = () => {
    root.style.scrollBehavior = 'auto';
    if (document.body) document.body.style.scrollBehavior = 'auto';
  };
  const listeners = new Set();
  let direction = 0;
  let velocity = 0;
  let rafId = 0;
  let lastTime = 0;
  let isSmooth = false;
  let isScrolling = false;
  let isStopped = false;
  let isLocked = false;
  let touchStartY = 0;
  let touchLastDelta = 0;
  let touchLastTime = 0;
  let preventNextNativeScroll = false;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const getLimit = () => Math.max(0, root.scrollHeight - window.innerHeight);
  const getActualScroll = () => window.scrollY || root.scrollTop || document.body.scrollTop || 0;
  const getInitialScroll = () => Number.isFinite(window.__gibiraInitialScrollTarget) ? window.__gibiraInitialScrollTarget : getActualScroll();
  let targetScroll = getInitialScroll();
  let animatedScroll = targetScroll;
  let previousAnimatedScroll = animatedScroll;
  const updateClasses = () => {
    root.classList.add('lenis');
    root.classList.toggle('lenis-smooth', isSmooth);
    root.classList.toggle('lenis-scrolling', isScrolling);
    root.classList.toggle('lenis-stopped', isStopped);
    root.classList.toggle('lenis-locked', isLocked);
  };
  const emit = () => {
    const limit = getLimit();
    const detail = {
      scroll: animatedScroll,
      limit,
      progress: limit > 0 ? animatedScroll / limit : 1,
      velocity,
      direction
    };
    listeners.forEach((listener) => listener(detail));
    window.dispatchEvent(new CustomEvent('gibira:smooth-scroll', { detail }));
  };
  const setScroll = (value) => {
    preventNextNativeScroll = true;
    forceNativeAutoScroll();
    const scrollingElement = document.scrollingElement || root;
    scrollingElement.scrollTop = value;
    root.scrollTop = value;
    document.body.scrollTop = value;
    window.scrollTo({ left: 0, top: value, behavior: 'auto' });
    requestAnimationFrame(() => {
      preventNextNativeScroll = false;
    });
  };
  const shouldPreventTarget = (event, type) => {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    const nodes = path.length ? path : [event.target];
    return nodes.some((node) => {
      if (!node || node === window || node === document) return false;
      if (node === root) return false;
      if (node.hasAttribute?.('data-lenis-prevent')) return true;
      if (type === 'wheel' && node.hasAttribute?.('data-lenis-prevent-wheel')) return true;
      if (type === 'touch' && node.hasAttribute?.('data-lenis-prevent-touch')) return true;
      if (node.classList?.contains('lenis') && !node.classList.contains('lenis-stopped')) return true;
      return false;
    });
  };
  const normalizeWheelDelta = (event) => {
    let deltaY = event.deltaY;
    if (event.deltaMode === 1) deltaY *= scrollEngineConfig.lineHeight;
    if (event.deltaMode === 2) deltaY *= window.innerHeight;
    return deltaY * scrollEngineConfig.wheelMultiplier;
  };
  const scheduleRaf = () => {
    if (rafId) return;
    const frame = window.requestAnimationFrame(raf);
    rafId = frame;
  };
  const finishScroll = () => {
    isScrolling = false;
    isSmooth = false;
    velocity = 0;
    animatedScroll = targetScroll;
    previousAnimatedScroll = animatedScroll;
    setScroll(animatedScroll);
    updateClasses();
    emit();
  };
  function raf(time) {
    rafId = 0;
    const deltaTime = lastTime ? Math.min(64, time - lastTime) : 16.67;
    lastTime = time;
    const limit = getLimit();
    targetScroll = clamp(targetScroll, 0, limit);
    const distance = targetScroll - animatedScroll;
    const easing = 1 - Math.exp(-scrollEngineConfig.lerp * 60 * (deltaTime / 1000));

    if (Math.abs(distance) <= 0.35) {
      finishScroll();
      return;
    }

    animatedScroll += distance * easing;
    animatedScroll = clamp(animatedScroll, 0, limit);
    velocity = animatedScroll - previousAnimatedScroll;
    direction = velocity === 0 ? direction : velocity > 0 ? 1 : -1;
    previousAnimatedScroll = animatedScroll;
    setScroll(animatedScroll);
    isScrolling = true;
    updateClasses();
    emit();
    scheduleRaf();
  }
  const scrollTo = (target, options = {}) => {
    const limit = getLimit();
    let nextTarget = target;
    if (typeof target === 'string') {
      if (target === 'top') nextTarget = 0;
      else if (target === 'bottom') nextTarget = limit;
      else {
        const element = document.querySelector(target);
        if (!element) return;
        nextTarget = element.getBoundingClientRect().top + getActualScroll();
      }
    } else if (target instanceof Element) {
      nextTarget = target.getBoundingClientRect().top + getActualScroll();
    }
    nextTarget = Number(nextTarget);
    if (!Number.isFinite(nextTarget)) return;

    targetScroll = clamp(nextTarget + (options.offset || 0), 0, limit);
    isSmooth = !options.immediate;
    isScrolling = !options.immediate;
    updateClasses();

    if (options.immediate || prefersReducedMotion) {
      animatedScroll = targetScroll;
      previousAnimatedScroll = animatedScroll;
      setScroll(animatedScroll);
      finishScroll();
      return;
    }

    if (options.lerp && options.lerp !== scrollEngineConfig.lerp) {
      const originalLerp = scrollEngineConfig.lerp;
      scrollEngineConfig.lerp = options.lerp;
      scheduleRaf();
      window.setTimeout(() => {
        scrollEngineConfig.lerp = originalLerp;
      }, 220);
      return;
    }
    scheduleRaf();
  };
  const handleWheel = (event) => {
    if (prefersReducedMotion || !scrollEngineConfig.smoothWheel || event.ctrlKey) return;
    if (shouldPreventTarget(event, 'wheel')) return;
    if (isStopped || isLocked) {
      event.preventDefault();
      return;
    }
    const deltaY = normalizeWheelDelta(event);
    if (!deltaY) return;
    event.preventDefault();
    isSmooth = true;
    scrollTo(targetScroll + deltaY, { immediate: false, programmatic: false });
  };
  const handleTouchStart = (event) => {
    if (prefersReducedMotion || !scrollEngineConfig.syncTouch || shouldPreventTarget(event, 'touch')) return;
    const touch = event.targetTouches?.[0];
    if (!touch) return;
    touchStartY = touch.clientY;
    touchLastDelta = 0;
    touchLastTime = performance.now();
  };
  const handleTouchMove = (event) => {
    if (prefersReducedMotion || !scrollEngineConfig.syncTouch || shouldPreventTarget(event, 'touch')) return;
    const touch = event.targetTouches?.[0];
    if (!touch) return;
    const deltaY = (touchStartY - touch.clientY) * scrollEngineConfig.touchMultiplier;
    touchStartY = touch.clientY;
    touchLastDelta = deltaY;
    touchLastTime = performance.now();
    if (!deltaY) return;
    event.preventDefault();
    isSmooth = true;
    scrollTo(targetScroll + deltaY, { immediate: false, lerp: 1, programmatic: false });
  };
  const handleTouchEnd = () => {
    if (prefersReducedMotion || !scrollEngineConfig.syncTouch || !touchLastDelta) return;
    const age = performance.now() - touchLastTime;
    const inertia = age < 120 ? touchLastDelta * scrollEngineConfig.touchInertiaMultiplier : 0;
    touchLastDelta = 0;
    if (!inertia) return;
    scrollTo(targetScroll + inertia, { immediate: false, lerp: scrollEngineConfig.syncTouchLerp, programmatic: false });
  };
  const handleNativeScroll = () => {
    if (preventNextNativeScroll || isScrolling) return;
    targetScroll = getActualScroll();
    animatedScroll = targetScroll;
    previousAnimatedScroll = animatedScroll;
    velocity = 0;
    updateClasses();
    emit();
  };
  const handleResize = () => {
    const limit = getLimit();
    targetScroll = clamp(targetScroll, 0, limit);
    animatedScroll = clamp(animatedScroll, 0, limit);
    setScroll(animatedScroll);
    emit();
  };
  const start = () => {
    if (document.documentElement.dataset.scrollEngineReady === 'true') return;
    document.documentElement.dataset.scrollEngineReady = 'true';
    forceNativeAutoScroll();
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    updateClasses();
    emit();
  };
  const stop = () => {
    isStopped = true;
    updateClasses();
  };
  const resume = () => {
    isStopped = false;
    updateClasses();
  };

  window.__gibiraScrollEngine = {
    version: scrollEngineConfig.lenisVersion,
    config: scrollEngineConfig,
    on(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    raf,
    scrollTo,
    start,
    stop,
    resume,
    resize: handleResize,
    get state() {
      return {
        scroll: animatedScroll,
        targetScroll,
        velocity,
        direction,
        limit: getLimit(),
        isSmooth,
        isScrolling
      };
    }
  };

  start();
})();

(() => {
  const autoScrollFloatSelectors = [
    '[data-vertical-scroll-panel] .section-kicker',
    '[data-vertical-scroll-panel] .section-lead',
    '[data-vertical-scroll-panel] .harness-copy > p:not(.section-kicker):not(.section-lead)',
    '[data-vertical-scroll-panel] .info-card > span',
    '[data-vertical-scroll-panel] .info-card > h3',
    '[data-vertical-scroll-panel] .info-card > p',
    '[data-vertical-scroll-panel] .process-node > span',
    '[data-vertical-scroll-panel] .process-node > strong',
    '[data-vertical-scroll-panel] .vertical-card-head > span',
    '[data-vertical-scroll-panel] .vertical-card-head > small',
    '[data-vertical-scroll-panel] .vertical-card > h3',
    '[data-vertical-scroll-panel] .vertical-card > p',
    '[data-vertical-scroll-panel] .team-profile-copy > span',
    '[data-vertical-scroll-panel] .team-profile-copy > h3',
    '[data-vertical-scroll-panel] .team-profile-copy > p',
    '[data-vertical-scroll-panel] .team-profile-code',
    '[data-vertical-scroll-panel] .cta-grid .button',
    '[data-vertical-scroll-panel] .quote-panel p'
  ];
  const explicitHeadings = Array.from(document.querySelectorAll('[data-scroll-float]'));
  const autoHeadings = Array.from(document.querySelectorAll(autoScrollFloatSelectors.join(',')))
    .filter((heading) => !heading.hasAttribute('data-scroll-float-skip'));
  const headings = Array.from(new Set([...explicitHeadings, ...autoHeadings]))
    .filter((heading) => heading.textContent && heading.textContent.trim());
  if (!headings.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const splitHeading = (heading) => {
      if (heading.dataset.scrollFloatReady === 'true') return;
      if (!heading.hasAttribute('data-scroll-float')) {
        heading.classList.add('scroll-float', 'scroll-float--inline');
    } else {
      heading.classList.add('scroll-float');
    }
    const text = heading.innerText || heading.textContent || '';
    heading.textContent = '';
    heading.setAttribute('aria-label', text);
    heading.dataset.scrollFloatReady = 'true';

    const textSpan = document.createElement('span');
    textSpan.className = 'scroll-float-text';
    Array.from(text).forEach((letter) => {
      const char = document.createElement('span');
      char.className = 'char';
      char.textContent = letter.trim() === '' ? '\u00A0' : letter;
      textSpan.appendChild(char);
      });
      heading.appendChild(textSpan);
    };
    const fitScrollFloatTitle = (heading) => {
      if (!heading.hasAttribute('data-scroll-float') || heading.classList.contains('scroll-float--inline')) return;
      const textSpan = heading.querySelector('.scroll-float-text');
      if (!textSpan) return;
      heading.style.removeProperty('--scroll-float-fit-size');
      const bounds = heading.getBoundingClientRect();
      const availableWidth = Math.max(220, Math.min(window.innerWidth - 32, bounds.width || window.innerWidth));
      const baseSize = parseFloat(window.getComputedStyle(heading).fontSize) || 96;
      const textWidth = textSpan.scrollWidth || textSpan.getBoundingClientRect().width;
      if (!textWidth) return;
      const fittedSize = Math.max(18, Math.floor(baseSize * Math.min(1, (availableWidth / textWidth) * 0.985)));
      heading.style.setProperty('--scroll-float-fit-size', fittedSize + 'px');
    };
    const fitAllScrollFloatTitles = () => {
      headings.forEach(fitScrollFloatTitle);
    };

    headings.forEach(splitHeading);
    fitAllScrollFloatTitles();
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(() => {
        fitAllScrollFloatTitles();
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    }, { passive: true });
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        fitAllScrollFloatTitles();
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    }

    if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
      headings.forEach((heading) => heading.classList.add('is-visible'));
      return;
    }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  headings.forEach((heading, index) => {
    const charElements = heading.querySelectorAll('.char');
    if (!charElements.length) return;
    const stagger = heading.classList.contains('scroll-float--inline') ? 0.018 : 0.08;
    const animationDuration = heading.classList.contains('scroll-float--inline') ? 0.72 : 1;
    const scrollStart = heading.classList.contains('scroll-float--inline') ? 'top bottom-=8%' : 'center bottom+=50%';
    const scrollEnd = heading.classList.contains('scroll-float--inline') ? 'center center+=10%' : 'bottom bottom-=40%';

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: 'back.inOut(2)',
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          id: 'scroll-float-' + index,
          trigger: heading,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  });

  window.addEventListener('gibira:smooth-scroll', () => ScrollTrigger.update(), { passive: true });
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-shape-grid-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shapeGridConfig = {
    direction: 'diagonal',
    speed: reduceMotion ? 0 : 0.14,
    borderColor: 'rgba(255,255,255,.065)',
    squareSize: 36,
    hoverFillColor: 'rgba(245,155,50,.09)',
    shape: 'square',
    hoverTrailAmount: reduceMotion ? 0 : 4,
    pixelRatioCap: 1.25
  };

  const getIsPastHero = () => {
    const hero = document.querySelector('.hero');
    const threshold = hero ? Math.max(80, hero.offsetHeight * 0.72) : 80;
    return window.scrollY > threshold;
  };

  const syncPastHeroClass = () => {
    const isPastHero = getIsPastHero();
    document.body.classList.toggle('is-past-hero', isPastHero);
    return isPastHero;
  };

  const initShapeGrid = (mount) => {
    const canvas = mount.querySelector('.shapegrid-canvas');
    if (!canvas) return null;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return null;
    const mode = mount.dataset.shapeGridMode || 'below-hero';

    const state = {
      active: false,
      visible: document.visibilityState !== 'hidden',
      mountVisible: true,
      frame: 0,
      offset: { x: 0, y: 0 },
      hasPointerActivity: false,
      hoveredCell: null,
      trailCells: [],
      cellOpacities: new Map()
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, shapeGridConfig.pixelRatioCap);
      const width = Math.max(1, Math.floor(mount.clientWidth * dpr));
      const height = Math.max(1, Math.floor(mount.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    const getViewportSize = () => ({
      width: mount.clientWidth || window.innerWidth || 1,
      height: mount.clientHeight || window.innerHeight || 1
    });

    const updateCellOpacities = () => {
      const targets = new Map();
      if (state.hoveredCell && state.hasPointerActivity) {
        targets.set(state.hoveredCell.x + ',' + state.hoveredCell.y, 1);
      }
      if (state.hasPointerActivity && shapeGridConfig.hoverTrailAmount > 0) {
        state.trailCells.forEach((cell, index) => {
          const key = cell.x + ',' + cell.y;
          if (!targets.has(key)) {
            targets.set(key, (state.trailCells.length - index) / (state.trailCells.length + 1));
          }
        });
      }
      targets.forEach((_, key) => {
        if (!state.cellOpacities.has(key)) state.cellOpacities.set(key, 0);
      });
      Array.from(state.cellOpacities.entries()).forEach(([key, opacity]) => {
        const target = targets.get(key) || 0;
        const next = opacity + (target - opacity) * 0.15;
        if (next < 0.005) state.cellOpacities.delete(key);
        else state.cellOpacities.set(key, next);
      });
    };

    const rememberHoveredCell = (cell) => {
      if (state.hoveredCell && state.hoveredCell.x === cell.x && state.hoveredCell.y === cell.y) return;
      if (state.hoveredCell && shapeGridConfig.hoverTrailAmount > 0) {
        state.trailCells.unshift({ ...state.hoveredCell });
        if (state.trailCells.length > shapeGridConfig.hoverTrailAmount) {
          state.trailCells.length = shapeGridConfig.hoverTrailAmount;
        }
      }
      state.hoveredCell = cell;
    };

    const clearPointerCells = () => {
      state.hasPointerActivity = false;
      state.hoveredCell = null;
      state.trailCells = [];
      state.cellOpacities.clear();
    };

    const handlePointerLeave = () => {
      clearPointerCells();
    };

    const handlePointerMove = (event) => {
      if (!state.active) return;
      const rect = mount.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        handlePointerLeave();
        return;
      }
      const size = shapeGridConfig.squareSize;
      const offsetX = ((state.offset.x % size) + size) % size;
      const offsetY = ((state.offset.y % size) + size) % size;
      const cell = {
        x: Math.floor((event.clientX - rect.left - offsetX) / size),
        y: Math.floor((event.clientY - rect.top - offsetY) / size)
      };
      state.hasPointerActivity = true;
      rememberHoveredCell(cell);
    };

    const drawShapeGrid = () => {
      const { width, height } = getViewportSize();
      const size = shapeGridConfig.squareSize;
      ctx.clearRect(0, 0, width, height);
      const offsetX = ((state.offset.x % size) + size) % size;
      const offsetY = ((state.offset.y % size) + size) % size;
      const cols = Math.ceil(width / size) + 3;
      const rows = Math.ceil(height / size) + 3;

      for (let col = -2; col < cols; col += 1) {
        for (let row = -2; row < rows; row += 1) {
          const sx = col * size + offsetX;
          const sy = row * size + offsetY;
          const key = col + ',' + row;
          const alpha = state.cellOpacities.get(key);
          if (alpha) {
            ctx.globalAlpha = alpha;
            ctx.fillStyle = shapeGridConfig.hoverFillColor;
            ctx.fillRect(sx, sy, size, size);
            ctx.globalAlpha = 1;
          }
          ctx.strokeStyle = shapeGridConfig.borderColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(sx, sy, size, size);
        }
      }

      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.sqrt(width * width + height * height) / 2);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(0.62, 'rgba(0,0,0,.08)');
      gradient.addColorStop(1, 'rgba(0,0,0,.74)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    function updateShapeGrid() {
      state.frame = 0;
      resizeCanvas();
      if (!state.active) return;
      const size = shapeGridConfig.squareSize;
      const speed = Math.max(shapeGridConfig.speed, 0);
      if (shapeGridConfig.direction === 'diagonal') {
        state.offset.x = (state.offset.x - speed + size) % size;
        state.offset.y = (state.offset.y - speed + size) % size;
      } else if (shapeGridConfig.direction === 'right') {
        state.offset.x = (state.offset.x - speed + size) % size;
      } else if (shapeGridConfig.direction === 'left') {
        state.offset.x = (state.offset.x + speed + size) % size;
      } else if (shapeGridConfig.direction === 'up') {
        state.offset.y = (state.offset.y + speed + size) % size;
      } else if (shapeGridConfig.direction === 'down') {
        state.offset.y = (state.offset.y - speed + size) % size;
      }
      updateCellOpacities();
      drawShapeGrid();
      state.frame = requestAnimationFrame(updateShapeGrid);
    }

    const updateActive = () => {
      const isPastHero = syncPastHeroClass();
      state.visible = document.visibilityState !== 'hidden';
      const wasActive = state.active;
      state.active = (mode === 'always' || isPastHero) && state.visible && state.mountVisible;
      if (state.active !== wasActive) {
        clearPointerCells();
      }
      if (state.active && !state.frame) {
        state.frame = requestAnimationFrame(updateShapeGrid);
      }
    };

    const resizeAndDraw = () => {
      resizeCanvas();
      drawShapeGrid();
      updateActive();
    };

    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        state.mountVisible = entries.some((entry) => entry.isIntersecting);
        updateActive();
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    resizeAndDraw();

    return { updateActive, resizeAndDraw };
  };

  const grids = mounts.map(initShapeGrid).filter(Boolean);
  if (!grids.length) return;

  const updatePastHeroState = () => {
    grids.forEach((grid) => grid.updateActive());
  };

  document.addEventListener('visibilitychange', updatePastHeroState);
  window.addEventListener('scroll', updatePastHeroState, { passive: true });
  window.addEventListener('resize', () => {
    grids.forEach((grid) => grid.resizeAndDraw());
  }, { passive: true });
  window.addEventListener('load', updatePastHeroState, { once: true });

  updatePastHeroState();
})();

(() => {
  const loops = Array.from(document.querySelectorAll('[data-logo-loop]'));
  if (!loops.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const copyHeadroom = 2;
  const minCopies = 2;
  const smoothTau = 0.25;

  loops.forEach((loop) => {
    const track = loop.querySelector('[data-logo-loop-track]');
    const sequence = loop.querySelector('[data-logo-loop-sequence]');
    if (!track || !sequence) return;

    const speed = Number(loop.dataset.logoSpeed || 78);
    const hoverSpeedValue = loop.dataset.logoHoverSpeed;
    const hoverSpeed = hoverSpeedValue === undefined ? undefined : Number(hoverSpeedValue);
    let hovered = false;
    let sequenceWidth = 0;
    let offset = 0;
    let velocity = 0;
    let frame = 0;
    let lastTimestamp = null;

    const setTransform = () => {
      if (sequenceWidth <= 0) return;
      track.style.transform = 'translate3d(' + (-offset) + 'px, 0, 0)';
    };

    const ensureCopies = () => {
      const firstRect = sequence.getBoundingClientRect();
      sequenceWidth = Math.ceil(firstRect.width);
      if (sequenceWidth <= 0) return;

      const needed = Math.max(minCopies, Math.ceil((loop.clientWidth || 1) / sequenceWidth) + copyHeadroom);
      const lists = Array.from(track.querySelectorAll('.logoloop__list'));

      while (lists.length < needed) {
        const clone = sequence.cloneNode(true);
        clone.removeAttribute('data-logo-loop-sequence');
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
        lists.push(clone);
      }

      while (lists.length > needed && lists.length > minCopies) {
        lists.pop().remove();
      }

      offset = ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
      setTransform();
    };

    const animateLogoLoop = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      const target = hovered && hoverSpeed !== undefined ? hoverSpeed : speed;
      const easingFactor = 1 - Math.exp(-deltaTime / smoothTau);

      velocity += (target - velocity) * easingFactor;
      if (sequenceWidth > 0) {
        offset = ((offset + velocity * deltaTime) % sequenceWidth + sequenceWidth) % sequenceWidth;
        setTransform();
      }

      frame = requestAnimationFrame(animateLogoLoop);
    };

    const refresh = () => {
      ensureCopies();
      if (!frame && !reduceMotion) frame = requestAnimationFrame(animateLogoLoop);
    };

    loop.addEventListener('mouseenter', () => {
      hovered = true;
    }, { passive: true });
    loop.addEventListener('mouseleave', () => {
      hovered = false;
    }, { passive: true });

    Array.from(loop.querySelectorAll('img')).forEach((image) => {
      if (image.complete) return;
      image.addEventListener('load', refresh, { once: true });
      image.addEventListener('error', refresh, { once: true });
    });

    if ('ResizeObserver' in window) {
      new ResizeObserver(refresh).observe(loop);
    } else {
      window.addEventListener('resize', refresh, { passive: true });
    }

    refresh();
    if (reduceMotion) setTransform();
  });
})();

(() => {
  const cards = Array.from(document.querySelectorAll('[data-profile-card]'));
  if (!cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clampValue = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
  const roundValue = (value, precision = 3) => Number(value.toFixed(precision));
  const adjustValue = (value, fromMin, fromMax, toMin, toMax) => (
    toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin)
  );

  Array.from(document.querySelectorAll('[data-chroma-grid]')).forEach((board) => {
    const fade = board.querySelector('.chroma-fade');
    const state = {
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      frame: 0,
    };
    const setBoardVars = (x, y) => {
      board.style.setProperty('--x', x.toFixed(2) + 'px');
      board.style.setProperty('--y', y.toFixed(2) + 'px');
    };
    const stepBoard = () => {
      const easing = reduceMotion ? 1 : 0.18;
      state.currentX += (state.targetX - state.currentX) * easing;
      state.currentY += (state.targetY - state.currentY) * easing;
      setBoardVars(state.currentX, state.currentY);
      const moving = Math.abs(state.targetX - state.currentX) > 0.1 || Math.abs(state.targetY - state.currentY) > 0.1;
      if (moving) {
        state.frame = requestAnimationFrame(stepBoard);
      } else {
        state.frame = 0;
      }
    };
    const moveBoardTo = (x, y) => {
      state.targetX = x;
      state.targetY = y;
      if (!state.frame) state.frame = requestAnimationFrame(stepBoard);
    };
    const rect = board.getBoundingClientRect();
    state.currentX = rect.width / 2;
    state.currentY = rect.height / 2;
    state.targetX = state.currentX;
    state.targetY = state.currentY;
    setBoardVars(state.currentX, state.currentY);

    board.addEventListener('pointermove', (event) => {
      const bounds = board.getBoundingClientRect();
      moveBoardTo(event.clientX - bounds.left, event.clientY - bounds.top);
      if (fade) fade.style.opacity = '0';
    }, { passive: true });
    board.addEventListener('pointerleave', () => {
      if (fade) fade.style.opacity = '1';
    }, { passive: true });
  });

  cards.forEach((wrap) => {
    const shell = wrap.querySelector('.pc-card-shell');
    if (!shell) return;

    const state = {
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      frame: 0,
      running: false,
      lastTs: 0,
      initialUntil: 0,
    };

    const setVarsFromXY = (x, y) => {
      const rect = shell.getBoundingClientRect();
      const width = rect.width || 1;
      const height = rect.height || 1;
      const percentX = clampValue((100 / width) * x);
      const percentY = clampValue((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      wrap.style.setProperty('--pointer-x', percentX.toFixed(2) + '%');
      wrap.style.setProperty('--pointer-y', percentY.toFixed(2) + '%');
      wrap.style.setProperty('--mouse-x', percentX.toFixed(2) + '%');
      wrap.style.setProperty('--mouse-y', percentY.toFixed(2) + '%');
      wrap.style.setProperty('--background-x', adjustValue(percentX, 0, 100, 35, 65).toFixed(2) + '%');
      wrap.style.setProperty('--background-y', adjustValue(percentY, 0, 100, 35, 65).toFixed(2) + '%');
      wrap.style.setProperty('--pointer-from-center', String(clampValue(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)));
      wrap.style.setProperty('--pointer-from-top', String(percentY / 100));
      wrap.style.setProperty('--pointer-from-left', String(percentX / 100));
      wrap.style.setProperty('--rotate-x', roundValue(-(centerX / 7)) + 'deg');
      wrap.style.setProperty('--rotate-y', roundValue(centerY / 6) + 'deg');
    };

    const start = () => {
      if (state.running || reduceMotion) return;
      state.running = true;
      state.lastTs = 0;
      state.frame = requestAnimationFrame(step);
    };

    const setTarget = (x, y) => {
      state.targetX = x;
      state.targetY = y;
      start();
    };

    const setImmediate = (x, y) => {
      state.currentX = x;
      state.currentY = y;
      state.targetX = x;
      state.targetY = y;
      setVarsFromXY(x, y);
    };

    function step(timestamp) {
      if (!state.running) return;
      if (!state.lastTs) state.lastTs = timestamp;
      const delta = Math.max(0, timestamp - state.lastTs) / 1000;
      state.lastTs = timestamp;
      const tau = timestamp < state.initialUntil ? 0.6 : 0.14;
      const easing = 1 - Math.exp(-delta / tau);

      state.currentX += (state.targetX - state.currentX) * easing;
      state.currentY += (state.targetY - state.currentY) * easing;
      setVarsFromXY(state.currentX, state.currentY);

      const stillFar = Math.abs(state.targetX - state.currentX) > 0.05 || Math.abs(state.targetY - state.currentY) > 0.05;
      if (stillFar || wrap.classList.contains('active')) {
        state.frame = requestAnimationFrame(step);
      } else {
        state.running = false;
        state.lastTs = 0;
        state.frame = 0;
      }
    }

    const toCenter = () => {
      const rect = shell.getBoundingClientRect();
      setTarget(rect.width / 2, rect.height / 2);
    };

    const getOffsets = (event) => {
      const rect = shell.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    wrap.addEventListener('pointerenter', (event) => {
      wrap.classList.add('active');
      shell.classList.add('entering');
      window.setTimeout(() => shell.classList.remove('entering'), 180);
      const { x, y } = getOffsets(event);
      setTarget(x, y);
    });

    wrap.addEventListener('pointermove', (event) => {
      wrap.classList.add('active');
      const { x, y } = getOffsets(event);
      setTarget(x, y);
    });

    wrap.addEventListener('pointerleave', () => {
      wrap.classList.remove('active');
      toCenter();
    });

    const rect = shell.getBoundingClientRect();
    setImmediate(Math.max(0, rect.width - 70), Math.min(60, rect.height || 60));
    state.initialUntil = performance.now() + 1200;
    toCenter();
  });
})();

(() => {
  const revealItems = Array.from(document.querySelectorAll(
    '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger-item'
  ));
  if (!revealItems.length) return;
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -4% 0px'
  });
  revealItems.forEach((item) => revealObserver.observe(item));
})();

(() => {
  const galleries = Array.from(document.querySelectorAll('[data-circular-gallery]'));
  if (!galleries.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lerp = (from, to, ease) => from + (to - from) * ease;
  const wrapValue = (value, size) => {
    if (!size) return 0;
    return ((value % size) + size) % size;
  };
  const debounce = (fn, wait) => {
    let timeout = 0;
    return (...args) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => fn(...args), wait);
    };
  };

  galleries.forEach((container) => {
    const track = container.querySelector('[data-circular-gallery-track]');
    const originalItems = Array.from(container.querySelectorAll('[data-circular-gallery-item]'));
    if (!track || !originalItems.length) return;

    const allItems = () => Array.from(track.querySelectorAll('.circular-gallery-item'));
    const removeClones = () => {
      Array.from(track.querySelectorAll('[data-circular-gallery-clone="true"]')).forEach((clone) => clone.remove());
    };
    const measureOriginalSequenceWidth = () => {
      const first = originalItems[0];
      const second = originalItems[1];
      const last = originalItems[originalItems.length - 1];
      if (!first || !last) return 1;
      const gap = second
        ? Math.max(0, second.offsetLeft - (first.offsetLeft + first.offsetWidth))
        : 0;
      return Math.max(1, (last.offsetLeft + last.offsetWidth - first.offsetLeft) + gap);
    };
    const rebuildClones = () => {
      removeClones();
      const containerWidth = container.getBoundingClientRect().width;
      const sequenceWidth = measureOriginalSequenceWidth();
      const cloneSets = Math.max(5, Math.ceil((containerWidth + sequenceWidth * 2) / Math.max(sequenceWidth, 1)));
      for (let copyIndex = 1; copyIndex <= cloneSets; copyIndex += 1) {
        originalItems.forEach((item) => {
          const clone = item.cloneNode(true);
          clone.classList.remove('reveal', 'reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale', 'stagger-item');
          clone.setAttribute('aria-hidden', 'true');
          clone.setAttribute('tabindex', '-1');
          clone.dataset.circularGalleryClone = 'true';
          clone.dataset.circularGallerySet = String(copyIndex);
          track.appendChild(clone);
        });
      }
    };
    const scrollSpeed = Number(container.dataset.scrollSpeed || 0.7);
    const scrollEase = Number(container.dataset.scrollEase || 0.15);
    const autoSpeed = reduceMotion ? 0 : Number(container.dataset.autoSpeed || 0);
    const bend = Number(container.dataset.bend || 0);
    const state = {
      current: 0,
      target: 0,
      segmentWidth: 0,
      itemStep: 0,
      isDown: false,
      isPointerInside: false,
      startX: 0,
      startTarget: 0,
      dragged: false,
      suppressClickUntil: 0,
      lastFrameTime: 0,
      frame: 0
    };

    const measure = () => {
      const first = originalItems[0];
      const second = originalItems[1];
      const firstRect = first.getBoundingClientRect();
      const secondRect = second ? second.getBoundingClientRect() : null;
      const firstClone = track.querySelector('[data-circular-gallery-clone="true"][data-circular-gallery-set="1"][data-index="0"]');
      state.itemStep = secondRect ? Math.abs(secondRect.left - firstRect.left) : firstRect.width;
      state.segmentWidth = Math.max(1, firstClone ? firstClone.offsetLeft - first.offsetLeft : measureOriginalSequenceWidth());
    };

    const updateBend = (offset) => {
      if (!bend) {
        allItems().forEach((item) => {
          item.style.setProperty('--gallery-y', '0px');
          item.style.setProperty('--gallery-rotate', '0deg');
        });
        return;
      }

      const viewportCenter = container.getBoundingClientRect().width / 2;
      allItems().forEach((item) => {
        const itemCenter = item.offsetLeft - offset + item.offsetWidth / 2;
        const distance = (itemCenter - viewportCenter) / Math.max(viewportCenter, 1);
        const clamped = Math.max(-1, Math.min(1, distance));
        item.style.setProperty('--gallery-y', (Math.abs(clamped) * bend * 18) + 'px');
        item.style.setProperty('--gallery-rotate', (clamped * bend * -2.4) + 'deg');
      });
    };

    const render = () => {
      if (!state.segmentWidth) measure();
      const offset = wrapValue(state.current, state.segmentWidth);
      track.style.transform = 'translate3d(' + (-offset) + 'px, 0, 0)';
      updateBend(offset);
    };

    const snapToNearest = debounce(() => {
      if (!state.itemStep) return;
      state.target = Math.round(state.target / state.itemStep) * state.itemStep;
      start();
    }, 180);

    function animateCircularGallery(timestamp = performance.now()) {
      const deltaSeconds = state.lastFrameTime
        ? Math.min((timestamp - state.lastFrameTime) / 1000, 0.05)
        : 0;
      state.lastFrameTime = timestamp;
      if (autoSpeed && !state.isDown && !state.isPointerInside) {
        state.target += autoSpeed * deltaSeconds;
      }
      state.current = reduceMotion ? state.target : lerp(state.current, state.target, scrollEase);
      render();

      if (autoSpeed || Math.abs(state.target - state.current) > 0.08) {
        state.frame = requestAnimationFrame(animateCircularGallery);
      } else {
        state.current = state.target;
        render();
        state.lastFrameTime = 0;
        state.frame = 0;
      }
    }

    const start = () => {
      if (state.frame) return;
      state.frame = requestAnimationFrame(animateCircularGallery);
    };

    const moveBy = (distance) => {
      state.target += distance;
      start();
    };

    const freezeAtCurrentOffset = () => {
      state.target = state.current;
      state.lastFrameTime = 0;
      render();
    };

    const onWheel = (event) => {
      const wheelDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : (event.deltaY || event.wheelDelta || event.detail || 0);
      if (!wheelDelta) return;
      if (event.cancelable) event.preventDefault();
      event.stopPropagation();
      moveBy(wheelDelta * scrollSpeed);
    };

    const getPointX = (event) => {
      if (event.touches && event.touches[0]) return event.touches[0].clientX;
      if (event.changedTouches && event.changedTouches[0]) return event.changedTouches[0].clientX;
      return event.clientX;
    };

    const onPointerDown = (event) => {
      state.isDown = true;
      state.isPointerInside = true;
      state.dragged = false;
      freezeAtCurrentOffset();
      state.startX = getPointX(event);
      state.startTarget = state.target;
      container.classList.add('is-dragging');
    };

    const onPointerMove = (event) => {
      if (!state.isDown) return;
      const distance = (state.startX - getPointX(event)) * scrollSpeed;
      if (Math.abs(distance) > 6) state.dragged = true;
      state.target = state.startTarget + distance;
      start();
    };

    const onPointerUp = () => {
      if (!state.isDown) return;
      state.isDown = false;
      container.classList.remove('is-dragging');
      state.suppressClickUntil = state.dragged ? performance.now() + 180 : 0;
      snapToNearest();
    };

    const onPointerEnter = () => {
      state.isPointerInside = true;
      freezeAtCurrentOffset();
    };

    const onPointerLeave = () => {
      state.isPointerInside = false;
      start();
    };

    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveBy(state.itemStep || scrollSpeed * 120);
        snapToNearest();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveBy(-(state.itemStep || scrollSpeed * 120));
        snapToNearest();
      } else if (event.key === 'Home') {
        event.preventDefault();
        state.target = 0;
        start();
      }
    };

    const onClick = (event) => {
      if (!state.dragged || performance.now() > state.suppressClickUntil) {
        state.dragged = false;
        state.suppressClickUntil = 0;
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      state.dragged = false;
      state.suppressClickUntil = 0;
    };

    const resize = () => {
      rebuildClones();
      measure();
      if (state.segmentWidth) {
        state.current = wrapValue(state.current, state.segmentWidth);
        state.target = state.current;
      }
      render();
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('pointerenter', onPointerEnter, { passive: true });
    container.addEventListener('pointerleave', onPointerLeave, { passive: true });
    container.addEventListener('mousedown', onPointerDown, { passive: true });
    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });
    container.addEventListener('keydown', onKeyDown);
    container.addEventListener('click', onClick, true);

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(container);
    } else {
      window.addEventListener('resize', resize, { passive: true });
    }

    resize();
    if (autoSpeed) start();
  });
})();

(() => {
  const containers = Array.from(document.querySelectorAll('[data-animated-list]'));
  if (!containers.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasObserver = 'IntersectionObserver' in window;

  const updateGradients = (container, list) => {
    const scrollTop = list.scrollTop;
    const scrollHeight = list.scrollHeight;
    const clientHeight = list.clientHeight;
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    const topOpacity = Math.min(scrollTop / 50, 1);
    const bottomOpacity = scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1);
    container.style.setProperty('--top-gradient-opacity', topOpacity.toFixed(3));
    container.style.setProperty('--bottom-gradient-opacity', bottomOpacity.toFixed(3));
  };

  const scrollItemIntoView = (list, item) => {
    if (!item) return;
    const extraMargin = 50;
    const itemTop = item.offsetTop;
    const itemBottom = itemTop + item.offsetHeight;
    const listTop = list.scrollTop;
    const listHeight = list.clientHeight;
    const behavior = reduceMotion ? 'auto' : 'smooth';

    if (itemTop < listTop + extraMargin) {
      list.scrollTo({ top: Math.max(0, itemTop - extraMargin), behavior });
    } else if (itemBottom > listTop + listHeight - extraMargin) {
      list.scrollTo({ top: itemBottom - listHeight + extraMargin, behavior });
    }
  };

  const itemObserver = hasObserver && !reduceMotion
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const triggerOnce = entry.target.closest('[data-animated-list]')?.dataset.animatedTriggerOnce === 'true';
          if (triggerOnce) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-animated-visible');
              itemObserver.unobserve(entry.target);
            }
            return;
          }
          entry.target.classList.toggle('is-animated-visible', entry.isIntersecting);
        });
      }, { threshold: 0.5 })
    : null;

  containers.forEach((container) => {
    const list = container.querySelector('[data-animated-list-scroll]');
    const items = Array.from(container.querySelectorAll('[data-animated-list-item]'));
    if (!list || !items.length) return;

    const initialIndex = Number(container.dataset.initialSelectedIndex ?? -1);
    let selectedIndex = Number.isFinite(initialIndex) ? initialIndex : -1;

    const selectItem = (index, options = {}) => {
      selectedIndex = Math.max(0, Math.min(index, items.length - 1));
      container.dataset.selectedIndex = String(selectedIndex);
      items.forEach((item, itemIndex) => {
        item.classList.toggle('is-list-selected', itemIndex === selectedIndex);
      });
      if (options.scroll) scrollItemIntoView(list, items[selectedIndex]);
      if (options.focus) items[selectedIndex]?.focus({ preventScroll: true });
    };

    items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => selectItem(index), { passive: true });
      item.addEventListener('focus', () => selectItem(index));
      item.addEventListener('click', () => selectItem(index), { passive: true });

      if (itemObserver) itemObserver.observe(item);
      else item.classList.add('is-animated-visible');
    });

    list.addEventListener('scroll', () => updateGradients(container, list), { passive: true });
    window.addEventListener('resize', () => updateGradients(container, list), { passive: true });

    if (selectedIndex >= 0) selectItem(selectedIndex);
    updateGradients(container, list);
  });

  window.addEventListener('keydown', (event) => {
    const activeContainer = document.activeElement?.closest?.('[data-animated-list]');
    if (!activeContainer) return;

    const list = activeContainer.querySelector('[data-animated-list-scroll]');
    const items = Array.from(activeContainer.querySelectorAll('[data-animated-list-item]'));
    if (!list || !items.length) return;

    const currentIndex = Math.max(0, Number(activeContainer.dataset.selectedIndex || 0));
    let nextIndex = currentIndex;

    if (event.key === 'ArrowDown') {
      nextIndex = Math.min(currentIndex + 1, items.length - 1);
    } else if (event.key === 'ArrowUp') {
      nextIndex = Math.max(currentIndex - 1, 0);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      items[currentIndex]?.click();
      return;
    } else {
      return;
    }

    event.preventDefault();
    activeContainer.dataset.selectedIndex = String(nextIndex);
    items.forEach((item, itemIndex) => {
      item.classList.toggle('is-list-selected', itemIndex === nextIndex);
    });
    items[nextIndex]?.focus({ preventScroll: true });
    scrollItemIntoView(list, items[nextIndex]);
  });
})();

(() => {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const heroes = Array.from(document.querySelectorAll('.hero'));
  const modelSection = document.querySelector('[data-cad-model-story]');
  const modelVisual = document.querySelector('[data-cad-model-visual]');
  const modelStageLabel = document.querySelector('[data-cad-stage-label]');
  const stepCards = Array.from(document.querySelectorAll('[data-cad-step]'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;

  const updateHeroProgress = () => {
    heroes.forEach((hero) => {
      const rect = hero.getBoundingClientRect();
      const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 0.82);
      hero.style.setProperty('--hero-progress', progress.toFixed(3));
    });
  };

  const updateModelStory = () => {
    if (!modelSection || !modelVisual) return;
    const rect = modelSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollable = Math.max(rect.height - viewportHeight, 1);
    const progress = clamp(-rect.top / scrollable, 0, 1);
    const stageUnit = progress * 6;
    const stage = Math.min(6, Math.max(1, Math.floor(stageUnit) + 1));
    const stageProgress = clamp(stageUnit - (stage - 1), 0, 1);
    const baseDraw = clamp(stageUnit, 0, 1);
    const highlightDraw = clamp(stageUnit - 1, 0, 1);
    const wallRise = clamp(stageUnit - 2, 0, 1);
    const baseOffset = Math.round(1700 * (1 - baseDraw));
    const highlightOffset = Math.round(900 * (1 - highlightDraw));
    modelSection.dataset.activeStep = String(stage);
    modelVisual.dataset.stage = String(stage);
    modelVisual.style.setProperty('--story-progress', progress.toFixed(3));
    modelVisual.style.setProperty('--stage-progress', stageProgress.toFixed(3));
    modelVisual.style.setProperty('--cad-base-offset', String(baseOffset));
    modelVisual.style.setProperty('--cad-highlight-offset', String(highlightOffset));
    modelVisual.style.setProperty('--wall-rise', wallRise.toFixed(3));
    modelVisual.style.setProperty('--room-scale', (0.86 + wallRise * 0.14).toFixed(3));
    modelVisual.style.setProperty('--story-rotate-y', (progress * 24).toFixed(2) + 'deg');
    modelVisual.style.setProperty('--cad-plan-y', (-progress * 38).toFixed(1) + 'px');
    modelVisual.style.setProperty('--cad-plan-tilt', (progress * 18).toFixed(1) + 'deg');
    stepCards.forEach((card, index) => {
      const current = index + 1;
      card.classList.toggle('is-active', current === stage);
      card.classList.toggle('is-passed', current < stage);
    });
    if (modelStageLabel) modelStageLabel.textContent = String(stage).padStart(2, '0');
  };

  const update = () => {
    ticking = false;
    updateHeroProgress();
    if (!reduceMotion) updateModelStory();
    else if (modelVisual) {
      modelVisual.dataset.stage = '6';
      modelSection?.setAttribute('data-active-step', '6');
      modelVisual.style.setProperty('--story-progress', '1');
      modelVisual.style.setProperty('--stage-progress', '1');
      modelVisual.style.setProperty('--cad-base-offset', '0');
      modelVisual.style.setProperty('--cad-highlight-offset', '0');
      modelVisual.style.setProperty('--wall-rise', '1');
      modelVisual.style.setProperty('--room-scale', '1');
      modelVisual.style.setProperty('--story-rotate-y', '20deg');
      stepCards.forEach((card) => {
        card.classList.remove('is-active');
        card.classList.add('is-passed');
      });
      stepCards[5]?.classList.add('is-active');
      if (modelStageLabel) modelStageLabel.textContent = '06';
    }
  };

  const schedule = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('load', schedule, { once: true });
  schedule();
})();

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (reduceMotion || isTouchDevice) return;
  const cards = Array.from(document.querySelectorAll('[data-tilt]'));
  cards.forEach((card) => {
    let frame = 0;
    const move = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--tilt-x', (y * -4).toFixed(2) + 'deg');
        card.style.setProperty('--tilt-y', (x * 5).toFixed(2) + 'deg');
        card.style.setProperty('--tilt-lift', '-4px');
      });
    };
    const leave = () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--tilt-lift', '0px');
    };
    card.addEventListener('pointermove', move, { passive: true });
    card.addEventListener('pointerleave', leave, { passive: true });
    card.addEventListener('blur', leave);
  });
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-magic-rings-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'void main() {',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    'precision highp float;',
    'uniform float uTime, uAttenuation, uLineThickness;',
    'uniform float uBaseRadius, uRadiusStep, uScaleRate;',
    'uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;',
    'uniform float uFadeIn, uFadeOut;',
    'uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;',
    'uniform vec2 uResolution, uMouse;',
    'uniform vec3 uColor, uColorTwo;',
    'uniform int uRingCount;',
    'const float HP = 1.5707963;',
    'const float CYCLE = 3.45;',
    'float fade(float t) {',
    '  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);',
    '}',
    'float ring(vec2 p, float ri, float cut, float t0, float px) {',
    '  float t = mod(uTime + t0, CYCLE);',
    '  float r = ri + t / CYCLE * uScaleRate;',
    '  float d = abs(length(p) - r);',
    '  float a = atan(abs(p.y), abs(p.x)) / HP;',
    '  float th = max(1.0 - a, 0.5) * px * uLineThickness;',
    '  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;',
    '  d += pow(cut * a, 3.0) * r;',
    '  return h * exp(-uAttenuation * d) * fade(t);',
    '}',
    'void main() {',
    '  float px = 1.0 / min(uResolution.x, uResolution.y);',
    '  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;',
    '  float cr = cos(uRotation), sr = sin(uRotation);',
    '  p = mat2(cr, -sr, sr, cr) * p;',
    '  p -= uMouse * uMouseInfluence;',
    '  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;',
    '  p /= sc;',
    '  vec3 c = vec3(0.0);',
    '  float rcf = max(float(uRingCount) - 1.0, 1.0);',
    '  for (int i = 0; i < 10; i++) {',
    '    if (i >= uRingCount) break;',
    '    float fi = float(i);',
    '    vec2 pr = p - fi * uParallax * uMouse;',
    '    vec3 rc = mix(uColor, uColorTwo, fi / rcf);',
    '    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));',
    '  }',
    '  c *= 1.0 + uBurst * 2.0;',
    '  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);',
    '  c += (n - 0.5) * uNoiseAmount;',
    '  gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);',
    '}'
  ].join('\\n');

  const ringsConfig = {
    color: '#ff4d4d',
    colorTwo: '#e5edf6',
    speed: 1,
    ringCount: 6,
    attenuation: 8,
    lineThickness: 2.6,
    baseRadius: 0.35,
    radiusStep: 0.1,
    scaleRate: 0.1,
    opacity: 1.25,
    noiseAmount: 0.06,
    rotation: 0,
    ringGap: 1.5,
    fadeIn: 0.7,
    fadeOut: 0.5,
    followMouse: true,
    mouseInfluence: 0.2,
    hoverScale: 1.2,
    parallax: 0.05,
    clickBurst: true,
    pixelRatioCap: 1,
    maxFps: 60
  };

  const hexToRgb = (hex) => {
    const normalized = hex.replace('#', '').trim();
    const value = normalized.length === 3
      ? normalized.split('').map((ch) => ch + ch).join('')
      : normalized.padEnd(6, '0').slice(0, 6);
    const intValue = parseInt(value, 16);
    return [
      ((intValue >> 16) & 255) / 255,
      ((intValue >> 8) & 255) / 255,
      (intValue & 255) / 255
    ];
  };

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initMagicRings = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    }) || canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      canvas.remove();
      return;
    }

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, 'position');
    const uniforms = {
      uTime: gl.getUniformLocation(program, 'uTime'),
      uAttenuation: gl.getUniformLocation(program, 'uAttenuation'),
      uResolution: gl.getUniformLocation(program, 'uResolution'),
      uColor: gl.getUniformLocation(program, 'uColor'),
      uColorTwo: gl.getUniformLocation(program, 'uColorTwo'),
      uLineThickness: gl.getUniformLocation(program, 'uLineThickness'),
      uBaseRadius: gl.getUniformLocation(program, 'uBaseRadius'),
      uRadiusStep: gl.getUniformLocation(program, 'uRadiusStep'),
      uScaleRate: gl.getUniformLocation(program, 'uScaleRate'),
      uRingCount: gl.getUniformLocation(program, 'uRingCount'),
      uOpacity: gl.getUniformLocation(program, 'uOpacity'),
      uNoiseAmount: gl.getUniformLocation(program, 'uNoiseAmount'),
      uRotation: gl.getUniformLocation(program, 'uRotation'),
      uRingGap: gl.getUniformLocation(program, 'uRingGap'),
      uFadeIn: gl.getUniformLocation(program, 'uFadeIn'),
      uFadeOut: gl.getUniformLocation(program, 'uFadeOut'),
      uMouse: gl.getUniformLocation(program, 'uMouse'),
      uMouseInfluence: gl.getUniformLocation(program, 'uMouseInfluence'),
      uHoverAmount: gl.getUniformLocation(program, 'uHoverAmount'),
      uHoverScale: gl.getUniformLocation(program, 'uHoverScale'),
      uParallax: gl.getUniformLocation(program, 'uParallax'),
      uBurst: gl.getUniformLocation(program, 'uBurst')
    };

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const color = hexToRgb(ringsConfig.color);
    const colorTwo = hexToRgb(ringsConfig.colorTwo);
    gl.uniform1f(uniforms.uAttenuation, ringsConfig.attenuation);
    gl.uniform3f(uniforms.uColor, color[0], color[1], color[2]);
    gl.uniform3f(uniforms.uColorTwo, colorTwo[0], colorTwo[1], colorTwo[2]);
    gl.uniform1f(uniforms.uLineThickness, ringsConfig.lineThickness);
    gl.uniform1f(uniforms.uBaseRadius, ringsConfig.baseRadius);
    gl.uniform1f(uniforms.uRadiusStep, ringsConfig.radiusStep);
    gl.uniform1f(uniforms.uScaleRate, ringsConfig.scaleRate);
    gl.uniform1i(uniforms.uRingCount, ringsConfig.ringCount);
    gl.uniform1f(uniforms.uOpacity, ringsConfig.opacity);
    gl.uniform1f(uniforms.uNoiseAmount, ringsConfig.noiseAmount);
    gl.uniform1f(uniforms.uRotation, (ringsConfig.rotation * Math.PI) / 180);
    gl.uniform1f(uniforms.uRingGap, ringsConfig.ringGap);
    gl.uniform1f(uniforms.uFadeIn, ringsConfig.fadeIn);
    gl.uniform1f(uniforms.uFadeOut, ringsConfig.fadeOut);
    gl.uniform1f(uniforms.uMouseInfluence, ringsConfig.followMouse ? ringsConfig.mouseInfluence : 0);
    gl.uniform1f(uniforms.uHoverScale, ringsConfig.hoverScale);
    gl.uniform1f(uniforms.uParallax, ringsConfig.parallax);

    const targetMouse = { x: 0, y: 0 };
    const smoothMouse = { x: 0, y: 0 };
    let hoverAmount = 0;
    let isHovered = false;
    let burst = 0;
    let isVisible = true;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, ringsConfig.pixelRatioCap);
      const pixelWidth = Math.max(1, Math.floor(width * dpr));
      const pixelHeight = Math.max(1, Math.floor(height * dpr));
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
        gl.viewport(0, 0, pixelWidth, pixelHeight);
        gl.uniform2f(uniforms.uResolution, pixelWidth, pixelHeight);
      }
    };

    const updatePointer = (event) => {
      const rect = mount.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      isHovered = inside;
      if (inside && rect.width > 0 && rect.height > 0) {
        targetMouse.x = (event.clientX - rect.left) / rect.width - 0.5;
        targetMouse.y = -((event.clientY - rect.top) / rect.height - 0.5);
      } else {
        targetMouse.x = 0;
        targetMouse.y = 0;
      }
    };

    const triggerBurst = (event) => {
      const rect = mount.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (inside) burst = 1;
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('pointerleave', () => {
      isHovered = false;
      targetMouse.x = 0;
      targetMouse.y = 0;
    }, { passive: true });
    window.addEventListener('click', triggerBurst, { passive: true });
    resize();

    const startTime = performance.now();
    const frameInterval = 1000 / ringsConfig.maxFps;
    let lastDraw = -Infinity;
    const draw = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.08;
        smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.08;
        hoverAmount += ((isHovered ? 1 : 0) - hoverAmount) * 0.08;
        burst *= 0.95;
        if (burst < 0.001) burst = 0;

        const seconds = reduceMotion ? 0 : (now - startTime) * 0.001 * ringsConfig.speed;
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uniforms.uTime, seconds);
        gl.uniform2f(uniforms.uMouse, smoothMouse.x, smoothMouse.y);
        gl.uniform1f(uniforms.uHoverAmount, hoverAmount);
        gl.uniform1f(uniforms.uBurst, ringsConfig.clickBurst ? burst : 0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    };
    draw(startTime);
  };

  mounts.forEach(initMagicRings);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-faulty-terminal-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'attribute vec2 uv;',
    'varying vec2 vUv;',
    'void main() {',
    '  vUv = uv;',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    'precision highp float;',
    '',
    'varying vec2 vUv;',
    'uniform float iTime;',
    'uniform vec3 iResolution;',
    'uniform float uScale;',
    'uniform vec2 uGridMul;',
    'uniform float uDigitSize;',
    'uniform float uScanlineIntensity;',
    'uniform float uGlitchAmount;',
    'uniform float uFlickerAmount;',
    'uniform float uNoiseAmp;',
    'uniform float uChromaticAberration;',
    'uniform float uDither;',
    'uniform float uCurvature;',
    'uniform vec3 uTint;',
    'uniform vec2 uMouse;',
    'uniform float uMouseStrength;',
    'uniform float uUseMouse;',
    'uniform float uPageLoadProgress;',
    'uniform float uUsePageLoadAnimation;',
    'uniform float uBrightness;',
    'float time;',
    '',
    'float hash21(vec2 p){',
    '  p = fract(p * 234.56);',
    '  p += dot(p, p + 34.56);',
    '  return fract(p.x * p.y);',
    '}',
    '',
    'float noise(vec2 p)',
    '{',
    '  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2;',
    '}',
    '',
    'mat2 rotate(float angle)',
    '{',
    '  float c = cos(angle);',
    '  float s = sin(angle);',
    '  return mat2(c, -s, s, c);',
    '}',
    '',
    'float fbm(vec2 p)',
    '{',
    '  p *= 1.1;',
    '  float f = 0.0;',
    '  float amp = 0.5 * uNoiseAmp;',
    '  mat2 modify0 = rotate(time * 0.02);',
    '  f += amp * noise(p);',
    '  p = modify0 * p * 2.0;',
    '  amp *= 0.454545;',
    '  mat2 modify1 = rotate(time * 0.02);',
    '  f += amp * noise(p);',
    '  p = modify1 * p * 2.0;',
    '  amp *= 0.454545;',
    '  mat2 modify2 = rotate(time * 0.08);',
    '  f += amp * noise(p);',
    '  return f;',
    '}',
    '',
    'float pattern(vec2 p, out vec2 q, out vec2 r) {',
    '  vec2 offset1 = vec2(1.0);',
    '  vec2 offset0 = vec2(0.0);',
    '  mat2 rot01 = rotate(0.1 * time);',
    '  mat2 rot1 = rotate(0.1);',
    '  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));',
    '  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));',
    '  return fbm(p + r);',
    '}',
    '',
    'float digit(vec2 p){',
    '  vec2 grid = uGridMul * 15.0;',
    '  vec2 s = floor(p * grid) / grid;',
    '  p = p * grid;',
    '  vec2 q, r;',
    '  float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;',
    '  if(uUseMouse > 0.5){',
    '    vec2 mouseWorld = uMouse * uScale;',
    '    float distToMouse = distance(s, mouseWorld);',
    '    float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;',
    '    intensity += mouseInfluence;',
    '    float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;',
    '    intensity += ripple;',
    '  }',
    '  if(uUsePageLoadAnimation > 0.5){',
    '    float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);',
    '    float cellDelay = cellRandom * 0.8;',
    '    float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);',
    '    float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);',
    '    intensity *= fadeAlpha;',
    '  }',
    '  p = fract(p);',
    '  p *= uDigitSize;',
    '  float px5 = p.x * 5.0;',
    '  float py5 = (1.0 - p.y) * 5.0;',
    '  float x = fract(px5);',
    '  float y = fract(py5);',
    '  float i = floor(py5) - 2.0;',
    '  float j = floor(px5) - 2.0;',
    '  float n = i * i + j * j;',
    '  float f = n * 0.0625;',
    '  float isOn = step(0.1, intensity - f);',
    '  float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);',
    '  return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;',
    '}',
    '',
    'float onOff(float a, float b, float c)',
    '{',
    '  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;',
    '}',
    '',
    'float displace(vec2 look)',
    '{',
    '  float y = look.y - mod(iTime * 0.25, 1.0);',
    '  float window = 1.0 / (1.0 + 50.0 * y * y);',
    '  return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;',
    '}',
    '',
    'vec3 getColor(vec2 p){',
    '  float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;',
    '  bar *= uScanlineIntensity;',
    '  float displacement = displace(p);',
    '  p.x += displacement;',
    '  if (uGlitchAmount != 1.0) {',
    '    float extra = displacement * (uGlitchAmount - 1.0);',
    '    p.x += extra;',
    '  }',
    '  float middle = digit(p);',
    '  const float off = 0.002;',
    '  float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +',
    '              digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +',
    '              digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));',
    '  vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;',
    '  return baseColor;',
    '}',
    '',
    'vec2 barrel(vec2 uv){',
    '  vec2 c = uv * 2.0 - 1.0;',
    '  float r2 = dot(c, c);',
    '  c *= 1.0 + uCurvature * r2;',
    '  return c * 0.5 + 0.5;',
    '}',
    '',
    'void main() {',
    '  time = iTime * 0.333333;',
    '  vec2 uv = vUv;',
    '  if(uCurvature != 0.0){',
    '    uv = barrel(uv);',
    '  }',
    '  vec2 p = uv * uScale;',
    '  vec3 col = getColor(p);',
    '  if(uChromaticAberration != 0.0){',
    '    vec2 ca = vec2(uChromaticAberration) / iResolution.xy;',
    '    col.r = getColor(p + ca).r;',
    '    col.b = getColor(p - ca).b;',
    '  }',
    '  col *= uTint;',
    '  col *= uBrightness;',
    '  if(uDither > 0.0){',
    '    float rnd = hash21(gl_FragCoord.xy);',
    '    col += (rnd - 0.5) * (uDither * 0.003922);',
    '  }',
    '  gl_FragColor = vec4(col, 1.0);',
    '}'
  ].join('\\n');

  const faultyTerminalConfig = {
    scale: 1.5,
    gridMul: [2, 1],
    digitSize: 1.2,
    timeScale: 1,
    scanlineIntensity: 1,
    glitchAmount: 1,
    flickerAmount: 1,
    noiseAmp: 1,
    chromaticAberration: 0,
    dither: 0,
    curvature: 0,
    tint: '#EF4444',
    mouseReact: true,
    mouseStrength: 0.5,
    pageLoadAnimation: false,
    brightness: 1,
    maxFps: 45,
    pixelRatioCap: 1
  };

  const hexToRgb = (hex) => {
    let value = hex.replace('#', '').trim();
    if (value.length === 3) value = value.split('').map((ch) => ch + ch).join('');
    const intValue = parseInt(value.padEnd(6, '0').slice(0, 6), 16);
    return [
      ((intValue >> 16) & 255) / 255,
      ((intValue >> 8) & 255) / 255,
      (intValue & 255) / 255
    ];
  };

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initFaultyTerminal = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      canvas.remove();
      return;
    }

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    gl.clearColor(0, 0, 0, 1);
    const vertices = new Float32Array([
      -1, -1, 0, 0,
       1, -1, 1, 0,
      -1,  1, 0, 1,
       1,  1, 1, 1
    ]);
    const buffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, 'position');
    const uvLocation = gl.getAttribLocation(program, 'uv');
    const uniforms = {
      iTime: gl.getUniformLocation(program, 'iTime'),
      iResolution: gl.getUniformLocation(program, 'iResolution'),
      uScale: gl.getUniformLocation(program, 'uScale'),
      uGridMul: gl.getUniformLocation(program, 'uGridMul'),
      uDigitSize: gl.getUniformLocation(program, 'uDigitSize'),
      uScanlineIntensity: gl.getUniformLocation(program, 'uScanlineIntensity'),
      uGlitchAmount: gl.getUniformLocation(program, 'uGlitchAmount'),
      uFlickerAmount: gl.getUniformLocation(program, 'uFlickerAmount'),
      uNoiseAmp: gl.getUniformLocation(program, 'uNoiseAmp'),
      uChromaticAberration: gl.getUniformLocation(program, 'uChromaticAberration'),
      uDither: gl.getUniformLocation(program, 'uDither'),
      uCurvature: gl.getUniformLocation(program, 'uCurvature'),
      uTint: gl.getUniformLocation(program, 'uTint'),
      uMouse: gl.getUniformLocation(program, 'uMouse'),
      uMouseStrength: gl.getUniformLocation(program, 'uMouseStrength'),
      uUseMouse: gl.getUniformLocation(program, 'uUseMouse'),
      uPageLoadProgress: gl.getUniformLocation(program, 'uPageLoadProgress'),
      uUsePageLoadAnimation: gl.getUniformLocation(program, 'uUsePageLoadAnimation'),
      uBrightness: gl.getUniformLocation(program, 'uBrightness')
    };
    const tint = hexToRgb(faultyTerminalConfig.tint);

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uvLocation);
    gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 16, 8);

    gl.uniform1f(uniforms.uScale, faultyTerminalConfig.scale);
    gl.uniform2fv(uniforms.uGridMul, new Float32Array(faultyTerminalConfig.gridMul));
    gl.uniform1f(uniforms.uDigitSize, faultyTerminalConfig.digitSize);
    gl.uniform1f(uniforms.uScanlineIntensity, faultyTerminalConfig.scanlineIntensity);
    gl.uniform1f(uniforms.uGlitchAmount, faultyTerminalConfig.glitchAmount);
    gl.uniform1f(uniforms.uFlickerAmount, faultyTerminalConfig.flickerAmount);
    gl.uniform1f(uniforms.uNoiseAmp, faultyTerminalConfig.noiseAmp);
    gl.uniform1f(uniforms.uChromaticAberration, faultyTerminalConfig.chromaticAberration);
    gl.uniform1f(uniforms.uDither, faultyTerminalConfig.dither);
    gl.uniform1f(uniforms.uCurvature, faultyTerminalConfig.curvature);
    gl.uniform3f(uniforms.uTint, tint[0], tint[1], tint[2]);
    gl.uniform1f(uniforms.uMouseStrength, faultyTerminalConfig.mouseStrength);
    gl.uniform1f(uniforms.uUseMouse, faultyTerminalConfig.mouseReact ? 1 : 0);
    gl.uniform1f(uniforms.uPageLoadProgress, faultyTerminalConfig.pageLoadAnimation ? 0 : 1);
    gl.uniform1f(uniforms.uUsePageLoadAnimation, faultyTerminalConfig.pageLoadAnimation ? 1 : 0);
    gl.uniform1f(uniforms.uBrightness, faultyTerminalConfig.brightness);

    const targetMouse = { x: 0.5, y: 0.5 };
    const smoothMouse = { x: 0.5, y: 0.5 };
    let isVisible = true;

    const resize = () => {
      const bounds = mount.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, faultyTerminalConfig.pixelRatioCap);
      const width = Math.max(1, Math.floor(bounds.width * dpr));
      const height = Math.max(1, Math.floor(bounds.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform3f(uniforms.iResolution, width, height, width / height);
      }
    };

    const updatePointer = (event) => {
      const rect = mount.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (inside && rect.width > 0 && rect.height > 0) {
        targetMouse.x = (event.clientX - rect.left) / rect.width;
        targetMouse.y = 1 - (event.clientY - rect.top) / rect.height;
      } else {
        targetMouse.x = 0.5;
        targetMouse.y = 0.5;
      }
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }
    window.addEventListener('resize', resize, { passive: true });
    if (faultyTerminalConfig.mouseReact) window.addEventListener('pointermove', updatePointer, { passive: true });
    resize();

    const startTime = performance.now();
    const frameInterval = 1000 / faultyTerminalConfig.maxFps;
    let lastDraw = -Infinity;
    let loadProgress = faultyTerminalConfig.pageLoadAnimation ? 0 : 1;
    const draw = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.08;
        smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.08;
        const seconds = reduceMotion ? 0 : ((now - startTime) * 0.001) * faultyTerminalConfig.timeScale;
        if (faultyTerminalConfig.pageLoadAnimation) loadProgress = Math.min((now - startTime) / 2000, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uniforms.iTime, seconds);
        gl.uniform2f(uniforms.uMouse, smoothMouse.x, smoothMouse.y);
        gl.uniform1f(uniforms.uPageLoadProgress, loadProgress);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    };
    draw(startTime);
  };

  mounts.forEach(initFaultyTerminal);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-floating-lines-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'void main() {',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    'precision highp float;',
    'uniform float uTime;',
    'uniform vec2 uResolution;',
    'uniform float uAnimationSpeed;',
    'uniform int uEnableTop;',
    'uniform int uEnableMiddle;',
    'uniform int uEnableBottom;',
    'uniform int uTopLineCount;',
    'uniform int uMiddleLineCount;',
    'uniform int uBottomLineCount;',
    'uniform float uTopLineDistance;',
    'uniform float uMiddleLineDistance;',
    'uniform float uBottomLineDistance;',
    'uniform vec3 uTopWavePosition;',
    'uniform vec3 uMiddleWavePosition;',
    'uniform vec3 uBottomWavePosition;',
    'uniform vec2 uMouse;',
    'uniform int uInteractive;',
    'uniform float uBendRadius;',
    'uniform float uBendStrength;',
    'uniform float uBendInfluence;',
    'uniform int uParallax;',
    'uniform vec2 uParallaxOffset;',
    'uniform vec3 uLineGradient[8];',
    'uniform int uLineGradientCount;',
    'const int MAX_LINES = 32;',
    'mat2 rotate(float r) {',
    '  return mat2(cos(r), sin(r), -sin(r), cos(r));',
    '}',
    'vec3 backgroundGlow(vec2 uv) {',
    '  float center = exp(-dot(uv * vec2(0.72, 1.08), uv * vec2(0.72, 1.08)) * 0.54);',
    '  float ribbon = exp(-abs(uv.y - sin(uv.x * 1.28 + 0.2) * 0.22) * 1.26);',
    '  vec3 red = vec3(1.0, 0.12, 0.08);',
    '  vec3 amber = vec3(1.0, 0.56, 0.18);',
    '  vec3 blue = vec3(0.25, 0.34, 1.0);',
    '  return vec3(0.032, 0.014, 0.018) + red * center * 0.14 + amber * ribbon * 0.08 + blue * center * 0.04;',
    '}',
    'vec3 gradientAt(float t) {',
    '  if (uLineGradientCount <= 1) return uLineGradient[0];',
    '  float scaled = clamp(t, 0.0, 0.9999) * float(uLineGradientCount - 1);',
    '  if (scaled < 1.0) return mix(uLineGradient[0], uLineGradient[1], scaled);',
    '  if (scaled < 2.0) return mix(uLineGradient[1], uLineGradient[2], scaled - 1.0);',
    '  if (scaled < 3.0) return mix(uLineGradient[2], uLineGradient[3], scaled - 2.0);',
    '  if (scaled < 4.0) return mix(uLineGradient[3], uLineGradient[4], scaled - 3.0);',
    '  if (scaled < 5.0) return mix(uLineGradient[4], uLineGradient[5], scaled - 4.0);',
    '  if (scaled < 6.0) return mix(uLineGradient[5], uLineGradient[6], scaled - 5.0);',
    '  return mix(uLineGradient[6], uLineGradient[7], scaled - 6.0);',
    '}',
    'vec3 getLineColor(float t, vec3 baseColor) {',
    '  if (uLineGradientCount <= 0) return baseColor;',
    '  return gradientAt(t) * 1.05;',
    '}',
    'float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {',
    '  float time = uTime * uAnimationSpeed;',
    '  float xOffset = offset;',
    '  float xMovement = time * 0.1;',
    '  float amp = sin(offset + time * 0.2) * 0.3;',
    '  float y = sin(uv.x + xOffset + xMovement) * amp;',
    '  if (shouldBend) {',
    '    vec2 d = screenUv - mouseUv;',
    '    float influence = exp(-dot(d, d) * uBendRadius);',
    '    float bendOffset = (mouseUv.y - screenUv.y) * influence * uBendStrength * uBendInfluence;',
    '    y += bendOffset;',
    '  }',
    '  float m = uv.y - y;',
    '  return 0.0115 / max(abs(m) + 0.018, 1e-3) + 0.006;',
    '}',
    'void main() {',
    '  vec2 baseUv = (2.0 * gl_FragCoord.xy - uResolution.xy) / uResolution.y;',
    '  baseUv.y *= -1.0;',
    '  if (uParallax == 1) baseUv += uParallaxOffset;',
    '  vec3 col = backgroundGlow(baseUv);',
    '  vec3 baseLine = vec3(1.0);',
    '  vec2 mouseUv = vec2(0.0);',
    '  if (uInteractive == 1) {',
    '    mouseUv = (2.0 * uMouse - uResolution.xy) / uResolution.y;',
    '    mouseUv.y *= -1.0;',
    '  }',
    '  if (uEnableBottom == 1) {',
    '    for (int i = 0; i < MAX_LINES; ++i) {',
    '      if (i >= uBottomLineCount) continue;',
    '      float fi = float(i);',
    '      float t = fi / max(float(uBottomLineCount - 1), 1.0);',
    '      vec3 lineCol = getLineColor(t, baseLine);',
    '      float angle = uBottomWavePosition.z * log(length(baseUv) + 1.0);',
    '      vec2 ruv = baseUv * rotate(angle);',
    '      col += lineCol * wave(ruv + vec2(uBottomLineDistance * fi + uBottomWavePosition.x, uBottomWavePosition.y), 1.5 + 0.2 * fi, baseUv, mouseUv, uInteractive == 1) * 0.11;',
    '    }',
    '  }',
    '  if (uEnableMiddle == 1) {',
    '    for (int i = 0; i < MAX_LINES; ++i) {',
    '      if (i >= uMiddleLineCount) continue;',
    '      float fi = float(i);',
    '      float t = fi / max(float(uMiddleLineCount - 1), 1.0);',
    '      vec3 lineCol = getLineColor(t, baseLine);',
    '      float angle = uMiddleWavePosition.z * log(length(baseUv) + 1.0);',
    '      vec2 ruv = baseUv * rotate(angle);',
    '      col += lineCol * wave(ruv + vec2(uMiddleLineDistance * fi + uMiddleWavePosition.x, uMiddleWavePosition.y), 2.0 + 0.15 * fi, baseUv, mouseUv, uInteractive == 1) * 0.32;',
    '    }',
    '  }',
    '  if (uEnableTop == 1) {',
    '    for (int i = 0; i < MAX_LINES; ++i) {',
    '      if (i >= uTopLineCount) continue;',
    '      float fi = float(i);',
    '      float t = fi / max(float(uTopLineCount - 1), 1.0);',
    '      vec3 lineCol = getLineColor(t, baseLine);',
    '      float angle = uTopWavePosition.z * log(length(baseUv) + 1.0);',
    '      vec2 ruv = baseUv * rotate(angle);',
    '      ruv.x *= -1.0;',
    '      col += lineCol * wave(ruv + vec2(uTopLineDistance * fi + uTopWavePosition.x, uTopWavePosition.y), 1.0 + 0.2 * fi, baseUv, mouseUv, uInteractive == 1) * 0.07;',
    '    }',
    '  }',
    '  gl_FragColor = vec4(min(col * 1.08, vec3(1.0)), 1.0);',
    '}'
  ].join('\\n');

  const floatingLinesConfig = {
    lineGradient: ['#ef4444', '#000000', '#111111'],
    topLineCount: 8,
    middleLineCount: 8,
    bottomLineCount: 8,
    topLineDistance: 0.08,
    middleLineDistance: 0.08,
    bottomLineDistance: 0.08,
    topWavePosition: [10.0, 0.5, -0.4],
    middleWavePosition: [5.0, 0.0, 0.2],
    bottomWavePosition: [2.0, -0.7, -1.0],
    animationSpeed: 1,
    bendRadius: 8.0,
    bendStrength: -2.0,
    mouseDamping: 0.05,
    parallaxStrength: 0.18,
    pixelRatioCap: 1.5,
    maxFps: 60
  };

  const hexToRgb = (hex) => {
    const normalized = hex.replace('#', '').trim();
    const value = normalized.length === 3
      ? normalized.split('').map((ch) => ch + ch).join('')
      : normalized.padEnd(6, '0').slice(0, 6);
    const intValue = parseInt(value, 16);
    return [
      ((intValue >> 16) & 255) / 255,
      ((intValue >> 8) & 255) / 255,
      (intValue & 255) / 255
    ];
  };

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initFloatingLines = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: true,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      canvas.remove();
      return;
    }

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {};
    [
      'uTime',
      'uResolution',
      'uAnimationSpeed',
      'uEnableTop',
      'uEnableMiddle',
      'uEnableBottom',
      'uTopLineCount',
      'uMiddleLineCount',
      'uBottomLineCount',
      'uTopLineDistance',
      'uMiddleLineDistance',
      'uBottomLineDistance',
      'uTopWavePosition',
      'uMiddleWavePosition',
      'uBottomWavePosition',
      'uMouse',
      'uInteractive',
      'uBendRadius',
      'uBendStrength',
      'uBendInfluence',
      'uParallax',
      'uParallaxOffset',
      'uLineGradientCount'
    ].forEach((name) => {
      uniforms[name] = gl.getUniformLocation(program, name);
    });
    uniforms.uLineGradient = gl.getUniformLocation(program, 'uLineGradient[0]');

    const gradientValues = new Float32Array(8 * 3);
    floatingLinesConfig.lineGradient.slice(0, 8).forEach((hex, index) => {
      const rgb = hexToRgb(hex);
      gradientValues[index * 3] = rgb[0];
      gradientValues[index * 3 + 1] = rgb[1];
      gradientValues[index * 3 + 2] = rgb[2];
    });

    gl.uniform1f(uniforms.uAnimationSpeed, floatingLinesConfig.animationSpeed);
    gl.uniform1i(uniforms.uEnableTop, 1);
    gl.uniform1i(uniforms.uEnableMiddle, 1);
    gl.uniform1i(uniforms.uEnableBottom, 1);
    gl.uniform1i(uniforms.uTopLineCount, floatingLinesConfig.topLineCount);
    gl.uniform1i(uniforms.uMiddleLineCount, floatingLinesConfig.middleLineCount);
    gl.uniform1i(uniforms.uBottomLineCount, floatingLinesConfig.bottomLineCount);
    gl.uniform1f(uniforms.uTopLineDistance, floatingLinesConfig.topLineDistance);
    gl.uniform1f(uniforms.uMiddleLineDistance, floatingLinesConfig.middleLineDistance);
    gl.uniform1f(uniforms.uBottomLineDistance, floatingLinesConfig.bottomLineDistance);
    gl.uniform3fv(uniforms.uTopWavePosition, new Float32Array(floatingLinesConfig.topWavePosition));
    gl.uniform3fv(uniforms.uMiddleWavePosition, new Float32Array(floatingLinesConfig.middleWavePosition));
    gl.uniform3fv(uniforms.uBottomWavePosition, new Float32Array(floatingLinesConfig.bottomWavePosition));
    gl.uniform1i(uniforms.uInteractive, reduceMotion ? 0 : 1);
    gl.uniform1f(uniforms.uBendRadius, floatingLinesConfig.bendRadius);
    gl.uniform1f(uniforms.uBendStrength, floatingLinesConfig.bendStrength);
    gl.uniform1i(uniforms.uParallax, reduceMotion ? 0 : 1);
    gl.uniform1i(uniforms.uLineGradientCount, Math.min(floatingLinesConfig.lineGradient.length, 8));
    gl.uniform3fv(uniforms.uLineGradient, gradientValues);

    const targetMouse = { x: -10000, y: -10000 };
    const currentMouse = { x: -10000, y: -10000 };
    const targetParallax = { x: 0, y: 0 };
    const currentParallax = { x: 0, y: 0 };
    let targetInfluence = 0;
    let currentInfluence = 0;
    let isVisible = true;
    let dpr = 1;
    let lastDraw = -Infinity;
    const frameInterval = 1000 / floatingLinesConfig.maxFps;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, floatingLinesConfig.pixelRatioCap);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.uResolution, canvas.width, canvas.height);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) {
        targetInfluence = 0;
        return;
      }
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetMouse.x = x * dpr;
      targetMouse.y = (rect.height - y) * dpr;
      targetInfluence = 1;
      const offsetX = (x - rect.width / 2) / rect.width;
      const offsetY = -(y - rect.height / 2) / rect.height;
      targetParallax.x = offsetX * floatingLinesConfig.parallaxStrength;
      targetParallax.y = offsetY * floatingLinesConfig.parallaxStrength;
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    resize();

    const startTime = performance.now();
    const render = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        currentMouse.x += (targetMouse.x - currentMouse.x) * floatingLinesConfig.mouseDamping;
        currentMouse.y += (targetMouse.y - currentMouse.y) * floatingLinesConfig.mouseDamping;
        currentInfluence += (targetInfluence - currentInfluence) * floatingLinesConfig.mouseDamping;
        currentParallax.x += (targetParallax.x - currentParallax.x) * floatingLinesConfig.mouseDamping;
        currentParallax.y += (targetParallax.y - currentParallax.y) * floatingLinesConfig.mouseDamping;
        gl.uniform1f(uniforms.uTime, reduceMotion ? 0 : (now - startTime) * 0.001);
        gl.uniform2f(uniforms.uMouse, currentMouse.x, currentMouse.y);
        gl.uniform1f(uniforms.uBendInfluence, currentInfluence);
        gl.uniform2f(uniforms.uParallaxOffset, currentParallax.x, currentParallax.y);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      if (!reduceMotion) requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  mounts.forEach(initFloatingLines);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-grid-scan-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'void main() {',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    '#extension GL_OES_standard_derivatives : enable',
    'precision highp float;',
    'uniform vec3 iResolution;',
    'uniform float iTime;',
    'uniform vec2 uSkew;',
    'uniform float uTilt;',
    'uniform float uYaw;',
    'uniform float uLineThickness;',
    'uniform vec3 uLinesColor;',
    'uniform vec3 uScanColor;',
    'uniform float uGridScale;',
    'uniform float uLineStyle;',
    'uniform float uLineJitter;',
    'uniform float uScanOpacity;',
    'uniform float uScanDirection;',
    'uniform float uNoise;',
    'uniform float uBloomOpacity;',
    'uniform float uScanGlow;',
    'uniform float uScanSoftness;',
    'uniform float uPhaseTaper;',
    'uniform float uScanDuration;',
    'uniform float uScanDelay;',
    'uniform float uScanStarts[8];',
    'uniform float uScanCount;',
    'const int MAX_SCANS = 8;',
    'float smoother01(float a, float b, float x) {',
    '  float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);',
    '  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);',
    '}',
    'void mainImage(out vec4 fragColor, in vec2 fragCoord) {',
    '  vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;',
    '  vec3 ro = vec3(0.0);',
    '  vec3 rd = normalize(vec3(p, 2.0));',
    '  float cR = cos(uTilt), sR = sin(uTilt);',
    '  rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;',
    '  float cY = cos(uYaw), sY = sin(uYaw);',
    '  rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;',
    '  vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));',
    '  rd.xy += skew * rd.z;',
    '  vec3 color = vec3(0.0);',
    '  float minT = 1e20;',
    '  float gridScale = max(1e-5, uGridScale);',
    '  float fadeStrength = 2.0;',
    '  vec2 gridUV = vec2(0.0);',
    '  float hitIsY = 1.0;',
    '  for (int i = 0; i < 4; i++) {',
    '    float isY = float(i < 2);',
    '    float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);',
    '    float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);',
    '    float den = isY * rd.y + (1.0 - isY) * rd.x;',
    '    float t = num / den;',
    '    vec3 h = ro + rd * t;',
    '    float depthBoost = smoothstep(0.0, 3.0, h.z);',
    '    h.xy += skew * 0.15 * depthBoost;',
    '    bool use = t > 0.0 && t < minT;',
    '    gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;',
    '    minT = use ? t : minT;',
    '    hitIsY = use ? isY : hitIsY;',
    '  }',
    '  vec3 hit = ro + rd * minT;',
    '  float dist = length(hit - ro);',
    '  float jitterAmt = clamp(uLineJitter, 0.0, 1.0);',
    '  if (jitterAmt > 0.0) {',
    '    vec2 j = vec2(sin(gridUV.y * 2.7 + iTime * 1.8), cos(gridUV.x * 2.3 - iTime * 1.6)) * (0.15 * jitterAmt);',
    '    gridUV += j;',
    '  }',
    '  float fx = fract(gridUV.x);',
    '  float fy = fract(gridUV.y);',
    '  float ax = min(fx, 1.0 - fx);',
    '  float ay = min(fy, 1.0 - fy);',
    '  float wx = fwidth(gridUV.x);',
    '  float wy = fwidth(gridUV.y);',
    '  float halfPx = max(0.0, uLineThickness) * 0.5;',
    '  float tx = halfPx * wx;',
    '  float ty = halfPx * wy;',
    '  float lineX = 1.0 - smoothstep(tx, tx + wx, ax);',
    '  float lineY = 1.0 - smoothstep(ty, ty + wy, ay);',
    '  if (uLineStyle > 0.5) {',
    '    float dashRepeat = 4.0;',
    '    float dashDuty = 0.5;',
    '    float vy = fract(gridUV.y * dashRepeat);',
    '    float vx = fract(gridUV.x * dashRepeat);',
    '    float dashMaskY = step(vy, dashDuty);',
    '    float dashMaskX = step(vx, dashDuty);',
    '    if (uLineStyle < 1.5) {',
    '      lineX *= dashMaskY;',
    '      lineY *= dashMaskX;',
    '    } else {',
    '      float dotRepeat = 6.0;',
    '      float dotWidth = 0.18;',
    '      float cy = abs(fract(gridUV.y * dotRepeat) - 0.5);',
    '      float cx = abs(fract(gridUV.x * dotRepeat) - 0.5);',
    '      lineX *= 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.y * dotRepeat), cy);',
    '      lineY *= 1.0 - smoothstep(dotWidth, dotWidth + fwidth(gridUV.x * dotRepeat), cx);',
    '    }',
    '  }',
    '  float primaryMask = max(lineX, lineY);',
    '  vec2 gridUV2 = (hitIsY > 0.5 ? hit.xz : hit.zy) / gridScale;',
    '  if (jitterAmt > 0.0) {',
    '    vec2 j2 = vec2(cos(gridUV2.y * 2.1 - iTime * 1.4), sin(gridUV2.x * 2.5 + iTime * 1.7)) * (0.15 * jitterAmt);',
    '    gridUV2 += j2;',
    '  }',
    '  float fx2 = fract(gridUV2.x);',
    '  float fy2 = fract(gridUV2.y);',
    '  float ax2 = min(fx2, 1.0 - fx2);',
    '  float ay2 = min(fy2, 1.0 - fy2);',
    '  float wx2 = fwidth(gridUV2.x);',
    '  float wy2 = fwidth(gridUV2.y);',
    '  float lineX2 = 1.0 - smoothstep(halfPx * wx2, halfPx * wx2 + wx2, ax2);',
    '  float lineY2 = 1.0 - smoothstep(halfPx * wy2, halfPx * wy2 + wy2, ay2);',
    '  float altMask = max(lineX2, lineY2);',
    '  float edgeDistX = min(abs(hit.x - (-0.5)), abs(hit.x - 0.5));',
    '  float edgeDistY = min(abs(hit.y - (-0.2)), abs(hit.y - 0.2));',
    '  float edgeDist = mix(edgeDistY, edgeDistX, hitIsY);',
    '  float edgeGate = 1.0 - smoothstep(gridScale * 0.5, gridScale * 2.0, edgeDist);',
    '  altMask *= edgeGate;',
    '  float lineMask = max(primaryMask, altMask);',
    '  float fade = exp(-dist * fadeStrength);',
    '  float dur = max(0.05, uScanDuration);',
    '  float del = max(0.0, uScanDelay);',
    '  float scanZMax = 2.0;',
    '  float widthScale = max(0.1, uScanGlow);',
    '  float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);',
    '  float sigmaA = sigma * 2.0;',
    '  float combinedPulse = 0.0;',
    '  float combinedAura = 0.0;',
    '  float cycle = dur + del;',
    '  float tCycle = mod(iTime, cycle);',
    '  float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);',
    '  float phase = scanPhase;',
    '  if (uScanDirection > 0.5 && uScanDirection < 1.5) {',
    '    phase = 1.0 - phase;',
    '  } else if (uScanDirection > 1.5) {',
    '    float t2 = mod(max(0.0, iTime - del), 2.0 * dur);',
    '    phase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);',
    '  }',
    '  float scanZ = phase * scanZMax;',
    '  float dz = abs(hit.z - scanZ);',
    '  float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));',
    '  float taper = clamp(uPhaseTaper, 0.0, 0.49);',
    '  float headFade = smoother01(0.0, taper, phase);',
    '  float tailFade = 1.0 - smoother01(1.0 - taper, 1.0, phase);',
    '  float phaseWindow = headFade * tailFade;',
    '  combinedPulse += lineBand * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);',
    '  float auraBand = exp(-0.5 * (dz * dz) / (sigmaA * sigmaA));',
    '  combinedAura += (auraBand * 0.25) * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);',
    '  for (int i = 0; i < MAX_SCANS; i++) {',
    '    if (float(i) >= uScanCount) break;',
    '    float tActiveI = iTime - uScanStarts[i];',
    '    float phaseI = clamp(tActiveI / dur, 0.0, 1.0);',
    '    if (uScanDirection > 0.5 && uScanDirection < 1.5) {',
    '      phaseI = 1.0 - phaseI;',
    '    } else if (uScanDirection > 1.5) {',
    '      phaseI = (phaseI < 0.5) ? (phaseI * 2.0) : (1.0 - (phaseI - 0.5) * 2.0);',
    '    }',
    '    float scanZI = phaseI * scanZMax;',
    '    float dzI = abs(hit.z - scanZI);',
    '    float lineBandI = exp(-0.5 * (dzI * dzI) / (sigma * sigma));',
    '    float headFadeI = smoother01(0.0, taper, phaseI);',
    '    float tailFadeI = 1.0 - smoother01(1.0 - taper, 1.0, phaseI);',
    '    float phaseWindowI = headFadeI * tailFadeI;',
    '    combinedPulse += lineBandI * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);',
    '    float auraBandI = exp(-0.5 * (dzI * dzI) / (sigmaA * sigmaA));',
    '    combinedAura += (auraBandI * 0.25) * phaseWindowI * clamp(uScanOpacity, 0.0, 1.0);',
    '  }',
    '  vec3 gridCol = uLinesColor * lineMask * fade;',
    '  vec3 scanCol = uScanColor * combinedPulse;',
    '  vec3 scanAura = uScanColor * combinedAura;',
    '  color = gridCol + scanCol + scanAura;',
    '  float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898, 78.233))) * 43758.5453123);',
    '  color += (n - 0.5) * uNoise;',
    '  color = clamp(color, 0.0, 1.0);',
    '  float alpha = clamp(max(lineMask, combinedPulse), 0.0, 1.0);',
    '  float gx = 1.0 - smoothstep(tx * 2.0, tx * 2.0 + wx * 2.0, ax);',
    '  float gy = 1.0 - smoothstep(ty * 2.0, ty * 2.0 + wy * 2.0, ay);',
    '  float halo = max(gx, gy) * fade;',
    '  alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));',
    '  fragColor = vec4(color, alpha);',
    '}',
    'void main() {',
    '  vec4 c;',
    '  mainImage(c, gl_FragCoord.xy);',
    '  gl_FragColor = c;',
    '}'
  ].join('\\n');

  const gridScanConfig = {
    sensitivity: 0.55,
    lineThickness: 1,
    linesColor: '#38373b',
    gridScale: 0.1,
    lineStyle: 'solid',
    lineJitter: 0.1,
    scanColor: '#EF4444',
    scanOpacity: 0.4,
    bloomIntensity: 0.6,
    noiseIntensity: 0.01,
    scanGlow: 0.5,
    scanSoftness: 2,
    scanPhaseTaper: 0.9,
    scanDuration: 2.0,
    scanDelay: 2.0,
    scanDirection: 'pingpong',
    snapBackDelay: 250,
    pixelRatioCap: 1.5,
    maxFps: 60
  };

  const hexToRgb = (hex) => {
    const normalized = hex.replace('#', '').trim();
    const value = normalized.length === 3
      ? normalized.split('').map((ch) => ch + ch).join('')
      : normalized.padEnd(6, '0').slice(0, 6);
    const intValue = parseInt(value, 16);
    return [
      ((intValue >> 16) & 255) / 255,
      ((intValue >> 8) & 255) / 255,
      (intValue & 255) / 255
    ];
  };

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initGridScan = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: true,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      canvas.remove();
      return;
    }
    gl.getExtension('OES_standard_derivatives');

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {};
    [
      'iResolution',
      'iTime',
      'uSkew',
      'uTilt',
      'uYaw',
      'uLineThickness',
      'uLinesColor',
      'uScanColor',
      'uGridScale',
      'uLineStyle',
      'uLineJitter',
      'uScanOpacity',
      'uScanDirection',
      'uNoise',
      'uBloomOpacity',
      'uScanGlow',
      'uScanSoftness',
      'uPhaseTaper',
      'uScanDuration',
      'uScanDelay',
      'uScanCount'
    ].forEach((name) => {
      uniforms[name] = gl.getUniformLocation(program, name);
    });
    uniforms.uScanStarts = gl.getUniformLocation(program, 'uScanStarts[0]');

    const linesRgb = hexToRgb(gridScanConfig.linesColor);
    const scanRgb = hexToRgb(gridScanConfig.scanColor);
    const lineStyleValue = gridScanConfig.lineStyle === 'dashed' ? 1 : gridScanConfig.lineStyle === 'dotted' ? 2 : 0;
    const scanDirectionValue = gridScanConfig.scanDirection === 'backward' ? 1 : gridScanConfig.scanDirection === 'pingpong' ? 2 : 0;
    gl.uniform1f(uniforms.uLineThickness, gridScanConfig.lineThickness);
    gl.uniform3f(uniforms.uLinesColor, linesRgb[0], linesRgb[1], linesRgb[2]);
    gl.uniform3f(uniforms.uScanColor, scanRgb[0], scanRgb[1], scanRgb[2]);
    gl.uniform1f(uniforms.uGridScale, gridScanConfig.gridScale);
    gl.uniform1f(uniforms.uLineStyle, lineStyleValue);
    gl.uniform1f(uniforms.uLineJitter, gridScanConfig.lineJitter);
    gl.uniform1f(uniforms.uScanOpacity, gridScanConfig.scanOpacity);
    gl.uniform1f(uniforms.uScanDirection, scanDirectionValue);
    gl.uniform1f(uniforms.uNoise, gridScanConfig.noiseIntensity);
    gl.uniform1f(uniforms.uBloomOpacity, gridScanConfig.bloomIntensity);
    gl.uniform1f(uniforms.uScanGlow, gridScanConfig.scanGlow);
    gl.uniform1f(uniforms.uScanSoftness, gridScanConfig.scanSoftness);
    gl.uniform1f(uniforms.uPhaseTaper, gridScanConfig.scanPhaseTaper);
    gl.uniform1f(uniforms.uScanDuration, gridScanConfig.scanDuration);
    gl.uniform1f(uniforms.uScanDelay, gridScanConfig.scanDelay);
    gl.uniform1fv(uniforms.uScanStarts, new Float32Array(8));
    gl.uniform1f(uniforms.uScanCount, 0);

    const s = Math.min(Math.max(gridScanConfig.sensitivity, 0), 1);
    const lerp = (a, b, t) => a + (b - a) * t;
    const skewScale = lerp(0.06, 0.2, s);
    const yBoost = lerp(1.2, 1.6, s);
    const tiltScale = lerp(0.12, 0.3, s);
    const yawScale = lerp(0.1, 0.28, s);
    const smoothTime = lerp(0.45, 0.12, s);
    const targetLook = { x: 0, y: 0 };
    const currentLook = { x: 0, y: 0 };
    let snapTimer = 0;
    let isVisible = true;
    let dpr = 1;
    let lastDraw = -Infinity;
    const frameInterval = 1000 / gridScanConfig.maxFps;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, gridScanConfig.pixelRatioCap);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform3f(uniforms.iResolution, canvas.width, canvas.height, dpr);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) {
        onPointerLeave();
        return;
      }
      window.clearTimeout(snapTimer);
      targetLook.x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      targetLook.y = -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);
    };

    const onPointerLeave = () => {
      window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(() => {
        targetLook.x = 0;
        targetLook.y = 0;
      }, gridScanConfig.snapBackDelay);
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    resize();

    const startTime = performance.now();
    const render = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        const dt = reduceMotion ? 1 : Math.min(0.1, Math.max(0.001, 1 / gridScanConfig.maxFps));
        const damp = 1 - Math.exp(-dt / Math.max(0.0001, smoothTime));
        currentLook.x += (targetLook.x - currentLook.x) * damp;
        currentLook.y += (targetLook.y - currentLook.y) * damp;
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uniforms.iTime, reduceMotion ? 0 : (now - startTime) * 0.001);
        gl.uniform2f(uniforms.uSkew, currentLook.x * skewScale, -currentLook.y * yBoost * skewScale);
        gl.uniform1f(uniforms.uTilt, currentLook.x * tiltScale * 0.36);
        gl.uniform1f(uniforms.uYaw, Math.min(Math.max(currentLook.y * yawScale * 0.34, -0.6), 0.6));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      if (!reduceMotion) requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  mounts.forEach(initGridScan);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-dot-field-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dotFieldConfig = {
    dotRadius: 3,
    dotSpacing: 16,
    cursorRadius: 750,
    cursorForce: 0.59,
    bulgeOnly: true,
    bulgeStrength: 97,
    glowRadius: 240,
    sparkle: false,
    waveAmplitude: 5,
    gradientFrom: '#EF4444',
    gradientTo: '#EF4444',
    maxFps: 45,
    pixelRatioCap: 1.5
  };
  const TWO_PI = Math.PI * 2;

  const initDotField = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) {
      canvas.remove();
      return;
    }

    let dots = [];
    let resizeTimer = 0;
    let isVisible = true;
    let frameCount = 0;
    let lastDraw = -Infinity;
    let engagement = 0;
    let glowOpacity = 0;
    const size = { w: 0, h: 0, offsetX: 0, offsetY: 0 };
    const mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 };
    const frameInterval = 1000 / dotFieldConfig.maxFps;

    const buildDots = (w, h) => {
      const step = dotFieldConfig.dotRadius + dotFieldConfig.dotSpacing;
      const cols = Math.max(1, Math.floor(w / step));
      const rows = Math.max(1, Math.floor(h / step));
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const nextDots = new Array(rows * cols);
      let index = 0;
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          nextDots[index] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay };
          index += 1;
        }
      }
      dots = nextDots;
    };

    const doResize = () => {
      const rect = mount.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, dotFieldConfig.pixelRatioCap);
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size.w = w;
      size.h = h;
      size.offsetX = rect.left + window.scrollX;
      size.offsetY = rect.top + window.scrollY;
      buildDots(w, h);
    };

    const resize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(doResize, 100);
    };

    const onPointerMove = (event) => {
      mouse.x = event.pageX - size.offsetX;
      mouse.y = event.pageY - size.offsetY;
      mount.style.setProperty('--dot-glow-x', mouse.x.toFixed(1) + 'px');
      mount.style.setProperty('--dot-glow-y', mouse.y.toFixed(1) + 'px');
    };

    const updateMouseSpeed = () => {
      const dx = mouse.prevX - mouse.x;
      const dy = mouse.prevY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      mouse.speed += (dist - mouse.speed) * 0.5;
      if (mouse.speed < 0.001) mouse.speed = 0;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    doResize();

    let lastSpeedUpdate = 0;
    const draw = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        if (now - lastSpeedUpdate > 20) {
          updateMouseSpeed();
          lastSpeedUpdate = now;
        }
        frameCount += reduceMotion ? 0 : 1;
        const targetEngagement = Math.min(mouse.speed / 5, 1);
        engagement += (targetEngagement - engagement) * 0.06;
        if (engagement < 0.001) engagement = 0;
        glowOpacity += (engagement - glowOpacity) * 0.08;
        mount.style.setProperty('--dot-glow-opacity', glowOpacity.toFixed(3));

        ctx.clearRect(0, 0, size.w, size.h);
        const grad = ctx.createLinearGradient(0, 0, size.w, size.h);
        grad.addColorStop(0, dotFieldConfig.gradientFrom);
        grad.addColorStop(1, dotFieldConfig.gradientTo);
        ctx.fillStyle = grad;

        const cr = dotFieldConfig.cursorRadius;
        const crSq = cr * cr;
        const rad = dotFieldConfig.dotRadius / 2;
        const t = frameCount * 0.02;
        ctx.beginPath();
        for (let i = 0; i < dots.length; i += 1) {
          const dot = dots[i];
          const dx = mouse.x - dot.ax;
          const dy = mouse.y - dot.ay;
          const distSq = dx * dx + dy * dy;
          if (distSq < crSq && engagement > 0.01) {
            const dist = Math.sqrt(distSq);
            if (dotFieldConfig.bulgeOnly) {
              const influence = 1 - dist / cr;
              const push = influence * influence * dotFieldConfig.bulgeStrength * engagement;
              const angle = Math.atan2(dy, dx);
              dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
              dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
            } else {
              const angle = Math.atan2(dy, dx);
              const move = (500 / Math.max(dist, 1)) * (mouse.speed * dotFieldConfig.cursorForce);
              dot.vx += Math.cos(angle) * -move;
              dot.vy += Math.sin(angle) * -move;
            }
          } else if (dotFieldConfig.bulgeOnly) {
            dot.sx += (dot.ax - dot.sx) * 0.1;
            dot.sy += (dot.ay - dot.sy) * 0.1;
          }

          if (!dotFieldConfig.bulgeOnly) {
            dot.vx *= 0.9;
            dot.vy *= 0.9;
            dot.x = dot.ax + dot.vx;
            dot.y = dot.ay + dot.vy;
            dot.sx += (dot.x - dot.sx) * 0.1;
            dot.sy += (dot.y - dot.sy) * 0.1;
          }

          let drawX = dot.sx;
          let drawY = dot.sy;
          if (dotFieldConfig.waveAmplitude > 0) {
            drawY += Math.sin(dot.ax * 0.03 + t) * dotFieldConfig.waveAmplitude;
            drawX += Math.cos(dot.ay * 0.03 + t * 0.7) * dotFieldConfig.waveAmplitude * 0.5;
          }

          ctx.moveTo(drawX + rad, drawY);
          ctx.arc(drawX, drawY, rad, 0, TWO_PI);
        }
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  };

  mounts.forEach(initDotField);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-ripple-grid-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'varying vec2 vUv;',
    'void main() {',
    '  vUv = position * 0.5 + 0.5;',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    'precision highp float;',
    'uniform float iTime;',
    'uniform vec2 iResolution;',
    'uniform bool enableRainbow;',
    'uniform vec3 gridColor;',
    'uniform float rippleIntensity;',
    'uniform float gridSize;',
    'uniform float gridThickness;',
    'uniform float fadeDistance;',
    'uniform float vignetteStrength;',
    'uniform float glowIntensity;',
    'uniform float opacity;',
    'uniform float gridRotation;',
    'uniform bool mouseInteraction;',
    'uniform vec2 mousePosition;',
    'uniform float mouseInfluence;',
    'uniform float mouseInteractionRadius;',
    'varying vec2 vUv;',
    'float pi = 3.141592;',
    'mat2 rotate(float angle) {',
    '  float s = sin(angle);',
    '  float c = cos(angle);',
    '  return mat2(c, -s, s, c);',
    '}',
    'void main() {',
    '  vec2 uv = vUv * 2.0 - 1.0;',
    '  uv.x *= iResolution.x / iResolution.y;',
    '  if (gridRotation != 0.0) {',
    '    uv = rotate(gridRotation * pi / 180.0) * uv;',
    '  }',
    '  float dist = length(uv);',
    '  float func = sin(pi * (iTime - dist));',
    '  vec2 rippleUv = uv + uv * func * rippleIntensity;',
    '  if (mouseInteraction && mouseInfluence > 0.0) {',
    '    vec2 mouseUv = (mousePosition * 2.0 - 1.0);',
    '    mouseUv.x *= iResolution.x / iResolution.y;',
    '    float mouseDist = length(uv - mouseUv);',
    '    float influence = mouseInfluence * exp(-mouseDist * mouseDist / (mouseInteractionRadius * mouseInteractionRadius));',
    '    float mouseWave = sin(pi * (iTime * 2.0 - mouseDist * 3.0)) * influence;',
    '    rippleUv += normalize(uv - mouseUv) * mouseWave * rippleIntensity * 0.3;',
    '  }',
    '  vec2 a = sin(gridSize * 0.5 * pi * rippleUv - pi / 2.0);',
    '  vec2 b = abs(a);',
    '  float aaWidth = 0.5;',
    '  vec2 smoothB = vec2(',
    '    smoothstep(0.0, aaWidth, b.x),',
    '    smoothstep(0.0, aaWidth, b.y)',
    '  );',
    '  vec3 color = vec3(0.0);',
    '  color += exp(-gridThickness * smoothB.x * (0.8 + 0.5 * sin(pi * iTime)));',
    '  color += exp(-gridThickness * smoothB.y);',
    '  color += 0.5 * exp(-(gridThickness / 4.0) * sin(smoothB.x));',
    '  color += 0.5 * exp(-(gridThickness / 3.0) * smoothB.y);',
    '  if (glowIntensity > 0.0) {',
    '    color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.x);',
    '    color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.y);',
    '  }',
    '  float ddd = exp(-2.0 * clamp(pow(dist, fadeDistance), 0.0, 1.0));',
    '  vec2 vignetteCoords = vUv - 0.5;',
    '  float vignetteDistance = length(vignetteCoords);',
    '  float vignette = 1.0 - pow(vignetteDistance * 2.0, vignetteStrength);',
    '  vignette = clamp(vignette, 0.0, 1.0);',
    '  vec3 t;',
    '  if (enableRainbow) {',
    '    t = vec3(',
    '      uv.x * 0.5 + 0.5 * sin(iTime),',
    '      uv.y * 0.5 + 0.5 * cos(iTime),',
    '      pow(cos(iTime), 4.0)',
    '    ) + 0.5;',
    '  } else {',
    '    t = gridColor;',
    '  }',
    '  float finalFade = ddd * vignette;',
    '  float alpha = length(color) * finalFade * opacity;',
    '  gl_FragColor = vec4(color * t * finalFade * opacity, alpha);',
    '}'
  ].join('\\n');

  const rippleGridConfig = {
    enableRainbow: false,
    gridColor: '#EF4444',
    rippleIntensity: 0.05,
    gridSize: 10,
    gridThickness: 15,
    fadeDistance: 1.5,
    vignetteStrength: 2,
    glowIntensity: 0.1,
    opacity: 0.8,
    gridRotation: 0,
    mouseInteraction: true,
    mouseInteractionRadius: 1.2,
    maxFps: 45,
    pixelRatioCap: 1.5
  };

  const hexToRgb = (hex) => {
    const match = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return match
      ? [parseInt(match[1], 16) / 255, parseInt(match[2], 16) / 255, parseInt(match[3], 16) / 255]
      : [1, 1, 1];
  };

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initRippleGrid = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      canvas.remove();
      return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, 'position');
    const uniforms = {
      iTime: gl.getUniformLocation(program, 'iTime'),
      iResolution: gl.getUniformLocation(program, 'iResolution'),
      enableRainbow: gl.getUniformLocation(program, 'enableRainbow'),
      gridColor: gl.getUniformLocation(program, 'gridColor'),
      rippleIntensity: gl.getUniformLocation(program, 'rippleIntensity'),
      gridSize: gl.getUniformLocation(program, 'gridSize'),
      gridThickness: gl.getUniformLocation(program, 'gridThickness'),
      fadeDistance: gl.getUniformLocation(program, 'fadeDistance'),
      vignetteStrength: gl.getUniformLocation(program, 'vignetteStrength'),
      glowIntensity: gl.getUniformLocation(program, 'glowIntensity'),
      opacity: gl.getUniformLocation(program, 'opacity'),
      gridRotation: gl.getUniformLocation(program, 'gridRotation'),
      mouseInteraction: gl.getUniformLocation(program, 'mouseInteraction'),
      mousePosition: gl.getUniformLocation(program, 'mousePosition'),
      mouseInfluence: gl.getUniformLocation(program, 'mouseInfluence'),
      mouseInteractionRadius: gl.getUniformLocation(program, 'mouseInteractionRadius')
    };
    const gridColor = hexToRgb(rippleGridConfig.gridColor);

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1i(uniforms.enableRainbow, rippleGridConfig.enableRainbow ? 1 : 0);
    gl.uniform3f(uniforms.gridColor, gridColor[0], gridColor[1], gridColor[2]);
    gl.uniform1f(uniforms.rippleIntensity, rippleGridConfig.rippleIntensity);
    gl.uniform1f(uniforms.gridSize, rippleGridConfig.gridSize);
    gl.uniform1f(uniforms.gridThickness, rippleGridConfig.gridThickness);
    gl.uniform1f(uniforms.fadeDistance, rippleGridConfig.fadeDistance);
    gl.uniform1f(uniforms.vignetteStrength, rippleGridConfig.vignetteStrength);
    gl.uniform1f(uniforms.glowIntensity, rippleGridConfig.glowIntensity);
    gl.uniform1f(uniforms.opacity, rippleGridConfig.opacity);
    gl.uniform1f(uniforms.gridRotation, rippleGridConfig.gridRotation);
    gl.uniform1i(uniforms.mouseInteraction, rippleGridConfig.mouseInteraction ? 1 : 0);
    gl.uniform2f(uniforms.mousePosition, 0.5, 0.5);
    gl.uniform1f(uniforms.mouseInfluence, 0);
    gl.uniform1f(uniforms.mouseInteractionRadius, rippleGridConfig.mouseInteractionRadius);

    const targetMouse = { x: 0.5, y: 0.5 };
    const smoothMouse = { x: 0.5, y: 0.5 };
    let targetInfluence = 0;
    let smoothInfluence = 0;
    let isVisible = true;

    const resize = () => {
      const bounds = mount.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, rippleGridConfig.pixelRatioCap);
      const width = Math.max(1, Math.floor(bounds.width * dpr));
      const height = Math.max(1, Math.floor(bounds.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform2f(uniforms.iResolution, bounds.width || width, bounds.height || height);
      }
    };

    const handlePointerMove = (event) => {
      if (!rippleGridConfig.mouseInteraction) return;
      const rect = mount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const isInside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      targetMouse.x = Math.min(Math.max(x, 0), 1);
      targetMouse.y = Math.min(Math.max(y, 0), 1);
      targetInfluence = isInside ? 1 : 0;
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }
    window.addEventListener('resize', resize, { passive: true });
    if (rippleGridConfig.mouseInteraction) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
    }
    resize();

    const startTime = performance.now();
    const frameInterval = 1000 / rippleGridConfig.maxFps;
    let lastDraw = -Infinity;
    const draw = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        const seconds = reduceMotion ? 0 : (now - startTime) * 0.001;
        smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.1;
        smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.1;
        smoothInfluence += (targetInfluence - smoothInfluence) * 0.05;
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uniforms.iTime, seconds);
        gl.uniform2f(uniforms.mousePosition, smoothMouse.x, smoothMouse.y);
        gl.uniform1f(uniforms.mouseInfluence, smoothInfluence);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    };
    draw(startTime);
  };

  mounts.forEach(initRippleGrid);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-galaxy-bg]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'attribute vec2 uv;',
    'varying vec2 vUv;',
    'void main() {',
    '  vUv = uv;',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    'precision mediump float;',
    'uniform float uTime;',
    'uniform vec3 uResolution;',
    'uniform vec2 uFocal;',
    'uniform vec2 uRotation;',
    'uniform float uStarSpeed;',
    'uniform float uDensity;',
    'uniform float uHueShift;',
    'uniform float uSpeed;',
    'uniform vec2 uMouse;',
    'uniform float uGlowIntensity;',
    'uniform float uSaturation;',
    'uniform bool uMouseRepulsion;',
    'uniform float uTwinkleIntensity;',
    'uniform float uRotationSpeed;',
    'uniform float uRepulsionStrength;',
    'uniform float uMouseActiveFactor;',
    'uniform float uAutoCenterRepulsion;',
    'uniform bool uTransparent;',
    'varying vec2 vUv;',
    '#define NUM_LAYER 4.0',
    '#define STAR_COLOR_CUTOFF 0.2',
    '#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)',
    '#define PERIOD 3.0',
    'float Hash21(vec2 p) {',
    '  p = fract(p * vec2(123.34, 456.21));',
    '  p += dot(p, p + 45.32);',
    '  return fract(p.x * p.y);',
    '}',
    'float tri(float x) { return abs(fract(x) * 2.0 - 1.0); }',
    'float tris(float x) {',
    '  float t = fract(x);',
    '  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));',
    '}',
    'float trisn(float x) {',
    '  float t = fract(x);',
    '  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;',
    '}',
    'vec3 hsv2rgb(vec3 c) {',
    '  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);',
    '  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);',
    '  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);',
    '}',
    'float Star(vec2 uv, float flare) {',
    '  float d = length(uv);',
    '  float m = (0.05 * uGlowIntensity) / d;',
    '  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));',
    '  m += rays * flare * uGlowIntensity;',
    '  uv *= MAT45;',
    '  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));',
    '  m += rays * 0.3 * flare * uGlowIntensity;',
    '  m *= smoothstep(1.0, 0.2, d);',
    '  return m;',
    '}',
    'vec3 StarLayer(vec2 uv) {',
    '  vec3 col = vec3(0.0);',
    '  vec2 gv = fract(uv) - 0.5;',
    '  vec2 id = floor(uv);',
    '  for (int y = -1; y <= 1; y++) {',
    '    for (int x = -1; x <= 1; x++) {',
    '      vec2 offset = vec2(float(x), float(y));',
    '      vec2 si = id + vec2(float(x), float(y));',
    '      float seed = Hash21(si);',
    '      float size = fract(seed * 345.32);',
    '      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));',
    '      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;',
    '      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;',
    '      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;',
    '      float grn = min(red, blu) * seed;',
    '      vec3 base = vec3(red, grn, blu);',
    '      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;',
    '      hue = fract(hue + uHueShift / 360.0);',
    '      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;',
    '      float val = max(max(base.r, base.g), base.b);',
    '      base = hsv2rgb(vec3(hue, sat, val));',
    '      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;',
    '      float star = Star(gv - offset - pad, flareSize);',
    '      vec3 color = base;',
    '      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;',
    '      twinkle = mix(1.0, twinkle, uTwinkleIntensity);',
    '      star *= twinkle;',
    '      col += star * size * color;',
    '    }',
    '  }',
    '  return col;',
    '}',
    'void main() {',
    '  vec2 focalPx = uFocal * uResolution.xy;',
    '  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;',
    '  vec2 mouseNorm = uMouse - vec2(0.5);',
    '  if (uAutoCenterRepulsion > 0.0) {',
    '    vec2 centerUV = vec2(0.0, 0.0);',
    '    float centerDist = length(uv - centerUV);',
    '    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));',
    '    uv += repulsion * 0.05;',
    '  } else if (uMouseRepulsion) {',
    '    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;',
    '    float mouseDist = length(uv - mousePosUV);',
    '    uv += normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1)) * 0.05 * uMouseActiveFactor;',
    '  } else {',
    '    uv += mouseNorm * 0.1 * uMouseActiveFactor;',
    '  }',
    '  float autoRotAngle = uTime * uRotationSpeed;',
    '  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));',
    '  uv = autoRot * uv;',
    '  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;',
    '  vec3 col = vec3(0.0);',
    '  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {',
    '    float depth = fract(i + uStarSpeed * uSpeed);',
    '    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);',
    '    float fade = depth * smoothstep(1.0, 0.9, depth);',
    '    col += StarLayer(uv * scale + i * 453.32) * fade;',
    '  }',
    '  if (uTransparent) {',
    '    float alpha = length(col);',
    '    alpha = smoothstep(0.0, 0.3, alpha);',
    '    alpha = min(alpha, 1.0);',
    '    gl_FragColor = vec4(col, alpha);',
    '  } else {',
    '    gl_FragColor = vec4(col, 1.0);',
    '  }',
    '}'
  ].join('\\n');

  const galaxyConfig = {
    focal: [0.5, 0.5],
    rotation: [1.0, 0.0],
    starSpeed: 0.5,
    density: 1.5,
    hueShift: 240,
    disableAnimation: false,
    speed: 1.0,
    mouseInteraction: true,
    mouseRepulsion: true,
    glowIntensity: 0.5,
    saturation: 0.8,
    twinkleIntensity: 0.3,
    rotationSpeed: 0.1,
    repulsionStrength: 2,
    autoCenterRepulsion: 0,
    transparent: true,
    maxFps: 30,
    pixelRatioCap: 1
  };

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initGalaxy = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl', {
      alpha: galaxyConfig.transparent,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      canvas.remove();
      return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const uvs = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
    const positionBuffer = gl.createBuffer();
    const uvBuffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, 'position');
    const uvLocation = gl.getAttribLocation(program, 'uv');
    const uniforms = {
      uTime: gl.getUniformLocation(program, 'uTime'),
      uResolution: gl.getUniformLocation(program, 'uResolution'),
      uFocal: gl.getUniformLocation(program, 'uFocal'),
      uRotation: gl.getUniformLocation(program, 'uRotation'),
      uStarSpeed: gl.getUniformLocation(program, 'uStarSpeed'),
      uDensity: gl.getUniformLocation(program, 'uDensity'),
      uHueShift: gl.getUniformLocation(program, 'uHueShift'),
      uSpeed: gl.getUniformLocation(program, 'uSpeed'),
      uMouse: gl.getUniformLocation(program, 'uMouse'),
      uGlowIntensity: gl.getUniformLocation(program, 'uGlowIntensity'),
      uSaturation: gl.getUniformLocation(program, 'uSaturation'),
      uMouseRepulsion: gl.getUniformLocation(program, 'uMouseRepulsion'),
      uTwinkleIntensity: gl.getUniformLocation(program, 'uTwinkleIntensity'),
      uRotationSpeed: gl.getUniformLocation(program, 'uRotationSpeed'),
      uRepulsionStrength: gl.getUniformLocation(program, 'uRepulsionStrength'),
      uMouseActiveFactor: gl.getUniformLocation(program, 'uMouseActiveFactor'),
      uAutoCenterRepulsion: gl.getUniformLocation(program, 'uAutoCenterRepulsion'),
      uTransparent: gl.getUniformLocation(program, 'uTransparent')
    };

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(uvLocation);
    gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform2fv(uniforms.uFocal, new Float32Array(galaxyConfig.focal));
    gl.uniform2fv(uniforms.uRotation, new Float32Array(galaxyConfig.rotation));
    gl.uniform1f(uniforms.uDensity, galaxyConfig.density);
    gl.uniform1f(uniforms.uHueShift, galaxyConfig.hueShift);
    gl.uniform1f(uniforms.uSpeed, galaxyConfig.speed);
    gl.uniform2f(uniforms.uMouse, 0.5, 0.5);
    gl.uniform1f(uniforms.uGlowIntensity, galaxyConfig.glowIntensity);
    gl.uniform1f(uniforms.uSaturation, galaxyConfig.saturation);
    gl.uniform1i(uniforms.uMouseRepulsion, galaxyConfig.mouseRepulsion ? 1 : 0);
    gl.uniform1f(uniforms.uTwinkleIntensity, galaxyConfig.twinkleIntensity);
    gl.uniform1f(uniforms.uRotationSpeed, galaxyConfig.rotationSpeed);
    gl.uniform1f(uniforms.uRepulsionStrength, galaxyConfig.repulsionStrength);
    gl.uniform1f(uniforms.uMouseActiveFactor, 0);
    gl.uniform1f(uniforms.uAutoCenterRepulsion, galaxyConfig.autoCenterRepulsion);
    gl.uniform1i(uniforms.uTransparent, galaxyConfig.transparent ? 1 : 0);

    const resize = () => {
      const bounds = mount.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, galaxyConfig.pixelRatioCap);
      const width = Math.max(1, Math.floor(bounds.width * dpr));
      const height = Math.max(1, Math.floor(bounds.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform3f(uniforms.uResolution, width, height, width / height);
      }
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }
    resize();

    let isVisible = true;
    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      }, { rootMargin: '120px 0px' });
      visibilityObserver.observe(mount);
    }

    const targetMousePos = { x: 0.5, y: 0.5 };
    const smoothMousePos = { x: 0.5, y: 0.5 };
    let targetMouseActive = 0;
    let smoothMouseActive = 0;
    const handleMouseMove = (event) => {
      const rect = mount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const isInside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      targetMousePos.x = Math.min(Math.max(x, 0), 1);
      targetMousePos.y = Math.min(Math.max(y, 0), 1);
      targetMouseActive = isInside ? 1 : 0;
    };
    const handleMouseLeave = () => {
      targetMouseActive = 0;
    };
    if (galaxyConfig.mouseInteraction) {
      window.addEventListener('pointermove', handleMouseMove, { passive: true });
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    const startTime = performance.now();
    const frameInterval = 1000 / galaxyConfig.maxFps;
    let lastDraw = -Infinity;
    const draw = (now) => {
      const shouldDraw = reduceMotion || (isVisible && !document.hidden && now - lastDraw >= frameInterval);
      if (shouldDraw) {
        lastDraw = now;
        const seconds = reduceMotion || galaxyConfig.disableAnimation ? 0 : (now - startTime) * 0.001;
        smoothMousePos.x += (targetMousePos.x - smoothMousePos.x) * 0.05;
        smoothMousePos.y += (targetMousePos.y - smoothMousePos.y) * 0.05;
        smoothMouseActive += (targetMouseActive - smoothMouseActive) * 0.05;
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uniforms.uTime, seconds);
        gl.uniform1f(uniforms.uStarSpeed, reduceMotion || galaxyConfig.disableAnimation ? galaxyConfig.starSpeed * 0.05 : (seconds * galaxyConfig.starSpeed) / 10.0);
        gl.uniform2f(uniforms.uMouse, smoothMousePos.x, smoothMousePos.y);
        gl.uniform1f(uniforms.uMouseActiveFactor, smoothMouseActive);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    };
    draw(startTime);
  };

  mounts.forEach(initGalaxy);
})();

(() => {
  const mounts = Array.from(document.querySelectorAll('[data-plasma-wave]'));
  if (!mounts.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vertexSource = [
    'attribute vec2 position;',
    'void main() {',
    '  gl_Position = vec4(position, 0.0, 1.0);',
    '}'
  ].join('\\n');

  const fragmentSource = [
    'precision mediump float;',
    'uniform float iTime;',
    'uniform vec2  iResolution;',
    'uniform vec2  uOffset;',
    'uniform float uRotation;',
    'uniform float uLegacyFocalLength;',
    'uniform float uSpeed1;',
    'uniform float uSpeed2;',
    'uniform float uDir2;',
    'uniform float uBend1;',
    'uniform float uBend2;',
    'uniform vec3  uColor1;',
    'uniform vec3  uColor2;',
    '',
    'const float lt   = 0.3;',
    'const float pi   = 3.14159;',
    'const float pi2  = 6.28318;',
    'const float pi_2 = 1.5708;',
    '#define MAX_STEPS 14',
    '',
    'void mainImage(out vec4 C, in vec2 U) {',
    '  float t = iTime * pi;',
    '  float s = 1.0;',
    '  float d = 0.0;',
    '  vec2  R = iResolution;',
    '',
    '  vec3 o = vec3(0.0, 0.0, -7.0);',
    '  vec3 u = normalize(vec3((U - 0.5 * R) / R.y, uLegacyFocalLength));',
    '  vec2 k = vec2(0.0);',
    '  vec3 p;',
    '',
    '  float t1 = t * 0.7;',
    '  float t2 = t * 0.9;',
    '  float tSpeed1 = t * uSpeed1;',
    '  float tSpeed2 = t * uSpeed2 * uDir2;',
    '',
    '  for (int i = 0; i < MAX_STEPS; ++i) {',
    '    p = o + u * d;',
    '    p.x -= 15.0;',
    '',
    '    float px = p.x;',
    '    float wob1 = uBend1 + sin(t1 + px * 0.8) * 0.1;',
    '    float wob2 = uBend2 + cos(t2 + px * 1.1) * 0.1;',
    '',
    '    float px2 = px + pi_2;',
    '    vec2 sinOffset = sin(vec2(px, px2) + tSpeed1) * wob1;',
    '    vec2 cosOffset = cos(vec2(px, px2) + tSpeed2) * wob2;',
    '',
    '    vec2 yz = p.yz;',
    '    float pxLt = px + lt;',
    '    k.x = max(pxLt, length(yz - sinOffset) - lt);',
    '    k.y = max(pxLt, length(yz - cosOffset) - lt);',
    '',
    '    float current = min(k.x, k.y);',
    '    s = min(s, current);',
    '    if (s < 0.001 || d > 300.0) break;',
    '    d += s * 0.7;',
    '  }',
    '',
    '  float sqrtD = sqrt(d);',
    '  vec3 raw = max(cos(d * pi2) - s * sqrtD - vec3(k, 0.0), 0.0);',
    '  raw.gb += 0.1;',
    '  float maxC = max(raw.r, max(raw.g, raw.b));',
    '  if (maxC < 0.15) discard;',
    '  raw = raw * 0.4 + raw.brg * 0.6 + raw * raw;',
    '  float lum = dot(raw, vec3(0.299, 0.587, 0.114));',
    '  float w1 = max(0.0, 1.0 - k.x * 2.0);',
    '  float w2 = max(0.0, 1.0 - k.y * 2.0);',
    '  float wt = w1 + w2 + 0.001;',
    '  vec3 c = (uColor1 * w1 + uColor2 * w2) / wt * lum * 3.5;',
    '  C = vec4(c, 1.0);',
    '}',
    '',
    'void main() {',
    '  vec2 coord = gl_FragCoord.xy + uOffset;',
    '  coord -= 0.5 * iResolution;',
    '  float c = cos(uRotation), s = sin(uRotation);',
    '  coord = mat2(c, -s, s, c) * coord;',
    '  coord += 0.5 * iResolution;',
    '',
    '  vec4 color;',
    '  mainImage(color, coord);',
    '  gl_FragColor = color;',
    '}'
  ].join('\\n');

  const plasmaConfig = {
    colors: ['#8e0d0d', '#6d6d6d'],
    speed1: 0.065,
    speed2: 0.07,
    focalLength: 1.75,
    bend1: 1,
    bend2: 1.5,
    dir2: 1.0,
    rotationDeg: 0,
    xOffset: 0,
    yOffset: 0
  };

  const hexToRgb = (hex) => [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255
  ];

  const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const createProgram = (gl) => {
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return null;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return null;
    }
    return program;
  };

  const initPlasmaWave = (mount) => {
    const canvas = document.createElement('canvas');
    mount.appendChild(canvas);

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });

    if (!gl) {
      canvas.remove();
      return;
    }

    const program = createProgram(gl);
    if (!program) {
      canvas.remove();
      return;
    }

    const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    const positionLocation = gl.getAttribLocation(program, 'position');
    const uniforms = {
      iTime: gl.getUniformLocation(program, 'iTime'),
      iResolution: gl.getUniformLocation(program, 'iResolution'),
      uOffset: gl.getUniformLocation(program, 'uOffset'),
      uRotation: gl.getUniformLocation(program, 'uRotation'),
      uLegacyFocalLength: gl.getUniformLocation(program, 'uLegacyFocalLength'),
      uSpeed1: gl.getUniformLocation(program, 'uSpeed1'),
      uSpeed2: gl.getUniformLocation(program, 'uSpeed2'),
      uDir2: gl.getUniformLocation(program, 'uDir2'),
      uBend1: gl.getUniformLocation(program, 'uBend1'),
      uBend2: gl.getUniformLocation(program, 'uBend2'),
      uColor1: gl.getUniformLocation(program, 'uColor1'),
      uColor2: gl.getUniformLocation(program, 'uColor2')
    };

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0, 0, 0, 0);
    gl.uniform2f(uniforms.uOffset, plasmaConfig.xOffset, plasmaConfig.yOffset);
    gl.uniform1f(uniforms.uRotation, (plasmaConfig.rotationDeg * Math.PI) / 180);
    gl.uniform1f(uniforms.uLegacyFocalLength, plasmaConfig.focalLength);
    gl.uniform1f(uniforms.uSpeed1, plasmaConfig.speed1);
    gl.uniform1f(uniforms.uSpeed2, plasmaConfig.speed2);
    gl.uniform1f(uniforms.uDir2, plasmaConfig.dir2);
    gl.uniform1f(uniforms.uBend1, plasmaConfig.bend1);
    gl.uniform1f(uniforms.uBend2, plasmaConfig.bend2);
    gl.uniform3fv(uniforms.uColor1, hexToRgb(plasmaConfig.colors[0]));
    gl.uniform3fv(uniforms.uColor2, hexToRgb(plasmaConfig.colors[1]));

    const resize = () => {
      const bounds = mount.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(bounds.width * dpr));
      const height = Math.max(1, Math.floor(bounds.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform2f(uniforms.iResolution, width, height);
      }
    };

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(mount);
    } else {
      window.addEventListener('resize', resize);
    }

    const startTime = performance.now();
    const draw = (now) => {
      resize();
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uniforms.iTime, reduceMotion ? 0 : (now - startTime) * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) requestAnimationFrame(draw);
    };

    draw(startTime);
  };

  mounts.forEach(initPlasmaWave);
})();

(() => {
  const cursor = document.querySelector('.magnetic-cursor');
  const magneticItems = Array.from(document.querySelectorAll('[data-magnetic]'));
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!window.gsap || !cursor || isTouchDevice) {
    if (cursor) cursor.remove();
    return;
  }
  document.body.classList.add('cursor-ready');
  gsap.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0, force3D: true });
  const config = { cursorSize: 168, compactCursorSize: 56, hoverPadding: 14, magneticFactor: 0.18 };
  const state = { pointer: { x: -100, y: -100 }, hovered: false, visible: false, cursorSize: config.cursorSize };
  const magneticHandlers = new Map();
  let activeMagnetic = null;
  let latestPointerEvent = null;
  let pointerFrame = 0;
  const setCursorX = gsap.quickSetter(cursor, 'x', 'px');
  const setCursorY = gsap.quickSetter(cursor, 'y', 'px');
  const setCursorVisible = (visible) => {
    if (state.visible === visible) return;
    state.visible = visible;
    cursor.style.opacity = visible ? '1' : '0';
    cursor.style.visibility = visible ? 'inherit' : 'hidden';
  };
  const isPageScrolled = () => window.scrollY > 2;
  const getCursorSize = () => isPageScrolled() ? config.compactCursorSize : config.cursorSize;
  const updateCursorSizeForScroll = () => {
    if (state.hovered) return;
    const nextSize = getCursorSize();
    if (state.cursorSize === nextSize) return;
    state.cursorSize = nextSize;
    gsap.to(cursor, {
      width: nextSize,
      height: nextSize,
      borderRadius: '50%',
      duration: reduceMotion ? 0 : 0.16,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };
  const placeCursor = (x, y, alpha = 1) => {
    state.pointer.x = x; state.pointer.y = y;
    setCursorX(x); setCursorY(y); setCursorVisible(alpha > 0);
  };
  const resetCursorShape = () => {
    const size = getCursorSize();
    state.cursorSize = size;
    gsap.killTweensOf(cursor);
    gsap.set(cursor, {
      x: state.pointer.x,
      y: state.pointer.y,
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      autoAlpha: 1,
      overwrite: 'auto'
    });
    setCursorVisible(true);
  };
  const processPointerMove = (event) => {
    state.pointer.x = event.clientX; state.pointer.y = event.clientY;
    const hoveredChromaGrid = event.target instanceof Element ? event.target.closest('[data-chroma-card], [data-chroma-grid]') : null;
    if (hoveredChromaGrid) {
      if (activeMagnetic && magneticHandlers.has(activeMagnetic)) {
        magneticHandlers.get(activeMagnetic).leave();
        activeMagnetic = null;
      }
      state.hovered = false;
      setCursorVisible(false);
      return;
    }
    const hoveredMagnetic = event.target instanceof Element ? event.target.closest('[data-magnetic]') : null;
    if (hoveredMagnetic !== activeMagnetic) {
      if (activeMagnetic && magneticHandlers.has(activeMagnetic)) magneticHandlers.get(activeMagnetic).leave();
      activeMagnetic = hoveredMagnetic;
      if (activeMagnetic && magneticHandlers.has(activeMagnetic)) magneticHandlers.get(activeMagnetic).enter();
    }
    if (activeMagnetic && magneticHandlers.has(activeMagnetic)) magneticHandlers.get(activeMagnetic).move(event);
    const inViewport = event.clientX >= 0 && event.clientX <= window.innerWidth && event.clientY >= 0 && event.clientY <= window.innerHeight;
    if (!state.hovered) {
      updateCursorSizeForScroll();
      placeCursor(event.clientX, event.clientY, inViewport ? 1 : 0);
    }
  };
  window.addEventListener('pointermove', (event) => {
    latestPointerEvent = event;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      const eventToProcess = latestPointerEvent;
      latestPointerEvent = null;
      if (eventToProcess) processPointerMove(eventToProcess);
    });
  }, { passive: true });
  window.addEventListener('scroll', updateCursorSizeForScroll, { passive: true });
  window.addEventListener('resize', updateCursorSizeForScroll, { passive: true });
  document.addEventListener('mouseleave', () => {
    if (activeMagnetic && magneticHandlers.has(activeMagnetic)) {
      magneticHandlers.get(activeMagnetic).leave();
      activeMagnetic = null;
    }
    setCursorVisible(false);
  });
  magneticItems.forEach((item) => {
    const xTo = gsap.quickTo(item, 'x', { duration: reduceMotion ? 0 : 0.28, ease: 'power3.out' });
    const yTo = gsap.quickTo(item, 'y', { duration: reduceMotion ? 0 : 0.28, ease: 'power3.out' });
    let frame = 0;
    const enter = () => {
      const bounds = item.getBoundingClientRect();
      const style = window.getComputedStyle(item);
      const padding = config.hoverPadding * (1 + config.magneticFactor);
      state.hovered = true;
      gsap.killTweensOf(cursor);
      gsap.to(cursor, {
        x: bounds.left + bounds.width / 2,
        y: bounds.top + bounds.height / 2,
        width: bounds.width + padding * 2,
        height: bounds.height + padding * 2,
        borderRadius: style.borderRadius || '8px',
        backgroundColor: item.getAttribute('data-magnetic-color') || '#ffffff',
        scaleX: 1, scaleY: 1, rotation: 0,
        duration: reduceMotion ? 0 : 0.16,
        ease: 'power2.out',
        overwrite: 'all'
      });
    };
    const move = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const bounds = item.getBoundingClientRect();
        xTo((event.clientX - (bounds.left + bounds.width / 2)) * config.magneticFactor);
        yTo((event.clientY - (bounds.top + bounds.height / 2)) * config.magneticFactor);
        frame = 0;
      });
    };
    const leave = () => {
      xTo(0); yTo(0);
      state.hovered = false;
      resetCursorShape();
    };
    magneticHandlers.set(item, { enter, move, leave });
  });
})();
`;

function hero(
  kicker,
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref = 'index.html#projects',
  secondaryLabel = '查看项目矩阵',
  extraHtml = '',
  className = '',
) {
  const useFaultyTerminalBg = className.split(/\s+/).includes('faulty-terminal-hero');
  const useDotFieldBg = className.split(/\s+/).includes('dot-field-hero');
  const useFloatingLinesBg = className.split(/\s+/).includes('floating-lines-hero');
  const useGridScanBg = className.split(/\s+/).includes('grid-scan-hero');
  const useLiquidEtherBg = className.split(/\s+/).includes('liquid-ether-hero');
  const useGalaxyBg = className.split(/\s+/).includes('galaxy-hero');
  const useRippleGridBg = className.split(/\s+/).includes('ripple-grid-hero');
  const backgroundLayer = useFaultyTerminalBg
    ? '<div class="faulty-terminal-bg" data-faulty-terminal-bg aria-hidden="true"></div>'
    : useDotFieldBg
      ? '<div class="dot-field-bg" data-dot-field-bg aria-hidden="true"></div>'
      : useFloatingLinesBg
        ? '<div class="floating-lines-bg" data-floating-lines-bg aria-hidden="true"></div>'
        : useLiquidEtherBg
          ? '<div class="liquid-ether-bg" data-liquid-ether-bg aria-hidden="true"></div>'
          : useGridScanBg
            ? '<div class="grid-scan-bg" data-grid-scan-bg aria-hidden="true"></div>'
            : useGalaxyBg
              ? '<div class="galaxy-field-bg" data-galaxy-bg aria-hidden="true"></div>'
              : useRippleGridBg
                ? '<div class="ripple-grid-bg" data-ripple-grid-bg aria-hidden="true"></div>'
                : '<div class="magic-rings-bg" data-magic-rings-bg aria-hidden="true"></div>';

  return `
    <section class="hero${className ? ` ${className}` : ''}">
      ${backgroundLayer}
      <div class="hero-inner">
        <p class="eyebrow reveal-scale" data-magnetic><i aria-hidden="true"></i>${kicker}</p>
        <h1 class="hero-title reveal-up">${title}</h1>
        <div class="hero-copy reveal-up">
          <p>${copy}</p>
          <div class="hero-actions">
            <a class="button primary" href="${primaryHref}" data-magnetic>${primaryLabel}</a>
            <a class="button secondary" href="${secondaryHref}" data-magnetic>${secondaryLabel}</a>
          </div>
        </div>
        ${extraHtml}
      </div>
    </section>`;
}

function detailCardGrid(items) {
  return `<div class="detail-card-grid">
    ${items
      .map(
        (item, index) => `
          <article class="detail-card reveal-up stagger-item" data-index="${index}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.body)}</p>
          </article>`,
      )
      .join('')}
  </div>`;
}

function harnessDetailContent(detail) {
  const backHref = detail.file.startsWith('ecosystem-') ? 'index.html#ecosystem' : 'index.html#harness-loop';
  const paragraphs = detail.paragraphs || [];
  const exampleHtml = detail.example
    ? `
      <section class="section detail-example-section">
        <p class="section-kicker">Example</p>
        <h2>${esc(detail.example.title)}</h2>
        <div class="detail-example">
          <div>
            <span>输入</span>
            <p>${esc(detail.example.input)}</p>
          </div>
          <div>
            <span>AI Harness 理解后</span>
            <p>${esc(detail.example.output)}</p>
          </div>
        </div>
      </section>`
    : '';
  return `
    ${hero(detail.kicker, esc(detail.heroTitle), esc(detail.subtitle), '#detail-content', '查看详细内容', backHref, '返回首页模块', '', 'harness-detail-page-hero')}
    <section class="section detail-content-section" id="detail-content">
      <p class="section-kicker">${esc(detail.kicker)}</p>
      <h2>${esc(detail.title)}</h2>
      <div class="detail-body">
        ${paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
      </div>
      ${detailCardGrid(detail.modules || [])}
      ${detail.emphasis ? `<blockquote class="detail-emphasis">${esc(detail.emphasis)}</blockquote>` : ''}
    </section>
    ${exampleHtml}
    <section class="section detail-closing-section">
      <p class="section-kicker">Next Step</p>
      <h2>${esc(commonHarnessDetailClosing.title)}</h2>
      <p class="section-lead">${esc(commonHarnessDetailClosing.body)}</p>
      <div class="cta-grid">
        ${commonHarnessDetailClosing.actions.map((action, index) => `<a class="button ${index === 0 ? 'primary' : 'secondary'}" href="${esc(action.href)}" data-magnetic>${esc(action.label)}</a>`).join('')}
      </div>
    </section>
    ${projectLinks()}
  `;
}

const homeContent = `
  ${hero(
    '幻醒科技 GIBIRA / AI Harness',
    '<span class="shiny-text hero-title-line">Harness 驾驭系统</span>',
    '幻醒科技 GIBIRA 的核心是一套智能协同作业中枢<br>让 AI 理解目标 拆解任务 调度工具 进入真实流程 并交付可验证结果',
    '#harness',
    '了解 Harness 核心',
    '#projects',
    '查看五大项目',
    homeProjectGrid(featuredProjects),
    'home-hero',
  )}
  ${verticalScrollStory(`
  <section class="section harness-section vertical-scroll-panel" id="harness" data-vertical-scroll-panel>
    <div class="harness-copy reveal-up">
      <p class="section-kicker">01 / Core System</p>
      ${scrollFloatTitle('幻醒科技 GIBIRA 的核心：AI Harness 驾驭系统')}
      <p class="section-lead">一个专为真实作业场景打造的智能协同作业中枢。</p>
      <p>AI Harness 不是单一的效率工具，也不是孤立的某个大模型，而是一套具备组织与协同能力的作业中枢。它能够直面复杂的终极目标，自动拆解执行路径、跨模态调度工具与智能体。它不提供“仅供参考”的答案，而是直接切入实际工作流，将意图转化为可执行、可校验、可交付的最终成果。</p>
    </div>
  </section>
  <section class="section harness-detail-section vertical-scroll-panel" id="harness-loop" data-vertical-scroll-panel>
    ${cardGrid([
      { kicker: '深度理解任务', title: '听懂复杂商业意图', body: '它能听懂复杂的商业意图，而不是简单的 prompt 提示词。', href: 'harness-complex-intent.html' },
      { kicker: '精准调度工具', title: '组织模型、软件与智能体', body: '它知道在什么时候该调用什么模型、什么软件、什么智能体。', href: 'harness-orchestration.html' },
      { kicker: '无缝切入流程', title: '沉入原有业务流', body: '它不是置身事外，而是直接沉入你原有的业务流中。', href: 'harness-workflow.html' },
      { kicker: '闭环完成交付', title: '只交付确定性结果', body: '它不提供“仅供参考”的草稿，它只交付高确定性的结果。', href: 'harness-deterministic-delivery.html' },
    ], 'content-list-shell harness-card-list')}
    <p class="section-lead">真实的产业级工作不是一问一答，而是从理解、判断、拆解、执行、校验到交付的完整闭环。</p>
    ${processFlow([
      { title: '意图输入', href: 'harness-process-intent-input.html' },
      { title: '任务解构', href: 'harness-process-task-breakdown.html' },
      { title: '路径规划', href: 'harness-process-path-planning.html' },
      { title: '工具调度', href: 'harness-process-tool-dispatch.html' },
      { title: '流程切入', href: 'harness-process-workflow-entry.html' },
      { title: '效能校验', href: 'harness-process-performance-validation.html' },
      { title: '成果交付', href: 'harness-process-delivery.html' },
    ])}
  </section>
  ${ecosystemSection()}
  ${coreTeamSection()}
  ${aiResearchTeamSection()}
  ${collaborativeResearchTeamSection()}
  ${advisorSection()}
  <section class="section vertical-scroll-panel" id="projects" data-vertical-scroll-panel>
    <p class="section-kicker reveal-up">08 / Project Routes</p>
    ${scrollFloatTitle('GIBIRA 核心项目')}
    <p class="section-lead reveal-up">启枢AI、蜂聚AI、诺思AI、ACAUSAL 与 AXION OS，分别覆盖工程设计、电商增长、教育、认知交互和具身智能。</p>
    ${verticalApplicationGrid(verticalApplications)}
  </section>
  <section class="section contact-cta vertical-scroll-panel" id="contact" data-vertical-scroll-panel>
    <p class="section-kicker reveal-up">09 / Contact</p>
    ${scrollFloatTitle('与幻醒同行，把 AI 带进真实世界')}
    <p class="section-lead reveal-up">我们正在寻找愿意共创真实项目的设计院、工程机构、产业伙伴、学术机构。幻醒科技选择把 AI 放进真实工作链路，让它看懂任务、组织工具、校验结果，并把事情做成。</p>
    <div class="cta-grid">
      <a class="button primary" href="mailto:${contact.email}" data-magnetic>建立商务合作</a>
      <a class="button secondary" href="mailto:${contact.email}" data-magnetic>探索校企联合</a>
      <a class="button secondary" href="#projects" data-magnetic>即刻产品体验</a>
      <a class="button secondary" href="tel:${contact.phone}" data-magnetic>与我们取得联系</a>
    </div>
    <div class="quote-panel">
      <p>觉于核心，成于真实。</p>
    </div>
  </section>
  `)}
`;

const pages = [
  {
    file: 'index.html',
    title: '幻醒科技 GIBIRA',
    description: '幻醒科技 GIBIRA 官方网站，展示 AI Harness 驾驭系统与五大垂直应用系统。',
    content: homeContent,
  },
  {
    file: 'qishu-ai.html',
    title: '启枢AI',
    description: '启枢是幻醒科技面向工程图纸、空间设计与生产制造打造的工业AI作业平台。',
    content: qishuIntegratedContent(),
  },
  ...harnessDetailPages.map((detail) => ({
    file: detail.file,
    title: detail.title,
    description: detail.subtitle,
    content: harnessDetailContent(detail),
  })),
  {
    file: 'axion-os.html',
    title: 'AXION OS',
    description: 'AXION OS 巨灵装卸机器人具身智能操作系统。',
    content: `
      ${hero('AXION OS / 下一代工业装卸机器人一体化平台', 'AXION OS<br><span class="thin">巨灵装卸机器人</span>', '面向具身机器人与物理作业调度的 AI Harness 应用场景，已打通任务理解、空间感知、系统控制与硬件执行的连续作业链。', '#architecture', '查看系统架构', 'index.html#projects', '查看项目矩阵', '', 'faulty-terminal-hero')}
      <section class="section tight">${metricGrid([
        { label: 'Architecture', value: '三层', note: '认知决策层、系统控制层、物理执行层。' },
        { label: 'Scenarios', value: '四类', note: '火车装卸、集装箱货卡、混码拆垛、货场三检。' },
        { label: 'Milestone', value: '六阶段', note: '需求冻结到联调、彩排与验收。' },
      ])}</section>
      <section class="section">
        <p class="section-kicker">Applied Harness</p>
        <h2>面向具身机器人与物理作业调度的 AI Harness 应用场景。</h2>
        <p class="section-lead">巨灵把任务理解、路径规划、工具调用和状态监控方法带入机器人、AGV、仓储物流与真实空间作业，形成从业务指令到物理世界执行闭环的系统能力。</p>
        ${cardGrid([
          { kicker: 'Task', title: '机器人任务拆解', body: '把自然语言或业务指令拆解为动作序列、路径要求、设备约束和安全条件。' },
          { kicker: 'Fleet', title: '多设备协同', body: '统一组织机器人、AGV、视觉设备和控制台，协调任务状态与作业顺序。' },
          { kicker: 'Space', title: '空间感知', body: '结合 3D 视觉、点云地图、障碍物与设备状态形成实时空间判断。' },
          { kicker: 'Loop', title: '物理世界执行闭环', body: '下发高层控制指令，接收执行反馈，并在人机协同下持续调整任务。' },
        ])}
      </section>
      <section class="section" id="architecture">
        <p class="section-kicker">System Architecture</p>
        <h2>大小脑双核：高灵活性认知与微秒级实时控制统一。</h2>
        ${cardGrid([
          { kicker: 'Cognition', title: '认知决策层', body: 'VLM/VLA 多模态大模型负责自然语言任务理解、视觉环境研判、安全风险提示和执行解释。' },
          { kicker: 'Control', title: '系统控制层', body: 'AXION OS 骨架引擎与 Web 控制台负责任务编排、安全管控、过程记录和历史数据持久化。' },
          { kicker: 'Execution', title: '物理执行层', body: '机器人接入网关读取状态、下发指令、完成安全挂起与恢复，屏蔽底座硬件协议差异。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Industrial Scenarios</p>
        <h2>面向重载、复杂、柔性化工业作业场景。</h2>
        ${timeline([
          { title: '火车智能装卸', body: '棚车袋装/箱装货物自动码垛，敞车卸料与安全检测，利用 3D 视觉、点云地图和轨迹规划完成复杂装卸。' },
          { title: '集装箱与货卡自适应装卸', body: '随机靠泊下自动解算车高、车斗尺寸和栏板高度，规划贴边贴底的最优垛型。' },
          { title: '多品规混码与拆垛', body: '免示教自适应算法计算 Mixed-SKU 稳定码放位置，并与 AGV/AMR 协同作业。' },
          { title: '货场三检与协同巡检', body: '作业前后巡检股道、道路、卡扣、锁头或篷布状态，重构巡检-作业-复检闭环。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Validation &amp; Progress</p>
        <h2>三大核心演示场景验证可操作、可解释、可复盘。</h2>
        ${cardGrid([
          { kicker: 'Scenario 01', title: '自然语言巡检', body: '控制台输入自然语言指令，系统拆解动作序列与规划路径，机器人自主移动并输出视觉状态研判。' },
          { kicker: 'Scenario 02', title: '异常暂停与人工恢复', body: '遇到障碍或模拟故障时平稳降速挂起，控制台推送警报，排除后继续或取消任务。' },
          { kicker: 'Scenario 03', title: '历史任务回放', body: '即使机器人离线，系统仍可按时间线重现轨迹、视觉快照、AI 推理逻辑和任务摘要。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Safety Boundary</p>
        <h2>系统研发侧只通过标准 API 下发高层控制指令。</h2>
        <p class="section-lead">AXION OS 通过标准 API 对接机器人底盘、视觉设备与装卸机构。合作交付围绕任务编排、安全联锁、权限边界、过程审计和现场验收展开，系统源代码、模型权重、内部数据结构与安全锁规则纳入严格的技术资产管理。</p>
      </section>
      <section class="section">
        <p class="section-kicker">Commercial Value</p>
        <h2>以标准接入、任务编排和过程审计提升工业作业系统价值。</h2>
        ${dataTable(
          ['价值方向', '应用结果'],
          [
            ['设备接入', '统一机器人、AGV、视觉设备与控制台接口，缩短多设备联调路径。'],
            ['作业组织', '把业务指令转化为动作序列、任务优先级与安全条件，提升复杂作业协同效率。'],
            ['过程审计', '沉淀任务状态、异常恢复、视觉快照与历史回放，为验收和持续优化提供依据。'],
          ],
        )}
      </section>
      <section class="section">
        <p class="section-kicker">Next Direction</p>
        <h2>下一阶段围绕标准接入、联合试点与多设备作业闭环推进。</h2>
        ${timeline([
          { title: '标准接入协议', body: '沉淀机器人、AGV、视觉设备与控制台的统一任务接口和状态协议。' },
          { title: '工业联合试点', body: '围绕仓储、巡检、搬运和装卸场景建立任务成功率、作业节拍与安全验收口径。' },
          { title: '多设备协同调度', body: '扩展设备编组、任务优先级、异常恢复和历史任务回放能力。' },
        ])}
      </section>
      ${projectContactSection('AXION OS 巨灵装卸机器人')}
      ${projectLinks()}
    `,
  },
  {
    file: 'north-ai.html',
    title: '诺思AI',
    description: '诺思AI AI+生理学智慧教学项目。',
    content: `
      ${hero('North AI / AI+生理学智慧教学项目', '诺思AI', '面向知识密集型任务、教学协同和长期反馈的 AI 协同系统，连接教师、学生、课程资料与持续学习记录。', '#teaching', '查看教学闭环', 'index.html#projects', '查看项目矩阵', '', 'ripple-grid-hero')}
      <section class="section tight">${metricGrid([
        { label: 'Partner', value: '西安交通大学', note: '宗濂书院 AI+生理学示范公开课。' },
        { label: 'Core', value: 'AI Harness', note: '知识结构化、3D建模、AR交互、智能评测。' },
        { label: 'Goal', value: '教育平权', note: '让优质教学经验与科研精神更广泛流动。' },
      ])}</section>
      <section class="section">
        <p class="section-kicker">Knowledge Collaboration</p>
        <h2>面向知识密集型任务、教学协同和长期反馈的 AI 协同系统。</h2>
        <p class="section-lead">诺思围绕西安交通大学 AI+生理学项目组织课程资料、学习路径、教学角色和课堂反馈，把复杂学科内容转化为可交互、可追踪、可持续优化的学习过程。</p>
        ${cardGrid([
          { kicker: 'Knowledge', title: '教学内容组织', body: '围绕课程结构、医学知识和教学目标，辅助教师完成资料编排与讲解设计。' },
          { kicker: 'Path', title: '学习路径生成', body: '依据知识点依赖关系与学习状态组织课前、课中、课后的连续学习任务。' },
          { kicker: 'Roles', title: '多角色协同', body: '连接教师、学生、AI助教与教研人员，让备课、教学、评测和复盘保持一致。' },
          { kicker: 'Memory', title: '长期学习记录', body: '沉淀学生提问、知识点掌握情况和学习反馈，为个性化教学辅助提供依据。' },
        ])}
      </section>
      <section class="section" id="teaching">
        <p class="section-kicker">Teaching Loop</p>
        <h2>教师主导，AI 协同，学生参与。</h2>
        ${cardGrid([
          { kicker: '01', title: '帮助学生理解机制', body: '通过知识结构、动态可视化、机制拆解和启发式提问，建立完整的生理学知识框架。' },
          { kicker: '02', title: '减轻教师重复工作', body: 'AI 辅助课程设计、资料整理、题目生成、课堂互动和学习反馈。' },
          { kicker: '03', title: '覆盖教学全过程', body: '贯穿课前备课、课中教学、随堂评测和课后巩固，形成教师端与学生端协同系统。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Core Capabilities</p>
        <h2>AI助教、机制卡、3D建模、AR交互和大师数字智能体。</h2>
        ${timeline([
          { title: 'AI助教“小袁老师”', body: '保留袁恒老师教学逻辑，通过提示、追问和知识关联引导学生逐步理解因果关系。' },
          { title: 'AI机制卡', body: '拆解胰液、胆汁、小肠液、分节运动、蠕动和神经体液调节等复杂机制。' },
          { title: '3D建模与AR交互课堂', body: '将抽象消化生理过程转化为可视、可交互、可追问的动态内容。' },
          { title: '大师数字智能体', body: '基于公开学术成果、生平资料和历史档案，让学生与科研大师开展跨时空对话。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Value</p>
        <h2>AI 进入教育，不是替代教师，而是服务人的成长。</h2>
        ${dataTable(
          ['对象', '价值'],
          [
            ['教师', '减少资料整理、基础题目设计和重复讲解，更及时掌握学生反馈。'],
            ['学生', '将抽象知识转化为可视化、交互式学习内容，获得持续个性化学习辅导。'],
            ['高校', '探索 AI 与医学教育深度融合的新型教学模式，沉淀可复用数字教学资源。'],
            ['教育公平', '降低优质课程和个性化辅导获取门槛，让优秀教师经验突破时间和地域限制。'],
          ],
        )}
      </section>
      <section class="section">
        <p class="section-kicker">Validation &amp; Progress</p>
        <h2>以西安交通大学 AI+生理学项目推进课程协同验证。</h2>
        ${cardGrid([
          { kicker: 'Partner', title: '高校联合场景', body: '围绕宗濂书院示范公开课组织真实课程内容、教学角色与课堂交互。' },
          { kicker: 'Assets', title: '课程资产沉淀', body: '把知识点、教学资料、3D 内容与课堂反馈沉淀为可持续复用的数字教学资源。' },
          { kicker: 'Loop', title: '教学反馈闭环', body: '连接备课、授课、评测和复盘，为学习路径与教学改进提供连续依据。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Next Direction</p>
        <h2>下一阶段聚焦课程资产、学习反馈与跨课程复用。</h2>
        ${timeline([
          { title: '课程知识资产', body: '沉淀课程结构、知识点关系、教学资料和教师经验，形成可复用教研资源。' },
          { title: '长期学习反馈', body: '完善学习记录、课堂评测和个性化反馈，让教师持续掌握学习进展。' },
          { title: '跨课程协同', body: '把生理学场景形成的知识组织与教学协同能力扩展到更多知识密集型课程。' },
        ])}
      </section>
      ${projectContactSection('诺思AI')}
      ${projectLinks()}
    `,
  },
  {
    file: 'acausal.html',
    title: 'ACAUSAL',
    description: 'ACAUSAL 非因果律 AI 精神疗愈体验项目。',
    content: `
      ${hero('ACAUSAL / 非因果律', 'ACAUSAL<br><span class="thin">非因果律</span>', '面向长期认知交互、多模态表达和个人与组织智能体体验的 AI 交互系统，以荣格心理学与《金花的秘密》构建连续的认知陪伴体验。', '#system', '查看体验系统', 'index.html#projects', '查看项目矩阵', '', 'galaxy-hero')}
      <section class="section tight">
        <div class="split">
          <div>${metricGrid([
            { label: 'Positioning', value: '精神探索', note: '聚焦人类内在精神系统与长期记忆交互。' },
            { label: 'Model', value: 'Jung', note: '荣格心理学、人格拓扑、象征系统与自我整合。' },
            { label: 'Commerce', value: 'Bracelet', note: '体验后转化疗愈手串与精神陪伴产品。' },
          ])}</div>
          <figure class="image-panel" data-magnetic><img src="assets/acausal-card.png" alt="ACAUSAL 心理学模型与认知交互系统介绍图" /></figure>
        </div>
      </section>
      <section class="section">
        <p class="section-kicker">Continuous Interaction</p>
        <h2>把单次对话升级为有上下文、有记忆、有情境反馈的长期交互。</h2>
        ${cardGrid([
          { kicker: 'Context', title: '长期上下文', body: '持续整理个人叙事、主题变化与重要事件，让后续交互建立在真实历史之上。' },
          { kicker: 'Multimodal', title: '多模态体验', body: '结合文字、图像、声音与象征内容，组织更完整的认知表达和体验反馈。' },
          { kicker: 'Memory', title: '角色记忆', body: '为个人或组织智能体沉淀角色设定、表达习惯、关系边界与长期目标。' },
          { kicker: 'Feedback', title: '情境反馈', body: '根据当前状态、长期记录和交互情境生成连续、个性化且边界清晰的回应。' },
        ])}
      </section>
      <section class="section" id="system">
        <p class="section-kicker">Experience System</p>
        <h2>让 AI 穿透表层对话，触达人的复杂内在状态。</h2>
        ${cardGrid([
          { kicker: '01', title: '心理学模型与认知交互', body: '融合前沿心理学模型、人格结构、情绪理解与长期记忆，协助用户完成深度自我梳理。' },
          { kicker: '02', title: '荣格与金花的秘密', body: '以象征、梦、内在图像、自性化和东方内丹隐喻为体验叙事核心。' },
          { kicker: '03', title: '疗愈手串转化', body: '将用户体验中的关键词、象征图像与内在议题转化为个性化手串推荐与故事化商品。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Product Boundary</p>
        <h2>定位为精神探索与心理陪伴，不替代医疗或心理治疗。</h2>
        <p class="section-lead">ACAUSAL不进行医学诊断，不替代心理治疗，也不替代专业医疗服务。该项目展示 Harness 在长期任务状态、用户记忆管理、多轮复杂交互、个性化反馈和长期使用数据积累中的连续协作能力。</p>
        ${cardGrid([
          { kicker: 'Memory', title: '长期记忆', body: '整理用户信息、个人叙事与反复出现的主题，让对话不止停留在单次问答。' },
          { kicker: 'Interaction', title: '多轮复杂交互', body: '结合心理学模型、情绪与主题识别，形成更细腻的长期陪伴体验。' },
          { kicker: 'Boundary', title: '明确产品边界', body: '避免疾病诊断、疗效保证或治疗承诺，把体验定位在自我探索与精神陪伴。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Application Value</p>
        <h2>长期认知交互形成连续体验、个性表达与组织智能体能力。</h2>
        ${dataTable(
          ['能力方向', '应用价值'],
          [
            ['长期上下文', '减少重复说明，让个人与组织智能体能够延续历史任务和关系状态。'],
            ['多模态表达', '把文字、图像、声音与象征内容组织成更完整的交互体验。'],
            ['角色记忆', '保持角色设定、表达方式、知识边界和长期目标的一致性。'],
            ['情境反馈', '结合当前状态与长期记录，生成更贴合用户情境的连续回应。'],
          ],
        )}
      </section>
      <section class="section">
        <p class="section-kicker">Validation &amp; Progress</p>
        <h2>围绕长期上下文、角色记忆与多模态表达形成连续体验闭环。</h2>
        ${cardGrid([
          { kicker: 'Context', title: '连续对话状态', body: '通过长期上下文保持主题、关系和任务状态的一致性。' },
          { kicker: 'Memory', title: '角色记忆治理', body: '组织角色设定、表达边界和授权范围，支撑稳定的个性化交互。' },
          { kicker: 'Experience', title: '多模态体验路径', body: '连接文字、图像、声音与情境反馈，形成可持续迭代的体验结构。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Next Direction</p>
        <h2>下一阶段聚焦记忆治理、多模态体验与组织级智能体协作。</h2>
        ${timeline([
          { title: '记忆治理', body: '完善长期记忆的授权、整理、更新和边界管理。' },
          { title: '多模态体验', body: '扩展视觉、声音与互动内容的统一表达和情境反馈。' },
          { title: '组织智能体', body: '将长期上下文与角色记忆用于团队知识、任务协作和持续服务场景。' },
        ])}
      </section>
      ${projectContactSection('ACAUSAL')}
      ${projectLinks()}
    `,
  },
  {
    file: 'fengju-ai.html',
    title: '蜂聚AI',
    description: '蜂聚AI 短视频商家自动获客与店铺经营工具。',
    content: `
      ${hero('Fengju AI / 商业增长协同系统', '蜂聚AI', '面向商业增长、电商内容和转化流程的 AI 增长协同系统，连接商品内容、平台分发、用户反馈、转化运营与复盘沉淀。', '#growth', '查看增长闭环', 'index.html#projects', '查看项目矩阵', '', 'dot-field-hero')}
      <section class="section tight">${metricGrid([
        { label: 'Channel', value: '短视频平台', note: '围绕抖音、本地生活、直播间和短视频评论区获客。' },
        { label: 'Loop', value: '获客-转化-复购', note: '从线索识别到私域跟进和店铺管理。' },
        { label: 'User', value: '商家', note: '服务门店、团购、本地生活、电商和服务型商户。' },
      ])}</section>
      <section class="section" id="growth">
        <p class="section-kicker">Growth Loop</p>
        <h2>把短视频流量转化为可跟进、可成交、可复购的客户资产。</h2>
        ${cardGrid([
          { kicker: 'AI客服', title: '自动回复与意向识别', body: '识别评论、私信和咨询中的购买意图，完成 FAQ 回复、价格说明、预约引导和客服分流。' },
          { kicker: 'AI自动获客', title: '线索抓取与分层', body: '从互动行为、关键词和内容场景中识别潜在客户，按热度、需求和转化阶段分层。' },
          { kicker: 'AI转化', title: '跟进话术与成交路径', body: '为不同客户生成私信、电话、优惠、预约和复购跟进策略，降低商家人工跟进压力。' },
          { kicker: 'AI店铺管理', title: '经营看板与任务提醒', body: '汇总线索、订单、内容表现、客服质量和转化进度，形成短视频经营工作台。' },
          { kicker: '内容建议', title: '爆款话题与脚本辅助', body: '结合商家品类、平台趋势和客户问题，生成短视频选题、脚本和直播答疑素材。' },
          { kicker: '私域沉淀', title: '客户标签与复购运营', body: '沉淀客户标签、消费偏好和沟通记录，为后续复购、会员和社群运营提供依据。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Growth Collaboration</p>
        <h2>面向商业增长、电商内容和转化流程的 AI 增长协同系统。</h2>
        <p class="section-lead">蜂聚把商品内容生成、多平台内容分发、用户反馈收集、转化路径优化、达人素材协同、活动复盘与品牌内容资产沉淀组织成连续增长流程。</p>
        ${processFlow(['市场趋势分析', '竞品分析', '选品判断', '商品卖点提取', '内容生成', '广告和投放策略', '数据复盘', '增长优化'])}
      </section>
      <section class="section">
        <p class="section-kicker">Commercial Packages</p>
        <h2>适合从单店工具到连锁经营系统逐步升级。</h2>
        ${dataTable(
          ['版本', '核心能力', '适合对象'],
          [
            ['基础版', 'AI客服、FAQ、基础线索表', '单店或个人商家'],
            ['增长版', '自动获客、意向分层、转化话术、复购提醒', '稳定投放与内容运营商家'],
            ['企业版', '多账号管理、经营看板、私域同步、团队权限', '连锁门店、本地生活服务商、电商团队'],
          ],
        )}
      </section>
      <section class="section">
        <p class="section-kicker">Validation &amp; Progress</p>
        <h2>以内容、线索、转化和复盘数据形成增长协同闭环。</h2>
        ${cardGrid([
          { kicker: 'Content', title: '内容资产组织', body: '统一商品卖点、短视频脚本、直播素材与平台发布节奏。' },
          { kicker: 'Lead', title: '线索分层跟进', body: '按互动信号、需求阶段与转化热度组织商家后续动作。' },
          { kicker: 'Review', title: '经营复盘沉淀', body: '把内容表现、客服反馈和成交结果回流为下一轮增长策略。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Next Direction</p>
        <h2>下一阶段围绕平台连接、转化归因与品牌内容资产推进。</h2>
        ${timeline([
          { title: '多平台连接', body: '统一组织短视频、直播、电商店铺和私域渠道的内容与线索流转。' },
          { title: '转化路径优化', body: '把用户反馈、客服记录、活动表现和成交结果连接到可复盘的增长路径。' },
          { title: '品牌资产沉淀', body: '沉淀高表现素材、商品卖点、达人协同记录和活动复盘，形成可复用内容资产。' },
        ])}
      </section>
      ${projectContactSection('蜂聚AI')}
      ${projectLinks()}
    `,
  },
  {
    file: 'jintanglang-cad.html',
    title: '金螳螂',
    description: '苏州金螳螂建筑装饰合作 CAD 平面图三维建模项目。',
    content: `
      ${hero('CAD-to-Model-to-Elevation-to-Scene', '金螳螂<br><span class="thin">CAD 三维建模合作项目</span>', '与苏州金螳螂建筑装饰股份有限公司合作的启枢 AI 开发项目，基于 CAD 平面图实时三维建模、立面投影生成与高斯泼溅真实场景渲染。', '#cad', '查看技术闭环')}
      <section class="section tight">${metricGrid([
        { label: 'Stage', value: 'Demo验证', note: '实机 Demo 验证阶段 / 功能拓展验证阶段。' },
        { label: 'Flow', value: 'CAD→Scene', note: '二维图纸到三维空间、立面投影和真实场景。' },
        { label: 'Output', value: 'DXF', note: '工程结果可导出回 CAD 继续编辑。' },
      ])}</section>
      <section class="section" id="cad">
        <p class="section-kicker">Technical Loop</p>
        <h2>解决二维图纸、三维模型、立面图和真实场景之间长期割裂的问题。</h2>
        ${timeline([
          { title: 'CAD/DXF 图纸导入', body: '优先读取 CAD 原始矢量数据，包括线段、多段线、图层、轮廓和空间边界。' },
          { title: '标高尺寸数据驱动建模', body: '用户输入层高、墙高、门窗高度和构件高度，系统生成具有真实高度关系的三维模型。' },
          { title: '多方向立面投影', body: '根据三维模型生成主立面、侧立面、外立面和展开立面，减少手工绘制。' },
          { title: '高斯泼溅真实场景渲染', body: '在立面图纸和空间模型基础上生成真实材质、真实光照与多视角空间体验。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Strategic Validation</p>
        <h2>金螳螂 CAD 三维建模是启枢空间设计能力的专项验证。</h2>
        <p class="section-lead">这个二级页面承接主站项目路由，说明启枢如何从设计审图继续延展到 CAD 平面图、三维模型、立面投影和真实空间渲染之间的数据一致性，并形成工程图纸理解与空间数据能力的合作案例。</p>
        ${cardGrid([
          { kicker: 'Qishu', title: '图纸理解', body: '从 CAD/DXF 图纸中读取线段、图层、边界和空间关系。' },
          { kicker: 'Scene', title: '空间重建', body: '用标高、墙高、门窗高度等参数生成可浏览三维模型。' },
          { kicker: 'Delivery', title: '工程可编辑', body: '把模型、立面和真实场景回连到可编辑 CAD/DXF 成果。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Application Value</p>
        <h2>从工程正确性延伸到视觉说服力。</h2>
        ${cardGrid([
          { kicker: 'Design', title: '提升设计深化效率', body: '快速完成从平面图到三维空间，再到立面投影图的转换，减少重复绘图时间。' },
          { kicker: 'Consistency', title: '降低图纸不一致风险', body: '基于同一套空间数据生成模型、立面图和真实场景，减少信息断裂。' },
          { kicker: 'Presentation', title: '提升甲方沟通效率', body: '高斯泼溅真实场景、风格切换、多视角浏览和热点交互增强方案汇报表现力。' },
        ])}
      </section>
      <section class="section">
        <p class="section-kicker">Roadmap</p>
        <h2>后续围绕真实 CAD 图纸兼容性与图纸-场景一致性迭代。</h2>
        ${dataTable(
          ['阶段', '研发重点'],
          [
            ['CAD 解析稳定性', '建立标准测试图库，覆盖住宅、商业、办公、展厅、柜体和异形空间。'],
            ['人机协同确认', '在墙体边界、开口位置、层高、投影方向等不确定节点提示用户确认。'],
            ['立面图工程表达', '优化线型、图层、比例、遮挡、尺寸标注、标高标注和构件表达。'],
            ['场景渲染能力', '提升清晰度、材质、尺度准确性、风格切换、热点绑定和交互链接输出。'],
          ],
        )}
      </section>
      ${projectLinks()}
    `,
  },
];

for (const page of pages) {
  if (page.file === 'index.html') {
    continue;
  }
  fs.writeFileSync(path.join(root, page.file), layout(page));
}

console.log(`Generated ${pages.length - 1} pages and preserved the showcase homepage.`);
