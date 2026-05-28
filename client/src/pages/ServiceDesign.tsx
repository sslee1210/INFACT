import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";

const reviewItems = [
  {
    title: "공간 구성",
    description: "제조, 보관, 세척, 지원 공간의 관계를 정리하고 필요한 실 구성을 검토합니다.",
    tags: ["Room Program", "Area Relationship"],
  },
  {
    title: "GMP 구역",
    description: "청정도, 압력 차등, 오염 방지 기준을 바탕으로 구역과 동선 분리를 검토합니다.",
    tags: ["Zoning", "Clean Class"],
  },
  {
    title: "작업자·물류 동선",
    description: "인원, 원자재, 완제품, 폐기물 이동 경로를 나누어 교차 오염 가능성을 줄입니다.",
    tags: ["Personnel Flow", "Material Flow"],
  },
  {
    title: "설비·유틸리티 조건",
    description: "주요 장비 배치, 반입, 유지보수, HVAC 및 Clean Utility 범위를 초기 단계에서 확인합니다.",
    tags: ["Equipment", "HVAC / Utility"],
  },
];

const processSteps = [
  ["01", "기초자료 확인", "제품, 생산량, 공정, 기존 도면, 운영 조건을 확인합니다."],
  ["02", "공정·동선 검토", "작업 흐름과 물류 흐름을 나누고 주요 병목과 교차 지점을 찾습니다."],
  ["03", "Layout 방향 설정", "구역, 실 배치, 장비 위치, 유틸리티 조건을 반영한 방향안을 정리합니다."],
  ["04", "보고서 작성", "검토 근거와 의사결정 사항을 문서화해 다음 설계 단계 기준으로 남깁니다."],
];

const deliverables = [
  "Project Design Basis",
  "GMP Layout Direction",
  "Room Program / Area List",
  "Personnel & Material Flow",
  "Zoning Plan",
  "Utility Scope Summary",
  "Conceptual Design Report",
];

const checks = [
  "작업자 동선과 물류 동선이 명확히 분리되는가",
  "청정도와 압력 조건을 설계에 반영할 수 있는가",
  "장비 반입, 유지보수, 세척 공간이 확보되는가",
  "향후 GMP 검토와 검증 문서로 이어질 기준이 남는가",
];

export default function ServiceDesign() {
  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title="개념설계"
        description="GMP 시설의 초기 요구사항, 공간 구성, 동선, 유틸리티 조건을 검토해 실행 가능한 설계 방향을 정리합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "개념설계"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <div className="site-shell service-page service-design-page">
          <section className="concept-redesign-lead">
            <div className="concept-redesign-lead__main">
              <p className="section-label">Conceptual Design</p>
              <h2>설계가 시작되기 전에 검토 기준부터 바로 세웁니다.</h2>
              <p>
                개념설계는 보기 좋은 조감도나 단순 배치도가 아니라, 이후 상세설계와 GMP 검토가
                흔들리지 않도록 프로젝트 전제와 운영 조건을 먼저 정리하는 단계입니다.
              </p>
              <div className="concept-redesign-lead__actions">
                <Link href="/contact" className="site-button">
                  문의하기
                </Link>
                <Link href="/references-design" className="concept-redesign-textlink">
                  수행실적 보기
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.9} />
                </Link>
              </div>
            </div>

            <aside className="concept-redesign-summary" aria-label="개념설계 핵심 요약">
              <strong>검토 목적</strong>
              <dl>
                <div>
                  <dt>대상</dt>
                  <dd>신규 시설, 증설, 리모델링 초기 검토</dd>
                </div>
                <div>
                  <dt>중점</dt>
                  <dd>공간, 동선, 청정도, 장비, 유틸리티</dd>
                </div>
                <div>
                  <dt>결과</dt>
                  <dd>상세설계로 넘길 기준과 범위 정리</dd>
                </div>
              </dl>
            </aside>
          </section>

          <section className="concept-redesign-section">
            <div className="concept-redesign-section__head">
              <p className="section-label">Review Scope</p>
              <h2>현장에서 실제로 문제가 되는 항목부터 검토합니다.</h2>
            </div>

            <div className="concept-redesign-review">
              {reviewItems.map((item, index) => (
                <article key={item.title} className="concept-redesign-review__item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="concept-redesign-process">
            <div className="concept-redesign-section__head">
              <p className="section-label">Process</p>
              <h2>자료 확인부터 보고서까지 한 흐름으로 정리합니다.</h2>
            </div>

            <ol className="concept-redesign-process__list">
              {processSteps.map(([number, title, description]) => (
                <li key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="concept-redesign-output">
            <div className="concept-redesign-output__copy">
              <p className="section-label">Output</p>
              <h2>다음 단계에서 바로 쓸 수 있는 산출물로 남깁니다.</h2>
              <p>
                산출물은 상세설계, GMP 컨설팅, CSV 범위 정의의 기준이 됩니다. 그래서 단순 설명보다
                의사결정 근거와 검토 항목이 남는 문서 구조를 우선합니다.
              </p>
            </div>

            <div className="concept-redesign-output__grid">
              <article>
                <h3>주요 산출물</h3>
                <ul>
                  {deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" size={17} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>검토 질문</h3>
                <ul>
                  {checks.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" size={17} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="concept-redesign-cta">
            <div>
              <p className="section-label">Contact</p>
              <h2>초기 단계일수록 먼저 범위를 정리해야 합니다.</h2>
              <p>현재 보유한 도면, 공정 정보, 생산 계획을 기준으로 필요한 검토 범위를 안내합니다.</p>
            </div>
            <Link href="/contact" className="site-button">
              개념설계 문의하기
            </Link>
          </section>
        </div>
      </section>
    </PageLayout>
  );
}
