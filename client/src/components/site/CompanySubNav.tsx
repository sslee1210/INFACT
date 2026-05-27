import { PageSubNav } from "@/components/site/PageSubNav";
import { useLocation } from "wouter";

export function CompanySubNav() {
  const [location] = useLocation();
  const current = location === "/company/history" ? "연혁" : location === "/company/organization" ? "조직도" : "인사말";

  return (
    <PageSubNav
      breadcrumb={["홈", "회사 소개", current]}
      items={[
        { label: "인사말", href: "/company" },
        { label: "연혁", href: "/company/history" },
        { label: "조직도", href: "/company/organization" },
      ]}
    />
  );
}
