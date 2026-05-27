import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { siteNavigation } from "@/content/navigation";
import { useTodayVisitor } from "@/hooks/useTodayVisitor";
import { forceScrollToTop, scrollToElementById } from "@/lib/scroll";

type SiteHeaderProps = {
  transparentOnTop?: boolean;
};

export function SiteHeader({ transparentOnTop = false }: SiteHeaderProps) {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const todayCount = useTodayVisitor();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const navClassName = useMemo(() => {
    const stateClass = transparentOnTop && !scrolled ? "is-top" : "is-scrolled";
    const dropClass = dropdownVisible ? "has-dropdown" : "";
    const mobileClass = mobileMenuOpen ? "is-mobile-open" : "";
    return `home-nav ${stateClass} ${dropClass} ${mobileClass}`.trim();
  }, [dropdownVisible, mobileMenuOpen, scrolled, transparentOnTop]);

  function closeDropdown() {
    setOpenMenu(null);
    setDropdownVisible(false);
  }

  function handleMenuEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
    setDropdownVisible(true);
  }

  function handleMenuLeave() {
    closeTimer.current = setTimeout(closeDropdown, 120);
  }

  function handleDropdownEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function navigateTo(href: string) {
    const [path, targetId] = href.split("#");
    closeDropdown();
    setMobileMenuOpen(false);

    if (targetId) {
      if (path === location) {
        scrollToElementById(targetId);
        return;
      }

      setLocation(path);
      window.setTimeout(() => {
        scrollToElementById(targetId);
      }, 80);
      return;
    }

    if (path === location) {
      forceScrollToTop();
      return;
    }

    setLocation(path);
    window.setTimeout(() => {
      forceScrollToTop();
    }, 0);
  }

  return (
    <>
      <nav
        className={navClassName}
        role="navigation"
        aria-label="주요 메뉴"
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleMenuLeave}
      >
        <div className="home-container home-nav__inner">
          <button
            className="home-nav__brand"
            onClick={() => navigateTo("/")}
            aria-label="INFACT 홈으로 이동"
            type="button"
          >
            <img
              src="./images/home/logo1.png"
              alt="INFACT"
              className="home-nav__logo--white"
            />
            <img
              src="./images/home/logo1.png"
              alt="INFACT"
              className="home-nav__logo--dark"
            />
          </button>

          <button
            type="button"
            className="home-nav__mobile-toggle"
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              closeDropdown();
              setMobileMenuOpen((open) => !open);
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <ul className="home-nav__menu">
            {siteNavigation.map((item) => {
              const isActive =
                item.match.length > 0 &&
                item.match.some((matchPath) => location === matchPath);

              return (
                <li
                  key={item.href}
                  className={`home-nav__menu-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => handleMenuEnter(item.label)}
                >
                  <button
                    type="button"
                    onClick={() => navigateTo(item.href)}
                    className="home-nav__menu-button"
                    aria-current={isActive ? "page" : undefined}
                    aria-expanded={dropdownVisible && openMenu === item.label}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="home-nav__right">
            <button
              type="button"
              className="home-nav__contact-btn"
              onClick={() => navigateTo("/contact")}
            >
              문의하기
            </button>

            <div
              className="home-nav__today"
              aria-label={`오늘 방문자 ${todayCount}명`}
            >
              <span>TODAY</span>
              <strong>{todayCount}</strong>
            </div>
          </div>
        </div>

        <div
          className={`home-nav__mega ${dropdownVisible ? "is-open" : ""}`}
          onMouseEnter={handleDropdownEnter}
        >
          <div className="home-nav__mega-grid">
            {siteNavigation.map((item) => (
              <div
                key={item.href}
                className={`home-nav__mega-column ${
                  openMenu === item.label ? "is-active" : ""
                }`}
                onMouseEnter={() => handleMenuEnter(item.label)}
              >
                <ul className="home-nav__mega-list">
                  {item.children?.map((child) => {
                    const [childPath] = child.href.split("#");
                    return (
                      <li key={child.href}>
                        <button
                          type="button"
                          onClick={() => navigateTo(child.href)}
                          className={`home-nav__mega-link ${
                            location === childPath ? "is-current" : ""
                          }`}
                        >
                          {child.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>

      <div className={`home-nav__mobile-panel ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="home-nav__mobile-panel-inner">
          {siteNavigation.map((item) => (
            <section className="home-nav__mobile-group" key={item.href}>
              <button
                type="button"
                className="home-nav__mobile-primary"
                onClick={() => navigateTo(item.href)}
              >
                {item.label}
              </button>

              {item.children ? (
                <div className="home-nav__mobile-submenu">
                  {item.children.map((child) => (
                    <button
                      type="button"
                      key={child.href}
                      className="home-nav__mobile-link"
                      onClick={() => navigateTo(child.href)}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          <button
            type="button"
            className="home-nav__mobile-contact"
            onClick={() => navigateTo("/contact")}
          >
            문의하기
          </button>
        </div>
      </div>

      <div
        className={`home-nav__scrim ${dropdownVisible || mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={() => {
          closeDropdown();
          setMobileMenuOpen(false);
        }}
      />
    </>
  );
}
