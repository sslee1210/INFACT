export const heroContent = {
  eyebrow: "GMP Consulting · Conceptual Design · CSV Consulting",
  title: [
    "제약·바이오 GMP 프로젝트를 위한",
    "Conceptual Design, GMP Consulting,",
    "CSV Consulting",
  ],
  description:
    "기획, 설계, 적격성평가, CSV, 시스템 적합성 검토와 문서화 지원까지 규제 환경에 맞는 프로젝트 범위를 실무 중심으로 연결합니다.",
  trustPoints: [
    "제약·바이오 규제 환경 기반 프로젝트 지원",
    "설계부터 검증 문서화까지 연계 수행",
    "ERP / MES / LIMS / QMS / SCADA / PLC 범위 대응",
  ],
  primaryCta: { label: "문의하기", href: "/contact" },
  secondaryCta: { label: "서비스 보기", href: "/services" },
  image: "/images/home/hero.jpg",
};

export const companySnapshot = {
  title:
    "INFACT는 GMP 프로젝트의 설계와 검증을 한 흐름 안에서 보는 실무형 컨설팅 회사입니다.",
  body: [
    "INFACT는 제약·바이오 제조 환경에서 필요한 GMP Consulting, Conceptual Design, CSV Consulting을 프로젝트 목적에 맞게 구조적으로 정리하고 실행 단계까지 연결합니다.",
    "규제 요구사항을 문장으로만 해석하는 것이 아니라, 시설·시스템·운영 프로세스에 어떻게 적용되는지 실무 관점에서 검토합니다.",
  ],
  facts: [
    { label: "설립", value: "2016" },
    { label: "주요 분야", value: "GMP Consulting / Conceptual Design / CSV Consulting" },
    { label: "지원 산업", value: "Pharmaceutical / Biotech / Medical Device / Cosmetics" },
    { label: "수행 관점", value: "기획 · 설계 · 검증 · 문서화 연계 지원" },
  ],
  strengths: [
    {
      title: "프로젝트 초기 구조 정리",
      description:
        "초기 요구사항, 규제 기준, 시스템 범위를 먼저 정리해 설계와 검증이 충돌하지 않도록 구조를 설정합니다.",
    },
    {
      title: "현장 중심 문서화",
      description:
        "문서 작성을 위한 문서가 아니라 실제 운영과 검증에 연결되는 문서 체계를 기준으로 범위를 검토합니다.",
    },
    {
      title: "시스템과 운영 프로세스 동시 검토",
      description:
        "기능만이 아니라 권한, 기록, 변경관리 등 운영 요소까지 함께 보는 접근을 유지합니다.",
    },
  ],
};

export const serviceOverview = {
  intro:
    "서비스는 구분되어 있지만 실제 프로젝트에서는 설계, 검증, 운영 문서가 하나의 흐름으로 이어집니다.",
};

export const serviceHighlights = {
  gmp: {
    title: "GMP Consulting",
    purpose:
      "운영체계, 규정·절차, 적합성 검토, 품질 시스템 정비를 프로젝트 목적에 맞게 구조화합니다.",
    scope: ["Project Master Plan", "QMS / SOP", "Qualification Review", "Inspection Support"],
    target: "제조 및 운영체계, 점검 대응, 규정 정비 프로젝트",
    image: "/images/home/service-01.jpg",
  },
  design: {
    title: "Conceptual Design",
    purpose:
      "프로젝트 초기 단계에서 요구사항, 동선, 공간 구성, 유틸리티 조건을 종합적으로 검토해 설계 방향을 정리합니다.",
    scope: ["Layout & Zoning", "Personnel / Material Flow", "Utilities Planning", "Conceptual Report"],
    target: "신규 제조소, 리모델링, 증설, 초기 기획 단계 프로젝트",
    image: "/images/home/service-02.jpg",
  },
  csv: {
    title: "CSV Consulting",
    purpose:
      "규제 시스템 검토, 검증 범위 정의, 문서 패키지, 데이터 무결성 관점을 연결해 수행합니다.",
    scope: ["VMP / URS / FS / DS / RTM", "IQ / OQ / PQ / VSR", "Audit Trail Review", "Access Control"],
    target: "ERP / MES / WMS / LIMS / QMS / EDMS / SCADA / PLC / BMS",
    image: "/images/home/service-03.jpg",
  },
};

