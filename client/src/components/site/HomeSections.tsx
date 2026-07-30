import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Building2, ClipboardCheck, UsersRound } from "lucide-react";
import { CountUpValue } from "@/components/site/CountUpValue";
import {
  homeAbout,
  homeExperienceClients,
  homeExperienceCta,
  homeHero,
} from "@/content/homePage";
import { scrollToElementById, scrollToTopSoon } from "@/lib/scroll";

const homeHeroParticles = [
  { left: "7%", top: "18%", size: 3, color: "#d8dc82", delay: "-5s", duration: "21s" },
  { left: "14%", top: "62%", size: 2, color: "#a8ce78", delay: "-12s", duration: "26s" },
  { left: "23%", top: "34%", size: 2, color: "#e5c778", delay: "-3s", duration: "23s" },
  { left: "31%", top: "78%", size: 3, color: "#bed985", delay: "-17s", duration: "29s" },
  { left: "39%", top: "15%", size: 2, color: "#d9d57a", delay: "-8s", duration: "24s" },
  { left: "47%", top: "68%", size: 2, color: "#9fca72", delay: "-20s", duration: "31s" },
  { left: "56%", top: "26%", size: 3, color: "#e7cb7c", delay: "-10s", duration: "27s" },
  { left: "64%", top: "84%", size: 2, color: "#b4d47d", delay: "-4s", duration: "22s" },
  { left: "72%", top: "42%", size: 2, color: "#d9d67c", delay: "-16s", duration: "28s" },
  { left: "79%", top: "17%", size: 3, color: "#a9cf78", delay: "-7s", duration: "25s" },
  { left: "86%", top: "67%", size: 2, color: "#e2c573", delay: "-14s", duration: "30s" },
  { left: "93%", top: "31%", size: 2, color: "#b6d781", delay: "-2s", duration: "20s" },
  { left: "4%", top: "88%", size: 2, color: "#d5d77d", delay: "-18s", duration: "27s" },
  { left: "96%", top: "86%", size: 3, color: "#9fc972", delay: "-9s", duration: "24s" },
] as const;

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
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      setIsComplete(true);
      return;
    }

    const timer = window.setTimeout(() => setIsComplete(true), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="hero hero--strong hero--particle-field home-focus-section">
      <div className="hero__particles" aria-hidden="true">
        {homeHeroParticles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="hero__particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              color: particle.color,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
            data-particle-index={index}
          />
        ))}
      </div>

      <div className="home-container hero__inner">
        <div
          className={[
            "hero__content",
            "hero__content--intro",
            isComplete ? "is-complete" : "",
          ].join(" ")}
        >
          <h1 className="hero__title">{homeHero.title}</h1>
          <img
            src={homeHero.logo}
            alt="IN-FACT"
            className="hero__brand-logo"
          />
          <div className="hero__completion" aria-hidden={!isComplete}>
            <div className="hero__completion-inner">
              <p className="hero__subtitle">{homeHero.description}</p>
              <a
                href={homeHero.ctaHref}
                className="hero__contact-link ui-button ui-button--primary"
                onClick={scrollToTopSoon}
                tabIndex={isComplete ? 0 : -1}
              >
                <span className="hero__contact-label">{homeHero.ctaLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero__scroll-cue"
        aria-label="About 섹션으로 이동"
        onClick={() => scrollToElementById("about", "smooth")}
      >
        <span className="hero__scroll-label">SCROLL</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </button>
    </section>
  );
}

