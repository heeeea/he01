import type { RiskLevel } from "@/lib/types";

const toneClasses: Record<RiskLevel["tone"], string> = {
  stable: "bg-moss/10 text-moss ring-moss/20",
  excellent: "bg-ocean/10 text-ocean ring-ocean/20",
  warning: "bg-gold/15 text-[#8a5d13] ring-gold/30",
  danger: "bg-coral/15 text-[#b3382b] ring-coral/30"
};

export default function ScoreBadge({ level }: { level: RiskLevel }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black ring-1 ${toneClasses[level.tone]}`}>
      {level.label}
    </span>
  );
}
