const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');
const root = path.resolve(__dirname, '../..');
function moduleExports(file) {
  const compiled = ts.transpileModule(fs.readFileSync(path.join(root, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const result = { exports: {} };
  new Function('require', 'module', 'exports', compiled)(require, result, result.exports);
  return result.exports;
}
const original = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted.json'), 'utf8'));
const normalizeCompany = name => name === '에스케이바이오사이언스' ? 'SK바이오사이언스' : name;
// These 42 source rows were listed to the user, who explicitly requested their original wording.
const restoredRows = {
  '2026~': [197, 258, 286],
  '2021~2025': [526, 456, 457, 493, 328, 211, 260, 586, 433, 258],
  '2016~2020': [496, 505, 507, 514, 547, 582, 596, 599, 602, 442, 347, 353, 355, 369, 373, 379, 403, 417, 247, 277, 295, 302, 325, 326, 210, 223, 228, 244, 245],
};
const restoredRecords = original.records.filter(r => restoredRows[r.sheet]?.includes(r.row));
assert.equal(restoredRecords.length, 42);
const originalWording = new Set(restoredRecords.map(r => r.project));
const { prioritizeReferenceCompanies } = moduleExports('client/src/content/references/referencePriority.ts');
const datasets = {
  design: moduleExports('client/src/content/references/conceptualDesignReferences.ts').conceptualDesignReferenceYears,
  gmp: moduleExports('client/src/content/references/gmpReferences.ts').gmpReferenceYears,
  csv: moduleExports('client/src/content/references/csvReferences.ts').csvReferenceYears,
};
const forbidden = /적격성\s*평가|밸리데이션|벨리데이션|Qualification|Validation|\b(?:DQ|IQ|OQ|PQ|CSV)\b|수행|용역|변경관리/i;
const summary = {};
const expectations = {};
for (const [category, years] of Object.entries(datasets)) {
  const approvedSource = original.grouped[category].map(y => ({ ...y, clients: y.clients.map(c => ({ ...c, client: normalizeCompany(c.client) })) }));
  assert.deepEqual(years.map(y => ({ ...y, clients: y.clients.map(({systems, ...source}) => source) })), approvedSource, `${category}: source record changed`);
  let systemCount = 0;
  let unspecified = 0;
  expectations[category] = [];
  for (const section of years) {
    for (const company of section.clients) {
      assert.ok(company.systems?.length, `${category}/${section.year}/${company.client}: missing targets`);
      assert.equal(new Set(company.systems).size, company.systems.length, 'duplicate targets');
      for (const system of company.systems) {
        assert.ok(system.trim().length, 'empty target');
        assert.ok(!forbidden.test(system) || originalWording.has(system), `${category}/${section.year}/${company.client}: ${system}`);
        assert.ok(!system.includes('미기재'), 'unwanted placeholder remains');
        systemCount++;
        if (system.includes('미기재')) unspecified++;
      }
    }
    const selected = prioritizeReferenceCompanies(section.clients).slice(0, 20);
    expectations[category].push({year:section.year, remaining:section.clients.length-selected.length, companies:selected.map(c=>({client:c.client,summary:c.systems.join(', ')}))});
  }
  summary[category] = {years:years.length, companyYears:years.reduce((n,y)=>n+y.clients.length,0), systems:systemCount, unspecified};
}
for (const record of restoredRecords) {
  const company = datasets[record.category].find(y => y.year === record.year).clients.find(c => c.client === normalizeCompany(record.client));
  assert.ok(company.systems.includes(record.project), `source wording missing: ${record.sheet}/${record.row}/${record.client}`);
}
assert.ok(!Object.values(datasets).flatMap(years => years.flatMap(y => y.clients)).some(c => c.client === '에스케이바이오사이언스'));
fs.writeFileSync(path.join(__dirname, 'ui-expectations.json'), JSON.stringify(expectations));
console.log('PASS: 42 original-wording rows restored; SK company name corrected; other source fields preserved; no placeholders or duplicate targets.');
console.log(JSON.stringify(summary, null, 2));
