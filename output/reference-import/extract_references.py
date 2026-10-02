"""Read the supplied legacy XLS without changing it; preserve source row evidence."""
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

work = Path(__file__).parent
sys.path.insert(0, str(work / "python-packages"))
import xlrd

source = Path("C:/Users/sslee/Downloads/(주)인팩트 2016 ~ 2026 Reference 2026.09.28.xls")
book = xlrd.open_workbook(str(source), formatting_info=True)
records, ignored, invalid, item_only_csv = [], [], [], []
for sheet in book.sheets():
    for index in range(4, sheet.nrows):
        row = sheet.row_values(index)
        if sheet.rowinfo_map.get(index) and sheet.rowinfo_map[index].hidden:
            ignored.append({"sheet": sheet.name, "row": index + 1, "reason": "hidden"})
            continue
        _, client, project, item, date = row[:5]
        if (client, project, item, date) == ("Customer", "Project", "Item", "Date"):
            continue
        client, project, item = (re.sub(r"\s+", " ", str(value)).strip() for value in (client, project, item))
        if not client and not project:
            continue
        if not client or not project or not isinstance(date, (int, float)) or not 2016 <= date <= 2026 or int(date) != date:
            invalid.append({"sheet": sheet.name, "row": index + 1, "values": row})
            continue
        category = "design" if sheet.name == "개념설계" else "csv" if "CSV" in (project + " " + item).upper() else "gmp"
        record = {"sheet": sheet.name, "row": index + 1, "category": category, "year": int(date), "client": client, "project": project, "item": item}
        records.append(record)
        if category == "csv" and "CSV" not in project.upper():
            item_only_csv.append(record)

assert not invalid, invalid
grouped = {}
for category in ("design", "gmp", "csv"):
    years = []
    for year in sorted({r["year"] for r in records if r["category"] == category}, reverse=True):
        clients = {}
        for record in records:
            if (record["category"], record["year"]) != (category, year):
                continue
            company = clients.setdefault(record["client"], {"client": record["client"], "logo": "", "projects": []})
            if record["project"] not in company["projects"]:
                company["projects"].append(record["project"])
        years.append({"year": year, "clients": list(clients.values())})
    grouped[category] = years

payload = {"source": source.name, "records": records, "hiddenRowsExcluded": len(ignored), "grouped": grouped}
(work / "extracted.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
print("RECORDS", len(records), "HIDDEN", len(ignored), "BY_SHEET", dict(Counter(r["sheet"] for r in records)))
print("CATEGORIES", dict(Counter(r["category"] for r in records)))
for category, years in grouped.items():
    print(category, [(s["year"], len(s["clients"]), sum(len(c["projects"]) for c in s["clients"])) for s in years])
print("ITEM_ONLY_CSV", json.dumps(item_only_csv, ensure_ascii=False))
print("POTENTIAL_SOURCE_TYPOS", json.dumps([r for r in records if "ㅑ" in r["client"] or "갲" in r["project"]], ensure_ascii=False))
