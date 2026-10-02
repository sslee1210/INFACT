import { Fragment } from "react";
import { PageSubNav } from "@/components/site/PageSubNav";
import {
  consultingServicePages,
  type ConsultingServiceKey,
} from "@/content/consultingServiceContent";
import { PreviewContact, PreviewIntro, PreviewLayout } from "./PreviewLayout";
import "./service.css";

const serviceNavigation = [
  { label: "개념설계", href: "/service-design" },
  { label: "GMP 컨설팅", href: "/service-gmp" },
  { label: "CSV 컨설팅", href: "/service-csv" },
];

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

export function ConsultingServicePage({
  service,
}: {
  service: ConsultingServiceKey;
}) {
  const data = consultingServicePages[service];

  return (
    <PreviewLayout>
      <div className={`dp-service dp-service--${service}`}>
        <PreviewIntro
          title={data.pageTitle}
          description={data.pageDescription}
          image={data.application.image}
          imageAlt={data.application.imageAlt}
        />

        <div className="dp-subnav">
          <PageSubNav
            breadcrumb={["홈", "사업안내", data.pageTitle]}
            items={serviceNavigation}
          />
        </div>

        <section className="dp-section dp-service-core" aria-labelledby="service-core-title">
          <div className="dp-shell">
            <header className="dp-service-heading">
              <h2 className="dp-heading" id="service-core-title">
                {data.sectionName} 핵심 가치
              </h2>
              <p className="dp-lead">{data.coreValue.description}</p>
            </header>
            <div className="dp-service-values">
              {data.coreValue.items.map(item => (
                <article key={item.title} className="dp-service-value">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dp-section dp-service-application" aria-labelledby="service-application-title">
          <div className="dp-shell">
            <header className="dp-service-heading">
              <h2 className="dp-heading" id="service-application-title">
                {data.sectionName} 적용 분야 및 대상 제조소
              </h2>
              <p className="dp-lead">{data.application.description}</p>
            </header>
            <dl className="dp-service-fields">
              {data.application.items.map(item => (
                <div key={item.label} className="dp-service-field">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="dp-section dp-service-roadmap" aria-labelledby="service-roadmap-title">
          <div className="dp-shell">
            <header className="dp-service-heading">
              <h2 className="dp-heading" id="service-roadmap-title">
                {data.sectionName} 수행 로드맵
              </h2>
              <p className="dp-lead">{data.scope.description}</p>
            </header>
            <ol className={`dp-service-flow dp-service-flow--${data.scope.items.length}`}>
              {data.scope.items.map((item, index) => (
                <li key={item.title}>
                  <span className="dp-service-flow-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="dp-service-flow-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dp-section dp-service-execution" aria-labelledby="service-execution-title">
          <div className="dp-shell">
            <header className="dp-service-heading">
              <h2 className="dp-heading" id="service-execution-title">
                {data.execution.title ?? `${data.sectionName} 단계별 대표 수행 결과자료`}
              </h2>
              <p className="dp-lead">{data.execution.description}</p>
            </header>
            <div className="dp-service-results">
              <div className="dp-service-results-head" aria-hidden="true">
                <span>단계</span>
                <span>수행 구분</span>
                <span>대표 결과자료</span>
              </div>
              <ol className="dp-service-results-list">
                {data.execution.steps.map((step, index) => (
                  <li key={step.title} className="dp-service-result">
                    <span className="dp-service-result-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="dp-service-result-copy">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="dp-service-result-output">
                      <strong>{step.outputTitle}</strong>
                      <p>{step.outputDetail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="dp-section dp-service-difference" aria-labelledby="service-difference-title">
          <div className="dp-shell">
            <header className="dp-service-heading">
              <h2 className="dp-heading" id="service-difference-title">
                IN-FACT {data.sectionName} 차별화 포인트
              </h2>
              <p className="dp-lead">{data.differentiators.description}</p>
            </header>
            <div className="dp-service-differences">
              {data.differentiators.items.map(item => (
                <article key={item.title} className="dp-service-difference-row">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PreviewContact
          label="프로젝트 문의하기"
          title={<TextLines lines={data.contact.titleLines} />}
          description={<TextLines lines={data.contact.descriptionLines} />}
        />
      </div>
    </PreviewLayout>
  );
}
