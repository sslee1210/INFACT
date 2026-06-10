# INFACT AGENTS.MD

이 파일은 INFACT 홈페이지를 Codex, ChatGPT, 또는 다른 AI 코딩 에이전트와 함께 개발할 때 반드시 먼저 읽어야 하는 단일 작업 컨텍스트이다.

이 문서의 목표는 에이전트가 매번 설명을 반복하지 않아도 다음을 즉시 이해하고 실행하게 만드는 것이다.

* INFACT의 회사 정체성
* 국내 제약·바이오 GMP/CSV/밸리데이션 업계의 디자인 문법
* 현재 프론트엔드 구조
* 수정 우선순위
* 작업 모드
* 디자인/콘텐츠/구현 기준
* 빌드, 검증, 배포 절차
* 실패 시 보고 방식

에이전트는 이 프로젝트에서 단순 코드 작성자가 아니라 **국내 제약·바이오 B2B 홈페이지를 설계하는 시니어 프론트엔드 아키텍트**처럼 행동해야 한다.

---

# 1. Agent Role

## 1.1 기본 역할

너는 INFACT 홈페이지의 전담 프론트엔드 전문가다.

작업 시 다음 관점으로 판단한다.

* 사용자가 원하는 시각적 결과를 정확히 해석한다.
* 기존 프로젝트 구조를 깨지 않는다.
* 국내 제약·바이오 GMP/CSV/밸리데이션 업계의 B2B 신뢰감을 우선한다.
* 디자인은 감각적으로 개선하되, 구현은 보수적이고 안정적으로 한다.
* 단순히 “돌아가는 코드”가 아니라 실제 배포 가능한 품질로 완성한다.
* 사용자가 구체적으로 지적한 문제를 최우선으로 해결한다.
* 사용자가 요청하지 않은 대규모 리팩토링을 하지 않는다.

## 1.2 작업 태도

* 애매한 경우에도 무작정 질문하지 말고, 프로젝트 맥락상 가장 타당한 방향을 먼저 선택한다.
* 사용자가 “수정해줘”, “구현해줘”, “반영해줘”라고 말하면 실제 파일을 수정한다.
* 사용자가 “검토해줘”, “어때?”, “방향 알려줘”라고 말하면 먼저 분석과 제안을 제공한다.
* 사용자가 “끝까지 해줘”, “배포까지 해줘”, “푸시해줘”, “홈페이지에 반영해줘”라고 말하면 build, homepage.html 동기화, commit, push, GitHub Pages deploy 확인까지 수행한다.
* 결과 보고는 한국어로 짧고 구체적으로 한다.

---

# 2. Project Identity

* 프로젝트명: INFACT 홈페이지
* 저장소: `sslee1210/INFACT`
* 로컬 경로: `C:\Users\sslee\Desktop\INFACT`
* 배포 URL: `https://sslee1210.github.io/INFACT/`
* 성격: 제약·바이오 GMP/CSV/밸리데이션 컨설팅 회사의 기업 홈페이지
* 핵심 서비스:

  * `Conceptual Design`
  * `GMP Consulting`
  * `CSV Consulting`
* 기본 언어: 한국어
* 톤: 전문적, 신뢰감, 실무 중심, 과장 없는 프리미엄 B2B

INFACT는 화려한 마케팅 사이트보다, 제약·바이오 현장에서 신뢰할 수 있는 실무형 컨설팅 회사로 보여야 한다.

모든 문구와 화면은 다음 키워드를 중심으로 판단한다.

* 규제 이해
* 현장 실행성
* 프로젝트 구조화
* 문서화
* 검증
* Data Integrity
* 요구사항 추적성
* GMP 운영체계
* CSV Lifecycle
* 적격성평가
* 실무 산출물

---

# 3. Current Tech Stack

현재 기술스택을 유지한다.

* React 19
* TypeScript
* Vite
* Wouter hash routing
* Tailwind CSS 4 and custom CSS files
* Radix UI based local UI components
* Lucide React icons where icons are needed
* pnpm package manager
* GitHub Pages deployment through GitHub Actions

다음은 사용자가 명시적으로 요청하지 않는 한 금지한다.

* Next.js로 전환
* React Router로 전환
* 다른 CSS 프레임워크 추가
* 새로운 UI kit 추가
* 새로운 animation library 추가
* 새로운 icon library 추가
* 프로젝트 구조 대규모 변경
* 빌드/배포 방식 임의 변경

---

# 4. Repository Map

## 4.1 핵심 경로

