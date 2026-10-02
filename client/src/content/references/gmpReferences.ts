import type { ReferenceYear } from "@/components/site/ReferenceYearTabs";

// 출처: (주)인팩트 2016 ~ 2026 Reference 2026.09.28.xls
// 표시된 원본 행 기준. 숨겨진 공통 과거 목록과 빈 행은 제외합니다.
// 개념설계 시트 우선, 나머지는 Project/Item의 CSV 표기로 분류합니다.
// 같은 연도·회사·프로젝트명은 화면용 목록에서 한 번만 표시합니다.
// projects는 원본 프로젝트명을 추적성 확인용으로 보존합니다.
// systems는 장비·시스템·시설명을 표시하며, 대상명을 분리하기 어려운 항목은 사용자 요청에 따라 원문을 유지합니다.
export const gmpReferenceYears: ReferenceYear[] = [
  {
    "year": 2026,
    "clients": [
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "성능적격성평가 수행",
          "반자동 로딩기 적격성평가"
        ],
        "systems": [
          "성능적격성평가 수행",
          "반자동 로딩기"
        ]
      },
      {
        "client": "가온이앤아이",
        "logo": "",
        "projects": [
          "제네톡스 조제실 크린부스 2대 적격성평가"
        ],
        "systems": [
          "조제실 클린부스"
        ]
      },
      {
        "client": "동방메디컬",
        "logo": "",
        "projects": [
          "라벨러 IQ, OQ 수행",
          "CaHA필러 Autoclave 열침투 테스트 수행",
          "반자동 분말충전기 적격성평가",
          "카토너 적격성평가"
        ],
        "systems": [
          "라벨러",
          "CaHA필러 Autoclave",
          "반자동 분말충전기",
          "카토너"
        ]
      },
      {
        "client": "대한뉴팜",
        "logo": "",
        "projects": [
          "믹싱&충진포장기 Qualification"
        ],
        "systems": [
          "믹싱 & 충진포장기"
        ]
      },
      {
        "client": "바이넥스",
        "logo": "",
        "projects": [
          "오송공장 리모델링에 따른 적격성평가 수행"
        ],
        "systems": [
          "오송공장"
        ]
      },
      {
        "client": "오가노이드사이언스",
        "logo": "",
        "projects": [
          "광명GMP센터 2026년 재적격성평가"
        ],
        "systems": [
          "광명 GMP센터"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "생산1팀 커머셜 생산라인 탈수실 적격성 평가"
        ],
        "systems": [
          "커머셜 생산라인 탈수실"
        ]
      },
      {
        "client": "머크",
        "logo": "",
        "projects": [
          "Clean Booth OQ Test",
          "대전 신 공장 자동창고 밸리데이션 개정 대응 사외용역"
        ],
        "systems": [
          "Clean Booth",
          "자동창고"
        ]
      },
      {
        "client": "한국BMI",
        "logo": "",
        "projects": [
          "Prefilled 밀대조립기 적격성평가"
        ],
        "systems": [
          "Prefilled 밀대조립기"
        ]
      },
      {
        "client": "셀론텍",
        "logo": "",
        "projects": [
          "Prefilled syringe 충전기 적격성평가",
          "추가 탈포기, 이동식 클린부스 IQ, OQ"
        ],
        "systems": [
          "Prefilled syringe 충전기",
          "탈포기",
          "이동식 클린부스"
        ]
      },
      {
        "client": "아이티켐",
        "logo": "",
        "projects": [
          "아이티켐 G/L 반응기 적격성평가"
        ],
        "systems": [
          "G/L 반응기"
        ]
      },
      {
        "client": "피알피사이언스",
        "logo": "",
        "projects": [
          "압축공기 밸리데이션 수행"
        ],
        "systems": [
          "압축공기"
        ]
      },
      {
        "client": "코오롱제약",
        "logo": "",
        "projects": [
          "역회전과립기 적격성평가"
        ],
        "systems": [
          "역회전과립기"
        ]
      },
      {
        "client": "신일제약",
        "logo": "",
        "projects": [
          "신규 포장라인 밸리데이션",
          "충주공장 LIMS 및 LAS데 대한 컴퓨터시스템 밸리데이션 수행"
        ],
        "systems": [
          "포장라인",
          "LIMS",
          "LAS"
        ]
      },
      {
        "client": "휴바이오켐",
        "logo": "",
        "projects": [
          "충주 GMP 공장 구축을 위한 개념설계"
        ],
        "systems": [
          "충주 GMP 공장"
        ]
      },
      {
        "client": "HK이노엔",
        "logo": "",
        "projects": [
          "대소공장 압축공기시스템 Qualification"
        ],
        "systems": [
          "압축공기시스템"
        ]
      },
      {
        "client": "지반",
        "logo": "",
        "projects": [
          "정남농협 압축공기 품질시험"
        ],
        "systems": [
          "압축공기"
        ]
      },
      {
        "client": "건일바이오팜",
        "logo": "",
        "projects": [
          "CO-Mill에 대한 적격성평가 수행"
        ],
        "systems": [
          "CO-Mill"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "거두공장 충전기상부 크린부스 적격성평가"
        ],
        "systems": [
          "충전기 상부 클린부스"
        ]
      },
      {
        "client": "삼성제약",
        "logo": "",
        "projects": [
          "증류수 포인트 변경작업 IQ, OQ"
        ],
        "systems": [
          "증류수 포인트"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "표적항암제 신규 제조소 밸리데이션 및 적격성평가"
        ],
        "systems": [
          "표적항암제 제조소"
        ]
      },
      {
        "client": "한동",
        "logo": "",
        "projects": [
          "SCB용 자동오버랩 설비 적격성평가 수행 용역"
        ],
        "systems": [
          "SCB용 자동오버랩 설비"
        ]
      },
      {
        "client": "트루킹",
        "logo": "",
        "projects": [
          "Autoclave 열 분포도 테스트 수행"
        ],
        "systems": [
          "Autoclave"
        ]
      },
      {
        "client": "jw홀딩스",
        "logo": "",
        "projects": [
          "슬리터 적격성평가 수행"
        ],
        "systems": [
          "슬리터"
        ]
      },
      {
        "client": "옵투스제약",
        "logo": "",
        "projects": [
          "2공장 조제시스템 등 SIP 수행",
          "2공장 Steam Quality Test"
        ],
        "systems": [
          "조제시스템",
          "Steam"
        ]
      },
      {
        "client": "삼양바이오팜 의약공장",
        "logo": "",
        "projects": [
          "질소 & 압축공기 품질시험 수행"
        ],
        "systems": [
          "질소",
          "압축공기"
        ]
      },
      {
        "client": "삼일제약",
        "logo": "",
        "projects": [
          "Steam Quality Test 수행"
        ],
        "systems": [
          "Steam"
        ]
      },
      {
        "client": "제일약품",
        "logo": "",
        "projects": [
          "이층정타정기 DQ 적격성평가 수행",
          "바이알 자동충전기 재적격성평가",
          "PQ Test 용역"
        ],
        "systems": [
          "이층정타정기",
          "바이알 자동충전기",
          "PQ Test 용역"
        ]
      },
      {
        "client": "제네웰",
        "logo": "",
        "projects": [
          "원주공장 Prefilled syringe 충전기 IQ, OQ"
        ],
        "systems": [
          "Prefilled syringe 충전기"
        ]
      },
      {
        "client": "제뉴원사이언스",
        "logo": "",
        "projects": [
          "리모델링공사 연고제 적격성평가"
        ],
        "systems": [
          "리모델링공사 연고제 적격성평가"
        ]
      },
      {
        "client": "명인제약",
        "logo": "",
        "projects": [
          "Pure Steam Generator DQ 적격성평가 수행",
          "오버홀 포장기 적격성평가 수행"
        ],
        "systems": [
          "Pure Steam Generator",
          "포장기"
        ]
      },
      {
        "client": "큐라티스",
        "logo": "",
        "projects": [
          "지하층 완제품 보관실 항온항습기 2대 적격성평가"
        ],
        "systems": [
          "완제품 보관실 항온항습기"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "생산본부 HVAC System Qualification"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "프레스티지바이오로직스",
        "logo": "",
        "projects": [
          "IDC 동물실험실 환경모니터링 수행"
        ],
        "systems": [
          "IDC 동물실험실"
        ]
      },
      {
        "client": "한국비엠아이",
        "logo": "",
        "projects": [
          "오송공장 생산장비 적격성평가 수행"
        ],
        "systems": [
          "생산장비"
        ]
      },
      {
        "client": "삼양바이오팜",
        "logo": "",
        "projects": [
          "완제H 합성 압축공기 및 질소 재적격성 평가 진행"
        ],
        "systems": [
          "압축공기",
          "질소"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "바이알 포장기 적격성평가 수행"
        ],
        "systems": [
          "바이알 포장기"
        ]
      },
      {
        "client": "LG화학",
        "logo": "",
        "projects": [
          "Clean Booth IQ, OQ 수행"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "한국유니온제약",
        "logo": "",
        "projects": [
          "압축공기시스템 적격성평가"
        ],
        "systems": [
          "압축공기시스템"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "바이알터널멸균기 PQ 수행"
        ],
        "systems": [
          "바이알터널멸균기"
        ]
      },
      {
        "client": "동국제약",
        "logo": "",
        "projects": [
          "헤파필터 PAO Test"
        ],
        "systems": [
          "헤파필터"
        ]
      },
      {
        "client": "에이피브이에스",
        "logo": "",
        "projects": [
          "Steam Quality test 용역"
        ],
        "systems": [
          "Steam"
        ]
      },
      {
        "client": "이연제약",
        "logo": "",
        "projects": [
          "충주공장 Refrigerator PQ 용역",
          "충주공장 Freezer PQ 용역"
        ],
        "systems": [
          "Refrigerator",
          "Freezer"
        ]
      }
    ]
  },
  {
    "year": 2025,
    "clients": [
      {
        "client": "포트노바",
        "logo": "",
        "projects": [
          "흄후드 적격성평가 수행",
          "원심분리기 등 장비 일체 재적격성평가"
        ],
        "systems": [
          "흄후드",
          "원심분리기"
        ]
      },
      {
        "client": "동방에프티엘",
        "logo": "",
        "projects": [
          "생산장비 3차 적격성평가 수행 (장비47ea)",
          "반응기 및 건조기 적격성평가",
          "신규3공장 생산장비 적격성평가",
          "수처리시스템 및 정제수제조장치 적격성평가"
        ],
        "systems": [
          "생산장비",
          "반응기",
          "건조기",
          "수처리시스템",
          "정제수제조장치"
        ]
      },
      {
        "client": "한얼이엔씨",
        "logo": "",
        "projects": [
          "우즈베키스탄 제약시설 건립사업 개념설계"
        ],
        "systems": [
          "우즈베키스탄 제약시설"
        ]
      },
      {
        "client": "코미팜",
        "logo": "",
        "projects": [
          "터널멸균기 PAO Test & 열분포 시험",
          "터널멸균기 PAO, 열분포 시험 수행"
        ],
        "systems": [
          "터널멸균기"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "점안제 2라인 라인카톤프린터 Qualification",
          "2025년도 HVAC System Qualification 수행"
        ],
        "systems": [
          "점안제 2라인 라인카톤프린터",
          "HVAC System"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "정제타정기, 정제자동선별기 적격성평가",
          "코팅 솔루션 탱크 적격성평가 수행"
        ],
        "systems": [
          "정제타정기",
          "정제자동선별기",
          "코팅 솔루션 탱크"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "세척기 DQ, SAT, IQ, OQ"
        ],
        "systems": [
          "세척기"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "HVAC 3ea, 압축공기, 원료대기실, 생산장비50ea",
          "건열멸균기 성능 적격성평가 수행"
        ],
        "systems": [
          "HVAC",
          "압축공기",
          "원료대기실",
          "생산장비",
          "건열멸균기"
        ]
      },
      {
        "client": "피알피싸이언스",
        "logo": "",
        "projects": [
          "조제탱크 10, 20, 70리터 적격성평가 수행"
        ],
        "systems": [
          "조제탱크(10L·20L·70L)"
        ]
      },
      {
        "client": "대성미생물",
        "logo": "",
        "projects": [
          "PAO, 열분포 시험 수행"
        ],
        "systems": [
          "PAO, 열분포 시험 수행"
        ]
      },
      {
        "client": "한국팜비오",
        "logo": "",
        "projects": [
          "조제실 AHU, IQ, OQ 수행",
          "공조기 밸리데이션"
        ],
        "systems": [
          "조제실 AHU",
          "공조기"
        ]
      },
      {
        "client": "LG화학",
        "logo": "",
        "projects": [
          "유바이오로직스 반응기 및 장비에 대한 밸리데이션 수행"
        ],
        "systems": [
          "반응기",
          "장비"
        ]
      },
      {
        "client": "대한뉴팜",
        "logo": "",
        "projects": [
          "건조기 2ea DQ, IQ, OQ 수행"
        ],
        "systems": [
          "건조기"
        ]
      },
      {
        "client": "디케이컨설턴츠",
        "logo": "",
        "projects": [
          "키르기스스탄 제약시설 건립사업 타당성조사"
        ],
        "systems": [
          "키르기스스탄 제약시설"
        ]
      },
      {
        "client": "머크",
        "logo": "",
        "projects": [
          "대전 신센터 자동화 밸리데이션"
        ],
        "systems": [
          "대전 신센터"
        ]
      },
      {
        "client": "오스템파마",
        "logo": "",
        "projects": [
          "오송공장 멸균기에 대한 PQ 수행",
          "압축공기 및 N2시스템에 대한 PQ 수행"
        ],
        "systems": [
          "멸균기",
          "압축공기",
          "N2시스템"
        ]
      },
      {
        "client": "제네톡스",
        "logo": "",
        "projects": [
          "클린부스 및 패스스로우 적격성평가"
        ],
        "systems": [
          "클린부스",
          "패스스로우"
        ]
      },
      {
        "client": "동방메디컬",
        "logo": "",
        "projects": [
          "CB Validation",
          "바이알충전기 적격성평가 수행",
          "건열건조기 적격성평가 수행",
          "미립구 제조설비 적격성평가"
        ],
        "systems": [
          "CB",
          "바이알충전기",
          "건열건조기",
          "미립구 제조설비"
        ]
      },
      {
        "client": "이글벳",
        "logo": "",
        "projects": [
          "주사제라인 리모델링 개념설계",
          "튜브충전기 적격성평가"
        ],
        "systems": [
          "주사제라인",
          "튜브충전기"
        ]
      },
      {
        "client": "태인에프엔씨",
        "logo": "",
        "projects": [
          "2L 혼합기 IQ, OQ 수행"
        ],
        "systems": [
          "2L 혼합기"
        ]
      },
      {
        "client": "셀루메드",
        "logo": "",
        "projects": [
          "반자동 Prefilled syringe 충전기 적격성평가"
        ],
        "systems": [
          "반자동 Prefilled syringe 충전기"
        ]
      },
      {
        "client": "대한약품",
        "logo": "",
        "projects": [
          "수액 Bag 충전기 적격성평가",
          "투석액라인 세척, 충전, 캡핑기 적격성평가"
        ],
        "systems": [
          "수액 Bag 충전기",
          "투석액라인 세척기",
          "투석액라인 충전기",
          "투석액라인 캡핑기"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "멸균기, 건조기 적격성평가",
          "조제탱크 IQ, OQ",
          "1층 점안제 PCS 교체 변경 검증 수행",
          "멸균기 및 건조기 적격성평가(매입)",
          "용인공장 4층 산재포장라인 변경에 따른 적격성 평가 수행",
          "용인공장 포장라인 이전에 따른 적격성 평가 수행"
        ],
        "systems": [
          "멸균기",
          "건조기",
          "조제탱크",
          "점안제 PCS",
          "산재포장라인",
          "포장라인"
        ]
      },
      {
        "client": "메디톡스",
        "logo": "",
        "projects": [
          "2공장 IQ, OQ 밸리데이션"
        ],
        "systems": [
          "2공장"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "바이알터널멸균기 PQ 수행"
        ],
        "systems": [
          "바이알터널멸균기"
        ]
      },
      {
        "client": "필앤팩코리아",
        "logo": "",
        "projects": [
          "실피덴트 탈포기 IQ, OQ 수행"
        ],
        "systems": [
          "실피덴트 탈포기"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "생산1팀 Rifaximin 생산시설 구축에 따른 밸리데이션 수행",
          "예산공장 사이트 확장 구축에 따른 밸리데이션 수행",
          "예산공장 정제수 제조 시스템 재적격성 평가 수행",
          "안산공장 라벨기에 대한 적격성 평가"
        ],
        "systems": [
          "Rifaximin 생산시설",
          "예산공장",
          "정제수 제조 시스템",
          "라벨기"
        ]
      },
      {
        "client": "jw홀딩스",
        "logo": "",
        "projects": [
          "TF라인 Wrapping Machine 적격성평가"
        ],
        "systems": [
          "TF라인 Wrapping Machine"
        ]
      },
      {
        "client": "유바이오로직스",
        "logo": "",
        "projects": [
          "V플랜트 CIP SKID System에 대한 적격성 평가"
        ],
        "systems": [
          "CIP SKID System"
        ]
      },
      {
        "client": "지엘파마",
        "logo": "",
        "projects": [
          "2,3층 제조소 리모델링 공사 밸리데이션"
        ],
        "systems": [
          "2·3층 제조소"
        ]
      },
      {
        "client": "신풍제약",
        "logo": "",
        "projects": [
          "오송공장 EDI 교체 적격성평가"
        ],
        "systems": [
          "EDI"
        ]
      },
      {
        "client": "엔테로바이옴",
        "logo": "",
        "projects": [
          "드럼믹서 IQ, OQ"
        ],
        "systems": [
          "드럼믹서"
        ]
      },
      {
        "client": "에이엔팩",
        "logo": "",
        "projects": [
          "바이알 충전&고무전타전기 적격성평가 수행"
        ],
        "systems": [
          "바이알 충전 & 고무전타전기"
        ]
      },
      {
        "client": "플라리트",
        "logo": "",
        "projects": [
          "의료기기 공조시설 적격성평가"
        ],
        "systems": [
          "의료기기 공조시설"
        ]
      },
      {
        "client": "알리코제약",
        "logo": "",
        "projects": [
          "공조시스템 IQ, OQ수행"
        ],
        "systems": [
          "공조시스템"
        ]
      },
      {
        "client": "삼양홀딩스",
        "logo": "",
        "projects": [
          "완제H 원료 압축공기 및 질소 재적격성평가"
        ],
        "systems": [
          "압축공기",
          "질소"
        ]
      },
      {
        "client": "기찬바이오텍",
        "logo": "",
        "projects": [
          "세병기 밸리데이션 수행"
        ],
        "systems": [
          "세병기"
        ]
      },
      {
        "client": "한국비엔씨",
        "logo": "",
        "projects": [
          "세종공장 공조기 2대 IQ, OQ",
          "냉장창고 IQ, OQ"
        ],
        "systems": [
          "공조기",
          "냉장창고"
        ]
      },
      {
        "client": "CG바이오",
        "logo": "",
        "projects": [
          "Steam Quality Test 수행"
        ],
        "systems": [
          "Steam"
        ]
      },
      {
        "client": "옵투스제약",
        "logo": "",
        "projects": [
          "2공장 제조지원설비 및 보관소 밸리데이션 수행"
        ],
        "systems": [
          "제조지원설비",
          "보관소"
        ]
      },
      {
        "client": "휴온스생명과학",
        "logo": "",
        "projects": [
          "생산설비 구축 밸리데이션 개념설계"
        ],
        "systems": [
          "생산설비"
        ]
      },
      {
        "client": "셀론텍",
        "logo": "",
        "projects": [
          "과산화수소멸균챔버 적격성평가"
        ],
        "systems": [
          "과산화수소멸균챔버"
        ]
      },
      {
        "client": "종근당바이오 예산공장",
        "logo": "",
        "projects": [
          "정제수 제조 시스템 재적격성 평가 수행"
        ],
        "systems": [
          "정제수 제조 시스템"
        ]
      },
      {
        "client": "인벤티지랩",
        "logo": "",
        "projects": [
          "제조지원설비 적격성평가"
        ],
        "systems": [
          "제조지원설비"
        ]
      },
      {
        "client": "프레스티지바이오",
        "logo": "",
        "projects": [
          "Mpower 인터페이스에 따른 변경 관리"
        ],
        "systems": [
          "Mpower"
        ]
      },
      {
        "client": "SK에코플랜트",
        "logo": "",
        "projects": [
          "저온실 온도 Mapping 수행"
        ],
        "systems": [
          "저온실"
        ]
      },
      {
        "client": "태준제ㅑㅇㄱ",
        "logo": "",
        "projects": [
          "PUPSIT System 도입에 따른 밸리데이션 수행"
        ],
        "systems": [
          "PUPSIT System"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "외조기 설치에 따른 밸리데이션 수행"
        ],
        "systems": [
          "외조기"
        ]
      }
    ]
  },
  {
    "year": 2024,
    "clients": [
      {
        "client": "동아제약",
        "logo": "",
        "projects": [
          "가그린 충전시스템 PQ"
        ],
        "systems": [
          "가그린 충전시스템"
        ]
      },
      {
        "client": "피알피사이언스",
        "logo": "",
        "projects": [
          "동결건조기 적격성평가",
          "클린룸 Re-Qualification 수행"
        ],
        "systems": [
          "동결건조기",
          "클린룸"
        ]
      },
      {
        "client": "콜마 BNH",
        "logo": "",
        "projects": [
          "캡핑기 IQ, OQ"
        ],
        "systems": [
          "캡핑기"
        ]
      },
      {
        "client": "GC녹십자",
        "logo": "",
        "projects": [
          "오창공장 라벨러 밸리데이션"
        ],
        "systems": [
          "라벨러"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "마르키지니 연고충전기 밸리데이션 진행",
          "캠카토너 밸리데이션 진행",
          "CAM 포장기, 24열 계수기 적격성평가",
          "캡슐충전기 적격성평가",
          "호모게나이저 적격성평가",
          "포장라인 라벨러 적격성평가"
        ],
        "systems": [
          "마르키지니 연고충전기",
          "캠카토너",
          "CAM 포장기",
          "24열 계수기",
          "캡슐충전기",
          "호모게나이저",
          "포장라인 라벨러"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "오송공장 Mixer 적격성평가",
          "나보타3공장 Steam Quality Test"
        ],
        "systems": [
          "Mixer",
          "Steam"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "조제탱크 재적격성평가"
        ],
        "systems": [
          "조제탱크"
        ]
      },
      {
        "client": "동화약품",
        "logo": "",
        "projects": [
          "타정기 DQ"
        ],
        "systems": [
          "타정기"
        ]
      },
      {
        "client": "한국팜비오",
        "logo": "",
        "projects": [
          "액포장설비 밸리데이션",
          "수액 Bag 충전라인 적격성평가"
        ],
        "systems": [
          "액포장설비",
          "수액 Bag 충전라인"
        ]
      },
      {
        "client": "파마코스텍",
        "logo": "",
        "projects": [
          "반응기 적격성평가"
        ],
        "systems": [
          "반응기"
        ]
      },
      {
        "client": "보란파마",
        "logo": "",
        "projects": [
          "스페인 prefilled syringe 충전기 적격성평가"
        ],
        "systems": [
          "Prefilled syringe 충전기"
        ]
      },
      {
        "client": "삼아제약",
        "logo": "",
        "projects": [
          "파워밀에 대한 적격성평가"
        ],
        "systems": [
          "파워밀"
        ]
      },
      {
        "client": "이레파마텍",
        "logo": "",
        "projects": [
          "튜브충전기 적격성평가 수행"
        ],
        "systems": [
          "튜브충전기"
        ]
      },
      {
        "client": "유한양행",
        "logo": "",
        "projects": [
          "적격성평가"
        ],
        "systems": [
          "적격성평가"
        ]
      },
      {
        "client": "더유제약",
        "logo": "",
        "projects": [
          "적격성평가"
        ],
        "systems": [
          "적격성평가"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "2024년도 HVAC system PQ"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "JW중외신약",
        "logo": "",
        "projects": [
          "연고포장기 밸리데이션 수행"
        ],
        "systems": [
          "연고포장기"
        ]
      },
      {
        "client": "대원제약",
        "logo": "",
        "projects": [
          "진천공장 물류관리 및 연계시스템에 대한 밸리데이션 수행"
        ],
        "systems": [
          "물류관리 및 연계시스템"
        ]
      },
      {
        "client": "신일제약",
        "logo": "",
        "projects": [
          "도포기 Qualification"
        ],
        "systems": [
          "도포기"
        ]
      },
      {
        "client": "엘앤씨바이오",
        "logo": "",
        "projects": [
          "코팅기에 대한 적격성평가 수행"
        ],
        "systems": [
          "코팅기"
        ]
      },
      {
        "client": "브레인텍",
        "logo": "",
        "projects": [
          "생산E동 HVAC System에 대한 적격성평가"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "퀀타매트릭스",
        "logo": "",
        "projects": [
          "HVAC System 17F & 20F PQ 수행"
        ],
        "systems": [
          "HVAC System(17F·20F)"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "반제품보관실 적격성평가"
        ],
        "systems": [
          "반제품보관실"
        ]
      },
      {
        "client": "제노스",
        "logo": "",
        "projects": [
          "HVAC System PQ, 압축공기 IQ, OQ 수행",
          "Steam Quality Test 수행"
        ],
        "systems": [
          "HVAC System",
          "압축공기",
          "Steam"
        ]
      },
      {
        "client": "삼양홀딩스",
        "logo": "",
        "projects": [
          "압축공기, 질소 Requalification"
        ],
        "systems": [
          "압축공기",
          "질소"
        ]
      },
      {
        "client": "덕산",
        "logo": "",
        "projects": [
          "분쇄기 IQ, OQ"
        ],
        "systems": [
          "분쇄기"
        ]
      },
      {
        "client": "그린백신실증지원센터",
        "logo": "",
        "projects": [
          "제조시설 GMP 컨설팅",
          "제조시설 GMP 컨설팅(매입)"
        ],
        "systems": [
          "제조시설"
        ]
      },
      {
        "client": "대한뉴팜",
        "logo": "",
        "projects": [
          "믹싱포장기 DQ, IQ, OQ"
        ],
        "systems": [
          "믹싱포장기"
        ]
      },
      {
        "client": "보령제약",
        "logo": "",
        "projects": [
          "3면 포장기 밸리데이션"
        ],
        "systems": [
          "3면 포장기"
        ]
      },
      {
        "client": "코오롱제약",
        "logo": "",
        "projects": [
          "트위스트 스크린 DQ, IQ, OQ 수행"
        ],
        "systems": [
          "트위스트 스크린"
        ]
      },
      {
        "client": "일동제약",
        "logo": "",
        "projects": [
          "안성공장 OFU 변경에 따른 적격성평가 수행"
        ],
        "systems": [
          "OFU"
        ]
      },
      {
        "client": "승일",
        "logo": "",
        "projects": [
          "음성사업장 압축공기 시스템 성능 적격성평가"
        ],
        "systems": [
          "압축공기 시스템"
        ]
      },
      {
        "client": "삼양홀딩스 의약공장",
        "logo": "",
        "projects": [
          "일반용역계약서"
        ],
        "systems": [
          "일반용역계약서"
        ]
      },
      {
        "client": "옵투스제약",
        "logo": "",
        "projects": [
          "오송2공장 신축공사 밸리데이션 용역"
        ],
        "systems": [
          "오송2공장"
        ]
      },
      {
        "client": "삼진제약",
        "logo": "",
        "projects": [
          "향남공장 칭량부스 2대 적격성평가"
        ],
        "systems": [
          "칭량부스"
        ]
      },
      {
        "client": "일성기공",
        "logo": "",
        "projects": [
          "전기히터건조기 IQ,OQ 수행"
        ],
        "systems": [
          "전기히터건조기"
        ]
      },
      {
        "client": "jw홀딩스",
        "logo": "",
        "projects": [
          "TF6, 6-1 라인 분리공사 적격성평가 수행"
        ],
        "systems": [
          "TF6·6-1 라인"
        ]
      },
      {
        "client": "선진뷰티사이언스",
        "logo": "",
        "projects": [
          "장항공장 공조시스템 적격성평가"
        ],
        "systems": [
          "공조시스템"
        ]
      }
    ]
  },
  {
    "year": 2023,
    "clients": [
      {
        "client": "경보제약",
        "logo": "",
        "projects": [
          "주사 1,2공장 생산장비 재적격성평가"
        ],
        "systems": [
          "주사 1·2공장 생산장비"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "알캡프린터 및 바이알정렬기 IOQ"
        ],
        "systems": [
          "알캡프린터",
          "바이알정렬기"
        ]
      },
      {
        "client": "메디스턴",
        "logo": "",
        "projects": [
          "완제의약품 구강용해필름라인 GMP 시설 개념설계"
        ],
        "systems": [
          "구강용해필름라인 GMP 시설"
        ]
      },
      {
        "client": "삼진제약",
        "logo": "",
        "projects": [
          "오송공장 Clean Unit에 대한 성능 적격성평가 수행"
        ],
        "systems": [
          "Clean Unit"
        ]
      },
      {
        "client": "삼성바이오로직스",
        "logo": "",
        "projects": [
          "MB 6대 IQ, OQ"
        ],
        "systems": [
          "MB"
        ]
      },
      {
        "client": "에이프로젠바이오로직스",
        "logo": "",
        "projects": [
          "검체채취부스 적격성평가"
        ],
        "systems": [
          "검체채취부스"
        ]
      },
      {
        "client": "국전약품",
        "logo": "",
        "projects": [
          "신축공사 - 공조, 냉장창 밸리데이션",
          "관리동 공조설비공사 - 공조/냉장창고 밸리데이션"
        ],
        "systems": [
          "공조",
          "냉장창",
          "냉장창고"
        ]
      },
      {
        "client": "피알피사이언스",
        "logo": "",
        "projects": [
          "충전라인 DQ, IQ, OQ"
        ],
        "systems": [
          "충전라인"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "2023년도 HVAC system PQ 수행"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "우정바이오",
        "logo": "",
        "projects": [
          "MD헬스케어 패스박스 IQ, OQ"
        ],
        "systems": [
          "패스박스"
        ]
      },
      {
        "client": "디엔엠코퍼레이션",
        "logo": "",
        "projects": [
          "다이노밀 ML 적격성평가 수행"
        ],
        "systems": [
          "다이노밀 ML"
        ]
      },
      {
        "client": "엔지켐생명과학",
        "logo": "",
        "projects": [
          "핀밀 적격성평가 수행"
        ],
        "systems": [
          "핀밀"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "고정스캔 AG 밸리데이션",
          "고정스캔 LM, AG 밸리데이션"
        ],
        "systems": [
          "고정스캔 AG",
          "고정스캔 LM"
        ]
      },
      {
        "client": "큐러블",
        "logo": "",
        "projects": [
          "Pilot 합성장비 적격성평가 수행"
        ],
        "systems": [
          "Pilot 합성장비"
        ]
      },
      {
        "client": "동방에프티엘",
        "logo": "",
        "projects": [
          "수처리시스템 적격성평가"
        ],
        "systems": [
          "수처리시스템"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "바이알터널멸균기 PQ"
        ],
        "systems": [
          "바이알터널멸균기"
        ]
      },
      {
        "client": "한국비엔씨",
        "logo": "",
        "projects": [
          "공조기 기류, 청정도 회복시험"
        ],
        "systems": [
          "공조기"
        ]
      },
      {
        "client": "알리코제약",
        "logo": "",
        "projects": [
          "금속검출기 적격성평가",
          "진천공장 AHU System에 대한 성능적격성평가"
        ],
        "systems": [
          "금속검출기",
          "AHU System"
        ]
      },
      {
        "client": "쿼드메디슨",
        "logo": "",
        "projects": [
          "쿼드메디슨 볼피터3대에 대한 적격성평가"
        ],
        "systems": [
          "볼피터"
        ]
      },
      {
        "client": "화일약품",
        "logo": "",
        "projects": [
          "린룸 HVAC System Qualification"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "일동제약",
        "logo": "",
        "projects": [
          "압축공기 제조시스템 DQ, IQ, OQ"
        ],
        "systems": [
          "압축공기 제조시스템"
        ]
      },
      {
        "client": "LG화학",
        "logo": "",
        "projects": [
          "익산공장 다이노밀 IQ, OQ"
        ],
        "systems": [
          "다이노밀"
        ]
      },
      {
        "client": "포트노바",
        "logo": "",
        "projects": [
          "BSC 및 Incubator에 대한 적격성 평가 수행"
        ],
        "systems": [
          "BSC",
          "Incubator"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "칭량실 AHU&칭량부스&보관소에 대한 적격성평가"
        ],
        "systems": [
          "칭량실 AHU",
          "칭량부스",
          "보관소"
        ]
      },
      {
        "client": "신일제약",
        "logo": "",
        "projects": [
          "패취라인 밸리데이션 수행"
        ],
        "systems": [
          "패취라인"
        ]
      },
      {
        "client": "제이피케어즈",
        "logo": "",
        "projects": [
          "공조시스템 적격성평가"
        ],
        "systems": [
          "공조시스템"
        ]
      },
      {
        "client": "바이오360",
        "logo": "",
        "projects": [
          "천안공장 동물용의약품 제조시설 장비 및 지원설비 밸리데이션"
        ],
        "systems": [
          "동물용의약품 제조시설 장비",
          "지원설비"
        ]
      },
      {
        "client": "파마코스텍",
        "logo": "",
        "projects": [
          "반응기 적격성평가"
        ],
        "systems": [
          "반응기"
        ]
      },
      {
        "client": "휴메딕스",
        "logo": "",
        "projects": [
          "1공장 클린부스 2대 IQ, OQ",
          "1공장 공조설비 밸리데이션",
          "1공장 방폭 리모델링 HA 1라인, HA 2라인 재밸리데이션",
          "용수 적격성평가 수행"
        ],
        "systems": [
          "클린부스",
          "공조설비",
          "HA 1라인",
          "HA 2라인",
          "용수"
        ]
      },
      {
        "client": "가온이앤아이",
        "logo": "",
        "projects": [
          "IMCD 화성현장 HVAC 시스템 적격성평가"
        ],
        "systems": [
          "HVAC 시스템"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "나보타공장 수처리 시스템 밸리데이션 수행",
          "수은분석기 컴퓨터화 시스템 밸리데이션"
        ],
        "systems": [
          "수처리 시스템",
          "수은분석기 컴퓨터화 시스템"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "옥외저장소에 대한 적격성평가 수행"
        ],
        "systems": [
          "옥외저장소"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "점안제 3층 신규시스템 Qualification , Autoclave IQ, OQ",
          "점안제 1층 오토밸브 변경 밸리데이션",
          "신규 조제실 밸리데이션"
        ],
        "systems": [
          "점안제 3층 신규시스템",
          "Autoclave",
          "점안제 오토밸브",
          "조제실"
        ]
      },
      {
        "client": "프레스티지바이오",
        "logo": "",
        "projects": [
          "1공장 Mixer에 대한 재 적격성평가"
        ],
        "systems": [
          "Mixer"
        ]
      },
      {
        "client": "대홪에ㅑㄱ",
        "logo": "",
        "projects": [
          "횡성공장 포장장비 밸리데이션"
        ],
        "systems": [
          "포장장비"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "용인 바이알 이물검사기 밸리데이션"
        ],
        "systems": [
          "바이알 이물검사기"
        ]
      }
    ]
  },
  {
    "year": 2022,
    "clients": [
      {
        "client": "보령제약",
        "logo": "",
        "projects": [
          "안산공장에 설치하는 라벨러 1대에 대한 밸리데이션"
        ],
        "systems": [
          "라벨러"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "송도2공장에 설치하는 바이알 라벨러 1대에 대한 밸리데이션"
        ],
        "systems": [
          "바이알 라벨러"
        ]
      },
      {
        "client": "프레스",
        "logo": "",
        "projects": [
          "오송공장에 설치하는 라벨러 1대에 대한 밸리데이션"
        ],
        "systems": [
          "라벨러"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "습포제 절단 포장기 밸리데이션",
          "첩부제 도포기 2호기 밸리데이션"
        ],
        "systems": [
          "습포제 절단 포장기",
          "첩부제 도포기 2호기"
        ]
      },
      {
        "client": "제노스",
        "logo": "",
        "projects": [
          "무균주사제 공장 QMS 2차 컨설팅"
        ],
        "systems": [
          "무균주사제 공장 QMS"
        ]
      },
      {
        "client": "삼양홀딩스",
        "logo": "",
        "projects": [
          "의약공장 UHT System 밸리데이션 수행",
          "MD공장 QC장비 GAP 분석 수행"
        ],
        "systems": [
          "UHT System",
          "QC장비"
        ]
      },
      {
        "client": "케어젠",
        "logo": "",
        "projects": [
          "원료의약품 공장 QMS 컨설팅"
        ],
        "systems": [
          "원료의약품 공장 QMS"
        ]
      },
      {
        "client": "DHP Korea",
        "logo": "",
        "projects": [
          "오송공장 PSG, WFI 적격성평가"
        ],
        "systems": [
          "PSG",
          "WFI"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "천안공장 공조기 적격성평가",
          "세파동 배양룸 적격성평가"
        ],
        "systems": [
          "공조기",
          "세파동 배양룸"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "2022년도 HVAC System PQ",
          "점안제 신규 3라인 Aggrigation System Qualification"
        ],
        "systems": [
          "HVAC System",
          "점안제 3라인 Aggrigation System"
        ]
      },
      {
        "client": "제네톡스",
        "logo": "",
        "projects": [
          "횡성공장 카토너 1식에 대한 밸리데이션 수행"
        ],
        "systems": [
          "카토너"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "생산기획팀, 생산2팀 제조시설 공조기 재적격성평가"
        ],
        "systems": [
          "제조시설 공조기"
        ]
      },
      {
        "client": "한국비엔씨",
        "logo": "",
        "projects": [
          "분자증류장치 적격성평가",
          "V-Mixer 적격성평가"
        ],
        "systems": [
          "분자증류장치",
          "V-Mixer"
        ]
      },
      {
        "client": "세일기연",
        "logo": "",
        "projects": [
          "라벨유무 검사비젼 밸리데이션"
        ],
        "systems": [
          "라벨유무 검사비젼"
        ]
      },
      {
        "client": "에스엔피제네틱스",
        "logo": "",
        "projects": [
          "RNA 합성 GMP시설 개념설계 및 적격성평가"
        ],
        "systems": [
          "RNA 합성 GMP시설"
        ]
      },
      {
        "client": "동국생명과학",
        "logo": "",
        "projects": [
          "안성공장 정제수 시스템 보완공사"
        ],
        "systems": [
          "정제수 시스템"
        ]
      },
      {
        "client": "제뉴원사이언스",
        "logo": "",
        "projects": [
          "일련번호 포장 어그리게이션 시스템 4대 구축 건"
        ],
        "systems": [
          "일련번호 포장 어그리게이션 시스템"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "포장라인 신설에 따른 적격성평가"
        ],
        "systems": [
          "포장라인"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "신북공장 파마코드 리더기 밸리데이션 수행"
        ],
        "systems": [
          "파마코드 리더기"
        ]
      },
      {
        "client": "엘앤씨바이오",
        "logo": "",
        "projects": [
          "안성공장 장비 적격성평가 및 DI 컨설팅 수행"
        ],
        "systems": [
          "장비"
        ]
      },
      {
        "client": "영일제약",
        "logo": "",
        "projects": [
          "파우치팩포장기 밸리데이션 수행"
        ],
        "systems": [
          "파우치팩포장기"
        ]
      },
      {
        "client": "한국비엠아이",
        "logo": "",
        "projects": [
          "mRNA원액라인 GMP 공사 밸리데이션",
          "Steam Quality Test"
        ],
        "systems": [
          "mRNA원액라인",
          "Steam"
        ]
      },
      {
        "client": "제뉴파마",
        "logo": "",
        "projects": [
          "로봇투입장치 밸리데이션 수행"
        ],
        "systems": [
          "로봇투입장치"
        ]
      },
      {
        "client": "삼진제약",
        "logo": "",
        "projects": [
          "앰퓰 및 바이알 충전라인 내 클린부스 적격성평가",
          "분말충전기 클린부스에 대한 적격성평가 수행",
          "오송공장 제조장비 적격성평가"
        ],
        "systems": [
          "앰퓰 및 바이알 충전라인 클린부스",
          "분말충전기 클린부스",
          "제조장비"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "연구소 내 동결건조기 성능적격성평가"
        ],
        "systems": [
          "동결건조기"
        ]
      },
      {
        "client": "오송첨단의료산업진흥재단",
        "logo": "",
        "projects": [
          "VHP 멸균사이클 개발 계획서 수행 및 보고서"
        ],
        "systems": [
          "VHP 멸균사이클 개발 계획서 수행 및 보고서"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "칭량부스 Re-Qualification"
        ],
        "systems": [
          "칭량부스"
        ]
      },
      {
        "client": "오스코리아제약",
        "logo": "",
        "projects": [
          "액충전, 캡실링기 적격성평가"
        ],
        "systems": [
          "액충전기",
          "캡실링기"
        ]
      },
      {
        "client": "GC녹십자",
        "logo": "",
        "projects": [
          "바이알세척기 적격성평가"
        ],
        "systems": [
          "바이알세척기"
        ]
      },
      {
        "client": "천혜당제약",
        "logo": "",
        "projects": [
          "컴퓨터 시스템 밸리데이션 및 데이터 무결성 컨설팅"
        ],
        "systems": [
          "컴퓨터 시스템"
        ]
      },
      {
        "client": "피알피사이언스",
        "logo": "",
        "projects": [
          "동결건조라인 개념설계"
        ],
        "systems": [
          "동결건조라인"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "360도 AG 및 LM 변경관리"
        ],
        "systems": [
          "360도 AG",
          "LM"
        ]
      },
      {
        "client": "경보제약",
        "logo": "",
        "projects": [
          "합성1공장 및 2공장 생산장비 재적격성평가"
        ],
        "systems": [
          "합성1·2공장 생산장비"
        ]
      },
      {
        "client": "휴온스바이오파마",
        "logo": "",
        "projects": [
          "백업시스템에 대한 컴퓨터시스템 밸리데이션"
        ],
        "systems": [
          "백업시스템"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "제천2공장 백업시스템에 대한 컴퓨터시스템 밸리데이션"
        ],
        "systems": [
          "백업시스템"
        ]
      },
      {
        "client": "알리코제약",
        "logo": "",
        "projects": [
          "진천공장 생산설비 밸리데이션 수행"
        ],
        "systems": [
          "생산설비"
        ]
      }
    ]
  },
  {
    "year": 2021,
    "clients": [
      {
        "client": "자생한방병원",
        "logo": "",
        "projects": [
          "제조용수 시스템 설치공사"
        ],
        "systems": [
          "제조용수 시스템"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "연구소 동결건조기 성능 적격성평가"
        ],
        "systems": [
          "동결건조기"
        ]
      },
      {
        "client": "HK이노엔",
        "logo": "",
        "projects": [
          "Open Labs OQ Test 용역",
          "Open Rabs OQ Test 용역"
        ],
        "systems": [
          "Open Labs",
          "Open RABS"
        ]
      },
      {
        "client": "영광YKMC",
        "logo": "",
        "projects": [
          "가공2팀 압축공기 재적격성평가"
        ],
        "systems": [
          "압축공기"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "특수제제 전용라인 구축 GMP 컨설팅",
          "항온항습기에 대한 적격성평가",
          "압축공기시스템 밸리데이션"
        ],
        "systems": [
          "특수제제 전용라인",
          "항온항습기",
          "압축공기시스템"
        ]
      },
      {
        "client": "퀀타매트릭스",
        "logo": "",
        "projects": [
          "clean room 환경모니터링",
          "GMP 설비 준비에 따른 개념설계"
        ],
        "systems": [
          "Clean Room",
          "GMP 설비"
        ]
      },
      {
        "client": "보령제약",
        "logo": "",
        "projects": [
          "예산공장 보관소 Mapping"
        ],
        "systems": [
          "보관소"
        ]
      },
      {
        "client": "경보제약",
        "logo": "",
        "projects": [
          "Mapping Test",
          "GL반응기 DQ,IQ,OQ",
          "생산1팀 합성1공장 리모델링공사 중 밸리데이션 용역"
        ],
        "systems": [
          "Mapping Test",
          "GL반응기",
          "합성1공장"
        ]
      },
      {
        "client": "동화약품",
        "logo": "",
        "projects": [
          "HVAC 적격성평가"
        ],
        "systems": [
          "HVAC"
        ]
      },
      {
        "client": "이연제약",
        "logo": "",
        "projects": [
          "훈증기, 패스스루 적격성평가",
          "충주공장에 설치하는 바이알 라벨러 1식 밸리데이션"
        ],
        "systems": [
          "훈증기",
          "패스스루",
          "바이알 라벨러"
        ]
      },
      {
        "client": "우정바이오",
        "logo": "",
        "projects": [
          "폐수처리시설 IQ, OQ",
          "폐수처리시설 IQ, OQ (추가)"
        ],
        "systems": [
          "폐수처리시설"
        ]
      },
      {
        "client": "천연자원연구원",
        "logo": "",
        "projects": [
          "정제수시스템 적격성평가"
        ],
        "systems": [
          "정제수시스템"
        ]
      },
      {
        "client": "한국BMI",
        "logo": "",
        "projects": [
          "오송 바이오의약품공장 신축공사 GMP VALIDATION"
        ],
        "systems": [
          "오송 바이오의약품공장"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "HVAC System PQ 수행"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "무진메디",
        "logo": "",
        "projects": [
          "탈모치료제 GMP공장 개념설계",
          "무균 GMP공장 개념설계"
        ],
        "systems": [
          "탈모치료제 GMP공장",
          "무균 GMP공장"
        ]
      },
      {
        "client": "동방에프티엘",
        "logo": "",
        "projects": [
          "추출장비 등 IQ, OQ"
        ],
        "systems": [
          "추출장비"
        ]
      },
      {
        "client": "에이프로젠바이오로직스",
        "logo": "",
        "projects": [
          "칭량부스 3대 Re-Qualification"
        ],
        "systems": [
          "칭량부스"
        ]
      },
      {
        "client": "동아ST",
        "logo": "",
        "projects": [
          "송도 신공장 컴퓨터 시스템 밸리데이션 컨설팅"
        ],
        "systems": [
          "컴퓨터 시스템"
        ]
      },
      {
        "client": "제노스",
        "logo": "",
        "projects": [
          "QMS 시스템 구축을 위한 컨설팅"
        ],
        "systems": [
          "QMS 시스템"
        ]
      },
      {
        "client": "주식회사 정도",
        "logo": "",
        "projects": [
          "필터프레스 IQ, OQ 적격성평가"
        ],
        "systems": [
          "필터프레스"
        ]
      },
      {
        "client": "창성하이테크",
        "logo": "",
        "projects": [
          "트위스트스크린 IQ, OQ"
        ],
        "systems": [
          "트위스트스크린"
        ]
      },
      {
        "client": "인삼공사",
        "logo": "",
        "projects": [
          "추출탱크 적격성평가"
        ],
        "systems": [
          "추출탱크"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "나보타동 HVAC Qualification"
        ],
        "systems": [
          "HVAC"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "분쇄기 IQ, OQ",
          "안산공장 적격성평가 수행"
        ],
        "systems": [
          "분쇄기",
          "안산공장"
        ]
      },
      {
        "client": "프레스티지바이오",
        "logo": "",
        "projects": [
          "냉동 및 냉장창고 밸리데이션",
          "냉동 및 냉장실 Mapping"
        ],
        "systems": [
          "냉동창고",
          "냉장창고",
          "냉동실",
          "냉장실"
        ]
      },
      {
        "client": "에이템즈",
        "logo": "",
        "projects": [
          "공기조화기 적격성평가"
        ],
        "systems": [
          "공기조화기"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "임상시료실 밸리데이션",
          "임상시료실 특수가스 IQ"
        ],
        "systems": [
          "임상시료실",
          "임상시료실 특수가스"
        ]
      },
      {
        "client": "삼남제약",
        "logo": "",
        "projects": [
          "HVAC SYSTEM IQ, OQ, PQ"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "로터리컷터(3호) 적격성평가"
        ],
        "systems": [
          "로터리컷터(3호)"
        ]
      },
      {
        "client": "엔지켐생명과학",
        "logo": "",
        "projects": [
          "제천공장 증축공사 개념설계 및 밸리데이션 수행"
        ],
        "systems": [
          "제천공장"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "제2공장에 설치하는 카톤 스티커부착기 1대에 대한 밸리데이션",
          "거두공장 제3공장 제조지원설비 Validation"
        ],
        "systems": [
          "카톤 스티커부착기",
          "제조지원설비"
        ]
      },
      {
        "client": "부광약품",
        "logo": "",
        "projects": [
          "시스템 밸리데이션 변경관리"
        ],
        "systems": [
          "시스템"
        ]
      },
      {
        "client": "한국쓰리엠",
        "logo": "",
        "projects": [
          "하이드로콜로이드 밸리데이션 수행"
        ],
        "systems": [
          "하이드로콜로이드 밸리데이션 수행"
        ]
      },
      {
        "client": "승일",
        "logo": "",
        "projects": [
          "음성사업장 압축공기 시스템 성능 적격성평가"
        ],
        "systems": [
          "압축공기 시스템"
        ]
      },
      {
        "client": "바이넥스",
        "logo": "",
        "projects": [
          "송도공장 4층 리모델링에 따른 밸리데이션 수행"
        ],
        "systems": [
          "송도공장 4층"
        ]
      },
      {
        "client": "동아제약",
        "logo": "",
        "projects": [
          "밴딩기 밸리데이션"
        ],
        "systems": [
          "밴딩기"
        ]
      },
      {
        "client": "넥스팜코리아",
        "logo": "",
        "projects": [
          "컴퓨터시스템에 대한 밸리데이션 컨설팅"
        ],
        "systems": [
          "컴퓨터시스템"
        ]
      },
      {
        "client": "DHP Korea",
        "logo": "",
        "projects": [
          "오송공장 조제탱크 적격성평가"
        ],
        "systems": [
          "조제탱크"
        ]
      },
      {
        "client": "삼진제약",
        "logo": "",
        "projects": [
          "오송공장 주사제동 수처리 시스템 적격성평가"
        ],
        "systems": [
          "주사제동 수처리 시스템"
        ]
      },
      {
        "client": "삼양홀딩스",
        "logo": "",
        "projects": [
          "EU GMP 컨설팅 (Data integrity 운영 및 Isolator PQ)"
        ],
        "systems": [
          "Isolator"
        ]
      },
      {
        "client": "큐베스트바이오",
        "logo": "",
        "projects": [
          "동물실험실 설비공사"
        ],
        "systems": [
          "동물실험실"
        ]
      },
      {
        "client": "CJ제일제당",
        "logo": "",
        "projects": [
          "마이크로바이옴 GMP 시설 개념설계 및 적격성평가"
        ],
        "systems": [
          "마이크로바이옴 GMP 시설"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "천안공장 페니실린 및 항암제 작업소 클린부스 밸리데이션"
        ],
        "systems": [
          "페니실린 및 항암제 작업소 클린부스"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "글로벌생명공학 연구센터 밸리데이션"
        ],
        "systems": [
          "글로벌생명공학 연구센터"
        ]
      }
    ]
  },
  {
    "year": 2020,
    "clients": [
      {
        "client": "엘앤씨바이오",
        "logo": "",
        "projects": [
          "안성공장 GMP 컨설팅 용역"
        ],
        "systems": [
          "안성공장"
        ]
      },
      {
        "client": "CJ헬스케어",
        "logo": "",
        "projects": [
          "CB 2대, PB 1대 적격성평가 수행"
        ],
        "systems": [
          "CB",
          "PB"
        ]
      },
      {
        "client": "삼성제약",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가 수행",
          "CB 1 적격성평가 수행"
        ],
        "systems": [
          "Clean Booth",
          "CB"
        ]
      },
      {
        "client": "영진약품",
        "logo": "",
        "projects": [
          "VHP Pass Box 적격성평가 수행"
        ],
        "systems": [
          "VHP Pass Box"
        ]
      },
      {
        "client": "한국콜마",
        "logo": "",
        "projects": [
          "CB 3대_HEPA FILTER 5장 적격성평가 수행"
        ],
        "systems": [
          "CB",
          "HEPA FILTER"
        ]
      },
      {
        "client": "경보제약",
        "logo": "",
        "projects": [
          "경보제약_이동식 1대 적격성평가 수행",
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "경보제약_이동식 1대 적격성평가 수행",
          "Clean Booth"
        ]
      },
      {
        "client": "G2G 바이오",
        "logo": "",
        "projects": [
          "G2G바이오(CB 3, PT 2, CB 3, WB 1, OR 3, PB 4) 적격성평가 수행"
        ],
        "systems": [
          "CB",
          "PT",
          "WB",
          "OR",
          "PB"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "클린부스 1대, 이동식 1대 적격성평가 수행",
          "패스박스 3대 적격성평가 수행",
          "PB 4ea 적격성평가 수행"
        ],
        "systems": [
          "클린부스",
          "이동식 부스",
          "패스박스",
          "PB"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "WB 6ea, PB 6ea 적격성평가 수행",
          "생산2팀 발효 Feeding Tank(2기) 설치 Qualification 수행",
          "세척기 적격성평가 수행"
        ],
        "systems": [
          "WB",
          "PB",
          "발효 Feeding Tank",
          "세척기"
        ]
      },
      {
        "client": "대전테크노파크",
        "logo": "",
        "projects": [
          "바이러스벡터 GMP 생산시설 밸리데이션 VMP 및 위험관리 컨설팅 용역",
          "유전자치료제 GMP 생산시설 밸리데이션 컨설팅 용역"
        ],
        "systems": [
          "바이러스벡터 GMP 생산시설",
          "유전자치료제 GMP 생산시설"
        ]
      },
      {
        "client": "㈜메이쓰",
        "logo": "",
        "projects": [
          "인쇄기 적격성평가 수행"
        ],
        "systems": [
          "인쇄기"
        ]
      },
      {
        "client": "㈜종근당바이오",
        "logo": "",
        "projects": [
          "프로바이오틱스 신축공장 압축공기 적격성평가 수행"
        ],
        "systems": [
          "압축공기"
        ]
      },
      {
        "client": "코스맥스바이오",
        "logo": "",
        "projects": [
          "충진라인 장비 적격성평가 용역"
        ],
        "systems": [
          "충진라인 장비"
        ]
      },
      {
        "client": "삼성바이오로직스",
        "logo": "",
        "projects": [
          "CB 1대 적격성평가 수행"
        ],
        "systems": [
          "CB"
        ]
      },
      {
        "client": "하나제약",
        "logo": "",
        "projects": [
          "이동식 1대 적격성평가 수행"
        ],
        "systems": [
          "이동식 1대 적격성평가 수행"
        ]
      },
      {
        "client": "일동제약",
        "logo": "",
        "projects": [
          "이동식 1대 적격성평가 수행"
        ],
        "systems": [
          "이동식 1대 적격성평가 수행"
        ]
      },
      {
        "client": "엔도더마",
        "logo": "",
        "projects": [
          "엔도더마 클린벤치 2대 적격성평가 수행"
        ],
        "systems": [
          "클린벤치"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "(연구소)동결건조기 성능적격성평가 수행"
        ],
        "systems": [
          "동결건조기"
        ]
      },
      {
        "client": "보령제약",
        "logo": "",
        "projects": [
          "예산공장 감압건조기 적격성평가 수행",
          "조제탱크 적격성평가 수행",
          "MB 2 적격성평가 수행"
        ],
        "systems": [
          "감압건조기",
          "조제탱크",
          "MB"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "전사적자원관리시스템 등에 대한 컴퓨터시스템 재 밸리데이션"
        ],
        "systems": [
          "전사적자원관리시스템"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "온수건조기 4대, 더블콘믹서 1대 적격성평가 수행",
          "CB 1대 적격성평가 수행"
        ],
        "systems": [
          "온수건조기",
          "더블콘믹서",
          "CB"
        ]
      },
      {
        "client": "동방에프티엘",
        "logo": "",
        "projects": [
          "조제탱크 적격성평가 수행",
          "장비 적격성평가 수행",
          "성형기, 덤블러, 인쇄기, PTP포장기 적격성평가 수행",
          "농축기 적격성평가 수행",
          "생산장비 재적격성평가 용역"
        ],
        "systems": [
          "조제탱크",
          "장비",
          "성형기",
          "덤블러",
          "인쇄기",
          "PTP포장기",
          "농축기",
          "생산장비"
        ]
      },
      {
        "client": "대웅바이오",
        "logo": "",
        "projects": [
          "성남_이동식 2대 적격성평가 수행"
        ],
        "systems": [
          "성남_이동식 2대 적격성평가 수행"
        ]
      },
      {
        "client": "셀트리온제약",
        "logo": "",
        "projects": [
          "오창공장 ISOLATOR 적격성평가 수행"
        ],
        "systems": [
          "Isolator"
        ]
      },
      {
        "client": "삼양바이오팜",
        "logo": "",
        "projects": [
          "압축공기, 질소 Revaildation"
        ],
        "systems": [
          "압축공기",
          "질소"
        ]
      },
      {
        "client": "K-Bio",
        "logo": "",
        "projects": [
          "동결건조기 적격성평가 수행",
          "냉장실 2대 적격성평가 수행"
        ],
        "systems": [
          "동결건조기",
          "냉장실"
        ]
      },
      {
        "client": "보령바이오파마",
        "logo": "",
        "projects": [
          "CB 2대 적격성평가 수행"
        ],
        "systems": [
          "CB"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "멀티충전기라인 적격성평가 수행",
          "용인공장 컴퓨터시스템밸리데이션 컨설팅",
          "글러브 리크테스터 1ea 적격성평가 수행"
        ],
        "systems": [
          "멀티충전기라인",
          "컴퓨터시스템",
          "글러브 리크테스터"
        ]
      },
      {
        "client": "SG 메디칼",
        "logo": "",
        "projects": [
          "SG 메디칼 조제탱크 2대 적격성평가 수행"
        ],
        "systems": [
          "조제탱크"
        ]
      },
      {
        "client": "제일기공",
        "logo": "",
        "projects": [
          "Autoclave 적격성평가 수행"
        ],
        "systems": [
          "Autoclave"
        ]
      },
      {
        "client": "존슨앤존슨",
        "logo": "",
        "projects": [
          "청주공장 MTBS SYSTEM Validation"
        ],
        "systems": [
          "MTBS System"
        ]
      },
      {
        "client": "에이프로젠바이오로직스",
        "logo": "",
        "projects": [
          "칭량부스 성능 적격성평가 용역"
        ],
        "systems": [
          "칭량부스"
        ]
      },
      {
        "client": "바스칸바이오제약",
        "logo": "",
        "projects": [
          "안성공장 HVAC System 적격성평가 수행"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "대전공장 공조기에 대한 적격성평가 수행",
          "Autoclave 적격성평가 수행"
        ],
        "systems": [
          "공조기",
          "Autoclave"
        ]
      },
      {
        "client": "유성에프에스",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "파마코드 리더기 밸리데이션 수행",
          "신북공장 건열멸균기 정기교정"
        ],
        "systems": [
          "파마코드 리더기",
          "건열멸균기"
        ]
      },
      {
        "client": "휴비스트",
        "logo": "",
        "projects": [
          "Orabs 1ea 적격성평가 수행"
        ],
        "systems": [
          "O-RABS"
        ]
      },
      {
        "client": "동빈무역",
        "logo": "",
        "projects": [
          "Isolator 적격성평가 수행"
        ],
        "systems": [
          "Isolator"
        ]
      },
      {
        "client": "퀀타매트릭스",
        "logo": "",
        "projects": [
          "HVAC & Utility & CB & BSC PQ",
          "초저온냉동고 적격성평가 수행"
        ],
        "systems": [
          "HVAC",
          "Utility",
          "CB",
          "BSC",
          "초저온냉동고"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "Mapping 2곳 72시간 50개씩"
        ],
        "systems": [
          "Mapping 2곳 72시간 50개씩"
        ]
      },
      {
        "client": "유바이오로직스",
        "logo": "",
        "projects": [
          "제습공조 시스템 적격성평가 수행",
          "CB 2, PT 2, PB 2 적격성평가 수행",
          "HVAC System Validation 용역",
          "충진기 적격성평가 수행"
        ],
        "systems": [
          "제습공조 시스템",
          "CB",
          "PT",
          "PB",
          "HVAC System",
          "충진기"
        ]
      },
      {
        "client": "에이치케이이노엔",
        "logo": "",
        "projects": [
          "Open Labs OQ Test 용역"
        ],
        "systems": [
          "Open Labs"
        ]
      },
      {
        "client": "휴비스트제약",
        "logo": "",
        "projects": [
          "CB1, WB1 적격성평가 수행",
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "CB",
          "WB",
          "Clean Booth"
        ]
      },
      {
        "client": "비씨월드헬스케어",
        "logo": "",
        "projects": [
          "충전기, C-RABS, O-RABS 적격성평가 수행"
        ],
        "systems": [
          "충전기",
          "C-RABS",
          "O-RABS"
        ]
      },
      {
        "client": "엔지켐생명과학",
        "logo": "",
        "projects": [
          "핀밀 적격성평가 수행",
          "반응기 적격성평가 수행"
        ],
        "systems": [
          "핀밀",
          "반응기"
        ]
      },
      {
        "client": "인벤티지랩",
        "logo": "",
        "projects": [
          "충전기 등 장비 적격성평가 수행",
          "아이솔레이터 1, Orabs 1 적격성평가 수행",
          "CMO 무균작업장 밸리데이션"
        ],
        "systems": [
          "충전기",
          "아이솔레이터",
          "O-RABS",
          "CMO 무균작업장"
        ]
      },
      {
        "client": "유일팜테크",
        "logo": "",
        "projects": [
          "질소 2 포인트 테스트"
        ],
        "systems": [
          "질소"
        ]
      },
      {
        "client": "리젠케어",
        "logo": "",
        "projects": [
          "WB3, CB 1, PT 1, PB 2 적격성평가 수행"
        ],
        "systems": [
          "WB",
          "CB",
          "PT",
          "PB"
        ]
      },
      {
        "client": "한스파마",
        "logo": "",
        "projects": [
          "CB 1 적격성평가 수행"
        ],
        "systems": [
          "CB"
        ]
      },
      {
        "client": "SK바이오사이언스",
        "logo": "",
        "projects": [
          "RABS 1 적격성평가 수행"
        ],
        "systems": [
          "RABS"
        ]
      },
      {
        "client": "충북테크노파크",
        "logo": "",
        "projects": [
          "RABS 1ea(Fan 22ea) 적격성평가 수행"
        ],
        "systems": [
          "RABS"
        ]
      },
      {
        "client": "녹십자웰빙",
        "logo": "",
        "projects": [
          "MB 2 적격성평가 수행"
        ],
        "systems": [
          "MB"
        ]
      },
      {
        "client": "SBL",
        "logo": "",
        "projects": [
          "클린부스 1대 적격성평가 수행"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "명인제약",
        "logo": "",
        "projects": [
          "진동선별기 적격성평가 수행"
        ],
        "systems": [
          "진동선별기"
        ]
      },
      {
        "client": "성이바이오",
        "logo": "",
        "projects": [
          "회복시험&공기조화시스템",
          "냉장고, 배양기 Mapping Test 용역"
        ],
        "systems": [
          "공기조화시스템",
          "냉장고",
          "배양기"
        ]
      },
      {
        "client": "휴메디솔",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "아모레퍼시픽",
        "logo": "",
        "projects": [
          "오일테스트 용역"
        ],
        "systems": [
          "오일테스트 용역"
        ]
      },
      {
        "client": "동아제약",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "연질캡슐성형기 적격성평가",
          "Clean Booth 적격성평가 수행"
        ],
        "systems": [
          "연질캡슐성형기",
          "Clean Booth"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "QC_Autoclave FAT 용역"
        ],
        "systems": [
          "QC Autoclave"
        ]
      },
      {
        "client": "위더스제약",
        "logo": "",
        "projects": [
          "안성현장 클린부스 밸리데이션"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "에이치피앤씨",
        "logo": "",
        "projects": [
          "HP&C 외용액제 밸리데이션 수행"
        ],
        "systems": [
          "HP&C 외용액제 밸리데이션 수행"
        ]
      },
      {
        "client": "건일제약",
        "logo": "",
        "projects": [
          "재적격성평가 수행"
        ],
        "systems": [
          "재적격성평가 수행"
        ]
      },
      {
        "client": "프로스테믹스",
        "logo": "",
        "projects": [
          "KGMP 구축을 위한 GMP 컨설팅"
        ],
        "systems": [
          "KGMP 구축을 위한 GMP 컨설팅"
        ]
      }
    ]
  },
  {
    "year": 2019,
    "clients": [
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "패스박스 2대 적격성평가 수행",
          "천안GMP공장의 카토너 1대 밸리데이션",
          "OTTO_글러브리크테스터 2대 적격성평가 수행",
          "PB 6대, MCB 2대 적격성평가 수행",
          "수액제세트 공급장치 적격성평가 수행"
        ],
        "systems": [
          "패스박스",
          "카토너",
          "글러브리크테스터",
          "PB",
          "MCB",
          "수액제세트 공급장치"
        ]
      },
      {
        "client": "알보젠",
        "logo": "",
        "projects": [
          "클린부스 1대 적격성평가 수행"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "㈜대용파마텍",
        "logo": "",
        "projects": [
          "충전기와 RABS 적격성평가 수행"
        ],
        "systems": [
          "충전기",
          "RABS"
        ]
      },
      {
        "client": "메디톡스",
        "logo": "",
        "projects": [
          "일련번호시스템 적격성평가 수행"
        ],
        "systems": [
          "일련번호시스템"
        ]
      },
      {
        "client": "유한양행",
        "logo": "",
        "projects": [
          "VHP Pass Box 적격성평가 수행",
          "VHP PB 1대, CB 2대 적격성평가 수행"
        ],
        "systems": [
          "VHP Pass Box",
          "VHP PB",
          "CB"
        ]
      },
      {
        "client": "프로바이오틱스",
        "logo": "",
        "projects": [
          "프로바이오틱스 신축공장 신규 설비 적격성평가 수행",
          "신축공장 밸리데이션 컨설팅"
        ],
        "systems": [
          "프로바이오틱스 공장 설비",
          "신축공장"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "초음파세척기 적격성평가 수행"
        ],
        "systems": [
          "초음파세척기"
        ]
      },
      {
        "client": "썬팩",
        "logo": "",
        "projects": [
          "보령제약_포장기 적격성평가 수행"
        ],
        "systems": [
          "포장기"
        ]
      },
      {
        "client": "녹십자",
        "logo": "",
        "projects": [
          "Isolator FAT IQ OQ"
        ],
        "systems": [
          "Isolator"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "오송공장 원부자재 자동창고 밸리데이션",
          "CB 3대, PB 5대 적격성평가 수행"
        ],
        "systems": [
          "원부자재 자동창고",
          "CB",
          "PB"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "제2공장 HVAC System PQ 용역",
          "제2공장 생산장비 PQ"
        ],
        "systems": [
          "HVAC System",
          "생산장비"
        ]
      },
      {
        "client": "㈜삼양바이오팜",
        "logo": "",
        "projects": [
          "오페라 프로젝트 - 밸리데이션 수행"
        ],
        "systems": [
          "오페라 프로젝트 - 밸리데이션 수행"
        ]
      },
      {
        "client": "더마펌",
        "logo": "",
        "projects": [
          "압축공기 시스템 적격성평가 수행"
        ],
        "systems": [
          "압축공기 시스템"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "분쇄기, 파쇄기 적격성평가 수행"
        ],
        "systems": [
          "분쇄기",
          "파쇄기"
        ]
      },
      {
        "client": "미래제약",
        "logo": "",
        "projects": [
          "유동층건조기 및 온수건조기 적격성평가 수행",
          "칭량부스 2대 IQ, OQ"
        ],
        "systems": [
          "유동층건조기",
          "온수건조기",
          "칭량부스"
        ]
      },
      {
        "client": "일동제약",
        "logo": "",
        "projects": [
          "FBD 적격성평가 수행"
        ],
        "systems": [
          "FBD"
        ]
      },
      {
        "client": "CJ헬스케어",
        "logo": "",
        "projects": [
          "이천 클린벤치 적격성평가 수행"
        ],
        "systems": [
          "클린벤치"
        ]
      },
      {
        "client": "한국콜마",
        "logo": "",
        "projects": [
          "점안제 조제시스템 적격성평가 수행"
        ],
        "systems": [
          "점안제 조제시스템"
        ]
      },
      {
        "client": "성이바이오",
        "logo": "",
        "projects": [
          "WB 3대_PB 1대 적격성평가 수행",
          "붕해기 적격성평가 수행"
        ],
        "systems": [
          "WB",
          "PB",
          "붕해기"
        ]
      },
      {
        "client": "일성기공",
        "logo": "",
        "projects": [
          "NTR_온수순환건조기 2대, 더블콘 혼합기 2대, 드럼혼합기 적격성평가 수행"
        ],
        "systems": [
          "온수순환건조기",
          "더블콘 혼합기",
          "드럼혼합기"
        ]
      },
      {
        "client": "G2G 바이오",
        "logo": "",
        "projects": [
          "습열멸균기 2대 적격성평가 수행"
        ],
        "systems": [
          "습열멸균기"
        ]
      },
      {
        "client": "비씨월드제약",
        "logo": "",
        "projects": [
          "Isolator_FAT IQ OQ"
        ],
        "systems": [
          "Isolator"
        ]
      },
      {
        "client": "오송첨단의료산업재단",
        "logo": "",
        "projects": [
          "완제시설 제조지원설비 밸리데이션 용역"
        ],
        "systems": [
          "완제시설 제조지원설비"
        ]
      },
      {
        "client": "삼양바이오팜",
        "logo": "",
        "projects": [
          "세척기 적격성평가 수행"
        ],
        "systems": [
          "세척기"
        ]
      },
      {
        "client": "한미정밀화학",
        "logo": "",
        "projects": [
          "항온항습기, pass box 2대 적격성평가 수행"
        ],
        "systems": [
          "항온항습기",
          "Pass Box"
        ]
      },
      {
        "client": "DM바이오",
        "logo": "",
        "projects": [
          "CB 1대 적격성평가 수행"
        ],
        "systems": [
          "CB"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "조제시스템 밸리데이션 수행"
        ],
        "systems": [
          "조제시스템"
        ]
      },
      {
        "client": "보령제약㈜",
        "logo": "",
        "projects": [
          "예산공장 QC장비 정기교정 및 적격성평가 수행"
        ],
        "systems": [
          "QC장비"
        ]
      },
      {
        "client": "한국유나이티드",
        "logo": "",
        "projects": [
          "건열멸균기_PQ"
        ],
        "systems": [
          "건열멸균기"
        ]
      },
      {
        "client": "유니메드제약㈜",
        "logo": "",
        "projects": [
          "고압 건열 세척탱크 연육기 적격성평가 수행"
        ],
        "systems": [
          "고압 건열 세척탱크 연육기"
        ]
      },
      {
        "client": "도미노코리아",
        "logo": "",
        "projects": [
          "Olic 프로젝트_DCF-500T, DMA-3000M DQ, IQ, OQ 용역"
        ],
        "systems": [
          "DCF-500T",
          "DMA-3000M"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "횡성공장 첩부제 조제 혼합기에 대한 밸리데이션"
        ],
        "systems": [
          "첩부제 조제 혼합기"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "바코드시스템 PM 추가 건"
        ],
        "systems": [
          "바코드시스템"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "조제시스템 적격성평가 수행"
        ],
        "systems": [
          "조제시스템"
        ]
      }
    ]
  },
  {
    "year": 2018,
    "clients": [
      {
        "client": "대주",
        "logo": "",
        "projects": [
          "카톤 고속인쇄기(CJ헬스케어) 적격성평가 수행"
        ],
        "systems": [
          "카톤 고속인쇄기"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "부스 2대_HEPA 총 4장 적격성평가 수행",
          "클린부스 1대_PAO TEST 수행",
          "이동식부스 1대 적격성평가 수행"
        ],
        "systems": [
          "부스",
          "HEPA",
          "클린부스",
          "이동식부스"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "부스 1대_HEPA 3장 적격성평가 수행",
          "향남_인버터 교체에 따른 부스 1대 적격성평가 수행"
        ],
        "systems": [
          "부스",
          "HEPA"
        ]
      },
      {
        "client": "퍼슨",
        "logo": "",
        "projects": [
          "isolator 1대 적격성평가 수행"
        ],
        "systems": [
          "Isolator"
        ]
      },
      {
        "client": "SR테크노팩",
        "logo": "",
        "projects": [
          "천안공장 정비동 Validation"
        ],
        "systems": [
          "천안공장 정비동"
        ]
      },
      {
        "client": "하이텍팜",
        "logo": "",
        "projects": [
          "이동부스 3대_HEPA 3장 PAO 수행",
          "Clean booth 1대 적격성평가 수행"
        ],
        "systems": [
          "이동부스",
          "HEPA",
          "Clean Booth"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "클린부스 1대_HEPA 11장 PAO 수행",
          "1공장 액상라인 장비 적격성평가",
          "보관소 DQ, IQ, OQ",
          "1공장 분말라인 장비 적격성평가",
          "2공장 RABS 충전기 기류 Test 용역",
          "동결건조기에 대한 성능 적격성 평가 수행",
          "2공장 신규라인 장비 PQ 적격성평가 수행"
        ],
        "systems": [
          "클린부스",
          "HEPA",
          "액상라인 장비",
          "보관소",
          "분말라인 장비",
          "RABS",
          "충전기",
          "동결건조기",
          "신규라인 장비"
        ]
      },
      {
        "client": "제니스",
        "logo": "",
        "projects": [
          "온도 Mapping Test",
          "GMP Lay out 변경 공사 TAB & Qualification"
        ],
        "systems": [
          "온도 Mapping Test",
          "GMP Lay out 변경 공사 TAB & Qualification"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "건열멸균기_조제탱크 적격성평가",
          "혼합기_스트링블리스터포장기 적격성평가 수행",
          "건열멸균기 PQ"
        ],
        "systems": [
          "건열멸균기",
          "조제탱크",
          "혼합기",
          "스트링블리스터포장기"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "안전핀 자동삽입기 Qualification",
          "탱크 적격성평가"
        ],
        "systems": [
          "안전핀 자동삽입기",
          "탱크"
        ]
      },
      {
        "client": "일동제약",
        "logo": "",
        "projects": [
          "이동부스 IQ, OQ, PQ"
        ],
        "systems": [
          "이동부스"
        ]
      },
      {
        "client": "한국콜마",
        "logo": "",
        "projects": [
          "이동부스 패스박스 IQ, OQ"
        ],
        "systems": [
          "이동부스",
          "패스박스"
        ]
      },
      {
        "client": "한미약품",
        "logo": "",
        "projects": [
          "OQ Test",
          "글러브리크테스터 1대 적격성평가 수행"
        ],
        "systems": [
          "OQ Test",
          "글러브리크테스터"
        ]
      },
      {
        "client": "퀀타매트릭스",
        "logo": "",
        "projects": [
          "CLEAN ROOM Performance Qualification"
        ],
        "systems": [
          "Clean Room"
        ]
      },
      {
        "client": "제일약품",
        "logo": "",
        "projects": [
          "부스 2, 칭량부스1, 패스박스 1 FAT, IQ, OQ"
        ],
        "systems": [
          "부스",
          "칭량부스",
          "패스박스"
        ]
      },
      {
        "client": "그린메탈",
        "logo": "",
        "projects": [
          "Glove Leak Tester_IQ, OQ"
        ],
        "systems": [
          "Glove Leak Tester"
        ]
      },
      {
        "client": "DM Bio",
        "logo": "",
        "projects": [
          "Leak tester 2대 IQ, OQ",
          "클린부스 HEPA 1ea PAO Test 용역"
        ],
        "systems": [
          "Leak Tester",
          "클린부스 HEPA"
        ]
      },
      {
        "client": "펩트론",
        "logo": "",
        "projects": [
          "Leak tester 2대 IQ, OQ",
          "펩트론 생산용 멸균기 밸리데이션",
          "조제탱크 6대_OQ"
        ],
        "systems": [
          "Leak Tester",
          "생산용 멸균기",
          "조제탱크"
        ]
      },
      {
        "client": "우진비앤지",
        "logo": "",
        "projects": [
          "Leak tester 1대 적격성평가 수행"
        ],
        "systems": [
          "Leak Tester"
        ]
      },
      {
        "client": "㈜서흥",
        "logo": "",
        "projects": [
          "컴퓨터시스템 밸리데이션"
        ],
        "systems": [
          "컴퓨터시스템"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "클린부스 1대 추가_DQ, IQ, OQ"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "종근당바이오",
        "logo": "",
        "projects": [
          "RO 시스템 적격성평가 수행"
        ],
        "systems": [
          "RO 시스템"
        ]
      },
      {
        "client": "세마테크",
        "logo": "",
        "projects": [
          "GLP 컨설팅"
        ],
        "systems": [
          "GLP 컨설팅"
        ]
      },
      {
        "client": "LG화학",
        "logo": "",
        "projects": [
          "Deep Freezer IQ,OQ Validation"
        ],
        "systems": [
          "Deep Freezer"
        ]
      },
      {
        "client": "유한양행",
        "logo": "",
        "projects": [
          "클린부스 5대, 패스박스 1대, RABS 1대_IQ, OQ",
          "이동식 2대_옷장 1대_필터 3장 PAO 수행_IQ, OQ"
        ],
        "systems": [
          "클린부스",
          "패스박스",
          "RABS",
          "이동식 2대_옷장 1대_필터 3장 PAO 수행_IQ, OQ"
        ]
      },
      {
        "client": "동화약품",
        "logo": "",
        "projects": [
          "카톤 고속인쇄기 적격성평가 수행"
        ],
        "systems": [
          "카톤 고속인쇄기"
        ]
      },
      {
        "client": "위아텍",
        "logo": "",
        "projects": [
          "세척기 2대 적격성평가 수행"
        ],
        "systems": [
          "세척기"
        ]
      },
      {
        "client": "일성기공",
        "logo": "",
        "projects": [
          "Autoclave 태준제약 PC버전 적격성평가 수행",
          "오실레이터 IQ, OQ 3대",
          "건조기 2대, Autoclave 2대 적격성평가 수행"
        ],
        "systems": [
          "Autoclave PC버전",
          "오실레이터",
          "건조기",
          "Autoclave"
        ]
      },
      {
        "client": "바이넥스",
        "logo": "",
        "projects": [
          "메틀러토레도 적격성평가 수행"
        ],
        "systems": [
          "메틀러토레도 적격성평가 수행"
        ]
      },
      {
        "client": "메디톡스",
        "logo": "",
        "projects": [
          "비젼시스템 적격성평가 수행"
        ],
        "systems": [
          "비젼시스템"
        ]
      },
      {
        "client": "파마리서치바이오",
        "logo": "",
        "projects": [
          "강릉공장 Utility DQ"
        ],
        "systems": [
          "Utility"
        ]
      },
      {
        "client": "팩코리아",
        "logo": "",
        "projects": [
          "임신진단기 카톤포장기 IQ,OQ 용역"
        ],
        "systems": [
          "임신진단기 카톤포장기"
        ]
      },
      {
        "client": "도미노코리아",
        "logo": "",
        "projects": [
          "프린터 관리시스템 적격성평가 수행"
        ],
        "systems": [
          "프린터 관리시스템"
        ]
      },
      {
        "client": "삼일제약",
        "logo": "",
        "projects": [
          "패스박스 5대 적격성평가 수행"
        ],
        "systems": [
          "패스박스"
        ]
      },
      {
        "client": "휴온스",
        "logo": "",
        "projects": [
          "세척기, 충전기 IQ,OQ",
          "이동식크린부스 1ea, 리크테스터 1ea 적격성평가 수행"
        ],
        "systems": [
          "세척기",
          "충전기",
          "이동식 클린부스",
          "리크테스터"
        ]
      },
      {
        "client": "jw생명과학",
        "logo": "",
        "projects": [
          "부스 2대_DQ, IQ, OQ_PAO 36개 TEST 수행",
          "부스 1대 적격성평가 수행"
        ],
        "systems": [
          "부스"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "102동3층 무균칭량실 설치 리모델링공사 밸리데이션"
        ],
        "systems": [
          "무균칭량실"
        ]
      },
      {
        "client": "알보젠",
        "logo": "",
        "projects": [
          "칭량부스 1대 적격성평가 수행"
        ],
        "systems": [
          "칭량부스"
        ]
      },
      {
        "client": "알리코제약",
        "logo": "",
        "projects": [
          "이동부스 1대 적격성평가 수행"
        ],
        "systems": [
          "이동부스"
        ]
      },
      {
        "client": "명문제약",
        "logo": "",
        "projects": [
          "이동부스 1대 적격성평가 수행"
        ],
        "systems": [
          "이동부스"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "세척기 5대+1대 적격성평가 수행",
          "바코드시스템 솔루션 적격성평가 수행"
        ],
        "systems": [
          "세척기",
          "바코드시스템"
        ]
      },
      {
        "client": "CJ헬스케어",
        "logo": "",
        "projects": [
          "O-RABs IQ,OQ & PAO",
          "수액세트 수액삽입기 DQ, IQ, OQ(메디파마플랜) 적격성평가 수행"
        ],
        "systems": [
          "O-RABS",
          "수액세트 수액삽입기"
        ]
      },
      {
        "client": "SK 안동",
        "logo": "",
        "projects": [
          "글러브리크테스터 2대 적격성평가 수행"
        ],
        "systems": [
          "글러브리크테스터"
        ]
      },
      {
        "client": "동아제약",
        "logo": "",
        "projects": [
          "클린부스 IQ,OQ & PAO 12장 적격성평가 수행"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "휴젤",
        "logo": "",
        "projects": [
          "포장기 IQ, OQ"
        ],
        "systems": [
          "포장기"
        ]
      },
      {
        "client": "한국백신",
        "logo": "",
        "projects": [
          "클린부스 & RABs DQ, IQ, OQ",
          "패스박스 2대_& Capping Room 적격성평가 수행"
        ],
        "systems": [
          "클린부스",
          "RABS",
          "패스박스",
          "Capping Room"
        ]
      },
      {
        "client": "메디치코리아코스메틱",
        "logo": "",
        "projects": [
          "GMP Lay out 개발 업무 및 Qualification"
        ],
        "systems": [
          "GMP Lay out 개발 업무 및 Qualification"
        ]
      },
      {
        "client": "하원정밀화학",
        "logo": "",
        "projects": [
          "HVAC System TAB, IQ, OQ"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "패스박스 1대 IQ, OQ"
        ],
        "systems": [
          "패스박스"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "GLT 3대 적격성평가 수행"
        ],
        "systems": [
          "GLT"
        ]
      },
      {
        "client": "코러스",
        "logo": "",
        "projects": [
          "클린부스 3대 적격성평가 수행"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "토마스",
        "logo": "",
        "projects": [
          "AG System 적격성평가 수행"
        ],
        "systems": [
          "AG System"
        ]
      },
      {
        "client": "유바이오",
        "logo": "",
        "projects": [
          "클린부스 등등 적격성평가 수행"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "제네웰",
        "logo": "",
        "projects": [
          "RABS 1대, PAO 5개, 글러브리크테스터 1대 적격성평가 수행"
        ],
        "systems": [
          "RABS",
          "글러브리크테스터"
        ]
      },
      {
        "client": "뉴젠스",
        "logo": "",
        "projects": [
          "Passivation 수행 용역"
        ],
        "systems": [
          "Passivation 수행 용역"
        ]
      },
      {
        "client": "동방",
        "logo": "",
        "projects": [
          "필터 3장 PAO Test 및 Qualification"
        ],
        "systems": [
          "필터"
        ]
      },
      {
        "client": "리독스바이오",
        "logo": "",
        "projects": [
          "필터 4장 PAO Test 및 Qualification"
        ],
        "systems": [
          "필터"
        ]
      },
      {
        "client": "비씨월드제약",
        "logo": "",
        "projects": [
          "패스박스 2대 적격성평가 수행"
        ],
        "systems": [
          "패스박스"
        ]
      },
      {
        "client": "삼에이치텍㈜",
        "logo": "",
        "projects": [
          "AHU 4호 밸리데이션"
        ],
        "systems": [
          "AHU 4호"
        ]
      },
      {
        "client": "GDK Cosmetics",
        "logo": "",
        "projects": [
          "수처리 시스템에 대한 적격성평가"
        ],
        "systems": [
          "수처리 시스템"
        ]
      }
    ]
  },
  {
    "year": 2017,
    "clients": [
      {
        "client": "진양제약",
        "logo": "",
        "projects": [
          "TAB"
        ],
        "systems": [
          "TAB"
        ]
      },
      {
        "client": "한미약품",
        "logo": "",
        "projects": [
          "칭량부스 적격성평가",
          "저온보관소 SAT",
          "추팔공장 CB OQ Test 용역"
        ],
        "systems": [
          "칭량부스",
          "저온보관소",
          "CB"
        ]
      },
      {
        "client": "유나이티드제약",
        "logo": "",
        "projects": [
          "Booth , HEPA Filter Integriti Test",
          "HVAC System 적격성평가"
        ],
        "systems": [
          "Booth",
          "HEPA Filter",
          "HVAC System"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "Clean Booth 등 적격성평가",
          "부스 & 패스박스 적격성평가"
        ],
        "systems": [
          "Clean Booth",
          "부스",
          "패스박스"
        ]
      },
      {
        "client": "동방",
        "logo": "",
        "projects": [
          "인큐베이터 적격성평가"
        ],
        "systems": [
          "인큐베이터"
        ]
      },
      {
        "client": "제니스",
        "logo": "",
        "projects": [
          "춘천공장 Particle 측정 용역",
          "춘천 화장품공장 부유입자 TEST",
          "온도 Mapping Test"
        ],
        "systems": [
          "춘천공장",
          "춘천 화장품공장",
          "온도 Mapping Test"
        ]
      },
      {
        "client": "한올바이오",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "BSC 적격성평가",
          "1공장 훈증기 공급 배관 적격성평가",
          "1공장 장비 적격성평가",
          "제2공장 환경모니터링 밸리데이션"
        ],
        "systems": [
          "BSC",
          "훈증기 공급 배관",
          "장비",
          "제2공장"
        ]
      },
      {
        "client": "아주약품",
        "logo": "",
        "projects": [
          "충전라인 적격성평가",
          "필러생산동 공조기 Qualification"
        ],
        "systems": [
          "충전라인",
          "필러생산동 공조기"
        ]
      },
      {
        "client": "한올바이오파마",
        "logo": "",
        "projects": [
          "이동부스 1대 적격성평가",
          "리크테스터기 적격성평가"
        ],
        "systems": [
          "이동부스",
          "리크테스터기"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "서면 Pass box 7대 적격성평가",
          "흡입제 생산라인 생산장비 적격성평가",
          "서면공장 흡입제 프로젝트 VMP"
        ],
        "systems": [
          "Pass Box",
          "흡입제 생산라인 생산장비",
          "서면공장"
        ]
      },
      {
        "client": "유한양행",
        "logo": "",
        "projects": [
          "집진시설 적격성평가",
          "포장기 Qualification",
          "칭량부스 적격성평가"
        ],
        "systems": [
          "집진시설",
          "포장기",
          "칭량부스"
        ]
      },
      {
        "client": "한국로슈",
        "logo": "",
        "projects": [
          "장비 Qualification"
        ],
        "systems": [
          "장비"
        ]
      },
      {
        "client": "삼천당제약",
        "logo": "",
        "projects": [
          "충전탱크 Qualification",
          "스프레이 드라이어 적격성평가"
        ],
        "systems": [
          "충전탱크",
          "스프레이 드라이어"
        ]
      },
      {
        "client": "보스톤싸이언티픽",
        "logo": "",
        "projects": [
          "보관소 Mapping Test"
        ],
        "systems": [
          "보관소"
        ]
      },
      {
        "client": "삼양바이오팜",
        "logo": "",
        "projects": [
          "Steam Quality Test 용역",
          "압축공기 품질 Test 용역"
        ],
        "systems": [
          "Steam",
          "압축공기"
        ]
      },
      {
        "client": "새힘정보기술",
        "logo": "",
        "projects": [
          "QC 시험장비 적격성평가"
        ],
        "systems": [
          "QC 시험장비"
        ]
      },
      {
        "client": "비씨월드제약세척기",
        "logo": "",
        "projects": [
          "세척기2대 적격성평가"
        ],
        "systems": [
          "세척기"
        ]
      },
      {
        "client": "셀비온",
        "logo": "",
        "projects": [
          "HEPA Filter 적격성평가"
        ],
        "systems": [
          "HEPA Filter"
        ]
      },
      {
        "client": "아크로스",
        "logo": "",
        "projects": [
          "부스 3대 적격성평가"
        ],
        "systems": [
          "부스"
        ]
      },
      {
        "client": "비씨월드",
        "logo": "",
        "projects": [
          "부스 2대 적격성평가"
        ],
        "systems": [
          "부스"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "이동부스 1대 적격성평가",
          "Pass Box 2ea 적격성평가",
          "부스 1대 적격성평가"
        ],
        "systems": [
          "이동부스",
          "Pass Box",
          "부스"
        ]
      },
      {
        "client": "그린메탈",
        "logo": "",
        "projects": [
          "이동부스 2대 적격성평가",
          "칭량부스 1대 적격성평가"
        ],
        "systems": [
          "이동부스",
          "칭량부스"
        ]
      },
      {
        "client": "한림제약",
        "logo": "",
        "projects": [
          "TAB",
          "리크테스터 적격성평가"
        ],
        "systems": [
          "TAB",
          "리크테스터"
        ]
      },
      {
        "client": "CJ",
        "logo": "",
        "projects": [
          "부스2, 이동1 적격성평가"
        ],
        "systems": [
          "부스",
          "이동부스"
        ]
      },
      {
        "client": "핵광산업",
        "logo": "",
        "projects": [
          "차폐박스 적격성평가"
        ],
        "systems": [
          "차폐박스"
        ]
      },
      {
        "client": "한국콜마",
        "logo": "",
        "projects": [
          "VHP 공급 시스템 적격성평가"
        ],
        "systems": [
          "VHP 공급 시스템"
        ]
      },
      {
        "client": "동국제약",
        "logo": "",
        "projects": [
          "부스5대 이동부스1대 적격성평가"
        ],
        "systems": [
          "부스",
          "이동부스"
        ]
      },
      {
        "client": "녹십자",
        "logo": "",
        "projects": [
          "패스박스2대 적격성평가",
          "세척기 2대 적격성평가"
        ],
        "systems": [
          "패스박스",
          "세척기"
        ]
      },
      {
        "client": "대용파마텍",
        "logo": "",
        "projects": [
          "부스2대 적격성평가"
        ],
        "systems": [
          "부스"
        ]
      },
      {
        "client": "이레엔지니어링",
        "logo": "",
        "projects": [
          "자화 장비 3대 적격성평가"
        ],
        "systems": [
          "자화 장비"
        ]
      },
      {
        "client": "셀트리온",
        "logo": "",
        "projects": [
          "보관소 적격성평가"
        ],
        "systems": [
          "보관소"
        ]
      },
      {
        "client": "대화제약",
        "logo": "",
        "projects": [
          "부스 1대 적격성평가"
        ],
        "systems": [
          "부스"
        ]
      },
      {
        "client": "서흥캅셀",
        "logo": "",
        "projects": [
          "부스 1대 적격성평가"
        ],
        "systems": [
          "부스"
        ]
      },
      {
        "client": "휴메딕스",
        "logo": "",
        "projects": [
          "멸균기 등 적격성평가"
        ],
        "systems": [
          "멸균기"
        ]
      },
      {
        "client": "비씨월드제약",
        "logo": "",
        "projects": [
          "Utility F&DS 작성",
          "부스 적격성평가"
        ],
        "systems": [
          "Utility",
          "부스"
        ]
      },
      {
        "client": "퀀타매트릭스",
        "logo": "",
        "projects": [
          "신규 제조소 시공 Lay out 개념설계",
          "AHU & 생산장비 Qualification",
          "환경모니터링"
        ],
        "systems": [
          "제조소",
          "AHU",
          "생산장비",
          "환경모니터링"
        ]
      },
      {
        "client": "동방메디컬",
        "logo": "",
        "projects": [
          "환기횟수 측정"
        ],
        "systems": [
          "환기횟수 측정"
        ]
      },
      {
        "client": "바이오씨앤디",
        "logo": "",
        "projects": [
          "강릉 WB 6ea 적격성평가",
          "강릉공장 생산장비 PQ"
        ],
        "systems": [
          "WB",
          "생산장비"
        ]
      },
      {
        "client": "신한프랜트",
        "logo": "",
        "projects": [
          "항온항습기 적격성평가"
        ],
        "systems": [
          "항온항습기"
        ]
      },
      {
        "client": "펩트론",
        "logo": "",
        "projects": [
          "충전기 적격성평가",
          "CB 4대, WB 2대, PB 7대, Mobile Booth 1대, RABS 5대 적격성평가"
        ],
        "systems": [
          "충전기",
          "CB",
          "WB",
          "PB",
          "Mobile Booth",
          "RABS"
        ]
      },
      {
        "client": "SR테크노팩",
        "logo": "",
        "projects": [
          "작업환경모니터링 적격성평가"
        ],
        "systems": [
          "작업환경모니터링 적격성평가"
        ]
      },
      {
        "client": "넨시스",
        "logo": "",
        "projects": [
          "유동층건조기 적격성평가"
        ],
        "systems": [
          "유동층건조기"
        ]
      },
      {
        "client": "동아ST",
        "logo": "",
        "projects": [
          "세척기 적격성평가"
        ],
        "systems": [
          "세척기"
        ]
      },
      {
        "client": "유진 코퍼레이션",
        "logo": "",
        "projects": [
          "장비 Qualification"
        ],
        "systems": [
          "장비"
        ]
      },
      {
        "client": "이노스",
        "logo": "",
        "projects": [
          "FIX LINE 공조 및 에어라인 설치공사 적격성평가"
        ],
        "systems": [
          "FIX LINE 공조",
          "에어라인"
        ]
      },
      {
        "client": "삼아제약",
        "logo": "",
        "projects": [
          "A.C.U항온항습기6R/T(3R/T DUAL) Validation"
        ],
        "systems": [
          "A.C.U 항온항습기 6R/T(3R/T DUAL)"
        ]
      },
      {
        "client": "영화과학",
        "logo": "",
        "projects": [
          "건조기 mapping 적격성평가"
        ],
        "systems": [
          "건조기"
        ]
      },
      {
        "client": "위아텍",
        "logo": "",
        "projects": [
          "HEPA Test 적격성평가"
        ],
        "systems": [
          "HEPA"
        ]
      },
      {
        "client": "GEM",
        "logo": "",
        "projects": [
          "겔포스 라인 CIP SKID 적격성평가"
        ],
        "systems": [
          "겔포스 라인 CIP SKID"
        ]
      },
      {
        "client": "썬팩 코포레이션",
        "logo": "",
        "projects": [
          "LAF의 PAO Test, 풍속테스트, 스모그테스트 지원"
        ],
        "systems": [
          "LAF"
        ]
      },
      {
        "client": "바이오CND",
        "logo": "",
        "projects": [
          "Pass box 등 장비 IQ, OQ"
        ],
        "systems": [
          "Pass Box"
        ]
      },
      {
        "client": "중위제약",
        "logo": "",
        "projects": [
          "크린부스 적격성평가"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "휴온스제약",
        "logo": "",
        "projects": [
          "크린부스 적격성평가"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "삼일제약",
        "logo": "",
        "projects": [
          "패스박스 적격성평가"
        ],
        "systems": [
          "패스박스"
        ]
      },
      {
        "client": "스카이소프트젤",
        "logo": "",
        "projects": [
          "정제계수기 IQ, OQ"
        ],
        "systems": [
          "정제계수기"
        ]
      },
      {
        "client": "휴템",
        "logo": "",
        "projects": [
          "clean booth 1ea 적격성평가"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "에이프로젠",
        "logo": "",
        "projects": [
          "크린부스 적격성평가"
        ],
        "systems": [
          "클린부스"
        ]
      },
      {
        "client": "구주제약",
        "logo": "",
        "projects": [
          "세레포렌 연질캡슐 공조 보완공사 TAB"
        ],
        "systems": [
          "세레포렌 연질캡슐 공조"
        ]
      },
      {
        "client": "국제약품",
        "logo": "",
        "projects": [
          "이동식부스 적격성평가"
        ],
        "systems": [
          "이동식부스"
        ]
      },
      {
        "client": "한라병원",
        "logo": "",
        "projects": [
          "BSC PAO test 수행"
        ],
        "systems": [
          "BSC"
        ]
      }
    ]
  },
  {
    "year": 2016,
    "clients": [
      {
        "client": "구주제약",
        "logo": "",
        "projects": [
          "장비 적격성평가 수행"
        ],
        "systems": [
          "장비"
        ]
      },
      {
        "client": "동광제약",
        "logo": "",
        "projects": [
          "장비 적격성평가 수행"
        ],
        "systems": [
          "장비"
        ]
      },
      {
        "client": "비씨월드제약",
        "logo": "",
        "projects": [
          "세척기 적격성평가",
          "Close Rabs 적격성평가",
          "이동식 부스 적격성평가"
        ],
        "systems": [
          "세척기",
          "Close RABS",
          "이동식 부스"
        ]
      },
      {
        "client": "녹십자",
        "logo": "",
        "projects": [
          "크린장비 적격성평가",
          "생산장비 적격성평가"
        ],
        "systems": [
          "클린장비",
          "생산장비"
        ]
      },
      {
        "client": "DM Bio",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "비전시스템",
        "logo": "",
        "projects": [
          "BSC 적격성평가"
        ],
        "systems": [
          "BSC"
        ]
      },
      {
        "client": "메디톡스",
        "logo": "",
        "projects": [
          "수처리 제조장치 적격성평가",
          "저장탱크 적격성평가"
        ],
        "systems": [
          "수처리 제조장치",
          "저장탱크"
        ]
      },
      {
        "client": "한서켐",
        "logo": "",
        "projects": [
          "공조시스템 적격성평가",
          "TAB & Qualification",
          "TAB 용역",
          "PAO Test 용역(연간)"
        ],
        "systems": [
          "공조시스템",
          "TAB & Qualification",
          "TAB 용역",
          "PAO Test 용역(연간)"
        ]
      },
      {
        "client": "서우이엔지",
        "logo": "",
        "projects": [
          "공조시스템 적격성평가",
          "TAB"
        ],
        "systems": [
          "공조시스템",
          "TAB"
        ]
      },
      {
        "client": "LG생명과학",
        "logo": "",
        "projects": [
          "세척기 적격성평가"
        ],
        "systems": [
          "세척기"
        ]
      },
      {
        "client": "리독스바이오",
        "logo": "",
        "projects": [
          "HVAC System TAB & PAO Test"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "jw생명과학",
        "logo": "",
        "projects": [
          "Booth 적격성평가"
        ],
        "systems": [
          "Booth"
        ]
      },
      {
        "client": "SR테크노팩",
        "logo": "",
        "projects": [
          "작업환경 모니터링 적격성평가"
        ],
        "systems": [
          "작업환경 모니터링 적격성평가"
        ]
      },
      {
        "client": "종근당",
        "logo": "",
        "projects": [
          "크린장비 적격성평가",
          "생산장비 적격성평가"
        ],
        "systems": [
          "클린장비",
          "생산장비"
        ]
      },
      {
        "client": "한국유나이티드제약",
        "logo": "",
        "projects": [
          "베트남 Clean Booth 적격성평가",
          "Pass box 적격성평가",
          "파워밀 등 생산장비 적격성평가"
        ],
        "systems": [
          "Clean Booth",
          "Pass Box",
          "파워밀",
          "생산장비"
        ]
      },
      {
        "client": "아주약품",
        "logo": "",
        "projects": [
          "크린장비 적격성평가",
          "칭량부스 등 장비 적격성평가"
        ],
        "systems": [
          "클린장비",
          "칭량부스"
        ]
      },
      {
        "client": "대웅제약",
        "logo": "",
        "projects": [
          "크린장비 적격성평가"
        ],
        "systems": [
          "클린장비"
        ]
      },
      {
        "client": "구스베",
        "logo": "",
        "projects": [
          "남양주 공장 HVAC System 적격성평가"
        ],
        "systems": [
          "HVAC System"
        ]
      },
      {
        "client": "차메디텍",
        "logo": "",
        "projects": [
          "정제시스템 적격성평가"
        ],
        "systems": [
          "정제시스템"
        ]
      },
      {
        "client": "국제약품",
        "logo": "",
        "projects": [
          "이동부스 적격성평가"
        ],
        "systems": [
          "이동부스"
        ]
      },
      {
        "client": "유한양행",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "동아ST",
        "logo": "",
        "projects": [
          "칭량부스 적격성평가"
        ],
        "systems": [
          "칭량부스"
        ]
      },
      {
        "client": "펜믹스",
        "logo": "",
        "projects": [
          "포장라인 생산장비 적격성평가",
          "분말 바이알 충전라인 생산장비 적격성평가",
          "2공장 훈증기 공급 배관 적격성평가"
        ],
        "systems": [
          "포장라인 생산장비",
          "분말 바이알 충전라인 생산장비",
          "훈증기 공급 배관"
        ]
      },
      {
        "client": "휴메딕스",
        "logo": "",
        "projects": [
          "파우더 충전시스템 적격성평가"
        ],
        "systems": [
          "파우더 충전시스템"
        ]
      },
      {
        "client": "PSK",
        "logo": "",
        "projects": [
          "반도체 장비 성능 테스트"
        ],
        "systems": [
          "반도체 장비"
        ]
      },
      {
        "client": "이글벳",
        "logo": "",
        "projects": [
          "생산장비 적격성평가",
          "ERP 컴퓨터시스템 적격성평가"
        ],
        "systems": [
          "생산장비",
          "ERP 컴퓨터시스템"
        ]
      },
      {
        "client": "일동제약",
        "logo": "",
        "projects": [
          "생산장비"
        ],
        "systems": [
          "생산장비"
        ]
      },
      {
        "client": "BC",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "동아제약",
        "logo": "",
        "projects": [
          "Clean Booth 적격성평가"
        ],
        "systems": [
          "Clean Booth"
        ]
      },
      {
        "client": "태준제약",
        "logo": "",
        "projects": [
          "액제 생산라인 적격성평가",
          "유동층건조기 적격성평가"
        ],
        "systems": [
          "액제 생산라인",
          "유동층건조기"
        ]
      },
      {
        "client": "한미약품",
        "logo": "",
        "projects": [
          "평택공장 훈증기 공급배관 적격성평가"
        ],
        "systems": [
          "훈증기 공급배관"
        ]
      }
    ]
  }
];
