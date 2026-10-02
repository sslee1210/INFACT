import json,re,concurrent.futures
from pathlib import Path
from urllib.parse import urljoin
from bs4 import BeautifulSoup
from http_fetch import get
p=Path('output/logo-audit'); records=json.loads((p/'candidates.json').read_text(encoding='utf-8'))
keys=['st-pharm','korea-vaccine','samil','pharmaresearch','icure','aju','amore','lnc-bio','genewel','samsung-biologics','jw-holdings','daewoong-bio']
def css(job):
    key,url=job
    try:
        text=get(url,timeout=12).text
        found=[]
        for m in re.finditer(r'url\([\'\"]?([^\)\'\"]+)',text):
            context=text[max(0,m.start()-220):m.end()]
            if re.search(r'logo|#lg|#m-lg',context,re.I):
                found.append({'url':urljoin(url,m.group(1)), 'alt':'Official logo stylesheet'})
        return key,found
    except Exception:return key,[]
jobs=[]
for site in records:
    if site['key'] not in keys:continue
    html=p/'html'/f"{site['key']}.html"
    soup=BeautifulSoup(html.read_text(encoding='utf-8'),'html.parser')
    for link in soup.find_all('link',rel='stylesheet'):
        url=urljoin(site['page'],link.get('href',''))
        if re.search(r'common|layout|default|style|header|main|global|gnb',url,re.I):jobs.append((site['key'],url))
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
    for key,found in pool.map(css,jobs):
        site=next(s for s in records if s['key']==key)
        old={c['url'] for c in site['candidates']}
        for c in found:
            if c['url'] not in old and not c['url'].startswith('data:'):
                print(key,c['url']);site['candidates'].append(c);old.add(c['url'])
(p/'candidates.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
