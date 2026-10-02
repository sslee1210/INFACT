import re, json, collections
from pathlib import Path
root = Path('.')
source = (root/'client/src/content/references/referencePriority.ts').read_text(encoding='utf-8')
groups = re.findall(r'\[("[^\n]+)\]',source)
norm = lambda s: re.sub(r'주식회사|\(주\)|㈜|\s','',s).upper()
priority = {norm(s):i for i,g in enumerate(groups) for s in re.findall(r'"([^"]+)"',g)}
visible, allnames = collections.Counter(), collections.Counter()
for file in (root/'client/src/content/references').glob('*References.ts'):
    years = json.loads(re.search(r'= (\[.*\]);',file.read_text(encoding='utf-8'),re.S)[1])
    for year in years:
        names = list(dict.fromkeys(x['client'] for x in year['clients']))
        allnames.update(names)
        visible.update(sorted(names,key=lambda s:priority.get(norm(s),999))[:20])
(root/'output/logo-audit/inventory.json').write_text(json.dumps({'all':dict(allnames),'visible':dict(visible)},ensure_ascii=False,indent=2),encoding='utf-8')
print('All:',len(allnames),'Visible:',len(visible))
print(', '.join(visible))
