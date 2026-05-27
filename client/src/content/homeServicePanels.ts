export const SERVICE_PANELS = [
  {
    key: "design",
    tab: "개념설계",
    label: "CONCEPTUAL DESIGN",
    stage: "PROJECT SETUP",
    title: "Conceptual Design",
    description:
      "질의서 작성, 기초 데이터 수집, 공정 분석, 레이아웃 방향을 검토하여 후속 설계와 의사결정의 기준을 정리합니다.",
    phase: "기획 · 공정 검토 · 리모델링 초기",
    output: "Requirement · Layout · Zoning · Conceptual Report",
    tags: ["요구사항 정리", "공정 흐름 분석", "레이아웃 방향", "보고서 문서화"],
    link: "#/service-design",
    linkLabel: "개념설계 자세히 보기",
    image: "./images/home/service-01.jpg",
  },
  {
    key: "gmp",
    tab: "GMP Consulting",
    label: "GMP CONSULTING",
    stage: "QUALITY STANDARD",
    title: "GMP Consulting",
    description:
      "GMP 요구사항과 프로젝트 특성을 반영하여 운영 구조, 품질 기준, 문서화 범위를 실무적으로 정리합니다.",
    phase: "품질 시스템 구축 · 운영 기준 수립 · 실사 대응 준비",
    output: "GMP 기준 검토 · SOP 방향 · 품질시스템 검토 · 개선 의견",
    tags: ["GMP 기준 검토", "품질 시스템", "SOP", "실사 대응"],
    link: "#/service-gmp",
    linkLabel: "GMP 컨설팅 자세히 보기",
    image: "./images/home/service-02.jpg",
  },
  {
    key: "csv",
    tab: "CSV Consulting",
    label: "CSV CONSULTING",
    stage: "SYSTEM VALIDATION",
    title: "CSV Consulting",
    description:
      "ERP, MES, LIMS, QMS 등 GxP 시스템에 대해 리스크 기반 검증 문서화와 테스트 수행을 지원합니다.",
    phase: "시스템 도입 · 변경 관리 · 운영 전 검증",
    output: "URS · RA · RTM · IQ/OQ · Validation Report",
    tags: ["CSV", "Data Integrity", "Risk Assessment", "IQ·OQ"],
    link: "#/service-csv",
    linkLabel: "CSV 컨설팅 자세히 보기",
    image: "./images/home/service-03.jpg",
  },
] as const;

export type ServicePanel = (typeof SERVICE_PANELS)[number];
