import { useEffect, useRef } from "react";
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
      setLocation(item.href);
      return;
    }

    if (item.targetId) scrollToElementById(item.targetId, "smooth");
  };

  return (
    <nav className="page-subnav-wrap" aria-label="페이지 하위 메뉴">
      <div
        className={[
          "site-shell",
          "page-subnav-row",
          breadcrumb ? "page-subnav-row--with-breadcrumb" : "",
        ].join(" ")}
      >
        <div className="page-subnav">
          {items.map((item) => {
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
            {breadcrumb.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        ) : null}
      </div>
    </nav>
  );
}
