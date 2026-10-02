from pypdf import PdfReader
from pathlib import Path
from PIL import Image,ImageDraw
p=Path('output/logo-audit');doc=PdfReader(p/'donga-2020.pdf')
items=[]
for n,page in enumerate(doc.pages):
    txt=page.extract_text()
    if any(s in txt for s in ['DMBIO','DM Bio','디엠바이오','ST PHARM','에스티팜']):
        print(n+1,txt[:70].replace('\n',' '))
        for a in page.images:
            if a.image.width/a.image.height>2 and a.image.height<800:
                dest=p/'pdf'/f'AR-{n+1}-{a.name}';dest.write_bytes(a.data);items.append((dest,a.image))
sheet=Image.new('RGB',(1000,((len(items)+3)//4)*140),'#eee');draw=ImageDraw.Draw(sheet)
for i,(dest,im) in enumerate(items):
    im=im.convert('RGB');im.thumbnail((230,100));x=i%4*250;y=i//4*140
    sheet.paste(im,(x+8,y+25));draw.text((x+5,y+5),dest.name,fill='black')
sheet.save(p/'pdf-logos.jpg');print('Assets',len(items))
