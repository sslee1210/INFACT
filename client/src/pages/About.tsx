import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import AboutProcessDiagram from "@/components/site/AboutProcessDiagram";
import { scrollToTopSoon } from "@/lib/scroll";
import "@/styles/pages/about.css";

export default function About() {
  return (
    <PageLayout>
      <PageIntro
        label="About"
        title="인팩트의 회사 소개와 수행실적을 한눈에 확인할 수 있도록 구성했습니다."
        description="회사 소개와 수행실적은 서로 다른 두 섹션으로 구분했습니다. 각 섹션에서 필요한 페이지로 바로 이동할 수 있습니다."
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "About"]}
          items={[
            { label: "회사 소개", targetId: "about-company" },
            { label: "수행실적", targetId: "about-references" },
          ]}
        />

        <div className="site-shell about-page">
          <article
            id="about-company"
            className="about-entry about-entry--reverse company-section"
          >
            <div className="about-entry__content">
              <p className="about-entry__eyebrow">ABOUT IN-FACT</p>

              <h2 className="about-entry__title">
                제약·바이오 프로젝트를
                <br />
                실무 기준으로 연결하는 컨설팅.
              </h2>

              <div className="about-entry__copy">
                <p>
                  인팩트는 제약·바이오 산업의 프로젝트를 단순한 문서 작업이
                  아니라, 실제 운영과 규제 환경을 함께 고려해 구조화하는 일로
                  봅니다.
                </p>

                <p>
                  GMP Consulting, Conceptual Design, CSV Consulting을 각각
                  분리해서 보지 않고, 하나의 프로젝트 흐름 안에서 유기적으로
                  연결해 지원합니다.
                </p>

                <p>
                  현장에서 바로 적용 가능한 기준, 실무자가 이해할 수 있는 설명,
                  그리고 프로젝트 전체의 방향을 흔들림 없이 정리하는 것이
                  인팩트의 역할입니다.
                </p>
              </div>

              <div className="about-entry__actions">
                <a
                  href="#/company"
                  className="about-entry__button"
                  onClick={scrollToTopSoon}
                >
                  <span>회사 소개 보기</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="about-section__media about-section__media--diagram">
              <AboutProcessDiagram />
            </div>
          </article>

          <article
            id="about-references"
            className="about-entry company-section"
          >
            <div className="about-entry__media">
              <div className="about-entry__image">
                <img
                  src="/images/home/about-02.jpg"
                  alt="인팩트 수행실적 이미지"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="about-entry__content">
              <p className="about-entry__eyebrow">OUR EXPERIENCE</p>

              <h2 className="about-entry__title">
                다양한 수행 경험을 바탕으로
                <br />
                단계별 프로젝트 방향을 제안합니다.
              </h2>

              <div className="about-entry__copy">
                <p>
                  인팩트는 제약·바이오 제조시설 개념설계, GMP 운영체계 구축,
                  CSV 수행까지 이어지는 다양한 프로젝트를 실제 현장에서
                  수행해왔습니다.
                </p>

                <p>
                  설계, 운영, 품질, 시스템을 각각 따로 보지 않고 하나의 흐름으로
                  이해하기 때문에 현재 단계에서 어떤 범위를 우선적으로 검토해야
                  하는지 더 명확하게 제안할 수 있습니다.
                </p>

                <p>
                  수행실적 페이지에서는 개념설계, GMP Consulting, CSV
                  Consulting 영역별 프로젝트 경험과 적용 범위를 구체적으로
                  확인할 수 있습니다.
                </p>
              </div>

              <div className="about-entry__actions">
                <a
                  href="#/references"
                  className="about-entry__button"
                  onClick={scrollToTopSoon}
                >
                  <span>수행실적 보기</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
