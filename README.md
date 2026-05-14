# 贺01 AI 实战资源库

这是一个纯前端静态网站，用来展示 AI 工具导航、资源下载、实战教程、作品案例，并承接私域与合作转化。

当前版本已经改造成“可长期维护的资源库框架”：前台内容从 `data/` 目录里的 JSON 读取，`admin.html` 提供本地轻量维护后台，可编辑内容并导出 JSON。

## 页面结构

- `index.html`：首页
- `tools.html`：AI 工具导航
- `resources.html`：资源下载
- `tutorials.html`：实战教程
- `cases.html`：作品案例
- `contact.html`：联系合作
- `admin.html`：本地资源库管理台
- `style.css`：全站样式
- `script.js`：前台交互与数据渲染
- `admin.js`：后台交互、localStorage、导入导出

## data 文件说明

- `data/tools.json`：AI 工具导航数据
- `data/resources.json`：资源下载数据
- `data/tutorials.json`：实战教程数据
- `data/cases.json`：作品案例数据
- `data/site.json`：站点基础信息、联系方式、私域二维码、服务项目

前台页面会优先读取这些 JSON 文件。直接双击 HTML 用 `file://` 打开时，部分浏览器会限制读取本地 JSON，网站会自动使用内置示例数据兜底；正式部署或使用本地服务器预览时会读取 `data/` 文件。

## admin.html 使用说明

`admin.html` 是本地静态维护工具，不是真正安全的在线后台。

使用流程：

1. 打开 `admin.html`。
2. 在站点设置、AI 工具、资源、教程、案例里添加或修改内容。
3. 点击对应导出按钮，导出 `tools.json`、`resources.json`、`tutorials.json`、`cases.json` 或 `site.json`。
4. 用导出的 JSON 替换项目 `data/` 文件夹里的同名文件。
5. 重新部署网站，前台就会显示新内容。

后台保存使用浏览器 `localStorage`。换电脑、换浏览器或清理浏览器数据后会丢失，所以要定期导出 JSON 备份。

## 如何添加一个新工具

1. 打开 `admin.html`。
2. 进入“AI工具管理”。
3. 点击“新增工具”。
4. 填写工具名称、分类、简介、适合人群、使用建议、官网链接、教程链接、标签、状态、更新时间。
5. 保存后导出 `tools.json`。
6. 替换 `data/tools.json`。

## 如何添加一个新资源

1. 进入“资源下载管理”。
2. 点击“新增资源”。
3. 填写资源名称、类型、简介、适合谁用、格式、文件大小、下载链接、相关教程链接、标签、状态、更新时间。
4. 保存后导出 `resources.json`。
5. 替换 `data/resources.json`。

## 如何添加一篇教程

1. 进入“教程管理”。
2. 点击“新增教程”。
3. 填写教程标题、分类、难度、阅读时间、简介、内容摘要、标签、关联资源 id、状态、更新时间。
4. 保存后导出 `tutorials.json`。
5. 替换 `data/tutorials.json`。

## 如何添加一个案例

1. 进入“案例管理”。
2. 点击“新增案例”。
3. 填写项目名称、分类、状态、适合人群、解决问题、核心功能、项目简介、截图链接、详情链接、标签、更新时间。
4. 核心功能支持每行一个功能。
5. 保存后导出 `cases.json`。
6. 替换 `data/cases.json`。

## 如何导入导出 JSON

在 `admin.html` 的“导入导出”页面可以：

- 导入 `tools.json`
- 导入 `resources.json`
- 导入 `tutorials.json`
- 导入 `cases.json`
- 导入 `site.json`
- 分别导出每个 JSON 文件
- 一键导出 `he01-data-backup.json`
- 恢复示例数据

导入的数据会先保存到本机浏览器 `localStorage`，不会自动写回项目文件。要让前台线上生效，仍然需要导出 JSON 并替换 `data/` 文件。

## 本地预览

推荐用本地服务器预览：

```bash
python -m http.server 4173
```

然后打开：

```text
http://127.0.0.1:4173/
```

## 部署到 Vercel / Cloudflare Pages / GitHub Pages

这是纯静态项目，不需要构建命令。

Vercel：

1. 新建项目并选择这个目录。
2. Framework Preset 选择 Other。
3. Build Command 留空。
4. Output Directory 留空或使用根目录。

Cloudflare Pages：

1. 连接仓库。
2. Build command 留空。
3. Build output directory 填 `/` 或根目录。

GitHub Pages：

1. 推送到 GitHub 仓库。
2. 在 Settings → Pages 里选择分支和根目录。
3. 等待 Pages 发布。

## 当前限制

- `admin.html` 没有登录和权限控制，不适合作为公开安全后台。
- 不支持真正在线保存，所有编辑先保存在本机 `localStorage`。
- 不支持真实文件上传，资源下载建议先使用网盘、GitHub、官网链接等外链。
- 没有详情页，教程和案例详情链接暂时可用 `#` 占位。
- 没有全站真实搜索，只保留了页面内分类筛选。

如果正式上线时担心别人访问 `admin.html`，可以不上传 `admin.html` 和 `admin.js`，只上传前台页面、样式、脚本和 `data/` 文件。

## 后续升级方向

- 详情页
- 搜索功能
- 真实下载链接
- 在线后台
- 数据库
- 文件上传
- 会员系统
- 付费资源
