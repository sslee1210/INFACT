import json
from pathlib import Path
p=Path('output/logo-audit/sites.json');d=json.loads(p.read_text(encoding='utf-8'))
urls={'bnc':'http://www.bnckorea.co.kr/web/?urlkeyword=BNC+KOREA','eubiologics':'http://www.eubiologics.com/kor/','taiguk':'https://www.taiguk.co.kr/index.jsp','aprogen-biologics':'https://www.aprogen-biologics.com/'}
for s in d:
    if s['key'] in urls:s['page']=urls[s['key']]
d += [
dict(key='lg-life-historical',names=['LG생명과학'],page='https://chem.ulsan.ac.kr/chem/1749'),
dict(key='cj-health-historical',names=['CJ헬스케어'],page='https://www.khanews.com/news/articleView.html?idxno=99565')
]
p.write_text(json.dumps(d,ensure_ascii=False,indent=2),encoding='utf-8')
