import { ConceptualDesignDetails } from "@/components/site/ConceptualDesignDetails";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ServiceTaskPage } from "@/components/site/ServiceTaskPage";
import { servicePages } from "@/content/siteContent";

export default function ServiceDesign() {
  const content = servicePages.design;

  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title="개념설계"
        description="GMP 시설의 초기 요구사항, 공간 구성, 동선, 유틸리티 조건을 검토해 실행 가능한 설계 방향을 정리합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "개념설계"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <ServiceTaskPage
          eyebrow="Conceptual Design"
          title="GMP 시설의 초기 기준을 설계 전에 구조화합니다."
          description={content.intro}
          focusTitle="공정 데이터와 운영 동선을 실행 가능한 GMP Layout으로 연결합니다."
          focusDescription={
            <>
              질의서와 단계별 워크숍으로 필요한 작업실과 장비, 청정구역, 동선, 유틸리티 조건을
              확인하고
              <br />
              {" "}최종 도면과 개념설계 보고서로 문서화합니다.
            </>
          }
          pillars={[
            { title: "검토 범위", items: content.scope },
            { title: "진행 흐름", items: content.workflow },
            { title: "산출물", items: content.deliverables },
          ]}
          ctaLabel="개념설계 문의하기"
        >
          <ConceptualDesignDetails />
        </ServiceTaskPage>
      </section>
    </PageLayout>
  );
}
