"use client";

import {
  BadgeCheck,
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileText,
  Image as ImageIcon,
  LockKeyhole,
  MessageCircle,
  PackageCheck,
  RefreshCcw,
  Sparkles,
  Wand2,
  X
} from "lucide-react";
import { useMemo, useState } from "react";

const serviceOptions = [
  "文案润色",
  "平面设计",
  "视频剪辑",
  "PPT制作",
  "网页制作",
  "AI图片",
  "店铺装修",
  "小红书笔记优化",
  "闲鱼服务页优化",
  "其他"
] as const;

const vibeOptions = ["低价好接单", "专业可信", "高端一点", "真实接地气", "年轻活泼", "不想显得廉价"] as const;

const advantageOptions = [
  "出稿快",
  "沟通耐心",
  "可多次修改",
  "懂平台内容",
  "不写AI味",
  "适合新手",
  "有案例",
  "价格透明",
  "可加急",
  "能长期合作"
] as const;

const avoidOptions = [
  "一直砍价",
  "要求无限修改",
  "先看效果再付款",
  "需求说不清",
  "很急但不加钱",
  "只问不买",
  "低价白嫖",
  "反复改方向"
] as const;

type Service = (typeof serviceOptions)[number];
type Vibe = (typeof vibeOptions)[number];
type TemplateName = "简洁专业" | "低价引流" | "高端可信";

type ImageCard = {
  eyebrow: string;
  title: string;
  headline: string;
  bullets: string[];
  note: string;
  footer: string;
};

type GeneratorInput = {
  service: Service;
  customers: string[];
  vibe: Vibe;
  advantages: string[];
  avoids: string[];
  template: TemplateName;
};

type GeneratedPack = {
  template: TemplateName;
  images: ImageCard[];
  titles: string[];
  heroWords: string[];
  detailIntro: string;
  detailFull: string;
  pricePlans: string[];
  askReplies: string[];
  bargainReplies: string[];
  antiFreebie: string[];
  xhsCopy: string[];
  momentsCopy: string[];
};

const customerMap: Record<Service, string[]> = {
  文案润色: ["小红书博主", "本地商家", "闲鱼卖家", "淘宝商家", "副业新手", "探店博主"],
  平面设计: ["小商家", "电商卖家", "小红书博主", "餐饮店", "美甲美睫店", "宠物店"],
  视频剪辑: ["短视频博主", "带货商家", "本地门店", "探店达人", "课程博主"],
  PPT制作: ["职场新人", "小公司老板", "培训讲师", "学生党", "销售人员"],
  网页制作: ["本地门店", "宠物店", "美甲店", "餐饮店", "个人工作室", "小商家"],
  AI图片: ["小红书博主", "电商卖家", "头像用户", "宠物主", "内容创作者"],
  店铺装修: ["闲鱼卖家", "淘宝商家", "小商家", "电商卖家", "本地门店"],
  小红书笔记优化: ["小红书博主", "探店博主", "品牌商家", "副业新手", "内容创作者"],
  闲鱼服务页优化: ["闲鱼卖家", "接单新手", "设计师", "文案接单人", "本地服务商"],
  其他: ["个人工作室", "副业新手", "本地商家", "内容创作者", "小商家"]
};

const serviceMeta: Record<Service, { result: string; delivery: string; scene: string; format: string; base: number }> = {
  文案润色: { result: "把原文改得更像真人、更容易被点开", delivery: "标题、开头、正文和发布话术", scene: "笔记、详情页、朋友圈和服务介绍", format: "Word/飞书文档/聊天框文字", base: 39 },
  平面设计: { result: "把需求做成清楚耐看的视觉物料", delivery: "主图、海报、封面和基础物料", scene: "活动宣传、门店上新和电商展示", format: "PNG/JPG，源文件另计", base: 69 },
  视频剪辑: { result: "把素材剪成节奏清楚、能发布的成片", delivery: "粗剪、字幕、封面建议和成片导出", scene: "口播、探店、带货和课程切片", format: "MP4 成片，可按需给工程文件", base: 99 },
  PPT制作: { result: "把内容整理成能汇报、能路演的页面", delivery: "结构梳理、页面美化和基础动画", scene: "工作汇报、课程课件、路演方案", format: "PPTX/PDF 双格式", base: 89 },
  网页制作: { result: "把服务或门店做成一个能展示的网页", delivery: "首页结构、文案、视觉和上线建议", scene: "门店展示、作品集和个人工作室", format: "网页链接，源码按套餐交付", base: 199 },
  AI图片: { result: "把想法整理成可用的图片成品", delivery: "图片方案、出图、精修建议和发布文案", scene: "头像、宠物图、商品场景和内容配图", format: "PNG/JPG，高清图另计", base: 49 },
  店铺装修: { result: "把店铺首页做得更清楚、更像在营业", delivery: "店招、分类图、主图和详情结构", scene: "闲鱼、淘宝和本地服务展示", format: "PNG/JPG，源文件另计", base: 129 },
  小红书笔记优化: { result: "把笔记改得更自然、更适合种草", delivery: "标题、开头、正文、标签和封面大字", scene: "探店、好物分享、服务种草和引流", format: "可复制发布的笔记文案", base: 49 },
  闲鱼服务页优化: { result: "把服务页改得更会成交、更少被白嫖", delivery: "标题、详情、报价、主图文案和回复话术", scene: "设计、文案、剪辑、网页等服务上架", format: "可复制发布的整套文字", base: 59 },
  其他: { result: "把服务包装成买家一眼能看懂的页面", delivery: "标题、卖点、详情、报价和回复话术", scene: "副业接单、本地服务和线上交付", format: "可复制发布的图文内容", base: 59 }
};

