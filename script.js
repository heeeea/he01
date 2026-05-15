const DATA_PATHS = {
  tools: "data/tools.json",
  resources: "data/resources.json",
  tutorials: "data/tutorials.json",
  cases: "data/cases.json",
  site: "data/site.json"
};

const PLACEHOLDER_LINK_MESSAGE = "该内容正在整理中，后续会更新真实链接。";

const FALLBACK_DATA = {
  tools: [
    { id: "tool-chatgpt", name: "ChatGPT", category: "AI 对话", description: "通用型 AI 助手，适合写作、分析、学习和项目构思。", suitableFor: "新手、内容创作者、项目负责人", usageTip: "先用于需求整理和方案拆解，再接入具体工具执行。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 对话", "写作"], status: "推荐", updatedAt: "2026-05-14" },
    { id: "tool-claude", name: "Claude", category: "AI 对话", description: "长文本理解和复杂写作体验稳定，适合做文档、方案和代码讨论。", suitableFor: "写作者、产品经理、开发者", usageTip: "用来梳理长文档、重构需求和复盘项目。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 对话", "长文本"], status: "推荐", updatedAt: "2026-05-14" },
    { id: "tool-gemini", name: "Gemini", category: "AI 对话", description: "适合信息整理、多模态理解和与 Google 生态结合的工作。", suitableFor: "办公用户、研究型用户", usageTip: "适合做资料对比、图片理解和日常效率辅助。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 对话", "多模态"], status: "常用", updatedAt: "2026-05-14" },
    { id: "tool-deepseek", name: "DeepSeek", category: "AI 对话", description: "中文体验友好，适合快速问答、代码理解和低成本试用。", suitableFor: "中文用户、学生、轻量开发者", usageTip: "用来做日常提问、脚本思路和内容初稿。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 对话", "中文"], status: "常用", updatedAt: "2026-05-14" },
    { id: "tool-codex", name: "Codex", category: "AI 编程", description: "适合用自然语言协作完成网页、小工具和代码改造。", suitableFor: "想用 AI 做项目的人", usageTip: "把需求拆清楚，按页面、功能和验收标准推进。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 编程", "网页"], status: "推荐", updatedAt: "2026-05-14" },
    { id: "tool-claude-code", name: "Claude Code", category: "AI 编程", description: "命令行 AI 编程助手，适合较完整的代码项目协作。", suitableFor: "开发者、技术型创作者", usageTip: "搭配清晰任务说明和版本管理使用。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 编程", "命令行"], status: "推荐", updatedAt: "2026-05-14" },
    { id: "tool-comfyui", name: "ComfyUI", category: "AI 图像", description: "节点式 AI 图像工作流工具，适合做可复用的图片生成流程。", suitableFor: "设计师、图片创作者、本地部署用户", usageTip: "先跑通基础工作流，再逐步增加模型和节点。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 图像", "本地部署"], status: "推荐", updatedAt: "2026-05-14" },
    { id: "tool-openclaw", name: "OpenClaw", category: "AI 自动化", description: "用于连接本地工具和自动化流程，适合做任务执行链路。", suitableFor: "自动化爱好者、工具型项目用户", usageTip: "先检查权限、路径和工具调用，再设计复杂流程。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 自动化", "本地工具"], status: "待补充", updatedAt: "2026-05-14" },
    { id: "tool-wps-ai", name: "WPS AI", category: "AI 办公", description: "围绕文档、表格、演示的办公 AI 功能，适合日常资料处理。", suitableFor: "办公用户、小商户、运营人员", usageTip: "从表格总结、合同草稿和汇报提纲开始使用。", officialUrl: "#", tutorialUrl: "#", tags: ["AI 办公", "表格"], status: "常用", updatedAt: "2026-05-14" },
    { id: "tool-coze", name: "Coze", category: "AI 自动化", description: "适合搭建智能体、问答机器人和轻量自动化应用。", suitableFor: "内容账号、客服场景、运营人员", usageTip: "先做单一场景机器人，再逐步扩展知识库和流程。", officialUrl: "#", tutorialUrl: "#", tags: ["智能体", "AI 自动化"], status: "常用", updatedAt: "2026-05-14" }
  ],
  resources: [
    { id: "resource-codex-prompt-template", title: "Codex 项目提示词模板", type: "提示词", description: "用于描述网站、小工具、Demo 项目的需求结构和验收标准。", targetUser: "想用 Codex 做项目的新手和创作者", format: "TXT", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["Codex", "提示词"], status: "可用", updatedAt: "2026-05-14" },
    { id: "resource-comfyui-model-paths", title: "ComfyUI 新手模型路径表", type: "教程资料", description: "整理常用模型、节点、工作流文件应该放置的位置。", targetUser: "刚开始安装和调试 ComfyUI 的用户", format: "PDF", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["ComfyUI", "安装排查"], status: "可用", updatedAt: "2026-05-14" },
    { id: "resource-ai-install-checklist", title: "AI 工具安装排查清单", type: "安装排查", description: "按环境、路径、依赖、权限和日志逐项检查常见安装问题。", targetUser: "经常卡在安装和报错阶段的用户", format: "PDF", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["安装", "排查"], status: "可用", updatedAt: "2026-05-14" },
    { id: "resource-openclaw-local-checklist", title: "OpenClaw 接通本地工具检查表", type: "工具清单", description: "检查本地工具路径、权限、命令执行和流程配置是否正确。", targetUser: "想接通本地自动化工作流的人", format: "TXT", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["OpenClaw", "自动化"], status: "待补充", updatedAt: "2026-05-14" },
    { id: "resource-claude-code-requirement-template", title: "Claude Code 项目需求模板", type: "模板", description: "把功能背景、页面结构、数据字段和交互规则写清楚。", targetUser: "需要让 AI 编程助手理解项目的人", format: "TXT", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["Claude Code", "模板"], status: "可用", updatedAt: "2026-05-14" },
    { id: "resource-ai-tool-case-pack", title: "AI 小工具项目案例包", type: "项目案例", description: "整理轻量工具、资源库网站和演示型项目的案例资料。", targetUser: "想找项目灵感和落地案例的人", format: "ZIP", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["AI 小工具", "案例"], status: "规划中", updatedAt: "2026-05-14" },
    { id: "resource-xianyu-ai-service-copy", title: "闲鱼 AI 服务商品文案模板", type: "模板", description: "用于包装 AI 安装调试、工具陪跑和项目 Demo 服务。", targetUser: "准备做 AI 服务商品的人", format: "TXT", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["闲鱼", "文案"], status: "待补充", updatedAt: "2026-05-14" },
    { id: "resource-shop-demo-pack", title: "小商户工具 Demo 资料包", type: "项目案例", description: "包含会员管理、线索接待、经营看板等小商户工具方向。", targetUser: "想做本地商户 AI 工具项目的人", format: "ZIP", size: "待补充", downloadUrl: "#", tutorialUrl: "#", tags: ["小商户", "Demo"], status: "规划中", updatedAt: "2026-05-14" }
  ],
  tutorials: [
    { id: "tutorial-build-ai-resource-site-with-codex", title: "用 Codex 做一个 AI 资源库网站", category: "Codex", difficulty: "入门", readingTime: "12 分钟", description: "从需求拆解、页面结构到静态站交付，跑通完整建站流程。", contentPreview: "围绕静态资源库网站，演示如何把需求拆成页面、样式、数据和验收标准。", tags: ["Codex", "AI 项目"], relatedResourceId: "resource-codex-prompt-template", status: "更新中", updatedAt: "2026-05-14" },
    { id: "tutorial-comfyui-debug-model-node-errors", title: "ComfyUI 新手如何排查模型和节点报错", category: "ComfyUI", difficulty: "入门", readingTime: "10 分钟", description: "按路径、依赖、节点版本和控制台日志拆解常见错误。", contentPreview: "从模型路径、缺失节点、Python 依赖和运行日志四个方向定位问题。", tags: ["ComfyUI", "工具调试"], relatedResourceId: "resource-comfyui-model-paths", status: "待写", updatedAt: "2026-05-14" },
    { id: "tutorial-openclaw-local-tool-workflow", title: "OpenClaw 如何接通本地工具工作流", category: "OpenClaw", difficulty: "进阶", readingTime: "15 分钟", description: "梳理本地工具、权限、路径和任务执行链路的基础方法。", contentPreview: "用检查表方式确认本地工具可调用，再逐步设计任务链路。", tags: ["OpenClaw", "工具调试"], relatedResourceId: "resource-openclaw-local-checklist", status: "待写", updatedAt: "2026-05-14" },
    { id: "tutorial-claude-code-build-small-tool", title: "Claude Code 怎么做一个小工具", category: "Claude Code", difficulty: "进阶", readingTime: "14 分钟", description: "用清晰需求、迭代步骤和测试标准推进一个轻量工具。", contentPreview: "把工具目标、输入输出、页面结构和验收动作写清楚，再让 AI 逐步实现。", tags: ["Claude Code", "AI 项目"], relatedResourceId: "resource-claude-code-requirement-template", status: "待写", updatedAt: "2026-05-14" },
    { id: "tutorial-xianyu-ai-service-listing", title: "AI 工具安装调试服务怎么在闲鱼上架", category: "闲鱼变现", difficulty: "实战", readingTime: "9 分钟", description: "从服务描述、交付边界、价格阶梯到沟通话术做商品包装。", contentPreview: "把 AI 安装调试服务拆成标准化商品，并明确交付边界。", tags: ["闲鱼", "AI 服务"], relatedResourceId: "resource-xianyu-ai-service-copy", status: "待写", updatedAt: "2026-05-14" },
    { id: "tutorial-package-ai-project-demo", title: "如何把 AI 项目打包成演示版", category: "AI 项目", difficulty: "进阶", readingTime: "11 分钟", description: "让项目具备可展示、可讲解、可复盘的 Demo 交付形态。", contentPreview: "整理页面入口、演示数据、操作路径和展示话术，形成可演示版本。", tags: ["AI 项目", "Demo"], relatedResourceId: "resource-ai-tool-case-pack", status: "更新中", updatedAt: "2026-05-14" },
    { id: "tutorial-first-webpage-with-ai", title: "小白怎么用 AI 做第一个网页", category: "新手入门", difficulty: "入门", readingTime: "8 分钟", description: "用最小页面结构、清晰文案和静态文件完成第一个网页。", contentPreview: "从一个 HTML 文件开始，逐步加入样式、按钮、卡片和部署路径。", tags: ["新手入门", "网页"], relatedResourceId: "", status: "待写", updatedAt: "2026-05-14" },
    { id: "tutorial-stable-ai-project-prompts", title: "AI 项目提示词怎么写更稳定", category: "AI 项目", difficulty: "实战", readingTime: "13 分钟", description: "把目标、约束、页面、数据和验收标准写成可执行任务。", contentPreview: "通过结构化提示词减少返工，让 AI 更稳定地执行项目开发任务。", tags: ["提示词", "Codex"], relatedResourceId: "resource-codex-prompt-template", status: "已发布", updatedAt: "2026-05-14" }
  ],
  cases: [
    { id: "case-poya-member-tool", title: "珀雅造型会员管理工具", category: "小商户工具", status: "已完成", targetUser: "理发店、美业门店、本地服务商户", problem: "会员开卡、扣次、到期提醒和消费记录分散。", features: ["会员档案", "扣次记录", "余额提醒", "门店数据概览"], description: "面向本地美业门店的轻量会员管理工具。", imageUrl: "", detailUrl: "#", tags: ["小商户工具", "会员管理"], updatedAt: "2026-05-14" },
    { id: "case-decoration-ai-lead-desk", title: "装修公司 AI 线索接待工作台", category: "线索接待", status: "制作中", targetUser: "装修公司、销售团队、客服团队", problem: "客户咨询难分层，跟进节奏不稳定。", features: ["AI 接待", "意向评分", "跟进提醒", "话术整理"], description: "帮助装修公司统一承接咨询线索。", imageUrl: "", detailUrl: "#", tags: ["线索接待", "AI 自动化", "进行中"], updatedAt: "2026-05-14" },
    { id: "case-he01-ai-resource-hub", title: "贺01 AI 实战资源库", category: "资源库", status: "制作中", targetUser: "AI 创作者、资源型账号、个人品牌", problem: "内容入口分散，案例和资源缺少统一承接。", features: ["工具导航", "资源下载", "教程预览", "案例展示"], description: "把 AI 工具、教程、资源和项目案例集中展示。", imageUrl: "", detailUrl: "#", tags: ["网站项目", "资源库", "进行中"], updatedAt: "2026-05-14" },
    { id: "case-wps-smart-dashboard", title: "小店 WPS 智能经营看板", category: "小商户工具", status: "规划中", targetUser: "小店老板、运营人员、轻量办公用户", problem: "订单、收入、库存和复购数据不清晰。", features: ["表格录入", "经营指标", "AI 总结", "周报生成"], description: "基于表格数据做经营指标看板。", imageUrl: "", detailUrl: "#", tags: ["小商户工具", "WPS AI"], updatedAt: "2026-05-14" },
    { id: "case-ai-install-service-page", title: "AI 工具安装调试服务页", category: "网站项目", status: "规划中", targetUser: "AI 服务商、技术陪跑、闲鱼服务卖家", problem: "服务说明不清楚，客户不知道能解决什么。", features: ["服务范围", "价格层级", "常见问题", "转化入口"], description: "展示 AI 工具安装调试服务的范围、流程和咨询入口。", imageUrl: "", detailUrl: "#", tags: ["网站项目", "服务页"], updatedAt: "2026-05-14" },
    { id: "case-construction-ai-daily-report", title: "施工/安装进度 AI 日报系统", category: "AI 自动化", status: "制作中", targetUser: "施工队、安装团队、项目管理人员", problem: "现场反馈碎片化，日报整理耗时。", features: ["进度录入", "图片记录", "AI 总结", "异常提醒"], description: "把现场进度、图片和问题记录整理成标准日报。", imageUrl: "", detailUrl: "#", tags: ["AI 自动化", "日报", "进行中"], updatedAt: "2026-05-14" }
  ],
  site: {
    siteName: "贺01 AI 实战资源库",
    slogan: "AI 实战、资源整合、项目落地",
    description: "这里整理我真实用过的 AI 工具、项目案例、教程资料和资源下载。不讲空概念，只做能跑通、能展示、能变现的 AI 实战内容。",
    contact: { wechat: "HE01-AI", xianyu: "贺01 AI", douyin: "贺·01", xiaohongshu: "贺·01", email: "hello@he01.ai" },
    privateCommunity: { title: "私域二维码", description: "后续替换真实二维码。你可以在这里承接微信、社群、资料包或服务咨询入口。", qrCodeUrl: "", placeholderText: "二维码占位" },
    services: ["AI工具安装调试", "ComfyUI报错排查", "OpenClaw接通本地工具", "Codex / Claude Code 项目陪跑", "AI小工具 / 网站 Demo 制作", "AI项目需求梳理"]
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");
const heroVisual = document.querySelector(".hero-visual");
const heroSection = document.querySelector(".hero-section");
const particleCanvas = document.querySelector(".hero-particles");
const parallaxItems = document.querySelectorAll(".hero-visual [data-depth]");
const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileMotionQuery = window.matchMedia("(max-width: 760px)");
let currentSiteData = FALLBACK_DATA.site;

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(value) {
  if (!value) return "待更新";
  const [year, month] = String(value).split("-");
  return year && month ? `${year}.${month} 更新` : value;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

async function fetchJson(path, fallback) {
  try {
    if (window.location.protocol === "file:") {
      throw new Error("file protocol fallback");
    }
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`无法读取 ${path}，已使用兜底数据。`, error);
    return fallback;
  }
}

function getNestedValue(source, path) {
  return path.split(".").reduce((result, key) => result?.[key], source);
}

function normalizeCategories(item, primaryKey) {
  return [item[primaryKey], item.category, item.type, item.status, ...(item.tags || [])]
    .filter(Boolean)
    .join(" ");
}

function statusClass(status) {
  if (status === "已完成" || status === "可用" || status === "已发布") return "done";
  if (status === "制作中" || status === "更新中" || status === "推荐") return "building";
  return "planned";
}

function emptyState(title, description) {
  return `<article class="empty-state"><h2>${escapeHTML(title)}</h2><p>${escapeHTML(description)}</p></article>`;
}

function toArray(value) {
  if (Array.isArray(value)) return value.filter((item) => item !== null && item !== undefined && String(item).trim() !== "");
  if (!value) return [];
  return String(value).split(/\n+/).map((item) => item.trim()).filter(Boolean);
}

function toIdArray(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (!value) return [];
  return String(value).split(/[，,\n]+/).map((item) => item.trim()).filter(Boolean);
}

function normalizeFaq(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => ({
      question: item?.question || "",
      answer: item?.answer || ""
    }))
    .filter((item) => item.question || item.answer);
}

