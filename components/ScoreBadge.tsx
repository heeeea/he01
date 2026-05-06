import type { RiskLevel } from "@/lib/types";

const toneClasses: Record<RiskLevel["tone"], string> = {
  stable: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  excellent: "bg-blue-50 text-brand ring-blue-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  danger: "bg-orange-50 text-orange-700 ring-orange-200"
};

export default function ScoreBadge({ level }: { level: RiskLevel }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black ring-1 ${toneClasses[level.tone]}`}>
      {level.label}
    </span>
  );
}