const templates: Record<TemplateName, { accent: string; background: string; panel: string; text: string; muted: string; border: string }> = {
  简洁专业: {
    accent: "#2563ff",
    background: "#f8fbff",
    panel: "#ffffff",
    text: "#07111f",
    muted: "#475569",
    border: "#dbe5f2"
  },
  低价引流: {
    accent: "#ef6f5e",
    background: "#fff7ed",
    panel: "#ffffff",
    text: "#24140f",
    muted: "#775247",
    border: "#ffd9c7"
  },
  高端可信: {
    accent: "#f6c35f",
    background: "#07111f",
    panel: "#101b2d",
    text: "#ffffff",
    muted: "#cbd5e1",
    border: "#2b3b55"
  }
};

const completeItems = [
  "闲鱼主图 4 张，可下载 PNG",
  "闲鱼标题 20 条",
  "主图大字 10 条",
  "完整详情页文案 1 套",
  "三档报价套餐",
  "客户问价回复 10 条",
  "客户砍价回复 5 条",
  "防白嫖话术 5 条",
  "小红书引流文案 3 条",
  "朋友圈宣传文案 3 条"
];

function templateForVibe(vibe: Vibe): TemplateName {
  if (vibe === "低价好接单") return "低价引流";
  if (vibe === "高端一点" || vibe === "专业可信" || vibe === "不想显得廉价") return "高端可信";
  return "简洁专业";
}

function toneLine(vibe: Vibe) {
  const toneMap: Record<Vibe, string> = {
    低价好接单: "先用清楚低门槛的服务说明降低咨询压力",
    专业可信: "用流程、交付和边界建立信任",
    高端一点: "让页面看起来更有质感，不像临时接单",
    真实接地气: "说人话，买家一看就知道你能帮什么",
    年轻活泼: "表达轻松好懂，适合内容平台客户",
    不想显得廉价: "价格有边界，服务不靠低价硬卷"
  };
  return toneMap[vibe];
}

