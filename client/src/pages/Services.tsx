import { ArrowUpRight, Building2, ClipboardCheck, FileCheck2 } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";

const serviceCards = [
  {
    icon: Building2,
    index: "01",
    label: "Conceptual Design",
    title: "개념설계",
    href: "/service-design",
    image: "./images/home/service-02.jpg",
    description:
      "초기 요구사항, 공간 구성, 동선, 유틸리티 조건을 검토해 실행 가능한 설계 방향을 정리합니다.",
    points: ["Layout & Zoning", "Personnel / Material Flow", "Utility Planning"],
  },
  {
    icon: ClipboardCheck,
    index: "02",
    label: "GMP Consulting",
    title: "GMP 컨설팅",
    href: "/service-gmp",
    image: "./images/home/service-01.jpg",
    description:
      "운영체계, 규정, 적격성평가, 실사 대응 범위를 프로젝트 목적에 맞춰 구조화합니다.",
    points: ["Project Master Plan", "QMS / SOP", "Qualification Review"],
  },
  {
    icon: FileCheck2,
    index: "03",
    label: "CSV Consulting",
    title: "CSV 컨설팅",
    href: "/service-csv",
    image: "./images/home/service-03.jpg",
    description:
      "규제 시스템의 검증 전략, 문서 패키지, 데이터 무결성 관리 기준을 연결합니다.",
    points: ["VMP / URS / FS / DS", "IQ / OQ / PQ / VSR", "Audit Trail Review"],
  },
];

const workSteps = [
  {
    title: "요구사항 정리",
    description: "프로젝트 목적, 규제 기준, 현장 조건을 먼저 확인합니다.",
  },
  {
    title: "범위 구조화",
    description: "설계, GMP, CSV가 충돌하지 않도록 수행 범위를 나눕니다.",
  },
  {
    title: "실행 기준 제안",
    description: "현장에서 바로 검토 가능한 문서와 기준으로 연결합니다.",
  },
  {
    title: "수행 지원",
    description: "일정, 산출물, 검토 의견을 프로젝트 단계에 맞춰 지원합니다.",
  },
];

export default function Services() {
  return (
    <PageLayout>
      <PageIntro
        label="Services"
        title="사업 단계에 맞는 GMP 프로젝트 수행 범위를 제안합니다."
        description="개념설계, GMP 컨설팅, CSV 컨설팅을 프로젝트 목적과 현장 조건에 맞춰 연결합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white">
        <PageSubNav
          breadcrumb={["홈", "사업안내"]}
          items={[
            { label: "사업안내", href: "/services" },
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <div className="site-shell service-page service-overview-page">
          <section className="service-overview-hero">
            <div className="service-overview-hero__copy">
              <p className="section-label">Business Guide</p>
              <h2>설계부터 검증까지, 한 흐름으로 보는 사업안내</h2>
              <p>
                INFACT는 제약·바이오 제조 환경에서 필요한 기획, 설계, GMP 운영체계,
                CSV 검증 문서를 분리된 업무가 아니라 하나의 프로젝트 흐름으로 검토합니다.
              </p>
            </div>

            <div className="service-overview-hero__panel" aria-label="사업안내 핵심 범위">
              <div>
                <span>Core Scope</span>
                <strong>Conceptual Design</strong>
              </div>
              <div>
                <span>Compliance</span>
                <strong>GMP Consulting</strong>
              </div>
              <div>
                <span>Validation</span>
                <strong>CSV Consulting</strong>
              </div>
            </div>
          </section>

          <section className="service-overview-services" aria-label="주요 서비스">
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="service-overview-card"
                  style={{ "--service-card-image": `url("${service.image}")` } as CSSProperties}
                >
                  <div className="service-overview-card__image" aria-hidden="true" />
                  <div className="service-overview-card__body">
                    <div className="service-overview-card__meta">
                      <span>{service.index}</span>
                      <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                    </div>
                    <p>{service.label}</p>
                    <h3>{service.title}</h3>
                    <strong>{service.description}</strong>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <span className="service-overview-card__cta">
                      자세히 보기
                      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.9} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </section>

          <section className="service-overview-process">
            <div className="service-overview-process__head">
              <p className="section-label">Work Flow</p>
              <h2>프로젝트 초기에 필요한 판단 기준을 먼저 세웁니다.</h2>
            </div>

            <div className="service-overview-process__grid">
              {workSteps.map((step, index) => (
                <article key={step.title} className="service-overview-process__item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="service-overview-cta">
            <div>
              <p className="section-label">Consulting Request</p>
              <h2>현재 프로젝트 단계에 맞는 검토 범위를 상담해보세요.</h2>
              <p>신규 시설, 증설, 리모델링, 시스템 검증 등 상황에 맞춰 필요한 업무 범위를 안내합니다.</p>
            </div>
            <Link href="/contact" className="site-button">
              문의하기
            </Link>
          </section>
        </div>
      </section>
    </PageLayout>
  );
}
