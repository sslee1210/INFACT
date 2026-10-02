import { Download } from "lucide-react";
import { PageSubNav } from "@/components/site/PageSubNav";
import { ReferenceYearTabs, type ReferenceYear } from "@/components/site/ReferenceYearTabs";
import { referenceDownload } from "@/content/references/referenceDownload";
import { PreviewIntro, PreviewLayout } from "./PreviewLayout";
import "@/styles/pages/references-presentation.css";
import "./references.css";

type ReferencesPageProps = {
  label: string;
  title: string;
  description: string;
  years: ReferenceYear[];
};

export function ReferencesPage({ label, title, description, years }: ReferencesPageProps) {
  return (
    <PreviewLayout>
      <PreviewIntro title={title} description={description} />
      <div className="dp-references references-page">
        <div className="dp-subnav">
          <PageSubNav
            breadcrumb={["홈", "수행실적", label]}
            items={[
              { label: "개념설계", href: "/references-design" },
              { label: "GMP", href: "/references-gmp" },
              { label: "CSV", href: "/references-csv" },
            ]}
          />
        </div>

        <section className="reference-archive dp-shell" aria-labelledby="archive-title">
          <div className="reference-archive__heading">
            <h2 id="archive-title" className="dp-heading">함께해 온 기업들</h2>
            <p className="dp-lead">주요 고객사와 수행한 장비·시스템을 소개합니다. 더 많은 수행실적은 전체 자료로 제공합니다.</p>
          </div>

          <ReferenceYearTabs years={years} categoryLabel={label} />
          <p className="dp-reference-logo-note">로고 미등록 기업은 회사명으로 표시합니다.</p>

          <aside className="reference-download" aria-labelledby="download-title">
            <div className="reference-download__intro">
              <h2 id="download-title">전체 수행실적을 한 번에 확인하세요.</h2>
              <p>연도별 수행 기업과 상세 업무 내역을 엑셀 파일로 제공합니다.</p>
            </div>
            <div className="reference-download__action">
              {referenceDownload.href ? (
                <a
                  className="reference-download__button dp-button"
                  href={referenceDownload.href}
                  download={referenceDownload.fileName}
                >
                  <Download size={17} strokeWidth={1.8} aria-hidden="true" />
                  전체 수행실적 다운로드
                </a>
              ) : (
                <button
                  className="reference-download__button dp-button"
                  type="button"
                  disabled
                  aria-describedby="download-status"
                >
                  <Download size={17} strokeWidth={1.8} aria-hidden="true" />
                  전체 수행실적 다운로드
                </button>
              )}
              <p id="download-status">{referenceDownload.href ? "Excel · 전체 수행실적" : "엑셀 파일 준비 중"}</p>
            </div>
          </aside>
        </section>
      </div>
    </PreviewLayout>
  );
}
