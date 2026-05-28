import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  GitBranch,
  Layers3,
  Ruler,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";

const quickStats = [
  { value: "01", label: "Project Definition" },
  { value: "02", label: "GMP Layout" },
  { value: "03", label: "Flow & Zoning" },
  { value: "04", label: "Utility Scope" },
];

const scopeCards = [
  {
    icon: Layers3,
    tag: "Layout",
    title: "공간 구성과 구역 계획",
    description:
      "제조, 보관, 세척, 지원 공간을 제품과 공정 흐름에 맞춰 배치하고 GMP 구역 기준을 정리합니다.",
    bullets: ["Room Program", "GMP Zoning", "Area Relationship"],
  },
  {
    icon: GitBranch,
    tag: "Flow",
    title: "인원·물류·폐기물 동선",
    description:
      "오염과 교차 흐름을 줄이기 위해 사람, 원자재, 완제품, 폐기물 이동 경로를 분리해 검토합니다.",
    bullets: ["Personnel Flow", "Material Flow", "Waste Flow"],
  },
  {
    icon: Factory,
    tag: "Facility",
    title: "장비와 유틸리티 조건",
    description:
      "주요 장비 배치, 반입 조건, HVAC·Clean Utility·전기·제어 범위를 초기 단계에서 확인합니다.",
    bullets: ["Equipment Arrangement", "HVAC", "Clean Utility"],
  },
  {
    icon: ShieldCheck,
    tag: "GMP",
    title: "규제 검토 기준",
    description:
      "상세설계 전에 검증과 운영에서 문제가 될 수 있는 요구사항을 먼저 드러내고 의사결정 기준을 세웁니다.",
    bullets: ["Compliance Review", "Risk Point", "Design Criteria"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "요구사항 수집",
    description: "제품, 생산량, 공정, 기존 도면, 운영 조건을 모아 프로젝트 전제를 정리합니다.",
    output: "요구사항 목록 / 검토 기준",
  },
  {
    step: "02",
    title: "공정·동선 분석",
    description: "제조 흐름과 인원·물류 동선을 나누고 교차 위험과 운영 병목을 확인합니다.",
    output: "Flow Diagram / 이슈 목록",
  },
  {
    step: "03",
    title: "Layout 방향 개발",
    description: "구역, 실 배치, 장비 위치, 유틸리티 조건을 반영해 실행 가능한 Layout을 구성합니다.",
    output: "Concept Layout / Zoning Plan",
  },
  {
    step: "04",
    title: "보고서 정리",
    description: "검토 근거와 의사결정 사항을 문서화해 다음 설계 단계로 넘길 기준을 만듭니다.",
    output: "Conceptual Design Report",
  },
];

const deliverables = [
  "Project Design Basis",
  "GMP Layout Direction",
  "Personnel / Material Flow",
  "Zoning & Area Program",
  "Utility Scope Summary",
  "Conceptual Design Report",
];

const checkpoints = [
  "작업자 동선과 물류 동선이 분리되는가",
  "청정도와 압력 차등 조건을 반영할 수 있는가",
  "장비 반입과 유지보수 공간이 확보되는가",
  "검증과 운영 문서로 이어질 기준이 명확한가",
];

export default function ServiceDesign() {
  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title="Conceptual Design / 개념설계"
        description="GMP 시설의 초기 요구사항, 공간 구성, 동선, 유틸리티 조건을 검토해 실행 가능한 설계 방향을 정리합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "개념설계"]}
          items={[
            { label: "사업안내", href: "/services" },
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <div className="site-shell service-page service-design-page">
          <section className="concept-design-hero">
            <div className="concept-design-hero__copy">
              <p className="section-label">Conceptual Design</p>
              <h2>상세설계 전에 필요한 판단 기준을 먼저 세웁니다.</h2>
              <p>
                개념설계는 도면을 그리기 전에 프로젝트의 전제와 GMP 운영 조건을 정리하는
                단계입니다. INFACT는 공간, 동선, 설비, 규제 기준을 함께 검토해 이후 설계와
                검증 단계에서 흔들리지 않는 기준을 만듭니다.
              </p>
              <div className="concept-design-hero__actions">
                <Link href="/contact" className="site-button">
                  프로젝트 문의하기
                </Link>
                <Link href="/references-design" className="concept-design-link">
                  수행실적 보기
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.9} />
                </Link>
              </div>
            </div>

            <div className="concept-design-hero__visual" aria-label="개념설계 핵심 검토 범위">
              <img src="./images/home/service-02.jpg" alt="GMP 시설 개념설계 검토 이미지" />
              <div className="concept-design-hero__overlay">
                <span>Design Criteria</span>
                <strong>Layout · Flow · Utility · GMP</strong>
              </div>
            </div>
          </section>

          <section className="concept-design-stats" aria-label="개념설계 검토 흐름">
            {quickStats.map((item) => (
              <div key={item.label}>
                <span>{item.value}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </section>

          <section className="concept-design-section">
            <div className="concept-design-section__head">
              <p className="section-label">Scope</p>
              <h2>초기 단계에서 놓치기 쉬운 설계 조건을 구조화합니다.</h2>
              <p>
                공간 배치만 따로 보지 않고 공정 흐름, 청정도, 작업자 운영, 장비 조건까지
                같이 확인해야 실제 설계와 시공 단계에서 변경을 줄일 수 있습니다.
              </p>
            </div>

            <div className="concept-design-scope">
              {scopeCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="concept-design-scope__card">
                    <div className="concept-design-scope__icon">
                      <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                    </div>
                    <span>{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="concept-design-process">
            <div className="concept-design-process__intro">
              <p className="section-label">Process</p>
              <h2>4단계로 설계 방향을 의사결정 가능한 문서로 바꿉니다.</h2>
            </div>

            <div className="concept-design-process__list">
              {processSteps.map((item) => (
                <article key={item.step} className="concept-design-process__item">
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <strong>{item.output}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="concept-design-board">
            <div className="concept-design-board__copy">
              <p className="section-label">Deliverables</p>
              <h2>다음 단계로 넘길 기준과 산출물을 명확히 남깁니다.</h2>
              <p>
                개념설계 산출물은 상세설계, GMP 검토, CSV 범위 정의의 출발점이 됩니다.
                그래서 보기 좋은 도면보다 의사결정 근거가 남는 문서를 우선합니다.
              </p>
            </div>

            <div className="concept-design-board__lists">
              <div>
                <Ruler aria-hidden="true" size={24} strokeWidth={1.8} />
                <h3>주요 산출물</h3>
                <ul>
                  {deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" size={17} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Workflow aria-hidden="true" size={24} strokeWidth={1.8} />
                <h3>검토 질문</h3>
                <ul>
                  {checkpoints.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" size={17} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="concept-design-cta">
            <div>
              <p className="section-label">Contact</p>
              <h2>초기 검토 단계라면 지금 범위를 정리하는 것이 가장 중요합니다.</h2>
              <p>
                신규 시설, 증설, 리모델링의 목적과 현장 조건을 기준으로 필요한 개념설계
                검토 범위를 안내합니다.
              </p>
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
