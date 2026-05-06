import type { TesterConfig } from "@/lib/types";
import {
  BadgeCheck,
  Calculator,
  Clapperboard,
  MousePointerClick,
  NotebookText,
  ShieldAlert,
  Sparkles,
  Thermometer
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  ShieldAlert,
  NotebookText,
  BadgeCheck,
  Calculator,
  MousePointerClick,
  Clapperboard,
  Sparkles,
  Thermometer
};

export default function TesterCard({ tester }: { tester: TesterConfig }) {
  const Icon = iconMap[tester.icon as keyof typeof iconMap] ?? ShieldAlert;

  return (
    <Link
      href={`/tester/${tester.slug}`}
      className="group flex min-h-40 flex-col justify-between rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
    >
      <div>
        <div className="mb-3 flex items-start gap-3">
          <span
            className="flex size-12 shrink-0 items-center justify-center rounded-full text-white shadow-card"
            style={{ background: `linear-gradient(135deg, ${tester.accent}, ${tester.accent}bb)` }}
          >
            <Icon size={22} />
          </span>
          <div className="min-w-0">
            <span
              className="inline-flex rounded-full px-2.5 py-1 text-[11px] font-black text-white"
              style={{ backgroundColor: tester.accent }}
            >
              {tester.category}
            </span>
            <h2 className="mt-2 text-lg font-black leading-tight text-ink">{tester.title}</h2>
          </div>
        </div>
        <p className="line-clamp-2 text-sm font-bold leading-6 text-slate-600">{tester.summary}</p>
      </div>
      <div className="mt-4 flex items-center gap-1 text-sm font-black text-brand">
        <span>开始检测</span>
        <span aria-hidden="true" className="transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
