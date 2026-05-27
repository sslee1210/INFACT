import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { historyTimeline } from "@/content/siteContent";

export default function History() {
  return (
    <PageLayout>
      <PageIntro
        label="History"
        title="프로젝트 수행 범위와 조직 역량을 단계적으로 확장해 왔습니다."
        description="연혁은 회사의 성장보다, 어떤 범위의 프로젝트를 어떤 흐름으로 확장해 왔는지 읽히도록 정리했습니다."
      />

      <section className="section section--white">
        <div className="site-shell">
          <div className="timeline">
            {historyTimeline.map((item) => (
              <article key={item.year} className="timeline__item">
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__content">
                  <h3>{item.major}</h3>
                  <ul className="stacked-list stacked-list--compact">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
