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

type YearReferenceArchiveProps = {
  years: ReferenceYear[];
  emptyTitle: string;
  emptyDescription: string;
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
    return <span className="reference-year-card__logo-fallback">{client}</span>;
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

export function YearReferenceArchive({
  years,
  emptyTitle,
  emptyDescription,
}: YearReferenceArchiveProps) {
  const availableYears = useMemo(
    () => years.filter((section) => section.clients.length > 0),
    [years],
  );

  const [selectedYear, setSelectedYear] = useState(
    availableYears[0]?.year ?? null,
  );

  const selectedSection =
    availableYears.find((section) => section.year === selectedYear) ??
    availableYears[0];

  if (!selectedSection) {
    return (
      <div className="reference-year-empty">
        <p className="section-label">References</p>
        <h2>{emptyTitle}</h2>
        <p>{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="reference-year-layout">
      <main className="reference-year-content" aria-live="polite">
        <header className="reference-year-content__head">
          <div>
            <span>YEAR</span>
            <h2>{selectedSection.year}</h2>
          </div>
        </header>

        <div className="reference-year-grid">
          {selectedSection.clients.map((reference) => (
            <article key={reference.client} className="reference-year-card">
              <div className="reference-year-card__logo">
                <ClientLogo client={reference.client} logo={reference.logo} />
              </div>

              <div className="reference-year-card__body">
                <ul>
                  {reference.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </main>

      <aside className="reference-year-menu" aria-label="수행실적 연도 선택">
        <div className="reference-year-menu__title">
          <span>YEAR</span>
          <strong>연도 선택</strong>
        </div>

        <nav>
          {availableYears.map((section) => (
            <button
              key={section.year}
              type="button"
              className={selectedSection.year === section.year ? "is-active" : ""}
              aria-current={
                selectedSection.year === section.year ? "page" : undefined
              }
              onClick={() => setSelectedYear(section.year)}
            >
              <span>{section.year}</span>
              <small>프로젝트 보기</small>
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
}