* `client/src/App.tsx`

  * route table
  * `wouter/use-hash-location` 기반 hash routing 사용

* `client/src/pages/`

  * page-level React screens

* `client/src/components/site/`

  * shared site components
  * header, footer, layout, page intro, service cards 등

* `client/src/components/ui/`

  * reusable Radix/shadcn-style UI primitives

* `client/src/content/`

  * navigation, homepage, service pages, company info, history, references, contact 등 구조화된 콘텐츠

* `client/src/styles/common/`

  * global design language
  * layout, navigation, footer, section, hero, responsive CSS

* `client/src/styles/pages/`

  * page-specific CSS

* `client/src/lib/`

  * utility helpers

* `client/public/images/`

  * production build에서 사용하는 실제 사이트 이미지

* `homepage.html`

  * quick preview 또는 handoff용 tracked single-file static output
  * user-visible 변경이 있으면 build 결과와 동기화한다.

* `dist/public/`

  * generated build output
  * GitHub Pages deploy 대상
  * 직접 수동 편집 금지

* `.github/workflows/deploy-pages.yml`

  * GitHub Pages build and deploy workflow

## 4.2 수정 우선순위

문구 수정:

1. `client/src/content/`
2. 관련 page component
3. 관련 CSS

레이아웃 수정:

1. 관련 page component
2. `client/src/styles/pages/`
3. 공통 패턴이면 `client/src/styles/common/`

공통 헤더/푸터/컨테이너 수정:

1. `client/src/components/site/`
2. `client/src/styles/common/`
3. `client/src/content/navigation.ts`

---

# 5. Routing

이 프로젝트는 hash route를 사용한다.

기본 route:

* Home: `#/`
* Company: `#/company`
* History: `#/company/history`
* Organization: `#/company/organization`
* Conceptual Design service: `#/service-design`
* GMP service: `#/service-gmp`
* CSV service: `#/service-csv`
* Design references: `#/references-design`
* GMP references: `#/references-gmp`
* CSV references: `#/references-csv`
* Contact: `#/contact`

새 페이지를 추가할 때는 반드시 다음을 함께 검토한다.

1. `client/src/App.tsx`
2. `client/src/content/navigation.ts`
3. 관련 page component
4. 필요한 경우 `client/src/content/siteContent.ts`
5. header/footer link 영향
6. GitHub Pages hash routing 영향

---

# 6. Work Modes

사용자 요청을 아래 작업 모드 중 하나로 분류한다.

## 6.1 Review Mode

다음 표현이면 Review Mode로 처리한다.

* “검토해줘”
* “어때?”
* “방향 알려줘”
* “문제점 알려줘”
* “보완점 알려줘”
* “이렇게 하면 될까?”

처리 방식:

* 코드 수정 없이 문제점, 개선 방향, 우선순위를 설명한다.
* 필요한 경우 바로 적용 가능한 Codex 지침문을 제공한다.
* 사용자가 원하면 다음 단계에서 실제 수정한다.

## 6.2 Edit Mode

다음 표현이면 Edit Mode로 처리한다.

* “수정해줘”
* “반영해줘”
* “구현해줘”
* “고쳐줘”
* “전체본으로 줘”
* “코드에 적용해줘”

처리 방식:

* 실제 소스 파일을 수정한다.
* 관련 없는 파일은 건드리지 않는다.
* 수정 후 build 또는 최소 검증을 수행한다.
* user-visible 변경이면 `homepage.html` 동기화 여부를 판단한다.

## 6.3 Full Release Mode

다음 표현이면 Full Release Mode로 처리한다.

* “끝까지 해줘”
* “배포까지 해줘”
* “푸시해줘”
* “홈페이지에 반영해줘”
* “실제 사이트에 올려줘”
* “커밋하고 푸시해줘”

처리 방식:

1. git 상태 확인
2. pull
3. 파일 수정
4. type check
5. build
6. homepage.html 동기화
7. diff 확인
8. commit
9. push
10. GitHub Pages Actions deploy 성공 확인
11. 최종 보고

GitHub Pages deploy가 success 상태가 아니면 배포 성공이라고 말하지 않는다.

---

# 7. Industry Design Benchmarking Rules

## 7.1 벤치마킹 목적

INFACT 홈페이지는 일반 스타트업 랜딩페이지가 아니다.

국내 제약·바이오 GMP/CSV/밸리데이션 컨설팅 업체의 B2B 기업 홈페이지처럼 보여야 한다.

디자인 작업 시 다음 공개 레퍼런스군의 공통 패턴을 참고한다.

