import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

const responsiveFiles = [
  "client/src/styles/common/responsive-core.css",
  "client/src/styles/pages/home-mobile-responsive.css",
  "client/src/styles/pages/home-responsive.css",
  "client/src/styles/pages/company-responsive.css",
  "client/src/styles/pages/services-responsive.css",
  "client/src/styles/pages/references-responsive.css",
  "client/src/styles/common/ui-system.css",
  "client/src/styles/common/responsive-safety.css",
  "client/src/styles/pages/home-layout-responsive.css",
  "client/src/styles/pages/company-history-responsive.css",
  "client/src/styles/pages/contact-responsive.css",
  "client/src/styles/pages/service-csv-responsive.css",
];

const requiredImportOrder = [
  "./styles/common/design-system.css",
  "./styles/common/responsive-core.css",
  "./styles/pages/home-mobile-responsive.css",
  "./styles/pages/home-responsive.css",
  "./styles/pages/company-responsive.css",
  "./styles/pages/services-responsive.css",
  "./styles/pages/references-responsive.css",
  "./styles/common/ui-system.css",
  "./styles/common/responsive-safety.css",
  "./styles/pages/home-layout-responsive.css",
  "./styles/pages/company-history-responsive.css",
  "./styles/pages/contact-responsive.css",
  "./styles/pages/service-csv-responsive.css",
];

const forbiddenImports = [
  [
    "./styles/common/ultrawide-layout-fix.css",
    "1920px 이상 공통 스케일 정책과 충돌하는 별도 ultrawide 보정 레이어를 다시 추가하지 마세요.",
  ],
  [
    "./styles/common/large-desktop-layout.css",
    "공통 1920px 이상 컨테이너 가이드는 base.css 본체로 통합되었습니다.",
  ],
  [
    "./styles/pages/home-about-large-desktop.css",
    "About 대형 화면 규칙은 home-about.css 본체로 통합되었습니다.",
  ],
  [
    "./styles/pages/home-experience-large-desktop.css",
    "Experience 대형 화면 규칙은 Home 반응형 레이어로 통합되었습니다.",
  ],
  [
    "./styles/pages/home-service-large-desktop.css",
    "서비스 대형 화면 규칙은 home-service.css 본체로 통합되었습니다.",
  ],
  [
    "./styles/pages/home-contact-large-desktop.css",
    "홈 CTA 대형 화면 규칙은 home-contact.css 본체로 통합되었습니다.",
  ],
  [
    "./styles/common/responsive-foundation.css",
    "responsive-foundation은 semantic responsive-core.css로 전환되었습니다.",
  ],
  [
    "./styles/pages/home-mobile-polish.css",
    "home-mobile-polish는 semantic home-mobile-responsive.css로 전환되었습니다.",
  ],
  [
    "./styles/pages/references-year-menu-patch.css",
    "references-year-menu-patch는 semantic references-year-menu.css로 전환되었습니다.",
  ],
  [
    "./styles/pages/home-responsive-stage2.css",
    "Stage 2는 semantic home-responsive.css로 전환되었습니다.",
  ],
  [
    "./styles/pages/company-responsive-stage3.css",
    "Stage 3는 semantic company-responsive.css로 전환되었습니다.",
  ],
  [
    "./styles/pages/services-responsive-stage4.css",
    "Stage 4는 semantic services-responsive.css로 전환되었습니다.",
  ],
  [
    "./styles/pages/references-responsive-stage5.css",
    "Stage 5는 semantic references-responsive.css로 전환되었습니다.",
  ],
  [
    "./styles/common/ui-system-stage6.css",
    "Stage 6은 semantic ui-system.css로 전환되어 삭제되었습니다.",
  ],
  [
    "./styles/common/responsive-qa-stage7.css",
    "Stage 7은 semantic responsive-safety 레이어로 축소되어 삭제되었습니다.",
  ],
  [
    "./styles/common/responsive-refinement-stage8.css",
    "Stage 8은 페이지별 반응형 모듈로 분해되어 삭제되었습니다.",
  ],
].map(([path, reason]) => ({ path, reason }));

const forbiddenPatterns = [
  {
    label: "100vw 사용",
    pattern: /\b100vw\b/g,
    reason: "세로 스크롤바 폭 때문에 가로 오버플로가 생길 수 있습니다.",
  },
  {
    label: "50vw 기반 full-bleed 계산",
    pattern: /calc\(\s*50%\s*-\s*50vw\s*\)/g,
    reason: "스크롤바 폭이 포함되어 모바일에서 수평 스크롤을 만들 수 있습니다.",
  },
  {
    label: "명시적 가로 스크롤",
    pattern: /overflow-x\s*:\s*(?:auto|scroll)\b/g,
    reason: "현재 반응형 정책은 페이지/매트릭스의 가로 스크롤을 허용하지 않습니다.",
  },
];

