import concurrent.futures,json,re,hashlib,shutil,sys
from pathlib import Path
from urllib.parse import urlparse
from io import BytesIO
import requests
from http_fetch import get
from PIL import Image
from collect import OUT,HEADERS

def download(job):
    key,index,c=job
    dest=OUT/'raw'
    dest.mkdir(exist_ok=True)
    try:
        if c.get('inline'):return dict(c,key=key,index=index,file=c['url'])
        r=get(c['url'],headers=HEADERS,timeout=12)
        r.raise_for_status()
        data=r.content
        if len(data)>10000000:raise ValueError('Asset exceeds 10MB review limit')
        if b'<svg' in data[:1000]:
            if re.search(rb'<script|<foreignObject|\bonload\s*=',data,re.I):raise ValueError('Active SVG rejected')
            ext='svg'; size=None
        else:
            im=Image.open(BytesIO(data)); ext={'JPEG':'jpg','PNG':'png','WEBP':'webp','GIF':'gif'}.get(im.format)
            if not ext:raise ValueError('Unsupported asset')
            size=list(im.size)
        suffix=hashlib.sha256(c['url'].encode()).hexdigest()[:8]
        file=dest/f'{key}-{index}-{suffix}.{ext}'
        file.write_bytes(data)
        return dict(c,key=key,index=index,file=str(file),bytes=len(data),size=size,sha256=hashlib.sha256(data).hexdigest())
    except Exception as e:return dict(c,key=key,index=index,error=str(e)[:130])

def rank(c):
    u=c['url'].lower()
    return (20*bool(re.search(r'brand_|esg|favicon|ico_|toggle|preloader',u))
           +8*bool(re.search(r'white|footer|_wh|_w\.',u))
           +4*bool(re.search(r'ci.*img|share|oglogo',u))
           -2*bool('logo' in u)-bool('.svg' in u))

data=json.loads((OUT/'candidates.json').read_text(encoding='utf-8'))
manifest=OUT/'downloads.json'
existing=json.loads(manifest.read_text(encoding='utf-8')) if manifest.exists() else []
done={x['url'] for x in existing}
requested=set(sys.argv[1:])
jobs=[(site['key'],i,c) for site in data for i,c in sorted(enumerate(site['candidates']),key=lambda pair:rank(pair[1])) if (f"{site['key']}:{i}" in requested or (not requested and i in [j for j,_ in sorted(enumerate(site['candidates']),key=lambda pair:rank(pair[1]))[:4]])) and c['url'] not in done]
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
    for result in pool.map(download,jobs):
        existing.append(result)
        manifest.write_text(json.dumps(existing,ensure_ascii=False,indent=2),encoding='utf-8')
print('Downloaded',sum('file' in x for x in existing),'failed',sum('error' in x for x in existing))