function normalizeFrontItem(key, source) {
  const item = { ...source };
  if (key === "resources") {
    item.detailContent ||= `这份资源围绕「${item.title || "资源"}」整理，适合在做项目前先统一需求、检查准备材料，并把可复用的方法沉淀下来。你可以先按步骤通读，再结合自己的工具环境补充真实链接和文件。`;
    item.usageSteps = toArray(item.usageSteps);
    if (item.usageSteps.length === 0) item.usageSteps = ["先阅读资源简介和适合人群，确认是否匹配当前任务。", "按照资源里的清单或模板填写自己的项目情况。", "结合相关教程或案例复盘，补齐下载文件和真实交付材料。"];
    item.notes = toArray(item.notes);
    if (item.notes.length === 0) item.notes = ["下载链接为 # 时表示资源还在整理中。", "示例内容可以直接替换成你的真实资料说明。"];
    item.faq = normalizeFaq(item.faq);
    if (item.faq.length === 0) item.faq = [{ question: "这个资源适合新手吗？", answer: "适合。建议先从简介和使用步骤看起，再根据自己的场景做删改。" }];
    item.relatedResourceIds = toIdArray(item.relatedResourceIds || item.relatedResourceId);
  }
  if (key === "tutorials") {
    item.detailContent ||= `本教程会围绕「${item.title || "教程"}」拆解一个可执行流程：先明确目标，再准备资料，最后按步骤验证结果。\n\n当前正文是示例内容，后续可以在后台替换成完整教程。`;
    item.steps = Array.isArray(item.steps) ? item.steps : [];
    if (item.steps.length === 0) item.steps = [
      { title: "明确目标", description: "先写清楚这篇教程要帮助用户跑通什么结果。" },
      { title: "准备材料", description: "确认工具、资源、账号、文件路径和演示数据是否齐全。" },
      { title: "按步骤验证", description: "每完成一步就检查页面、输出或日志，避免最后集中排错。" }
    ];
    item.faq = normalizeFaq(item.faq);
    if (item.faq.length === 0) item.faq = [{ question: "照着做还是报错怎么办？", answer: "先检查教程里提到的环境、路径和版本，再去相关资源里找排查清单。" }];
    item.relatedResourceIds = toIdArray(item.relatedResourceIds || item.relatedResourceId);
    item.nextActions = toArray(item.nextActions);
    if (item.nextActions.length === 0) item.nextActions = ["打开相关资源，补齐模板或检查清单。", "把教程步骤套到自己的项目里跑一遍。"];
  }
  if (key === "cases") {
    item.background ||= `这个案例来自「${item.title || "项目"}」方向的实战整理，重点记录需求背景、实现过程和后续可升级空间。`;
    item.process = Array.isArray(item.process) ? item.process : [];
    if (item.process.length === 0) item.process = [
      { title: "需求梳理", description: "先明确目标用户、核心痛点和最小可用功能。" },
      { title: "原型搭建", description: "用静态页面或轻量工具跑通主要操作路径。" },
      { title: "演示复盘", description: "整理截图、结果和下一阶段升级方向。" }
    ];
    item.upgrades = toArray(item.upgrades);
    if (item.upgrades.length === 0) item.upgrades = ["补充真实业务数据。", "增加搜索、筛选或自动化提醒。"];
    item.relatedResourceIds = toIdArray(item.relatedResourceIds);
    item.result ||= "项目目前以演示和复盘为主，后续可继续接入真实业务数据。";
    item.lessons ||= "先把最小流程跑通，再决定是否升级数据库、登录和在线后台。";
  }
  return item;
}

