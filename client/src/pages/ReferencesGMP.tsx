import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { experienceSections } from "@/content/siteContent";
import "@/styles/pages/references.css";

export default function ReferencesGMP() {
  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="GMP 수행실적"
        description="프로젝트 기획, 밸리데이션, 품질시스템 구축, GMP 승인 대응까지 운영 기준 전반의 수행실적을 정리했습니다."
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
                <p className="section-label">GMP Consulting</p>
                <h2 className="section-title">{experienceSections.gmp.scale}</h2>
              </div>
              <p className="body-copy">{experienceSections.gmp.summary}</p>
            </div>

            <div className="references-block__intro">
              <p>
                GMP 프로젝트 기획에서 개념설계, 밸리데이션, 품질시스템 구축,
                GMP 승인 대응에 이르기까지 운영 기준 전반을 지원합니다.
              </p>
            </div>

            <div className="year-list">
              {experienceSections.gmp.yearly.map((item) => {
                const [year, ...rest] = item.split("  ");
                return (
                  <div key={item} className="year-list__row">
                    <strong>{year}</strong>
                    <span>{rest.join("  ")}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}