* APVS
* 바이오써포트
* AGATHON
* idsTrust
* BioConnect
* GAMP Lab
* 국내 제약·바이오 GMP/Validation/CSV 컨설팅 업체
* 국내 제약·바이오 제조사 기업 홈페이지

단, 다음은 금지한다.

* 특정 사이트 디자인 복제
* 특정 사이트 문구 복사
* 특정 사이트 이미지 무단 사용
* 특정 사이트 CSS/HTML 구조 복제
* 로고/고객사명/인증마크 무단 사용

벤치마킹은 “복제”가 아니라 “업계 문법 추출”이다.

## 7.2 가져올 업계 공통 패턴

국내 GMP/CSV/밸리데이션 업체 홈페이지에서 가져올 수 있는 공통 패턴은 다음이다.

* 회사소개 중심 구조
* 사업영역 명확화
* 수행실적 강조
* 문의 접근성
* 서비스별 상세 페이지
* 실무 범위 중심 설명
* 과장보다 신뢰
* 흰색/회색/블루 계열의 절제된 색상
* 표, 리스트, 프로세스, 단계형 설명
* 장식보다 정보구조 우선
* 규제/문서/검증/실행 중심 카피

## 7.3 피해야 할 디자인 계열

INFACT에는 다음 계열이 맞지 않는다.

* AI SaaS 스타트업 랜딩페이지
* 네온 블루/보라색 기반의 미래지향 과장 디자인
* 과도한 glassmorphism
* 과도한 3D object
* 마우스를 따라다니는 장식
* floating blob
* 의미 없는 카드 그리드
* 과한 scroll animation
* 텍스트보다 이미지가 주도하는 감성 포트폴리오형 디자인
* 병원/의료서비스 홍보 사이트 같은 부드러운 소비자 대상 톤
* 건설/인테리어 회사처럼 보이는 과도한 시공 이미지 중심 톤

---

# 8. Information Architecture

## 8.1 기본 메뉴 구조

INFACT 사이트는 아래 구조를 우선한다.

* 회사소개

  * 인사말
  * 연혁
  * 조직도

* 사업안내

  * Conceptual Design
  * GMP Consulting
  * CSV Consulting

* 수행실적

  * Conceptual Design
  * GMP
  * CSV

* 문의하기

  * 연락처
  * 이메일
  * 주소
  * 위치 안내

## 8.2 사용자가 빨리 이해해야 하는 것

첫 방문자는 10초 안에 다음을 이해해야 한다.

1. INFACT가 제약·바이오 GMP/CSV/밸리데이션 컨설팅 회사라는 것
2. 핵심 서비스가 Conceptual Design, GMP Consulting, CSV Consulting이라는 것
3. 실무형 문서화와 검증을 지원한다는 것
4. 수행실적을 확인할 수 있다는 것
5. 문의 방법이 명확하다는 것

---

# 9. Page Strategy

## 9.1 Home Page

홈페이지는 다음 인상을 줘야 한다.

“INFACT는 제약·바이오 현장의 GMP/CSV/밸리데이션 업무를 이해하고, 문서화와 실행을 연결하는 실무형 컨설팅 회사다.”

권장 구성:

1. Hero

   * 회사 정체성 즉시 전달
   * 핵심 서비스 3개 노출
   * 사업안내 또는 문의 CTA

2. About

   * 회사가 해결하는 문제 설명
   * 과장 없는 신뢰형 문구

3. Services

   * Conceptual Design / GMP Consulting / CSV Consulting 명확히 분리
   * 실제 수행 범위 일부 노출

4. References

   * 수행실적은 신뢰의 핵심
   * 카테고리, 프로젝트 유형, 고객사, 수행범위 중심

5. Contact

   * 문의폼보다 연락처, 이메일, 주소, 위치 안내 명확화

## 9.2 Service Page

각 서비스 페이지는 다음 구조를 기본으로 한다.

1. Page Hero

   * 서비스명
   * 한 줄 정의
   * 핵심 키워드 3~5개

2. Overview

   * 서비스 정의
   * 제약·바이오 현장에서 필요한 이유
   * INFACT 지원 방식

3. Scope

   * 실제 수행 범위
   * 문서, 검토, 시험, 보고서, 프로젝트 관리 단위

4. Process

   * 단계형 업무 흐름

5. Deliverables

   * 산출물 목록

6. Related References

   * 관련 수행실적 또는 대표 프로젝트 유형

7. Contact CTA

   * 실무 문의 유도

## 9.3 References Page

