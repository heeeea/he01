"use client";

import { resultToText } from "@/lib/scoring";
import { getLatestRecord, getRecord } from "@/lib/storage";
import type { HistoryRecord, TesterConfig } from "@/lib/types";
import { ArrowLeft, FileText, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import CopyButton from "./CopyButton";
import ScoreBadge from "./ScoreBadge";
import UnlockBox from "./UnlockBox";

const scoreTone = {
  stable: "border-emerald-200",
  excellent: "border-blue-200",
  warning: "border-amber-200",
  danger: "border-orange-200"
};

const scoreAccent = {
  stable: "bg-emerald-50 text-emerald-600",
  excellent: "bg-blue-50 text-brand",
  warning: "bg-amber-50 text-amber-600",
  danger: "bg-orange-50 text-orange-600"
};

function ScriptBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-sm font-black text-ink">{title}</h3>
        <CopyButton text={text} label="复制话术" className="min-h-9 px-3 py-2 text-xs" />
      </div>
      <p className="whitespace-pre-line text-sm font-bold leading-7 text-slate-700">{text}</p>
    </div>
  );
}

export default function ResultCard({ tester }: { tester: TesterConfig }) {
  const searchParams = useSearchParams();
  const [record, setRecord] = useState<HistoryRecord | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");
    setRecord(id ? getRecord(id) : getLatestRecord(tester.slug));
  }, [searchParams, tester.slug]);

  const fullText = useMemo(() => {
    if (!record) {
      return "";
    }

    const scripts = tester.replyScripts
      ? [
          "",
          "推荐回复话术：",
          `温和确认版：${tester.replyScripts.gentle}`,
          `专业报价版：${tester.replyScripts.quote}`,
          `拒绝白嫖版：${tester.replyScripts.reject}`,
          "",
          `定金话术：${tester.replyScripts.deposit}`,
          `修改次数边界话术：${tester.replyScripts.revisionBoundary}`
        ].join("\n")
      : "";

    return `${resultToText(tester, record.result)}${scripts}`;
  }, [record, tester]);

  if (!record) {
    return (
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-black text-ink">还没有检测结果</h1>
        <p className="mt-3 font-bold text-slate-600">先输入客户原话，生成一份可截图的风险报告。</p>
        <Link href={`/tester/${tester.slug}`} className="primary-button mt-8">
          去检测
        </Link>
      </main>
    );
  }

  const { result } = record;
  const scripts = tester.replyScripts;

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="mb-5 flex items-center justify-between gap-3">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-slate-600 transition hover:text-brand">
          <ArrowLeft size={16} />
          返回工厂
        </Link>
        <Link href={`/tester/${tester.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-brand">
          <RotateCcw size={16} />
          重新测试
        </Link>
      </div>

      <section className={`screenshot-card blueprint-bg rounded-2xl border p-5 shadow-soft sm:p-7 ${scoreTone[result.level.tone]}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black text-slate-500">{tester.title}</p>
            <h1 className="mt-2 text-2xl font-black leading-tight text-ink sm:text-4xl">{result.shareSubtitle}</h1>
          </div>
          <ScoreBadge level={result.level} />
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-[240px_1fr] sm:items-end">
          <div>
            <p className="text-sm font-black text-slate-500">白嫖风险分</p>
            <div className={`mt-2 inline-flex items-end gap-2 rounded-2xl px-4 py-3 ${scoreAccent[result.level.tone]}`}>
              <span className="text-7xl font-black leading-none sm:text-8xl">{result.score}</span>
              <span className="pb-2 text-xl font-black">/100</span>
            </div>
          </div>
          <p className="text-base font-bold leading-8 text-slate-700 sm:text-lg">{result.level.description}</p>
        </div>

        <div className="mt-7 rounded-2xl bg-ink p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">最大问题</p>
          <p className="mt-2 text-lg font-black leading-8">{result.problems[0]}</p>
        </div>
      </section>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <CopyButton text={fullText} label="复制完整结果" className="flex-1" />
        {scripts ? <CopyButton text={`${scripts.gentle}\n\n${scripts.quote}\n\n${scripts.reject}`} label="复制话术" className="flex-1" /> : null}
        <a href="#boundary-template" className="secondary-button flex-1">
          <FileText size={17} />
          查看完整接单边界模板
        </a>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-card backdrop-blur">
          <h2 className="text-xl font-black text-ink">命中的风险点</h2>
          <div className="mt-4 grid gap-2">
            {(result.riskPoints.length ? result.riskPoints : ["暂未命中明显风险点"]).map((point) => (
              <div key={point} className="rounded-xl bg-[#f5f8ff] px-4 py-3 text-sm font-bold leading-6 text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-card backdrop-blur">
          <h2 className="text-xl font-black text-ink">接单建议</h2>
          <p className="mt-4 whitespace-pre-line text-sm font-bold leading-7 text-slate-700">{result.recommendation}</p>
        </section>
      </div>

      <section className="mt-5 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-card backdrop-blur">
        <h2 className="text-xl font-black text-ink">主要问题</h2>
        <div className="mt-4 grid gap-3">
          {result.problems.slice(0, 4).map((problem) => (
            <p key={problem} className="rounded-xl bg-[#f5f8ff] px-4 py-3 text-sm font-bold leading-6 text-slate-700">
              {problem}
            </p>
          ))}
        </div>
      </section>

      {scripts ? (
        <section className="mt-5 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-card backdrop-blur">
          <h2 className="text-xl font-black text-ink">推荐回复话术</h2>
          <div className="mt-4 grid gap-3">
            <ScriptBlock title="温和确认版" text={scripts.gentle} />
            <ScriptBlock title="专业报价版" text={scripts.quote} />
            <ScriptBlock title="拒绝白嫖版" text={scripts.reject} />
            <ScriptBlock title="定金话术" text={scripts.deposit} />
            <ScriptBlock title="修改次数边界话术" text={scripts.revisionBoundary} />
          </div>
        </section>
      ) : null}

      <div className="mt-5">
        <UnlockBox template={tester.lockedTemplate} />
      </div>
    </main>
  );
}
