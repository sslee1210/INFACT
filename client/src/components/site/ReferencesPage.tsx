import { useState } from "react";
import { Download, FileSpreadsheet } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ReferenceYearTabs, type ReferenceYear } from "@/components/site/ReferenceYearTabs";
import { getReferenceDownload } from "@/content/references/referenceDownload";
import "@/styles/pages/references-presentation.css";

type ReferencesPageProps = {
  label: "개념설계" | "GMP" | "CSV";
  title: string;
  description: string;
  years: ReferenceYear[];
};

export function ReferencesPage({ label, title, description, years }: ReferencesPageProps) {
  const combineYears = label === "개념설계";
  const [selectedYear, setSelectedYear] = useState(() => {
    const queryYear = Number(new URLSearchParams(window.location.search).get("year"));
    return years.find(({ year }) => year === queryYear)?.year ?? years[0].year;
  });
  const referenceDownload = getReferenceDownload(label, selectedYear);
  const periodLabel = combineYears ? `~${Math.max(...years.map(({ year }) => year))}` : String(selectedYear);

  function chooseYear(year: number) {
    setSelectedYear(year);
    const url = new URL(window.location.href);
    url.searchParams.set("year", String(year));
    window.history.replaceState(window.history.state, "", url);
  }

  return (
    <PageLayout presentation="refined">
      <PageIntro label="References" title={title} description={description} />
      <div className="references-page">
        <PageSubNav
          breadcrumb={["홈", "수행실적", label]}
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
          </div>
          <ReferenceYearTabs years={years} categoryLabel={label} combineYears={combineYears} selectedYear={selectedYear} onYearChange={chooseYear} />
          <aside className="reference-download" aria-labelledby="download-title">
            <div className="reference-download__intro">
              <FileSpreadsheet className="reference-download__icon" size={30} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h2 id="download-title">{periodLabel}년 {label} 수행실적</h2>
                <p>{combineYears ? "전체 기간에" : "해당 연도에"} 수행한 기업과 프로젝트 내역을 엑셀 파일로 제공합니다.</p>
              </div>
            </div>
            <div className="reference-download__action">
              <a className="reference-download__button" href={referenceDownload.href} download={referenceDownload.fileName}>
                <Download size={17} strokeWidth={1.8} aria-hidden="true" />
                {periodLabel}년 수행실적 다운로드
              </a>
            </div>
          </aside>
        </section>
      </div>
    </PageLayout>
  );
}
