import { ChevronDown, Wand2 } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "成品示例", href: "/#examples" },
  { label: "预览对比", href: "/#compare" },
  { label: "适合人群", href: "/#audience" },
  { label: "使用步骤", href: "/#steps" },
  { label: "辅助检测", href: "/#tools" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f] text-white shadow-[0_10px_30px_rgba(7,17,31,0.28)]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-white">
          <span className="flex size-9 shrink-0 items-center justify-center bg-gradient-to-br from-[#f6c35f] to-[#ef6f5e] text-sm font-black text-ink shadow-blue">
            鱼
          </span>
          <span className="truncate text-base font-black text-white sm:text-xl">闲鱼接单图文包生成器</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-black text-white lg:flex">
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} className="inline-flex items-center gap-1 text-white transition hover:text-[#f6c35f]">
              {item.label}
              {index === 0 ? <ChevronDown size={14} /> : null}
            </Link>
          ))}
        </nav>

        <Link href="/xianyu-generator" className="primary-button min-h-10 px-4 py-2 text-xs sm:text-sm">
          <Wand2 size={16} />
          免费生成试试
        </Link>
      </div>
    </header>
  );
}
