import { footerNavigation } from "@/content/navigation";
import { scrollToTopSoon } from "@/lib/scroll";

const FOOTER_LOGO = "/images/home/logo1.png";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="home-container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a href="#/" className="site-footer__brand-mark" onClick={scrollToTopSoon}>
              <img src={FOOTER_LOGO} alt="IN-FACT 로고" />
            </a>

            <p className="site-footer__brand-copy">
              GMP Consulting, Conceptual Design, CSV Consulting을 기반으로
              제약·바이오 프로젝트의 실무 방향을 함께 설계합니다.
            </p>

            <div className="site-footer__company-meta">
              <p>대표. 고동주</p>
              <p>주소. 경기도 오산시 내삼미로 80번길 36-11</p>
              <p>Tel. 031-378-7220</p>
              <p>Fax. 031-378-7221</p>
            </div>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__col">
              <span className="site-footer__heading">바로가기</span>
              {footerNavigation.map((item) => (
                <a key={item.href} href={`#${item.href}`} onClick={scrollToTopSoon}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="site-footer__col">
              <span className="site-footer__heading">연락처</span>
              <a href="tel:0313787220">031-378-7220</a>
              <a href="mailto:infact@in-fact.co.kr">infact@in-fact.co.kr</a>
              <a href="http://www.in-fact.co.kr" target="_blank" rel="noreferrer">
                www.in-fact.co.kr
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 IN-FACT. All rights reserved.</p>

          <div className="site-footer__bottom-links">
            <a href="#/" onClick={scrollToTopSoon}>
              홈
            </a>
            {footerNavigation
              .filter((item) => item.href === "/company" || item.href === "/contact")
              .map((item) => (
                <a key={item.href} href={`#${item.href}`} onClick={scrollToTopSoon}>
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
