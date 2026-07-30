export type ConsultingServiceKey = "design" | "gmp" | "csv";

type ValueItem = {
  title: string;
  description: string;
};

type ApplicationItem = {
  label: string;
  value: string;
};

type ScopeItem = {
  title: string;
  description: string;
};

type ExecutionStep = {
  title: string;
  description: string;
  outputTitle: string;
  outputDetail: string;
};

export type ConsultingServiceData = {
  key: ConsultingServiceKey;
  pageTitle: string;
  serviceName: string;
  sectionName: string;
  pageDescription: string;
  pageImage: string;
  coreValue: {
    description: string;
    items: ValueItem[];
  };
  application: {
    description: string;
    image: string;
    imageAlt: string;
    items: ApplicationItem[];
  };
  scope: {
    description: string;
    items: ScopeItem[];
  };
  execution: {
    label?: string;
    title?: string;
    description: string;
    steps: ExecutionStep[];
  };
  differentiators: {
    description: string;
    items: ValueItem[];
  };
  contact: {
    titleLines: string[];
    descriptionLines: string[];
  };
};

export const consultingServicePages: Record<
  ConsultingServiceKey,
  ConsultingServiceData
> = {
  design: {
    key: "design",
    pageTitle: "개념설계",
    serviceName: "Conceptual Design",
    sectionName: "개념설계 컨설팅",
    pageDescription:
      "공정, 레이아웃, 유틸리티와 규제 요건을 하나의 실행 가능한 전략으로 통합합니다.",
    pageImage: "./images/service/conceptual-design-hero.webp",
    coreValue: {
      description:
        "제품과 생산계획을 시설 규모, GMP Layout, 동선과 유틸리티 조건으로 전환해 상세설계를 시작할 수 있는 기준을 만듭니다.",
      items: [
        {
          title: "생산계획을 공간 기준으로 전환",
          description:
            "제형, Batch Size, 생산량과 제조공정을 분석해 필요한 작업실, 장비 수량과 시설 규모를 산정합니다.",
        },
        {
          title: "상세설계 전 핵심 쟁점 합의",
          description:
            "공정 인접성, 청정구역, 인동선·물동선과 유틸리티 조건을 초기에 검토해 후속 설계의 재작업을 줄입니다.",
        },
      ],
    },
    application: {
      description:
        "제조시설의 위치와 규모를 결정해야 하거나 기존 시설의 생산능력, 공정 또는 GMP 동선을 재구성해야 하는 프로젝트에 적용합니다.",
      image: "./images/service/conceptual-design-application.webp",
      imageAlt: "제약 제조시설의 개념설계와 공간 검토",
      items: [
        {
          label: "신규 제조소",
          value: "부지 검토, 시설 규모 산정과 생산동선의 기본 방향이 필요한 프로젝트",
        },
        {
          label: "증설·생산능력 확대",
          value: "신규 라인, 장비 증설과 창고·지원시설 확장이 필요한 제조소",
        },
        {
          label: "리모델링·공정 변경",
          value: "기존 구획, 작업실과 인원·자재 동선을 재배치해야 하는 제조소",
        },
        {
          label: "GMP 전환·개선",
          value: "청정등급, 차압, Air Lock과 오염관리 기준의 보완이 필요한 시설",
        },
      ],
    },
    scope: {
      description:
        "기초자료 확인부터 공간·동선과 유틸리티 기준 확정까지 개념설계의 주요 지원 범위를 4단계 수행 흐름으로 연결합니다.",
      items: [
        {
          title: "기초자료·범위 정의",
          description:
            "질의서와 Workshop을 통해 제품, 생산계획, 제조공정, 장비와 운영조건을 수집하고 프로젝트 범위를 합의합니다.",
        },
        {
          title: "공정·시설 규모 분석",
          description:
            "생산량, 공정별 처리용량과 장비 조건을 분석해 작업실, 창고와 지원시설의 필요 규모를 산정합니다.",
        },
        {
          title: "GMP Layout·동선 개발",
          description:
            "공정 인접성, 장비 배치와 청정구역을 검토하고 인원·자재·제품·폐기물 동선을 구체화합니다.",
        },
        {
          title: "Design Basis 확정",
          description:
            "청정등급, 차압, 온·습도와 유틸리티 요구조건을 반영해 후속 상세설계에 사용할 기준을 확정합니다.",
        },
      ],
    },
    execution: {
      label: "Deliverables",
      title: "개념설계 컨설팅 단계별 대표 수행 결과자료",
      description:
        "각 수행단계에서 합의한 검토 결과를 후속 상세설계와 프로젝트 관리에 사용할 수 있는 도면과 기준자료로 정리합니다.",
      steps: [
        {
          title: "질의서·Workshop",
          description: "제품, 생산계획, 제조공정, 장비와 운영조건을 수집하고 프로젝트 범위를 합의합니다.",
          outputTitle: "개념설계 질의서 · Project Brief",
          outputDetail: "제품·생산·장비 기초 Data",
        },
        {
          title: "시설 규모 산정",
          description: "생산량과 공정별 처리용량을 기준으로 작업실, 창고와 지원시설의 필요 규모를 산정합니다.",
          outputTitle: "Process Analysis Sheet",
          outputDetail: "Facility Size · Equipment List",
        },
        {
          title: "Layout Development",
          description: "공정 인접성, 장비 배치, 청정구역과 인원·자재·폐기물 동선을 반복 검토합니다.",
          outputTitle: "Site Plan · GMP Layout · Equipment Plan",
          outputDetail: "Personnel / Material / Waste Flow",
        },
        {
          title: "Design Basis 확정",
          description: "유틸리티와 작업실 요구사항을 반영해 최종 도면과 개념설계 보고서를 확정합니다.",
          outputTitle: "Room Design Requirement · Conceptual Design Report",
          outputDetail: "Utility / Drain Plan",
        },
      ],
    },
    differentiators: {
      description:
        "도면 작성에 머무르지 않고 제조, 품질과 시설 운영의 관점에서 후속 단계에 필요한 판단기준을 함께 정리합니다.",
      items: [
        {
          title: "공정과 GMP를 함께 보는 공간계획",
          description:
            "면적 배분에 그치지 않고 제조순서, 작업자 행위, 자재 이동과 오염관리 요구사항을 같은 Layout에서 검토합니다.",
        },
        {
          title: "상세설계·DQ로 이어지는 근거자료",
          description:
            "주요 의사결정, Room Requirement와 Utility 조건을 문서화해 상세설계와 후속 DQ의 기준으로 사용할 수 있게 합니다.",
        },
      ],
    },
    contact: {
      titleLines: ["신·증축과 리모델링의", "설계 기준을 먼저 정리합니다."],
      descriptionLines: [
        "제품과 생산계획을 알려주시면",
        "개념설계의 출발점과 검토 범위를 함께 정리합니다.",
      ],
    },
  },
  gmp: {
    key: "gmp",
    pageTitle: "GMP 컨설팅",
    serviceName: "GMP Consulting",
    sectionName: "GMP 컨설팅",
    pageDescription:
      "운영 기준부터 적격성평가와 점검 대응까지 하나의 수행 구조로 연결하는 맞춤형 GMP 전문 컨설팅 서비스입니다.",
    pageImage: "./images/service/gmp-consulting-hero.webp",
    coreValue: {
      description:
        "형식적이고 과도한 프로세스 도입을 지양하고 제조소 규모, 실제 운영 상황과 프로젝트 일정에 맞는 GMP 실행 기준을 제시합니다.",
      items: [
        {
          title: "실질적 가이드 제공",
          description:
            "제조소 규모와 실제 운영 상황, 프로젝트 일정에 가장 잘 맞춘 실질적이고 가용한 GMP 실행 가이드를 제시합니다.",
        },
        {
          title: "실사 리스크 최소화",
          description:
            "운영체계, 규정·절차, 검증(Validation)과 실사 대응 범위를 분리하지 않고 통합적인 수행 구조로 연결해 Inspection 및 Audit 지적 리스크를 선제적으로 줄입니다.",
        },
      ],
    },
    application: {
      description:
        "제조소의 신규 구축과 증설, 기존 품질시스템 고도화부터\n규제기관 Inspection 및 거래처 Audit 준비까지 지원합니다.",
      image: "./images/service/gmp-consulting-application.webp",
      imageAlt: "제약 제조소의 GMP 운영과 품질관리",
      items: [
        {
          label: "대상 산업",
          value: "의약품, 바이오, 화장품, 의료기기 제조소",
        },
        {
          label: "적용 규제",
          value: "KGMP, cGMP(FDA), EU-GMP 환경 대응",
        },
        {
          label: "프로젝트 유형",
          value: "신규 공장·라인 증설 및 인허가 준비",
        },
        {
          label: "품질 고도화",
          value: "기존 QMS·SOP 현장 실행력 강화 및 Gap 보완",
        },
        {
          label: "실사 대비",
          value: "규제기관 Inspection 및 거래처 Audit 사전 준비",
        },
      ],
    },
    scope: {
      description:
        "현장 진단부터 QMS 구축, 밸리데이션과 실사 대응까지 GMP 컨설팅의 주요 지원 범위를 4단계 수행 흐름으로 연결합니다.",
      items: [
        {
          title: "범위 정의",
          description:
            "현장 사전 진단을 통해 프로젝트 목표와 적용 범위를 정하고 Validation Master Plan과 수행계획을 수립합니다.",
        },
        {
          title: "QMS 구축",
          description:
            "SOP, Training, 일탈·CAPA와 변경관리 절차를 현장 운영에 맞게 정비하고 교육체계를 구축합니다.",
        },
        {
          title: "밸리데이션",
          description:
            "시설·설비 적격성평가, PV, CSV와 Data Integrity의 적용 범위와 수행 결과를 검토합니다.",
        },
        {
          title: "실사 대응",
          description:
            "Mock Audit을 수행하고 규제기관 Inspection 및 거래처 Audit에 필요한 대응자료와 현장 지침을 정리합니다.",
        },
      ],
    },
    execution: {
      label: "Deliverables",
      title: "GMP 컨설팅 단계별 대표 수행 결과자료",
      description:
        "범위 정의부터 규정 검토, 운영체계와 실사 대응자료 정리까지 각 단계에서 필요한 대표 결과자료를 프로젝트 목적에 맞춰 구성합니다.",
      steps: [
        {
          title: "범위 정의",
          description: "현장 사전 진단을 통해 프로젝트 목표, 적용 범위와 수행 일정을 정리합니다.",
          outputTitle: "Validation Master Plan (VMP)",
          outputDetail: "프로젝트 목표, 범위 및 일정 관리 가이드",
        },
        {
          title: "규정 및 기준 검토",
          description: "적용 규정과 현재 운영 기준의 차이를 진단하고 우선 보완과제를 정리합니다.",
          outputTitle: "Compliance Check Sheet",
          outputDetail: "GMP 규정 부합성 검토 및 실행 로드맵",
        },
        {
          title: "운영체계 정리",
          description: "SOP, Training, 일탈·CAPA와 변경관리 절차를 현장 운영에 맞게 정비합니다.",
          outputTitle: "QMS / SOP 체계 제안서",
          outputDetail: "현장 맞춤형 품질운영 문서 및 제·개정안",
        },
        {
          title: "문서화 및 대응 정리",
          description: "Mock Audit 결과와 규제기관 Inspection 및 거래처 Audit 대응자료를 최종 문서로 정리합니다.",
          outputTitle: "Inspection Readiness Package",
          outputDetail: "실사 대응 자료집, 모의점검 보고서 및 지침서",
        },
      ],
    },
    differentiators: {
      description:
        "시설, 장비와 품질시스템을 분리하지 않고 현장 운영과 문서 실행이 함께 작동하는 GMP 체계를 구축합니다.",
      items: [
        {
          title: "현장 실무형 SOP 고도화",
          description:
            "단순 법률 및 규정의 나열에 그치지 않고 작업자가 현장에서 즉시 이행할 수 있는 정교한 표준작업지침서(SOP)를 제작해 교육 및 자체감사 수행 효율을 높입니다.",
        },
        {
          title: "현장 실행과 최신 규제를 함께 반영",
          description:
            "시설·장비 적격성, 품질시스템과 실사 대응자료를 하나의 실행 기준으로 연결하고 Data Integrity와 CSV 등 강화되는 규제 이슈를 선제적으로 점검합니다.",
        },
      ],
    },
    contact: {
      titleLines: [
        "제조소 운영과 규제 대응의",
        "GMP 수행 기준을 먼저 정리합니다.",
      ],
      descriptionLines: [
        "시설, 공정과 운영 현황을 알려주시면",
        "GMP 컨설팅의 출발점과 수행 범위를 함께 정리합니다.",
      ],
    },
  },
  csv: {
    key: "csv",
    pageTitle: "CSV 컨설팅",
    serviceName: "CSV Consulting",
    sectionName: "CSV 컨설팅",
    pageDescription:
      "GMP 환경의 컴퓨터화시스템이 규제 및 사용자 요구사항을 충족하고 의도한 목적에 따라 안정적으로 운영되도록 검증 전 과정을 지원합니다.",
    pageImage: "./images/service/csv-consulting-hero.webp",
    coreValue: {
      description:
        "규정 준수, Data Integrity, 위험 기반 검증과 Lifecycle 관리를 하나의 검증체계로 연결합니다.",
      items: [
        {
          title: "규제 준수와 Data Integrity 확보",
          description:
            "KGMP, FDA 21 CFR Part 11, EU GMP Annex 11 등 규제 요구사항과 ALCOA+ 원칙을 검증 근거와 추적성으로 연결해 신뢰할 수 있는 운영 환경을 구축합니다.",
        },
        {
          title: "위험 기반 검증과 Lifecycle 관리",
          description:
            "시스템 영향과 위험도에 따라 검증 범위를 최적화하고 기획부터 운영, 변경관리, 정기 검토와 재검증까지 검증상태를 지속적으로 유지합니다.",
        },
      ],
    },
    application: {
      description:
        "GxP 환경의 컴퓨터화시스템을 대상으로 신규 도입과 밸리데이션, 규제 대응, 정기 검토와 운영체계 수립을 지원합니다.",
      image: "./images/service/csv-consulting-application.webp",
      imageAlt: "컴퓨터화시스템 밸리데이션과 데이터 검토",
      items: [
        {
          label: "대상 산업",
          value: "의약품, 바이오, 화장품, 의료기기 제조소",
        },
        {
          label: "적용 규제",
          value: "KGMP, FDA 21 CFR Part 11, EU GMP Annex 11, GAMP 5, PIC/S GMP, Data Integrity(ALCOA+)",
        },
        {
          label: "프로젝트 유형",
          value: "CSV 수행, Part 11 대응, IT 품질정책·SOP 수립, 정기 검토, 상시 GMP 지원과 IT PMO",
        },
        {
          label: "대상 시스템",
          value: "제조, 품질, 경영·물류, 설비·환경, 연구·시험 분야의 GxP 컴퓨터화시스템",
        },
        {
          label: "주요 적용 시점",
          value: "신규 도입, 주요 변경, 데이터 이전, 정기 검토, 재검증과 규제기관 Audit 준비",
        },
      ],
    },
    scope: {
      description:
        "프로젝트 계획부터 요구사항·위험평가, 검증 실행과 유지관리까지 CSV의 주요 지원 범위를 Lifecycle 순서로 연결합니다.",
      items: [
        {
          title: "프로젝트 착수·계획",
          description:
            "시스템 현황과 GxP 영향도를 분석해 CSV 전략, 범위와 일정을 수립합니다.",
        },
        {
          title: "요구사항·설계 검토",
          description:
            "사용자 요구사항과 기능·설계 명세가 규제 및 검증 목적에 적합한지 확인합니다.",
        },
        {
          title: "위험평가",
          description:
            "GxP 영향과 Data Integrity 위험을 평가해 검증범위와 시험 강도를 결정합니다.",
        },
        {
          title: "검증 실행",
          description:
            "IQ·OQ·PQ 시험 수행과 결과 확인, 승인 증적을 체계적으로 관리합니다.",
        },
        {
          title: "종결·유지관리",
          description:
            "RTM·VSR로 검증을 종결하고 변경관리, 정기 검토와 재검증을 지원합니다.",
        },
      ],
    },
    execution: {
      label: "Deliverables",
      title: "CSV 컨설팅 단계별 대표 수행 결과자료",
      description:
        "요구사항, 위험평가, 시험 증적과 종결자료를 단계별로 연결해 검증 근거와 추적성을 명확하게 정리합니다.",
      steps: [
        {
          title: "프로젝트 착수 · 계획",
          description: "목표와 범위, GxP 영향도와 시스템 현황을 파악하고 GAMP 5 기반 분류, 역할과 일정을 수립합니다.",
          outputTitle: "VMP · Validation Plan · System Assessment",
          outputDetail: "검증 범위, 책임, 일정 및 시스템 현황",
        },
        {
          title: "요구사항 · 설계 검토",
          description: "사용자 요구사항을 정의하고 기능·설계 명세의 적합성과 검증 가능성을 확인합니다.",
          outputTitle: "URS · Functional / Design Specification Review",
          outputDetail: "User Requirements Specification · Design Qualification",
        },
        {
          title: "위험평가",
          description: "GxP 영향과 기능 위험, Data Integrity 요구사항을 평가해 시험 범위와 검증 강도를 결정합니다.",
          outputTitle: "Functional Risk Assessment",
          outputDetail: "GxP Impact Assessment · Data Integrity / Gap Assessment",
        },
        {
          title: "검증 실행",
          description: "검증문서를 작성하고 설치·기능·운전·성능 시험의 수행과 결과 확인, 승인을 관리합니다.",
          outputTitle: "IQ · OQ · PQ",
          outputDetail: "시험 수행기록, 결과 확인과 승인 증적",
        },
        {
          title: "종결 · 유지관리",
          description: "요구사항과 시험 결과의 추적성을 확인하고 변경관리, 정기 검토, 재검증과 Audit 대응으로 검증상태를 유지합니다.",
          outputTitle: "RTM · Validation Summary Report",
          outputDetail: "Periodic Review · Change Records",
        },
      ],
    },
    differentiators: {
      description:
        "요구사항, 위험과 시험 증적이 서로 연결되고 운영 이후에도 추적 가능한 CSV 체계를 구축하는 데 집중합니다.",
      items: [
        {
          title: "검증 완료를 넘어 운영 품질까지 연결",
          description:
            "현업 프로세스, 시스템 기능, 공급업체 문서와 IT 운영절차를 함께 검토해 규정 준수와 시스템 신뢰성을 지속적으로 유지할 수 있는 검증체계를 구축합니다.",
        },
        {
          title: "요구사항부터 운영까지 이어지는 추적성",
          description:
            "URS, 위험평가, 시험 시나리오와 결과, RTM/VSR을 연결하고 Data Integrity와 최신 규제 이슈를 반영해 변경과 실사 시에도 검증 근거를 빠르게 확인하도록 합니다.",
        },
      ],
    },
    contact: {
      titleLines: [
        "컴퓨터화시스템 도입과 변경의",
        "CSV 검증 기준을 먼저 정리합니다.",
      ],
      descriptionLines: [
        "대상 시스템과 운영 계획을 알려주시면",
        "CSV 컨설팅의 출발점과 검증 범위를 함께 정리합니다.",
      ],
    },
  },
};
