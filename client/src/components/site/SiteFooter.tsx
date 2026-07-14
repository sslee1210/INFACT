import { Link } from "wouter";
import { footerNavigation } from "@/content/navigation";
import { scrollToTopSoon } from "@/lib/scroll";

const FOOTER_LOGO = "./images/home/logo1.png";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="home-container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link
              href="/"
              className="site-footer__brand-mark"
              onClick={scrollToTopSoon}
              aria-label="IN-FACT 홈으로 이동"
            >
              <img src={FOOTER_LOGO} alt="IN-FACT" />
            </Link>

            <p className="site-footer__brand-copy">
              현장의 요구와 규제 기준을 연결해, 제약·바이오 프로젝트가 실행 가능한
              계획으로 이어지도록 지원합니다.
            </p>

            <div className="site-footer__company-meta" aria-label="회사 정보">
              <p>대표. 고동주</p>
              <p>주소. 경기도 오산시 내삼미로 80번길 36-11</p>
              <p>
                <a href="tel:0313787220">Tel. 031-378-7220</a>
                <span aria-hidden="true"> · </span>
                <a href="tel:0313787221">Fax. 031-378-7221</a>
              </p>
            </div>
          </div>

          <nav className="site-footer__links" aria-label="푸터 메뉴">
            <div className="site-footer__col">
              <span className="site-footer__heading">Navigation</span>
              {footerNavigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={scrollToTopSoon}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="site-footer__col">
              <span className="site-footer__heading">Contact</span>
              <a href="tel:0313787220">031-378-7220</a>
              <a href="mailto:infact@in-fact.co.kr">infact@in-fact.co.kr</a>
              <a href="https://www.in-fact.co.kr" target="_blank" rel="noreferrer">
                www.in-fact.co.kr
              </a>
            </div>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 IN-FACT. All rights reserved.</p>

          <div className="site-footer__bottom-links" aria-label="보조 메뉴">
            <Link href="/" onClick={scrollToTopSoon}>
              홈
            </Link>
            {footerNavigation
              .filter((item) => item.href === "/company" || item.href === "/contact")
              .map((item) => (
                <Link key={item.href} href={item.href} onClick={scrollToTopSoon}>
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
