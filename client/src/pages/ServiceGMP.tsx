import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { servicePages } from "@/content/siteContent";

export default function ServiceGMP() {
  const content = servicePages.gmp;

  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title={content.title}
        description="운영체계, 절차, 적격성평가와 점검 대응 범위를 프로젝트 목적에 맞게 정리합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "GMP 컨설팅"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <div className="site-shell service-page">
          <article className="service-page__feature">
            <div>
              <p className="section-label">Service Overview</p>
              <h2 className="section-title">{content.overview}</h2>
            </div>
            <div className="detail-table">
              <div className="detail-table__row">
                <span>지원 범위</span>
                <div>{content.scope.join(" / ")}</div>
              </div>
              <div className="detail-table__row">
                <span>적용 대상</span>
                <div>{content.applicable.join(" / ")}</div>
              </div>
            </div>
          </article>

          <div className="service-page__secondary">
            <article className="service-page__secondary-item">
              <p className="section-label">Workflow</p>
              <ul className="stacked-list">
                {content.workflow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="service-page__secondary-item">
              <p className="section-label">Deliverables</p>
              <ul className="stacked-list">
                {content.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="service-page__cta">
            <Link href="/contact" className="site-button">
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
