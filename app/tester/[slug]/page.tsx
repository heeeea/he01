import DynamicForm from "@/components/DynamicForm";
import SiteHeader from "@/components/SiteHeader";
import { getTesterBySlug, getTesterSlugs } from "@/lib/testers";
import { ArrowLeft, ClipboardCheck, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getTesterSlugs().map((slug) => ({ slug }));
}

export default async function TesterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tester = getTesterBySlug(slug);

  if (!tester) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <Link href="/" className="mb-5 inline-flex items-center gap-2 text-sm font-black text-slate-600 transition hover:text-brand">
          <ArrowLeft size={16} />
          返回全部测试器
        </Link>

        <section className="blueprint-bg mb-6 overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-[#f5f9ff] to-[#dceaff] p-5 shadow-card sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black text-white"
                style={{ backgroundColor: tester.accent }}
              >
                <ClipboardCheck size={14} />
                {tester.category}
              </div>
              <h1 className="text-3xl font-black leading-tight tracking-tight text-ink sm:text-5xl">{tester.title}</h1>
              <p className="mt-3 text-lg font-black leading-8 text-brand">{tester.promise}</p>
              <p className="mt-4 max-w-2xl text-sm font-bold leading-7 text-slate-600">{tester.summary}</p>
            </div>

            <div className="rounded-2xl bg-ink p-5 text-white shadow-soft">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#67a2ff]" size={20} />
                  <span className="text-sm font-black">智能评估模型</span>
                </div>
                <div className="flex items-center gap-3">
                  <TimerReset className="text-orange-300" size={20} />
                  <span className="text-sm font-black">约 30 秒生成结果</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-300" size={20} />
                  <span className="text-sm font-black">本地保存，不接数据库</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DynamicForm tester={tester} />
      </main>
    </>
  );
}
