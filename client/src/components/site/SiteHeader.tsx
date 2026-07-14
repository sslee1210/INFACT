import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";
import { siteNavigation } from "@/content/navigation";
import { useTodayVisitor } from "@/hooks/useTodayVisitor";
import { forceScrollToTop, scrollToElementById } from "@/lib/scroll";

type SiteHeaderProps = {
  transparentOnTop?: boolean;
};

const DESKTOP_MEDIA_QUERY = "(min-width: 1200px)";

export function SiteHeader({ transparentOnTop = false }: SiteHeaderProps) {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const todayCount = useTodayVisitor();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrolledRef = useRef(scrolled);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    scrolledRef.current = scrolled;
  }, [scrolled]);

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true);
      return;
    }

    const updateScrolled = () => {
      scrollFrameRef.current = null;
      const nextScrolled = window.scrollY > 24;

      if (nextScrolled === scrolledRef.current) return;

      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    };

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(updateScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, [transparentOnTop]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const activeGroup = siteNavigation.find((item) =>
      item.match.some((matchPath) => location === matchPath),
    );

    setMobileSectionOpen(activeGroup?.label ?? siteNavigation[0]?.label ?? null);
  }, [location, mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.classList.add("is-nav-locked");
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.classList.remove("is-nav-locked");
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileMenuOpen(false);
      setMobileSectionOpen(null);
      setOpenMenu(null);
      setDropdownVisible(false);
    };

    const desktopMedia = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      setMobileMenuOpen(false);
      setMobileSectionOpen(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopMedia.addEventListener("change", handleViewportChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktopMedia.removeEventListener("change", handleViewportChange);
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

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileSectionOpen(null);
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
    closeMobileMenu();

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
              alt=""
              aria-hidden="true"
              className="home-nav__logo--dark"
            />
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
              className="home-nav__contact-btn ui-button ui-button--primary ui-button--compact"
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

          <div
            className="home-nav__mobile-today-inline"
            aria-label={`오늘 방문자 ${todayCount}명`}
          >
            <span>TODAY</span>
            <strong>{todayCount}</strong>
          </div>

          <button
            type="button"
            className="home-nav__mobile-toggle"
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-mobile-navigation"
            onClick={() => {
              closeDropdown();
              setMobileMenuOpen((open) => !open);
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
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

      <aside
        id="site-mobile-navigation"
        className={`home-nav__mobile-panel ${mobileMenuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="전체 메뉴"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="home-nav__mobile-panel-inner">
          <div className="home-nav__mobile-panel-head">
            <span className="home-nav__mobile-panel-label">MENU</span>
          </div>

          <div className="home-nav__mobile-groups">
            {siteNavigation.map((item, index) => {
              const isActive = item.match.some((matchPath) => location === matchPath);
              const isExpanded = mobileSectionOpen === item.label;
              const submenuId = `mobile-submenu-${index}`;

              return (
                <section
                  className={`home-nav__mobile-group ${isActive ? "is-active" : ""}`}
                  key={item.href}
                >
                  <div className="home-nav__mobile-group-head">
                    <button
                      type="button"
                      className="home-nav__mobile-primary"
                      onClick={() => navigateTo(item.href)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </button>

                    {item.children ? (
                      <button
                        type="button"
                        className="home-nav__mobile-expand"
                        aria-label={`${item.label} 하위 메뉴 ${isExpanded ? "접기" : "펼치기"}`}
                        aria-expanded={isExpanded}
                        aria-controls={submenuId}
                        onClick={() =>
                          setMobileSectionOpen((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                      >
                        <span aria-hidden="true" />
                      </button>
                    ) : null}
                  </div>

                  {item.children ? (
                    <div
                      id={submenuId}
                      className={`home-nav__mobile-submenu ${
                        isExpanded ? "is-open" : ""
                      }`}
                    >
                      <div className="home-nav__mobile-submenu-inner">
                        {item.children.map((child) => {
                          const [childPath] = child.href.split("#");
                          const isCurrent = location === childPath;

                          return (
                            <button
                              type="button"
                              key={child.href}
                              className={`home-nav__mobile-link ${
                                isCurrent ? "is-current" : ""
                              }`}
                              onClick={() => navigateTo(child.href)}
                              aria-current={isCurrent ? "page" : undefined}
                            >
                              {child.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>

          <button
            type="button"
            className="home-nav__mobile-contact ui-action-row"
            onClick={() => navigateTo("/contact")}
          >
            <span>프로젝트 문의하기</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </aside>

      <div
        className={`home-nav__scrim ${dropdownVisible || mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={() => {
          closeDropdown();
          closeMobileMenu();
        }}
      />
    </>
  );
}
