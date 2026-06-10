import type { CSSProperties, ReactNode } from "react";
import { CountUpValue } from "@/components/site/CountUpValue";
import {
  homeAbout,
  homeExperienceClients,
  homeExperienceCta,
  homeHero,
} from "@/content/homePage";
import { scrollToTopSoon } from "@/lib/scroll";

function LineBreakText({ lines }: { lines: readonly string[] }) {
  return (
    <span aria-hidden="true">
      {lines.map((line, index) => (
        <span key={line}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}

function BackgroundSection({
  children,
  className,
  imageVar,
  image,
  id,
}: {
  children: ReactNode;
  className: string;
  imageVar: string;
  image: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={className}
      style={
        {
          [imageVar]: `url('${image}')`,
        } as CSSProperties
      }
    >
      {children}
    </section>
  );
}

export function HomeHeroSection() {
  return (
    <BackgroundSection
      className="hero hero--strong home-focus-section"
      imageVar="--hero-image"
      image={homeHero.image}
    >
      <div className="home-container hero__inner">
        <div className="hero__content fade-in">
          <h1 className="hero__title">{homeHero.title}</h1>
          <p className="hero__subtitle">{homeHero.description}</p>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="About 섹션으로 이동">
        <span className="hero__scroll-label">SCROLL</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </BackgroundSection>
  );
}

export function HomeAboutSection() {
  return (
    <section id="about" className="about-blend-section section--with-divider">
      <div className="home-container about-blend-inner">
        <div className="about-blend-content fade-in">
          <div className="about-blend-copy">
            <div className="about-blend-texts">
              <h2 className="about-blend-title" aria-label={homeAbout.titleLines.join(" ")}>
                <LineBreakText lines={homeAbout.titleLines} />
              </h2>

              <p className="about-blend-desc">{homeAbout.description}</p>

              <a
                href={homeAbout.ctaHref}
                className="about-blend-button"
                onClick={scrollToTopSoon}
              >
                <span>{homeAbout.ctaLabel}</span>
              </a>

              <div className="about-blend-metrics" aria-label="인팩트 회사 정보">
                {homeAbout.metrics.map((metric) => (
                  <div className="about-blend-metric" key={metric.label}>
                    <CountUpValue
                      target={metric.value}
                      suffix={metric.suffix}
                      format={metric.format}
                    />
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientLogoBand() {
  return (
    <section className="client-logo-band" aria-label="주요 수행 고객사">
      <div className="client-logo-band__track fade-in">
        {homeExperienceClients.map((client) => (
          <div className="client-logo-band__item" key={client}>
            <span>{client}</span>
          </div>
        ))}
        {homeExperienceClients.map((client) => (
          <div
            className="client-logo-band__item"
            key={`${client}-duplicate`}
            aria-hidden="true"
          >
            <span>{client}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeExperienceCtaSection() {
  return (
    <BackgroundSection
      id="experience"
      className="home-cta-banner fade-in"
      imageVar="--cta-image"
      image={homeExperienceCta.image}
    >
      <div className="home-cta-banner__content">
        <h2 aria-label={homeExperienceCta.titleLines.join(" ")}>
          <LineBreakText lines={homeExperienceCta.titleLines} />
        </h2>

        <p>{homeExperienceCta.description}</p>

        <div className="home-cta-banner__actions">
          <a
            href={homeExperienceCta.primary.href}
            className="home-cta-banner__button"
            onClick={scrollToTopSoon}
          >
            <span className="home-cta-banner__button-label">
              {homeExperienceCta.primary.label}
            </span>
          </a>

          <a
            href={homeExperienceCta.secondary.href}
            className="home-cta-banner__button home-cta-banner__button--ghost"
            onClick={scrollToTopSoon}
          >
            <span className="home-cta-banner__button-label">
              {homeExperienceCta.secondary.label}
            </span>
          </a>
        </div>
      </div>
    </BackgroundSection>
  );
}
