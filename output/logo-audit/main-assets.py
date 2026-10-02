import json,re,hashlib
from pathlib import Path
from urllib.parse import urljoin
from bs4 import BeautifulSoup
from http_fetch import get
p=Path('output/logo-audit');data=json.loads((p/'candidates.json').read_text(encoding='utf-8'))
site=next(s for s in data if s['key']=='st-pharm')
soup=BeautifulSoup((p/'html/st-pharm.html').read_text(encoding='utf-8'),'html.parser')
for link in soup.find_all('link',rel='stylesheet'):
    u=urljoin(site['page'],link.get('href',''))
    if not re.search('/css/(?:layout|common|default)',u):continue
    try:
        response=get(u,timeout=18); text=response.text
        print(u,response.status_code,len(text))
        (p/('st-'+u.split('/')[-1].split('?')[0])).write_text(text,encoding='utf-8')
        for m in re.finditer(r'url\([\'\"]?([^\)\'\"]+)',text):
            if any(w in text[max(0,m.start()-180):m.end()].lower() for w in ['logo','#lg','lg-','lg.']):
                asset=urljoin(u,m.group(1));print(asset)
                if asset not in [c['url'] for c in site['candidates']]:site['candidates'].append(dict(url=asset,alt='Official header logo'))
    except Exception as e:print(type(e).__name__)
(p/'candidates.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
try:
    r=get('https://www.donga-otsuka.co.kr/sub5/DA_2020AR.pdf',timeout=25);r.raise_for_status()
    if r.content.startswith(b'%PDF'):(p/'donga-2020.pdf').write_bytes(r.content);print('PDF downloaded',len(r.content))
except Exception as e:print(type(e).__name__)
