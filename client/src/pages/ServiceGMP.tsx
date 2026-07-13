import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ServiceTaskPage } from "@/components/site/ServiceTaskPage";
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

        <ServiceTaskPage
          eyebrow="GMP Consulting"
          title="운영 기준과 검증 범위를 프로젝트 구조로 정리합니다."
          description={content.intro}
          focusTitle="문서체계, 운영 기준, 적격성평가를 같은 기준선 위에서 검토합니다."
          focusDescription={content.overview}
          pillars={[
            { title: "지원 범위", items: content.scope },
            { title: "진행 흐름", items: content.workflow },
            { title: "산출물", items: content.deliverables },
          ]}
          ctaLabel="GMP 컨설팅 문의하기"
        />
      </section>
    </PageLayout>
  );
}
