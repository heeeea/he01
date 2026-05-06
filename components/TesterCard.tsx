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
      className="group flex min-h-56 flex-col justify-between rounded-lg border border-black/10 bg-white/82 p-5 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-black/20 hover:shadow-soft"
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full px-3 py-1 text-xs font-black text-white" style={{ backgroundColor: tester.accent }}>
            {tester.category}
          </span>
          <span className="flex size-11 items-center justify-center rounded-full bg-ink text-white transition group-hover:scale-105">
            <Icon size={21} />
          </span>
        </div>
        <h2 className="text-xl font-black leading-tight text-ink">{tester.title}</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{tester.summary}</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 text-sm font-black text-ink">
        <span>开始检测</span>
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
