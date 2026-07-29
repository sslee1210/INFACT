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

type StructurePhase = {
  title: string;
  description: string;
};

type DeliverableRowBase = {
  phase: string;
  focus: string;
};

type DeliverableRow = DeliverableRowBase &
  (
    | {
        outputs: string;
        outputTitle?: never;
        outputDetail?: never;
      }
    | {
        outputs?: never;
        outputTitle: string;
        outputDetail: string;
      }
  );

type RoadmapStep = {
  title: string;
  description: string;
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
  structure: {
    description: string;
    phases: StructurePhase[];
  };
  deliverables: {
    description: string;
    rows: DeliverableRow[];
  };
  roadmap: {
    description: string;
    steps: RoadmapStep[];
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
    pageImage: "./images/sub/business.jpg",
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
      image: "./images/home/service-conceptual-v3.webp",
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
        "제품과 제조공정의 기초자료를 분석하고 공정별 공간, 장비, 동선과 환경조건을 일관된 Design Basis로 정리합니다.",
      items: [
        {
          title: "제품·생산계획",
          description:
            "제품군, 제형, Batch Size, 연간 생산량과 향후 증설계획을 시설 규모 산정의 입력값으로 정리합니다.",
        },
        {
          title: "공정·장비 분석",
          description:
            "공정 순서와 처리시간, 장비 사양·수량, 작업공간과 반입·정비 조건을 검토합니다.",
        },
        {
          title: "GMP Layout·동선",
          description:
            "작업실 인접성, 구역 구분과 인원·자재·제품·폐기물·장비 동선의 교차 가능성을 검토합니다.",
        },
        {
          title: "환경·유틸리티 기준",
          description:
            "청정등급, 차압, 온·습도, 제약용수·가스·배기·전기와 Drain 요구조건을 정리합니다.",
        },
      ],
    },
    structure: {
      description:
        "질의서와 Workshop에서 수집한 생산정보를 공정분석, 공간계획과 GMP 검토로 발전시켜 최종 개념설계 패키지로 확정합니다.",
      phases: [
        {
          title: "기초자료 정리",
          description: "제품, 생산량, 공정, 장비와 운영조건 확인",
        },
        {
          title: "공정·장비 분석",
          description: "처리용량, 작업순서와 공간 요구사항 산정",
        },
        {
          title: "공간·GMP 통합",
          description: "Layout, 동선, Zoning과 Utility 조건 검토",
        },
        {
          title: "설계기준 확정",
          description: "도면, 요구사항과 Concept Report 문서화",
        },
      ],
    },
    deliverables: {
      description:
        "각 단계에서 합의한 검토 결과를 후속 설계와 프로젝트 관리에 사용할 수 있는 도면과 기준자료로 정리합니다.",
      rows: [
        {
          phase: "착수",
          focus: "프로젝트 입력조건",
          outputs: "개념설계 질의서 · Project Brief · 제품·생산·장비 기초 Data",
        },
        {
          phase: "분석",
          focus: "시설 규모·공정 분석",
          outputs: "Process Analysis Sheet · Facility Size · Equipment List",
        },
        {
          phase: "설계",
          focus: "Layout·구역·동선",
          outputs:
            "Site Plan · GMP Layout · Equipment Plan · Personnel / Material / Waste Flow",
        },
        {
          phase: "확정",
          focus: "작업실·유틸리티 설계기준",
          outputs:
            "Room Design Requirement · Utility / Drain Plan · Conceptual Design Report",
        },
      ],
    },
    roadmap: {
      description:
        "프로젝트 조건을 확인하고 공정과 공간을 단계적으로 발전시켜 최종 설계 기준을 확정합니다.",
      steps: [
        {
          title: "질의서·Workshop",
          description: "제품, 생산계획, 제조공정, 장비와 운영조건을 수집하고 프로젝트 범위를 합의합니다.",
        },
        {
          title: "시설 규모 산정",
          description: "생산량과 공정별 처리용량을 기준으로 작업실, 창고와 지원시설의 필요 규모를 산정합니다.",
        },
        {
          title: "Layout Development",
          description: "공정 인접성, 장비 배치, 청정구역과 인원·자재·폐기물 동선을 반복 검토합니다.",
        },
        {
          title: "Design Basis 확정",
          description: "유틸리티와 작업실 요구사항을 반영해 최종 도면과 개념설계 보고서를 확정합니다.",
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
    pageImage: "./images/sub/business.jpg",
    coreValue: {
      description:
        "형식적이고 과도한 프로세스 도입을 지양하고 제조소의 실제 운영과 프로젝트 일정에 맞는 GMP 실행 기준을 제시합니다.",
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
      image: "./images/home/service-gmp-v3.webp",
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
        "프로젝트 전략, 품질시스템, 밸리데이션과 실사 대응을 4대 핵심 영역으로 구성해 제조소 상황에 맞게 지원합니다.",
      items: [
        {
          title: "VMP & 전략",
          description:
            "Validation Master Plan을 수립하고 단계별 수행 일정과 R&R(역할 구조)을 명확하게 정리합니다.",
        },
        {
          title: "QMS & SOP",
          description:
            "SOP, Training, CAPA, Change Control과 Deviation 절차를 검토하고 제·개정합니다.",
        },
        {
          title: "Validation",
          description:
            "Qualification(DQ/IQ/OQ/PQ), PV와 Computerized System Validation(CSV)의 적용 범위를 검토합니다.",
        },
        {
          title: "Inspection",
          description:
            "실사 대응 제출자료를 패키징하고 Mock Audit(모의점검)와 현장 대응 가이드를 지원합니다.",
        },
      ],
    },
    structure: {
      description:
        "기획 단계부터 문서화, 적격성평가와 최종 실사 대응까지\n개별 요소를 하나의 통합 프로세스로 연결합니다.",
      phases: [
        {
          title: "VMP & 전략",
          description: "프로젝트 목표, 범위, 일정과 역할 구조 수립",
        },
        {
          title: "QMS & SOP",
          description: "품질운영 절차 검토, 제·개정과 교육",
        },
        {
          title: "Validation",
          description: "적격성평가, PV, CSV와 Data Integrity 검토",
        },
        {
          title: "Inspection",
          description: "제출자료 패키징, Mock Audit와 현장 대응",
        },
      ],
    },
    deliverables: {
      description:
        "범위 정의부터 문서화와 실사 대응까지 각 수행단계의 대표 결과자료를\n프로젝트 목적에 맞춰 구성합니다.",
      rows: [
        {
          phase: "01",
          focus: "범위 정의",
          outputTitle: "Validation Master Plan (VMP)",
          outputDetail: "프로젝트 목표, 범위 및 일정 관리 가이드",
        },
        {
          phase: "02",
          focus: "규정 및 기준 검토",
          outputTitle: "Compliance Check Sheet",
          outputDetail: "GMP 규정 부합성 검토 및 실행 로드맵",
        },
        {
          phase: "03",
          focus: "운영체계 정리",
          outputTitle: "QMS / SOP 체계 제안서",
          outputDetail: "현장 맞춤형 품질운영 문서 및 제·개정안",
        },
        {
          phase: "04",
          focus: "문서화 및 대응 정리",
          outputTitle: "Inspection Readiness Package",
          outputDetail: "실사 대응 자료집, 모의점검 보고서 및 지침서",
        },
      ],
    },
    roadmap: {
      description:
        "현장 사전 진단과 범위 정의를 시작으로 QMS 구축, 밸리데이션과\n최종 실사 대응까지 단계별로 진행합니다.",
      steps: [
        {
          title: "범위 정의",
          description: "현장 사전 진단을 수행하고 프로젝트 마스터 플랜(PMP)을 수립합니다.",
        },
        {
          title: "QMS 구축",
          description: "SOP, 일탈/CAPA와 변경관리 체계를 정비하고 관련 교육을 수행합니다.",
        },
        {
          title: "밸리데이션",
          description: "설비 적격성평가, CSV와 데이터 완전성(DI) 검토를 수행합니다.",
        },
        {
          title: "실사 대응",
          description: "Mock Audit을 수행하고 최종 Inspection 대응자료를 수립합니다.",
        },
      ],
    },
    differentiators: {
      description:
        "현장에서 바로 실행할 수 있는 SOP와 강화되는 글로벌 규제 이슈를 함께 반영해 실사 대응의 실효성을 높입니다.",
      items: [
        {
          title: "현장 실무형 SOP 고도화",
          description:
            "단순 법률 및 규정의 나열에 그치지 않고 작업자가 현장에서 즉시 이행할 수 있는 정교한 표준작업지침서(SOP)를 제작해 교육 및 자체감사 수행 효율을 높입니다.",
        },
        {
          title: "최신 규제 트렌드 반영",
          description:
            "Data Integrity와 Computer System Validation(CSV) 등 강화되는 글로벌 규제 이슈를 사전에 점검해 향후 실사 지적 가능성에 대비합니다.",
        },
      ],
    },
    contact: {
      titleLines: ["운영 기준이 복잡해지기 전에,", "프로젝트 목적에 맞는 GMP 수행 범위를 먼저 정리하세요."],
      descriptionLines: [
        "현재 제조소의 운영 상황과 프로젝트 일정을 기준으로",
        "필요한 GMP 컨설팅 범위와 수행 순서를 함께 검토합니다.",
      ],
    },
  },
  csv: {
    key: "csv",
    pageTitle: "CSV 컨설팅",
    serviceName: "CSV Consulting",
    sectionName: "CSV 컨설팅",
    pageDescription:
      "GMP 환경에서 운영되는 컴퓨터화시스템이 규제 및 사용자 요구사항을 충족하고 의도한 목적에 따라 안정적으로 운영되도록 지원합니다.",
    pageImage: "./images/sub/business.jpg",
    coreValue: {
      description:
        "Reliable Validation, Trusted Compliance를 기준으로 규정 준수를 넘어 신뢰할 수 있는 컴퓨터화시스템 검증체계를 구축합니다.",
      items: [
        {
          title: "Regulatory Compliance",
          description:
            "KGMP, FDA 21 CFR Part 11, EU GMP Annex 11과 GAMP 5 등 글로벌 GMP 요구사항에 대응하는 검증체계를 제공합니다.",
        },
        {
          title: "Data Integrity",
          description:
            "데이터 완전성과 추적성을 확보해 신뢰할 수 있는 시스템 운영환경을 구축합니다.",
        },
        {
          title: "Risk-Based Validation",
          description:
            "위험 기반 접근을 통해 검증범위를 최적화하고 검증 효율성과 품질을 함께 높입니다.",
        },
        {
          title: "Lifecycle Management",
          description:
            "시스템 기획부터 운영, 변경관리, 주기적 검토와 재검증까지 전체 생명주기를 지원합니다.",
        },
      ],
    },
    application: {
      description:
        "GxP 환경의 컴퓨터화시스템을 대상으로 신규 도입과 밸리데이션, 규제 대응, 정기 검토와 운영체계 수립을 지원합니다.",
      image: "./images/home/service-csv-v3.webp",
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
        "CSV 전략과 위험평가, 검증 실행과 운영단계 관리를 4대 핵심 영역으로 구성해 프로젝트 전 과정을 지원합니다.",
      items: [
        {
          title: "Validation Strategy & Planning",
          description:
            "시스템 현황과 GxP 영향도를 분석해 프로젝트에 적합한 CSV 전략, 범위와 일정을 수립합니다.",
        },
        {
          title: "Risk Assessment & Compliance",
          description:
            "위험 기반 접근으로 검증범위를 최적화하고 Data Integrity와 규제 요구사항의 충족 여부를 검토합니다.",
        },
        {
          title: "Validation Execution",
          description:
            "시스템 적격성을 입증하기 위한 검증문서를 작성하고 시험 수행, 결과 확인과 승인을 체계적으로 관리합니다.",
        },
        {
          title: "Lifecycle Management",
          description:
            "시스템 운영 이후에도 변경관리, Periodic Review와 Revalidation을 통해 지속적인 규정 준수와 안정적 운영을 지원합니다.",
        },
      ],
    },
    structure: {
      description:
        "기획 단계부터 위험평가, 검증 실행과 운영 이후의 규정 준수 관리까지 CSV 활동을 하나의 통합 프로세스로 연결합니다.",
      phases: [
        {
          title: "Strategy & Planning",
          description: "GxP 영향도, 검증 범위, 역할과 일정 수립",
        },
        {
          title: "Risk & Compliance",
          description: "위험평가, 규제 요구사항과 Data Integrity 검토",
        },
        {
          title: "Validation Execution",
          description: "검증문서 작성, 시험 수행과 결과 승인",
        },
        {
          title: "Lifecycle Management",
          description: "변경관리, 정기 검토, 재검증과 Audit 지원",
        },
      ],
    },
    deliverables: {
      description:
        "계획, 요구·설계, 위험평가, 검증과 운영단계 유지관리까지 CSV Lifecycle에 필요한 대표 결과자료를 구성합니다.",
      rows: [
        {
          phase: "01",
          focus: "계획",
          outputs: "Validation Plan · System Assessment",
        },
        {
          phase: "02",
          focus: "요구·설계",
          outputs: "User Requirements Specification · Functional / Design Specification Review · Design Qualification",
        },
        {
          phase: "03",
          focus: "위험평가",
          outputs: "Functional Risk Assessment · Data Integrity / Gap Assessment",
        },
        {
          phase: "04",
          focus: "검증",
          outputs: "Installation Qualification · Operational Qualification · Performance Qualification",
        },
        {
          phase: "05",
          focus: "종결·유지",
          outputs: "Requirements Traceability Matrix · Validation Summary Report · Periodic Review / Change Records",
        },
      ],
    },
    roadmap: {
      description:
        "프로젝트 착수와 검증전략 수립부터 위험평가, 검증 실행과 운영단계 규정 준수 관리까지 5단계로 진행합니다.",
      steps: [
        {
          title: "Project Initiation",
          description: "프로젝트 목표와 범위, GxP 영향도와 시스템 현황을 파악하고 이해관계자를 확인합니다.",
        },
        {
          title: "Validation Strategy",
          description: "Validation Master Plan과 Validation Plan을 작성하고 GAMP 5 기반 시스템 분류와 일정을 수립합니다.",
        },
        {
          title: "Risk Assessment",
          description: "Initial Risk Assessment, GxP Impact Assessment, URS와 Data Integrity 요구사항을 검토합니다.",
        },
        {
          title: "Validation Execution",
          description: "검증문서를 작성하고 시험 수행과 결과 확인을 거쳐 검증 완료와 승인을 진행합니다.",
        },
        {
          title: "운영 및 규정 준수 관리",
          description: "Change Control, Periodic Review, Revalidation과 Audit 대응으로 검증상태를 유지합니다.",
        },
      ],
    },
    differentiators: {
      description:
        "검증 완료 자체보다 규정 준수와 시스템 신뢰성을 지속적으로 유지할 수 있는 CSV 체계를 구축하는 데 집중합니다.",
      items: [
        {
          title: "검증을 넘어 품질 경쟁력을 높이는 CSV 파트너",
          description:
            "일회성 검증문서 작성에 머무르지 않고 시스템의 신뢰성과 규정 준수 상태를 지속적으로 유지할 수 있는 검증체계를 구축합니다.",
        },
        {
          title: "최신 규제 트렌드 반영",
          description:
            "Data Integrity와 Computer System Validation 등 강화되는 글로벌 규제 이슈를 사전에 점검해 향후 실사 지적 가능성에 대비합니다.",
        },
      ],
    },
    contact: {
      titleLines: ["시스템을 도입하거나 변경하기 전에,", "프로젝트 목적에 맞는 CSV 수행 범위를 먼저 정리하세요."],
      descriptionLines: [
        "대상 시스템의 GxP 영향도와 현재 운영상태를 기준으로",
        "필요한 검증전략, 문서와 시험범위를 함께 검토합니다.",
      ],
    },
  },
};
