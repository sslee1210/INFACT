import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent / "python-packages"))
import xlrd

source = Path("C:/Users/sslee/Downloads/(주)인팩트 2016 ~ 2026 Reference 2026.09.28.xls")
book = xlrd.open_workbook(str(source), formatting_info=True)
print("SHEETS", json.dumps(book.sheet_names(), ensure_ascii=False))
for sheet in book.sheets():
    print("SHEET", sheet.name, sheet.nrows, sheet.ncols, "MERGES", sheet.merged_cells[:15])
    nonempty = [(i + 1, row) for i in range(sheet.nrows) if any(row := sheet.row_values(i)) and not (sheet.rowinfo_map.get(i) and sheet.rowinfo_map[i].hidden)]
    print("VISIBLE COUNT", len(nonempty), "DATES", sorted({str(row[4]) for _, row in nonempty if len(row) > 4}))
    for row in nonempty[:10] + nonempty[-20:]:
        print(json.dumps(row, ensure_ascii=False))
