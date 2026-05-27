import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { servicePages } from "@/content/siteContent";

export default function ServiceCSV() {
  const content = servicePages.csv;

  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title={content.title}
        description="전산 시스템의 운영 목적과 규제 요구사항을 연결해 검증 범위와 문서 체계를 수립합니다."
        image="/images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "CSV 컨설팅"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <div className="site-shell service-page">
          <article className="service-page__feature">
            <div>
              <p className="section-label">Validation Scope</p>
              <h2 className="section-title">{content.overview}</h2>
              <p className="body-copy">
                시스템 기능, 권한 구조, Audit Trail, 전자서명, 백업 및 복구 체계를 함께 검토해 검증 범위를 정의합니다.
              </p>
            </div>
            <div className="detail-table">
              <div className="detail-table__row">
                <span>대상 시스템</span>
                <div>{content.applicable.join(" / ")}</div>
              </div>
              <div className="detail-table__row">
                <span>문서 패키지</span>
                <div>{content.deliverables.join(" / ")}</div>
              </div>
            </div>
          </article>

          <article className="csv-matrix">
            <div className="detail-table__row">
              <span>시스템군</span>
              <div>ERP / MES / WMS / LIMS / QMS / EDMS / SCADA / PLC / BMS</div>
            </div>
            <div className="detail-table__row">
              <span>검증 항목</span>
              <div>Risk Assessment / Requirement Review / IQ / OQ / PQ / VSR</div>
            </div>
            <div className="detail-table__row">
              <span>데이터 무결성</span>
              <div>Audit Trail / Electronic Signature / Access Control / Backup & Restore</div>
            </div>
            <div className="detail-table__row">
              <span>수행 방식</span>
              <div>{content.workflow.join(" / ")}</div>
            </div>
          </article>

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
