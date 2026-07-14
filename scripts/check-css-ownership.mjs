import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const sourceRoot = path.join(root, "client", "src");
const stylesRoot = path.join(sourceRoot, "styles");

function walkFiles(directory, extensions) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkFiles(fullPath, extensions);
    if (!entry.isFile() || !extensions.some((extension) => entry.name.endsWith(extension))) {
      return [];
    }
    return [fullPath];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function normalizeCssImport(importerFile, specifier) {
  let absolutePath;

  if (specifier.startsWith("@/")) {
    absolutePath = path.join(sourceRoot, specifier.slice(2));
  } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
    absolutePath = path.resolve(path.dirname(importerFile), specifier);
  } else {
    return null;
  }

  return relative(absolutePath);
}

const errors = [];
const warnings = [];
const cssFiles = walkFiles(stylesRoot, [".css"]);
const sourceFiles = walkFiles(sourceRoot, [".ts", ".tsx"]);

const forbiddenPathPatterns = [
  { pattern: /stage\d+/i, label: "Stage 번호 기반 CSS 파일명" },
  { pattern: /(?:^|[-_])patch(?:[-_.]|$)/i, label: "patch 기반 CSS 파일명" },
  { pattern: /(?:^|[-_])polish(?:[-_.]|$)/i, label: "polish 기반 CSS 파일명" },
  { pattern: /large-desktop/i, label: "별도 large-desktop CSS 파일명" },
  { pattern: /ultrawide/i, label: "별도 ultrawide CSS 파일명" },
];

for (const file of cssFiles) {
  const filePath = relative(file);
  for (const rule of forbiddenPathPatterns) {
    if (rule.pattern.test(path.basename(file))) {
      errors.push(`${filePath} — 금지된 ${rule.label}`);
    }
  }
}

const largeDesktopOwners = [
  "client/src/styles/pages/home-about.css",
  "client/src/styles/pages/home-company-intro.css",
  "client/src/styles/pages/home-experience.css",
  "client/src/styles/pages/home-service.css",
  "client/src/styles/pages/home-contact.css",
  "client/src/styles/pages/home-cta.css",
];

for (const file of largeDesktopOwners) {
  const source = read(file);
  if (source.includes("@media (min-width: 2200px)")) {
    errors.push(`${file} — 2200px 전용 확대 규칙을 다시 추가하지 마세요.`);
  }
}

const experienceSource = read("client/src/styles/pages/home-experience.css");
for (const selector of [".experience-showcase", ".editorial-", ".about-process-diagram"]) {
  if (experienceSource.includes(selector)) {
    errors.push(
      `client/src/styles/pages/home-experience.css — 현재 Home Experience 소유 범위 밖 selector가 남아 있습니다: ${selector}`,
    );
  }
}

for (const pattern of ["100vw", "calc(50% - 50vw)"]) {
  if (experienceSource.includes(pattern)) {
    errors.push(
      `client/src/styles/pages/home-experience.css — viewport breakout 계산을 다시 추가하지 마세요: ${pattern}`,
    );
  }
}

const ctaSource = read("client/src/styles/pages/home-cta.css");
for (const required of [
  ".home-cta-banner",
  ".home-cta-banner__content",
  ".home-cta-banner__actions",
]) {
  if (!ctaSource.includes(required)) {
    errors.push(`client/src/styles/pages/home-cta.css — 필수 CTA selector 누락: ${required}`);
  }
}

for (const pattern of ["100vw", "calc(50% - 50vw)"]) {
  if (ctaSource.includes(pattern)) {
    errors.push(`client/src/styles/pages/home-cta.css — viewport breakout 계산 금지: ${pattern}`);
  }
}

/* Single CSS entrypoint ownership: a stylesheet already imported by index.css
   must not also be imported from TS/TSX modules. */
const indexPath = path.join(sourceRoot, "index.css");
const indexSource = fs.readFileSync(indexPath, "utf8");
const globalCssImports = new Set(
  [...indexSource.matchAll(/@import\s+["']([^"']+\.css)["'];/g)]
    .map((match) => normalizeCssImport(indexPath, match[1]))
    .filter(Boolean),
);

for (const sourceFile of sourceFiles) {
  const source = fs.readFileSync(sourceFile, "utf8");
  for (const match of source.matchAll(/import\s+["']([^"']+\.css)["'];/g)) {
    const normalized = normalizeCssImport(sourceFile, match[1]);
    if (normalized && globalCssImports.has(normalized)) {
      errors.push(
        `${relative(sourceFile)} — index.css와 중복 CSS import: ${normalized}`,
      );
    }
  }
}

/* Strict budgets only for files whose cascade ownership has already been cleaned.
   Other files are reported below so they can be reduced incrementally. */
const importantBudgets = new Map([
  ["client/src/styles/common/responsive-safety.css", 3],
  ["client/src/styles/pages/company-history-responsive.css", 0],
  ["client/src/styles/pages/home-experience.css", 0],
  ["client/src/styles/pages/home-cta.css", 0],
]);

const importantCounts = cssFiles
  .map((file) => {
    const filePath = relative(file);
    const count = (fs.readFileSync(file, "utf8").match(/!important/g) ?? []).length;
    return { filePath, count };
  })
  .sort((a, b) => b.count - a.count || a.filePath.localeCompare(b.filePath));

for (const { filePath, count } of importantCounts) {
  const budget = importantBudgets.get(filePath);
  if (budget !== undefined && count > budget) {
    errors.push(`${filePath} — !important ${count}개, 허용 예산 ${budget}개 초과`);
  }
}

for (const { filePath, count } of importantCounts.filter((item) => item.count > 0).slice(0, 10)) {
  warnings.push(`${filePath}: !important ${count}개`);
}

console.log("\n[IN-FACT CSS Ownership Check]");
console.log(`검사 CSS 파일: ${cssFiles.length}개`);
console.log(`전역 index.css import: ${globalCssImports.size}개`);

if (warnings.length > 0) {
  console.log("\n[참고: !important 밀도 상위 파일]");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length > 0) {
  console.error("\n[FAIL]");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("\n[PASS]");
console.log("- Stage/patch/polish/ultrawide 파일명 없음");
console.log("- Home 대형 화면 2200px 전용 확대 규칙 없음");
console.log("- Home Experience 소유 범위 정리 상태 유지");
console.log("- Home Experience/CTA viewport breakout 계산 없음");
console.log("- index.css와 TS/TSX 간 중복 CSS import 없음");
console.log("- 정리 완료 파일의 !important 예산 준수");
