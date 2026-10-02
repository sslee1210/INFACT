import json,re
from pathlib import Path
p=Path('output/logo-audit')
logos=json.loads(Path('client/src/content/clientLogos.json').read_text(encoding='utf-8'))
key=lambda s:re.sub(r'주식회사|\(주\)|㈜|\s','',s).upper()
names={key(n) for l in logos for n in l['names']}
inventory=json.loads((p/'inventory.json').read_text(encoding='utf-8'))
for group in ['visible','all']:
    remaining=[n for n in inventory[group] if key(n) not in names]
    print(group,len(inventory[group]),'remaining',len(remaining))
    print(' / '.join(remaining))
