import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="site-app">
      <a className="site-skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <SiteHeader />
      <main id="main-content" className="site-main site-main--overlap" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
