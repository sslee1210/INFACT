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
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import "@/styles/pages/home.css";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="home-shell">
      <SiteHeader transparentOnTop />

      <main className="home-main">
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
