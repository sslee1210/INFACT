import json,re,hashlib
from pathlib import Path
from bs4 import BeautifulSoup
from http_fetch import get
p=Path('output/logo-audit');data=json.loads((p/'candidates.json').read_text(encoding='utf-8'))
downloads=json.loads((p/'downloads.json').read_text(encoding='utf-8'))
def addlocal(key,file,url,page=None):
    s=next(s for s in data if s['key']==key)
    if page:s['page']=page
    if url not in [c['url'] for c in s['candidates']]:s['candidates'].append(dict(url=url,alt='Verified logo'))
    if url not in [d['url'] for d in downloads]:downloads.append(dict(key=key,index=len(s['candidates'])-1,url=url,file=str(file),sha256=hashlib.sha256(file.read_bytes()).hexdigest()))
addlocal('st-pharm',p/'raw/st-pharm-official.svg','https://www.stpharm.co.kr/img/logo.svg?v=5')
addlocal('scd-pharm',p/'pdf/14-Image8.jpg','./documents/infact-company-profile-2026-10.pdf#page=14','./documents/infact-company-profile-2026-10.pdf#page=14')
for key in ['lnc-bio','hanall','inibio']:
    f=p/'html'/f'{key}.html'
    original=re.findall(r'<svg\b[\s\S]*?</svg>',f.read_text(encoding='utf-8'),re.I)
    for record in downloads:
        if record['key']==key and record.get('inline'):
            n=int(re.search(r'inline-(\d+)',record['file']).group(1))
            svg=original[n]
            if 'xmlns=' not in svg[:300]:svg=svg.replace('<svg','<svg xmlns="http://www.w3.org/2000/svg"',1)
            Path(record['file']).write_text(svg,encoding='utf-8')
            record['sha256']=hashlib.sha256(svg.encode()).hexdigest()
# Official page embeds this wordmark outside a logo-named element.
s=next(s for s in data if s['key']=='amore');s['candidates'].append(dict(url='https://www.apgroup.com/int/ko/resource/images/a/amorepacific.png',alt='Amorepacific official wordmark'))
# The original company no longer has a matching live site. Use a contemporary captioned logo.
r=get('https://www.etnews.com/20191031000125',timeout=18);soup=BeautifulSoup(r.text,'html.parser')
for img in soup.find_all('img'):
    if '디엠바이오' in (img.get('alt','')+img.get('title','')+img.parent.get_text()):
        print('DMBIO candidate',str(img)[:500])
(p/'dmbio-article.html').write_text(r.text,encoding='utf-8')
(p/'candidates.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
(p/'downloads.json').write_text(json.dumps(downloads,ensure_ascii=False,indent=2),encoding='utf-8')
