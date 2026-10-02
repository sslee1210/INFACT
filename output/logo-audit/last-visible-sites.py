import json
from pathlib import Path
p=Path('output/logo-audit/sites.json');data=json.loads(p.read_text(encoding='utf-8'))
updates={
 'fortnova':'http://www.fortnova.co.kr/',
 'mujin':'https://www.moogene.com/',
 'prostemics':'https://www.prostemics.com/',
 'mediinfra':'https://www.ahealthzcare.com/',
 'genewel':'https://www.genewel.com/kr/sub/company/overview.php',
 'jw-holdings':'https://www.jw-holdings.co.kr/holdings/ko/intro/ci.jsp',
 'kuhnil':'http://www.kuhnil.com',
 'bnc':'http://www.bnckorea.co.kr',
 'ysc':'http://www.ysc.co.kr',
 'eubiologics':'http://www.eubiologics.com',
 'kukjeon':'http://www.kukjeon.com',
 'seowon':'http://www.seowonmfg.com',
 'aprogen':'https://aprogen.com/ko/v.do?a=Main',
 'huons-biopharma':'https://huonsbiopharma.com/web/home.php',
}
names={'prostemics':['프로스테믹스'],'mediinfra':['메디인프라']}
for key,url in updates.items():
    old=next((s for s in data if s['key']==key),None)
    if old:old['page']=url
    else:data.append(dict(key=key,names=names[key],page=url))
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
# Retry only the deliberately raised file-size limit.
p=Path('output/logo-audit/downloads.json');d=json.loads(p.read_text(encoding='utf-8'))
p.write_text(json.dumps([x for x in d if x.get('error')!='Asset exceeds 3MB review limit'],ensure_ascii=False,indent=2),encoding='utf-8')
