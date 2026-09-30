import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";

type PageLayoutProps = {
  children: ReactNode;
  presentation?: "refined";
};

export function PageLayout({ children, presentation }: PageLayoutProps) {
  return (
    <div
      className={
        presentation === "refined" ? "site-app site-app--refined" : "site-app"
      }
    >
      <SkipLink />
      <SiteHeader transparentOnTop />
      <main
        id="main-content"
        className="site-main site-main--overlap"
        tabIndex={-1}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
