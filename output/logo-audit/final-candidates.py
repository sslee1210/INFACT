import json,shutil
from pathlib import Path
p=Path('output/logo-audit');d=json.loads((p/'candidates.json').read_text(encoding='utf-8'))
for key,url in [
('taiguk','https://www.taiguk.co.kr/assets/images/common/logotype1.png'),
('aprogen-biologics','https://www.aprogen-biologics.com/image/kor/00main/schnell_logo.jpg'),
('lg-life-historical','https://chem.ulsan.ac.kr/upload/281/images/000001/20220808135936527_WG3HRXQG.png'),
]:
    s=next(s for s in d if s['key']==key);s['candidates'].append(dict(url=url,alt='Verified company logo'))
(p/'candidates.json').write_text(json.dumps(d,ensure_ascii=False,indent=2),encoding='utf-8')
src=Path('C:/Users/sslee/AppData/Local/Temp/browser-use/assets/ad22ee72-9f7d-4e2b-ace7-6ba2524a8d85/9005f0282d983a6e.svg');f=p/'raw/3m-official.svg';shutil.copyfile(src,f)
downloads=json.loads((p/'downloads.json').read_text(encoding='utf-8'));url=next(s for s in d if s['key']=='3m')['candidates'][0]['url']
downloads=[x for x in downloads if x['url']!=url];downloads.append(dict(key='3m',index=0,url=url,file=str(f)))
(p/'downloads.json').write_text(json.dumps(downloads,ensure_ascii=False,indent=2),encoding='utf-8')
