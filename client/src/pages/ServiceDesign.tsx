import { useEffect } from "react";
import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import { servicePages } from "@/content/siteContent";

type SectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

type SummaryItemProps = {
  number: string;
  title: string;
  description: string;
  className?: string;
};

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  input: string;
  output: string;
  className?: string;
};

type PrincipleProps = {
  number: string;
  title: string;
  description: string;
};

const heroScopes = ["Layout 개발", "제조 공정 분석", "시설 및 장비 검토"];

const trustStats = [
  { number: "3", unit: "대 축", label: "검토 범위" },
  { number: "4", unit: "단계", label: "수행 흐름" },
  { number: "4", unit: "개", label: "참여 역할" },
  { number: "2", unit: "종", label: "주요 산출물" },
];

const scopeItems = [
  {
    number: "01",
    title: "공간 구성",
    description: "작업실, 보관, 장비 배치의 기준 구조를 정리합니다.",
  },
  {
    number: "02",
    title: "동선 계획",
    description: "인원, 원자재, 폐기물 흐름을 분리해 검토합니다.",
  },
  {
    number: "03",
    title: "유틸리티 조건",
    description: "HVAC, Utility, 장비 반입 조건을 초기 범위에 반영합니다.",
  },
  {
    number: "04",
    title: "설계 산출물",
    description: "Layout 방향과 보고서 형태로 의사결정 자료를 제공합니다.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "기초 정보 수집",
    description: "질의서와 기존 자료를 바탕으로 요구사항과 제약 조건을 정리합니다.",
    input: "요구사항, 기존 도면, 생산 품목, 장비 조건",
    output: "프로젝트 조건 및 검토 기준 정리",
  },
  {
    number: "02",
    title: "Workshop 및 공정 분석",
    description: "워크숍을 통해 작업실 수, 장비 수, 공정 흐름을 검토합니다.",
    input: "공정 순서, 작업실 수, 인원·물류 흐름",
    output: "공정 흐름과 주요 설계 이슈 도출",
  },
  {
    number: "03",
    title: "Layout 개발",
    description: "인동선, 물동선, 폐기물 동선, 장비 반입 동선을 반영해 배치를 구성합니다.",
    input: "동선 분리 기준, 청정도, 장비 배치 조건",
    output: "개념 Layout 및 공간 구성안",
  },
  {
    number: "04",
    title: "최종 정리 및 제안",
    description: "개념설계 도면과 보고서로 실행 가능한 설계 방향을 제안합니다.",
    input: "Workshop 피드백, 검토 의견, 조정 사항",
    output: "최종 Layout 방향 및 보고서",
  },
];

const teamRoles = [
  {
    role: "프로젝트 책임자",
    name: "김영석 부사장",
    years: "32",
    description: "일정, 범위, 의사결정 기준을 총괄합니다.",
  },
  {
    role: "Layout 개발",
    name: "김경환 이사",
    years: "22",
    description: "무균 Lay-out 개발과 작업실 배치를 검토합니다.",
  },
  {
    role: "제조 공정 분석",
    name: "김영석 부사장",
    years: "32",
    description: "무균공정분석과 CCS 관점을 설계에 반영합니다.",
  },
  {
    role: "시설 및 장비 검토",
    name: "권의종 전무",
    years: "34",
    description: "무균장비, 충전장비, 클린장비 조건을 검토합니다.",
  },
];

const principles = [
  {
    number: "01",
    title: "운영 동선이 실제 현장 흐름과 충돌하지 않는가",
    description: "작업자 이동, 원자재 반입, 폐기물 배출 흐름이 GMP 운영 기준 안에서 분리되는지 확인합니다.",
  },
  {
    number: "02",
    title: "공정 효율이 배치와 장비 관계에 반영되는가",
    description: "작업실 수, 장비 배치, 물류 흐름이 생산 효율과 유지관리 편의성으로 이어지는지 검토합니다.",
  },
  {
    number: "03",
    title: "GMP 환경 조건이 초기 단계부터 고려되는가",
    description: "청정도, 차압, 유틸리티, 장비 반입 조건을 초기 Layout 판단 단계에서 함께 반영합니다.",
  },
];

