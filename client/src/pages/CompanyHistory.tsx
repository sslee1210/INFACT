import { useEffect, useRef, useState } from "react";
import { CompanyIntro } from "@/components/site/CompanyIntro";
import { CompanySubNav } from "@/components/site/CompanySubNav";
import { PageLayout } from "@/components/site/PageLayout";

type HistoryItem = {
  year: string;
  title: string;
  side: "left" | "right";
  details: string[];
};

const historyItems: HistoryItem[] = [
  {
    year: "2026",
    title: "현업에 열심으로 임하며 또한 새로운 꿈을 만들고 있어요.",
    side: "left",
    details: [],
  },
  {
    year: "2025",
    title: "2025년에는 해외 개념사업 및 종합 컨설팅 계약이 이루어져 바쁜 한해가 되었습니다.",
    side: "right",
    details: [
      "그동안 국내 서비스만 진행한 건 아니지만 개념과 건축 및 GMP System 구축까지의 업무를 서비스하게 되었으니 조금은 많이 고무적인 일이 되었습니다.",
    ],
  },
  {
    year: "2021~ 2022",
    title:
      "2021년에는 성장하는 인팩트 직원들의 근무환경 개선과 고객과의 물리적인 거리를 좁히기 위해 경기 오산시에 사옥을 지어 이전하는 일이 있었습니다.",
    side: "left",
    details: [],
  },
  {
    year: "2019~ 2020",
    title:
      "인팩트가 성장하며 여러 고객사로부터 사업 파트너십 요청이 있었고 협력사로 성장하는 시기가 있었습니다.",
    side: "right",
    details: ["고객님들 감사합니다."],
  },
  {
    year: "2018",
    title: "2018년에는 선택적 배지 생산시설을 구축하고 매출도 만들어 냈지요.",
    side: "left",
    details: [
      "생산시설과 함께 배양실도 같이 구축함으로써 좀더 고객의 요구에 가까워 졌습니다.",
    ],
  },
  {
    year: "2017",
    title: "2017년에는 CSV 컨설팅도 시작했어요.",
    side: "right",
    details: [
      "GMP 컨설팅은 인팩트에서 CSV 컨설팅은 협력업체에서 진행하던 업무를 과감한 인적 투자와 System 구축을 통해 사업부를 만들고 서비스를 제공하기 시작했습니다.",
    ],
  },
  {
    year: "2016",
    title: "2016년부터 GMP 컨설팅을 시작했어요.",
    side: "left",
    details: [
      "인팩트라는 이름으로 경기 용인의 흥덕IT밸리에서 세상에 이름을 알렸습니다.",
    ],
  },
];

export default function CompanyHistory() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const [visibleMap, setVisibleMap] = useState<boolean[]>(
    historyItems.map(() => false),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleMap((prev) => {
          const next = [...prev];
          let changed = false;

          entries.forEach((entry) => {
            const index = Number(
              (entry.target as HTMLElement).dataset.historyIndex ?? "-1",
            );

            if (index >= 0 && entry.isIntersecting && !next[index]) {
              next[index] = true;
              changed = true;
            }
          });

          return changed ? next : prev;
        });
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const listEl = listRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!listEl || !items.length) return;

    let ticking = false;
    let frameId = 0;

    const update = () => {
      const listRect = listEl.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = scrollY + viewportHeight;
      const listTopAbs = scrollY + listRect.top;
      const triggerLineAbs = scrollY + viewportHeight * 0.5;

      const markerCentersInList = items.map((item) => {
        const marker = item.querySelector<HTMLElement>(".history-list__marker");
        if (marker && marker.offsetParent !== null) {
          return item.offsetTop + marker.offsetTop + marker.offsetHeight / 2;
        }

        const year = item.querySelector<HTMLElement>("time");
        if (year) {
          return item.offsetTop + year.offsetTop + year.offsetHeight / 2;
        }

        return item.offsetTop + item.offsetHeight / 2;
      });
      const markerCentersAbs = markerCentersInList.map(
        (center) => listTopAbs + center,
      );

      const atPageTop = scrollY <= 4;
      const atPageBottom = viewportBottom >= documentHeight - 4;
      let nextIndex = activeIndexRef.current;

      if (atPageTop) {
        nextIndex = 0;
      } else if (atPageBottom) {
        nextIndex = markerCentersAbs.length - 1;
      } else {
        nextIndex = 0;
        for (let index = 1; index < markerCentersAbs.length; index += 1) {
          if (markerCentersAbs[index] > triggerLineAbs) break;
          nextIndex = index;
        }
      }

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }

      const firstMarkerCenter = markerCentersInList[0];
      const activeMarkerCenter = markerCentersInList[nextIndex];
      listEl.style.setProperty(
        "--history-progress-start",
        `${firstMarkerCenter}px`,
      );
      listEl.style.setProperty(
        "--history-progress-px",
        `${Math.max(0, activeMarkerCenter - firstMarkerCenter)}px`,
      );

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <PageLayout>
      <CompanyIntro />

      <section className="section section--white">
        <CompanySubNav />

        <div className="site-shell company-section">
          <div className="history-panel" aria-label="인팩트 연혁">
            <div className="history-panel__head">
              <p className="section-label">연혁</p>
              <h2 className="section-title">HISTORY</h2>
              <p className="body-copy">
                주요 연혁과 조직 성장 흐름을 시간 순서에 따라 정리했습니다.
              </p>
            </div>

            <div className="history-list" ref={listRef}>
              {historyItems.map((item, index) => {
                const isVisible = visibleMap[index];
                const isActive = activeIndex === index;

                return (
                  <article
                    key={`${item.year}-${item.title}`}
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    data-history-index={index}
                    className={[
                      "history-list__item",
                      `history-list__item--${item.side}`,
                      isVisible ? "is-visible" : "",
                      isActive ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="history-list__content">
                      <div className="history-list__meta">
                        {item.side === "right" && (
                          <span
                            className="history-list__yearLine"
                            aria-hidden="true"
                          />
                        )}
                        <time>{item.year}</time>
                        {item.side === "left" && (
                          <span
                            className="history-list__yearLine"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <div className="history-list__titleRow">
                        <h3>{item.title}</h3>
                      </div>

                      {item.details.length > 0 && (
                        <ul>
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="history-list__marker" aria-hidden="true">
                      <span className="history-list__marker-dot" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
