import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const serviceImageDir = path.join(
  root,
  "client",
  "public",
  "images",
  "service",
);

const sources = {
  design: path.join(serviceImageDir, "conceptual-design-hero.webp"),
  gmp: path.join(serviceImageDir, "gmp-consulting-hero.webp"),
  csv: path.join(serviceImageDir, "csv-consulting-hero.webp"),
};

for (const [name, file] of Object.entries(sources)) {
  if (!fs.existsSync(file)) {
    throw new Error(`Service hero source image is missing: ${name} (${file})`);
  }
}

function dataUri(file) {
  return `data:image/webp;base64,${fs.readFileSync(file).toString("base64")}`;
}

const designImage = dataUri(sources.design);
const gmpImage = dataUri(sources.gmp);
const csvImage = dataUri(sources.csv);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="640" viewBox="0 0 1920 640" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="white"/>
      <stop offset="0.72" stop-color="white"/>
      <stop offset="1" stop-color="black"/>
    </linearGradient>
    <linearGradient id="middleFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="black"/>
      <stop offset="0.18" stop-color="white"/>
      <stop offset="0.82" stop-color="white"/>
      <stop offset="1" stop-color="black"/>
    </linearGradient>
    <linearGradient id="rightFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="black"/>
      <stop offset="0.28" stop-color="white"/>
      <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="coolTone" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#163451" stop-opacity="0.16"/>
      <stop offset="0.52" stop-color="#163451" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#0d2744" stop-opacity="0.14"/>
    </linearGradient>
    <mask id="leftMask"><rect width="820" height="640" fill="url(#leftFade)"/></mask>
    <mask id="middleMask"><rect width="920" height="640" fill="url(#middleFade)"/></mask>
    <mask id="rightMask"><rect width="820" height="640" fill="url(#rightFade)"/></mask>
  </defs>
  <rect width="1920" height="640" fill="#dfe8ef"/>
  <g mask="url(#leftMask)">
    <image href="${designImage}" x="0" y="0" width="820" height="640" preserveAspectRatio="xMidYMid slice"/>
  </g>
  <g transform="translate(500 0)" mask="url(#middleMask)">
    <image href="${gmpImage}" x="0" y="0" width="920" height="640" preserveAspectRatio="xMidYMid slice"/>
  </g>
  <g transform="translate(1100 0)" mask="url(#rightMask)">
    <image href="${csvImage}" x="0" y="0" width="820" height="640" preserveAspectRatio="xMidYMid slice"/>
  </g>
  <rect width="1920" height="640" fill="url(#coolTone)"/>
</svg>`;

const output = path.join(serviceImageDir, "service-business-hero.svg");
fs.writeFileSync(output, svg, "utf8");
console.log(`Generated ${path.relative(root, output)}`);
