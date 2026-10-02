import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const logos = JSON.parse(readFileSync("client/src/content/clientLogos.json", "utf8"));
const names = new Map();
const ids = new Set();
const key = (name) => name.replace(/주식회사|\(주\)|㈜|\s/g, "").toUpperCase();
let bytes = 0;

for (const logo of logos) {
  assert(!ids.has(logo.id), `Duplicate logo id: ${logo.id}`);
  ids.add(logo.id);
  assert(logo.names.length > 0, `Missing company name: ${logo.id}`);
  assert(/^\.\/images\/clients\/[a-z0-9-]+\.(svg|png|gif|jpg|jpeg|webp)$/.test(logo.src), `Invalid local asset: ${logo.src}`);
  assert(logo.sourcePage && logo.sourceAsset, `Missing provenance: ${logo.id}`);
  assert(["light", "dark"].includes(logo.background), `Invalid surface: ${logo.id}`);
  const file = resolve("client/public", logo.src);
  const data = readFileSync(file);
  assert.equal(createHash("sha256").update(data).digest("hex"), logo.sha256, `Asset changed: ${logo.id}`);
  bytes += statSync(file).size;
  if (logo.src.endsWith(".svg")) {
    const svg = data.toString("utf8");
    assert(/<svg\b/i.test(svg), `Not SVG: ${logo.id}`);
    assert(!/<(?:script|foreignObject)\b|\bon\w+\s*=|(?:href|src)\s*=\s*["'](?:https?:|\/\/|javascript:)|url\(\s*["']?https?:/i.test(svg), `Non-static SVG: ${logo.id}`);
  }
  for (const name of logo.names) {
    const previous = names.get(key(name));
    assert(!previous || previous === logo.id, `Conflicting company alias: ${name} (${previous}, ${logo.id})`);
    names.set(key(name), logo.id);
  }
}

const homeSource = readFileSync("client/src/content/homePage.ts", "utf8");
const homeClients = [...homeSource.match(/homeExperienceClients\s*=\s*\[([\s\S]*?)\]/)[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
for (const name of homeClients) assert(names.has(key(name)), `Missing home logo: ${name}`);
console.log(`Client logos: ${logos.length} local assets, ${names.size} aliases, ${homeClients.length}/${homeClients.length} home clients, ${(bytes / 1024 / 1024).toFixed(2)} MiB. Paths, hashes, provenance, alias conflicts and static SVG checks passed.`);