export const csvScope = {
  summary:
    "CSV는 시스템 분류, 검증 항목, 문서 패키지, 데이터 무결성 관점을 동시에 검토합니다. 운영 목적과 규제 요구사항이 만나는 지점을 기준으로 범위를 정리합니다.",
  groups: [
    {
      label: "대상 시스템",
      items: ["ERP", "MES", "WMS", "LIMS", "QMS", "EDMS", "SCADA", "PLC", "BMS"],
    },
    {
      label: "검증 항목",
      items: ["System Assessment", "Risk Review", "Requirement Traceability", "Configuration Review", "Periodic Review"],
    },
    {
      label: "문서 패키지",
      items: ["VMP", "URS", "FS", "DS", "RTM", "IQ", "OQ", "PQ", "VSR"],
    },
    {
      label: "데이터 무결성",
      items: ["Audit Trail", "Electronic Signature", "Access Control", "Backup & Restore", "Role-based Permissions"],
    },
  ],
};

export const projectExperience = {
  summary:
    "제약·바이오 제조소 개념설계, GMP 운영체계, 전산 시스템 검증 범위에서 다양한 프로젝트를 수행해왔습니다. 산업군과 시스템 범위를 기준으로 수행 성격을 먼저 볼 수 있도록 정리했습니다.",
  sectors: ["Pharmaceutical Manufacturing", "Biotech Production", "Medical Device", "Facility & Utility Systems"],
  projectTypes: [
    "Manufacturing Facility Conceptual Design",
    "Qualification / Validation Support",
    "ERP / MES / LIMS / QMS / EDMS CSV",
    "SCADA / PLC / Utility-related Review",
  ],
  recentFlow: [
    { year: "2025", note: "GMP, Conceptual Design, CSV 범위의 프로젝트 수행 지속" },
    { year: "2024", note: "EU GMP 관점의 해외 컨설팅과 종합 컨설팅 계약 수행" },
    { year: "2021–2023", note: "제조소 및 시스템 검증 운영체계 프로젝트 다수 수행" },
  ],
};

export const whyInfact = [
  {
    title: "설계와 검증의 연계",
    description: "개념설계, 적격성평가, CSV 문서가 분리되지 않도록 초기 구조를 먼저 정리합니다.",
  },
  {
    title: "현장 중심 문서화",
    description: "실제 운영과 검증에 연결되는 문서 체계를 기준으로 범위를 수립합니다.",
  },
  {
    title: "규제 요구사항 기반 접근",
    description: "GMP와 전산 시스템 검증 요구사항을 프로젝트 구조 정의의 기준으로 삼습니다.",
  },
  {
    title: "시스템과 운영 프로세스 동시 검토",
    description: "기능만이 아니라 권한, 기록, 변경관리 등 운영 요소까지 함께 봅니다.",
  },
];

export const contactInfo = {
  phone: "031-378-7220",
  fax: "031-378-7221",
  email: "infact@in-fact.co.kr",
  address: "경기도 오산시 내삼미로 80번길 36-11",
  website: "www.in-fact.co.kr",
  hours: ["평일 09:00 - 18:00", "방문 상담은 사전 일정 확인 후 진행합니다."],
  inquiry: [
    "GMP 프로젝트 기획 및 운영 체계 검토",
    "제조소 개념설계 범위 협의 및 초기 요구사항 정리",
    "CSV 대상 시스템 검증 전략 협의",
  ],
};

export const teamContacts = [
  {
    label: "개념설계",
    service: "Conceptual Design",
    manager: "개념설계 팀장",
    email: "infact@in-fact.co.kr",
    phone: "031-378-7220",
  },
  {
    label: "GMP",
    service: "GMP Consulting",
    manager: "GMP 팀장",
    email: "infact@in-fact.co.kr",
    phone: "031-378-7220",
  },
  {
    label: "CSV",
    service: "CSV Consulting",
    manager: "CSV 팀장",
    email: "infact@in-fact.co.kr",
    phone: "031-378-7220",
  },
];

