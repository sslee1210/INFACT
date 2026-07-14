import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const stylesRoot = path.join(root, "client", "src", "styles");

function walkCssFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkCssFiles(fullPath);
    if (!entry.isFile() || !entry.name.endsWith(".css")) return [];
    return [fullPath];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

const errors = [];
const cssFiles = walkCssFiles(stylesRoot);

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

console.log("\n[IN-FACT CSS Ownership Check]");
console.log(`검사 CSS 파일: ${cssFiles.length}개`);

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
