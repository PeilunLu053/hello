# GIBIRA 静态网站

这是一个由 Node.js 脚本生成并通过 Netlify 发布的多页面静态网站。GitHub
负责保存代码和运行持续集成检查，Netlify 负责在代码推送后自动构建、生成预览并发布。

## 本地开发

项目使用 Node.js 20。首次拉取后运行：

```bash
npm ci
npm run ci
```

常用命令：

- `npm run build`：重新生成仓库根目录中的网站页面。
- `npm run build:netlify`：生成页面并将可发布文件整理到 `dist/`。
- `npm run verify:netlify`：检查发布页面、资源清单、视频重定向与文件大小。
- `npm test`：运行页面与部署配置回归测试。
- `npm run ci`：执行与 GitHub/Netlify 一致的完整构建和测试。

`dist/` 是临时构建产物，不应提交到 Git。

## 自动部署流程

1. 向 `main` 分支推送代码，或创建以 `main` 为目标的 Pull Request。
2. GitHub Actions 安装锁定依赖并执行 `npm run ci`。
3. 已连接的 Netlify 项目检测到 Git 更新，按照 `netlify.toml` 独立构建。
4. `main` 分支发布到生产环境；Pull Request 和其他已启用分支生成独立预览。

仓库内的部署参数是：

- 构建命令：`npm run ci`
- 发布目录：`dist`
- Node.js：20

GitHub Actions 不直接调用 Netlify 部署，也不需要保存
`NETLIFY_AUTH_TOKEN` 或 `NETLIFY_SITE_ID`。这样可避免 Git 集成与工作流重复发布同一次提交。

## Netlify 项目设置

域名、DNS、HTTPS 和 GitHub 仓库连接属于 Netlify/阿里云控制台设置，不写入仓库。
请在 Netlify 中保持以下设置：

- 生产分支为 `main`。
- Deploy Previews 已开启。
- 需要 Branch Deploy 时，在 Netlify 中选择允许的分支。
- 密钥只保存在 Netlify 的 Environment variables 中，不要写入
  `netlify.toml`、GitHub 工作流或源码。

这是多页面网站，因此没有配置通用的 `/* -> /index.html` SPA 重写。每个
HTML 页面会保留自己的 URL，未知路径按正常的 404 处理。

## 缓存策略

HTML 每次访问都会重新验证，以便发布后快速更新。当前资源文件名没有内容哈希，因此
`assets/` 也会在每次访问时重新验证，而不是使用长期缓存；修改同名图片或脚本后，
访客不会继续使用旧版本。

三个演示视频超过常规静态发布文件的合理大小，已从 Git 与 `dist/` 中排除。页面仍使用
原有 `/assets/*.mp4` 地址，Netlify 会按照 `netlify.toml` 将这些请求重定向到现有的视频
托管站点。

## 排查部署问题

- GitHub 检查失败：打开 Actions 中失败的 `Validate Netlify deployment` 日志。
- Netlify 构建失败：打开 Netlify 的 Deploys 页面并查看对应提交的构建日志。
- 页面未更新：确认最新提交已进入 `main`，再检查 Netlify 是否完成生产部署。
- 域名或 HTTPS 异常：在 Netlify Domain management 中确认 DNS 验证和证书状态。
