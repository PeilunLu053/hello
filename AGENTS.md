# 项目边界

本仓库只维护“启枢融资页面”，不得加入 GIBIRA 首页或“新项目BP”中的其他业务页面。

## 源码位置

- `src/qishu-ai.html`：启枢融资主页面，也是线上站点根页面的唯一来源。
- `src/qishu-funding-workbook.html`：完整资金详表页面。
- `public/assets/`：上述两个页面实际使用的图片、视频、字体、脚本和 XLSX。

修改页面时只编辑 `src/` 与 `public/`，不要直接编辑自动生成的 `dist/`。

## 必须保留

- 顶部只能显示左侧 GIBIRA Logo。
- 保留页面内 25 项目录跳转和原有动效。
- 保留完整资金详表、原始 XLSX 下载和返回资金页面的入口。
- 保留 AXION 机器人入口：`https://axion-os-robot-20260712233149.netlify.app`。
- 保留页尾。
- 不得恢复 GIBIRA 首页、产品矩阵或其他站内页面入口。

## 工作流

1. `npm run dev`：构建并在 `http://127.0.0.1:4173` 预览。
2. `npm run verify`：检查页面范围、资源和关键入口。
3. `npm run deploy:preview`：发布 Netlify 预览。
4. 预览确认后执行 `npm run deploy:prod`。

Netlify 正式站点：`https://friendly-griffin-a8be75.netlify.app/`。
