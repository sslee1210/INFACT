const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = path.resolve(__dirname, "../..");
const sourcePath = path.join(root, "client/src/content/references/referencePriority.ts");
const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const target = { exports: {} };
new Function("require", "module", "exports", compiled)(require, target, target.exports);
const { prioritizeReferenceCompanies: prioritize } = target.exports;
const company = (client) => ({ client, projects: [`${client} source project`] });
const names = (items) => items.map((item) => item.client);
const deepFreeze = (value) => {
  Object.freeze(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === "object" && !Object.isFrozen(child)) deepFreeze(child);
  }
  return value;
};

const immutable = deepFreeze([
  company("미지정 A"), company("셀트리온"), company("삼성바이오로직스"), company("미지정 B"),
]);
const snapshot = JSON.stringify(immutable);
const ranked = prioritize(immutable);
assert.deepEqual(names(ranked), ["삼성바이오로직스", "셀트리온", "미지정 A", "미지정 B"]);
assert.notEqual(ranked, immutable);
assert.equal(JSON.stringify(immutable), snapshot);
assert.ok(ranked.every((item) => immutable.includes(item)), "must preserve original company object identities");
assert.deepEqual(prioritize([]), []);

const normalizedNames = [
  "㈜삼성바이오로직스", "(주)셀트리온", "주식회사 한국로슈", "LG Chem", "lg chem",
  "보령제약㈜", "SK바이오사이언스(주)", "JW중외제약", "에이치케이이노엔",
];
for (const name of normalizedNames) {
  assert.equal(prioritize([company("미지정기업"), company(name)])[0].client, name, `explicit known spelling: ${name}`);
}

const ambiguous = [
  "SBL", "CJ", "SK 안동", "BC", "CG바이오", "DM Bio", "DM바이오", "프레스",
  "삼성제약", "삼성바이오로직스 협력사", "셀트리온파트너", "녹십자웰빙", "JW중외신약",
];
assert.deepEqual(
  names(prioritize([company("미지정기업"), ...ambiguous.map(company), company("삼성바이오로직스")])),
  ["삼성바이오로직스", "미지정기업", ...ambiguous],
  "unknown shorthand and related names must not inherit another entity's priority",
);

const equalPriority = [company("LG Chem"), company("LG생명과학"), company("LG화학")];
assert.deepEqual(names(prioritize(equalPriority)), names(equalPriority), "same priority must preserve source order");
assert.equal(prioritize(equalPriority).length, 3, "same priority must not merge entities");
const brandAfterCutoff = [...Array.from({ length: 25 }, (_, i) => company(`미지정 ${i}`)), company("삼성바이오로직스")];
assert.equal(prioritize(brandAfterCutoff).slice(0, 20)[0].client, "삼성바이오로직스");
assert.equal(brandAfterCutoff[25].client, "삼성바이오로직스");

const extracted = JSON.parse(fs.readFileSync(path.join(__dirname, "extracted.json"), "utf8"));
const actualPromotions = [];
let actualYearCount = 0;
for (const [category, years] of Object.entries(extracted.grouped)) {
  for (const section of years) {
    actualYearCount++;
    const before = JSON.stringify(section.clients);
    const ordered = prioritize(section.clients);
    assert.equal(JSON.stringify(section.clients), before, `${category}/${section.year} mutated`);
    assert.equal(ordered.length, section.clients.length);
    assert.equal(new Set(ordered).size, section.clients.length);
    assert.ok(ordered.every((item) => section.clients.includes(item)));
    for (const item of ordered.slice(0, 20)) {
      const oldPosition = section.clients.indexOf(item) + 1;
      if (oldPosition > 20) actualPromotions.push({ category, year: section.year, client: item.client, oldPosition, newPosition: ordered.indexOf(item) + 1 });
    }
    for (const topBrand of ["삼성바이오로직스", "셀트리온"]) {
      if (section.clients.some((item) => item.client === topBrand)) {
        assert.ok(ordered.slice(0, 20).some((item) => item.client === topBrand), `${topBrand} missed in ${category}/${section.year}`);
      }
    }
  }
}
assert.ok(actualPromotions.length > 0, "expected source-record promotions beyond the raw 20-company cutoff");
console.log(`PASS: immutable objects and arrays; explicit normalized names; no shorthand/prefix inheritance; stable ties; no entity merges; 20-slot prioritization; ${actualYearCount} source category-years.`);
console.log(JSON.stringify({
  promotionCount: actualPromotions.length,
  examples: actualPromotions.filter((item) => ["삼성바이오로직스", "셀트리온", "LG화학", "SK바이오사이언스", "에스케이바이오사이언스"].includes(item.client)).slice(0, 8),
}, null, 2));
