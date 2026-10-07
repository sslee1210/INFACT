import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { prioritizeReferenceCompanies } from "@/content/references/referencePriority";
import { getCompanyLogo } from "@/content/clientLogos";

export type ReferenceClient = {
  client: string;
  logo: string;
  // 실제 로고 등록 시 ./images/clients/파일명 형태로 지정합니다.
  logoSrc?: string;
  projects?: string[];
  systems?: string[];
};

export type ReferenceYear = { year: number; clients: ReferenceClient[] };
type ReferenceYearTabsProps = {
  years: ReferenceYear[];
  categoryLabel: string;
  combineYears?: boolean;
  selectedYear: number;
  onYearChange: (year: number) => void;
};

function collectCompanies(records: ReferenceClient[]) {
  const companies = new Map<string, ReferenceClient & { summary: string[] }>();
  records.forEach((record) => {
    const previous = companies.get(record.client);
    companies.set(record.client, {
      ...record,
      logoSrc: previous?.logoSrc ?? record.logoSrc,
      summary: Array.from(new Set([
        ...(previous?.summary ?? []),
        ...(record.systems ?? record.projects ?? []),
      ])),
    });
  });
  return Array.from(companies.values());
}

function CompanyLogo({ client, logoSrc: suppliedLogoSrc }: ReferenceClient) {
  const registeredLogo = getCompanyLogo(client);
  const logoSrc = suppliedLogoSrc || registeredLogo?.src;
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [logoSrc]);
  const hasLogo = Boolean(logoSrc && !failed);
  return (
    <div
      className="reference-company__logo"
      data-placeholder={!hasLogo || undefined}
      data-logo={hasLogo && !suppliedLogoSrc ? registeredLogo?.id : undefined}
      data-surface={hasLogo && !suppliedLogoSrc ? registeredLogo?.background : undefined}
    >
      {hasLogo ? (
        <img
          src={logoSrc}
          alt={`${client} 로고`}
          width={144}
          height={72}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : <span>{client}</span>}
    </div>
  );
}

function ProjectSummary({ text }: { text: string }) {
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const summary = summaryRef.current;
    if (!summary) return;

    let disposed = false;
    const measureOverflow = () => {
      if (!disposed) {
        setIsTruncated(summary.scrollHeight > summary.clientHeight + 1);
      }
    };

    measureOverflow();
    const resizeObserver = new ResizeObserver(measureOverflow);
    resizeObserver.observe(summary);
    void document.fonts.ready.then(measureOverflow);
    document.fonts.addEventListener("loadingdone", measureOverflow);

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      document.fonts.removeEventListener("loadingdone", measureOverflow);
    };
  }, [text]);

  return (
    <>
      <p ref={summaryRef} className="reference-company__summary" title={text}>
        {text}
      </p>
      {isTruncated && <span className="reference-company__more" aria-hidden="true">등등</span>}
    </>
  );
}

export function ReferenceYearTabs({ years, categoryLabel, combineYears = false, selectedYear, onYearChange }: ReferenceYearTabsProps) {
  const selected = years.find((item) => item.year === selectedYear) ?? years[0];
  const companies = collectCompanies(selected?.clients ?? []);
  const visibleClients = combineYears
    ? years.flatMap(({ clients }) => clients.flatMap((company) =>
      (company.projects ?? company.systems ?? []).map((project, index) => ({
        ...company,
        summary: [company.systems?.[index] ?? project],
      }))
    ))
    : prioritizeReferenceCompanies(companies).slice(0, 20);
  const remainingCompanyCount = combineYears ? 0 : companies.length - visibleClients.length;
  const periodLabel = combineYears ? `~${Math.max(...years.map(({ year }) => year))}` : String(selected?.year);

  return (
    <>
      {combineYears ? (
        <div className="reference-years">
          <span className="reference-years__label">수행 기간</span>
          <span className="reference-years__range">{periodLabel}</span>
        </div>
      ) : <div className="reference-years" role="group" aria-label="수행 연도 선택">
        <span className="reference-years__label">연도 선택</span>
        <div className="reference-years__options">
          {years.map(({ year }) => (
            <button
              key={year}
              type="button"
              aria-pressed={year === selected?.year}
              aria-controls="reference-results"
              onClick={() => onYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>}
      <div id="reference-results" className="reference-results">
        <header className="reference-results__year" aria-live="polite" aria-atomic="true">
          <h3>{periodLabel}</h3>
          <p>{categoryLabel} 수행 기업</p>
          {visibleClients.length > 0 && <span>{combineYears ? `전체 ${visibleClients.length}건의 수행실적` : "주요 수행사례"}</span>}
        </header>
        <div className="reference-results__body">
          {visibleClients.length ? (
            <>
              <ul className="reference-companies" aria-label={`${periodLabel}년 ${categoryLabel} 수행 기업`}>
                {visibleClients.map((company, index) => (
                  <li key={`${company.client}-${index}`} className="reference-company" aria-label={company.client}>
                    <CompanyLogo {...company} />
                    <div className="reference-company__details">
                      {combineYears && company.summary.length ? company.summary.map((project) => (
                        <p key={project} className="reference-company__summary reference-company__summary--expanded">
                          {project}
                        </p>
                      )) : <ProjectSummary text={company.summary.length ? company.summary.join(", ") : "수행 내용 확인 중"} />}
                    </div>
                  </li>
                ))}
              </ul>
              {remainingCompanyCount > 0 && (
                <div className="reference-results__footnote">
                  <p>이 외에도 {remainingCompanyCount}개 기업의 수행실적이 있습니다.</p>
                </div>
              )}
            </>
          ) : (
            <div className="reference-empty">
              <p className="reference-empty__title">등록된 수행실적이 없습니다.</p>
              <p>전체 자료를 확인해 주세요.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
