import json,re,shutil,hashlib
from pathlib import Path
out=Path('output/logo-audit')
selected=json.loads((out/'selections.json').read_text(encoding='utf-8'))
sites={x['key']:x for x in json.loads((out/'candidates.json').read_text(encoding='utf-8'))}
downloads={x['url']:x for x in json.loads((out/'downloads.json').read_text(encoding='utf-8')) if 'file' in x}
dest=Path('client/public/images/clients'); dest.mkdir(exist_ok=True)
records=[]
for key,url in selected.items():
    if url not in downloads:
        print('Missing download:',key);continue
    raw=Path(downloads[url]['file']); filename=key+raw.suffix.lower()
    shutil.copyfile(raw,dest/filename)
    site=sites[key]
    source_asset=site['page']+'#inline-logo' if downloads[url].get('inline') else url
    records.append({'id':key,'names':site['names'],'src':'./images/clients/'+filename,'background':site.get('logoBackground','light'),'sourcePage':site['page'],'sourceAsset':source_asset,'sha256':hashlib.sha256(raw.read_bytes()).hexdigest()})
Path('client/src/content/clientLogos.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Installed',len(records))
