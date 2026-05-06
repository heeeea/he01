import TesterCard from "@/components/TesterCard";
import { getAllTesters } from "@/lib/testers";
import { Factory, Sparkles } from "lucide-react";

export default function HomePage() {
  const testers = getAllTesters();

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 py-6 sm:py-10">
      <section className="grid gap-6 py-8 sm:py-12 lg:grid-cols-[1fr_360px] lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-black text-ink shadow-card backdrop-blur">
            <Factory size={16} />
            AI 商业测试器工厂
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-ink sm:text-6xl">
            把商业判断，做成可传播的测试器。
          </h1>
          <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-neutral-700 sm:text-lg">
            选一个场景，输入真实内容，快速生成分数、风险点、建议和适合截图分享的结果卡片。
          </p>
        </div>
        <div className="rounded-lg border border-black/10 bg-ink p-5 text-white shadow-soft">
          <Sparkles className="mb-4 text-coral" size={26} />
          <p className="text-3xl font-black">{testers.length} 个</p>
          <p className="mt-2 text-sm font-bold leading-6 text-white/70">
            已内置测试器。后续新增工具只需要补 JSON 配置，页面会自动生成。
          </p>
        </div>
      </section>

      <section className="grid gap-4 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        {testers.map((tester) => (
          <TesterCard key={tester.slug} tester={tester} />
        ))}
      </section>
    </main>
  );
}
