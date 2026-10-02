import concurrent.futures, json, re
from pathlib import Path
from urllib.parse import urljoin
from collect import HEADERS, OUT
import requests
from http_fetch import get

path=OUT/'candidates.json'
data=json.loads(path.read_text(encoding='utf-8'))
def inspect(item):
    if item.get('cssChecked'): return item
    for url in item.get('stylesheets',[]):
        try:
            r=get(url,headers=HEADERS,timeout=10)
            r.raise_for_status()
            for src in re.findall(r'''url\(["']?([^"')]+)["']?\)''',r.text):
                if re.search(r'logo',src,re.I) and not src.startswith('data:'):
                    asset=urljoin(r.url,src)
                    if asset not in [x['url'] for x in item['candidates']]:
                        item['candidates'].append({'url':asset,'alt':'CSS logo','stylesheet':url})
        except Exception: pass
    item['cssChecked']=True
    return item
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    data=list(pool.map(inspect,data))
path.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
print('\n'.join(x['key']+': '+str(len(x['candidates'])) for x in data))
