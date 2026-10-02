import type { ReferenceYear } from "@/components/site/ReferenceYearTabs";

// 출처: (주)인팩트 2016 ~ 2026 Reference 2026.09.28.xls
// 표시된 원본 행 기준. 숨겨진 공통 과거 목록과 빈 행은 제외합니다.
// 개념설계 시트 우선, 나머지는 Project/Item의 CSV 표기로 분류합니다.
// 같은 연도·회사·프로젝트명은 화면용 목록에서 한 번만 표시합니다.
// projects는 원본을 보존하고, systems는 장비·시스템·시설명만 표시합니다.
// 대상명만 분리하기 어려운 3건은 사용자 요청에 따라 원문을 그대로 표시합니다.
export const csvReferenceYears: ReferenceYear[] = [
  {
    "year": 2026,
    "clients": [
      {
        "client": "제네웰",
        "logo": "",
        "projects": [
          "GxP System 구축에 따른 CSV 수행"
        ],
        "systems": [
          "GxP System"
        ]
      },
      {
        "client": "바이넥스",
        "logo": "",
        "projects": [
          "오송공장 수처리시스템 업그레이드에 따른 CSV"
        ],
        "systems": [
          "수처리시스템"
        ]
      },
      {
        "client": "펩트론",
        "logo": "",
        "projects": [
          "오송공장 Refiner System에 대한 CSV",
          "PCS 변경에 따른 CSV"
        ],
        "systems": [
          "Refiner System",
          "PCS"
        ]
      },
      {
        "client": "대웅바이오",
        "logo": "",
        "projects": [
          "세파센터 MES에 대한 CSV 수행"
        ],
        "systems": [
          "MES"
        ]
      },
      {
        "client": "프레스티지바이오로직스",
        "logo": "",
        "projects": [
          "FIT에 대한 CSV 수행",
          "MM-DFZ-02,03,04 및 EMS CSV",
          "제1, 2캠퍼스 설비관리시스템 CSV",
          "엔도톡신 장비에 대한 CSV",
          "QC-DFZ-06에 대한 CSV 수행",
          "Solo VPE에 대한 CSV 수행",
          "CO2 Incubator 추가에 따른 EMS CSV 변경관리"
        ],
        "systems": [
          "FIT",
          "MM-DFZ-02",
          "MM-DFZ-03",
          "MM-DFZ-04",
          "EMS",
          "설비관리시스템",
          "엔도톡신 장비",
          "QC-DFZ-06",
          "Solo VPE",
          "CO2 Incubator"
        ]
      },
      {
        "client": "엘앤씨바이오",
        "logo": "",
        "projects": [
          "제약사업본부 전자제조기록서 및 로그북시스템 CSV"
        ],
        "systems": [
          "전자제조기록서",
          "로그북시스템"
        ]
      },
      {
        "client": "종근당바이오 안산공장",
        "logo": "",
        "projects": [
          "생산2팀 정제1과 VA-723, RA-759 신규 설치에 따른 적격성평가 및 CSV",
          "생산1팀 발효 공정 PLC&HMI 변경으로 인한 CSV",
          "생산1팀 커머셜 생산라인 구축에 따른 적격성평가 및 CSV"
        ],
        "systems": [
          "VA-723",
          "RA-759",
          "발효 공정 PLC",
          "발효 공정 HMI",
          "커머셜 생산라인"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "제2공장 전사적자원관리 및 제조실행시스템 CSV",
          "제1공장 전사적자원관리 및 제조실행시스템 CSV",
          "제1공장 RWS에 대한 CSV",
          "제1공장 WMS, LIMS&QMS, EDMS에 대한 CSV PQ 수행",
          "제1공장 RWS 신규 설치에 대한 CSV 수행",
          "2공장 EDMS 및 LAS 등 CSV 수행",
          "오송공장 ERP 및 MES, WMS 등에 대한 CSV 수행"
        ],
        "systems": [
          "ERP",
          "MES",
          "RWS",
          "WMS",
          "LIMS",
          "QMS",
          "EDMS",
          "LAS"
        ]
      },
      {
        "client": "영진약품",
        "logo": "",
        "projects": [
          "남양공장 MES 혼합물 칭량표 기능 추가 CSV 변경관리"
        ],
        "systems": [
          "MES"
        ]
      },
      {
        "client": "jw중외제약",
        "logo": "",
        "projects": [
          "BMS 변경에 따른 CSV 수행"
        ],
        "systems": [
          "BMS"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "AG시스템에 대한 CSV 수행"
        ],
        "systems": [
          "AG"
        ]
      },
      {
        "client": "LG화학",
        "logo": "",
        "projects": [
          "익산공장 PUPSIT Line CSV 수행",
          "VIAL Upgrade에 대한 CSV 수행"
        ],
        "systems": [
          "PUPSIT Line",
          "VIAL"
        ]
      },
      {
        "client": "명인제약",
        "logo": "",
        "projects": [
          "ERP 및 RWS, WMS에 대한 CSV 수행"
        ],
        "systems": [
          "ERP",
          "RWS",
          "WMS"
        ]
      },
      {
        "client": "보령바이오파마",
        "logo": "",
        "projects": [
          "진천공장 LIMS 및 LAS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS",
          "LAS"
        ]
      },
      {
        "client": "미래셀바이오",
        "logo": "",
        "projects": [
          "미래셀바이오에 구축되는 LIMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "NTP 서버 구축에 따른 CSV 수행"
        ],
        "systems": [
          "NTP 서버"
        ]
      },
      {
        "client": "롯데바이오로직스",
        "logo": "",
        "projects": [
          "전기영동장치에 대한 CSV 수행"
        ],
        "systems": [
          "전기영동장치"
        ]
      },
      {
        "client": "오레온",
        "logo": "",
        "projects": [
          "충전기 적격성평가 및 CSV 수행"
        ],
        "systems": [
          "충전기"
        ]
      },
      {
        "client": "유니메드제약",
        "logo": "",
        "projects": [
          "멸균탱크 적격성평가 CSV 수행"
        ],
        "systems": [
          "멸균탱크"
        ]
      },
      {
        "client": "한국유니온제약",
        "logo": "",
        "projects": [
          "실험실 정보관리 시스템에 대한 CSV 변경관리 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "정제수시스템 CSV"
        ],
        "systems": [
          "정제수시스템"
        ]
      },
      {
        "client": "대구경북첨단의료산업진행재단",
        "logo": "",
        "projects": [
          "GxP System 구축에 따른 CSV 수행"
        ],
        "systems": [
          "GxP System"
        ]
      }
    ]
  },
  {
    "year": 2025,
    "clients": [
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "ERMS에 대한 CSV 수행",
          "WMS&RWS 태블릿PC S.W 변경 및 장비교체 CSV 변경관리"
        ],
        "systems": [
          "ERMS",
          "WMS",
          "RWS",
          "태블릿 PC"
        ]
      },
      {
        "client": "삼진제약",
        "logo": "",
        "projects": [
          "GEA 생산설비에 대한 CSV 수행"
        ],
        "systems": [
          "GEA 생산설비"
        ]
      },
      {
        "client": "팬젠",
        "logo": "",
        "projects": [
          "수원공장 EDMS에 대한 CSV 수행",
          "수원공장 LIMS&QMS에 대한 CSV"
        ],
        "systems": [
          "EDMS",
          "LIMS",
          "QMS"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "제1공장 백업시스템 추가 CSV 수행"
        ],
        "systems": [
          "백업시스템"
        ]
      },
      {
        "client": "알보젠코리아",
        "logo": "",
        "projects": [
          "일련번호시스템 변경에 따른 CSV 수행"
        ],
        "systems": [
          "일련번호시스템"
        ]
      },
      {
        "client": "jw생명과학",
        "logo": "",
        "projects": [
          "TF6 & TF6-1라인 분리공사 부대 공사 CSV (MCS)",
          "생산동 3층 조제실 TF5라인 조제탱크 교체공사 자동화 CSV",
          "TPN1라인 포장실 바코드라벨러 CSV",
          "TF4호기 개선 공사(CSV작업)"
        ],
        "systems": [
          "TF6 & TF6-1라인 MCS",
          "TF5라인 조제탱크",
          "TPN1라인 바코드라벨러",
          "TF4호기"
        ]
      },
      {
        "client": "프레스티지바이오로직스",
        "logo": "",
        "projects": [
          "4공장 Filter Integrity Tester에 대한 CSV 수행",
          "AKTA장비에 대한 CSV 수행"
        ],
        "systems": [
          "Filter Integrity Tester",
          "AKTA 장비"
        ]
      },
      {
        "client": "경보제약",
        "logo": "",
        "projects": [
          "동결건조기 DQ, IQ, OQ 수행 (CSV 포함)"
        ],
        "systems": [
          "동결건조기"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "ERP등 CSV 수행"
        ],
        "systems": [
          "ERP"
        ]
      },
      {
        "client": "지엠피아이티",
        "logo": "",
        "projects": [
          "문막공장 RWS에 대한 CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "오리엔트제니아",
        "logo": "",
        "projects": [
          "비임상시험시스템에 대한 CSV 수행"
        ],
        "systems": [
          "비임상시험시스템"
        ]
      },
      {
        "client": "LG화학",
        "logo": "",
        "projects": [
          "PFS Upgrade에 대한 CSV 수행",
          "익산공장 동물생산의약동 PCS에 대한 CSV"
        ],
        "systems": [
          "PFS",
          "PCS"
        ]
      },
      {
        "client": "안국약품",
        "logo": "",
        "projects": [
          "칭량시스템 이전 CSV 수행"
        ],
        "systems": [
          "칭량시스템"
        ]
      },
      {
        "client": "유니메드제약",
        "logo": "",
        "projects": [
          "아산&오송공장 QMS&EDMS 구축 CSV 수행"
        ],
        "systems": [
          "QMS",
          "EDMS"
        ]
      },
      {
        "client": "에이치엘비펩",
        "logo": "",
        "projects": [
          "오송공장 LIMS에 대한 CSV"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "영진약품",
        "logo": "",
        "projects": [
          "남양공장 RWS에 대한 CSV 변경관리"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "셀락바이오",
        "logo": "",
        "projects": [
          "LIMS&QMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS",
          "QMS"
        ]
      },
      {
        "client": "대웅바이오",
        "logo": "",
        "projects": [
          "세파항생제공장 WMS에 대한 CSV 수행"
        ],
        "systems": [
          "WMS"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "천안공장 RWS&WMS CSV 변경관리"
        ],
        "systems": [
          "RWS",
          "WMS"
        ]
      },
      {
        "client": "제일약품",
        "logo": "",
        "projects": [
          "캡실링기 적격성평가 및 CSV"
        ],
        "systems": [
          "캡실링기"
        ]
      },
      {
        "client": "동아에스티",
        "logo": "",
        "projects": [
          "송도캠퍼스 WMS에 대한 CSV 변경관리"
        ],
        "systems": [
          "WMS"
        ]
      },
      {
        "client": "비보존제약",
        "logo": "",
        "projects": [
          "가상화서버 이전에 따른 CSV 수행"
        ],
        "systems": [
          "가상화서버"
        ]
      },
      {
        "client": "SK바이오사이언스",
        "logo": "",
        "projects": [
          "시드 제조 프로세스 CSV 수행"
        ],
        "systems": [
          "시드 제조 프로세스"
        ]
      },
      {
        "client": "셀타스퀘어",
        "logo": "",
        "projects": [
          "PV 플랫폼 시스템에 대한 CSV 수행"
        ],
        "systems": [
          "PV 플랫폼 시스템"
        ]
      },
      {
        "client": "대한약품",
        "logo": "",
        "projects": [
          "터널멸균기 적격성평가 및 CSV"
        ],
        "systems": [
          "터널멸균기"
        ]
      },
      {
        "client": "오래온라이프",
        "logo": "",
        "projects": [
          "오래온 라이프 사이언스 적격성평가 및 CSV"
        ],
        "systems": [
          "오래온 라이프 사이언스 적격성평가 및 CSV"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "오송공장 ISOLATOR 장비에 대한 CSV"
        ],
        "systems": [
          "ISOLATOR"
        ]
      },
      {
        "client": "이연제약",
        "logo": "",
        "projects": [
          "RWS upgrade 등에 대한 CSV 변경관리 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "대원제약",
        "logo": "",
        "projects": [
          "향남&진천공장 EDMS에 대한 CSV"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "엘앤씨바이오",
        "logo": "",
        "projects": [
          "Smart-EBR에 대한 CSV"
        ],
        "systems": [
          "Smart-EBR"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "안산공장 절대혐기성 균주 제조 설비 구축에 따른 적격성평가 및 CSV",
          "안산공장 바코드프린터기에 대한 CSV 수행"
        ],
        "systems": [
          "절대혐기성 균주 제조 설비",
          "바코드프린터기"
        ]
      },
      {
        "client": "YS생명과학",
        "logo": "",
        "projects": [
          "발안공장 BMS 변경에 따른 CSV 수행"
        ],
        "systems": [
          "BMS"
        ]
      },
      {
        "client": "건일바이오팜",
        "logo": "",
        "projects": [
          "바코드일련번호(LM+AG)시스템 1식 CSV 수행"
        ],
        "systems": [
          "바코드일련번호(LM+AG)시스템"
        ]
      },
      {
        "client": "펜젠",
        "logo": "",
        "projects": [
          "전기용동장치에 대한 CSV 수행"
        ],
        "systems": [
          "전기용동장치"
        ]
      },
      {
        "client": "인벤티지랩",
        "logo": "",
        "projects": [
          "미립구 조제시스템 적격성평가(CSV 포함)"
        ],
        "systems": [
          "미립구 조제시스템"
        ]
      },
      {
        "client": "바이넥스",
        "logo": "",
        "projects": [
          "송도공장 SCADA System CSV 변경관리"
        ],
        "systems": [
          "SCADA"
        ]
      },
      {
        "client": "CG바이오",
        "logo": "",
        "projects": [
          "WFI 분배시스템 CSV수행"
        ],
        "systems": [
          "WFI 분배시스템"
        ]
      },
      {
        "client": "jw중외제약",
        "logo": "",
        "projects": [
          "BMS 변경에 따른 CSV 수행"
        ],
        "systems": [
          "BMS"
        ]
      }
    ]
  },
  {
    "year": 2024,
    "clients": [
      {
        "client": "프레스티지바이오",
        "logo": "",
        "projects": [
          "1공장 생산설비 10ea CSV",
          "Filter Inteagrity Tester기에 대한 CSV 수행",
          "1공장 QC장비 3대에 대한 CSV 수행",
          "1공장 EMS CSV 변경관리",
          "1공장 생산설비 CSV 수행"
        ],
        "systems": [
          "생산설비",
          "Filter Inteagrity Tester",
          "QC장비",
          "EMS"
        ]
      },
      {
        "client": "동구바이오",
        "logo": "",
        "projects": [
          "타정기에 대한 DQ, RA, CSV 수행"
        ],
        "systems": [
          "타정기"
        ]
      },
      {
        "client": "동아에스티",
        "logo": "",
        "projects": [
          "천안공장 WMS에 대한 CSV 변경관리"
        ],
        "systems": [
          "WMS"
        ]
      },
      {
        "client": "엘앤씨바이오",
        "logo": "",
        "projects": [
          "LIMS 구축 및 CSV 컨설팅 수행",
          "제약사업본부 QMS, EDMS 구축 및 CSV"
        ],
        "systems": [
          "LIMS",
          "QMS",
          "EDMS"
        ]
      },
      {
        "client": "휴온스메디텍",
        "logo": "",
        "projects": [
          "부산공장 QMS 및 EDMS 등에 대한 CSV"
        ],
        "systems": [
          "QMS",
          "EDMS"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "횡성공장 EDMS 및 LAS 등에 대한 CSV"
        ],
        "systems": [
          "EDMS",
          "LAS"
        ]
      },
      {
        "client": "대한약품공업",
        "logo": "",
        "projects": [
          "안산공장 품질관리시스템에 대한 CSV",
          "MES에 대한 CSV 수행"
        ],
        "systems": [
          "품질관리시스템",
          "MES"
        ]
      },
      {
        "client": "휴온스바이오파마",
        "logo": "",
        "projects": [
          "RWS CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "제1공장에 구축하는 EDMS에 대한 CSV 수행",
          "오송공장 LIMS, EDMS에 대한 CSV 수행",
          "제1공장 LIMS&QMS, RWS 서버 및 장비 교체 CSV"
        ],
        "systems": [
          "EDMS",
          "LIMS",
          "QMS",
          "RWS"
        ]
      },
      {
        "client": "SK바이오사이언스",
        "logo": "",
        "projects": [
          "임상개발실 EDC CSV 수행",
          "연구본부 ELN 구축 CSV",
          "임상시험검체분석기관 LIMS 개선 CSV",
          "차세대 ERP 구축 CSV"
        ],
        "systems": [
          "EDC",
          "ELN",
          "LIMS",
          "ERP"
        ]
      },
      {
        "client": "피알피사이언스",
        "logo": "",
        "projects": [
          "장비 등 CSV IQ, OQ"
        ],
        "systems": [
          "장비 등 CSV IQ, OQ"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "타정기 DQ 및 CSV 수행"
        ],
        "systems": [
          "타정기"
        ]
      },
      {
        "client": "건일바이오팜",
        "logo": "",
        "projects": [
          "LM, AG 및 박스포장기, 중량선별기에 대한 CSV",
          "수동 AG 시스템 CSV"
        ],
        "systems": [
          "LM",
          "AG",
          "박스포장기",
          "중량선별기",
          "수동 AG 시스템"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "LM, AG 1식에 대한 CSV"
        ],
        "systems": [
          "LM",
          "AG"
        ]
      },
      {
        "client": "알리코제약",
        "logo": "",
        "projects": [
          "원료 칭량관리시스템에 대한 CSV 수행"
        ],
        "systems": [
          "원료 칭량관리시스템"
        ]
      },
      {
        "client": "파마리서치",
        "logo": "",
        "projects": [
          "GxP System 구축에 따른 CSV 수행"
        ],
        "systems": [
          "GxP System"
        ]
      },
      {
        "client": "콜마비앤에이치",
        "logo": "",
        "projects": [
          "세종3공장 RWS에 대한 CSV"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "글로벌엔지니어링",
        "logo": "",
        "projects": [
          "SCADA System CSV 수행"
        ],
        "systems": [
          "SCADA"
        ]
      },
      {
        "client": "동아ST",
        "logo": "",
        "projects": [
          "송도공장 MES에 대한 CSV 변경관리"
        ],
        "systems": [
          "MES"
        ]
      },
      {
        "client": "파마리서치바이오",
        "logo": "",
        "projects": [
          "ERMS&SCADA System에 대한 CSV"
        ],
        "systems": [
          "ERMS",
          "SCADA"
        ]
      },
      {
        "client": "명문제약",
        "logo": "",
        "projects": [
          "향남공장 LIMS, QMS, EDMS에 대한 CSV"
        ],
        "systems": [
          "LIMS",
          "QMS",
          "EDMS"
        ]
      },
      {
        "client": "한국백신",
        "logo": "",
        "projects": [
          "안산공장 LIMS 및 LAS에 대한 CSV"
        ],
        "systems": [
          "LIMS",
          "LAS"
        ]
      },
      {
        "client": "한국비엔씨",
        "logo": "",
        "projects": [
          "LIMS&ELN&LAS에 대한 CSV"
        ],
        "systems": [
          "LIMS",
          "ELN",
          "LAS"
        ]
      },
      {
        "client": "프레스티지바이오로직스",
        "logo": "",
        "projects": [
          "SAP 변경에 따른 CSV"
        ],
        "systems": [
          "SAP"
        ]
      },
      {
        "client": "시지바이오",
        "logo": "",
        "projects": [
          "시지바이오 정제수 제조 및 분배시스템 CSV"
        ],
        "systems": [
          "정제수 제조 및 분배시스템"
        ]
      },
      {
        "client": "대웅바이오",
        "logo": "",
        "projects": [
          "세파항생제공장 RWS에 대한 CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "천안공장 ERMS에 대한 CSV 수행"
        ],
        "systems": [
          "ERMS"
        ]
      }
    ]
  },
  {
    "year": 2023,
    "clients": [
      {
        "client": "녹십자",
        "logo": "",
        "projects": [
          "오창공장 PBS에 대한 CSV",
          "WMS 변경에 따른 CSV 수행"
        ],
        "systems": [
          "PBS",
          "WMS"
        ]
      },
      {
        "client": "대한약품공업",
        "logo": "",
        "projects": [
          "LAS & EDMS등에 대한 CSV 수행"
        ],
        "systems": [
          "LAS",
          "EDMS"
        ]
      },
      {
        "client": "명인제약",
        "logo": "",
        "projects": [
          "제2공장 Yokagawa Recorder CSV"
        ],
        "systems": [
          "Yokagawa Recorder"
        ]
      },
      {
        "client": "서원엠에프지",
        "logo": "",
        "projects": [
          "N2라인 DQ, IQ, OQ (CSV포함)"
        ],
        "systems": [
          "N2라인"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "백업시스템 및 품질관리시스템에 대한 CSV 수행",
          "실험실정보 및 창고관리시스템 Upgrade에 대한 CSV 수행"
        ],
        "systems": [
          "백업시스템",
          "품질관리시스템",
          "실험실정보시스템",
          "창고관리시스템"
        ]
      },
      {
        "client": "삼양바이오팜",
        "logo": "",
        "projects": [
          "WFI 변경에 따른 CSV 수행"
        ],
        "systems": [
          "WFI"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "횡성공장&판교연구소 OpenLAB CDS 추가설치 기기에 대한 CSV"
        ],
        "systems": [
          "OpenLAB CDS"
        ]
      },
      {
        "client": "한국백신",
        "logo": "",
        "projects": [
          "안산공장 서버 이중화에 대한 CSV 수행"
        ],
        "systems": [
          "서버"
        ]
      },
      {
        "client": "이연제약",
        "logo": "",
        "projects": [
          "바이오공장 LIMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "RPBIO",
        "logo": "",
        "projects": [
          "RPBIO에 설치되는 성형기에 대한 Qualification&CSV 수행"
        ],
        "systems": [
          "성형기"
        ]
      },
      {
        "client": "휴온스바이오파마",
        "logo": "",
        "projects": [
          "WMS에 대한 CSV 수행"
        ],
        "systems": [
          "WMS"
        ]
      },
      {
        "client": "셀타스퀘어",
        "logo": "",
        "projects": [
          "SELTA-WAVE에 대한 CSV 수행",
          "LITUS(문헌검색시스템)에 대한 CSV 수행"
        ],
        "systems": [
          "SELTA-WAVE",
          "LITUS(문헌검색시스템)"
        ]
      },
      {
        "client": "연성정밀화학",
        "logo": "",
        "projects": [
          "BMS 변경에 따른 CSV 수행"
        ],
        "systems": [
          "BMS"
        ]
      },
      {
        "client": "프레스티지바이오",
        "logo": "",
        "projects": [
          "제1캠퍼스에 구축하는 LIMS에 대한 CSV 수행",
          "4공장 생산동 내 설비 CSV 수행",
          "4공장 QC장비 CSV 수행"
        ],
        "systems": [
          "LIMS",
          "생산동 설비",
          "QC장비"
        ]
      },
      {
        "client": "LG Chem",
        "logo": "",
        "projects": [
          "ISOLATOR 장비 2대에 대한 CSV"
        ],
        "systems": [
          "ISOLATOR"
        ]
      },
      {
        "client": "경보제약",
        "logo": "",
        "projects": [
          "ISOLATOR 장비 1대에 대한 CSV"
        ],
        "systems": [
          "ISOLATOR"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "일련번호바코드시스템 CSV"
        ],
        "systems": [
          "일련번호바코드시스템"
        ]
      },
      {
        "client": "메디톡스",
        "logo": "",
        "projects": [
          "오송 3공장 HPLC 시스템 CSV"
        ],
        "systems": [
          "HPLC"
        ]
      },
      {
        "client": "SK바이오사이언스",
        "logo": "",
        "projects": [
          "임상개발실 CTMS & eTMF 구축 CSV"
        ],
        "systems": [
          "CTMS",
          "eTMF"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "바코드 일련번호 AG 1식에 대한 CSV"
        ],
        "systems": [
          "바코드 일련번호 AG"
        ]
      }
    ]
  },
  {
    "year": 2022,
    "clients": [
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "제천공장 IT시스템에 대한 CSV 수행"
        ],
        "systems": [
          "IT시스템"
        ]
      },
      {
        "client": "동아ST",
        "logo": "",
        "projects": [
          "천안공장 EMS 변경에 따른 CSV 수행"
        ],
        "systems": [
          "EMS"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "횡성GMP공장 BMS System에 대한 CSV 수행"
        ],
        "systems": [
          "BMS"
        ]
      },
      {
        "client": "바이넥스",
        "logo": "",
        "projects": [
          "송도공장 ISOLATOR 1대에 대한 CSV",
          "송도공장 BMS System에 대한 CSV 수행"
        ],
        "systems": [
          "ISOLATOR",
          "BMS"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "문헌 검색 자동화시스템에 대한 CSV 수행"
        ],
        "systems": [
          "문헌 검색 자동화시스템"
        ]
      },
      {
        "client": "환인제약",
        "logo": "",
        "projects": [
          "안성 및 향남공장 LIMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "이연제약",
        "logo": "",
        "projects": [
          "충주공장에 구축하는 DPS에 대한 CSV 수행",
          "바코드 일련번호 출하관리시스템에 대한 CSV 수행",
          "충주공장 RWS에 대한 CSV PQ 수행",
          "타정기 및 캡슐충전기 CSV 수행"
        ],
        "systems": [
          "DPS",
          "바코드 일련번호 출하관리시스템",
          "RWS",
          "타정기",
          "캡슐충전기"
        ]
      },
      {
        "client": "태극제약",
        "logo": "",
        "projects": [
          "GMP공장에 구축하는 RWS에 대한 CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "블리스터 포장기에 대한 CSV 변경관리"
        ],
        "systems": [
          "블리스터 포장기"
        ]
      },
      {
        "client": "와이텍인터내셔널",
        "logo": "",
        "projects": [
          "유동층건조기 Qualification & CSV"
        ],
        "systems": [
          "유동층건조기"
        ]
      },
      {
        "client": "삼진제약",
        "logo": "",
        "projects": [
          "오송 ISOLATOR 1대에 대한 CSV 수행"
        ],
        "systems": [
          "ISOLATOR"
        ]
      },
      {
        "client": "서흥",
        "logo": "",
        "projects": [
          "오송1공장 F&P사업부 LIMS등에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "한국유니온제약",
        "logo": "",
        "projects": [
          "원주공장 LIMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "휴온스바이오파마",
        "logo": "",
        "projects": [
          "제천공장 QMS에 대한 CSV 수행"
        ],
        "systems": [
          "QMS"
        ]
      },
      {
        "client": "서울제약",
        "logo": "",
        "projects": [
          "오송공장 LIMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "한국백신",
        "logo": "",
        "projects": [
          "안산공장 LIMS에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "더유제약",
        "logo": "",
        "projects": [
          "타정기 CSV 수행"
        ],
        "systems": [
          "타정기"
        ]
      },
      {
        "client": "에스엔피제네틱스",
        "logo": "",
        "projects": [
          "BMS에 대한 CSV 수행"
        ],
        "systems": [
          "BMS"
        ]
      }
    ]
  },
  {
    "year": 2021,
    "clients": [
      {
        "client": "동아ST",
        "logo": "",
        "projects": [
          "천안 공장내용고형제동 자동창고 시스템 밸리데이션 용역",
          "천안공장 EMS SYSTEM CSV Validation"
        ],
        "systems": [
          "자동창고 시스템",
          "EMS"
        ]
      },
      {
        "client": "영진약품",
        "logo": "",
        "projects": [
          "남양, 전주공장에 구축하는 제조, 품질시스템에 대한 CSV 수행"
        ],
        "systems": [
          "제조시스템",
          "품질시스템"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "원부자재 보관 자동창고 구축 밸리데이션 용역"
        ],
        "systems": [
          "원부자재 보관 자동창고"
        ]
      },
      {
        "client": "프레스티지바이오로직스",
        "logo": "",
        "projects": [
          "오송공장 실험실정보관리시스템에 대한 CSV",
          "오송캠퍼스 자동창고 시스템 밸리데이션"
        ],
        "systems": [
          "LIMS",
          "자동창고 시스템"
        ]
      },
      {
        "client": "동성제약",
        "logo": "",
        "projects": [
          "NIR 컴퓨터시스템 밸리데이션"
        ],
        "systems": [
          "NIR 컴퓨터시스템"
        ]
      },
      {
        "client": "DHP Korea",
        "logo": "",
        "projects": [
          "오송공장 MDPS System에 대한 CSV 수행"
        ],
        "systems": [
          "MDPS System"
        ]
      },
      {
        "client": "유성에프에스",
        "logo": "",
        "projects": [
          "충전시스템 적격성평가 (CSV포함)"
        ],
        "systems": [
          "충전시스템"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "횡성 GMP공장 WMS에 대한 CSV 수행",
          "횡성공장 제조실행시스템에 대한 CSV 수행"
        ],
        "systems": [
          "WMS",
          "MES"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "마이크로바이옴 공장 설비 Qualification, CSV 수행"
        ],
        "systems": [
          "마이크로바이옴 공장 설비"
        ]
      },
      {
        "client": "환인제약",
        "logo": "",
        "projects": [
          "카톤인쇄라인 CSV"
        ],
        "systems": [
          "카톤인쇄라인"
        ]
      },
      {
        "client": "한국백신",
        "logo": "",
        "projects": [
          "바이오플랜트 EDMS 및 QMS 프로젝트 CSV 수행"
        ],
        "systems": [
          "EDMS",
          "QMS"
        ]
      },
      {
        "client": "한국프라임제약",
        "logo": "",
        "projects": [
          "RWS 장비 추가연동에 대한 CSV 변경관리 용역",
          "RWS 장비 추가연동에 대한 CSV 변경관리 용역 -PQ추가"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "존슨앤존슨",
        "logo": "",
        "projects": [
          "FB03 신규 로드셀 설치 관련 CSV"
        ],
        "systems": [
          "FB03 로드셀"
        ]
      },
      {
        "client": "이연제약",
        "logo": "",
        "projects": [
          "LIMS CSV 수행",
          "충주공장 RWS & AG에 대한 CSV 수행"
        ],
        "systems": [
          "LIMS",
          "RWS",
          "AG"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "다회용 점안제충전기 적격성평가 및 CSV"
        ],
        "systems": [
          "다회용 점안제충전기"
        ]
      },
      {
        "client": "이니바이오",
        "logo": "",
        "projects": [
          "바이알 충전라인 적격성평가 및 CSV"
        ],
        "systems": [
          "바이알 충전라인"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "시스템 변경에 따른 CSV 변경관리"
        ],
        "systems": [
          "시스템 변경에 따른 CSV 변경관리"
        ]
      },
      {
        "client": "삼일제약",
        "logo": "",
        "projects": [
          "QMS CSV 수행"
        ],
        "systems": [
          "QMS"
        ]
      },
      {
        "client": "휴온스바이오파마",
        "logo": "",
        "projects": [
          "EDMS CSV 수행"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "휴메딕스",
        "logo": "",
        "projects": [
          "EDMS CSV 수행"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "명인제약",
        "logo": "",
        "projects": [
          "EDMS CSV 수행"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "한국BMI",
        "logo": "",
        "projects": [
          "오송공장 BMS CSV"
        ],
        "systems": [
          "BMS"
        ]
      },
      {
        "client": "우정바이오",
        "logo": "",
        "projects": [
          "QUBE 장비 CSV"
        ],
        "systems": [
          "QUBE 장비"
        ]
      },
      {
        "client": "애니젠",
        "logo": "",
        "projects": [
          "장성공장 MRP시스템 CSV 수행"
        ],
        "systems": [
          "MRP"
        ]
      },
      {
        "client": "광동제약",
        "logo": "",
        "projects": [
          "GMP공장 실험실정보관리시스템에 대한 CSV수행"
        ],
        "systems": [
          "LIMS"
        ]
      }
    ]
  },
  {
    "year": 2020,
    "clients": [
      {
        "client": "아이큐어",
        "logo": "",
        "projects": [
          "MES 등에 대한 CSV 수행 (완주공장)",
          "완주공장 Agilent OpenLAB CDS 및 분석기기 연동에 대한 CSV 수행"
        ],
        "systems": [
          "MES",
          "Agilent OpenLAB CDS",
          "분석기기"
        ]
      },
      {
        "client": "jw홀딩스",
        "logo": "",
        "projects": [
          "시화공장 Legacy System에 대한 CSV"
        ],
        "systems": [
          "Legacy System"
        ]
      },
      {
        "client": "부광약품",
        "logo": "",
        "projects": [
          "RWS CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "대원제약",
        "logo": "",
        "projects": [
          "RWS CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "아주약품",
        "logo": "",
        "projects": [
          "평택공장 EDMS CSV 수행"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "영사이언스",
        "logo": "",
        "projects": [
          "미생물 실증지원센터와 종근당바이오에 설치하는 ISOLATOR에 대한 CSV"
        ],
        "systems": [
          "ISOLATOR"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "카톤인쇄기 CSV 수행",
          "LM, AG의 CSV 적격성평가 수행"
        ],
        "systems": [
          "카톤인쇄기",
          "LM",
          "AG"
        ]
      },
      {
        "client": "팩토리오토메이션",
        "logo": "",
        "projects": [
          "생산용 HPLC의 제어 PLC 교체에 대한 CSV"
        ],
        "systems": [
          "생산용 HPLC 제어 PLC"
        ]
      },
      {
        "client": "휴온스메디케어",
        "logo": "",
        "projects": [
          "부산공장 LIMS CSV 수행"
        ],
        "systems": [
          "LIMS"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "포장라인 장비 적격성평가(CSV 포함)"
        ],
        "systems": [
          "포장라인 장비"
        ]
      },
      {
        "client": "도미노코리아",
        "logo": "",
        "projects": [
          "CIBA VISION Print Manager CSV"
        ],
        "systems": [
          "CIBA VISION Print Manager"
        ]
      },
      {
        "client": "동성제약",
        "logo": "",
        "projects": [
          "적외선 분광 광도계에 대한 CSV"
        ],
        "systems": [
          "적외선 분광 광도계"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "생산2팀 정제2과 Daptomycin 설비 Qualification, CSV 수행"
        ],
        "systems": [
          "Daptomycin 설비"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "용인공장 백업 시스템에 대한 CSV 수행"
        ],
        "systems": [
          "백업시스템"
        ]
      },
      {
        "client": "한화제약",
        "logo": "",
        "projects": [
          "춘천공장 MRP 시스템에 대한 CSV 수행"
        ],
        "systems": [
          "MRP"
        ]
      },
      {
        "client": "삼일제약",
        "logo": "",
        "projects": [
          "안산공장 EDMS CSV 수행"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "횡성공장 QMS CSV 수행",
          "횡성공장 Agilent OpenLAB CDS 및 기기연동에 대한 CSV 수행"
        ],
        "systems": [
          "QMS",
          "Agilent OpenLAB CDS"
        ]
      }
    ]
  },
  {
    "year": 2019,
    "clients": [
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "첩부제 로터리 커팅기 DQ, IQ, OQ, CSV"
        ],
        "systems": [
          "첩부제 로터리 커팅기"
        ]
      },
      {
        "client": "유영제약",
        "logo": "",
        "projects": [
          "진공건조기 적격성평가(CSV 포함)"
        ],
        "systems": [
          "진공건조기"
        ]
      },
      {
        "client": "G2G 바이오",
        "logo": "",
        "projects": [
          "충전기 적격성평가(CSV 포함)"
        ],
        "systems": [
          "충전기"
        ]
      },
      {
        "client": "한국오츠카제약",
        "logo": "",
        "projects": [
          "향남공장 EDMS CSV"
        ],
        "systems": [
          "EDMS"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "제천공장 데이터 수집 및 관리 시스템에 대한 CSV"
        ],
        "systems": [
          "데이터 수집 및 관리 시스템"
        ]
      },
      {
        "client": "이수앱지스",
        "logo": "",
        "projects": [
          "실험정보관리시스템과 분석기기등에 연동하는 CSV",
          "LAS 타블릿 PC CSV"
        ],
        "systems": [
          "실험정보관리시스템",
          "분석기기",
          "LAS",
          "타블릿 PC"
        ]
      },
      {
        "client": "휴메딕스",
        "logo": "",
        "projects": [
          "제천공장 QMS CSV 수행"
        ],
        "systems": [
          "QMS"
        ]
      },
      {
        "client": "한국프라임제약",
        "logo": "",
        "projects": [
          "RWS CSV 수행"
        ],
        "systems": [
          "RWS"
        ]
      },
      {
        "client": "휴젤㈜",
        "logo": "",
        "projects": [
          "신북공장 EDMS 구축에 대한 CSV",
          "신북공장 Excel CSV"
        ],
        "systems": [
          "EDMS",
          "Excel"
        ]
      },
      {
        "client": "CKD Bio",
        "logo": "",
        "projects": [
          "건열멸균기(CSV포함)"
        ],
        "systems": [
          "건열멸균기"
        ]
      },
      {
        "client": "이니스트제약",
        "logo": "",
        "projects": [
          "세병기 적격성평가(CSV포함)"
        ],
        "systems": [
          "세병기"
        ]
      },
      {
        "client": "유니메드제약㈜",
        "logo": "",
        "projects": [
          "오송공장에 설치하는 바코드 시스템에 대한 CSV"
        ],
        "systems": [
          "바코드 시스템"
        ]
      }
    ]
  },
  {
    "year": 2017,
    "clients": [
      {
        "client": "우정BSC",
        "logo": "",
        "projects": [
          "Isolator CSV"
        ],
        "systems": [
          "ISOLATOR"
        ]
      }
    ]
  }
];
