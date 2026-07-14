import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

const responsiveFiles = [
  "client/src/styles/common/responsive-foundation.css",
  "client/src/styles/pages/home-mobile-polish.css",
  "client/src/styles/pages/home-responsive-stage2.css",
  "client/src/styles/pages/company-responsive-stage3.css",
  "client/src/styles/pages/services-responsive-stage4.css",
  "client/src/styles/pages/references-responsive-stage5.css",
  "client/src/styles/common/ui-system-stage6.css",
  "client/src/styles/common/responsive-qa-stage7.css",
];

const requiredImportOrder = [
  './styles/common/design-system.css',
  './styles/common/responsive-foundation.css',
  './styles/pages/home-mobile-polish.css',
  './styles/pages/home-responsive-stage2.css',
  './styles/pages/company-responsive-stage3.css',
  './styles/pages/services-responsive-stage4.css',
  './styles/pages/references-responsive-stage5.css',
  './styles/common/ui-system-stage6.css',
  './styles/common/responsive-qa-stage7.css',
];

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

    if (depth < 0) {
      return `${file}: 닫는 중괄호가 더 많습니다.`;
    }
  }

  if (inComment) return `${file}: 닫히지 않은 CSS 주석이 있습니다.`;
  if (quote) return `${file}: 닫히지 않은 문자열이 있습니다.`;
  if (depth !== 0) return `${file}: 중괄호 균형이 맞지 않습니다. depth=${depth}`;
  return null;
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
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

const stage7Index = importMatches.indexOf("./styles/common/responsive-qa-stage7.css");
if (stage7Index !== importMatches.length - 1) {
  errors.push(
    "client/src/index.css — responsive-qa-stage7.css는 마지막 CSS import여야 합니다.",
  );
}

console.log("\n[IN-FACT Responsive Integrity Check]");
console.log(`검사 파일: ${responsiveFiles.length}개`);
console.log("정책: 100vw 금지 / 50vw full-bleed 금지 / 명시적 가로 스크롤 금지");
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
console.log("- 가로 오버플로 위험 패턴 없음");
