// 대표 수행사 노출을 위한 편집 순서입니다. 실시간 시가총액/기업 가치 순위가 아닙니다.
// 대형 제약·바이오 및 글로벌 기업, 주요 국내 제약사, 전문 바이오 기업 순으로 고려합니다.
// 회사 규모 참고(2026-10-02 확인):
// https://samsungbiologics.com/kr/media/company-news/samsung-biologics-reports-fourth-quarter-and-fiscal-year-2025-financial-results
// https://www.celltrion.com/ko-kr/company/media-center/press-release/4453
// https://www.daewoong.co.kr/ko/about/introduction
// 명시된 표기만 매칭하며 원본 회사명·프로젝트·연도를 바꾸거나 회사를 합치지 않습니다.
// CJ, SBL, SK 안동 등 불명확한 약칭은 유명 기업으로 추정하지 않습니다.
const featuredCompanyNames: readonly (readonly string[])[] = [
  ["삼성바이오로직스"],
  ["셀트리온"],
  ["존슨앤존슨"],
  ["한국로슈"],
  ["머크"],
  ["LG화학", "LG Chem", "LG생명과학"],
  ["유한양행"],
  ["한미약품"],
  ["대웅제약"],
  ["종근당"],
  ["녹십자", "GC녹십자"],
  ["SK바이오사이언스", "에스케이바이오사이언스"],
  ["롯데바이오로직스"],
  ["보령제약"],
  ["HK이노엔", "에이치케이이노엔", "CJ헬스케어"],
  ["동아ST", "동아에스티"],
  ["동아제약"],
  ["jw중외제약"],
  ["휴온스", "휴온스제약"],
  ["일동제약"],
  ["동국제약"],
  ["한국콜마"],
  ["한국오츠카제약"],
  ["보스톤싸이언티픽"],
  ["CJ제일제당"],
  ["아모레퍼시픽"],
  ["한국쓰리엠"],
  ["휴젤"],
  ["파마리서치"],
  ["한올바이오파마", "한올바이오"],
  ["삼천당제약"],
  ["메디톡스"],
  ["삼양홀딩스", "삼양홀딩스 의약공장"],
  ["삼양바이오팜", "삼양바이오팜 의약공장"],
  ["종근당바이오", "CKD Bio", "종근당바이오 안산공장", "종근당바이오 예산공장"],
  ["대웅바이오"],
  ["셀트리온제약"],
  ["제일약품"],
  ["광동제약"],
  ["동화약품"],
  ["대원제약"],
  ["한국유나이티드제약", "한국유나이티드", "유나이티드제약"],
  ["삼진제약"],
  ["명인제약"],
  ["한림제약"],
  ["태준제약"],
  ["jw생명과학"],
  ["jw홀딩스"],
  ["프레스티지바이오로직스"],
  ["에이프로젠바이오로직스"],
  ["에이프로젠"],
  ["바이넥스"],
  ["유바이오로직스"],
  ["펩트론"],
  ["휴메딕스"],
  ["엘앤씨바이오"],
  ["이연제약"],
  ["경보제약"],
  ["보령바이오파마"],
  ["한국백신"],
  ["제뉴원사이언스"],
  ["알보젠", "알보젠코리아"],
  ["부광약품"],
  ["영진약품"],
  ["신풍제약"],
  ["환인제약"],
  ["서흥", "서흥캅셀"],
  ["코스맥스바이오"],
  ["콜마비앤에이치", "콜마 BNH"],
  ["펜믹스"],
  ["건일제약"],
  ["동광제약"],
  ["대화제약"],
  ["대한약품", "대한약품공업"],
  ["비씨월드제약"],
  ["한국팜비오"],
  ["하나제약"],
  ["삼일제약"],
  ["한국비엔씨"],
];

function companyKey(name: string) {
  return name.replace(/주식회사|\(주\)|㈜|\s/g, "").toUpperCase();
}

const priorities = new Map(
  featuredCompanyNames.flatMap((names, priority) =>
    names.map((name) => [companyKey(name), priority] as const),
  ),
);

export function prioritizeReferenceCompanies<T extends { client: string }>(companies: T[]): T[] {
  // 동일 우선순위와 미지정 회사는 원본 순서를 유지하고 원본 배열은 변경하지 않습니다.
  return companies
    .map((company, sourceIndex) => ({ company, sourceIndex }))
    .sort((a, b) =>
      (priorities.get(companyKey(a.company.client)) ?? Infinity)
      - (priorities.get(companyKey(b.company.client)) ?? Infinity)
      || a.sourceIndex - b.sourceIndex,
    )
    .map(({ company }) => company);
}
