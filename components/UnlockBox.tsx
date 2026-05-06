import type { LockedTemplate } from "@/lib/types";
import { LockKeyhole } from "lucide-react";

export default function UnlockBox({ template }: { template?: LockedTemplate }) {
  const lockedTemplate =
    template ?? {
      title: "完整接单边界模板",
      preview: ["项目确认清单、付款节点、修改边界、源文件规则...", "报价确认话术、加急费话术、终止合作话术..."],
      buttonText: "解锁完整版"
    };

  return (
    <section id="boundary-template" className="rounded-lg border border-black/10 bg-white/88 p-5 shadow-card backdrop-blur">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-white">
          <LockKeyhole size={19} />
        </span>
        <div>
          <h2 className="text-xl font-black text-ink">{lockedTemplate.title}</h2>
          <p className="mt-1 text-sm text-neutral-600">把话说在前面，后面才不会靠忍。</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 overflow-hidden rounded-lg border border-black/10 bg-neutral-50 p-4 blur-[2px] select-none">
        {lockedTemplate.preview.map((line) => (
          <p key={line} className="text-sm font-bold leading-6 text-neutral-600">
            {line}
          </p>
        ))}
        <p className="h-3 w-10/12 rounded-full bg-neutral-300" />
        <p className="h-3 w-8/12 rounded-full bg-neutral-300" />
      </div>

      <button
        type="button"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-card sm:w-auto"
      >
        {lockedTemplate.buttonText}
      </button>
    </section>
  );
}
