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
    year: "2025",
    title: "해외 컨설팅 및 종합 컨설팅 계약",
    side: "right",
    details: ["EUGMP 해외 컨설팅", "종합 컨설팅 사업 계약"],
  },
  {
    year: "2024",
    title: "전문 조직 보강",
    side: "left",
    details: ["개념설계팀 보강", "GMP 인원 보강", "CSV 인원 보강", "영업팀 보강"],
  },
  {
    year: "2021",
    title: "오산 사옥 확장 이전",
    side: "right",
    details: ["오산 사옥 확장 이전"],
  },
  {
    year: "2020",
    title: "컨설팅 협력 및 사업지원 확대",
    side: "left",
    details: ["Consulting 협력사 합병", "코로나19 대책위 발족", "메디인프라 사업지원계약"],
  },
  {
    year: "2019",
    title: "파트너십 및 CSV IT 사업 확대",
    side: "right",
    details: ["SAMSUNG BIOLOGICS Partner 체결", "CSV IT 사업 확대"],
  },
  {
    year: "2018",
    title: "GMP 배양설비 구축",
    side: "left",
    details: ["GMP 배양설비 구축", "배양실 운영", "GMP 임직원 Workshop"],
  },
  {
    year: "2017",
    title: "CSV 사업부 창설",
    side: "right",
    details: ["CSV 사업부 창설", "사옥 이전(용인)", "GMP Clean Room 구축"],
  },
  {
    year: "2016",
    title: "회사 설립",
    side: "left",
    details: ["회사 설립", "흥덕 IT 밸리 확장 이전", "GMP Workshop"],
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

  /* wheel 제스처 상태 */
  const wheelGestureActiveRef = useRef(false);
  const wheelDirectionRef = useRef<1 | -1 | 0>(0);
  const wheelGestureEndTimerRef = useRef<number | null>(null);

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

          entries.forEach((entry) => {
            const index = Number(
              (entry.target as HTMLElement).dataset.historyIndex ?? "-1",
            );

            if (index >= 0 && entry.isIntersecting) {
              next[index] = true;
            }
          });

          return next;
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
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 4) return;

      const direction: 1 | -1 = event.deltaY > 0 ? 1 : -1;

      /* 방향 바뀌면 새 제스처로 취급 */
      if (wheelDirectionRef.current !== direction) {
        wheelGestureActiveRef.current = false;
      }

      /* 제스처 종료 타이머 갱신 */
      if (wheelGestureEndTimerRef.current != null) {
        window.clearTimeout(wheelGestureEndTimerRef.current);
      }

      wheelGestureEndTimerRef.current = window.setTimeout(() => {
        wheelGestureActiveRef.current = false;
        wheelDirectionRef.current = 0;
        wheelGestureEndTimerRef.current = null;
      }, 220);

      /* 이미 같은 방향 제스처 처리 중이면 추가 이동 금지 */
      if (wheelGestureActiveRef.current) return;

      const current = activeIndexRef.current;
      const next = Math.max(
        0,
        Math.min(historyItems.length - 1, current + direction),
      );

      if (next !== current) {
        activeIndexRef.current = next;
        setActiveIndex(next);
      }

      wheelGestureActiveRef.current = true;
      wheelDirectionRef.current = direction;
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (wheelGestureEndTimerRef.current != null) {
        window.clearTimeout(wheelGestureEndTimerRef.current);
        wheelGestureEndTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const listEl = listRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!listEl || !items.length) return;

    let ticking = false;

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const update = () => {
      const rect = listEl.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = scrollY + viewportHeight;

      const listTopAbs = scrollY + rect.top;
      const triggerLineAbs = scrollY + viewportHeight * 0.5;

      const centersInList = items.map(
        (item) => item.offsetTop + item.offsetHeight / 2,
      );
      const centersAbs = centersInList.map((center) => listTopAbs + center);

      const atPageTop = scrollY <= 4;
      const atPageBottom = viewportBottom >= documentHeight - 4;

      let nextIndex = activeIndexRef.current;

      /* wheel 제스처 중이 아닐 때만 스크롤 위치 기반 보정 */
      if (atPageTop) {
        nextIndex = 0;
      } else if (atPageBottom) {
        nextIndex = centersAbs.length - 1;
      } else if (!wheelGestureActiveRef.current) {
        let nearestIndex = 0;
        let nearestDistance = Math.abs(centersAbs[0] - triggerLineAbs);

        for (let i = 1; i < centersAbs.length; i += 1) {
          const distance = Math.abs(centersAbs[i] - triggerLineAbs);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = i;
          }
        }

        const current = activeIndexRef.current;
        const delta = nearestIndex - current;

        if (delta > 0) {
          nextIndex = current + 1;
        } else if (delta < 0) {
          nextIndex = current - 1;
        }
      }

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }

      const firstCenter = centersInList[0];
      const activeCenter = centersInList[activeIndexRef.current];
      const progressPx = Math.max(0, activeCenter - firstCenter);

      listEl.style.setProperty("--history-progress-start", `${firstCenter}px`);
      listEl.style.setProperty("--history-progress-px", `${progressPx}px`);

      centersAbs.forEach((centerAbs, index) => {
        const distance = Math.abs(centerAbs - triggerLineAbs);
        const localProgress = clamp(
          1 - distance / (viewportHeight * 0.32),
          0,
          1,
        );
        items[index].style.setProperty(
          "--history-item-progress",
          `${localProgress}`,
        );
      });

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
                    <time>{item.year}</time>

                    <div className="history-list__marker" aria-hidden="true">
                      <span className="history-list__marker-dot" />
                    </div>

                    <div className="history-list__content">
                      <div className="history-list__titleRow">
                        {item.side === "right" && (
                          <span
                            className="history-list__titleLine"
                            aria-hidden="true"
                          />
                        )}
                        <h3>{item.title}</h3>
                        {item.side === "left" && (
                          <span
                            className="history-list__titleLine"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <ul>
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
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