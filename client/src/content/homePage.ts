export const homeHero = {
  logo: "./images/home/logo1.svg",
  title: "제약·바이오 전문 컨설팅 파트너",
  description:
    "제약·바이오 현장의 요구사항과 규제 기준을 바탕으로 개념설계, GMP, CSV 컨설팅을 제공합니다.",
  ctaLabel: "문의하기",
  ctaHref: "#/contact",
  image: "./images/home/hero-gmp-facility.webp",
};

export const homeAbout = {
  titleLines: [],
  descriptionLines: [
    [
      { text: "기획", emphasis: true },
      { text: "부터 " },
      { text: "승인", emphasis: true },
      { text: "까지," },
    ],
    [
      { text: "GMP 전 과정" },
      { text: "을 " },
      { text: "지원", emphasis: true },
      { text: "합니다." },
    ],
  ],
  ctaLabel: "회사 소개 보기",
  ctaHref: "#/company",
  metrics: [
    { value: 2016, label: "회사 설립" },
    { value: 1000, suffix: "+", label: "누적 프로젝트 수행", format: true },
    { value: 31, label: "전문인력" },
  ],
};

export const homeExperienceClients = [
  "DONG-A ST",
  "GC Biopharma",
  "Huons",
  "Prestige Biologics",
  "LG Chem",
  "Samchundang Pharm",
  "ST Pharm",
  "CJ CheilJedang",
  "Korea Vaccine",
  "DMBIO",
] as const;

export const homeExperienceCta = {
  titleLines: ["검증된 전문 컨설턴트가", "함께합니다"],
  description:
    "수많은 개념설계·GMP·CSV 프로젝트를 수행한 전문 인력이 축적된 실무 경험을 바탕으로 단계별 기준과 실행 방향을 제시합니다.",
  image: "./images/home/service-03.jpg",
  primary: { label: "수행실적 보기", href: "#/references" },
  secondary: { label: "문의하기", href: "#/contact" },
};