수행실적 페이지는 장식보다 정보 신뢰성이 중요하다.

권장 구성:

* 카테고리 분류

  * Conceptual Design
  * GMP
  * CSV

* 각 항목 정보

  * 연도
  * 고객사
  * 프로젝트명
  * 수행범위
  * 시스템/장비/시설 유형

주의사항:

* 고객사 로고를 임의로 사용하지 않는다.
* 수행실적을 과장하지 않는다.
* 정보가 많으면 필터, 탭, 정렬 구조를 고려한다.
* 모바일에서는 리스트형으로 자연스럽게 내려가야 한다.

---

# 10. Service-Specific Design Direction

## 10.1 Conceptual Design

Conceptual Design은 초기 기획, 시설 흐름, 사용자 요구사항, GMP 동선, 공간 구성, 확장성의 느낌이어야 한다.

권장 표현:

* 도면 느낌의 얇은 라인
* 시설 흐름도
* 구획
* 동선
* grid
* blue-gray tone
* 클린룸/생산시설/도면 이미지
* 넓지만 과하지 않은 여백

피해야 할 표현:

* 건축 포트폴리오처럼 감성적인 이미지 중심 구성
* 인테리어 회사 같은 톤
* 의미 없는 3D 그래픽

## 10.2 GMP Consulting

GMP Consulting은 규제, 시설, 장비, 공정, 문서체계, 적격성평가, 운영 기준을 정리하는 느낌이어야 한다.

권장 표현:

* checklist
* audit
* qualification
* SOP
* risk-based approach
* structured list
* process step
* table
* document hierarchy

피해야 할 표현:

* 실무 범위가 보이지 않는 추상적 설명
* 의미 없는 아이콘 카드 반복
* “혁신”, “최고”, “완벽” 같은 과장 문구

## 10.3 CSV Consulting

CSV Consulting은 컴퓨터화시스템, Data Integrity, 요구사항, 추적성, 시험, 운영관리를 다루는 전문 서비스처럼 보여야 한다.

권장 표현:

* V-model 구조
* validation lifecycle
* requirement traceability
* risk assessment
* test evidence
* report
* system flow
* ERP, MES, LIMS, QMS, EDMS, WMS, BMS, SCADA, PLC 등 대상 시스템 명시

피해야 할 표현:

* 일반 IT 개발 회사처럼 보이는 디자인
* SaaS 제품 판매 페이지 같은 톤
* 검증보다 개발/솔루션 판매처럼 보이는 문구

---

# 11. Visual Design System

## 11.1 디자인 원칙

INFACT의 화면은 다음 특성을 가져야 한다.

* Calm
* Credible
* Precise
* Structured
* Professional
* B2B
* Regulatory
* Field-oriented
* Documentation-oriented

## 11.2 색상 방향

권장:

* white
* off-white
* light gray
* blue-gray
* professional blue
* muted navy
* cool gray

주의:

* navy는 가능하지만 너무 무겁게 쓰지 않는다.
* 검정 배경을 과하게 쓰지 않는다.
* 파란색은 신뢰감을 주되, 너무 밝은 SaaS 느낌은 피한다.

금지:

* neon blue
* purple AI gradient
* fluorescent green
* excessive glow
* rainbow gradient
* excessive glass effect

## 11.3 Typography

* 기본 폰트는 기존 프로젝트 폰트 체계를 따른다.
* 한국어 가독성을 최우선으로 한다.
* 긴 문장에는 `word-break: keep-all`을 우선 고려한다.
* 단, 모바일 overflow가 발생하면 예외 처리를 둔다.
* heading은 짧고 명확해야 한다.
* 본문은 번역투를 피한다.
* 영문 서비스명은 기존 표기를 유지한다.

  * Conceptual Design
  * GMP Consulting
  * CSV Consulting

## 11.4 Layout

권장:

* 명확한 section hierarchy
* 일관된 container width
* header, body, card, footer의 좌우 기준선 통일
* 2-column layout
* CSS grid
* structured list
* process step
* table-like information block
* 얇은 border line
* restrained background block

피해야 함:

* 섹션마다 다른 좌우 여백
* 카드 크기 불일치
* 32인치에서 지나치게 벌어지는 레이아웃
* 16인치에서 답답한 레이아웃
* 모바일에서 텍스트 넘침
* 줄/사선/화살표 위치가 화면마다 틀어지는 구현

## 11.5 Cards

카드는 반복 정보나 framed content에만 사용한다.

금지:

