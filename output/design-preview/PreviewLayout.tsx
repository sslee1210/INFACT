import { useEffect, type ReactNode } from 'react';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SkipLink } from '@/components/site/SkipLink';
import './common.css';

export function PreviewControls() {
  return <nav className="dp-review" aria-label="디자인 미리보기 화면 선택">
    <span>디자인 미리보기</span>
    <a href="#/">메인</a>
    <a href="#/service-gmp">사업안내</a>
    <a href="#/references-csv">수행실적</a>
    <a href="http://127.0.0.1:3000/#/" target="_blank" rel="noreferrer">현재 사이트 ↗</a>
  </nav>;
}

export function PreviewLayout({ children, home = false }: { children: ReactNode; home?: boolean }) {
  return <div className={`dp-root${home ? ' dp-root--home' : ''}`}>
    <SkipLink />
    <SiteHeader transparentOnTop={home} />
    <main id="main-content" className="dp-main" tabIndex={-1}>{children}</main>
    <SiteFooter />
  </div>;
}

export function PreviewIntro({ title, description, image, imageAlt = '' }: {
  title: string; description?: string; image?: string; imageAlt?: string;
}) {
  useEffect(() => { document.title = `${title} | INFACT 디자인 미리보기`; }, [title]);
  return <section className={`dp-intro${image ? ' dp-intro--image' : ''}`}>
    <div className="dp-shell dp-intro__inner">
      <div><h1>{title}</h1>{description && <p>{description}</p>}</div>
      {image && <figure><img src={image} alt={imageAlt} fetchPriority="high" /></figure>}
    </div>
  </section>;
}

export function PreviewContact({ title, description, label = '문의하기' }: {
  title: ReactNode; description: ReactNode; label?: string;
}) {
  return <section className="dp-contact">
    <div className="dp-shell">
      <h2 className="dp-heading">{title}</h2>
      <p className="dp-lead">{description}</p>
      <div className="dp-contact__actions">
        <a href="#/contact" className="dp-button">{label}</a>
        <a href="#/references-design" className="dp-link">수행실적 보기</a>
      </div>
    </div>
  </section>;
}
