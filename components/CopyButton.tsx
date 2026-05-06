"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
};

export default function CopyButton({
  text,
  label = "复制",
  copiedLabel = "已复制",
  className = ""
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`primary-button ${className}`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? copiedLabel : label}
    </button>
  );
}
