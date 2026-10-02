import json
from pathlib import Path
p=Path('output/logo-audit/sites.json');data=json.loads(p.read_text(encoding='utf-8'))
urls={'guju':'https://www.guju.co.kr/e_product/list.php','kolmar-bnh':'http://www.kolmarbnh.co.kr/','prime':'http://www.koreaprime.co.kr/','union':'https://www.ukp.co.kr/kor/company/index.php','seoul-pharma':'http://www.seoulpharma.com/'}
for s in data:
    if s['key'] in urls:s['page']=urls[s['key']]
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
p=Path('output/logo-audit/candidates.json');data=json.loads(p.read_text(encoding='utf-8'))
s=next(s for s in data if s['key']=='jnj');s['candidates'].append(dict(url='https://jnj-content-lab2.brightspotcdn.com/ac/25/bd2078f54d5992dd486ed26140ce/johnson-johnson-logo.svg',alt='Johnson & Johnson logo'))
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