function normalizeData(key, data) {
  if (["resources", "tutorials", "cases"].includes(key) && Array.isArray(data)) {
    return data.map((item) => normalizeFrontItem(key, item));
  }
  return data;
}

async function loadJSON(key) {
  try {
    if (window.location.protocol === "file:") {
      throw new Error("file protocol fallback");
    }
    const response = await fetch(DATA_PATHS[key], { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return { data: normalizeData(key, data), source: "json" };
  } catch (error) {
    console.warn(`无法读取 ${DATA_PATHS[key]}，已使用内置示例数据。`, error);
    return { data: normalizeData(key, FALLBACK_DATA[key]), source: "fallback" };
  }
}

function getSupabaseConfig() {
  const config = window.HE01_SUPABASE || {};
  const url = String(config.url || "").trim().replace(/\/+$/, "");
  const anonKey = String(config.anonKey || "").trim();
  const isPlaceholder = (value) => /^这里填|^YOUR_|^https:\/\/xxxx\.supabase\.co$/i.test(value);
  if (!url || !anonKey || isPlaceholder(url) || isPlaceholder(anonKey)) return null;
  return { url, anonKey };
}

async function fetchSupabaseTutorialRows(query) {
  const config = getSupabaseConfig();
  if (!config) return null;
  const response = await fetch(`${config.url}/rest/v1/tutorials?${query}`, {
    cache: "no-store",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`
    }
  });
  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(`Supabase tutorials HTTP ${response.status}${message ? `: ${message}` : ""}`);
  }
  return await response.json();
}

function normalizeSupabaseTutorial(row) {
  const tags = Array.isArray(row?.tags) ? row.tags : [];
  const summary = firstValue(row?.summary, row?.content);
  return normalizeFrontItem("tutorials", {
    id: firstValue(row?.id, row?.slug),
    slug: row?.slug || "",
    title: firstValue(row?.title, "未命名教程"),
    category: firstValue(row?.category, "教程"),
    difficulty: firstValue(row?.difficulty, "未标注"),
    readingTime: firstValue(row?.reading_time, "阅读时间待补充"),
    description: firstValue(row?.summary, "教程简介正在整理中。"),
    contentPreview: firstValue(row?.summary, "教程简介正在整理中。"),
    detailContent: firstValue(row?.content, summary, "正文内容正在整理中。"),
    coverUrl: row?.cover_url || "",
    tags,
    status: row?.status || "",
    updatedAt: firstValue(row?.updated_at, row?.created_at),
    createdAt: row?.created_at || "",
    source: "supabase"
  });
}

async function loadSupabaseTutorials() {
  const rows = await fetchSupabaseTutorialRows("select=*&status=eq.published&order=updated_at.desc");
  if (!rows) return null;
  return Array.isArray(rows) ? rows.map(normalizeSupabaseTutorial) : [];
}

async function loadSupabaseTutorialBySlug(slug) {
  const rows = await fetchSupabaseTutorialRows(`select=*&slug=eq.${encodeURIComponent(slug)}&status=eq.published&limit=1`);
  if (!rows || !Array.isArray(rows) || rows.length === 0) return null;
  return normalizeSupabaseTutorial(rows[0]);
}

function getUsableTutorials(data) {
  if (data?.__sources?.tutorials === "fallback") return [];
  return Array.isArray(data?.tutorials) ? data.tutorials : [];
}

function showDataNotice(container, source) {
  if (source !== "fallback") return;
  container.insertAdjacentHTML(
    "beforebegin",
    `<div class="data-notice">未能读取 data 文件，当前显示内置示例数据。使用本地服务器预览或部署后会自动读取 JSON。</div>`
  );
}

function createDataLink(label, url) {
  const safeUrl = escapeHTML(url || "#");
  return `<a class="card-link js-data-link" href="${safeUrl}" data-url="${safeUrl}"><span>${escapeHTML(label)}</span><i aria-hidden="true"></i></a>`;
}

function detailUrl(type, item, fallback) {
  if (type === "tutorial" && item?.slug) return `${type}-detail.html?slug=${encodeURIComponent(item.slug)}`;
  if (!item?.id) return fallback;
  return `${type}-detail.html?id=${encodeURIComponent(item.id)}`;
}

function renderTags(tags) {
  const safeTags = toArray(tags);
  if (safeTags.length === 0) return "";
  return `<div class="detail-tags">${safeTags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>`;
}

function openLinkOrModal(url, message = PLACEHOLDER_LINK_MESSAGE) {
  if (!url || url === "#") {
    openModal(message);
    return;
  }
  window.open(url, "_blank", "noopener");
}

function findItemById(list, id) {
  return (Array.isArray(list) ? list : []).find((item) => String(item.id) === String(id));
}

function renderFaq(faq) {
  const items = normalizeFaq(faq);
  if (items.length === 0) return `<p class="detail-muted">常见问题正在整理中。</p>`;
  return `<div class="faq-list">${items.map((item) => `
    <article class="faq-card">
      <h3>${escapeHTML(item.question || "常见问题")}</h3>
      <p>${escapeHTML(item.answer || "回答整理中。")}</p>
    </article>
  `).join("")}</div>`;
}

function renderSteps(steps) {
  const items = toArray(steps);
  if (items.length === 0) return `<p class="detail-muted">步骤正在整理中。</p>`;
  return `<ol class="step-list">${items.map((step, index) => {
    const title = typeof step === "object" ? step.title : step;
    const description = typeof step === "object" ? step.description : "";
    return `
      <li>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${escapeHTML(title || `步骤 ${index + 1}`)}</h3>
          ${description ? `<p>${escapeHTML(description)}</p>` : ""}
        </div>
      </li>
    `;
  }).join("")}</ol>`;
}

function renderTextBlock(value) {
  const text = String(value || "内容正在整理中。");
  return `<div class="rich-text">${escapeHTML(text).replace(/\n/g, "<br>")}</div>`;
}

function renderInlineMarkdown(value) {
  return escapeHTML(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function closeArticleList(state) {
  if (!state.listType) return "";
  const closing = state.listType === "ol" ? "</ol>" : "</ul>";
  state.listType = "";
  return closing;
}

function renderArticleMarkdown(value) {
  const lines = String(value || "内容正在整理中。").replace(/\r\n/g, "\n").split("\n");
  const state = { listType: "", inCode: false, codeLines: [], codeLang: "" };
  const output = [];
  let paragraph = [];
  let quote = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    output.push(`<p>${renderInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushQuote = () => {
    if (quote.length === 0) return;
    output.push(`<aside class="article-callout">${quote.map((line) => `<p>${renderInlineMarkdown(line)}</p>`).join("")}</aside>`);
    quote = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushParagraph();
      flushQuote();
      output.push(closeArticleList(state));
      if (state.inCode) {
        const lang = state.codeLang ? `<span>${escapeHTML(state.codeLang)}</span>` : "";
        output.push(`<figure class="article-code"><figcaption>${lang}</figcaption><pre><code>${escapeHTML(state.codeLines.join("\n"))}</code></pre></figure>`);
        state.inCode = false;
        state.codeLines = [];
        state.codeLang = "";
      } else {
        state.inCode = true;
        state.codeLang = trimmed.slice(3).trim();
      }
      return;
    }

    if (state.inCode) {
      state.codeLines.push(rawLine);
      return;
    }

    if (!trimmed) {
      flushParagraph();
      flushQuote();
      output.push(closeArticleList(state));
      return;
    }

    const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)(?:\s+"(.*?)")?$/);
    if (imageMatch) {
      flushParagraph();
      flushQuote();
      output.push(closeArticleList(state));
      const caption = imageMatch[3] || imageMatch[1];
      output.push(`<figure class="article-image"><img src="${escapeHTML(imageMatch[2])}" alt="${escapeHTML(imageMatch[1] || caption || "教程图片")}">${caption ? `<figcaption>${escapeHTML(caption)}</figcaption>` : ""}</figure>`);
      return;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      output.push(closeArticleList(state));
      quote.push(trimmed.replace(/^>\s?/, ""));
      return;
    }

    const heading = trimmed.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushQuote();
      output.push(closeArticleList(state));
      const level = heading[1].length === 2 ? "h2" : "h3";
      output.push(`<${level}>${renderInlineMarkdown(heading[2])}</${level}>`);
      return;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      flushQuote();
      const wanted = ordered ? "ol" : "ul";
      if (state.listType && state.listType !== wanted) output.push(closeArticleList(state));
      if (!state.listType) {
        state.listType = wanted;
        output.push(`<${wanted}>`);
      }
      output.push(`<li>${renderInlineMarkdown((ordered || unordered)[1])}</li>`);
      return;
    }

    output.push(closeArticleList(state));
    flushQuote();
    paragraph.push(trimmed);
  });

  if (state.inCode) {
    const lang = state.codeLang ? `<span>${escapeHTML(state.codeLang)}</span>` : "";
    output.push(`<figure class="article-code"><figcaption>${lang}</figcaption><pre><code>${escapeHTML(state.codeLines.join("\n"))}</code></pre></figure>`);
  }
  flushParagraph();
  flushQuote();
  output.push(closeArticleList(state));
  return `<div class="article-prose">${output.join("")}</div>`;
}

function renderListItems(items) {
  const list = toArray(items);
  if (list.length === 0) return `<p class="detail-muted">内容正在整理中。</p>`;
  return `<ul class="detail-list">${list.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function relatedResources(current, resources, limit = 3) {
  const ids = toIdArray(current?.relatedResourceIds || current?.relatedResourceId);
  const byId = ids.map((id) => findItemById(resources, id)).filter(Boolean);
  if (byId.length >= limit) return byId.slice(0, limit);
  const tags = new Set(toArray(current?.tags));
  const byTag = (resources || [])
    .filter((item) => item.id !== current?.id && !byId.some((related) => related.id === item.id))
    .filter((item) => toArray(item.tags).some((tag) => tags.has(tag)));
  return [...byId, ...byTag].slice(0, limit);
}

function renderRelatedResourceCards(items) {
  if (!items || items.length === 0) return `<p class="detail-muted">相关资源正在整理中。</p>`;
  return `<div class="related-grid">${items.map((item) => `
    <a class="related-card" href="${escapeHTML(detailUrl("resource", item, "resources.html"))}">
      <span class="tag">${escapeHTML(item.type || "资源")}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description || "查看资源详情。")}</p>
    </a>
  `).join("")}</div>`;
}

function renderArticleSteps(steps) {
  const items = toArray(steps);
  if (items.length === 0) return `<p class="detail-muted">步骤正在整理中。</p>`;
  return `<ol class="article-step-list">${items.map((step, index) => {
    const title = typeof step === "object" ? step.title : step;
    const description = typeof step === "object" ? step.description : "";
    return `
      <li>
        <span class="article-step-index">${index + 1}</span>
        <div>
          <h3>第 ${index + 1} 步：${escapeHTML(title || `步骤 ${index + 1}`)}</h3>
          ${description ? `<p>${escapeHTML(description)}</p>` : ""}
        </div>
      </li>
    `;
  }).join("")}</ol>`;
}

function renderArticleFaq(faq) {
  const items = normalizeFaq(faq);
  if (items.length === 0) return `<p class="detail-muted">常见问题正在整理中。</p>`;
  return `<div class="article-faq-list">${items.map((item) => `
    <article class="article-faq-item">
      <h3><span>Q</span>${escapeHTML(item.question || "常见问题")}</h3>
      <p><span>A</span>${escapeHTML(item.answer || "回答整理中。")}</p>
    </article>
  `).join("")}</div>`;
}

function renderArticleList(items) {
  const list = toArray(items);
  if (list.length === 0) return `<p class="detail-muted">内容正在整理中。</p>`;
  return `<ul class="article-bullet-list">${list.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function renderArticleRelatedResources(items, compact = false) {
  if (!items || items.length === 0) return `<p class="detail-muted">相关资源正在整理中。</p>`;
  return `<div class="${compact ? "article-sidebar-links" : "article-related-list"}">${items.map((item) => `
    <a class="article-resource-link" href="${escapeHTML(detailUrl("resource", item, "resources.html"))}">
      <span>${escapeHTML(item.type || "资源")}</span>
      <strong>${escapeHTML(item.title)}</strong>
      ${compact ? "" : `<small>${escapeHTML(item.description || "查看资源详情。")}</small>`}
    </a>
  `).join("")}</div>`;
}

function renderTutorialArticleSidebar(item, related) {
  const toc = [
    ["教程简介", "tutorial-intro"],
    ["正文内容", "tutorial-content"],
    ["联系咨询", "tutorial-contact"]
  ];
  return `
    <aside class="tutorial-article-sidebar" aria-label="教程辅助信息">
      <div class="tutorial-sidebar-panel">
        <section class="tutorial-sidebar-section">
          <p class="eyebrow">本文信息</p>
          ${renderDetailMeta([
            { label: "分类", value: item.category },
            { label: "难度", value: item.difficulty },
            { label: "阅读时间", value: item.readingTime },
            { label: "更新时间", value: formatDate(item.updatedAt) }
          ])}
        </section>
        <nav class="tutorial-toc" aria-label="本文目录">
          <p class="eyebrow">目录</p>
          ${toc.map(([label, anchor]) => `<a href="#${anchor}">${escapeHTML(label)}</a>`).join("")}
        </nav>
        <section id="tutorial-contact" class="tutorial-sidebar-section">
          <p class="eyebrow">咨询</p>
          <button class="btn btn-primary tutorial-help-button js-contact-modal" type="button"><span>需要陪跑 / 调试</span><i aria-hidden="true"></i></button>
        </section>
      </div>
    </aside>
  `;
}

function renderTools(container, items, source) {
  showDataNotice(container, source);
  if (!Array.isArray(items) || items.length === 0) {
    container.innerHTML = emptyState("暂无工具数据", "请在 admin.html 添加工具后导出 tools.json。");
    return;
  }
  container.innerHTML = items.map((item) => `
    <article class="tool-card" data-category="${escapeHTML(normalizeCategories(item, "category"))}">
      <div><h2>${escapeHTML(item.name)}</h2><span class="tag">${escapeHTML(item.category || item.status || "待分类")}</span></div>
      <p>${escapeHTML(item.description)}</p>
      <dl>
        <dt>适合人群</dt><dd>${escapeHTML(item.suitableFor)}</dd>
        <dt>使用建议</dt><dd>${escapeHTML(item.usageTip)}</dd>
      </dl>
      <div class="card-actions">
        ${createDataLink("官网", item.officialUrl)}
        ${createDataLink("教程", item.tutorialUrl)}
      </div>
    </article>
  `).join("");
}

function renderResources(container, items, source) {
  showDataNotice(container, source);
  if (!Array.isArray(items) || items.length === 0) {
    container.innerHTML = emptyState("暂无资源数据", "请在 admin.html 添加资源后导出 resources.json。");
    return;
  }
  container.innerHTML = items.map((item) => `
    <article class="resource-card" data-category="${escapeHTML(normalizeCategories(item, "type"))}">
      <div><span class="tag">${escapeHTML(item.type || item.status || "资源")}</span><time datetime="${escapeHTML(item.updatedAt)}">${escapeHTML(formatDate(item.updatedAt))}</time></div>
      <h2>${escapeHTML(item.title)}</h2>
      <p>${escapeHTML(item.description)}</p>
      <dl>
        <dt>格式/大小</dt><dd>${escapeHTML(item.format || "待补充")} · ${escapeHTML(item.size || "待补充")}</dd>
        <dt>适合谁用</dt><dd>${escapeHTML(item.targetUser)}</dd>
      </dl>
      <div class="card-actions">
        <a class="card-link" href="${escapeHTML(detailUrl("resource", item, "resources.html"))}"><span>查看详情</span><i aria-hidden="true"></i></a>
        ${createDataLink("下载资源", item.downloadUrl)}
        ${createDataLink("相关教程", item.tutorialUrl)}
      </div>
    </article>
  `).join("");
}

async function renderTutorials(container, items, source) {
  let tutorials = [];
  try {
    const supabaseItems = await loadSupabaseTutorials();
    if (Array.isArray(supabaseItems) && supabaseItems.length > 0) {
      tutorials = supabaseItems;
    } else if (Array.isArray(supabaseItems)) {
      console.warn("Supabase tutorials 返回空数组，尝试读取 data/tutorials.json。");
    }
  } catch (error) {
    console.error("Supabase tutorials 读取失败，尝试读取 data/tutorials.json。", error);
  }

  if (tutorials.length === 0 && source !== "fallback" && Array.isArray(items)) {
    tutorials = items;
  }

  if (tutorials.length === 0) {
    container.innerHTML = emptyState("教程正在整理中。", "请稍后再来查看新的实战教程。");
    return;
  }
  container.innerHTML = tutorials.map((item) => {
    const tags = Array.isArray(item.tags) ? item.tags : [];
    return `
    <article class="tutorial-card" data-category="${escapeHTML(normalizeCategories(item, "category"))}">
      <span class="tag">${escapeHTML(item.category || item.status || "教程")}</span>
      <h2>${escapeHTML(item.title || "未命名教程")}</h2>
      <p>${escapeHTML(item.description || item.contentPreview || "教程简介正在整理中。")}</p>
      <div class="info-row"><span>${escapeHTML(item.readingTime || "阅读时间待补充")}</span><span>${escapeHTML(item.difficulty || "未标注")}</span><time>${escapeHTML(formatDate(item.updatedAt))}</time></div>
      ${tags.length ? `<div class="card-tags">${tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>` : ""}
      <a class="card-link" href="${escapeHTML(detailUrl("tutorial", item, "tutorials.html"))}"><span>查看教程</span><i aria-hidden="true"></i></a>
    </article>
  `;
  }).join("");
}

function renderCases(container, items, source) {
  showDataNotice(container, source);
  if (!Array.isArray(items) || items.length === 0) {
    container.innerHTML = emptyState("暂无案例数据", "请在 admin.html 添加案例后导出 cases.json。");
    return;
  }
  container.innerHTML = items.map((item) => {
    const image = item.imageUrl
      ? `<img src="${escapeHTML(item.imageUrl)}" alt="${escapeHTML(item.title)}">`
      : `<span>${escapeHTML(item.title)}截图占位</span>`;
    return `
      <article class="case-card" data-category="${escapeHTML(normalizeCategories(item, "category"))}">
        <div class="case-shot">${image}</div>
        <div class="case-title-row"><h2>${escapeHTML(item.title)}</h2><span class="status ${statusClass(item.status)}">${escapeHTML(item.status || "规划中")}</span></div>
        <dl>
          <dt>适合人群</dt><dd>${escapeHTML(item.targetUser)}</dd>
          <dt>解决问题</dt><dd>${escapeHTML(item.problem)}</dd>
          <dt>核心功能</dt><dd>${escapeHTML((item.features || []).join("、"))}</dd>
        </dl>
        <a class="card-link" href="${escapeHTML(detailUrl("case", item, "cases.html"))}"><span>查看案例</span><i aria-hidden="true"></i></a>
      </article>
    `;
  }).join("");
}

function renderServices(container, site, source) {
  showDataNotice(container, source);
  const services = Array.isArray(site?.services) ? site.services : [];
  if (services.length === 0) {
    container.innerHTML = emptyState("暂无服务项目", "请在 admin.html 的站点设置里添加服务项目。");
    return;
  }
  container.innerHTML = services.map((service) => `
    <article class="mini-card"><h3>${escapeHTML(service)}</h3><p>可在管理后台继续补充服务说明、案例和交付范围。</p></article>
  `).join("");
}

function renderSiteFields(site) {
  document.querySelectorAll("[data-site-field]").forEach((element) => {
    const value = getNestedValue(site, element.dataset.siteField);
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-render="private-community-qr"]').forEach((container) => {
    const community = site.privateCommunity || {};
    const qr = community.qrCodeUrl
      ? `<img class="qr-image" src="${escapeHTML(community.qrCodeUrl)}" alt="${escapeHTML(community.title || "私域二维码")}">`
      : `<div class="qr-placeholder"><span></span><span></span><span></span><span></span></div>`;
    container.innerHTML = `${qr}<strong>${escapeHTML(community.placeholderText || community.title || "二维码占位")}</strong><small>${escapeHTML(community.qrCodeUrl ? "扫码或长按识别" : "后续替换真实二维码")}</small>`;
  });
}

function renderHomePreview(container, data) {
  const toolItems = (data.tools || []).slice(0, 2);
  const resourceItems = (data.resources || []).slice(0, 2);
  const tutorialItems = (data.tutorials || []).slice(0, 2);
  const caseItems = (data.cases || []).slice(0, 2);
  const columns = [
    { tag: "推荐工具", title: "AI 工具导航", link: "tools.html", items: toolItems.map((item) => ({ label: item.name, url: "tools.html" })) },
    { tag: "精选资源", title: "资源下载", link: "resources.html", items: resourceItems.map((item) => ({ label: item.title, url: detailUrl("resource", item, "resources.html") })) },
    { tag: "最新教程", title: "实战教程", link: "tutorials.html", items: tutorialItems.map((item) => ({ label: item.title, url: detailUrl("tutorial", item, "tutorials.html") })) },
    { tag: "作品案例", title: "项目展示", link: "cases.html", items: caseItems.map((item) => ({ label: item.title, url: detailUrl("case", item, "cases.html") })) }
  ];
  container.innerHTML = columns.map((column) => `
    <article class="preview-column">
      <span class="tag">${escapeHTML(column.tag)}</span>
      <h3>${escapeHTML(column.title)}</h3>
      <ul>${column.items.map((item) => `<li><a href="${escapeHTML(item.url)}">${escapeHTML(item.label)}</a></li>`).join("") || "<li>内容整理中</li>"}</ul>
      <a class="card-link" href="${escapeHTML(column.link)}"><span>查看更多</span><i aria-hidden="true"></i></a>
    </article>
  `).join("");
}

function renderNotFound(container, title, backUrl, backLabel) {
  container.innerHTML = `
    <section class="detail-shell reveal is-visible">
      <a class="text-action back-link" href="${escapeHTML(backUrl)}">${escapeHTML(backLabel)}</a>
      <article class="empty-state detail-empty">
        <p class="eyebrow">Not Found</p>
        <h2>${escapeHTML(title)}</h2>
        <p>可以返回列表页查看其他内容，或稍后等资料补齐。</p>
      </article>
    </section>
  `;
}

function renderDetailMeta(items) {
  return `<dl class="detail-meta">${items.filter((item) => item.value).map((item) => `
    <div><dt>${escapeHTML(item.label)}</dt><dd>${escapeHTML(item.value)}</dd></div>
  `).join("")}</dl>`;
}

function renderSidebar(title, items, tags, backUrl, contactLabel = "联系合作") {
  return `
    <aside class="detail-sidebar">
      <article class="detail-card sticky-card">
        <p class="eyebrow">本页信息</p>
        <h2>${escapeHTML(title)}</h2>
        ${renderDetailMeta(items)}
        ${renderTags(tags)}
        <div class="sidebar-actions">
          <a class="card-link" href="${escapeHTML(backUrl)}"><span>返回列表</span><i aria-hidden="true"></i></a>
          <a class="card-link js-contact-modal" href="contact.html"><span>${escapeHTML(contactLabel)}</span><i aria-hidden="true"></i></a>
        </div>
      </article>
    </aside>
  `;
}

function firstValue(...values) {
  return values.find((value) => value !== null && value !== undefined && String(value).trim() !== "") || "";
}

function getContactEntries(site = currentSiteData) {
  const contact = site?.contact || {};
  return [
    { key: "wechat", label: "微信号", value: firstValue(contact.wechat, contact.wechatId, site?.wechat, site?.wechatId) },
    { key: "xianyu", label: "闲鱼", value: firstValue(contact.xianyu, site?.xianyu) },
    { key: "douyin", label: "抖音", value: firstValue(contact.douyin, site?.douyin) },
    { key: "xiaohongshu", label: "小红书", value: firstValue(contact.xiaohongshu, contact.redbook, site?.xiaohongshu, site?.redbook) },
    { key: "email", label: "邮箱", value: firstValue(contact.email, site?.email) }
  ].filter((item) => item.value);
}

function getContactQr(site = currentSiteData) {
  const community = site?.privateCommunity || {};
  const contact = site?.contact || {};
  return firstValue(community.qrCodeUrl, community.qr, community.qrUrl, contact.qrCodeUrl, contact.qr, contact.qrUrl);
}

function renderBasicModalContent(message) {
  return `
    <button class="modal-close" type="button" aria-label="关闭弹窗" data-modal-close>×</button>
    <p class="eyebrow">Coming Soon</p>
    <h2 id="modal-title">功能占位提示</h2>
    <p id="modal-message">${escapeHTML(message || "该功能将在后续版本接入。")}</p>
    <button class="btn btn-primary modal-confirm" type="button" data-modal-close><span>知道了</span><i></i></button>
  `;
}

function renderContactModalContent(site = currentSiteData) {
  const qr = getContactQr(site);
  const entries = getContactEntries(site);
  const qrTitle = firstValue(site?.privateCommunity?.title, "微信二维码");
  const qrDescription = firstValue(site?.privateCommunity?.description, "扫码添加微信，获取 AI 工具资源、教程更新和项目陪跑支持。");
  return `
    <button class="modal-close" type="button" aria-label="关闭弹窗" data-modal-close>×</button>
    <div class="contact-modal-content">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 id="modal-title">需要陪跑 / 调试？</h2>
        <p id="modal-message">如果你在 AI 工具安装、ComfyUI 报错、OpenClaw 接通、Codex / Claude Code 项目制作中卡住，可以扫码添加我。</p>
      </div>
      <div class="contact-modal-grid">
        <figure class="contact-qr-card">
          ${qr ? `<img src="${escapeHTML(qr)}" alt="${escapeHTML(qrTitle)}">` : `<div class="contact-qr-placeholder">二维码待补充</div>`}
          <figcaption>
            <strong>${escapeHTML(qrTitle)}</strong>
            <span>${escapeHTML(qrDescription)}</span>
          </figcaption>
        </figure>
        <div class="contact-copy-list">
          ${entries.length ? entries.map((item) => `
            <div class="contact-copy-row">
              <div>
                <span>${escapeHTML(item.label)}</span>
                <strong>${escapeHTML(item.value)}</strong>
              </div>
              <button class="copy-button js-copy-contact" type="button" data-copy="${escapeHTML(item.value)}">复制</button>
            </div>
          `).join("") : `<p class="detail-muted">联系方式正在整理中。</p>`}
          <p class="contact-copy-status" aria-live="polite"></p>
        </div>
      </div>
      <div class="contact-modal-actions">
        <a class="btn btn-primary" href="contact.html"><span>前往联系合作页</span><i aria-hidden="true"></i></a>
        <button class="btn btn-secondary" type="button" data-modal-close><span>关闭</span><i aria-hidden="true"></i></button>
      </div>
    </div>
  `;
}

function renderResourceDetail(container, data) {
  const id = getQueryParam("id");
  const resources = data.resources || [];
  const item = findItemById(resources, id);
  if (!item) {
    renderNotFound(container, "资源不存在或正在整理中", "resources.html", "← 返回资源下载");
    return;
  }
  const related = relatedResources(item, resources, 3);
  container.innerHTML = `
    <section class="detail-shell reveal is-visible">
      <a class="text-action back-link" href="resources.html">← 返回资源下载</a>
      <div class="detail-layout">
        <article class="detail-main">
          <header class="detail-hero-card">
            <div class="detail-kicker"><span class="tag">${escapeHTML(item.type || "资源")}</span><span class="status ${statusClass(item.status)}">${escapeHTML(item.status || "待补充")}</span></div>
            <h1>${escapeHTML(item.title)}</h1>
            <p>${escapeHTML(item.description)}</p>
            ${renderDetailMeta([
              { label: "更新时间", value: formatDate(item.updatedAt) },
              { label: "适合谁用", value: item.targetUser },
              { label: "格式", value: item.format },
              { label: "文件大小", value: item.size }
            ])}
          </header>

          <section class="detail-card"><p class="eyebrow">Overview</p><h2>详细说明</h2>${renderTextBlock(item.detailContent)}</section>
          <section class="detail-card"><p class="eyebrow">Steps</p><h2>使用步骤</h2>${renderSteps(item.usageSteps)}</section>
          <section class="detail-card action-card">
            <div><p class="eyebrow">Download</p><h2>下载资源</h2><p>下载资料或先查看相关教程，按自己的场景补齐真实项目内容。</p></div>
            <div class="card-actions">
              <button class="btn btn-primary js-open-link" type="button" data-url="${escapeHTML(item.downloadUrl || "#")}" data-empty-message="该资源正在整理中，后续会更新真实下载链接。"><span>下载资源</span><i aria-hidden="true"></i></button>
              <button class="btn btn-secondary js-open-link" type="button" data-url="${escapeHTML(item.tutorialUrl || "#")}"><span>相关教程</span><i aria-hidden="true"></i></button>
            </div>
          </section>
          <section class="detail-card"><p class="eyebrow">Notes</p><h2>注意事项</h2>${renderListItems(item.notes)}</section>
          <section class="detail-card"><p class="eyebrow">FAQ</p><h2>常见问题</h2>${renderFaq(item.faq)}</section>
          <section class="detail-card"><p class="eyebrow">Related</p><h2>相关资源</h2>${renderRelatedResourceCards(related)}</section>
          <section class="contact-cta detail-cta"><div><p class="eyebrow">Collaboration</p><h2>需要帮你安装调试或跑通工具？</h2><p>可以把当前资源、工具环境和卡住的位置发给我，一起拆解下一步。</p></div><a class="btn btn-primary js-contact-modal" href="contact.html"><span>联系合作</span><i aria-hidden="true"></i></a></section>
        </article>
        ${renderSidebar(item.type || "资源", [
          { label: "类型", value: item.type },
          { label: "更新时间", value: formatDate(item.updatedAt) },
          { label: "状态", value: item.status },
          { label: "格式", value: item.format }
        ], item.tags, "resources.html")}
      </div>
    </section>
  `;
}

async function renderTutorialDetail(container, data) {
  const slug = getQueryParam("slug");
  const id = getQueryParam("id");
  const tutorials = getUsableTutorials(data);
  const resources = data.resources || [];
  let item = null;

  if (slug) {
    try {
      item = await loadSupabaseTutorialBySlug(slug);
    } catch (error) {
      console.error("Supabase tutorial detail 读取失败，尝试读取 data/tutorials.json。", error);
    }
    if (!item) {
      item = tutorials.find((tutorial) => String(tutorial.slug || tutorial.id) === String(slug));
    }
  } else if (id) {
    item = findItemById(tutorials, id);
  }

  if (!item) {
    renderNotFound(container, "教程正在整理中。", "tutorials.html", "← 返回实战教程");
    return;
  }
  document.title = `${item.title || "教程详情"} - 贺 · 01`;
  const related = relatedResources(item, resources, 3);
  const summary = item.description || item.contentPreview || "教程简介正在整理中。";
  const content = item.detailContent || item.content || summary;
  const tags = Array.isArray(item.tags) ? item.tags : [];
  container.innerHTML = `
    <section class="tutorial-article-shell reveal is-visible">
      <a class="text-action back-link" href="tutorials.html">← 返回实战教程</a>
      <div class="tutorial-article-layout">
        <article class="tutorial-article-main">
          <header class="tutorial-article-hero">
            <div class="tutorial-breadcrumb"><a href="tutorials.html">实战教程</a><span>/</span><span>${escapeHTML(item.category || "当前分类")}</span></div>
            <h1>${escapeHTML(item.title || "未命名教程")}</h1>
            <p class="tutorial-article-description">${escapeHTML(summary)}</p>
            ${renderDetailMeta([
              { label: "更新时间", value: formatDate(item.updatedAt) },
              { label: "阅读时间", value: item.readingTime },
              { label: "难度", value: item.difficulty },
              { label: "分类", value: item.category }
            ])}
            ${tags.length ? `<div class="detail-tags tutorial-detail-tags">${tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>` : ""}
          </header>

          <div class="tutorial-article-body">
            <section id="tutorial-intro" class="article-section">
              <p class="eyebrow">Tutorial</p>
              <h2>教程简介</h2>
              <p class="tutorial-article-summary">${escapeHTML(summary)}</p>
            </section>
            <section id="tutorial-content" class="article-section">
              <p class="eyebrow">Content</p>
              <h2>正文内容</h2>
              ${renderArticleMarkdown(content)}
            </section>
            ${item.source === "supabase" ? "" : `
              <section id="tutorial-steps" class="article-section">
                <p class="eyebrow">Steps</p>
                <h2>操作步骤</h2>
                ${renderArticleSteps(item.steps)}
              </section>
              <section id="tutorial-faq" class="article-section">
                <p class="eyebrow">FAQ</p>
                <h2>常见问题</h2>
                ${renderArticleFaq(item.faq)}
              </section>
              <section id="tutorial-resources" class="article-section">
                <p class="eyebrow">Resources</p>
                <h2>相关资源</h2>
                ${renderArticleRelatedResources(related)}
              </section>
              <section id="tutorial-next" class="article-section">
                <p class="eyebrow">Next</p>
                <h2>下一步建议</h2>
                ${renderArticleList(item.nextActions)}
              </section>
            `}
          </div>
        </article>
        ${renderTutorialArticleSidebar(item, related)}
      </div>
    </section>
  `;
}

function renderCaseDetail(container, data) {
  const id = getQueryParam("id");
  const cases = data.cases || [];
  const resources = data.resources || [];
  const item = findItemById(cases, id);
  if (!item) {
    renderNotFound(container, "案例不存在或正在整理中", "cases.html", "← 返回作品案例");
    return;
  }
  const hasImage = item.imageUrl && item.imageUrl !== "#";
  const related = relatedResources(item, resources, 3);
  container.innerHTML = `
    <section class="detail-shell reveal is-visible">
      <a class="text-action back-link" href="cases.html">← 返回作品案例</a>
      <div class="detail-layout">
        <article class="detail-main">
          <header class="detail-hero-card">
            <div class="detail-kicker"><span class="tag">${escapeHTML(item.category || "案例")}</span><span class="status ${statusClass(item.status)}">${escapeHTML(item.status || "规划中")}</span></div>
            <h1>${escapeHTML(item.title)}</h1>
            <p>${escapeHTML(item.description)}</p>
            ${renderDetailMeta([
              { label: "适合人群", value: item.targetUser },
              { label: "更新时间", value: formatDate(item.updatedAt) },
              { label: "分类", value: item.category },
              { label: "状态", value: item.status }
            ])}
          </header>

          <section class="detail-card"><p class="eyebrow">Background</p><h2>项目背景</h2>${renderTextBlock(item.background)}</section>
          <section class="detail-card"><p class="eyebrow">Problem</p><h2>解决的问题</h2>${renderTextBlock(item.problem)}</section>
          <section class="detail-card"><p class="eyebrow">Features</p><h2>核心功能</h2>${renderListItems(item.features)}</section>
          <section class="detail-card"><p class="eyebrow">Process</p><h2>实现过程</h2>${renderSteps(item.process)}</section>
          <section class="detail-card"><p class="eyebrow">Screenshot</p><h2>项目截图</h2><div class="detail-shot">${hasImage ? `<img src="${escapeHTML(item.imageUrl)}" alt="${escapeHTML(item.title)}">` : "<span>项目截图待补充</span>"}</div></section>
          <section class="detail-card"><p class="eyebrow">Upgrade</p><h2>后续升级方向</h2>${renderListItems(item.upgrades)}</section>
          <section class="detail-card"><p class="eyebrow">Result</p><h2>项目结果</h2>${renderTextBlock(item.result)}</section>
          <section class="detail-card"><p class="eyebrow">Lessons</p><h2>经验总结</h2>${renderTextBlock(item.lessons)}</section>
          <section class="detail-card"><p class="eyebrow">Resources</p><h2>相关资源</h2>${renderRelatedResourceCards(related)}</section>
          <section class="contact-cta detail-cta"><div><p class="eyebrow">Collaboration</p><h2>想做类似项目？</h2><p>可以把行业、目标用户和你想解决的问题发来，一起拆成可落地版本。</p></div><a class="btn btn-primary js-contact-modal" href="contact.html"><span>联系合作</span><i aria-hidden="true"></i></a></section>
        </article>
        ${renderSidebar(item.category || "案例", [
          { label: "分类", value: item.category },
          { label: "适合人群", value: item.targetUser },
          { label: "更新时间", value: formatDate(item.updatedAt) },
          { label: "状态", value: item.status }
        ], item.tags, "cases.html")}
      </div>
    </section>
  `;
}

async function initDataRender() {
  const renderTargets = document.querySelectorAll("[data-render]");
  if (renderTargets.length === 0) return;

  const requiredKeys = new Set();
  renderTargets.forEach((target) => {
    const type = target.dataset.render;
    if (["tools", "resources", "tutorials", "cases"].includes(type)) requiredKeys.add(type);
    if (["services", "private-community-qr"].includes(type)) requiredKeys.add("site");
    if (type === "home-preview") ["tools", "resources", "tutorials", "cases"].forEach((key) => requiredKeys.add(key));
    if (type === "resource-detail") requiredKeys.add("resources");
    if (type === "tutorial-detail") ["tutorials", "resources", "site"].forEach((key) => requiredKeys.add(key));
    if (type === "case-detail") ["cases", "resources"].forEach((key) => requiredKeys.add(key));
  });
  if (document.querySelector("[data-site-field]")) requiredKeys.add("site");

  const entries = await Promise.all([...requiredKeys].map(async (key) => [key, await loadJSON(key)]));
  const loaded = Object.fromEntries(entries);
  const data = Object.fromEntries(entries.map(([key, result]) => [key, result.data]));
  data.__sources = Object.fromEntries(entries.map(([key, result]) => [key, result.source]));
  if (data.site) currentSiteData = data.site;

  for (const target of renderTargets) {
    const type = target.dataset.render;
    if (type === "tools") renderTools(target, data.tools, loaded.tools.source);
    if (type === "resources") renderResources(target, data.resources, loaded.resources.source);
    if (type === "tutorials") await renderTutorials(target, data.tutorials, loaded.tutorials.source);
    if (type === "cases") renderCases(target, data.cases, loaded.cases.source);
    if (type === "services") renderServices(target, data.site, loaded.site.source);
    if (type === "home-preview") renderHomePreview(target, data);
    if (type === "resource-detail") renderResourceDetail(target, data);
    if (type === "tutorial-detail") await renderTutorialDetail(target, data);
    if (type === "case-detail") renderCaseDetail(target, data);
  }

  if (data.site) renderSiteFields(data.site);
}

function closeMenu() {
  menuToggle?.classList.remove("is-open");
  navPanel?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function openModal(message) {
  if (!modal || !modalDialog) return;
  closeMenu();
  modalDialog.innerHTML = renderBasicModalContent(message);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function openContactModal(site = currentSiteData) {
  if (!modal || !modalDialog) return false;
  closeMenu();
  modalDialog.innerHTML = renderContactModalContent(site);
  modal.classList.add("is-open", "is-contact-modal");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  return true;
}

window.openContactModal = openContactModal;

function fallbackToContactPage(trigger) {
  const url = trigger?.getAttribute?.("href") || "contact.html";
  window.location.href = url && url !== "#" ? url : "contact.html";
}

function tryOpenContactModal(trigger) {
  if (typeof window.openContactModal === "function" && window.openContactModal()) return;
  fallbackToContactPage(trigger);
}

const CONTACT_MODAL_LABELS = new Set([
  "联系合作",
  "需要陪跑/调试",
  "获取资源",
  "人工咨询",
  "想做类似项目",
  "添加微信",
  "扫码添加",
  "立即咨询",
  "联系我",
  "获取加入方式",
  "获取合作方式",
  "获取方式"
]);

function compactContactText(value) {
  return String(value || "").replace(/\s+/g, "").trim();
}

function isContactModalIntent(trigger) {
  if (!trigger || trigger.closest(".modal, .nav-links, .site-footer")) return false;
  const href = trigger.getAttribute("href") || "";
  const text = compactContactText(trigger.textContent);
  if (CONTACT_MODAL_LABELS.has(text)) return true;
  if (trigger.closest(".nav-actions") && trigger.matches(".btn") && href.endsWith("contact.html")) return true;
  if (trigger.closest(".contact-cta, .sidebar-actions") && href.endsWith("contact.html")) return true;
  return false;
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.classList.remove("is-contact-modal");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setCopyFeedback(button, success) {
  const status = button?.closest(".contact-copy-list")?.querySelector(".contact-copy-status");
  if (success) {
    const original = button.textContent;
    button.textContent = "已复制";
    button.disabled = true;
    if (status) status.textContent = "";
    window.setTimeout(() => {
      button.textContent = original || "复制";
      button.disabled = false;
    }, 2000);
    return;
  }
  if (status) status.textContent = "复制失败，请手动复制。";
}

async function copyTextToClipboard(value, button) {
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("copy command failed");
    }
    setCopyFeedback(button, true);
  } catch (error) {
    console.warn("复制失败", error);
    setCopyFeedback(button, false);
  }
}

function addRipple(target, event) {
  if (!target || reduceMotion) return;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  navPanel?.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  const navLink = event.target.closest(".nav-links a");
  if (navLink) closeMenu();

  const rippleTarget = event.target.closest(".btn, .card-link, .text-action, .search-button, .modal-close, .filter-button, .copy-button");
  if (rippleTarget) addRipple(rippleTarget, event);

  const contactTrigger = event.target.closest(".js-contact-modal, [data-contact-modal]");
  if (contactTrigger) {
    event.preventDefault();
    tryOpenContactModal(contactTrigger);
    return;
  }

  const contactIntentTrigger = event.target.closest("a, button");
  if (isContactModalIntent(contactIntentTrigger)) {
    event.preventDefault();
    tryOpenContactModal(contactIntentTrigger);
    return;
  }

  const copyButton = event.target.closest(".js-copy-contact");
  if (copyButton) {
    event.preventDefault();
    copyTextToClipboard(copyButton.dataset.copy || "", copyButton);
    return;
  }

  const modalTrigger = event.target.closest("[data-modal-message]");
  if (modalTrigger) {
    event.preventDefault();
    openModal(modalTrigger.dataset.modalMessage);
    return;
  }

  if (event.target.closest("[data-modal-close]")) {
    event.preventDefault();
    closeModal();
    return;
  }

  const placeholderAction = event.target.closest(".js-placeholder-action");
  if (placeholderAction) {
    event.preventDefault();
    openModal(PLACEHOLDER_LINK_MESSAGE);
    return;
  }

  const dataLink = event.target.closest(".js-data-link");
  if (dataLink) {
    const url = dataLink.dataset.url || dataLink.getAttribute("href");
    if (!url || url === "#") {
      event.preventDefault();
      openModal(PLACEHOLDER_LINK_MESSAGE);
    }
  }

  const openLinkButton = event.target.closest(".js-open-link");
  if (openLinkButton) {
    event.preventDefault();
    openLinkOrModal(openLinkButton.dataset.url, openLinkButton.dataset.emptyMessage || PLACEHOLDER_LINK_MESSAGE);
  }

  const filterButton = event.target.closest(".filter-button");
  if (filterButton) {
    const bar = filterButton.closest(".filter-bar");
    const filter = filterButton.dataset.filter || "all";
    const list = bar?.nextElementSibling;
    const cards = list?.querySelectorAll("[data-category]") || [];
    bar?.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("active", item === filterButton));
    cards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-filtered-out", !shouldShow);
    });
  }
});

if (!reduceMotion && heroVisual) {
  heroVisual.addEventListener("mousemove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 1);
      item.style.setProperty("--parallax-x", `${offsetX * depth * 14}px`);
      item.style.setProperty("--parallax-y", `${offsetY * depth * 10}px`);
    });
  });

  heroVisual.addEventListener("mouseleave", () => {
    parallaxItems.forEach((item) => {
      item.style.removeProperty("--parallax-x");
      item.style.removeProperty("--parallax-y");
    });
  });
}

