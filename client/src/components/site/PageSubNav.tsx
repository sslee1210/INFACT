import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { scrollToElementById } from "@/lib/scroll";

type PageSubNavItem = {
  href?: string;
  label: string;
  targetId?: string;
};

type PageSubNavProps = {
  breadcrumb?: string[];
  items: PageSubNavItem[];
};

export function PageSubNav({ breadcrumb, items }: PageSubNavProps) {
  const [location, setLocation] = useLocation();
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLSpanElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const sentinel = sentinelRef.current;
    if (!nav || !sentinel) return;

    let observer: IntersectionObserver | undefined;
    const observePosition = () => {
      observer?.disconnect();
      const style = window.getComputedStyle(nav);
      const stickyTop = Number.parseFloat(style.top) || 0;
      // The existing negative margin places the bar above its flow position.
      sentinel.style.top = style.marginTop;
      setIsStuck(sentinel.getBoundingClientRect().bottom < stickyTop);
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsStuck(entry.boundingClientRect.bottom < stickyTop);
        },
        { rootMargin: `-${stickyTop}px 0px 0px 0px`, threshold: 0 }
      );
      observer.observe(sentinel);
    };

    observePosition();
    const resizeObserver = new ResizeObserver(observePosition);
    resizeObserver.observe(nav);
    window.addEventListener("resize", observePosition);
    return () => {
      observer?.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", observePosition);
    };
  }, [location]);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1200px)").matches) return;

    window.requestAnimationFrame(() => {
      activeButtonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  }, [location]);

  const handleClick = (item: PageSubNavItem) => {
    if (item.href) {
      if (item.href !== location) setLocation(item.href);
      return;
    }

    if (item.targetId) scrollToElementById(item.targetId, "smooth");
  };

  return (
    <>
      <span
        ref={sentinelRef}
        className="page-subnav-sentinel"
        aria-hidden="true"
      />
      <nav
        ref={navRef}
        className={`page-subnav-wrap${isStuck ? " is-stuck" : ""}`}
        aria-label="페이지 하위 메뉴"
      >
        <div
          className={[
            "site-shell",
            "page-subnav-row",
            breadcrumb ? "page-subnav-row--with-breadcrumb" : "",
          ].join(" ")}
        >
          <div className="page-subnav">
            {items.map(item => {
              const itemPath = item.href?.split("#")[0];
              const isCurrent = Boolean(itemPath && itemPath === location);

              return (
                <button
                  key={item.href ?? item.targetId ?? item.label}
                  ref={isCurrent ? activeButtonRef : undefined}
                  type="button"
                  onClick={() => handleClick(item)}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {breadcrumb ? (
            <ol className="page-breadcrumb" aria-label="현재 위치">
              {breadcrumb.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : null}
        </div>
      </nav>
    </>
  );
}
