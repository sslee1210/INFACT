import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="site-app">
      <SkipLink />
      <SiteHeader transparentOnTop />
      <main id="main-content" className="site-main site-main--overlap" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