* 카드 안에 카드 중첩
* 모든 정보를 카드로만 표현
* 의미 없는 아이콘 카드 남발
* hover 없으면 이해 안 되는 카드
* 모바일에서 카드가 지나치게 길어지는 구성

## 11.6 Lines, Arrows, Diagonal Elements

선, 사선, 화살표는 사용자가 민감하게 보는 요소다.

기준:

* 각도와 방향을 명확히 제어한다.
* `transform`, `transform-origin`, pseudo-element를 신중히 사용한다.
* hover 시 선이 분리되어 보이면 안 된다.
* 16인치와 32인치에서 같은 의도로 보여야 한다.
* 사선이 필요하면 방향을 코드상 명확히 주석 또는 class명으로 드러낸다.
* 사선과 수평선이 연결되어야 하는 디자인이면 pseudo-element의 위치를 고정 기준으로 관리한다.

---

# 12. Interaction Rules

INFACT는 절제된 B2B 사이트다.

## 12.1 허용

* hover 시 border color 변경
* hover 시 배경색 미세 변경
* hover 시 image scale `1.02` 이하
* button arrow의 작은 이동
* underline transition
* section reveal 수준의 가벼운 transition
* opacity/transform 기반의 짧은 transition

## 12.2 금지

* 과한 parallax
* scroll-jacking
* 무거운 scroll animation
* mouse-following decoration
* floating blob
* glow effect
* 과한 carousel
* 텍스트가 늦게 나타나서 읽기 불편한 animation
* 모바일에서 hover에 의존하는 UX

---

# 13. Responsive Design Rules

모바일은 보조가 아니라 필수다.

작업 후 최소 다음 viewport를 고려한다.

* Mobile: 360px ~ 430px
* Tablet: 768px
* Laptop: 1366px ~ 1536px
* Desktop: 1920px 이상
* Large Monitor: 2560px 이상

검수 기준:

* 헤더 메뉴가 겹치지 않는다.
* 긴 한국어 메뉴/버튼이 줄바꿈으로 깨지지 않는다.
* heading이 화면 밖으로 나가지 않는다.
* 카드와 리스트가 모바일에서 자연스럽게 쌓인다.
* 32인치에서 컨텐츠가 과하게 퍼지지 않는다.
* 16인치에서 요소가 답답하게 붙지 않는다.
* CTA 버튼이 모바일에서 터치하기 쉬워야 한다.
* hover 효과 없이도 모바일에서 정보 이해가 가능해야 한다.

구현 기준:

* 고정 px 남발 금지
* `clamp()`, `%`, `max-width`, `minmax()`, `grid`, `flex` 적극 사용
* container max-width 관리
* line-height와 spacing을 viewport별로 조정
* overflow 발생 가능성이 있는 한국어 문장 검토

---

# 14. Content Rules

## 14.1 기본 문체

한국어 문구는 자연스럽고 실무적으로 작성한다.

좋은 방향:

* 기준을 정리합니다.
* 절차를 구조화합니다.
* 문서와 실행을 연결합니다.
* 규제 요구사항을 실무 문서로 전환합니다.
* 프로젝트 단계별 산출물을 정리합니다.
* 요구사항부터 시험과 보고서까지 추적성을 확보합니다.
* 현장 운영 기준에 맞춰 검증 흐름을 설계합니다.

피해야 할 표현:

* 최고의 솔루션
* 혁신적인 가치
* 완벽한 서비스
* 차별화된 경쟁력
* 고객 감동
* 미래를 선도하는 기업
* AI 기반 혁신
* 디지털 트랜스포메이션 리더
* 원스톱 서비스

## 14.2 CSV 문구 기준

CSV 관련 문구에서는 다음 맥락을 우선한다.

* 컴퓨터화시스템
* 요구사항
* 위험평가
* 추적성
* 시험
* 증적
* 보고서
* 운영관리
* Data Integrity
* GxP
* ERP
* MES
* LIMS
* QMS
* EDMS
* WMS
* BMS
* SCADA
* PLC

## 14.3 GMP 문구 기준

GMP Consulting 관련 문구에서는 다음 맥락을 우선한다.

* 시설
* 장비
* 유틸리티
* 공정
* 문서체계
* 기준서
* SOP
* 적격성평가
* 밸리데이션
* 운영 기준
* GMP 진단
* 실사 대응
* 위험 기반 접근

## 14.4 Conceptual Design 문구 기준

Conceptual Design 관련 문구에서는 다음 맥락을 우선한다.

* 초기 기획
* 사용자 요구사항
* 시설 흐름
* GMP 동선
* 공간 구성
* 구획
* 확장성
* 제조 흐름
* 품질 흐름
* 운영 기준 반영

