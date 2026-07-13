import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ServiceTaskPage } from "@/components/site/ServiceTaskPage";
import { servicePages } from "@/content/siteContent";

export default function ServiceCSV() {
  const content = servicePages.csv;

  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title={content.title}
        description="전산 시스템의 운영 목적과 규제 요구사항을 연결해 검증 범위와 문서 체계를 수립합니다."
        image="./images/sub/business.jpg"
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

        <ServiceTaskPage
          eyebrow="CSV Consulting"
          title="시스템 요구사항부터 시험 증적까지 추적성을 연결합니다."
          description={content.intro}
          focusTitle="운영 목적, 데이터 무결성, 검증 문서를 하나의 CSV 흐름으로 정리합니다."
          focusDescription={content.overview}
          pillars={[
            { title: "대상 시스템", items: content.scope },
            { title: "진행 흐름", items: content.workflow },
            { title: "산출물", items: content.deliverables },
          ]}
          ctaLabel="CSV 컨설팅 문의하기"
        />
      </section>
    </PageLayout>
  );
}