export const historyTimeline = [
  { year: "2016", major: "회사 설립", details: ["INFACT 설립", "GMP 프로젝트 수행 기반 구축"] },
  {
    year: "2017",
    major: "CSV 사업부 창설 및 GMP 연계 강화",
    details: ["CSV 사업부 창설", "흥덕 IT밸리 확장 이전", "GMP Workshop 개최", "SAMSUNG BIOLOGICS Partner 체결", "CSV IT 사업 확대"],
  },
  {
    year: "2018",
    major: "사옥 이전 및 Clean Room 구축",
    details: ["용인 사옥 이전", "GMP Clean Room 구축"],
  },
  {
    year: "2019",
    major: "배양설비 구축 및 수행 범위 확장",
    details: ["GMP 배양설비 구축", "배양실 운영", "GMP 임직원 Workshop 개최", "Consulting 협력사 합병"],
  },
  {
    year: "2020",
    major: "사업 지원 계약 체결",
    details: ["코로나19 대책위 발족", "메디인프라 사업지원계약"],
  },
  { year: "2021", major: "오산 사옥 확장 이전", details: ["오산 사옥 확장 이전"] },
  {
    year: "2024",
    major: "해외 컨설팅 범위 확장",
    details: ["EU GMP 해외 컨설팅", "종합 컨설팅 사업 계약"],
  },
  {
    year: "2025",
    major: "통합 수행 조직 보강",
    details: ["개념설계팀, GMP팀, CSV팀, 영업팀 인원 보강"],
  },
];

export const companyPositioning = {
  title: "GMP 프로젝트를 설계, 검증, 문서화 관점에서 함께 보는 실무형 컨설팅 회사",
  paragraphs: [
    "INFACT는 제약·바이오 업계의 GMP 프로젝트를 기획 단계부터 Conceptual Design, 적격성평가, CSV, 문서화 지원까지 연결합니다.",
    "프로젝트 목표를 추상적으로 설명하기보다, 규제 환경 안에서 어떤 범위를 어떤 순서로 검토해야 하는지 먼저 구조화합니다.",
  ],
};

export const servicePages = {
  gmp: {
    title: "GMP Consulting",
    intro:
      "GMP Consulting은 제조소 운영체계, 기준서 및 절차, 점검 및 대응 범위를 프로젝트 일정 안에서 정리하는 서비스입니다.",
    overview:
      "제조 및 운영체계, 규정/절차, qualification 및 inspection 대응 범위를 프로젝트 상황에 맞게 조정합니다.",
    scope: [
      "Project Master Plan 및 일정/역할 구조 정리",
      "QMS / SOP / Training / CAPA / Change Control 검토",
      "Qualification / Validation 범위 검토",
      "Inspection 대응 자료 및 현장 준비 지원",
    ],
    workflow: ["범위 정의", "규정 및 기준 검토", "운영체계 정리", "문서화 및 대응 방안 정리"],
    applicable: ["KGMP / BGMP / VGMP 환경", "운영체계 구축", "점검 준비 및 기준서 정비"],
    deliverables: ["Project Plan", "Gap Review", "QMS / SOP 체계 제안", "점검 결과 및 대응 자료"],
  },
  design: {
    title: "Conceptual Design",
    intro:
      "Conceptual Design은 GMP 제조소를 위한 초기 구조 설계입니다. 공간 배치, 공정 흐름, 유틸리티, 구역 구분을 동시에 검토해 이후 상세 설계와 검증 방향을 잡습니다.",
    overview:
      "공정과 공간을 함께 보는 설계 관점이 중요합니다. 동선, 구획, 설비 배치, 유틸리티, 청정 조건, 운영 흐름을 초기 단계에서 정리합니다.",
    scope: [
      "Facility Size 및 Site Plan 검토",
      "GMP Layout, Zoning, Class Classification",
      "Personnel / Material / Waste Flow",
      "Process Utilities, Air Lock, Storage, Drain",
    ],
    workflow: ["요구사항 수집", "공정 및 동선 분석", "구획/레이아웃 방향 설정", "설계안 및 보고서 정리"],
    applicable: ["신규 제조소", "리모델링", "증설", "초기 기획 단계 시설 프로젝트"],
    deliverables: ["Layout Direction", "Zoning Plan", "Flow Review", "Utility Scope", "Conceptual Design Report"],
  },
  csv: {
    title: "CSV Consulting",
    intro:
      "CSV Consulting은 전산 시스템의 운영 목적과 규제 요구사항을 연결해 검증 범위와 문서 패키지를 정리하는 서비스입니다.",
    overview:
      "시스템 기능만이 아니라 데이터 무결성, 권한 구조, 기록 관리, 복구 체계까지 포함한 운영 적합성을 기준으로 범위를 정의합니다.",
    scope: [
      "ERP / MES / WMS / LIMS / QMS / EDMS / SCADA / PLC / BMS",
      "VMP / URS / FS / DS / RTM / IQ / OQ / PQ / VSR",
      "Audit Trail / e-Signature / Access Control / Backup & Restore",
      "Periodic Review 및 운영 적합성 검토",
    ],
    workflow: ["시스템 분류", "요구사항 및 리스크 검토", "문서 패키지 작성", "수행 및 결과 정리"],
    applicable: ["생산관리 시스템", "품질 시스템", "문서관리 시스템", "설비/유틸리티 연계 시스템"],
    deliverables: ["Validation Plan", "Document Package", "Traceability Matrix", "Test Protocol & Report"],
  },
};