function DesignSection({ eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section className={`concept-section fade-up ${className ?? ""}`}>
      <div className="concept-section__head">
        <p className="section-label">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function ScopeItem({ number, title, description, className }: SummaryItemProps) {
  return (
    <div className={`concept-scope-list__item ${className ?? ""}`}>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description, input, output, className }: ProcessStepProps) {
  return (
    <div className={`concept-process__step ${className ?? ""}`}>
      <div className="concept-process__badge">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <dl className="concept-process__meta">
        <div>
          <dt>Input</dt>
          <dd>{input}</dd>
        </div>
        <div>
          <dt>Output</dt>
          <dd>{output}</dd>
        </div>
      </dl>
    </div>
  );
}

function PrincipleItem({ number, title, description }: PrincipleProps) {
  return (
    <article className="concept-principle">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function TrustBand() {
  return (
    <div className="concept-trust-band">
      {trustStats.map((stat, i) => (
        <div key={i} className="concept-trust-band__item">
          <p className="concept-trust-band__number">
            {stat.number}
            <span>{stat.unit}</span>
          </p>
          <p className="concept-trust-band__label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function ServiceDesign() {
  useScrollAnimation();
  const content = servicePages.design;

  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title={content.title}
        description="초기 요구사항과 GMP 운영 조건을 구조화해 실행 가능한 설계 방향을 제안합니다."
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
          <section className="concept-hero">
            <div className="concept-hero__copy">
              <p className="section-label">Conceptual Design</p>
              <h2>Conceptual Design / 개념설계</h2>
              <p className="concept-hero__lead">
                초기 요구사항, 공간 구성, 동선과 유틸리티 조건을 구조화해 실행 가능한 설계 방향을 제안합니다.
              </p>
              <p className="concept-hero__text">
                신규 제조소, 증설, 리모델링 초기 단계에서 프로젝트 목적과 규제 환경을 함께 확인하고,
                설계 의사결정에 필요한 기준을 정리합니다.
              </p>
            </div>

            <div className="concept-hero__scope" aria-label="개념설계 서비스 범위">
              {heroScopes.map((scope, index) => (
                <div key={scope}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{scope}</strong>
                </div>
              ))}
            </div>
          </section>

          <div className="fade-up">
            <TrustBand />
          </div>

          <DesignSection
            eyebrow="Service Scope"
            title="초기 설계 판단에 필요한 범위를 구조화합니다."
            description="개념설계는 도면을 그리기 전에 프로젝트의 조건과 운영 기준을 명확히 하는 단계입니다."
          >
            <div className="concept-scope-detail">
              <div className="concept-scope-detail__intro">
                <strong>Scope Framework</strong>
                <h3>공간, 동선, 설비 조건을 하나의 설계 기준으로 묶습니다.</h3>
                <p>
                  초기 단계에서 결정해야 할 핵심 범위를 네 가지로 나누고,
                  이후 설계와 의사결정에 필요한 기준을 먼저 정리합니다.
                </p>
              </div>
              <div className="concept-scope-list">
              {scopeItems.map((item, i) => (
                <ScopeItem key={item.title} {...item} className={`fade-up fade-up--d${i + 1}`} />
              ))}
              </div>
            </div>
          </DesignSection>

          <DesignSection
            eyebrow="How We Work"
            title="4단계로 요구사항을 설계 방향으로 바꿉니다."
            description="자료 수집부터 Workshop, 공정 분석, Layout 제안까지 필요한 흐름만 간결하게 운영합니다."
          >
            <div className="concept-process">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.number} {...step} className={`fade-up fade-up--d${i + 1}`} />
              ))}
            </div>
          </DesignSection>

          <DesignSection
            eyebrow="Project Team Structure"
            title="역할 중심으로 프로젝트 수행 구조를 구성합니다."
            description="각 분야의 판단 역할을 분리해 초기 설계 이슈를 빠르게 정리합니다."
            className="concept-section--tinted"
          >
            <div className="concept-team">
              {teamRoles.map((item) => (
                <article key={item.role} className="concept-team__role">
                  <div className="concept-team__role-head">
                    <span>Role</span>
                    <h3>{item.role}</h3>
                  </div>
                  <p className="concept-team__desc">{item.description}</p>
                  <div className="concept-team__meta">
                    <strong>{item.name}</strong>
                    <span>경력 {item.years}년</span>
                  </div>
                </article>
              ))}
            </div>
          </DesignSection>

          <DesignSection
            eyebrow="Why INFACT"
            title="개념설계 판단 질문"
            description="초기 설계 단계에서 놓치기 쉬운 운영, 공정, GMP 조건을 질문 형태로 확인합니다."
          >
            <div className="concept-principles">
              {principles.map((item) => (
                <PrincipleItem key={item.number} {...item} />
              ))}
            </div>
          </DesignSection>

          <section className="concept-cta fade-up">
            <div>
              <p className="section-label">Contact</p>
              <h2>귀사 프로젝트에 필요한 개념설계 범위를 상담해보세요</h2>
              <p>신축, 증설, 리모델링 초기 단계에서 필요한 검토 범위를 안내합니다.</p>
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
