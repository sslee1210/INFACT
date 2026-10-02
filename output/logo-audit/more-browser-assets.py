import json,re
from pathlib import Path
p=Path('output/logo-audit');data=json.loads((p/'candidates.json').read_text(encoding='utf-8'))
for key,url in [('union','https://www.ukp.co.kr/kor/images/common/logo.png'),('prime','https://www.koreaprime.co.kr//images/main/logo.gif'),('enzychem','https://www.enzychem.co.kr/child/img/ci.png')]:
    s=next(s for s in data if s['key']==key)
    if url not in [c['url'] for c in s['candidates']]:s['candidates'].append(dict(url=url,alt='Official rendered logo'))
svg=re.findall(r'<svg\b[\s\S]*?</svg>',(p/'html/pharmaresearch.html').read_text(encoding='utf-8'),re.I)[0]
f=p/'raw/pharmaresearch-official.svg';f.write_text(svg,encoding='utf-8')
s=next(s for s in data if s['key']=='pharmaresearch');s['candidates'].append(dict(url=str(f),inline=True,alt='Official header logo'))
for key in ['pharmaresearch','genewel','amore','inventage']:
    next(s for s in data if s['key']==key)['logoBackground']='dark'
(p/'candidates.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
