import DynamicForm from "@/components/DynamicForm";
import { getTesterBySlug, getTesterSlugs } from "@/lib/testers";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
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
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-6 sm:py-10">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-black text-neutral-600">
        <ArrowLeft size={16} />
        返回全部测试器
      </Link>

      <section className="mb-6 rounded-lg border border-black/10 bg-white/86 p-5 shadow-card backdrop-blur sm:p-7">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black text-white" style={{ backgroundColor: tester.accent }}>
          <ClipboardCheck size={14} />
          {tester.category}
        </div>
        <h1 className="text-3xl font-black leading-tight text-ink sm:text-5xl">{tester.title}</h1>
        <p className="mt-3 text-lg font-black leading-8 text-neutral-700">{tester.promise}</p>
        <p className="mt-4 text-sm leading-7 text-neutral-600">{tester.summary}</p>
      </section>

      <DynamicForm tester={tester} />
    </main>
  );
}