export function HomeAboutSection() {
  return (
    <section id="about" className="about-blend-section section--with-divider">
      <div className="home-container about-blend-inner">
        <div className="about-blend-content fade-in">
          <div className="about-blend-copy">
            <div className="about-blend-texts">
              {homeAbout.titleLines.length > 0 ? (
                <h2 className="about-blend-title" aria-label={homeAbout.titleLines.join(" ")}>
                  <LineBreakText lines={homeAbout.titleLines} />
                </h2>
              ) : null}

              <p className="about-blend-desc">
                {homeAbout.descriptionLines.map((line, index) => (
                  <span key={index}>
                    {line.map((part, partIndex) =>
                      part.emphasis ? (
                        <strong key={`${part.text}-${partIndex}`}>{part.text}</strong>
                      ) : (
                        <span key={`${part.text}-${partIndex}`}>{part.text}</span>
                      ),
                    )}
                    {index < homeAbout.descriptionLines.length - 1 && <br />}
                  </span>
                ))}
              </p>

              <div className="about-process-cycle" aria-label="GMP 프로젝트 지원 순환 구조">
                <svg
                  className="about-process-cycle__svg"
                  viewBox="0 0 760 510"
                  role="img"
                  aria-labelledby="about-process-cycle-title"
                >
                  <title id="about-process-cycle-title">
                    Project Plan, Design, QMS, Compliance, Validation 순환 구조
                  </title>
                  <g aria-hidden="true">
                    <g className="about-process-cycle__edges">
                      <path d="M380 105 L469 161.5 L558 218" />
                      <path d="M558 218 L524 314 L490 410" />
                      <path d="M490 410 L380 410 L270 410" />
                      <path d="M270 410 L236 314 L202 218" />
                      <path d="M202 218 L291 161.5 L380 105" />
                    </g>

                    <path
                      className="about-process-cycle__trace"
                      pathLength="100"
                      d="M380 105 L558 218 L490 410 L270 410 L202 218 Z"
                    />

                    <g className="about-process-cycle__nodes">
                      <circle cx="380" cy="105" r="5" />
                      <circle cx="558" cy="218" r="5" />
                      <circle cx="490" cy="410" r="5" />
                      <circle cx="270" cy="410" r="5" />
                      <circle cx="202" cy="218" r="5" />
                    </g>
                  </g>

                  <g className="about-process-cycle__labels">
                    <text x="380" y="58" textAnchor="middle">Project Plan</text>
                    <text x="650" y="226" textAnchor="middle">Design</text>
                    <text x="510" y="466" textAnchor="middle">QMS</text>
                    <text x="250" y="466" textAnchor="middle">Compliance</text>
                    <text x="105" y="226" textAnchor="middle">Validation</text>
                  </g>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeCompanyIntroSection() {
  return (
    <section className="home-company-intro" aria-labelledby="home-company-intro-title">
      <div className="home-container home-company-intro__inner">
        <div className="home-company-intro__lead fade-in">
          <h2 id="home-company-intro-title">
            <span className="home-heading-accent">신뢰</span>는 약속이 아니라<br />
            <span className="home-heading-accent">검증의 결과</span>입니다.
          </h2>
        </div>

        <figure className="home-company-intro__media fade-in">
          <img
            src="./images/home/company-building-v2.png"
            alt="인팩트의 전문성과 신뢰를 상징하는 현대적인 업무용 건물"
          />
        </figure>

        <div className="home-company-intro__copy fade-in">
          <p className="home-company-intro__statement">
            ㈜인팩트는 완제의약품(KGMP) / 원료의약품(BGMP) / 동물의약품(VGMP) / Bio
            Industry / Cosmetic 업계 등에서 필요로 하는 국내외 GMP에 관한 모든 것을
            제공하고 있습니다.
          </p>
          <p>
            인팩트의 모든 임직원은 고객사의 GMP 품질 향상과 확보에 최선을 다하고
            있습니다.
          </p>
          <a
            href={homeAbout.ctaHref}
            className="home-company-intro__link"
            onClick={scrollToTopSoon}
          >
            {homeAbout.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeExperienceSection() {
  const metricIcons = [Building2, ClipboardCheck, UsersRound] as const;

  return (
    <section id="experience" className="home-experience-section" aria-labelledby="home-experience-title">
      <div className="home-container home-experience">
        <div className="home-experience__head fade-in">
          <h2 id="home-experience-title">
            검증된 <span className="home-heading-accent">전문 컨설턴트</span>가<br />
            함께합니다
          </h2>
          <p>{homeExperienceCta.description}</p>
        </div>

        <div className="home-experience__body fade-in">
          <div className="home-experience__metrics" aria-label="인팩트 회사 정보">
            {homeAbout.metrics.map((metric, index) => {
              const MetricIcon = metricIcons[index];

              return (
                <div className="home-experience__metric" key={metric.label}>
                  <MetricIcon className="home-experience__metric-icon" aria-hidden="true" />
                  <CountUpValue
                    target={metric.value}
                    suffix={metric.suffix}
                    format={metric.format}
                  />
                  <span>{metric.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="home-experience__client-marquee" aria-label="주요 수행 고객사">
        <div className="home-experience__client-track">
          {[...homeExperienceClients, ...homeExperienceClients].map((client, index) => (
            <span
              className="home-experience__client"
              key={`${client}-${index}`}
              aria-hidden={index >= homeExperienceClients.length}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeContactSection() {
  return (
    <BackgroundSection
      id="contact"
      className="home-cta-banner fade-in"
      imageVar="--cta-image"
      image={homeExperienceCta.image}
    >
      <div className="home-cta-banner__content">
        <h2 aria-label="프로젝트 범위가 흐려지기 전에 기준부터 정리하세요">
          프로젝트 범위가 흐려지기 전에<br />
          기준부터 정리하세요
        </h2>

        <p>
          초기 기획, GMP 승인 준비, CSV 문서 패키지까지 현재 단계에 맞는 검토 범위를
          함께 정리합니다.
        </p>

        <div className="home-cta-banner__actions">
          <a
            href="#/contact"
            className="home-cta-banner__button"
            onClick={scrollToTopSoon}
          >
            <span className="home-cta-banner__button-label">문의하기</span>
          </a>

          <a
            href="#/references-design"
            className="home-cta-banner__button home-cta-banner__button--ghost"
            onClick={scrollToTopSoon}
          >
            <span className="home-cta-banner__button-label">수행실적 보기</span>
          </a>
        </div>
      </div>
    </BackgroundSection>
  );
}
