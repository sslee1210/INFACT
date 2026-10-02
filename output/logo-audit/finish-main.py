import json,hashlib
from pathlib import Path
from http_fetch import get
p=Path('output/logo-audit');data=json.loads((p/'candidates.json').read_text(encoding='utf-8'));downloads=json.loads((p/'downloads.json').read_text(encoding='utf-8'));selected=json.loads((p/'selections.json').read_text(encoding='utf-8'))
url='https://img.etnews.com/photonews/1910/1238822_20191031114755_605_0001.jpg'
r=get(url,timeout=18);r.raise_for_status();f=p/'raw/dmbio-historical.jpg';f.write_bytes(r.content)
site=next(s for s in data if s['key']=='dmbio');site['page']='https://www.etnews.com/20191031000125';site['names']=['DMBIO','DM Bio','DM바이오','디엠바이오'];site['candidates'].append(dict(url=url,alt='디엠바이오 로고, 2019년 보도자료'))
downloads.append(dict(key='dmbio',index=len(site['candidates'])-1,url=url,file=str(f)))
selected.update({'dmbio':url,'st-pharm':'https://www.stpharm.co.kr/img/logo.svg?v=5','scd-pharm':'./documents/infact-company-profile-2026-10.pdf#page=14'})
# Embed the exact fills used by the official site's colored logo variant.
f=p/'raw/lnc-bio-inline-1.svg';svg=f.read_text(encoding='utf-8');svg=svg.replace('>','><style>.st0{fill:#00853e}.st1{fill:#338f38}.st2{fill:#878787}</style>',1);f.write_text(svg,encoding='utf-8')
for filename,value in [('candidates.json',data),('downloads.json',downloads),('selections.json',selected)]:
    (p/filename).write_text(json.dumps(value,ensure_ascii=False,indent=2),encoding='utf-8')