function initHeroParticles() {
  if (!particleCanvas || !heroSection || reduceMotion || mobileMotionQuery.matches) return;

  const ctx = particleCanvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = 0;
  let isRunning = false;
  let pointer = { x: 0, y: 0, active: false };
  const particleCount = Math.min(44, Math.max(26, Math.round(window.innerWidth / 38)));

  function resize() {
    const rect = heroSection.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    particleCanvas.width = Math.round(width * dpr);
    particleCanvas.height = Math.round(height * dpr);
    particleCanvas.style.width = `${width}px`;
    particleCanvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticle(index) {
    const rightBias = index % 3 !== 0;
    return {
      x: rightBias ? width * (0.48 + Math.random() * 0.46) : width * Math.random(),
      y: height * (0.14 + Math.random() * 0.72),
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.12,
      radius: 0.8 + Math.random() * 1.8,
      alpha: 0.12 + Math.random() * 0.28,
      hue: Math.random() > 0.48 ? "105, 226, 255" : "150, 125, 255"
    };
  }

  function resetParticles() {
    particles = Array.from({ length: particleCount }, (_, index) => createParticle(index));
  }

  function draw() {
    isRunning = true;
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      if (pointer.active) {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 150 && distance > 0.01) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.004;
          particle.vy += (dy / distance) * force * 0.004;
        }
      }

      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.992;
      particle.vy *= 0.992;

      if (particle.x < width * 0.02 || particle.x > width * 0.98) particle.vx *= -1;
      if (particle.y < height * 0.08 || particle.y > height * 0.92) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particle.hue}, ${particle.alpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `rgba(${particle.hue}, 0.28)`;
      ctx.fill();
      ctx.shadowBlur = 0;

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 118) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(122, 174, 255, ${(1 - distance / 118) * 0.08})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    rafId = requestAnimationFrame(draw);
  }

  resize();
  resetParticles();
  draw();

  window.addEventListener("resize", () => {
    if (mobileMotionQuery.matches) {
      cancelAnimationFrame(rafId);
      isRunning = false;
      ctx.clearRect(0, 0, width, height);
      return;
    }
    resize();
    resetParticles();
    if (!isRunning) draw();
  });

  heroSection.addEventListener("mousemove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
  });

  heroSection.addEventListener("mouseleave", () => {
    pointer.active = false;
  });
}

initDataRender();
initHeroParticles();

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});
