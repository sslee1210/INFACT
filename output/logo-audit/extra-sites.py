import json
from pathlib import Path
p=Path('output/logo-audit/sites.json'); data=json.loads(p.read_text(encoding='utf-8'))
# Candidates only: each title and logo is reviewed before installation.
rows='''
myungin|명인제약|https://myunginph.co.kr/main/ko/index.html
mujin|무진메디|https://www.moogene.com/kor/main/main.html
mirae-cell|미래셀바이오|http://miraecellbio.com/
yoosung|유성에프에스|http://www.yoosungfs.com/
curable|큐러블|http://www.curablent.com/
anguk|안국약품|https://www.ahn-gook.com/
alico|알리코제약|https://www.arlico.co.kr/
myungmoon|명문제약|https://www.mmpharm.co.kr/
vivozon|비보존제약|https://www.vivozonpharm.com/
pan-gen|팬젠|https://www.pangen.com/
inventage|인벤티지랩|https://www.inventagelab.com/
cgbio|CG바이오,시지바이오|https://www.cgbio.co.kr/
anygen|애니젠|http://www.anygen.com/
inibio|이니바이오|https://www.inibio.com/
bmi|한국BMI,한국비엠아이|https://www.bmikr.co.kr/
daehan-new|대한뉴팜|https://www.dhnp.co.kr/
cellontech|셀론텍|https://www.cellontech.com/
organoid|오가노이드사이언스|https://organoidrx.com/
itchem|아이티켐|https://www.itchem.co.kr/
kolon|코오롱제약|https://www.kolonpharm.co.kr/
shinil|신일제약|https://www.sinilpharm.com/
samsung-pharm|삼성제약|https://www.sspharm.co.kr/
curatis|큐라티스|https://www.quratis.com/
komipharm|코미팜|https://www.komipharm.co.kr/
dsmbio|대성미생물|http://www.dsmbio.com/
osstem|오스템파마|https://www.osstempharma.com/
genetox|제네톡스|https://www.genetox.co.kr/
cellumed|셀루메드|https://www.cellumed.co.kr/
glpharma|지엘파마|https://www.gl-pharma.co.kr/
enterobiome|엔테로바이옴|https://www.enterobiome.co.kr/
sk-ecoplant|SK에코플랜트|https://www.skecoplant.com/
sama|삼아제약|https://www.samapharm.co.kr/
jw-shinyak|JW중외신약|https://www.jw-shinyak.co.kr/
quantamatrix|퀀타매트릭스|https://www.quantamatrix.com/
genoss|제노스|https://www.genoss.com/
sunjin|선진뷰티사이언스|https://www.sunjinbs.com/
quadmedicine|쿼드메디슨|https://www.quadmedicine.com/
hwail|화일약품|https://www.hwail.com/
caregen|케어젠|https://www.caregen.co.kr/
dongkook-life|동국생명과학|https://www.dkls.co.kr/
youngil|영일제약|http://www.youngilpharm.co.kr/
genu-pharm|제뉴파마|https://www.genupharm.com/
jaseng|자생한방병원|https://www.jaseng.co.kr/
kgc|인삼공사|https://www.kgc.co.kr/
samnam|삼남제약|http://www.samnam.com/
nexpharm|넥스팜코리아|http://www.nexpharm.co.kr/
qbest|큐베스트바이오|https://www.qbestbio.com/
cosmax-bio|코스맥스바이오|https://www.cosmaxbio.com/
hana|하나제약|https://www.hanaph.co.kr/
endoderma|엔도더마|https://www.endoderma.com/
celltrion-pharm|셀트리온제약|https://www.celltrionph.com/
sgmedical|SG 메디칼|https://www.sgmedical.co.kr/
bascane|바스칸바이오제약|https://www.bascane.com/
withus|위더스제약|https://www.withuspharm.com/
hpnc|에이치피앤씨|https://www.hpnc.co.kr/
dermafirm|더마펌|https://www.dermafirm.com/
mirae-pharm|미래제약|https://www.mirae-pharma.com/
hanmi-fine|한미정밀화학|https://www.hanmifc.co.kr/
firson|퍼슨|https://www.firson.co.kr/
srtechnopack|SR테크노팩|https://www.srtechno.co.kr/
hitechpharm|하이텍팜|https://www.htpharm.com/
woogene|우진비앤지|https://www.woogenebng.com/
jin-yang|진양제약|https://www.jinyangpharm.com/
cellbion|셀비온|https://www.cellbion.co.kr/
across|아크로스|https://www.across.co.kr/
korus|코러스|https://www.koruspharm.co.kr/
kookje|국제약품|https://www.kukjepharm.co.kr/
chameditech|차메디텍|https://www.chameditech.com/
apvs|에이피브이에스|https://www.apvs.co.kr/
'''
changed=[]
for row in rows.strip().splitlines():
    key,names,url=row.split('|');old=next((s for s in data if s['key']==key),None)
    if old:
        if old['page']!=url:old['page']=url;changed.append(key)
    else:data.append(dict(key=key,names=names.split(','),page=url))
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
print('Refresh',*changed)
