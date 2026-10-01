import { useEffect, useState } from "react";
import { Download, FileSpreadsheet } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import "./references-preview.css";

type Category = "design" | "gmp" | "csv";
type ReferenceClient = {
  client: string;
  logo: string;
  logoSrc?: string | null;
  systems?: string[];
  projects?: string[];
};
type ReferenceYear = { year: number; clients: ReferenceClient[] };
type ReferenceData = Record<Category, ReferenceYear[]>;

function collectCompanies(records: ReferenceClient[]) {
  const companies = new Map<string, ReferenceClient & { summary: string[] }>();
  records.forEach((record) => {
    const previous = companies.get(record.client);
    companies.set(record.client, {
      ...record,
      logoSrc: previous?.logoSrc ?? record.logoSrc,
      summary: Array.from(new Set([
        ...(previous?.summary ?? []),
        ...(record.systems ?? []),
        ...(record.projects ?? []),
      ])),
    });
  });
  return Array.from(companies.values());
}

function CompanyLogo({ client, logoSrc }: ReferenceClient) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [logoSrc]);
  const hasLogo = Boolean(logoSrc && !failed);
  return (
    <div className="reference-company__logo" data-placeholder={!hasLogo || undefined}>
      {hasLogo ? (
        <img
          src={logoSrc!}
          alt={`${client} 로고`}
          width={144}
          height={72}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : <span>{client}<small>로고 등록 예정</small></span>}
    </div>
  );
}

const categories = {
  design: {
    label: "개념설계",
    title: "개념설계 수행실적",
    description: "제약·바이오 제조시설의 공정 분석, GMP Layout, 구역·동선·유틸리티 계획과 개념설계 보고서 작성 실적입니다.",
  },
  gmp: {
    label: "GMP",
    title: "GMP 수행실적",
    description: "제약·바이오 프로젝트의 GMP 컨설팅, 품질시스템 구축, 밸리데이션 및 규제기관 대응 실적입니다.",
  },
  csv: {
    label: "CSV",
    title: "CSV 수행실적",
    description: "제약·바이오 산업의 전산시스템과 제조·시험설비를 대상으로 수행한 컴퓨터화 시스템 밸리데이션 실적입니다.",
  },
};

function readRequestedYear() {
  return Number(new URLSearchParams(window.location.search).get("year"));
}

function ReferencesPreview({ category }: { category: Category }) {
  const [data, setData] = useState<ReferenceData | null>(null);
  const [error, setError] = useState(false);
  const [requestNumber, setRequestNumber] = useState(0);
  const [selectedYear, setSelectedYear] = useState(readRequestedYear);
  const config = categories[category];
  const years = data?.[category] ?? [];
  const selected = years.find((item) => item.year === selectedYear) ?? years[0];
  const clients = collectCompanies(selected?.clients ?? []);
  const visibleClients = clients.slice(0, 30);

  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    fetch("/__references-data", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Reference data unavailable");
        return response.json();
      })
      .then((result: ReferenceData) => setData(result))
      .catch((reason) => {
        if (reason.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, [requestNumber]);

  function chooseYear(year: number) {
    setSelectedYear(year);
    const url = new URL(window.location.href);
    url.searchParams.set("year", String(year));
    window.history.replaceState(window.history.state, "", url);
  }

  return (
    <PageLayout presentation="refined">
      <div className="references-preview">
        <PageIntro
          label="References"
          title={config.title}
          description={config.description}
          className="references-preview__hero"
        />
        <PageSubNav
          breadcrumb={["홈", "수행실적", config.label]}
          items={[
            { label: "개념설계", href: "/references-design" },
            { label: "GMP", href: "/references-gmp" },
            { label: "CSV", href: "/references-csv" },
          ]}
        />

        <section className="reference-archive site-shell" aria-labelledby="archive-title">
          <div className="reference-archive__heading">
            <div>
              <h2 id="archive-title">함께해 온 기업들</h2>
              <p>주요 고객사와 수행한 장비·시스템을 소개합니다. 더 많은 수행실적은 전체 자료로 제공합니다.</p>
            </div>
            <p className="reference-archive__preview-note">디자인 미리보기 · 실제 사이트 미적용</p>
          </div>

          {error ? (
            <div className="reference-archive__message" role="alert">
              <h3>수행실적을 불러오지 못했습니다.</h3>
              <p>잠시 후 다시 시도해 주세요.</p>
              <button className="reference-archive__retry" onClick={() => setRequestNumber((value) => value + 1)}>
                다시 불러오기
              </button>
            </div>
          ) : !data ? (
            <div className="reference-archive__message" role="status">수행실적을 불러오는 중입니다.</div>
          ) : (
            <>
              <div className="reference-years" role="group" aria-label="수행 연도 선택">
                <span className="reference-years__label">연도 선택</span>
                <div className="reference-years__options">
                  {years.map(({ year }) => (
                    <button
                      key={year}
                      type="button"
                      aria-pressed={year === selected?.year}
                      aria-controls="reference-results"
                      onClick={() => chooseYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div id="reference-results" className="reference-results" aria-live="polite" aria-atomic="true">
                <header className="reference-results__year">
                  <h3>{selected?.year}</h3>
                  <p>{config.label} 수행 기업</p>
                  {visibleClients.length > 0 && <span>주요 수행사례</span>}
                </header>
                <div className="reference-results__body">
                  {visibleClients.length ? (
                    <>
                      {visibleClients.some((company) => !company.logoSrc) && (
                        <p className="reference-companies__logo-note">왼쪽 회사명은 로고가 들어갈 자리의 임시 표시입니다. 로고 등록 후에는 이미지로 대체됩니다.</p>
                      )}
                      <ul className="reference-companies" aria-label={`${selected?.year}년 ${config.label} 수행 기업`}>
                        {visibleClients.map((company) => (
                          <li key={company.client} className="reference-company" aria-label={company.client}>
                            <CompanyLogo {...company} />
                            <div className="reference-company__details">
                              <p className="reference-company__summary">
                                {company.summary.length ? company.summary.join(", ") : "수행 내용 확인 중"}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="reference-results__footnote">
                        <p>이 외에도 다양한 기업의 프로젝트를 수행했습니다.</p>
                        <span>위 내용은 주요 수행사례의 일부입니다.</span>
                      </div>
                    </>
                  ) : (
                    <div className="reference-empty">
                      <p className="reference-empty__title">수행실적을 정리하고 있습니다.</p>
                      <p>{selected?.year}년 기업 목록은 자료 확인 후 업데이트합니다.</p>
                      <span>전체 실적 자료도 함께 준비하고 있습니다.</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          <aside className="reference-download" aria-labelledby="download-title">
            <div className="reference-download__intro">
              <FileSpreadsheet className="reference-download__icon" size={30} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2 id="download-title">전체 수행실적을 한 번에 확인하세요.</h2>
                <p>연도별 수행 기업과 상세 업무 내역을 엑셀 파일로 제공합니다.</p>
              </div>
            </div>
            <div className="reference-download__action">
              <button type="button" disabled aria-describedby="download-status">
                <Download size={17} strokeWidth={1.8} aria-hidden="true" />
                전체 수행실적 다운로드
              </button>
              <p id="download-status">엑셀 파일 준비 중</p>
            </div>
          </aside>
        </section>
      </div>
    </PageLayout>
  );
}

export function DesignPreview() { return <ReferencesPreview category="design" />; }
export function GmpPreview() { return <ReferencesPreview category="gmp" />; }
export function CsvPreview() { return <ReferencesPreview category="csv" />; }
