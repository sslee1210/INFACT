export type SiteNavigationItem = {
  label: string;
  href: string;
  match: string[];
  children?: { label: string; href: string }[];
};

export const siteNavigation: SiteNavigationItem[] = [
  {
    label: "회사소개",
    href: "/company",
    match: ["/company", "/company/history", "/company/organization", "/history"],
    children: [
      { label: "인사말", href: "/company" },
      { label: "연혁", href: "/company/history" },
      { label: "조직도", href: "/company/organization" },
    ],
  },
  {
    label: "사업안내",
    href: "/service-design",
    match: ["/services", "/service-design", "/service-gmp", "/service-csv"],
    children: [
      { label: "개념설계", href: "/service-design" },
      { label: "GMP Consulting", href: "/service-gmp" },
      { label: "CSV Consulting", href: "/service-csv" },
    ],
  },
  {
    label: "수행실적",
    href: "/references-design",
    match: ["/references", "/references-design", "/references-gmp", "/references-csv"],
    children: [
      { label: "개념설계", href: "/references-design" },
      { label: "GMP", href: "/references-gmp" },
      { label: "CSV", href: "/references-csv" },
    ],
  },
];

export const footerNavigation = [
  { label: "회사 소개", href: "/company" },
  { label: "서비스", href: "/service-design" },
  { label: "수행 실적", href: "/references-design" },
  { label: "문의하기", href: "/contact" },
];
