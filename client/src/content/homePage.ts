export const homeHero = {
  title: "제약·바이오 전문 컨설팅 파트너",
  description:
    "제약·바이오 현장의 요구사항과 규제 기준을 바탕으로 개념설계, GMP, CSV 컨설팅을 제공합니다.",
  image: "./images/home/hero.jpg",
};

export const homeAbout = {
  titleLines: ["프로젝트 전 과정을", "실무 기준으로 정리합니다"],
  description:
    "제약·바이오 산업의 프로젝트를 단순 문서 작업으로 보지 않고, 실제 운영 환경과 규제 요구사항을 함께 고려하는 실무 중심의 프로젝트로 접근합니다.",
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
  titleLines: ["다양한 수행실적과", "현장 중심의 경험"],
  description:
    "개념설계, GMP, CSV 범위를 프로젝트 단계에 맞춰 검토하고 실제 수행 가능한 기준으로 연결합니다.",
  image: "./images/home/service-03.jpg",
  primary: { label: "수행실적 보기", href: "#/references" },
  secondary: { label: "문의하기", href: "#/contact" },
};
