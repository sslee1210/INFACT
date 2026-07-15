import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

function read(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`파일을 찾을 수 없습니다: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, "utf8");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasExactModuleImport(source, modulePath) {
  const escapedModulePath = escapeRegExp(modulePath);
  const importPattern = new RegExp(
    `(?:from\\s+|import\\s*)["']${escapedModulePath}["']`,
  );
  return importPattern.test(source);
}

const errors = [];

const appSource = read("client/src/App.tsx");
const homeSource = read("client/src/pages/Home.tsx");
const pageLayoutSource = read("client/src/components/site/PageLayout.tsx");
const skipLinkSource = read("client/src/components/site/SkipLink.tsx");
const homeSectionsSource = read("client/src/components/site/HomeSections.tsx");
const siteHeaderSource = read("client/src/components/site/SiteHeader.tsx");
const pageIntroSource = read("client/src/components/site/PageIntro.tsx");

for (const route of [
  'path="/"',
  'path="/company"',
  'path="/company/history"',
  'path="/company/organization"',
  'path="/service-design"',
  'path="/service-gmp"',
  'path="/service-csv"',
  'path="/references-design"',
  'path="/references-gmp"',
  'path="/references-csv"',
  'path="/contact"',
]) {
  if (!appSource.includes(route)) {
    errors.push(`client/src/App.tsx — 필수 route 누락: ${route}`);
  }
}

for (const obsoleteImport of [
  './pages/About',
  './pages/History',
  './pages/References',
]) {
  if (hasExactModuleImport(appSource, obsoleteImport)) {
    errors.push(`client/src/App.tsx — 삭제된 구형 페이지 import 재도입: ${obsoleteImport}`);
  }
}

for (const [file, source] of [
  ["client/src/pages/Home.tsx", homeSource],
  ["client/src/components/site/PageLayout.tsx", pageLayoutSource],
]) {
  if (!source.includes("<SkipLink />")) {
    errors.push(`${file} — 공통 SkipLink 누락`);
  }
  if (!source.includes('id="main-content"') || !source.includes("tabIndex={-1}")) {
    errors.push(`${file} — main-content 포커스 대상 구성이 누락되었습니다.`);
  }
  if (source.includes('href="#main-content"')) {
    errors.push(`${file} — hash router와 충돌하는 href="#main-content" 사용 금지`);
  }
}

for (const required of [
  "document.getElementById(\"main-content\")",
  'type="button"',
  "main.focus({ preventScroll: true })",
  "main.scrollIntoView",
]) {
  if (!skipLinkSource.includes(required)) {
    errors.push(`client/src/components/site/SkipLink.tsx — 필수 동작 누락: ${required}`);
  }
}

if (homeSectionsSource.includes('href="#about"')) {
  errors.push(
    'client/src/components/site/HomeSections.tsx — hash router와 충돌하는 href="#about" 사용 금지',
  );
}

for (const required of [
  'role="dialog"',
  'aria-modal="true"',
  "home-nav__mobile-panel-close",
  "FOCUSABLE_SELECTOR",
  "previousFocusRef",
  "tabIndex={isExpanded ? 0 : -1}",
]) {
  if (!siteHeaderSource.includes(required)) {
    errors.push(`client/src/components/site/SiteHeader.tsx — 모바일 내비게이션 접근성 구성 누락: ${required}`);
  }
}

for (const required of [
  'meta[name="description"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
]) {
  if (!pageIntroSource.includes(required)) {
    errors.push(`client/src/components/site/PageIntro.tsx — 동적 metadata 갱신 누락: ${required}`);
  }
}

const deletedLegacyFiles = [
  "client/src/pages/About.tsx",
  "client/src/pages/History.tsx",
  "client/src/pages/References.tsx",
  "client/src/components/site/AboutProcessDiagram.tsx",
  "client/src/styles/pages/about.css",
  "client/src/styles/pages/history.css",
  "client/src/styles/pages/references.css",
  "client/src/components/site/about-process-diagram.css",
];

for (const file of deletedLegacyFiles) {
  if (fs.existsSync(path.join(root, file))) {
    errors.push(`${file} — 제거된 구형 파일을 다시 추가하지 마세요.`);
  }
}

console.log("\n[IN-FACT Application Integrity Check]");

if (errors.length > 0) {
  console.error("\n[FAIL]");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("\n[PASS]");
console.log("- 핵심 route 구성 유지");
console.log("- hash router 안전한 본문 바로가기 유지");
console.log("- 모바일 내비게이션 접근성 구성 유지");
console.log("- 구형 페이지 재도입 없음");
console.log("- 페이지 metadata 갱신 구조 유지");