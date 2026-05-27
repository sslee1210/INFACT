import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { experienceSections } from "@/content/siteContent";
import "@/styles/pages/references.css";

export default function ReferencesCSV() {
  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="CSV 수행실적"
        description="ERP, MES, LIMS, QMS, WMS, SCADA, EDMS 등 다양한 시스템과 생산·지원설비의 CSV 수행실적을 정리했습니다."
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "수행실적"]}
          items={[
            { label: "개념설계", href: "/references-design" },
            { label: "GMP", href: "/references-gmp" },
            { label: "CSV", href: "/references-csv" },
          ]}
        />

        <div className="site-shell references-page">
          <article className="references-block company-section">
            <div className="references-block__head">
              <div>
                <p className="section-label">CSV Consulting</p>
                <h2 className="section-title">{experienceSections.csv.scale}</h2>
              </div>
              <p className="body-copy">{experienceSections.csv.summary}</p>
            </div>

            <div className="references-block__intro">
              <p>
                ERP, MES, LIMS, QMS, WMS, SCADA, EDMS 등 다양한 시스템과
                생산·지원설비를 대상으로 규제 요구사항과 실제 운영성을 함께
                고려한 CSV를 수행합니다.
              </p>
            </div>

            <div className="references-block__subgrid">
              <div className="detail-table">
                {experienceSections.csv.groups.map((group) => (
                  <div key={group.label} className="detail-table__row">
                    <span>{group.label}</span>
                    <div>{group.value}</div>
                  </div>
                ))}
              </div>

              <div className="year-list">
                {experienceSections.csv.yearly.map((item) => {
                  const [year, ...rest] = item.split("  ");
                  return (
                    <div key={item} className="year-list__row">
                      <strong>{year}</strong>
                      <span>{rest.join("  ")}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}