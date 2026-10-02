from pypdf import PdfReader
from pathlib import Path
from PIL import Image, ImageDraw
import hashlib

doc = PdfReader('client/public/documents/infact-company-profile-2026-10.pdf')
out = Path('output/logo-audit/pdf')
out.mkdir(exist_ok=True)
seen, items = set(), []
for page_no, page in enumerate(doc.pages, 1):
    for asset in page.images:
        digest = hashlib.sha256(asset.data).hexdigest()
        if digest not in seen:
            seen.add(digest)
            items.append((page_no, asset))
sheet = Image.new('RGB', (1000, ((len(items)+3)//4)*150), '#eeeeee')
draw = ImageDraw.Draw(sheet)
for index, (page_no, asset) in enumerate(items):
    name = f'{page_no}-{asset.name}'
    (out/name).write_bytes(asset.data)
    thumb = asset.image.convert('RGB')
    thumb.thumbnail((230,115))
    x, y = index%4*250, index//4*150
    sheet.paste(thumb,(x+10,y+25))
    draw.text((x+5,y+5), name, fill='black')
sheet.save('output/logo-audit/pdf-contact-sheet.jpg')
print('unique images', len(items))
