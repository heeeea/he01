import SiteHeader from "@/components/SiteHeader";
import TesterCard from "@/components/TesterCard";
import { getAllTesters } from "@/lib/testers";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  LockKeyhole,
  PackageCheck,
  Sparkles,
  UsersRound,
  Wand2,
  Zap
} from "lucide-react";
import Link from "next/link";

const sampleTitles = [
  "小红书文案润色｜不写AI味，帮你改到能发",
  "本地商家活动文案优化｜当天出稿，可改两次",
  "闲鱼服务页优化｜标题详情主图文案一起改"
];

const fullPackageItems = [
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

export default function HomePage() {
  const testers = getAllTesters();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 pb-12 sm:px-6">
        <section className="relative overflow-hidden border-x border-b border-white/80 bg-[#f8fbff] px-5 py-10 shadow-card sm:px-8 lg:grid lg:grid-cols-[1fr_430px] lg:items-center lg:gap-10 lg:px-10 lg:py-14">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3 py-1 text-xs font-black text-brand shadow-card">
              <Sparkles size={15} />
              一键闲鱼接单上架图文包生成器
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-6xl">
              输入你会做的服务，30 秒生成一套闲鱼可发布图文包
            </h1>
            <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-600 sm:text-lg">
              自动生成主图、标题、详情页、报价套餐、客户回复、防白嫖话术。适合文案、设计、剪辑、PPT、网页、AI图片等接单服务。
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/xianyu-generator" className="primary-button sm:min-w-44">
                免费生成试试
                <ArrowRight size={18} />
              </Link>
              <Link href="#examples" className="secondary-button sm:min-w-44">
                查看成品示例
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-bold text-slate-600 sm:grid-cols-3">
              <span className="inline-flex items-center gap-2">
                <ImageIcon size={18} className="text-brand" />
                程序自动排版主图
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText size={18} className="text-coral" />
                文案直接复制发布
              </span>
              <span className="inline-flex items-center gap-2">
                <LockKeyhole size={18} className="text-gold" />
                先预览，不接支付
              </span>
            </div>
          </div>

          <div className="mt-8 border border-slate-200 bg-white p-4 shadow-soft lg:mt-0">
            <div className="aspect-[3/4] bg-[#07111f] p-5 text-white">
              <div className="flex h-full flex-col justify-between border border-white/10 bg-white/8 p-5">
                <div>
                  <p className="inline-flex bg-[#f6c35f] px-3 py-1 text-xs font-black text-ink">服务卖点主图</p>
                  <h2 className="mt-6 text-4xl font-black leading-tight">文案润色接单</h2>
                  <p className="mt-4 text-xl font-black leading-8 text-[#f6c35f]">不写 AI 味，改到像真人会买</p>
                </div>
                <div className="grid gap-3 text-base font-black leading-7">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f6c35f]" />
                    出稿快，可当天沟通
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f6c35f]" />
                    适合小红书和本地商家
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f6c35f]" />
                    标题、开头、详情一起优化
                  </span>
                </div>
                <p className="border-t border-white/10 pt-4 text-sm font-bold leading-6 text-white/70">
                  咨询前说明用途、风格和预算，方便快速报价。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="py-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
                <PackageCheck size={17} />
                成品示例区
              </p>
              <h2 className="mt-2 text-2xl font-black text-ink sm:text-3xl">生成后是一套能直接上架的内容资产</h2>
            </div>
            <Link href="/xianyu-generator" className="secondary-button sm:w-44">
              生成我的版本
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-slate-200 bg-white p-5 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center bg-brand/10 text-brand">
                  <ImageIcon size={20} />
                </span>
                <div>
                  <h3 className="font-black text-ink">主图预览</h3>
                  <p className="text-xs font-bold text-slate-500">大字、卖点、人群、交付边界自动排版</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["服务卖点", "适合人群", "交付内容", "服务流程"].map((item, index) => (
                  <div key={item} className="min-h-28 border border-slate-200 bg-[#f8fbff] p-4">
                    <p className="text-xs font-black text-brand">0{index + 1}</p>
                    <h4 className="mt-3 text-xl font-black text-ink">{item}</h4>
                    <p className="mt-2 text-xs font-bold leading-5 text-slate-500">手机端可读的大字图层</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center bg-coral/10 text-coral">
                  <FileText size={20} />
                </span>
                <div>
                  <h3 className="font-black text-ink">文案预览</h3>
                  <p className="text-xs font-bold text-slate-500">标题、详情页、报价、回复话术随选择变化</p>
                </div>
              </div>
              <div className="grid gap-3">
                {sampleTitles.map((title) => (
                  <div key={title} className="border border-slate-200 bg-[#fbfcff] p-4 text-sm font-black text-ink">
                    {title}
                  </div>
                ))}
                <p className="border-l-4 border-brand bg-brand/5 p-4 text-sm font-bold leading-7 text-slate-600">
                  适合想把服务上架到闲鱼，但不会写标题、不会排主图、不会设置报价边界的接单人。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="compare" className="grid gap-4 py-2 lg:grid-cols-2">
          <div className="border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
              <Zap size={17} />
              免费预览
            </p>
            <h2 className="mt-3 text-2xl font-black text-ink">先看能不能用</h2>
            <div className="mt-5 grid gap-3">
              {["主图预览 1 张", "闲鱼标题 3 条", "详情页开头 1 段"].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="border border-ink bg-ink p-5 text-white shadow-soft sm:p-6">
            <p className="inline-flex items-center gap-2 text-sm font-black text-[#f6c35f]">
              <LockKeyhole size={17} />
              完整包
            </p>
            <h2 className="mt-3 text-2xl font-black">把上架、引流和回复一次配齐</h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {fullPackageItems.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm font-bold leading-6 text-white/76">
                  <BadgeCheck size={16} className="mt-1 shrink-0 text-[#f6c35f]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="audience" className="py-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
            <UsersRound size={17} />
            适合人群区
          </p>
          <h2 className="mt-2 text-2xl font-black text-ink sm:text-3xl">不会包装服务，也能把页面做得像样</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["文案接单人", "润色、小红书笔记、详情页、朋友圈文案"],
              ["设计接单人", "海报、头像、店铺物料、品牌小图"],
              ["剪辑接单人", "短视频剪辑、口播切片、探店视频"],
              ["PPT 制作", "汇报、课程、路演、销售方案"],
              ["网页制作", "本地门店、作品集、个人工作室官网"],
              ["AI 图片服务", "头像、宠物图、商品场景图、内容配图"]
            ].map(([title, desc]) => (
              <div key={title} className="border border-slate-200 bg-white p-5 shadow-card">
                <h3 className="text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
            <ClipboardList size={17} />
            使用步骤区
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-4">
            {[
              ["01", "选择服务", "从文案、设计、剪辑、PPT、网页等服务里选一个。"],
              ["02", "选择客户", "系统按服务类型推荐目标客户，不用自己猜。"],
              ["03", "选择感觉", "低价引流、专业可信、高端可信等模板自动匹配。"],
              ["04", "生成图文包", "得到主图、标题、详情页、报价和回复话术。"]
            ].map(([no, title, desc]) => (
              <div key={no} className="border border-slate-200 bg-[#f8fbff] p-4">
                <p className="text-sm font-black text-brand">{no}</p>
                <h3 className="mt-3 text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-10">
          <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
            <HelpCircle size={17} />
            常见问题区
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {[
              ["会接入 AI 绘画吗？", "不会。主图用程序自动排版生成 PNG，重点是大字清楚、层级稳定、适合手机发布。"],
              ["不会写提示词能用吗？", "可以。页面只让你选服务、客户、感觉、优势和不想接的客户，不需要自己写提示词。"],
              ["可以直接发布到闲鱼吗？", "生成的标题、详情页和主图文案都按闲鱼服务上架场景写，可复制后按你的真实情况微调。"],
              ["现在可以支付解锁吗？", "暂时不接真实支付。完整包按钮会提示支付功能内测中，当前可免费体验预览版。"]
            ].map(([question, answer]) => (
              <div key={question} className="border border-slate-200 bg-white p-5 shadow-card">
                <h3 className="font-black text-ink">{question}</h3>
                <p className="mt-2 text-sm font-bold leading-7 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 overflow-hidden bg-ink p-5 text-white shadow-soft sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center bg-white/10 text-[#f6c35f]">
              <Wand2 size={26} />
            </span>
            <div>
              <h2 className="text-3xl font-black">现在生成一套闲鱼服务页图文包</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-white/68">先用免费预览版看效果，主图和文案都会根据你的选择变化。</p>
            </div>
          </div>
          <Link href="/xianyu-generator" className="primary-button mt-6 w-full lg:mt-0 lg:w-56">
            免费生成试试
            <Download size={18} />
          </Link>
        </section>

        <section id="tools" className="py-4">
          <div className="mb-6">
            <p className="inline-flex items-center gap-2 text-sm font-black text-brand">
              <Sparkles size={17} />
              辅助检测工具
            </p>
            <h2 className="mt-2 text-2xl font-black text-ink sm:text-3xl">原来的 8 个检测器已保留，可作为上架前的辅助检查</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testers.map((tester) => (
              <TesterCard key={tester.slug} tester={tester} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
