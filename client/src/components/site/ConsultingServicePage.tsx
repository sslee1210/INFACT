import { Fragment } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import {
  ServiceContact,
  ServiceSectionHeader,
} from "@/components/site/ServiceBusinessLayout";
import {
  consultingServicePages,
  type ConsultingServiceData,
  type ConsultingServiceKey,
} from "@/content/consultingServiceContent";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import "@/styles/pages/service-business-layout.css";
import "@/styles/pages/service-consulting-template.css";

const serviceNavigation = [
  { label: "개념설계", href: "/service-design" },
  { label: "GMP 컨설팅", href: "/service-gmp" },
  { label: "CSV 컨설팅", href: "/service-csv" },
] as const;

type ConsultingServicePageProps = {
  service: ConsultingServiceKey;
};

function TextLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={`${index}-${line}`}>
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </Fragment>
      ))}
    </>
  );
}

function ConsultingServiceSections({
  data,
}: {
  data: ConsultingServiceData;
}) {
  useRevealOnScroll(".consulting-template__reveal");

  return (
    <>
      <section className="consulting-template__section consulting-template__section--core">
        <div className="site-shell">
          <ServiceSectionHeader
            index="01"
            label="Core Value"
            title={`${data.sectionName} 핵심 가치`}
            description={
              <TextLines lines={data.coreValue.description.split("\n")} />
            }
          />

          <div className="consulting-template__value-grid">
            {data.coreValue.items.map((item) => (
              <article
                key={item.title}
                className="consulting-template__value consulting-template__reveal"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--application">
        <div className="site-shell">
          <ServiceSectionHeader
            index="02"
            label="Applicable Fields"
            title={`${data.sectionName} 적용 분야 및 대상 제조소`}
            description={
              <TextLines lines={data.application.description.split("\n")} />
            }
          />

          <div className="consulting-template__application">
            <div className="consulting-template__application-list">
              {data.application.items.map((item) => (
                <article
                  key={item.label}
                  className="consulting-template__application-row consulting-template__reveal"
                >
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>

            <figure className="consulting-template__application-image consulting-template__reveal">
              <img src={data.application.image} alt={data.application.imageAlt} />
            </figure>
          </div>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--scope">
        <div className="site-shell">
          <ServiceSectionHeader
            index="03"
            label="Service Roadmap"
            title={`${data.sectionName} 수행 로드맵`}
            description={<TextLines lines={data.scope.description.split("\n")} />}
          />

          <div className="consulting-template__scope-grid">
            {data.scope.items.map((item, index) => (
              <article
                key={item.title}
                className="consulting-template__scope-item consulting-template__reveal"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--execution">
        <div className="site-shell">
          <ServiceSectionHeader
            index="04"
            label={data.execution.label ?? "Deliverables"}
            title={
              data.execution.title ??
              `${data.sectionName} 단계별 대표 수행 결과자료`
            }
            description={
              <TextLines lines={data.execution.description.split("\n")} />
            }
          />

          <div className="consulting-template__execution">
            <div
              className="consulting-template__execution-head"
              aria-hidden="true"
            >
              <span>단계</span>
              <span>수행 구분</span>
              <span>대표 결과자료</span>
            </div>

            <ol className="consulting-template__execution-rows">
              {data.execution.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="consulting-template__execution-row consulting-template__reveal"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="consulting-template__execution-copy">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className="consulting-template__execution-output">
                    <strong>{step.outputTitle}</strong>
                    <p>{step.outputDetail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--difference">
        <div className="site-shell">
          <ServiceSectionHeader
            index="05"
            label="IN-FACT Difference"
            title={`IN-FACT ${data.sectionName} 차별화 포인트`}
            description={
              <TextLines lines={data.differentiators.description.split("\n")} />
            }
          />

          <div className="consulting-template__difference-grid">
            {data.differentiators.items.map((item) => (
              <article
                key={item.title}
                className="consulting-template__difference-item consulting-template__reveal"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ConsultingServicePage({
  service,
}: ConsultingServicePageProps) {
  const data = consultingServicePages[service];

  return (
    <PageLayout>
      <PageIntro
        className="page-intro--service"
        label="Service"
        title={data.pageTitle}
        description={data.pageDescription}
        image={data.pageImage}
      />

      <section
        className={[
          "section",
          "section--white",
          "service-business-page",
          "consulting-service-page",
          `consulting-service-page--${data.key}`,
        ].join(" ")}
      >
        <PageSubNav
          breadcrumb={["홈", "사업안내", data.pageTitle]}
          items={[...serviceNavigation]}
        />

        <ConsultingServiceSections data={data} />

        <ServiceContact
          buttonLabel="프로젝트 문의하기"
          title={<TextLines lines={data.contact.titleLines} />}
          description={<TextLines lines={data.contact.descriptionLines} />}
        />
      </section>
    </PageLayout>
  );
}
