import fs from 'node:fs';
import path from 'node:path';
const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const parts = JSON.parse(fs.readFileSync(path.join(dir, 'parts.json'), 'utf8'));
const built = fs.readFileSync('dist/public/index.html', 'utf8');
const styles = [...built.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n');
const hero = parts.hero.replace('프로젝트 상담이 필요하신가요?', '프로젝트 문의').replace('연락처, 위치, 문의 가능 범위를 확인하고 프로젝트 상황에 맞는 상담을 요청할 수 있습니다.', '개념설계부터 GMP·CSV까지, 프로젝트 상담을 한 곳에서 안내합니다.');
const html = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><base href="http://localhost:3000/"><title>통합 문의 시안 · INFACT</title>${styles}
<style>
.unified-preview{padding:84px 0 96px;background:#fff}
.unified-contact{display:grid;grid-template-columns:1.08fr 1fr;gap:72px;padding:38px 0 46px;border-top:1px solid #dfe3e8;border-bottom:1px solid #dfe3e8;align-items:start}
.unified-preview .intro-label{font-size:12px;font-weight:600;color:#6b7684;letter-spacing:.08em;margin:0 0 22px;text-transform:uppercase}
.unified-preview h2{font-size:30px;font-weight:650;letter-spacing:-.035em;line-height:1.45;color:#191f28;margin:0}
.unified-preview .intro-copy{font-size:16px;line-height:1.85;color:#6b7684;margin:19px 0 0;word-break:keep-all;max-width:380px}
.unified-preview .contact-person{margin:0 0 23px;font-size:23px;font-weight:600;letter-spacing:-.025em;color:#191f28}
.unified-preview .contact-person span{margin-left:9px;font-size:15px;font-weight:450;color:#6b7684}
.unified-preview dl{margin:0}.unified-preview dd{margin:0;min-width:0}.unified-preview dt{font-size:14px;color:#6b7684;font-weight:450}
.unified-preview .direct-contacts>div{display:grid;grid-template-columns:68px 1fr;gap:16px;align-items:baseline;padding:14px 0;border-top:1px solid #edf0f3}
.unified-preview .direct-contacts dd{font-size:20px;color:#191f28;letter-spacing:-.02em;font-weight:450}
.unified-preview .contact-note{margin:15px 0 0;font-size:13px;color:#8b95a1}
.unified-visit{display:grid;grid-template-columns:.9fr 1.25fr;gap:68px;margin-top:76px;align-items:center}
.unified-preview .unified-visit h2{font-size:25px}.unified-preview .visit-details{margin-top:23px}
.unified-preview .visit-details>div{display:grid;grid-template-columns:56px 1fr;gap:14px;padding:9px 0}
.unified-preview .visit-details dd{font-size:15px;line-height:1.75;color:#4e5968;word-break:keep-all}
.unified-preview .visit-note{margin:16px 0 0;font-size:14px;color:#8b95a1}
.unified-map{display:block;overflow:hidden;border:1px solid #e5e8eb;border-radius:10px;background:#f7f8fa;text-decoration:none}
.unified-map img{display:block;width:100%;height:255px;object-fit:cover}.unified-map span{display:flex;justify-content:space-between;background:#fff;padding:15px 19px;color:#4e5968;font-size:14px}.unified-map b{font-weight:400;color:#6b7684}
.preview-caption{position:fixed;right:16px;bottom:14px;z-index:100;background:#fff;border:1px solid #e5e8eb;border-radius:6px;padding:8px 12px;font:12px/1.4 InfactPretendard,sans-serif;color:#6b7684;box-shadow:0 2px 8px #00000008}
@media(max-width:900px){.unified-contact{gap:36px}.unified-visit{gap:36px}.unified-preview h2{font-size:26px}}
@media(max-width:650px){.unified-preview{padding:48px 0 60px}.unified-contact,.unified-visit{grid-template-columns:1fr;gap:32px}.unified-contact{padding:28px 0 32px}.unified-visit{margin-top:46px}.unified-preview .intro-label{margin-bottom:14px}.unified-preview .direct-contacts dd{font-size:18px}.unified-map img{height:220px}.preview-caption{font-size:11px}}
</style></head><body><div class="site-app site-app--refined">${parts.header}<main class="site-main site-main--overlap" id="main-content">${hero}
<section class="unified-preview"><div class="site-shell"><div class="unified-contact">
<div><p class="intro-label">Contact INFACT</p><h2>개념설계부터 GMP·CSV까지<br>문의해 주세요.</h2><p class="intro-copy">프로젝트 상담은 대표가 직접 확인하고 안내드립니다.<br>필요한 업무와 현재 진행 상황을 알려주세요.</p></div>
<div><p class="contact-person">고동주<span>대표</span></p><dl class="direct-contacts"><div><dt>이메일</dt><dd>infact@in-fact.co.kr</dd></div><div><dt>전화</dt><dd>031-378-7220</dd></div><div><dt>팩스</dt><dd>031-378-7221</dd></div></dl><p class="contact-note">개념설계 · GMP Consulting · CSV Consulting 통합 문의</p></div>
</div><div class="unified-visit"><div><p class="intro-label">Location</p><h2>오시는 길</h2><dl class="visit-details"><div><dt>주소</dt><dd>경기도 오산시 내삼미로 80번길 36-11</dd></div><div><dt>운영시간</dt><dd>평일 09:00 – 18:00</dd></div></dl><p class="visit-note">방문 상담은 사전 일정 확인 후 진행합니다.</p></div>
<a class="unified-map" href="https://map.kakao.com/link/search/경기도 오산시 내삼미로80번길 36-11" target="_blank" rel="noopener noreferrer" aria-label="카카오맵에서 INFACT 위치 보기"><img src="./images/contact/kakao-map-infact.png" alt="경기도 오산시 INFACT 사무실 주변 지도"><span>경기 오산시 수청동 636-3<b>카카오맵 보기 ↗</b></span></a>
</div></div></section></main>${parts.footer}</div><aside class="preview-caption">통합 문의 디자인 시안</aside>
<script>const routes={'INFACT 홈으로 이동':'/','회사소개':'/company','사업안내':'/service-design','수행실적':'/references-design','문의하기':'/contact','인사말':'/company','연혁':'/company/history','조직도':'/company/organization','개념설계':'/service-design','GMP Consulting':'/service-gmp','CSV Consulting':'/service-csv','GMP':'/references-gmp','CSV':'/references-csv'};document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>{const key=b.getAttribute('aria-label')||b.textContent.trim();if(routes[key])location.href='http://localhost:3000/#'+routes[key]}));const nav=document.querySelector('.home-nav');addEventListener('scroll',()=>{nav.classList.toggle('is-top',scrollY<20);nav.classList.toggle('is-scrolled',scrollY>=20)},{passive:true});</script></body></html>`;
fs.writeFileSync(path.join(dir, 'index.html'), html);
console.log('Created unified contact preview. Production source untouched.');
