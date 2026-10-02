import json
from pathlib import Path
p=Path('output/logo-audit/candidates.json'); data=json.loads(p.read_text(encoding='utf-8'))
for key,url in [
 ('united','https://www.kup.co.kr/resources/images/common/logo_black.png'),
 ('daewoong','https://www.daewoong.co.kr/images/daewoong-logo-basic.svg'),
 ('daewoong-bio','https://daewoongbio.co.kr/images/og-default.png'),
]:
    s=next(s for s in data if s['key']==key)
    if url not in [c['url'] for c in s['candidates']]:s['candidates'].append(dict(url=url,alt='Official rendered logo'))
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
p=Path('output/logo-audit/sites.json');data=json.loads(p.read_text(encoding='utf-8'))
urls={'kukjeon':'https://www.kukjeon.co.kr','ysc':'http://www.yonsungchem.co.kr','taiguk':'https://www.taiguk.co.kr/','the-u':'https://www.theu.co.kr/?sc_web=y'}
for s in data:
    if s['key'] in urls:s['page']=urls[s['key']]
p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
# Select the colored half of the official SVG sprite. Paths and colors stay intact.
f=Path('output/logo-audit/raw/samsung-biologics-1.svg');svg=f.read_text(encoding='utf-8').replace('viewBox="0 0 122 88"','viewBox="0 44.68 122 43.32"')
f.write_text(svg,encoding='utf-8')
