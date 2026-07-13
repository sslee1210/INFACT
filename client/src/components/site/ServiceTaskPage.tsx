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
  {
    note: "프로젝트 목적과 현장 조건을 기준으로 필요한 검토 항목을 정의합니다.",
  },
  {
    note: "선행 조건과 의사결정 시점을 정리해 단계별 업무를 연결합니다.",
  },
  {
    note: "검토 결과를 실행 가능한 문서와 기록으로 정리합니다.",
  },
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
  return (
    <div className="service-task-page">
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
          <div className="service-task-focus__head">
            <p className="section-label">Service Structure</p>
            <h2 id="service-task-focus-title">{focusTitle}</h2>
            <p>{focusDescription}</p>
          </div>
        </div>
      </section>

      <div className="service-task-details">
        {pillars.map((pillar, index) => {
          const meta = stageMeta[index];

          if (index === 1) {
            return (
              <section key={pillar.title} className="service-task-detail service-task-detail--flow">
                <div className="site-shell service-task-detail__flow-inner">
                  <header className="service-task-detail__head service-task-detail__head--center">
                    <div className="service-task-detail__title">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h2>{pillar.title}</h2>
                    </div>
                    <p>{meta?.note}</p>
                  </header>

                  <ol
                    className="service-task-flow"
                    aria-label={`${pillar.title} 단계`}
                    style={{ "--service-flow-count": pillar.items.length } as CSSProperties}
                  >
                    {pillar.items.map((item, itemIndex) => (
                      <li key={item}>
                        <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                        <strong>{item}</strong>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            );
          }

          return (
            <section
              key={pillar.title}
              className={`service-task-detail service-task-detail--${index === 0 ? "scope" : "outputs"}`}
            >
              <div className="site-shell service-task-detail__inner">
                <header className="service-task-detail__head">
                  <div className="service-task-detail__title">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h2>{pillar.title}</h2>
                  </div>
                  <p>{meta?.note}</p>
                </header>

                <div className="service-task-table" role="table" aria-label={`${pillar.title} 항목`}>
                  <div className="service-task-table__head" role="row">
                    <span role="columnheader">{index === 0 ? "Scope" : "Output"}</span>
                    <strong role="columnheader">
                      {index === 0 ? "검토 및 수행 항목" : "주요 산출물"}
                    </strong>
                  </div>
                  {pillar.items.map((item, itemIndex) => (
                    <div key={item} className="service-task-table__row" role="row">
                      <span role="cell">{String(itemIndex + 1).padStart(2, "0")}</span>
                      <strong role="cell">{item}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

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