function read(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`파일을 찾을 수 없습니다: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, "utf8");
}

function checkBalancedBraces(source, file) {
  let depth = 0;
  let quote = null;
  let inComment = false;

  for (let i = 0; i < source.length; i += 1) {
    const current = source[i];
    const next = source[i + 1];

    if (inComment) {
      if (current === "*" && next === "/") {
        inComment = false;
        i += 1;
      }
      continue;
    }

    if (!quote && current === "/" && next === "*") {
      inComment = true;
      i += 1;
      continue;
    }

    if (quote) {
      if (current === "\\" && next) {
        i += 1;
        continue;
      }
      if (current === quote) quote = null;
      continue;
    }

    if (current === '"' || current === "'") {
      quote = current;
      continue;
    }

    if (current === "{") depth += 1;
    if (current === "}") depth -= 1;
    if (depth < 0) return `${file}: 닫는 중괄호가 더 많습니다.`;
  }

  if (inComment) return `${file}: 닫히지 않은 CSS 주석이 있습니다.`;
  if (quote) return `${file}: 닫히지 않은 문자열이 있습니다.`;
  if (depth !== 0) return `${file}: 중괄호 균형이 맞지 않습니다. depth=${depth}`;
  return null;
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function requireContent(source, file, needles, message, errors) {
  if (needles.every((needle) => source.includes(needle))) return;
  errors.push(`${file} — ${message}`);
}

const errors = [];
const warnings = [];

for (const file of responsiveFiles) {
  const source = read(file);
  const braceError = checkBalancedBraces(source, file);
  if (braceError) errors.push(braceError);

  for (const rule of forbiddenPatterns) {
    for (const match of source.matchAll(rule.pattern)) {
      errors.push(
        `${file}:${lineNumber(source, match.index ?? 0)} — ${rule.label}: ${rule.reason}`,
      );
    }
  }

  const importantCount = (source.match(/!important/g) ?? []).length;
  warnings.push(`${file}: !important ${importantCount}개`);
}

const indexSource = read("client/src/index.css");
const importMatches = [
  ...indexSource.matchAll(/@import\s+["']([^"']+)["'];/g),
].map((match) => match[1]);

const duplicates = importMatches.filter(
  (item, index) => importMatches.indexOf(item) !== index,
);
if (duplicates.length > 0) {
  errors.push(`client/src/index.css — 중복 import: ${[...new Set(duplicates)].join(", ")}`);
}

for (const forbiddenImport of forbiddenImports) {
  if (importMatches.includes(forbiddenImport.path)) {
    errors.push(
      `client/src/index.css — 금지된 import: ${forbiddenImport.path}. ${forbiddenImport.reason}`,
    );
  }
}

let previousIndex = -1;
for (const requiredImport of requiredImportOrder) {
  const currentIndex = importMatches.indexOf(requiredImport);
  if (currentIndex === -1) {
    errors.push(`client/src/index.css — 필수 import 누락: ${requiredImport}`);
    continue;
  }
  if (currentIndex <= previousIndex) {
    errors.push(`client/src/index.css — 반응형 import 순서 오류: ${requiredImport}`);
  }
  previousIndex = currentIndex;
}

const lastRequiredImport = requiredImportOrder.at(-1);
if (importMatches.at(-1) !== lastRequiredImport) {
  errors.push(`client/src/index.css — 마지막 CSS import는 ${lastRequiredImport}여야 합니다.`);
}

const baseSource = read("client/src/styles/common/base.css");
requireContent(
  baseSource,
  "client/src/styles/common/base.css",
  ["@media (min-width: 1920px)", ".home-main .home-container"],
  "1920px 이상 공통 컨테이너 가이드가 누락되었습니다.",
  errors,
);

const companyIntroSource = read("client/src/styles/pages/home-company-intro.css");
requireContent(
  companyIntroSource,
  "client/src/styles/pages/home-company-intro.css",
  ["@media (min-width: 1920px)", ".home-company-intro__inner"],
  "1920px 이상 회사소개 스케일 규칙이 누락되었습니다.",
  errors,
);

const homeAboutSource = read("client/src/styles/pages/home-about.css");
if (homeAboutSource.includes("@media (min-width: 2200px)")) {
  errors.push(
    "client/src/styles/pages/home-about.css — 레거시 2200px 전용 확대 규칙을 다시 추가하지 마세요.",
  );
}
requireContent(
  homeAboutSource,
  "client/src/styles/pages/home-about.css",
  ["@media (min-width: 1920px)", ".about-process-cycle"],
  "1920px 이상 About 스케일 규칙이 누락되었습니다.",
  errors,
);

const homeServiceSource = read("client/src/styles/pages/home-service.css");
if (homeServiceSource.includes("@media (min-width: 2200px)")) {
  errors.push(
    "client/src/styles/pages/home-service.css — 레거시 2200px 전용 확대 규칙을 다시 추가하지 마세요.",
  );
}
requireContent(
  homeServiceSource,
  "client/src/styles/pages/home-service.css",
  ["@media (min-width: 1920px)", ".service-immersive-section"],
  "1920px 이상 서비스 스케일 규칙이 누락되었습니다.",
  errors,
);

const homeContactSource = read("client/src/styles/pages/home-contact.css");
requireContent(
  homeContactSource,
  "client/src/styles/pages/home-contact.css",
  ["@media (min-width: 1920px)", ".home-cta-banner"],
  "1920px 이상 홈 CTA 스케일 규칙이 누락되었습니다.",
  errors,
);

const homeResponsiveSource = read("client/src/styles/pages/home-responsive.css");
requireContent(
  homeResponsiveSource,
  "client/src/styles/pages/home-responsive.css",
  ["@media (min-width: 1920px)", ".home-experience__metric strong"],
  "1920px 이상 Experience 정상화 규칙이 누락되었습니다.",
  errors,
);

const uiSystemSource = read("client/src/styles/common/ui-system.css");
requireContent(
  uiSystemSource,
  "client/src/styles/common/ui-system.css",
  [".home-nav__contact-btn.ui-button", ".contact-team-item"],
  "공통 UI 또는 Contact UI 규칙이 누락되었습니다.",
  errors,
);

const responsiveSafetySource = read("client/src/styles/common/responsive-safety.css");
requireContent(
  responsiveSafetySource,
  "client/src/styles/common/responsive-safety.css",
  ["overflow-wrap: anywhere", "@media (prefers-reduced-motion: reduce)"],
  "공통 반응형 안전 규칙이 누락되었습니다.",
  errors,
);

const homeLayoutResponsiveSource = read("client/src/styles/pages/home-layout-responsive.css");
requireContent(
  homeLayoutResponsiveSource,
  "client/src/styles/pages/home-layout-responsive.css",
  [".home-experience__client-marquee", ".home-cta-banner"],
  "Home full-width 섹션의 viewport-width 제거 보정이 누락되었습니다.",
  errors,
);

const historyResponsiveSource = read("client/src/styles/pages/company-history-responsive.css");
requireContent(
  historyResponsiveSource,
  "client/src/styles/pages/company-history-responsive.css",
  ["@media (max-width: 767px)", ".history-list__item.is-active time"],
  "회사 연혁 모바일 진행선 보정이 누락되었습니다.",
  errors,
);

const contactResponsiveSource = read("client/src/styles/pages/contact-responsive.css");
requireContent(
  contactResponsiveSource,
  "client/src/styles/pages/contact-responsive.css",
  [".home-cta-banner__button", ".contact-banner__button"],
  "CTA 모바일 중앙 정렬 보정이 누락되었습니다.",
  errors,
);

const csvResponsiveSource = read("client/src/styles/pages/service-csv-responsive.css");
requireContent(
  csvResponsiveSource,
  "client/src/styles/pages/service-csv-responsive.css",
  [".csv-vmodel img", ".service-business-overview__pillar"],
  "CSV V-Model 또는 모바일 원형 pillar 보정이 누락되었습니다.",
  errors,
);

const experienceSource = read("client/src/styles/pages/home-experience.css");
if (experienceSource.includes("@media (min-width: 2200px)")) {
  warnings.push(
    "client/src/styles/pages/home-experience.css: 레거시 2200px 블록이 남아 있으며 1920px 정상화 규칙이 뒤에서 무효화합니다.",
  );
}

console.log("\n[IN-FACT Responsive Integrity Check]");
console.log(`검사 파일: ${responsiveFiles.length}개`);
console.log("정책: 100vw 금지 / 50vw full-bleed 금지 / 명시적 가로 스크롤 금지");
console.log("대형 화면 정책: 1920px 이상 공통 스케일 / 별도 ultrawide·large-desktop override 금지");
console.log("반응형 소유권 정책: Stage·patch·polish 이름 금지 / semantic responsive CSS에서 관리");
console.log("\n[참고: override 밀도]");
for (const warning of warnings) console.log(`- ${warning}`);

if (errors.length > 0) {
  console.error("\n[FAIL]");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("\n[PASS]");
console.log("- CSS 구조 검사 통과");
console.log("- 반응형 import 순서 통과");
console.log("- 대형 화면 레이어 정책 통과");
console.log("- 레거시 Stage·patch·polish 경로 제거 상태 통과");
console.log("- CSS 소유권 경계 통과");
console.log("- 가로 오버플로 위험 패턴 없음");
