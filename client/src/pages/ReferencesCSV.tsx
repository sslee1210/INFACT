import { useMemo, useState } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import "@/styles/pages/references-csv-year-tabs.css";

type CsvReference = {
  client: string;
  logo: string;
  systems: string[];
};

type CsvReferenceYear = {
  year: number;
  clients: CsvReference[];
};

const csvReferenceYears: CsvReferenceYear[] = [
  {
    year: 2020,
    clients: [
      { client: "건일제약", logo: "geonil-pharm", systems: ["카톤인쇄기"] },
      { client: "아이큐어", logo: "icure", systems: ["생산실행시스템(MES)"] },
      { client: "미생물실증지원센터", logo: "microbial-validation-center", systems: ["분석기"] },
      { client: "GC녹십자", logo: "gc-biopharma", systems: ["PLM", "ELN"] },
      { client: "동아ST", logo: "donga-st", systems: ["MES", "SCADA System"] },
      { client: "삼천당제약", logo: "samchundang-pharm", systems: ["ERP 외"] },
      { client: "한국얀센", logo: "janssen-korea", systems: ["생산효율시스템"] },
      { client: "에스티팜", logo: "st-pharm", systems: ["생산설비"] },
    ],
  },
  {
    year: 2019,
    clients: [
      { client: "셀트리온", logo: "celltrion", systems: ["2D Barcode System", "바코드시스템", "Print 시스템"] },
      { client: "휴젤", logo: "hugel", systems: ["시험일지", "EDMS", "포장기", "LIMS", "QMS"] },
      { client: "OLIC Thailand", logo: "olic-thailand", systems: ["2D Barcode System"] },
      { client: "유니메드제약", logo: "unimed-pharm", systems: ["바코드 일련번호(RFID AG)"] },
      { client: "종근당바이오", logo: "ckd-bio", systems: ["프로바이오틱스 신축공장"] },
      { client: "한국프라임제약", logo: "korea-prime-pharm", systems: ["RWS"] },
      { client: "휴메딕스", logo: "humedix", systems: ["QMS"] },
      { client: "삼양바이오팜", logo: "samyang-biopharm", systems: ["QC 장비"] },
      { client: "도미노코리아", logo: "domino-korea", systems: ["카톤인쇄기", "장비"] },
      { client: "이수앱지스", logo: "isu-abxis", systems: ["실험정보관리시스템(LAS)"] },
      { client: "이니스트바이오제약", logo: "inist-bio", systems: ["RWS"] },
      { client: "에이프로젠", logo: "aprogen", systems: ["자동화창고관리시스템"] },
      { client: "SK바이오텍", logo: "sk-biotec", systems: ["타임서버"] },
      { client: "GC녹십자", logo: "gc-biopharma", systems: ["Isolator"] },
      { client: "휴온스", logo: "huons", systems: ["SCADA System"] },
      { client: "넥스팜코리아", logo: "nexpharm-korea", systems: ["출하관리시스템"] },
      { client: "한국오츠카제약", logo: "otsuka-korea", systems: ["EDMS"] },
      { client: "국제약품", logo: "kukje-pharm", systems: ["ERP", "AG", "DPS 변경관리"] },
      { client: "동광제약", logo: "dongkwang-pharm", systems: ["원료칭량관리시스템", "시험일지", "MRP 시스템", "이동식 부스", "분석장비"] },
      { client: "메디톡스", logo: "medytox", systems: ["일련번호시스템"] },
      { client: "한국콜마", logo: "kolmar-korea", systems: ["창고관리시스템"] },
      { client: "동화약품", logo: "dongwha-pharm", systems: ["Agilent OpenLAB ECM System"] },
      { client: "애니젠", logo: "anygen", systems: ["장비 및 시스템"] },
      { client: "코러스제약", logo: "korus-pharm", systems: ["클린부스"] },
      { client: "한림제약", logo: "hanlim-pharm", systems: ["GLT"] },
      { client: "하이텍팜", logo: "hitechpharm", systems: ["PW", "WFI", "PS System"] },
      { client: "종근당", logo: "ckd-pharm", systems: ["Pass Box"] },
      { client: "한미약품", logo: "hanmi-pharm", systems: ["글러브 리크테스트 장비"] },
      { client: "동아제약", logo: "donga-pharm", systems: ["클린부스"] },
      { client: "휴온스제약", logo: "huons-pharm", systems: ["모바일 부스"] },
      { client: "비씨월드제약", logo: "bcworld-pharm", systems: ["질소라인", "조제라인"] },
      { client: "삼일제약", logo: "samil-pharm", systems: ["Pass Box"] },
      { client: "CJ헬스케어", logo: "cj-healthcare", systems: ["포장 및 인쇄기"] },
    ],
  },
  {
    year: 2018,
    clients: [
      { client: "한국콜마", logo: "kolmar-korea", systems: ["원부자재 추적이력시스템"] },
      { client: "삼양바이오팜", logo: "samyang-biopharm", systems: ["동결건조기"] },
      { client: "동광제약", logo: "dongkwang-pharm", systems: ["생산관리시스템", "시험일지", "GMP 공장"] },
      { client: "동화약품", logo: "dongwha-pharm", systems: ["Agilent OpenLAB ECM System", "고속인쇄기"] },
      { client: "메디톡스", logo: "medytox", systems: ["비전시스템"] },
      { client: "애니젠", logo: "anygen", systems: ["CSV 종합컨설팅"] },
      { client: "셀트리온", logo: "celltrion", systems: ["바코드시스템", "VFS 장비 CSV"] },
      { client: "하이텍팜", logo: "hitechpharm", systems: ["음성공장 수처리"] },
      { client: "CJ헬스케어", logo: "cj-healthcare", systems: ["2D Barcode & Aggregation"] },
      { client: "휴젤", logo: "hugel", systems: ["LIMS", "QMS", "WMS"] },
      { client: "필로시스", logo: "philosys", systems: ["일련번호시스템"] },
      { client: "한올바이오파마", logo: "hanall-biopharma", systems: ["LIMS", "WMS", "2D Barcode CSV", "AG"] },
      { client: "비씨월드제약", logo: "bcworld-pharm", systems: ["조제라인"] },
      { client: "도미노코리아", logo: "domino-korea", systems: ["프린터 관리시스템"] },
    ],
  },
  {
    year: 2017,
    clients: [
      { client: "퀀타매트릭스", logo: "quantamatrix", systems: ["환경모니터링"] },
      { client: "동아ST", logo: "donga-st", systems: ["Isolator"] },
      { client: "한국콜마", logo: "kolmar-korea", systems: ["VHP 공급시스템"] },
    ],
  },
  {
    year: 2016,
    clients: [
      { client: "펜믹스", logo: "penmix", systems: ["HPV System"] },
      { client: "한미약품", logo: "hanmi-pharm", systems: ["VHP 공급시스템"] },
    ],
  },
];

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

  if (failed) {
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

export default function ReferencesCSV() {
  const years = useMemo(() => csvReferenceYears.map((section) => section.year), []);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [yearStartIndex, setYearStartIndex] = useState(0);

  const visibleYears = years.slice(yearStartIndex, yearStartIndex + 4);
  const canMovePrevious = yearStartIndex > 0;
  const canMoveNext = yearStartIndex + 4 < years.length;

  const selectedSection =
    csvReferenceYears.find((section) => section.year === selectedYear) ??
    csvReferenceYears[0];

  return (
    <PageLayout>
      <PageIntro
        label="References"
        title="CSV 수행실적"
        description="제약·바이오 산업의 전산시스템과 제조·시험설비를 대상으로 수행한 컴퓨터화 시스템 밸리데이션 실적입니다."
      />

      <section className="section section--white csv-year-page">
        <PageSubNav
          breadcrumb={["홈", "수행실적", "CSV"]}
          items={[
            { label: "개념설계", href: "/references-design" },
            { label: "GMP", href: "/references-gmp" },
            { label: "CSV", href: "/references-csv" },
          ]}
        />

        <div className="site-shell csv-year-page__intro">
          <p className="section-label">CSV References</p>
          <h2 className="section-title">연도별 수행 프로젝트</h2>
        </div>

        <div className="site-shell csv-year-layout">
          <main className="csv-year-content" aria-live="polite">
            <header className="csv-year-content__head">
              <div>
                <span>YEAR</span>
                <h2>{selectedSection.year}</h2>
              </div>
            </header>

            <div className="csv-year-grid">
              {selectedSection.clients.map((reference) => (
                <article key={reference.client} className="csv-year-card">
                  <div className="csv-year-card__logo">
                    <ClientLogo client={reference.client} logo={reference.logo} />
                  </div>

                  <div className="csv-year-card__body">
                    <h3>{reference.client}</h3>
                    <ul>
                      {reference.systems.map((system) => (
                        <li key={system}>{system}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
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
                    Math.min(years.length - 4, current + 4),
                  )
                }
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
