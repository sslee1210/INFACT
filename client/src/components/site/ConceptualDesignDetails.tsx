import { conceptualDesignDetails } from "@/content/siteContent";

export function ConceptualDesignDetails() {
  const { visuals, processTable, report, analysis, principles } = conceptualDesignDetails;

  return (
    <div className="conceptual-details">
      <section className="conceptual-visuals" aria-labelledby="conceptual-visuals-title">
        <div className="site-shell">
          <header className="conceptual-visuals__head">
            <p className="section-label">{visuals.label}</p>
            <h2 id="conceptual-visuals-title">{visuals.title}</h2>
            <p>{visuals.description}</p>
          </header>

          <div className="conceptual-visuals__figures">
            <figure>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="./images/service/conceptual-process-map-mobile.svg"
                />
                <img
                  src="./images/service/conceptual-process-map.svg"
                  alt="사전자료 수집부터 최종 도면과 보고서 작성까지의 개념설계 5단계 수행 프로세스"
                  width={1600}
                  height={720}
                  loading="lazy"
                />
              </picture>
              <figcaption>질의서와 워크숍을 중심으로 구성한 개념설계 수행 프로세스</figcaption>
            </figure>

            <figure>
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="./images/service/conceptual-review-matrix-mobile.svg"
                />
                <img
                  src="./images/service/conceptual-review-matrix.svg"
                  alt="공간 계획, GMP 구획, 동선, 장비와 유틸리티, 보관 조건별 개념설계 검토영역 매트릭스"
                  width={1600}
                  height={860}
                  loading="lazy"
                />
              </picture>
              <figcaption>주요 검토영역과 확인 항목, 결과 자료를 연결한 검토 매트릭스</figcaption>
            </figure>
          </div>

          <div className="conceptual-stage-table-block">
            <header className="conceptual-stage-table-block__head">
              <p className="section-label">{processTable.label}</p>
              <h3>{processTable.title}</h3>
              <p>{processTable.description}</p>
            </header>

            <div className="conceptual-stage-table-wrap">
              <table className="conceptual-stage-table">
                <thead>
                  <tr>
                    <th scope="col">단계</th>
                    <th scope="col">수행 업무</th>
                    <th scope="col">확인 자료</th>
                    <th scope="col">주요 결과</th>
                  </tr>
                </thead>
                <tbody>
                  {processTable.rows.map((row) => (
                    <tr key={row.step}>
                      <td data-label="단계">
                        <span>{row.step}</span>
                        <strong>{row.phase}</strong>
                      </td>
                      <td data-label="수행 업무">{row.task}</td>
                      <td data-label="확인 자료">{row.input}</td>
                      <td data-label="주요 결과">{row.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="conceptual-report" aria-labelledby="conceptual-report-title">
        <div className="site-shell conceptual-report__inner">
          <header className="conceptual-details__head">
            <p className="section-label">{report.label}</p>
            <h2 id="conceptual-report-title">{report.title}</h2>
            <p>{report.description}</p>
          </header>

          <ol className="conceptual-report__list">
            {report.items.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="conceptual-analysis" aria-labelledby="conceptual-analysis-title">
        <div className="site-shell conceptual-analysis__inner">
          <header className="conceptual-details__head">
            <p className="section-label">{analysis.label}</p>
            <h2 id="conceptual-analysis-title">{analysis.title}</h2>
            <p>{analysis.description}</p>
          </header>

          <div className="conceptual-analysis__groups">
            {analysis.groups.map((group, index) => (
              <article key={group.title} className="conceptual-analysis__group">
                <div className="conceptual-analysis__group-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="conceptual-principles" aria-label="개념설계 수행 기준">
        <div className="site-shell conceptual-principles__grid">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
