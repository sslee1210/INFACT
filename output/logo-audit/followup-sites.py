import json
from pathlib import Path
p=Path('output/logo-audit/sites.json');data=json.loads(p.read_text(encoding='utf-8'))
updates={
 'kyongbo':('경보제약','https://www.kbpharma.co.kr/company/summary_kbp.do'),
 'hanlim':('한림제약','https://www.hanlim.com:49324/index.php'),
 'han-eol':('한얼이엔씨','http://www.haneng.net'),
 'dk-consultants':('디케이컨설턴츠','http://www.dk-consultant.com'),
 'celltasquare':('셀타스퀘어','https://seltaglobal.com/bbs/board.php?bo_table=0401_kr'),
 'jnj':('존슨앤존슨','https://www.jnj.com/'),
 '3m':('한국쓰리엠','https://www.3m.co.kr/3M/ko_KR/company-kr/'),
 'boston-scientific':('보스톤싸이언티픽','https://www.bostonscientific.com/en-US/Home.html'),
 'domino':('도미노코리아','https://www.domino-printing.com/ko-kr/home.aspx'),
 'seoul-pharma':('서울제약','https://www.seoulpharma.com/'),
 'prime':('한국프라임제약','http://www.k-prime.co.kr/'),
 'aprogen':('에이프로젠','https://aprogen.com/'),
 'aprogen-biologics':('에이프로젠바이오로직스','https://aprogenbiologics.com/'),
 'guju':('구주제약','https://www.gujup.co.kr/'),
 'kolmar-bnh':('콜마비앤에이치|콜마 BNH','https://kolmarbnh.co.kr/'),
 'taiguk':('태극제약','https://www.taigukpharm.co.kr/'),
 'theu':('더유제약','https://www.theupharma.com/'),
}
for key,(names,url) in updates.items():
    old=next((s for s in data if s['key']==key),None)
    if old:old['page']=url
    else:data.append(dict(key=key,names=names.split('|'),page=url))
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