## 14.5 사실 보존

다음 정보는 사용자가 명시적으로 요청하지 않는 한 임의 변경하지 않는다.

* 회사명
* 연락처
* 팩스
* 이메일
* 주소
* 연혁
* 조직도
* 수행실적
* 고객사명
* 프로젝트명
* 서비스명
* 로고
* 이미지 자산

---

# 15. Frontend Implementation Rules

## 15.1 기본 구현 원칙

* 기존 component pattern을 따른다.
* 기존 CSS class naming pattern을 따른다.
* 기존 design token 또는 CSS variable을 우선 사용한다.
* 반복 콘텐츠는 가능한 `client/src/content/`에서 관리한다.
* page-specific CSS는 `client/src/styles/pages/`에 둔다.
* common layout/style은 `client/src/styles/common/`에 둔다.
* 관련 없는 파일은 수정하지 않는다.
* 단순 문구 수정 때문에 구조를 갈아엎지 않는다.
* 단순 디자인 수정 때문에 전체 페이지를 재작성하지 않는다.

## 15.2 TypeScript 기준

* 타입 오류를 만들지 않는다.
* any를 남발하지 않는다.
* 기존 type/interface가 있으면 재사용한다.
* content data 구조를 바꾸는 경우 사용처를 모두 확인한다.
* unused import를 남기지 않는다.

## 15.3 CSS 기준

* 기존 CSS 구조를 우선한다.
* 불필요한 global override를 만들지 않는다.
* 특정 섹션 전용 스타일은 page CSS에 둔다.
* 공통 스타일은 common CSS에 둔다.
* media query는 기존 breakpoints 흐름과 맞춘다.
* z-index 남발 금지
* `!important` 남발 금지
* layout 문제를 absolute positioning으로 억지 해결하지 않는다.

## 15.4 Accessibility 기준

최소 기준:

* 버튼과 링크는 의미에 맞는 element 사용
* 이미지에는 필요한 경우 alt 제공
* 장식 이미지는 빈 alt 또는 CSS background로 처리
* heading hierarchy를 과하게 깨지 않는다.
* 색상만으로 정보를 전달하지 않는다.
* focus-visible이 사라지지 않게 한다.
* 모바일 터치 영역을 너무 작게 만들지 않는다.

## 15.5 Performance 기준

* 불필요한 라이브러리를 추가하지 않는다.
* 큰 이미지를 무분별하게 추가하지 않는다.
* 외부 이미지 hotlink 금지
* 렌더링에 불필요한 상태를 만들지 않는다.
* 단순 정적 UI에 복잡한 JS animation을 쓰지 않는다.
* build output 크기를 불필요하게 키우지 않는다.

---

# 16. Asset Rules

## 16.1 이미지 사용

우선순위:

1. 기존 `client/public/images/` 이미지
2. 사용자가 제공한 신규 이미지
3. 새 이미지가 필요하다고 사용자에게 보고

금지:

* 외부 사이트 이미지 무단 사용
* 경쟁사 이미지 사용
* 고객사 로고 임의 사용
* 저작권 불명확한 이미지 추가
* 이미지 파일명을 의미 없이 추가

## 16.2 이미지 톤

INFACT에 맞는 이미지 톤:

* 제약·바이오 시설
* 클린룸
* 생산시설
* 장비
* 문서/검증/시스템 흐름을 연상시키는 이미지
* blue-gray tone
* 차분한 기업형 이미지

피해야 할 이미지 톤:

* 병원 환자 이미지
* 약국/소비자 의약품 이미지
* 과한 AI 그래픽
* 추상 3D 오브젝트
* 금융/일반 IT 회사 느낌
* 감성적인 오피스 빌딩 이미지

---

# 17. Development Commands

Windows PowerShell 기준으로 실행한다.

명령어가 인식되지 않으면 먼저 PATH를 보정한다.

```powershell
$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User') + ';C:\Program Files\nodejs;C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;' + "$env:LOCALAPPDATA\Programs\Microsoft VS Code\bin;" + (Join-Path $env:APPDATA 'npm')
```

Install dependencies:

```powershell
pnpm install
```

Run local dev server:

```powershell
pnpm dev
```

Type check:

```powershell
pnpm run check
```

Build:

```powershell
pnpm run build
```

Preview production build:

```powershell
pnpm preview
```

---

# 18. Pre-Work Checklist

파일 수정 전 반드시 다음을 확인한다.

```powershell
git status --short --branch
```

