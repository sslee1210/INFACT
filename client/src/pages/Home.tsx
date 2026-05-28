import { useEffect, useRef, type CSSProperties } from "react";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { scrollToTopSoon } from "@/lib/scroll";
import "@/styles/pages/home.css";

const HERO_BG = "./images/home/hero.jpg";
const EXPERIENCE_BG = "./images/home/service-03.jpg";

const EXPERIENCE_CLIENTS = [
  "DONG-A ST",
  "GC Biopharma",
  "Huons",
  "Prestige Biologics",
  "LG Chem",
  "Samchundang Pharm",
  "ST Pharm",
  "CJ CheilJedang",
  "Korea Vaccine",
  "DMBIO",
];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

type CountUpProps = {
  target: number;
  suffix?: string;
  format?: boolean;
};

function CountUpValue({ target, suffix = "", format = false }: CountUpProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frameId = 0;
    let started = false;

    const animate = () => {
      const duration = 1800;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.round(target * eased);
        const text = format ? nextValue.toLocaleString("en-US") : String(nextValue);
        element.textContent = `${text}${suffix}`;

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        animate();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [format, suffix, target]);

  return <strong ref={ref}>{format ? "0" : 0}{suffix}</strong>;
}

export default function Home() {
  useScrollAnimation();

  return (
    <div className="home-shell">
      <SiteHeader transparentOnTop />

      <main className="home-main">
        <section
          className="hero hero--strong home-focus-section"
          style={
            {
              "--hero-image": `url('${HERO_BG}')`,
            } as CSSProperties
          }
        >
          <div className="home-container hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title">제약·바이오 전문 컨설팅 파트너</h1>

              <p className="hero__subtitle">
                제약·바이오 현장의 요구사항과 규제 기준을 바탕으로 개념설계, GMP,
                CSV 컨설팅을 제공합니다.
              </p>
            </div>
          </div>

          <a href="#about" className="hero__scroll-cue" aria-label="About 섹션으로 이동">
            <span className="hero__scroll-label">SCROLL</span>
            <span className="hero__scroll-line" aria-hidden="true" />
          </a>
        </section>

        <section id="about" className="about-blend-section section--with-divider">
          <div className="home-container about-blend-inner">
            <div className="about-blend-content fade-in">
              <div className="about-blend-copy">
                <div className="about-blend-texts">
                  <h2 className="about-blend-title">
                    프로젝트 전 과정을
                    <br />
                    실무 기준으로 정리합니다
                  </h2>

                  <p className="about-blend-desc">
                    제약·바이오 산업의 프로젝트를 단순 문서 작업으로 보지 않고,
                    실제 운영 환경과 규제 요구사항을 함께 고려하는 실무 중심의
                    프로젝트로 접근합니다.
                  </p>

                  <a
                    href="#/company"
                    className="about-blend-button"
                    onClick={scrollToTopSoon}
                  >
                    <span>회사 소개 보기</span>
                  </a>

                  <div className="about-blend-metrics" aria-label="인팩트 회사 정보">
                    <div className="about-blend-metric">
                      <CountUpValue target={2016} />
                      <span>회사 설립</span>
                    </div>
                    <div className="about-blend-metric">
                      <CountUpValue target={1000} suffix="+" format />
                      <span>누적 프로젝트 수행</span>
                    </div>
                    <div className="about-blend-metric">
                      <CountUpValue target={31} />
                      <span>전문인력</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-logo-band" aria-label="주요 수행 고객사">
          <div className="client-logo-band__track fade-in">
            {EXPERIENCE_CLIENTS.map((client) => (
              <div className="client-logo-band__item" key={client}>
                <span>{client}</span>
              </div>
            ))}
            {EXPERIENCE_CLIENTS.map((client) => (
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

        <ServiceShowcase />

        <section
          id="experience"
          className="home-cta-banner fade-in"
          style={
            {
              "--cta-image": `url('${EXPERIENCE_BG}')`,
            } as CSSProperties
          }
        >
          <div className="home-cta-banner__content">
            <h2>
              다양한 수행실적과
              <br />
              현장 중심의 경험
            </h2>

            <p>
              개념설계, GMP, CSV 범위를 프로젝트 단계에 맞춰 검토하고 실제 수행
              가능한 기준으로 연결합니다.
            </p>

            <div className="home-cta-banner__actions">
              <a
                href="#/references"
                className="home-cta-banner__button"
                onClick={scrollToTopSoon}
              >
                <span className="home-cta-banner__button-label">수행실적 보기</span>
              </a>

              <a
                href="#/contact"
                className="home-cta-banner__button home-cta-banner__button--ghost"
                onClick={scrollToTopSoon}
              >
                <span className="home-cta-banner__button-label">문의하기</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