export const experienceSections = {
  design: {
    title: "Conceptual Design Experience",
    scale: "국내 40여건 및 해외 프로젝트 수행",
    summary: "완제의약품, 원료의약품, 동물의약품, 바이오, 화장품 시설의 개념설계를 수행했습니다.",
    groups: [
      {
        label: "대표 기업군",
        value:
          "리독스바이오, 천혜당제약, 이화팜텍, 엔코스, 한국유니온제약, STPharm, CJ 제일제당, 한올바이오파마",
      },
      { label: "해외 수행", value: "우즈베키스탄 타슈켄트, 키르기스스탄 토크목 완제의약품 시설 개념설계" },
      { label: "주요 범위", value: "Facility Layout, Zoning, Flow, Utilities, Basic Design Review" },
    ],
  },
  gmp: {
    title: "GMP Consulting Experience",
    scale: "연도별 50~120여건 수행 경험",
    summary: "운영체계, 기준서, 검증 프로젝트 지원 범위를 포함한 GMP Consulting을 지속적으로 수행해왔습니다.",
    yearly: [
      "2025  동방에프티엘, 코미팜, 삼천당제약, 동광제약, 삼양홀딩스, LG화학 외 46여건",
      "2024  프레스티지바이오로직스, 한국팜비오, 대웅제약, 파마코스텍, 동광제약 외 50여건",
      "2023  경보제약, 피알피사이언스, 화일약품, 국전약품 외 50여건",
      "2022  바이넥스, 삼천당제약, 무진메디, 삼양홀딩스, 삼진제약 외 50여건",
      "2021  동빈무역, 자생병원, 한올바이오파마, 삼성바이오로직스, 성이바이오 외 120여건",
      "2020  대전테크노파크, 종근당바이오, 오송첨단의료산업진흥재단, 휴젤, 비씨월드제약 외 100여건",
      "2019  한미정밀화학, 에이프로젠, 한국콜마, 삼성바이오로직스 외 100여건",
      "2018  일동제약, DMBIO, 제일약품, 한국백신 외 80여건",
      "2017  한국유나이티드제약, 휴메딕스, LG생명과학, 동아제약 외 70여건",
      "2016  메디톡스, 종근당, 녹십자, 한미약품 외 50여건",
    ],
  },
  csv: {
    title: "CSV Consulting Experience",
    scale: "시스템별 CSV 수행 경험 축적",
    summary: "생산, 품질, 문서, 물류 시스템을 포함한 CSV 프로젝트를 지속적으로 수행해왔습니다.",
    groups: [
      { label: "대상 시스템", value: "ERP / MES / WMS / LIMS / QMS / EDMS / SCADA / PLC" },
      { label: "검증 범위", value: "Risk Assessment, Requirement Review, IQ / OQ / PQ, VSR" },
      { label: "대표 고객군", value: "동아ST, 녹십자, 휴온스, 프레스티지바이오로직스, LG화학, 삼천당제약" },
    ],
    yearly: [
      "2025  삼진제약, 한올바이오파마, 프레스티지바이오로직스, LG화학, 삼천당제약 외 27여건",
      "2024  엘앤씨바이오, SK바이오사이언스, 휴온스, 프레스티지바이오 외 60여건",
      "2023  녹십자, 한국백신, 대한약품공업, 휴온스바이오파마, 대화제약 외 50여건",
      "2022  휴온스, 환인제약, 이연제약, 태극제약, 셀트리온 외 50여건",
      "2021  동아ST, 영진약품, 프레스티지바이오로직스, 광동제약 외 60여건",
      "2020  동아ST, 녹십자, 존슨앤존슨, JW홀딩스, 종근당바이오 외 40여건",
    ],
  },
};
