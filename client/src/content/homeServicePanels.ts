export const SERVICE_PANELS = [
  {
    key: "design",
    tab: "개념설계",
    label: "CONCEPTUAL DESIGN",
    stage: "PROJECT SETUP",
    title: "Conceptual Design",
    description:
      "생산설비 Layout 구축을 위한 Design",
    phase: "사업 초기",
    output: "Requirement · Layout · Zoning · Conceptual Report",
    tags: ["요구사항 정리", "공정 흐름 분석", "레이아웃 방향", "보고서 문서화"],
    link: "#/service-design",
    linkLabel: "개념설계 자세히 보기",
    image: "./images/home/service-conceptual-v3.webp",
  },
  {
    key: "gmp",
    tab: "GMP Consulting",
    label: "GMP CONSULTING",
    stage: "QUALITY STANDARD",
    title: "GMP Consulting",
    description:
      "생산설비 / Utility의 운영 기준 수립과 실사 대응 준비",
    phase: "GMP 품질 시스템 구축",
    output: "GMP 기준 검토 · SOP 방향 · 품질시스템 검토 · 개선 의견",
    tags: ["GMP 기준 검토", "품질 시스템", "SOP", "실사 대응"],
    link: "#/service-gmp",
    linkLabel: "GMP 컨설팅 자세히 보기",
    image: "./images/home/service-gmp-v3.webp",
  },
  {
    key: "qualification",
    tab: "GMP Qualification",
    label: "GMP QUALIFICATION",
    stage: "EQUIPMENT QUALIFICATION",
    title: "GMP Qualification",
    description:
      "생산, 포장장비, DQ, IQ, OQ, PQ, PV",
    phase: "Clean Room / Utility",
    output: "DQ · IQ · OQ · PQ · Qualification Report",
    tags: ["시설·설비", "Utility", "DQ·IQ·OQ·PQ", "결과 문서화"],
    link: "#/service-gmp",
    linkLabel: "GMP 적격성평가 관련 서비스 보기",
    image: "./images/home/service-qualification-v1.png",
  },
  {
    key: "csv",
    tab: "Computerized System Validation",
    label: "COMPUTERIZED SYSTEM VALIDATION",
    stage: "SYSTEM VALIDATION",
    title: "Computerized System Validation",
    description:
      "GxP 시스템에 대한 리스크 기반 검증 문서화와 테스트를 수행합니다.",
    phase: "ERP, MES, LIMS, QMS 등",
    output: "URS · RA · RTM · IQ/OQ · Validation Report",
    tags: ["CSV", "Data Integrity", "Risk Assessment", "IQ·OQ"],
    link: "#/service-csv",
    linkLabel: "CSV 컨설팅 자세히 보기",
    image: "./images/home/service-csv-v3.webp",
  },
] as const;

export type ServicePanel = (typeof SERVICE_PANELS)[number];
