import type { LockedTemplate } from "@/lib/types";
import { LockKeyhole, Sparkles } from "lucide-react";

export default function UnlockBox({ template }: { template?: LockedTemplate }) {
  const lockedTemplate =
    template ?? {
      title: "完整接单边界模板",
      preview: ["项目确认清单、付款节点、修改边界、源文件规则...", "报价确认话术、加急费话术、终止合作话术..."],
      buttonText: "解锁完整版"
    };

  return (
    <section id="boundary-template" className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-card backdrop-blur">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
          <LockKeyhole size={19} />
        </span>
        <div>
          <h2 className="text-xl font-black text-ink">{lockedTemplate.title}</h2>
          <p className="mt-1 text-sm font-bold text-slate-600">把话说在前面，后面才不会靠忍。</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f7fbff] to-[#e9f2ff] p-4 blur-[2px] select-none">
        {lockedTemplate.preview.map((line) => (
          <p key={line} className="text-sm font-bold leading-6 text-slate-600">
            {line}
          </p>
        ))}
        <p className="h-3 w-10/12 rounded-full bg-slate-300" />
        <p className="h-3 w-8/12 rounded-full bg-slate-300" />
      </div>

      <button
        type="button"
        className="primary-button mt-5 w-full sm:w-auto"
      >
        <Sparkles size={16} />
        {lockedTemplate.buttonText}
      </button>
    </section>
  );
}
