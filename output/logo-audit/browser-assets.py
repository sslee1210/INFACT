import json,sys
from pathlib import Path
p=Path('output/logo-audit/candidates.json');d=json.loads(p.read_text(encoding='utf-8'))
for key,url in [
('3m','https://www.3m.co.kr/3m_theme_assets/themes/3MTheme/assets/images/unicorn/Logo.svg'),
('domino','https://www.domino-printing.com/site-elements/images/logo.svg'),
('kolmar-bnh','https://d1kv469isxhbtb.cloudfront.net/wp-content/uploads/2024/07/%EB%A1%9C%EA%B3%A0%EC%95%95%EC%B6%95.png'),
]:
    s=next(s for s in d if s['key']==key)
    if url not in [c['url'] for c in s['candidates']]:s['candidates'].append(dict(url=url,alt='Official rendered logo'))
p.write_text(json.dumps(d,ensure_ascii=False,indent=2),encoding='utf-8')
