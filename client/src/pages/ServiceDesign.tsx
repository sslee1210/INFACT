import { ConceptualDesignDetails } from "@/components/site/ConceptualDesignDetails";
import {
  ServiceContact,
  ServiceOverview,
  ServiceSectionHeader,
} from "@/components/site/ServiceBusinessLayout";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { servicePages } from "@/content/siteContent";
import "@/styles/pages/service-business-layout.css";
import "@/styles/pages/service-design-page.css";

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

      <section className="section section--white service-business-page service-design-page">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "개념설계"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <ServiceOverview
          eyebrow="01 · Conceptual Design"
          title="시설 요구사항부터 GMP Layout까지 설계 기준을 연결합니다."
          description={content.intro}
          pillars={[
            { number: "01", title: "기초자료" },
            { number: "02", title: "설계 검토" },
            { number: "03", title: "결과자료" },
          ]}
        />

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="02"
              label="Overview"
              title="초기 조건을 상세설계의 기준으로 구조화합니다."
              description="제품, 공정, 생산량과 운영조건을 공간·구역·동선·유틸리티 요구사항으로 연결해 프로젝트 초기 의사결정 기준을 정리합니다."
            />

            <div className="service-business-table">
              <div className="service-business-table__row">
                <strong>서비스 목적</strong>
                <p>{content.overview}</p>
              </div>
              <div className="service-business-table__row">
                <strong>적용 프로젝트</strong>
                <p>{content.applicable.join(" · ")}</p>
              </div>
              <div className="service-business-table__row">
                <strong>주요 수행 범위</strong>
                <p>{content.scope.join(" · ")}</p>
              </div>
            </div>
          </div>
        </section>

        <ConceptualDesignDetails />

        <ServiceContact
          buttonLabel="프로젝트 문의하기"
          title={
            <>
              설계가 구체화되기 전에
              <br />
              초기 기준을 먼저 정리합니다.
            </>
          }
          description={
            <>
              제품, 공정, 생산량과 운영조건을 기준으로
              <br />
              필요한 개념설계 범위와 검토자료, 수행 순서를 함께 정리합니다.
            </>
          }
        />
      </section>
    </PageLayout>
  );
}
