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
      "Conceptual Design은 질의서와 워크숍을 통해 제품 특성, 생산량, 제조공정과 시설 요구사항을 수집하고 GMP Layout과 운영 동선을 구체화하는 초기 설계 서비스입니다.",
    overview:
      "필요 작업실과 장비 수량, 구획, 청정등급, 인동선·물동선·폐기물 동선, 유틸리티와 보관 조건을 함께 검토해 상세설계의 기준이 되는 도면과 보고서를 정리합니다.",
    scope: [
      "개념설계 질의서 작성 및 기초 Data 수집",
      "제품 특성, 생산량, 제조공정 및 장비 요구사항 분석",
      "Facility Size, Site Plan 및 Room Design Requirement 검토",
      "GMP Layout, Equipment Plan, 청정등급 및 구역 구분",
      "인동선, 물동선, 폐기물 동선 및 장비 반입 동선 검토",
      "Air Lock, 차압, Process Utilities, 보관 및 Drain 조건 검토",
    ],
    workflow: [
      "질의서 작성 및 기초 Data 수집",
      "1차 Workshop과 제조공정 분석",
      "2~3차 Workshop과 Layout Development",
      "최종 Workshop 및 Feed-back 반영",
      "최종 도면과 개념설계 보고서 문서화",
    ],
    applicable: ["신규 제조소", "리모델링", "증설", "초기 기획 단계 시설 프로젝트"],
    deliverables: [
      "Facility Size 및 Site Plan",
      "GMP Layout, Equipment Plan, 청정등급 및 Zone Division",
      "Personnel / Materials / Waste Flow 및 Drain Plan",
      "차압, Air Lock, Process Utilities 및 원자재·제품 보관 계획",
      "Process Analysis Sheet",
      "Room Design Requirement Sheet 및 개념설계 최종 보고서",
    ],
  },
};
