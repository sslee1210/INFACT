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
import "@/styles/pages/service-gmp.css";
import "@/styles/pages/service-gmp-page.css";

export default function ServiceGMP() {
  const content = servicePages.gmp;

  const frameworkRows = content.workflow.map((stage, index) => ({
    number: String(index + 1).padStart(2, "0"),
    stage,
    scope: content.scope[index] ?? content.scope[content.scope.length - 1],
    applicable: content.applicable[index] ?? "",
    deliverable: content.deliverables[index] ?? "",
  }));

  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title={content.title}
        description="운영체계, 절차, 적격성평가와 점검 대응 범위를 프로젝트 목적에 맞게 정리합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white service-business-page service-gmp-page">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "GMP 컨설팅"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <ServiceOverview
          eyebrow="01 · GMP Consulting"
          title="운영 기준부터 적격성평가와 점검 대응까지 하나의 수행 구조로 연결합니다."
          description={content.intro}
          pillars={[
            { number: "01", title: "운영 기준" },
            { number: "02", title: "수행 구조" },
            { number: "03", title: "결과자료" },
          ]}
        />

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="02"
              label="Overview"
              title="프로젝트 상황에 맞는 GMP 수행 범위를 정리합니다."
              description="운영체계, 규정·절차, Qualification과 Inspection 대응 범위를 분리하지 않고 프로젝트 목적과 일정에 맞게 연결합니다."
            />

            <div className="service-business-table">
              <div className="service-business-table__row">
                <strong>서비스 목적</strong>
                <p>{content.overview}</p>
              </div>
              <div className="service-business-table__row">
                <strong>적용 환경</strong>
                <p>{content.applicable.join(" · ")}</p>
              </div>
              <div className="service-business-table__row">
                <strong>주요 수행 범위</strong>
                <p>{content.scope.join(" · ")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="03"
              label="GMP Consulting Framework"
              title="범위 정의부터 문서화와 대응까지 단계별로 연결합니다."
              description="프로젝트의 운영 목적과 현재 상태를 기준으로 필요한 검토 범위, 적용 환경과 결과자료를 같은 구조에서 확인합니다."
            />

            <div className="gmp-framework">
              <div className="gmp-framework__head" aria-hidden="true">
                <span>단계</span>
                <span>주요 수행내용</span>
                <span>적용·검토 관점</span>
                <span>대표 결과자료</span>
              </div>

              {frameworkRows.map((row) => (
                <article key={row.number} className="gmp-framework__row">
                  <div className="gmp-framework__stage">
                    <span>{row.number}</span>
                    <strong>{row.stage}</strong>
                  </div>
                  <div className="gmp-framework__scope">
                    <span className="gmp-framework__bullet" aria-hidden="true" />
                    <p>{row.scope}</p>
                  </div>
                  <p className="gmp-framework__applicable">
                    {row.applicable || "프로젝트 범위와 현재 운영 상태에 따라 검토"}
                  </p>
                  <strong className="gmp-framework__deliverable">{row.deliverable}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="04"
              label="Service Scope"
              title="주요 지원 범위"
              description="프로젝트 계획, 품질시스템, 적격성평가와 점검 대응 범위를 현재 운영체계와 일정에 맞게 조정합니다."
            />

            <div className="gmp-scope-matrix">
              {content.scope.map((item, index) => (
                <div key={item} className="gmp-scope-matrix__row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="05"
              label="Deliverables"
              title="주요 수행 결과자료"
              description="검토 결과는 프로젝트 의사결정, 운영체계 정비와 점검 대응에 활용할 수 있는 문서와 자료로 정리합니다."
            />

            <div className="gmp-deliverables-matrix">
              <div className="gmp-deliverables-matrix__head" aria-hidden="true">
                <span>단계</span>
                <span>수행 흐름</span>
                <span>대표 결과자료</span>
              </div>
              {content.workflow.map((stage, index) => (
                <div key={stage} className="gmp-deliverables-matrix__row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage}</strong>
                  <p>{content.deliverables[index] ?? "프로젝트 검토 및 결과자료"}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceContact
          buttonLabel="프로젝트 문의하기"
          title={
            <>
              운영 기준이 복잡해지기 전에
              <br />
              GMP 수행 범위를 먼저 정리합니다.
            </>
          }
          description={
            <>
              현재 운영체계와 프로젝트 목적을 기준으로
              <br />
              필요한 검토 범위, 문서화 수준과 대응 순서를 함께 정리합니다.
            </>
          }
        />
      </section>
    </PageLayout>
  );
}
