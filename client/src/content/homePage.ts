export const homeHero = {
  title: "GMP 현장과 전산 검증을 연결하는 CSV·GxP 컨설팅",
  description:
    "인팩트는 제약·바이오 프로젝트의 개념설계, GMP 기준 검토, CSV 문서화와 시험 수행을 실제 운영 환경에 맞게 정리합니다.",
  image: "./images/home/hero.jpg",
  proofPoints: ["GMP Consulting", "Conceptual Design", "CSV Validation", "Data Integrity"],
};

export const homeAbout = {
  titleLines: ["규제 요구사항을", "실행 가능한 문서와 시험으로 연결합니다"],
  description:
    "제약·바이오 산업의 프로젝트를 단순 문서 작업으로 보지 않고, 요구사항·위험·시험근거·운영 절차가 서로 추적되는 구조로 정리합니다.",
  ctaLabel: "회사 소개 보기",
  ctaHref: "#/company",
  metrics: [
    { value: 2016, label: "회사 설립" },
    { value: 1000, suffix: "+", label: "누적 프로젝트 수행", format: true },
    { value: 31, label: "전문인력" },
  ],
  methodCards: [
    {
      title: "Requirement",
      description: "URS와 사용자 요구사항을 검토해 검증 범위와 제외 기준을 명확히 합니다.",
    },
    {
      title: "Risk & Traceability",
      description: "위험평가와 RTM을 통해 요구사항, 기능, 시험, 결과의 연결성을 관리합니다.",
    },
    {
      title: "Execution Evidence",
      description: "IQ/OQ/PQ 수행 결과와 증빙자료가 최종 보고서 결론을 뒷받침하도록 정리합니다.",
    },
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
  titleLines: ["프로젝트 경험을", "검증 가능한 결과물로 남깁니다"],
  description:
    "개념설계, GMP, CSV 범위를 프로젝트 단계에 맞춰 검토하고 실제 감사와 운영에 대응 가능한 문서 체계로 연결합니다.",
  image: "./images/home/service-03.jpg",
  primary: { label: "수행실적 보기", href: "#/references" },
  secondary: { label: "문의하기", href: "#/contact" },
};