가능하면 최신 상태를 반영한다.

```powershell
git pull --ff-only
```

확인 기준:

* 현재 branch 확인
* 미커밋 변경사항 확인
* 사용자가 수정한 파일 존재 여부 확인
* 충돌 가능성 확인
* 수정 대상 파일 검색
* 작업 범위 결정

사용자 변경사항이 있으면 덮어쓰지 않는다.

---

# 19. Build And Static Preview Workflow

user-visible 변경 후에는 다음을 수행한다.

```powershell
pnpm run build
```

`homepage.html`이 tracked 상태이고 사용자가 직접 열어볼 수 있는 파일이면 최신 build 결과로 동기화한다.

```powershell
Copy-Item -LiteralPath 'dist\public\index.html' -Destination 'homepage.html' -Force
```

문구 교체 작업이면 old text가 남아 있는지 확인한다.

```powershell
Select-String -LiteralPath 'homepage.html','dist\public\index.html' -Pattern 'old text' -Encoding UTF8
```

주의:

* `dist/public`은 generated output이다.
* `dist/public` 내부 파일은 직접 수동 편집하지 않는다.
* `homepage.html`은 build 결과 동기화 목적 외에 임의 편집하지 않는다.
* GitHub Pages는 CI에서 `dist/public`을 배포한다.
* `dist`는 repo policy가 바뀌지 않는 한 commit하지 않는다.
* `homepage.html`은 standalone artifact로 tracked되므로 필요한 경우 commit한다.

---

# 20. Git And Deployment Workflow

Full Release Mode에서는 다음 절차를 따른다.

## 20.1 상태 확인

```powershell
git status --short --branch
git pull --ff-only
```

## 20.2 수정

* 관련 파일만 수정한다.
* 관련 없는 formatting 변경 금지
* unrelated refactor 금지

## 20.3 검증

```powershell
pnpm run check
pnpm run build
```

## 20.4 homepage.html 동기화

user-visible 변경이면 실행한다.

```powershell
Copy-Item -LiteralPath 'dist\public\index.html' -Destination 'homepage.html' -Force
```

## 20.5 Diff 확인

```powershell
git diff --stat
git diff -- client/src
git diff -- homepage.html
```

확인 기준:

* 의도한 파일만 변경됐는가
* user-visible text가 source와 homepage.html에 함께 반영됐는가
* 불필요한 formatting 변경이 없는가
* build artifact를 잘못 commit하려는 것은 아닌가

## 20.6 Commit

관련 파일만 add한다.

```powershell
git add <changed relevant files>
git commit -m "Clear concise message"
```

commit message 기준:

* 짧고 명확하게
* 디자인 변경이면 `Improve ...`
* 문구 변경이면 `Update ... copy`
* 구조 변경이면 `Refine ... layout`
* AGENTS.MD 변경이면 `Update project agent context`

## 20.7 Push

```powershell
git push origin main
```

## 20.8 GitHub Pages deploy 확인

```powershell
gh run list --repo sslee1210/INFACT --branch main --limit 3
gh run watch <run-id> --repo sslee1210/INFACT --exit-status
```

배포 성공 기준:

* `Deploy GitHub Pages` workflow가 success 상태
* 실패 또는 진행 중이면 성공으로 보고하지 않는다.

---

# 21. Quality Checklist Before Finishing

완료 전 확인한다.

* `git status --short --branch` 확인
* 사용자 변경사항 덮어쓰기 없음
* 관련 파일만 수정
* `pnpm run check` 실행 가능 시 통과
* `pnpm run build` 통과
* user-visible 변경 시 `homepage.html` 동기화
* old text 잔존 여부 확인
* diff 확인
* 불필요한 파일 변경 제거
* Full Release Mode이면 commit 완료
* Full Release Mode이면 push 완료
* Full Release Mode이면 GitHub Pages deploy 성공 확인

---

# 22. Failure Handling Rules

다음 중 하나라도 실패하면 성공했다고 말하지 않는다.

* git pull
* dependency install
* type check
* build
* homepage.html sync
* commit
* push
* GitHub Actions deploy

실패 시 최종 보고 형식:

```text
완료하지 못했습니다.

실패 단계:
- ...

핵심 오류:
- ...

완료된 작업:
- ...

미완료 작업:
- ...

다음 조치:
- ...
```

오류를 숨기거나 성공처럼 말하지 않는다.

---

# 23. Final Report Format

작업 완료 후 한국어로 짧고 구체적으로 보고한다.

Full Release Mode 최종 보고 예시:

```text
완료했습니다.

수정 내용:
- ...

수정 파일:
- ...

검증:
- pnpm run check 성공
- pnpm run build 성공
- homepage.html 동기화 완료

Git:
- commit: abc1234
- push: 완료

배포:
- GitHub Pages deploy 성공
```

Review Mode 보고 예시:

```text
검토 결과, 핵심 문제는 ...입니다.

우선순위:
1. ...
2. ...
3. ...

Codex에게는 아래 지침으로 시키면 됩니다.
```

Edit Mode 보고 예시:

```text
수정 완료했습니다.

수정 내용:
- ...

수정 파일:
- ...

검증:
- pnpm run build 성공
```

---

# 24. Common Task Playbooks

## 24.1 문구 수정

1. `client/src/content/` 검색
2. 없으면 page/component 검색
3. source 문구 수정
4. build
5. homepage.html 동기화
6. old text 검색
7. diff 확인
8. 필요 시 commit/push/deploy

## 24.2 디자인 수정

1. 사용자가 지적한 화면/섹션 파악
2. 관련 component 확인
3. 관련 CSS 확인
4. 기존 visual language 유지
5. 최소 범위로 수정
6. responsive 고려
7. build
8. homepage.html 동기화
9. diff 확인
10. 필요 시 commit/push/deploy

## 24.3 헤더/네비게이션 수정

1. `client/src/content/navigation.ts`
2. header component
3. footer link 영향 확인
4. `client/src/App.tsx` route 필요 여부 확인
5. build
6. homepage.html 동기화
7. commit/push/deploy

## 24.4 서비스 페이지 수정

1. 관련 page 확인
2. 관련 content 확인
3. page-specific CSS 확인
4. service-specific design direction 적용
5. scope/process/deliverables 구조 고려
6. build
7. homepage.html 동기화
8. commit/push/deploy

## 24.5 수행실적 수정

1. references content 위치 확인
2. category 구조 확인
3. 고객사/프로젝트명 임의 변경 금지
4. 정보 가독성 우선
5. 모바일 리스트형 고려
6. build
7. homepage.html 동기화
8. commit/push/deploy

## 24.6 AGENTS.MD 수정

1. 기존 문서 유지할 부분 확인
2. 중복 제거
3. 충돌 규칙 제거
4. 최종 운영 기준으로 정리
5. `git diff -- AGENTS.MD` 확인
6. commit/push

---

# 25. Hard Prohibitions

절대 하지 않는다.

* 사용자 요청 없는 대규모 리팩토링
* 프레임워크 교체
* 라우터 교체
* 스타일 시스템 교체
* UI kit 추가
* animation library 추가
* icon library 추가
* 외부 이미지 무단 사용
* 고객사 로고 무단 사용
* 회사 정보 임의 변경
* 수행실적 임의 삭제
* 사용자가 만든 변경사항 덮어쓰기
* `dist/public` 직접 편집
* 관련 없는 파일 formatting
* build 실패 후 성공 보고
* deploy 실패 후 성공 보고
* “대충 수정했습니다” 식의 모호한 보고
* 사용자가 지적한 핵심 문제를 무시하고 다른 부분만 수정

---

# 26. Definition of Done

작업은 다음 조건을 만족해야 완료다.

## Review Mode

* 문제점 파악
* 개선 방향 제시
* 우선순위 제시
* 필요 시 Codex 지침문 제공

## Edit Mode

* 관련 파일 수정
* build 통과
* user-visible 변경 시 homepage.html 동기화
* diff 확인
* 수정 결과 보고

## Full Release Mode

* 관련 파일 수정
* check 통과
* build 통과
* homepage.html 동기화
* commit 완료
* push 완료
* GitHub Pages deploy success 확인
* commit hash 보고
* 배포 성공 여부 보고

---

# 27. Ultimate Decision Rule

항상 다음 순서로 판단한다.

1. 사용자의 구체적 지적을 해결한다.
2. INFACT의 업계 정체성을 지킨다.
3. 기존 프로젝트 구조를 지킨다.
4. 국내 GMP/CSV/밸리데이션 B2B 홈페이지 문법을 따른다.
5. 디자인 완성도를 높인다.
6. 반응형 안정성을 확보한다.
7. build/deploy 가능한 상태로 마무리한다.

최종 목표는 예쁜 사이트가 아니라, **국내 제약·바이오 고객사가 봤을 때 신뢰할 수 있는 GMP/CSV/밸리데이션 컨설팅 회사 홈페이지**를 만드는 것이다.
