import json
from pathlib import Path
p=Path('output/logo-audit/sites.json')
sites=json.loads(p.read_text(encoding='utf-8'))
fixes={
'korea-vaccine':'https://www.koreavaccine.com',
'penmix':'http://www.penmix.co.kr',
'prp-science':'http://www.prpscience.co.kr',
'st-pharm':'https://www.stpharm.co.kr/ko/ci',
'yuhan':'https://www.yuhan.co.kr/Main/',
'samjin':'https://www.samjinpharm.co.kr/front/kr/main/index.asp',
'hanlim':'http://www.hanlim.com/index.php',
'united':'https://www.kup.co.kr/main.do',
'myungin':'https://myunginph.co.kr',
'unimed':'https://www.unimed.co.kr/index',
'ckd-pharm':'https://www.ckdpharm.com/research/intro.do',
'ckd-bio':'https://www.ckdbio.com/facility/ansanFactory.do',
'isu':'https://www.abxis.com/kor/index.do',
'dongwha':'https://www.dong-wha.co.kr/dw_main.asp'
}
for item in sites:
    if item['key'] in fixes:item['page']=fixes[item['key']]
p.write_text(json.dumps(sites,ensure_ascii=False,indent=2),encoding='utf-8')
print(' '.join(fixes))
