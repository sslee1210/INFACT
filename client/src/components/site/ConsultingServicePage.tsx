import { Fragment, type CSSProperties } from "react";
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
            label="Service Scope"
            title={`${data.sectionName} 주요 지원 범위`}
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

      <section className="consulting-template__section consulting-template__section--structure">
        <div className="site-shell">
          <ServiceSectionHeader
            index="04"
            label="Integrated Structure"
            title={`${data.sectionName} 프로젝트 원스톱 수행 Structure`}
            description={
              <TextLines lines={data.structure.description.split("\n")} />
            }
          />

          <div className="consulting-template__structure">
            <ol className="consulting-template__structure-phases">
              {data.structure.phases.map((phase) => (
                <li
                  key={phase.title}
                  className="consulting-template__reveal"
                >
                  <div className="consulting-template__structure-phase-copy">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--deliverables">
        <div className="site-shell">
          <ServiceSectionHeader
            index="05"
            label="Deliverables"
            title={`${data.sectionName} 단계별 대표 수행 결과자료`}
            description={
              <TextLines lines={data.deliverables.description.split("\n")} />
            }
          />

          <div className="consulting-template__deliverables">
            <div
              className="consulting-template__deliverables-head"
              aria-hidden="true"
            >
              <span>단계</span>
              <span>수행 구분</span>
              <span>대표 결과자료</span>
            </div>

            {data.deliverables.rows.map((row) => (
              <article
                key={`${row.phase}-${row.focus}`}
                className="consulting-template__deliverables-row consulting-template__reveal"
              >
                <span>{row.phase}</span>
                <strong>{row.focus}</strong>
                {row.outputTitle ? (
                  <div className="consulting-template__deliverable-output">
                    <strong>{row.outputTitle}</strong>
                    <span>{row.outputDetail}</span>
                  </div>
                ) : (
                  <p>{row.outputs}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--roadmap">
        <div className="site-shell">
          <ServiceSectionHeader
            index="06"
            label="Roadmap"
            title={`${data.sectionName} 수행 로드맵`}
            description={
              <TextLines lines={data.roadmap.description.split("\n")} />
            }
          />

          <ol
            className="consulting-template__roadmap"
            style={
              {
                "--consulting-roadmap-count": data.roadmap.steps.length,
              } as CSSProperties
            }
          >
            {data.roadmap.steps.map((step, index) => (
              <li
                key={step.title}
                className="consulting-template__reveal"
              >
                <span>Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="consulting-template__section consulting-template__section--difference">
        <div className="site-shell">
          <ServiceSectionHeader
            index="07"
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
