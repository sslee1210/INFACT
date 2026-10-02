from pathlib import Path
from bs4 import BeautifulSoup
import json,sys
data=json.loads(Path('output/logo-audit/candidates.json').read_text(encoding='utf-8'))
for item in data:
    if item['key'] not in sys.argv[1:]: continue
    print('\n'+item['key']+' '+item['page'])
    s=BeautifulSoup(Path('output/logo-audit/html/'+item['key']+'.html').read_text(encoding='utf-8'),'html.parser')
    print('Candidates',item['candidates'][:8])
    print('Frames',[str(x)[:350] for x in s.find_all(['frame','iframe'])][:3])
    print('Links',[(a.get_text(strip=True)[:30],a.get('href')) for a in s.find_all('a') if any(v in str(a).lower() for v in ['logo','회사','main','intro','ci','brand'])][:12])
    print('Scripts',[x.get('src') or x.get_text()[:300] for x in s.find_all('script')][:5])
