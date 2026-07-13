import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ReferenceYearTabs } from "@/components/site/ReferenceYearTabs";
import { gmpReferenceYears } from "@/content/references/gmpReferences";
import "@/styles/pages/references-csv-year-tabs.css";
import "@/styles/pages/references-design-gmp-empty.css";

export default function ReferencesGMP() {
  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="GMP 수행실적"
        description="제약·바이오 프로젝트의 GMP 컨설팅, 품질시스템 구축, 밸리데이션 및 규제기관 대응 실적입니다."
      />

      <section className="section section--white csv-year-page">
        <PageSubNav
          breadcrumb={["홈", "수행실적", "GMP"]}
          items={[
            { label: "개념설계", href: "/references-design" },
            { label: "GMP", href: "/references-gmp" },
            { label: "CSV", href: "/references-csv" },
          ]}
        />

        <div className="site-shell csv-year-page__intro">
          <p className="section-label">GMP References</p>
          <h2 className="section-title">연도별 수행 프로젝트</h2>
        </div>

        <ReferenceYearTabs
          years={gmpReferenceYears}
          emptyMessage="해당 연도의 GMP 수행실적을 준비하고 있습니다."
        />
      </section>
    </PageLayout>
  );
}
