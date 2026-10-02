export const homeHero = {
  logo: "./images/home/logo1.svg",
  title: "제약·바이오 전문 컨설팅 파트너",
  description:
    "GMP 현장의 요구사항과 규제기준을 바탕으로 개념설계, GMP Consulting, Validation (GMP, CSV) 서비스를 제공합니다.",
  ctaLabel: "문의하기",
  ctaHref: "#/contact",
  image: "./images/home/hero-gmp-facility.webp",
};

export const homeAbout = {
  titleLines: [],
  descriptionLines: [
    [
      { text: "기획", emphasis: true },
      { text: "부터 " },
      { text: "승인", emphasis: true },
      { text: "까지," },
    ],
    [
      { text: "GMP 전 과정" },
      { text: "을 " },
    ],
    [
      { text: "지원", emphasis: true },
      { text: "합니다." },
    ],
  ],
  summary:
    "사업 기획부터 설계, 품질 시스템 구축과 검증까지 프로젝트에 필요한 업무를 연결합니다.",
  frameworkSteps: [
    { position: "plan", title: "사업 기획", english: "Project Plan" },
    { position: "design", title: "시설·공정 설계", english: "Design" },
    { position: "qms", title: "품질 시스템", english: "QMS" },
    { position: "compliance", title: "규제 대응", english: "Compliance" },
    { position: "validation", title: "검증·승인", english: "Validation" },
  ],
  ctaLabel: "회사소개서 다운로드",
  // PDF를 client/public/documents/에 추가한 뒤 "./documents/파일명.pdf"를 입력합니다.
  // 빈 값이면 다운로드 버튼이 준비 중 상태로 표시됩니다.
  ctaHref: "./documents/infact-company-profile-2026-10.pdf",
  ctaDownloadName: "(주)인팩트 -회사소개서 2026.10.pdf",
  metrics: [
    { value: 2016, label: "회사 설립" },
    { value: 1000, suffix: "+", label: "누적 프로젝트 수행", format: true },
    { value: 38, label: "전문인력" },
  ],
};

export const homeExperienceClients = [
  "삼성바이오로직스",
  "셀트리온",
  "존슨앤존슨",
  "머크",
  "LG화학",
  "유한양행",
  "한미약품",
  "대웅제약",
  "종근당",
  "GC녹십자",
  "SK바이오사이언스",
  "롯데바이오로직스",
  "보령제약",
  "HK이노엔",
  "동아ST",
  "동아제약",
  "JW중외제약",
  "휴온스",
  "일동제약",
  "동국제약",
  "한국오츠카제약",
  "휴젤",
  "파마리서치",
  "한올바이오파마",
] as const;

export const homeExperienceCta = {
  titleLines: ["검증된 전문 컨설턴트가", "함께합니다."],
  description:
    "개념설계에서부터 GMP 승인에 이르는 많은 프로젝트를 수행한 전문인력이 축적된 실무 경험을 바탕으로 사업별, 진행 단계별, 실행 방향을 제시합니다.",
  image: "./images/home/service-03.jpg",
  primary: { label: "수행실적 보기", href: "#/references" },
  secondary: { label: "문의하기", href: "#/contact" },
};
