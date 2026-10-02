import json,sys
from pathlib import Path
out=Path('output/logo-audit')
candidates={x['key']:x for x in json.loads((out/'candidates.json').read_text(encoding='utf-8'))}
p=out/'selections.json'
selected=json.loads(p.read_text(encoding='utf-8')) if p.exists() else {}
for choice in sys.argv[1:]:
    key,index=choice.rsplit(':',1)
    selected[key]=candidates[key]['candidates'][int(index)]['url']
p.write_text(json.dumps(selected,ensure_ascii=False,indent=2),encoding='utf-8')
print('Selected',len(selected))
