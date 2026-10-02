import concurrent.futures, hashlib, json, re, sys
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
from http_fetch import get
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'output/logo-audit'
HEADERS = {'User-Agent': 'Mozilla/5.0 (compatible; CompanyLogoResearch/1.0)'}

def inspect(site):
    key, names, url = site['key'], site['names'], site['page']
    result = dict(site, candidates=[])
    try:
        response = get(url, headers=HEADERS, timeout=18)
        response.raise_for_status()
        response.encoding = response.apparent_encoding
        soup = BeautifulSoup(response.text, 'html.parser')
        for _ in range(3):
            refresh=soup.find('meta',attrs={'http-equiv':re.compile('refresh',re.I)})
            target=re.search(r'url\s*=\s*[\'\"]?([^\'\"]+)',refresh.get('content',''),re.I) if refresh else None
            if not target:break
            response=get(urljoin(response.url,target.group(1).strip()),headers=HEADERS,timeout=18)
            response.raise_for_status();response.encoding=response.apparent_encoding
            soup=BeautifulSoup(response.text,'html.parser')
        result.update(page=response.url, title=soup.title.get_text(' ',strip=True) if soup.title else '', text=soup.get_text(' ',strip=True)[:800])
        (OUT/'html').mkdir(exist_ok=True)
        (OUT/'html'/f'{key}.html').write_text(response.text,encoding='utf-8')
        candidates = []
        for img in soup.find_all(['img','source']):
            src = img.get('src') or img.get('data-src') or img.get('srcset','').split(' ')[0]
            context = str(img) + str(img.parent)[:200]
            if src and re.search(r'logo|로고|ci[_./-]|brand',context,re.I) and not src.startswith('data:'):
                candidates.append({'url':urljoin(response.url,src),'alt':img.get('alt','')})
        for match in re.findall(r'''(?:url\(['"]?|["'])([^"'\s()<>]*logo[^"'\s()<>]*\.(?:svg|png|gif|webp|jpg))(?:["']|\))''', response.text,re.I):
            candidates.append({'url':urljoin(response.url,match),'alt':''})
        result['candidates'] = list({x['url']:x for x in candidates}.values())
        result['stylesheets'] = [urljoin(response.url,x.get('href')) for x in soup.find_all('link',rel='stylesheet') if x.get('href')][:12]
        for index, svg in enumerate(soup.find_all('svg')):
            parents = ' '.join(str(p.get('class',''))+' '+str(p.get('id','')) for p in list(svg.parents)[:3])
            if re.search('logo',parents,re.I):
                svg['xmlns']='http://www.w3.org/2000/svg'
                dest=OUT/'raw'/f'{key}-inline-{index}.svg'
                dest.parent.mkdir(exist_ok=True)
                dest.write_text(str(svg),encoding='utf-8')
                result['candidates'].append({'url':str(dest),'alt':'inline logo','inline':True})
    except Exception as e:
        result['error']=str(e)[:160]
    return result

if __name__ == '__main__':
    sites = json.loads((OUT/'sites.json').read_text(encoding='utf-8'))
    existing_path = OUT/'candidates.json'
    existing = json.loads(existing_path.read_text(encoding='utf-8')) if existing_path.exists() else []
    requested = set(sys.argv[1:])
    if requested:
        existing = [x for x in existing if x['key'] not in requested]
    done = {x['key'] for x in existing}
    batch = [x for x in sites if x['key'] not in done]
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        for result in pool.map(inspect,batch):
            existing.append(result)
            print(result['key'], result.get('title','')[:50], len(result['candidates']), result.get('error',''),flush=True)
            existing_path.write_text(json.dumps(existing,ensure_ascii=False,indent=2),encoding='utf-8')
