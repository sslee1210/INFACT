import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { experienceSections } from "@/content/siteContent";
import "@/styles/pages/references.css";

export default function References() {
  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="수행실적을 개념설계, GMP, CSV 기준으로 정리했습니다."
        description="프로젝트 흐름 안에서 수행한 주요 범위와 적용 사례를 영역별로 구분해 확인할 수 있습니다."
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "수행실적"]}
          items={[
            { label: "개념설계", targetId: "references-design" },
            { label: "GMP", targetId: "references-gmp" },
            { label: "CSV", targetId: "references-csv" },
          ]}
        />

        <div className="site-shell references-page">
          <article id="references-design" className="references-block company-section">
            <div className="references-block__head">
              <div>
                <p className="section-label">Conceptual Design</p>
                <h2 className="section-title">{experienceSections.design.scale}</h2>
              </div>
              <p className="body-copy">{experienceSections.design.summary}</p>
            </div>

            <div className="references-block__intro">
              <p>
                개념설계는 질의서 작성, 기초 데이터 수집, 공정 분석, 레이아웃 개발,
                최종 보고서 문서화까지 이어지는 초기 구조 설계 단계입니다.
              </p>
              <p>
                필요한 작업실 수, 장비 수, 인동선, 물동선, 폐기물 동선,
                장비반입 동선 등을 고려하여 전체 Lay-out 방향을 정리합니다.
              </p>
            </div>

            <div className="detail-table">
              {experienceSections.design.groups.map((group) => (
                <div key={group.label} className="detail-table__row">
                  <span>{group.label}</span>
                  <div>{group.value}</div>
                </div>
              ))}
            </div>
          </article>

          <article id="references-gmp" className="references-block company-section">
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

          <article id="references-csv" className="references-block company-section">
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