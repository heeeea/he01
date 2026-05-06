import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="mb-3 text-sm font-semibold text-coral">404</p>
      <h1 className="text-3xl font-black text-ink">这个测试器还没上架</h1>
      <p className="mt-3 text-base text-neutral-600">
        先回到工厂首页，选一个已经配置好的商业测试器开测。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-card"
      >
        返回首页
      </Link>
    </main>
  );
}
