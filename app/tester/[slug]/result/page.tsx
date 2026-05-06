import ResultCard from "@/components/ResultCard";
import SiteHeader from "@/components/SiteHeader";
import { getTesterBySlug, getTesterSlugs } from "@/lib/testers";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return getTesterSlugs().map((slug) => ({ slug }));
}

export default async function TesterResultPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tester = getTesterBySlug(slug);

  if (!tester) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <Suspense
        fallback={
          <main className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-5 text-center">
            <p className="text-sm font-black text-slate-600">正在生成风险报告...</p>
          </main>
        }
      >
        <ResultCard tester={tester} />
      </Suspense>
    </>
  );
}