function uniqueList(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

function buildPack(input: GeneratorInput): GeneratedPack {
  const meta = serviceMeta[input.service];
  const target = input.customers.length ? input.customers.join("、") : customerMap[input.service][0];
  const primaryCustomer = input.customers[0] ?? customerMap[input.service][0];
  const advantages = input.advantages.length ? input.advantages : ["出稿快", "沟通耐心", "价格透明"];
  const avoids = input.avoids.length ? input.avoids : ["需求说不清", "要求无限修改"];
  const topAdvantages = advantages.slice(0, 3);
  const tone = toneLine(input.vibe);
  const price = meta.base;

  const images: ImageCard[] = [
    {
      eyebrow: "服务卖点主图",
      title: `${input.service}接单服务`,
      headline: `${meta.result}，适合${primaryCustomer}`,
      bullets: [`${topAdvantages[0]}，沟通后快速进入制作`, `${topAdvantages[1] ?? "价格透明"}，下单前说清交付`, `${topAdvantages[2] ?? "可长期合作"}，减少来回试错`],
      note: `适合${target}，用于${meta.scene}。`,
      footer: "先确认需求、用途和预算，再给明确报价。"
    },
    {
      eyebrow: "适合人群图",
      title: `谁适合找我做${input.service}`,
      headline: `适合没时间自己整理，又想发布得像样的${primaryCustomer}`,
      bullets: [`需要${meta.delivery}`, `想让内容更清楚，不想自己反复排版`, `希望有人帮你把卖点和表达顺一遍`],
      note: `尤其适合${target}这类客户。`,
      footer: "你只要发需求，我来整理成能发布的版本。"
    },
    {
      eyebrow: "交付内容图",
      title: `${input.service}交付什么`,
      headline: `交付清楚，边界提前写明`,
      bullets: [`交付：${meta.delivery}`, `修改：包含 2 次小范围调整`, `形式：${meta.format}`],
      note: `可加急，可长期合作，复杂需求先评估。`,
      footer: "方向重做、临时加内容、要源文件，需单独报价。"
    },
    {
      eyebrow: "流程注意事项图",
      title: `下单流程和不接类型`,
      headline: `流程越清楚，合作越省心`,
      bullets: ["发需求和参考", "确认报价和排期", "付款后制作并按约定修改"],
      note: `不接：${avoids.slice(0, 4).join("、")}。`,
      footer: "先看完整效果再付款、无限修改、反复改方向，暂不接。"
    }
  ];

  const titles = uniqueList([
    `${input.service}接单｜适合${primaryCustomer}，可先看需求报价`,
    `${target}都能用的${input.service}，${topAdvantages[0]}不绕弯`,
    `${input.service}服务｜${tone}`,
    `${primaryCustomer}${input.service}｜标题详情主图文案一起梳理`,
    `不会包装服务？我帮你做${input.service}发布版`,
    `${input.service}优化｜不写空话，直接给能发的版本`,
    `${primaryCustomer}找${input.service}，先看需求再报价`,
    `${input.service}代做｜${topAdvantages[1] ?? "沟通耐心"}，交付边界清楚`,
    `${meta.scene}可用的${input.service}服务`,
    `${input.service}接单中｜适合新手商家和内容博主`,
    `${primaryCustomer}内容优化｜${meta.result}`,
    `${input.service}快速出稿｜可加急，可长期合作`,
    `${input.service}发布前优化｜减少AI味和模板感`,
    `${input.service}服务页制作｜报价清楚，不玩套路`,
    `帮你把${input.service}做成买家看得懂的版本`,
    `${input.service}一对一沟通｜需求清楚再开工`,
    `${primaryCustomer}上架/发布前内容整理`,
    `${input.service}小单可接｜适合预算有限但想做好的人`,
    `${input.service}完整交付｜流程、修改、价格都说清`,
    `${input.service}长期合作｜适合稳定更新内容的客户`
  ]).slice(0, 20);

  const heroWords = uniqueList([
    `${input.service}，改到能直接发`,
    `不写空话，只写买家看得懂的话`,
    `先看需求，再给清楚报价`,
    `${primaryCustomer}也能快速用起来`,
    `${topAdvantages[0]}，不拖不绕`,
    `交付内容和修改边界提前说清`,
    `适合${meta.scene}`,
    `价格透明，不靠低价乱接`,
    `省下自己排版和改文案的时间`,
    `把服务包装得更像样`
  ]).slice(0, 10);

  const detailIntro = `我这边提供${input.service}服务，适合${target}。如果你想把内容做得更清楚、更像真人表达，同时不想自己反复想标题、排版和交付说明，可以把需求发我，我会先判断适不适合做，再给你对应报价。`;

  const detailFull = [
    detailIntro,
    "",
    `【适合谁】${target}，以及正在做${meta.scene}的人。`,
    `【能帮你解决什么】${meta.result}；把零散需求整理成更适合发布、咨询和成交的版本。`,
    `【具体交付】${meta.delivery}。交付形式为${meta.format}。`,
    `【我的优势】${advantages.join("、")}。我会尽量把话说清楚，不用复杂术语，也不把简单需求包装成高价套路。`,
    "【服务流程】1. 你发需求和参考；2. 我确认范围、报价和时间；3. 付款后开始制作；4. 交付初稿；5. 按约定修改；6. 确认最终版。",
    "【修改说明】默认包含 2 次小范围修改，例如文字替换、局部调整、尺寸或格式微调。方向推翻、临时增加内容、重新做一版，属于新增需求，需要重新报价。",
    `【暂不接】${avoids.join("、")}。如果你需要先看完整效果再付款，或者要求无限修改，这类需求我这边暂时不接。`,
    "【咨询方式】直接发你的需求、用途、参考风格、预算区间和期望交付时间，我会先帮你判断怎么做更合适。"
  ].join("\n");

  const pricePlans = [
    `基础版 ￥${price}：适合小需求，包含${meta.delivery.split("、").slice(0, 2).join("、")}，1 次小修改。`,
    `标准版 ￥${price * 2}：适合正式发布，包含完整${input.service}交付，2 次小修改。`,
    `加急/完整包 ￥${price * 3} 起：适合急用或多平台发布，包含优先排期、完整交付和发布建议。`
  ];

  const askReplies = [
    `可以的，你先把${input.service}需求、用途和参考发我，我看完给你对应报价。`,
    `这个可以做，我需要先确认交付内容、时间和修改次数，避免后面理解不一致。`,
    `你是想用于${meta.scene}里的哪一种？用途不同，做法和报价会不一样。`,
    `基础需求一般从 ${price} 元起，具体要看内容量和是否加急。`,
    `如果只是简单优化，可以走基础版；如果要完整发布，我建议标准版。`,
    `我这边会先确认范围再开工，不会中途临时加价，但新增需求需要单独算。`,
    `你可以先发素材，我会告诉你哪些能做、哪些需要补充。`,
    `默认包含 2 次小范围修改，方向重做不算在免费修改里。`,
    `如果今天就要，可以加急，但需要先确认排期和加急费。`,
    `确认需求和报价后付款开始做，交付前会按约定给你确认。`
  ];

  const bargainReplies = [
    `可以理解你想控制预算。如果要降价，我这边会同步减少交付内容，不建议只降价不减范围。`,
    `这个价格包含沟通、制作和修改，不只是最终那一份文件，所以不能再低了。`,
    `如果预算有限，可以先做基础版，后续需要再补完整内容。`,
    `我可以帮你选更省钱的做法，但不能按完整服务做低价。`,
    `长期合作可以在第二单后按稳定需求给套餐价，第一单先按正常流程来。`
  ];

  const antiFreebie = [
    `完整方案属于交付内容，不能先免费做完给你看。可以先确认方向和流程。`,
    `如果需要先看效果，建议下一个小样试单；完整成品需要付款后开始。`,
    `我可以先判断需求是否适合做，但不会免费出完整文案、设计或方案。`,
    `修改次数会提前写清，超过范围需要按新增需求计费。`,
    `需求没有说清之前不建议开工，你先补用途、参考和交付时间。`
  ];

  const xhsCopy = [
    `最近在做${input.service}接单，适合${target}。不会包装服务也没关系，我可以帮你把内容整理成能发布、能咨询、边界清楚的版本。`,
    `很多人不是不会做服务，是不会把服务说清楚。${input.service}这类需求，我会先帮你拆用途、卖点、交付和修改边界。`,
    `如果你正在做${meta.scene}，但标题、详情或主图文案总觉得不够清楚，可以把需求发我看一下。`
  ];

  const momentsCopy = [
    `接${input.service}相关需求，适合${target}。先沟通需求，再确认报价和时间，交付边界会提前说清。`,
    `最近可排期：${input.service}。可做${meta.delivery}，有需要可以直接发用途和参考。`,
    `${input.service}小单可接，适合需要快速发布、不想自己反复改的人。`
  ];

  return {
    template: input.template,
    images,
    titles,
    heroWords,
    detailIntro,
    detailFull,
    pricePlans,
    askReplies,
    bargainReplies,
    antiFreebie,
    xhsCopy,
    momentsCopy
  };
}

export default function XianyuGenerator() {
  const [service, setService] = useState<Service>("文案润色");
  const [customers, setCustomers] = useState<string[]>(["小红书博主", "本地商家"]);
  const [vibe, setVibe] = useState<Vibe>("真实接地气");
  const [advantages, setAdvantages] = useState<string[]>(["不写AI味", "出稿快", "懂平台内容"]);
  const [avoids, setAvoids] = useState<string[]>(["先看效果再付款", "要求无限修改", "一直砍价"]);
  const [template, setTemplate] = useState<TemplateName>("简洁专业");
  const [pack, setPack] = useState<GeneratedPack | null>(null);
  const [copiedKey, setCopiedKey] = useState("");
  const [showPayModal, setShowPayModal] = useState(false);

  const recommendedCustomers = useMemo(() => customerMap[service], [service]);

  function chooseService(next: Service) {
    setService(next);
    setCustomers(customerMap[next].slice(0, 2));
    setPack(null);
  }

  function chooseVibe(next: Vibe) {
    setVibe(next);
    setTemplate(templateForVibe(next));
    setPack(null);
  }

  function toggleItem(value: string, list: string[], setter: (next: string[]) => void) {
    const next = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
    setter(next);
    setPack(null);
  }

  function recommendCustomers() {
    setCustomers(recommendedCustomers.slice(0, 2));
    setPack(null);
  }

  function generateCurrent() {
    setPack(buildPack({ service, customers, vibe, advantages, avoids, template }));
    window.setTimeout(() => document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  function autoFill() {
    const nextInput: GeneratorInput = {
      service: "文案润色",
      customers: ["小红书博主", "本地商家"],
      vibe: "真实接地气",
      advantages: ["不写AI味", "出稿快", "懂平台内容"],
      avoids: ["先看效果再付款", "要求无限修改", "一直砍价"],
      template: "简洁专业"
    };
    setService(nextInput.service);
    setCustomers(nextInput.customers);
    setVibe(nextInput.vibe);
    setAdvantages(nextInput.advantages);
    setAvoids(nextInput.avoids);
    setTemplate(nextInput.template);
    setPack(buildPack(nextInput));
    window.setTimeout(() => document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  async function copyText(key: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(""), 1500);
  }

  function downloadCard(card: ImageCard, index: number, packTemplate = template) {
    const canvas = document.createElement("canvas");
    const width = 1080;
    const height = 1440;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = templates[packTemplate];
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, width, height);
    drawRoundRect(ctx, 64, 64, 952, 1312, 30, colors.panel);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 4;
    strokeRoundRect(ctx, 64, 64, 952, 1312, 30);

    ctx.fillStyle = colors.accent;
    drawRoundRect(ctx, 104, 112, 330, 68, 34, colors.accent);
    ctx.fillStyle = packTemplate === "高端可信" ? "#07111f" : "#ffffff";
    ctx.font = '800 34px "Noto Sans SC", "Microsoft YaHei", sans-serif';
    ctx.fillText(card.eyebrow, 132, 157);

    let y = 280;
    ctx.fillStyle = colors.text;
    ctx.font = '900 76px "Noto Sans SC", "Microsoft YaHei", sans-serif';
    y = drawWrappedText(ctx, card.title, 104, y, 850, 88, 2);

    ctx.fillStyle = colors.accent;
    ctx.font = '800 48px "Noto Sans SC", "Microsoft YaHei", sans-serif';
    y = drawWrappedText(ctx, card.headline, 104, y + 32, 850, 62, 3);

    y += 60;
    card.bullets.slice(0, 4).forEach((bullet) => {
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(124, y - 16, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = '700 40px "Noto Sans SC", "Microsoft YaHei", sans-serif';
      y = drawWrappedText(ctx, bullet, 154, y, 770, 54, 2) + 18;
    });

    drawRoundRect(ctx, 104, 1062, 872, 164, 22, packTemplate === "高端可信" ? "#17243a" : "#f1f5fb");
    ctx.fillStyle = colors.text;
    ctx.font = '800 34px "Noto Sans SC", "Microsoft YaHei", sans-serif';
    drawWrappedText(ctx, card.note, 136, 1124, 810, 48, 2);

    ctx.fillStyle = colors.muted;
    ctx.font = '700 28px "Noto Sans SC", "Microsoft YaHei", sans-serif';
    drawWrappedText(ctx, card.footer, 104, 1292, 840, 40, 2);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `xianyu-${index + 1}-${card.eyebrow}.png`;
    link.click();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <section className="mb-6 border border-slate-200 bg-white p-5 shadow-card sm:p-8 lg:grid lg:grid-cols-[1fr_360px] lg:items-end lg:gap-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-black text-brand">
            <Sparkles size={15} />
            闲鱼服务上架图文包生成器
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            一键生成你的闲鱼接单上架图文包
          </h1>
          <p className="mt-4 max-w-3xl text-base font-bold leading-8 text-slate-600">
            选一选你的服务和客户，系统自动生成主图、标题、详情页、报价和回复话术。
          </p>
        </div>
        <div className="mt-6 border border-slate-200 bg-[#f8fbff] p-4 lg:mt-0">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center bg-brand text-white">
              <Wand2 size={22} />
            </span>
            <div>
              <p className="text-sm font-black text-ink">当前模板</p>
              <p className="text-sm font-bold text-slate-500">{template}</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-bold leading-6 text-slate-600">
            {toneLine(vibe)}
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid gap-4">
          <GeneratorStep number="1" title="选择你要卖的服务">
            <OptionGrid>
              {serviceOptions.map((item) => (
                <ChoiceButton key={item} active={service === item} onClick={() => chooseService(item)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGrid>
          </GeneratorStep>

          <GeneratorStep
            number="2"
            title="选择你想吸引的客户"
            action={
              <button type="button" onClick={recommendCustomers} className="secondary-button min-h-9 px-3 py-2 text-xs">
                我不确定，帮我推荐
              </button>
            }
          >
            <OptionGrid>
              {recommendedCustomers.map((item) => (
                <ChoiceButton key={item} active={customers.includes(item)} onClick={() => toggleItem(item, customers, setCustomers)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGrid>
          </GeneratorStep>

          <GeneratorStep number="3" title="选择你想呈现的感觉">
            <OptionGrid>
              {vibeOptions.map((item) => (
                <ChoiceButton key={item} active={vibe === item} onClick={() => chooseVibe(item)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGrid>
          </GeneratorStep>

          <GeneratorStep number="4" title="选择优势标签">
            <OptionGrid>
              {advantageOptions.map((item) => (
                <ChoiceButton key={item} active={advantages.includes(item)} onClick={() => toggleItem(item, advantages, setAdvantages)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGrid>
          </GeneratorStep>

          <GeneratorStep number="5" title="选择不想接的客户">
            <OptionGrid>
              {avoidOptions.map((item) => (
                <ChoiceButton key={item} active={avoids.includes(item)} onClick={() => toggleItem(item, avoids, setAvoids)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGrid>
          </GeneratorStep>

          <GeneratorStep number="6" title="视觉模板">
            <div className="grid gap-3 sm:grid-cols-3">
              {(Object.keys(templates) as TemplateName[]).map((name) => {
                const colors = templates[name];
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setTemplate(name);
                      setPack(null);
                    }}
                    className={`border p-4 text-left transition ${template === name ? "border-brand bg-brand/5 shadow-card" : "border-slate-200 bg-white hover:border-brand/40"}`}
                  >
                    <span className="mb-4 flex h-12 w-full items-center gap-2" style={{ backgroundColor: colors.background }}>
                      <span className="ml-3 size-4" style={{ backgroundColor: colors.accent }} />
                      <span className="h-2 w-16" style={{ backgroundColor: colors.border }} />
                    </span>
                    <span className="block text-sm font-black text-ink">{name}</span>
                  </button>
                );
              })}
            </div>
          </GeneratorStep>
        </div>

        <aside className="h-fit border border-slate-200 bg-white p-5 shadow-card lg:sticky lg:top-24">
          <p className="text-sm font-black text-brand">当前配置</p>
          <div className="mt-4 grid gap-3 text-sm font-bold leading-6 text-slate-600">
            <ConfigLine label="服务" value={service} />
            <ConfigLine label="客户" value={customers.length ? customers.join("、") : "未选择"} />
            <ConfigLine label="感觉" value={vibe} />
            <ConfigLine label="优势" value={advantages.length ? advantages.join("、") : "未选择"} />
            <ConfigLine label="不接" value={avoids.length ? avoids.join("、") : "未选择"} />
          </div>
          <button type="button" onClick={autoFill} className="secondary-button mt-5 w-full">
            <RefreshCcw size={17} />
            我不知道怎么填，帮我自动生成
          </button>
          <button type="button" onClick={generateCurrent} className="primary-button mt-3 w-full">
            <Wand2 size={18} />
            一键生成我的闲鱼上架图文包
          </button>
        </aside>
      </div>

      <section id="result" className="mt-8 scroll-mt-24">
        {pack ? (
          <ResultArea
            pack={pack}
            copiedKey={copiedKey}
            onCopy={copyText}
            onDownload={downloadCard}
            onPay={() => setShowPayModal(true)}
          />
        ) : (
          <div className="border border-dashed border-slate-300 bg-white/70 p-8 text-center shadow-card">
            <ImageIcon className="mx-auto text-brand" size={34} />
            <h2 className="mt-4 text-2xl font-black text-ink">选择完成后生成预览</h2>
            <p className="mt-2 text-sm font-bold text-slate-500">会先展示 1 张主图、3 条标题和 1 段详情页开头。</p>
          </div>
        )}
      </section>

      {showPayModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4">
          <div className="w-full max-w-md border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-brand">内测提示</p>
                <h2 className="mt-2 text-2xl font-black text-ink">支付功能内测中</h2>
              </div>
              <button type="button" onClick={() => setShowPayModal(false)} className="flex size-9 items-center justify-center border border-slate-200 text-slate-500">
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm font-bold leading-7 text-slate-600">
              支付功能内测中，下一版开放自动解锁。当前可免费体验预览版。
            </p>
            <button type="button" onClick={() => setShowPayModal(false)} className="primary-button mt-6 w-full">
              知道了
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function GeneratorStep({
  number,
  title,
  action,
  children
}: {
  number: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center bg-ink text-sm font-black text-white">{number}</span>
          <h2 className="text-lg font-black text-ink">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

function ChoiceButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-12 border px-4 py-3 text-left text-sm font-black transition ${
        active ? "border-brand bg-brand text-white shadow-blue" : "border-slate-200 bg-[#fbfcff] text-ink hover:border-brand/40 hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

function ConfigLine({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="mr-2 inline-flex min-w-10 font-black text-ink">{label}</span>
      {value}
    </p>
  );
}

function ResultArea({
  pack,
  copiedKey,
  onCopy,
  onDownload,
  onPay
}: {
  pack: GeneratedPack;
  copiedKey: string;
  onCopy: (key: string, text: string) => void;
  onDownload: (card: ImageCard, index: number, template: TemplateName) => void;
  onPay: () => void;
}) {
  const imageCopy = (card: ImageCard) => [card.eyebrow, card.title, card.headline, ...card.bullets, card.note, card.footer].join("\n");
  const fullText = [
    "【闲鱼标题】",
    ...pack.titles,
    "",
    "【主图大字】",
    ...pack.heroWords,
    "",
    "【完整详情页】",
    pack.detailFull,
    "",
    "【报价套餐】",
    ...pack.pricePlans,
    "",
    "【客户问价回复】",
    ...pack.askReplies,
    "",
    "【客户砍价回复】",
    ...pack.bargainReplies,
    "",
    "【防白嫖话术】",
    ...pack.antiFreebie,
    "",
    "【小红书引流文案】",
    ...pack.xhsCopy,
    "",
    "【朋友圈宣传文案】",
    ...pack.momentsCopy
  ].join("\n");

  return (
    <div className="grid gap-6">
      <section className="border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
              <Sparkles size={17} />
              免费预览区
            </p>
            <h2 className="mt-2 text-2xl font-black text-ink">先看 1 张主图、3 条标题、1 段详情页开头</h2>
          </div>
          <CopySmallButton
            active={copiedKey === "preview"}
            onClick={() => onCopy("preview", [pack.titles.slice(0, 3).join("\n"), pack.detailIntro].join("\n\n"))}
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <div>
            <ImagePreview card={pack.images[0]} templateName={pack.template} />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button type="button" onClick={() => onDownload(pack.images[0], 0, pack.template)} className="secondary-button min-h-10 px-3 py-2 text-xs">
                <Download size={15} />
                下载 PNG
              </button>
              <button type="button" onClick={() => onCopy("image-0", imageCopy(pack.images[0]))} className="secondary-button min-h-10 px-3 py-2 text-xs">
                {copiedKey === "image-0" ? <Check size={15} /> : <Copy size={15} />}
                复制该图文案
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-slate-200 bg-[#f8fbff] p-4">
              <h3 className="mb-3 text-sm font-black text-ink">闲鱼标题 3 条</h3>
              <div className="grid gap-2">
                {pack.titles.slice(0, 3).map((title) => (
                  <p key={title} className="border border-slate-200 bg-white p-3 text-sm font-black text-ink">
                    {title}
                  </p>
                ))}
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-4">
              <h3 className="mb-3 text-sm font-black text-ink">详情页开头</h3>
              <p className="text-sm font-bold leading-7 text-slate-600">{pack.detailIntro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="border border-ink bg-ink p-5 text-white shadow-soft sm:p-6">
          <p className="inline-flex items-center gap-2 text-sm font-black text-[#f6c35f]">
            <LockKeyhole size={17} />
            完整包锁定区
          </p>
          <h2 className="mt-3 text-2xl font-black">完整图文包包含</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {completeItems.map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm font-bold leading-6 text-white/76">
                <BadgeCheck size={16} className="mt-1 shrink-0 text-[#f6c35f]" />
                {item}
              </p>
            ))}
          </div>
          <button type="button" onClick={() => onCopy("full", fullText)} className="primary-button mt-6 w-full sm:w-56">
            {copiedKey === "full" ? <Check size={17} /> : <Copy size={17} />}
            复制完整预览文案
          </button>
        </div>

        <div className="grid gap-3">
          {[
            ["1.9", "下载 4 张主图"],
            ["3.9", "4 张主图 + 完整详情页"],
            ["6.9", "完整图文包 + 客户回复话术"]
          ].map(([price, label]) => (
            <button key={price} type="button" onClick={onPay} className="border border-slate-200 bg-white p-5 text-left shadow-card transition hover:border-brand/40">
              <p className="text-3xl font-black text-ink">￥{price}</p>
              <p className="mt-2 text-sm font-black text-slate-600">{label}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center bg-brand/10 text-brand">
            <ImageIcon size={20} />
          </span>
          <div>
            <h2 className="text-2xl font-black text-ink">4 张主图排版预览</h2>
            <p className="text-sm font-bold text-slate-500">尺寸按手机发布场景生成，下载为 PNG。</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pack.images.map((card, index) => (
            <div key={card.eyebrow}>
              <ImagePreview card={card} templateName={pack.template} compact />
              <div className="mt-3 grid gap-2">
                <button type="button" onClick={() => onDownload(card, index, pack.template)} className="secondary-button min-h-10 px-3 py-2 text-xs">
                  <Download size={15} />
                  下载 PNG
                </button>
                <button type="button" onClick={() => onCopy(`image-${index}`, imageCopy(card))} className="secondary-button min-h-10 px-3 py-2 text-xs">
                  {copiedKey === `image-${index}` ? <Check size={15} /> : <Copy size={15} />}
                  复制该图文案
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <TextBlock title="三档报价套餐" icon="package" items={pack.pricePlans} />
        <TextBlock title="客户问价回复 10 条" icon="message" items={pack.askReplies} />
        <TextBlock title="客户砍价回复 5 条" icon="message" items={pack.bargainReplies} />
        <TextBlock title="防白嫖话术 5 条" icon="lock" items={pack.antiFreebie} />
        <TextBlock title="小红书引流文案 3 条" icon="file" items={pack.xhsCopy} />
        <TextBlock title="朋友圈宣传文案 3 条" icon="file" items={pack.momentsCopy} />
      </section>
    </div>
  );
}

function TextBlock({ title, items, icon }: { title: string; items: string[]; icon: "package" | "message" | "lock" | "file" }) {
  const Icon = icon === "package" ? PackageCheck : icon === "message" ? MessageCircle : icon === "lock" ? LockKeyhole : FileText;
  return (
    <div className="border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center bg-brand/10 text-brand">
          <Icon size={20} />
        </span>
        <h3 className="font-black text-ink">{title}</h3>
      </div>
      <div className="grid gap-2">
        {items.map((item, index) => (
          <p key={`${title}-${index}`} className="border border-slate-200 bg-[#fbfcff] p-3 text-sm font-bold leading-6 text-slate-600">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function CopySmallButton({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="secondary-button min-h-10 px-3 py-2 text-xs">
      {active ? <Check size={15} /> : <Copy size={15} />}
      {active ? "已复制" : "复制预览"}
    </button>
  );
}

function ImagePreview({ card, templateName, compact = false }: { card: ImageCard; templateName: TemplateName; compact?: boolean }) {
  const colors = templates[templateName];
  return (
    <div className="aspect-[3/4] border p-3 shadow-card" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.text }}>
      <div className="flex h-full flex-col justify-between border p-4" style={{ backgroundColor: colors.panel, borderColor: colors.border }}>
        <div>
          <p
            className="inline-flex px-3 py-1 text-[11px] font-black"
            style={{ backgroundColor: colors.accent, color: templateName === "高端可信" ? "#07111f" : "#ffffff" }}
          >
            {card.eyebrow}
          </p>
          <h3 className={`${compact ? "mt-4 text-xl" : "mt-6 text-3xl"} font-black leading-tight`}>{card.title}</h3>
          <p className={`${compact ? "mt-3 text-sm" : "mt-4 text-lg"} font-black leading-7`} style={{ color: colors.accent }}>
            {card.headline}
          </p>
        </div>
        <div className={`${compact ? "gap-2 text-xs" : "gap-3 text-sm"} grid font-black leading-6`}>
          {card.bullets.map((bullet) => (
            <span key={bullet} className="inline-flex items-start gap-2">
              <CheckCircle2 size={compact ? 14 : 16} className="mt-1 shrink-0" style={{ color: colors.accent }} />
              {bullet}
            </span>
          ))}
        </div>
        <div>
          <p className={`${compact ? "text-xs" : "text-sm"} font-bold leading-6`} style={{ color: colors.muted }}>
            {card.note}
          </p>
          {!compact ? (
            <p className="mt-3 border-t pt-3 text-xs font-bold leading-5" style={{ borderColor: colors.border, color: colors.muted }}>
              {card.footer}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function drawRoundRect(CanvasCtx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, fill: string) {
  CanvasCtx.fillStyle = fill;
  CanvasCtx.beginPath();
  CanvasCtx.moveTo(x + radius, y);
  CanvasCtx.arcTo(x + width, y, x + width, y + height, radius);
  CanvasCtx.arcTo(x + width, y + height, x, y + height, radius);
  CanvasCtx.arcTo(x, y + height, x, y, radius);
  CanvasCtx.arcTo(x, y, x + width, y, radius);
  CanvasCtx.closePath();
  CanvasCtx.fill();
}

function strokeRoundRect(CanvasCtx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  CanvasCtx.beginPath();
  CanvasCtx.moveTo(x + radius, y);
  CanvasCtx.arcTo(x + width, y, x + width, y + height, radius);
  CanvasCtx.arcTo(x + width, y + height, x, y + height, radius);
  CanvasCtx.arcTo(x, y + height, x, y, radius);
  CanvasCtx.arcTo(x, y, x + width, y, radius);
  CanvasCtx.closePath();
  CanvasCtx.stroke();
}

function drawWrappedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines: number) {
  const chars = Array.from(text);
  const lines: string[] = [];
  let line = "";

  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
      if (lines.length === maxLines) break;
    } else {
      line = testLine;
    }
  }

  if (line && lines.length < maxLines) {
    lines.push(line);
  }

  lines.slice(0, maxLines).forEach((item, index) => {
    const shouldEllipsis = index === maxLines - 1 && lines.length === maxLines && chars.join("").length > lines.join("").length;
    ctx.fillText(shouldEllipsis ? `${item.slice(0, Math.max(0, item.length - 2))}...` : item, x, y + index * lineHeight);
  });

  return y + lines.length * lineHeight;
}
