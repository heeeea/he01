import XianyuGenerator from "@/components/XianyuGenerator";
import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "一键生成你的闲鱼接单上架图文包",
  description: "选一选你的服务和客户，系统自动生成主图、标题、详情页、报价和回复话术。"
};

export default function XianyuGeneratorPage() {
  return (
    <>
      <SiteHeader />
      <XianyuGenerator />
    </>
  );
}
