import { useMemo, useState } from "react";

export type ReferenceClient = {
  client: string;
  logo: string;
  projects: string[];
};

export type ReferenceYear = {
  year: number;
  clients: ReferenceClient[];
};

type ReferenceYearTabsProps = {
  years: ReferenceYear[];
  emptyMessage: string;
};

const logoExtensions = ["svg", "png", "webp"];

function ClientLogo({ client, logo }: { client: string; logo: string }) {
  const [extensionIndex, setExtensionIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (extensionIndex < logoExtensions.length - 1) {
      setExtensionIndex((current) => current + 1);
      return;
    }
    setFailed(true);
  };

  if (failed || !logo) {
    return <span className="csv-year-card__logo-fallback">{client}</span>;
  }

  return (
    <img
      src={`./images/clients/${logo}.${logoExtensions[extensionIndex]}`}
      alt={`${client} 로고`}
      loading="lazy"
      onError={handleError}
    />
  );
}

export function ReferenceYearTabs({
  years,
  emptyMessage,
}: ReferenceYearTabsProps) {
  const yearNumbers = useMemo(
    () => years.map((section) => section.year),
    [years],
  );

  const [selectedYear, setSelectedYear] = useState(yearNumbers[0]);
  const [yearStartIndex, setYearStartIndex] = useState(0);

  const visibleYears = yearNumbers.slice(yearStartIndex, yearStartIndex + 4);
  const canMovePrevious = yearStartIndex > 0;
  const canMoveNext = yearStartIndex + 4 < yearNumbers.length;

  const selectedSection =
    years.find((section) => section.year === selectedYear) ?? years[0];

  return (
    <div className="site-shell csv-year-layout">
      <main className="csv-year-content" aria-live="polite">
        <header className="csv-year-content__head">
          <div>
            <span>YEAR</span>
            <h2>{selectedSection.year}</h2>
          </div>
        </header>

        {selectedSection.clients.length > 0 ? (
          <div className="csv-year-grid">
            {selectedSection.clients.map((reference) => (
              <article key={reference.client} className="csv-year-card">
                <div className="csv-year-card__logo">
                  <ClientLogo client={reference.client} logo={reference.logo} />
                </div>

                <div className="csv-year-card__body">
                  <ul>
                    {reference.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="csv-year-empty">
            <p>{emptyMessage}</p>
          </div>
        )}
      </main>

      <aside className="csv-year-menu" aria-label="수행실적 연도 선택">
        <div className="csv-year-menu__title">
          <span>YEAR</span>
          <strong>연도 선택</strong>
        </div>

        <nav>
          {visibleYears.map((year) => (
            <button
              key={year}
              type="button"
              className={selectedYear === year ? "is-active" : ""}
              aria-current={selectedYear === year ? "page" : undefined}
              onClick={() => setSelectedYear(year)}
            >
              <span>{year}</span>
            </button>
          ))}
        </nav>

        <div className="csv-year-menu__controls">
          <button
            type="button"
            className="csv-year-menu__arrow"
            aria-label="이전 연도 보기"
            disabled={!canMovePrevious}
            onClick={() =>
              setYearStartIndex((current) => Math.max(0, current - 4))
            }
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            className="csv-year-menu__arrow"
            aria-label="다음 연도 보기"
            disabled={!canMoveNext}
            onClick={() =>
              setYearStartIndex((current) =>
                Math.min(yearNumbers.length - 4, current + 4),
              )
            }
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
