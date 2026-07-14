import {
  HomeAboutSection,
  HomeCompanyIntroSection,
  HomeContactSection,
  HomeExperienceSection,
  HomeHeroSection,
} from "@/components/site/HomeSections";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SkipLink } from "@/components/site/SkipLink";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="home-shell">
      <SkipLink />
      <SiteHeader transparentOnTop />

      <main id="main-content" className="home-main" tabIndex={-1}>
        <HomeHeroSection />
        <HomeCompanyIntroSection />
        <HomeAboutSection />
        <HomeExperienceSection />
        <ServiceShowcase />
        <HomeContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
