import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { serviceHighlights, serviceOverview } from "@/content/siteContent";

export default function Services() {
  return (
    <PageLayout>
      <PageIntro
        label="Services"
        title="프로젝트에 맞는 컨설팅 범위를 제안합니다."
        description="개념설계, GMP, CSV를 프로젝트 흐름에 맞춰 연결하고 필요한 수행 범위를 정리합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <div className="site-shell service-page">
          <div className="section-head">
            <div>
              <p className="section-label">Overview</p>
              <h2 className="section-title">프로젝트 목적과 규제 환경에 맞는 지원 구조를 먼저 정리합니다.</h2>
            </div>
            <p className="section-note">{serviceOverview.intro}</p>
          </div>

          <div className="service-menu-grid" aria-label="사업안내 하위 메뉴">
            <Link href="/service-design" className="service-menu-card">
              <span className="service-menu-card__index">01</span>
              <p className="section-label">Conceptual Design</p>
              <h3>개념설계</h3>
              <p>{serviceHighlights.design.purpose}</p>
              <ul>
                {serviceHighlights.design.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="service-menu-card__cta">상세 보기</span>
            </Link>

            <Link href="/service-gmp" className="service-menu-card">
              <span className="service-menu-card__index">02</span>
              <p className="section-label">GMP Consulting</p>
              <h3>GMP 컨설팅</h3>
              <p>{serviceHighlights.gmp.purpose}</p>
              <ul>
                {serviceHighlights.gmp.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="service-menu-card__cta">상세 보기</span>
            </Link>

            <Link href="/service-csv" className="service-menu-card">
              <span className="service-menu-card__index">03</span>
              <p className="section-label">CSV Consulting</p>
              <h3>CSV 컨설팅</h3>
              <p>{serviceHighlights.csv.purpose}</p>
              <ul>
                {serviceHighlights.csv.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="service-menu-card__cta">상세 보기</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
