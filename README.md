# 启枢融资页面

这是启枢融资单页面的独立站点项目，后续页面修改、资源管理、检查和部署均以此目录为唯一来源。

## 项目结构

```text
启枢融资页面/
├── src/
│   ├── qishu-ai.html
│   └── qishu-funding-workbook.html
├── public/assets/
├── scripts/
├── netlify.toml
└── package.json
```

`dist/` 是构建生成目录，只包含：

- 启枢融资主页（`index.html` 与兼容路径 `qishu-ai.html`）
- 完整资金详表
- 两个页面实际使用的资源

## 本地使用

```bash
cd /Users/xucangzhou/Documents/启枢融资页面
npm run dev
```

打开 `http://127.0.0.1:4173`。

修改完成后执行：

```bash
npm run verify
```

## 部署

项目已绑定 Netlify 站点 `friendly-griffin-a8be75`。

```bash
# 预览部署
npm run deploy:preview

# 正式部署
npm run deploy:prod
```

正式地址：https://friendly-griffin-a8be75.netlify.app/
