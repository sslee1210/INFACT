import json
from pathlib import Path
p=Path('output/logo-audit/sites.json')
sites=json.loads(p.read_text(encoding='utf-8'))
fixes={'korea-vaccine':'https://www.kovax.co.kr','scd-pharm':'https://www.scd.co.kr','hanall':'https://hanall.com/kr/','hugel':'https://www.hugel-inc.com/kr/media/ci','dmbio':'https://stgenbio.com'}
for item in sites:
    if item['key'] in fixes: item['page']=fixes[item['key']]
rows='''
lotte-bio|롯데바이오로직스|https://www.lottebiologics.com
bcworld|비씨월드제약,비씨월드|https://www.bcwp.co.kr
binex|바이넥스|https://www.bi-nex.com
peptron|펩트론|https://www.peptron.co.kr
lnc-bio|엘앤씨바이오|https://www.lncbio.co.kr
boryung-bio|보령바이오파마|https://www.boryungbio.co.kr
youngjin|영진약품|https://www.yungjin.co.kr
kuhnil|건일제약|https://www.kuhnil.com
dongkwang|동광제약|https://www.dkpco.co.kr
genewel|제네웰|https://www.genewel.com
unimed|유니메드제약|https://www.unimed.co.kr
jeil|제일약품|https://www.jeilpharm.co.kr
daewon|대원제약|https://www.daewonpharm.com
jw-life|jw생명과학|https://www.jw-lifescience.co.kr
reyon|이연제약|https://www.reyonpharm.co.kr
kyongbo|경보제약|https://www.kbpharma.co.kr
alvogen|알보젠코리아,알보젠|https://www.alvogenkorea.com
pharmaresearch|파마리서치|https://pharmaresearch.com
kolmar-bnh|콜마비앤에이치,콜마 BNH|https://www.kolmarbnh.co.kr
daehwa|대화제약|https://www.dhpharm.co.kr
daihan|대한약품,대한약품공업|https://www.daihan.com
bnc|한국비엔씨|https://www.bnckorea.co.kr
dongkoo|동구바이오|https://www.dongkoo.com
huons-meditech|휴온스메디텍|https://www.huonsmeditech.com
huons-biopharma|휴온스바이오파마|https://www.huonsbiopharma.com
samyang-bio|삼양바이오팜,삼양바이오팜 의약공장|https://www.samyangbiopharm.com
samyang|삼양홀딩스,삼양홀딩스 의약공장|https://www.samyang.com
rp-bio|RPBIO|https://www.rpbio.co.kr
whanin|환인제약|https://www.whanin.com
suheung|서흥,서흥캅셀|https://www.suheung.com
taiguk|태극제약|https://www.taigukpharm.co.kr
union|한국유니온제약|https://www.ukp.co.kr
seoul-pharma|서울제약|https://www.seoulpharma.com
the-u|더유제약|https://www.theupharma.com
jnj|존슨앤존슨|https://www.jnj.com
kwangdong|광동제약|https://www.ekdp.com
apro-gen|에이프로젠|https://www.aprogen.com
apro-bio|에이프로젠바이오로직스|https://www.aprogen-biologics.com
humedix|휴메딕스|https://www.humedix.com
samil|삼일제약|https://www.samil-pharm.com
dongsung|동성제약|https://www.dongsung-pharm.com
prime|한국프라임제약|https://www.koreaprime.co.kr
jw-holdings|jw홀딩스|https://www.jw-holdings.co.kr
bukwang|부광약품|https://www.bukwang.co.kr
icure|아이큐어|https://www.icure.co.kr
aju|아주약품|https://www.ajupharm.co.kr
young-science|영사이언스|https://www.youngscience.com
domino|도미노코리아|https://www.domino-printing.com/ko-kr/home.aspx
hanwha|한화제약|https://www.hwpharm.com
otsuka|한국오츠카제약|https://www.otsuka.co.kr
yu-young|유영제약|https://www.yypharm.co.kr
g2g|G2G 바이오|https://www.g2gbio.com
isu|이수앱지스|https://www.abxis.com
woojung|우정바이오,우정BSC|https://www.woojungbio.kr
merck|머크|https://www.merckgroup.com/kr-ko
genuone|제뉴원사이언스|https://www.genuonesciences.com
eubiologics|유바이오로직스|https://www.eubiologics.com
shinpoong|신풍제약|https://www.shinpoong.co.kr
pharmbio|한국팜비오|https://www.pharmbio.co.kr
kukjeon|국전약품|https://www.kukjeon.com
3m|한국쓰리엠|https://www.3m.co.kr/3M/ko_KR/company-kr/
amore|아모레퍼시픽|https://www.apgroup.com/int/ko/
roche|한국로슈|https://www.roche.co.kr
boston|보스톤싸이언티픽|https://www.bostonscientific.com/ko-KR/home.html
guju|구주제약|https://www.gujup.co.kr
myungin|명인제약|https://www.myunginph.co.kr
daewoong-bio|대웅바이오|https://www.daewoongbio.co.kr
dongwha|동화약품|https://www.dong-wha.co.kr
penmix|펜믹스|https://www.panmix.com
eaglevet|이글벳|https://www.eaglevet.com
enzychem|엔지켐생명과학|https://www.enzychem.co.kr
snpg|에스엔피제네틱스|https://www.snp-genetics.com
mujin|무진메디|https://www.mujinmedi.com
prp-science|피알피사이언스,피알피싸이언스|https://www.prpscience.com
celltasquare|셀타스퀘어|https://www.celltasquare.com
ysc|연성정밀화학|https://www.yschem.co.kr
seowon|서원엠에프지|https://www.seowonmfg.com
optus|옵투스제약|https://www.optuspharm.com
fortnova|포트노바|https://www.fortnova.com
medystern|메디스턴|https://www.medystern.com
'''
known={s['key'] for s in sites}
for row in rows.strip().splitlines():
    key,names,url=row.split('|')
    if key not in known: sites.append({'key':key,'names':names.split(','),'page':url})
p.write_text(json.dumps(sites,ensure_ascii=False,indent=2),encoding='utf-8')
