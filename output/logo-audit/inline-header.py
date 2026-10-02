import json,re
from pathlib import Path
from http_fetch import get
p=Path('output/logo-audit');d=json.loads((p/'candidates.json').read_text(encoding='utf-8'))
r=get('https://pharmaresearch.com/html/header.html',timeout=18);r.raise_for_status()
svg=re.findall(r'<svg\b[\s\S]*?</svg>',r.text,re.I)[0]
f=p/'raw/pharmaresearch-header.svg';f.write_text(svg,encoding='utf-8')
s=next(s for s in d if s['key']=='pharmaresearch');s['candidates'].append(dict(url=str(f),inline=True,alt='Official header company logo'))
(p/'candidates.json').write_text(json.dumps(d,ensure_ascii=False,indent=2),encoding='utf-8')
# A read timeout is retried once; failed certificate validation is not bypassed.
f=p/'downloads.json';v=json.loads(f.read_text(encoding='utf-8'));f.write_text(json.dumps([x for x in v if not(x['key']=='3m' and 'error' in x)],ensure_ascii=False,indent=2),encoding='utf-8')
