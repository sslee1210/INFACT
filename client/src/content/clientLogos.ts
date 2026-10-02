import logos from "./clientLogos.json";

function companyKey(name: string) {
  return name.replace(/주식회사|\(주\)|㈜|\s/g, "").toUpperCase();
}

// Only explicitly verified names are registered; similar names are not guessed.
const companyLogos = new Map(
  logos.flatMap((logo) => logo.names.map((name) => [companyKey(name), logo] as const)),
);

export function getCompanyLogo(name: string) {
  return companyLogos.get(companyKey(name));
}
