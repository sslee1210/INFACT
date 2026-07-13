import type { CSSProperties, ReactNode } from "react";
import { Link } from "wouter";

type ServiceTaskPillar = {
  title: string;
  items: string[];
};

type ServiceTaskPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  focusTitle: string;
  focusDescription: ReactNode;
  pillars: ServiceTaskPillar[];
  ctaLabel: string;
  children?: ReactNode;
};

const stageMeta = [
  "프로젝트 목적과 현장 조건을 기준으로 필요한 검토 항목을 정의합니다.",
  "선행 조건과 의사결정 시점을 정리해 단계별 업무를 연결합니다.",
  "검토 결과를 후속 설계와 실행에 활용할 수 있는 자료로 정리합니다.",
];

export function ServiceTaskPage({
  eyebrow,
  title,
  description,
  focusTitle,
  focusDescription,
  pillars,
  ctaLabel,
  children,
}: ServiceTaskPageProps) {
  const scope = pillars[0];
  const workflow = pillars[1];
  const outputs = pillars[2];

  return (
    <div className="service-task-page service-task-page--standard">
      <section className="service-task-overview" aria-labelledby="service-task-title">
        <div className="site-shell service-task-overview__inner">
          <header className="service-task-overview__head">
            <p className="section-label">{eyebrow}</p>
            <h2 id="service-task-title">{title}</h2>
            <p>{description}</p>
          </header>

          <div className="service-task-cycle" aria-label="서비스 구성 단계">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="service-task-cycle__item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-task-focus" aria-labelledby="service-task-focus-title">
        <div className="site-shell service-task-focus__inner">
          <header className="service-task-focus__head service-standard-head">
            <h2 id="service-task-focus-title">{focusTitle}</h2>
            <p>{focusDescription}</p>
          </header>
        </div>
      </section>

      {scope && (
        <section className="service-standard-section service-standard-section--scope">
          <div className="site-shell">
            <header className="service-standard-section__head">
              <h2>{scope.title}</h2>
              <p>{stageMeta[0]}</p>
            </header>

            <div className="service-standard-scope-grid">
              {scope.items.map((item) => (
                <div key={item} className="service-standard-scope-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {workflow && (
        <section className="service-standard-section service-standard-section--workflow">
          <div className="site-shell">
            <header className="service-standard-section__head service-standard-section__head--center">
              <h2>{workflow.title}</h2>
              <p>{stageMeta[1]}</p>
            </header>

            <ol
              className="service-standard-workflow"
              aria-label={`${workflow.title} 단계`}
              style={{ "--workflow-count": workflow.items.length } as CSSProperties}
            >
              {workflow.items.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {outputs && (
        <section className="service-standard-section service-standard-section--outputs">
          <div className="site-shell">
            <header className="service-standard-section__head">
              <h2>{outputs.title}</h2>
              <p>{stageMeta[2]}</p>
            </header>

            <ol className="service-standard-output-flow" aria-label={`${outputs.title} 순서`}>
              {outputs.items.map((item, index) => (
                <li key={item}>
                  <strong>{item}</strong>
                  {index < outputs.items.length - 1 && <span aria-hidden="true">↓</span>}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {children}

      <section className="service-task-cta">
        <div className="site-shell service-task-cta__inner">
          <div>
            <p className="section-label">Contact</p>
            <h2>현재 단계에 맞는 검토 범위를 먼저 정리합니다.</h2>
            <p>보유한 자료와 프로젝트 목적을 기준으로 필요한 산출물과 진행 순서를 안내합니다.</p>
          </div>
          <Link href="/contact" className="site-button">
            {ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
