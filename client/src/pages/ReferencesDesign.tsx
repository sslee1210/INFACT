import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { experienceSections } from "@/content/siteContent";
import "@/styles/pages/references.css";

export default function ReferencesDesign() {
  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="개념설계 수행실적"
        description="질의서 작성, 기초 데이터 수집, 공정 분석, 레이아웃 개발, 최종 보고서 문서화까지 이어지는 개념설계 수행 범위를 정리했습니다."
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
                <p className="section-label">Conceptual Design</p>
                <h2 className="section-title">
                  {experienceSections.design.scale}
                </h2>
              </div>
              <p className="body-copy">{experienceSections.design.summary}</p>
            </div>

            <div className="references-block__intro">
              <p>
                개념설계는 질의서 작성, 기초 데이터 수집, 공정 분석, 레이아웃
                개발, 최종 보고서 문서화까지 이어지는 초기 구조 설계 단계입니다.
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
        </div>
      </section>
    </PageLayout>
  );
}