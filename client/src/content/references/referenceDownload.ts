type ReferenceCategory = "개념설계" | "GMP" | "CSV";

export function getReferenceDownload(category: ReferenceCategory, year: number) {
  const categoryKey = category === "개념설계" ? "design" : category.toLowerCase();
  const name = category === "개념설계" ? "design-2020~2026" : `${categoryKey}-${year}`;
  const fileName = `infact-references-${name}.xlsx`;
  return {
    href: `./downloads/${fileName}`,
    fileName,
  };
}
