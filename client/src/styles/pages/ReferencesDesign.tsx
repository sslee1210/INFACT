import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ReferenceYearTabs } from "@/components/site/ReferenceYearTabs";
import { conceptualDesignReferenceYears } from "@/content/references/conceptualDesignReferences";
import "@/styles/pages/references-csv-year-tabs.css";
import "@/styles/pages/references-design-gmp-empty.css";

export default function ReferencesDesign() {
  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="개념설계 수행실적"
        description="제약·바이오 제조시설의 공정 분석, GMP Layout, 구역·동선·유틸리티 계획과 개념설계 보고서 작성 실적입니다."
      />

      <section className="section section--white csv-year-page">
        <PageSubNav
          breadcrumb={["홈", "수행실적", "개념설계"]}
          items={[
            { label: "개념설계", href: "/references-design" },
            { label: "GMP", href: "/references-gmp" },
            { label: "CSV", href: "/references-csv" },
          ]}
        />

        <div className="site-shell csv-year-page__intro">
          <p className="section-label">Conceptual Design References</p>
          <h2 className="section-title">연도별 수행 프로젝트</h2>
          <p className="body-copy">
            오른쪽 연도 메뉴를 선택하면 해당 연도에 수행한 고객사와 프로젝트만 표시됩니다.
          </p>
        </div>

        <ReferenceYearTabs
          years={conceptualDesignReferenceYears}
          emptyMessage="해당 연도의 개념설계 수행실적을 준비하고 있습니다."
        />
      </section>
    </PageLayout>
  );
}
