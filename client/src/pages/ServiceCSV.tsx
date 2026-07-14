import {
  ServiceContact,
  ServiceOverview,
  ServiceSectionHeader,
} from "@/components/site/ServiceBusinessLayout";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { PageSubNav } from "@/components/site/PageSubNav";
import "@/styles/pages/service-business-layout.css";
import "@/styles/pages/service-csv-page.css";

const lifecycleColumns = [
  {
    title: "계획",
    items: [
      ["Validation Plan", "범위, 책임, 일정 및 검증 전략 정의"],
      ["System Assessment", "규제 영향도와 시스템 분류 평가"],
    ],
  },
  {
    title: "요구",
    items: [
      ["URS", "업무 및 규제 요구사항 정의"],
      ["Data Integrity", "데이터 흐름과 통제 요구 확인"],
    ],
  },
  {
    title: "설계",
    items: [
      ["F&DS / DDS", "기능 및 설계 규격 검토"],
      ["DQ", "요구사항 대비 설계 적합성 검토"],
    ],
  },
  {
    title: "위험",
    items: [
      ["FRA", "기능 위험과 경감 방안 도출"],
      ["Supplier Review", "공급자 문서와 시험 활용성 평가"],
    ],
  },
  {
    title: "검증",
    items: [
      ["IQ / OQ / PQ", "설치·운전·성능 검증"],
      ["Deviation", "시험 이슈와 조치 결과 추적"],
    ],
  },
  {
    title: "종결",
    items: [
      ["RTM", "요구사항 추적성 확인"],
      ["VSR", "최종 검증 결과와 운영 전환"],
    ],
  },
];

const frameworkDescriptions = [
  ["01", "Business Framework", "시스템 검증 전략, 범위, 역할과 책임, 일정 및 산출물 계획을 수립합니다."],
  ["02", "Design Framework", "사용자 요구사항과 설계 적합성을 검토하고 기능 위험 및 경감 방안을 도출합니다."],
  ["03", "Implementation Framework", "설치·운전·성능, 기능, SOP, 교육 및 운영 준비상태를 계획에 따라 검증합니다."],
  ["04", "On-going Framework", "변경관리, 일탈, 정기평가 및 운영 교육을 통해 검증 상태를 유지합니다."],
];

const businessFrameworkRows = [
  {
    phase: "01",
    stepKo: "현황 파악",
    stepEn: "Discover",
    purpose: "시스템과 업무 맥락을 먼저 정의합니다.",
    details: [
      ["System Inventory", "시스템명, 사용부서, 설치 위치, 운영 목적, 인터페이스와 데이터 흐름을 정리합니다."],
      ["System Context", "하드웨어·소프트웨어 구성, 주요 기능, 사용자 역할과 운영 환경을 확인합니다."],
    ],
    deliverable: "System Profile / Inventory",
  },
  {
    phase: "02",
    stepKo: "영향도 분류",
    stepEn: "Classify",
    purpose: "검증 깊이를 결정할 기준을 설정합니다.",
    details: [
      ["GxP Impact", "환자 안전, 제품 품질, 데이터 무결성에 미치는 영향을 기준으로 GxP 영향도를 평가합니다."],
      ["Complexity & Supplier", "시스템 유형, 구성 복잡도, 공급자 역량과 활용 가능한 공급자 문서를 함께 검토합니다."],
    ],
    deliverable: "System Assessment",
  },
  {
    phase: "03",
    stepKo: "통제 설계",
    stepEn: "Control",
    purpose: "규정 요구와 현재 상태의 차이를 구조화합니다.",
    details: [
      ["Data Integrity Controls", "권한, 감사추적, 전자서명, 백업·복구, 데이터 전송과 보존 통제를 점검합니다."],
      ["Gap & Risk", "규정 요구사항과 현재 상태의 차이, 주요 기능 위험과 필요한 경감조치를 도출합니다."],
    ],
    deliverable: "Risk & Gap Assessment",
  },
  {
    phase: "04",
    stepKo: "검증 실행",
    stepEn: "Validate",
    purpose: "요구사항부터 시험 증적까지 추적성을 확보합니다.",
    details: [
      ["Validation Strategy", "VP, URS, 설계문서, 위험평가와 시험 범위를 프로젝트 특성에 맞게 정의합니다."],
      ["Verification & Traceability", "IQ/OQ/PQ와 요구사항 추적성을 연결하고 일탈 및 시험 결과를 종결합니다."],
    ],
    deliverable: "Validation Package / RTM / VSR",
  },
  {
    phase: "05",
    stepKo: "상태 유지",
    stepEn: "Sustain",
    purpose: "가동 이후에도 Validated State를 유지합니다.",
    details: [
      ["Operational Control", "변경관리, 일탈, 접근권한, 백업·복구, 사고 대응과 교육을 운영 절차에 반영합니다."],
      ["Periodic Evaluation", "기능, 변경이력, 문제·일탈, 보안, 신뢰성 및 검증 상태를 주기적으로 재평가합니다."],
    ],
    deliverable: "Periodic Review / Change Records",
  },
];

export default function ServiceCSV() {
  return (
    <PageLayout>
      <PageIntro
        label="Service"
        title="CSV 컨설팅"
        description="전산 시스템의 운영 목적과 규제 요구사항을 연결해 검증 범위와 문서 체계를 수립합니다."
        image="./images/sub/business.jpg"
      />

      <section className="section section--white service-business-page service-csv-page">
        <PageSubNav
          breadcrumb={["홈", "사업안내", "CSV 컨설팅"]}
          items={[
            { label: "개념설계", href: "/service-design" },
            { label: "GMP 컨설팅", href: "/service-gmp" },
            { label: "CSV 컨설팅", href: "/service-csv" },
          ]}
        />

        <section className="service-business-section service-business-section--white csv-framework-section">
          <div className="site-shell">
            <ServiceSectionHeader
              index="01"
              label="Validation Framework"
              title="GAMP 5 V-Model 기반 수행 체계"
              description="검증 전략, 설계 검토, 구현 검증 및 운영단계 유지관리를 하나의 구조로 연결하여 요구사항과 시험 결과의 추적성을 확보합니다."
              compact
            />

            <figure className="csv-vmodel">
              <img
                src="./images/service/csv-validation-v-model.png"
                alt="Business, Design, Implementation, On-going Framework가 적용된 CSV V-Model"
              />
            </figure>

            <div className="service-business-flow-list csv-framework-description">
              {frameworkDescriptions.map(([number, title, description]) => (
                <div key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceOverview
          eyebrow="02 · CSV Consulting"
          title="시스템 요구사항부터 시험 증적까지 추적성을 연결합니다."
          description="CSV Consulting은 전산 시스템의 운영 목적과 규제 요구사항을 연결해 검증 범위와 문서 패키지를 정리하는 서비스입니다."
          pillars={[
            { number: "01", title: "대상 시스템" },
            { number: "02", title: "진행 흐름" },
            { number: "03", title: "산출물" },
          ]}
        />

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="03"
              label="Overview"
              title="규제 요구와 실제 운영을 연결하는 CSV"
              description="형식적인 문서 작성이 아니라 업무 프로세스, 시스템 기능, 데이터 흐름과 운영 절차를 함께 검토하여 검증 가능한 운영체계를 구축합니다."
            />

            <div className="service-business-table">
              <div className="service-business-table__row">
                <strong>서비스 목적</strong>
                <p>품질과 안전성 보증, 국내외 규정 요구사항 충족, 시스템의 적격성과 신뢰성을 입증할 수 있는 문서화된 증적 확보</p>
              </div>
              <div className="service-business-table__row">
                <strong>적용 기준</strong>
                <p>GAMP 5, KGMP, cGMP, EU GMP, PIC/S, Data Integrity 및 고객사 내부 품질시스템</p>
              </div>
              <div className="service-business-table__row">
                <strong>수행 범위</strong>
                <p>검증 전략 수립, 요구사항 및 설계 검토, 위험평가, IQ/OQ/PQ, 추적성 관리, 최종 보고 및 운영단계 지원</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--soft">
          <div className="site-shell">
            <ServiceSectionHeader
              index="04"
              label="CSV Lifecycle"
              title="컴퓨터화 시스템 밸리데이션 생애주기"
              description="컴퓨터화 시스템의 전 생애주기 동안 규정, 업무 목적, 시스템 기능 및 데이터 무결성을 연결하여 검증 활동을 관리합니다."
            />

            <div className="csv-lifecycle-grid">
              {lifecycleColumns.map((column) => (
                <div key={column.title} className="csv-lifecycle-column">
                  <h3>{column.title}</h3>
                  {column.items.map(([title, description]) => (
                    <div key={title} className="csv-lifecycle-item">
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="05"
              label="Service Scope"
              title="서비스 영역"
              description="전사, 품질, 실험실, 제조, 물류, 현장 자동화 및 IT 기반시설을 대상으로 CSV와 적격성평가를 수행합니다."
            />

            <div className="csv-scope-grid">
              <article className="csv-scope-card">
                <span>01</span>
                <h3>경영·품질 시스템</h3>
                <p>ERP, MRP, QMS, EDMS, PLM, Training, Change Control, Deviation, CAPA</p>
              </article>
              <article className="csv-scope-card">
                <span>02</span>
                <h3>실험실 시스템</h3>
                <p>LIMS, ELN, LAS, CDS, SDMS, 시험장비 인터페이스 및 데이터 무결성</p>
              </article>
              <article className="csv-scope-card">
                <span>03</span>
                <h3>제조·물류 시스템</h3>
                <p>MES, SCADA, WMS, DPS, RWS, 포장·인쇄·일련번호 시스템</p>
              </article>
              <article className="csv-scope-card">
                <span>04</span>
                <h3>IT 기반시설</h3>
                <p>서버, 네트워크, 가상화, 백업·복구, 이중화, 계정 및 접근권한</p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--soft">
          <div className="site-shell">
            <ServiceSectionHeader
              index="06"
              label="Framework"
              title="Risk-Based CSV Governance Framework"
              description="시스템 인벤토리와 업무 맥락을 출발점으로 GxP 영향도, 데이터 무결성, 위험 기반 검증, 운영단계 유지관리까지 하나의 흐름으로 연결합니다."
            />

            <div className="csv-framework-roadmap">
              <div className="csv-framework-roadmap__head" aria-hidden="true">
                <span>단계</span>
                <span>핵심 검토·수행 내용</span>
                <span>대표 산출물</span>
              </div>

              <div className="csv-framework-roadmap__body">
                {businessFrameworkRows.map((row) => (
                  <article key={row.stepEn} className="csv-framework-roadmap__stage">
                    <div className="csv-framework-roadmap__phase">
                      <span className="csv-framework-roadmap__phase-no">{row.phase}</span>
                      <div>
                        <strong>{row.stepKo}</strong>
                        <em>{row.stepEn}</em>
                      </div>
                    </div>

                    <div className="csv-framework-roadmap__content">
                      <div className="csv-framework-roadmap__purpose">{row.purpose}</div>

                      <div className="csv-framework-roadmap__details">
                        {row.details.map(([title, description]) => (
                          <div key={title} className="csv-framework-roadmap__detail">
                            <strong>{title}</strong>
                            <p>{description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="csv-framework-roadmap__output">
                      <strong>{row.deliverable}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="service-business-section service-business-section--white">
          <div className="site-shell">
            <ServiceSectionHeader
              index="07"
              label="Deliverables"
              title="주요 수행 산출물"
              description="프로젝트 범위와 책임분담에 따라 필요한 계획서, 규격서, 평가서, 시험문서 및 결과보고서를 작성합니다."
            />

            <div className="csv-deliverables-matrix">
              <div className="csv-deliverables-matrix__head">
                <div>단계</div>
                <div>주요 산출물</div>
                <div>문서 목적</div>
              </div>

              <div className="csv-deliverables-matrix__row">
                <div className="csv-deliverables-matrix__phase">
                  <span>01</span>
                  <strong>계획</strong>
                </div>
                <div className="csv-deliverables-matrix__docs">
                  <strong>Validation Plan</strong>
                  <strong>System Assessment</strong>
                </div>
                <div className="csv-deliverables-matrix__purpose">
                  검증 범위, 책임, 일정, 시스템 영향도와 전체 수행 전략을 정의합니다.
                </div>
              </div>

              <div className="csv-deliverables-matrix__row">
                <div className="csv-deliverables-matrix__phase">
                  <span>02</span>
                  <strong>요구·설계</strong>
                </div>
                <div className="csv-deliverables-matrix__docs">
                  <strong>User Requirements Specification</strong>
                  <strong>Functional / Design Specification Review</strong>
                  <strong>Design Qualification</strong>
                </div>
                <div className="csv-deliverables-matrix__purpose">
                  사용자 요구사항과 시스템 설계의 적합성을 확인하고 검증 기준선을 수립합니다.
                </div>
              </div>

              <div className="csv-deliverables-matrix__row">
                <div className="csv-deliverables-matrix__phase">
                  <span>03</span>
                  <strong>위험평가</strong>
                </div>
                <div className="csv-deliverables-matrix__docs">
                  <strong>Functional Risk Assessment</strong>
                  <strong>Data Integrity / Gap Assessment</strong>
                </div>
                <div className="csv-deliverables-matrix__purpose">
                  GxP 영향과 기능 위험, 데이터 무결성 통제를 평가해 시험 범위와 경감조치를 결정합니다.
                </div>
              </div>

              <div className="csv-deliverables-matrix__row">
                <div className="csv-deliverables-matrix__phase">
                  <span>04</span>
                  <strong>검증</strong>
                </div>
                <div className="csv-deliverables-matrix__docs">
                  <strong>Installation Qualification</strong>
                  <strong>Operational Qualification</strong>
                  <strong>Performance Qualification</strong>
                </div>
                <div className="csv-deliverables-matrix__purpose">
                  설치, 기능, 운전 및 실제 사용조건에서 시스템이 의도대로 동작함을 시험하고 증적화합니다.
                </div>
              </div>

              <div className="csv-deliverables-matrix__row">
                <div className="csv-deliverables-matrix__phase">
                  <span>05</span>
                  <strong>종결·유지</strong>
                </div>
                <div className="csv-deliverables-matrix__docs">
                  <strong>Requirements Traceability Matrix</strong>
                  <strong>Validation Summary Report</strong>
                  <strong>Periodic Review / Change Records</strong>
                </div>
                <div className="csv-deliverables-matrix__purpose">
                  요구사항과 시험 결과의 추적성을 확인하고 최종 검증 상태와 운영단계 유지관리 체계를 정리합니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceContact
          buttonLabel="프로젝트 문의하기"
          title={
            <>
              시스템 도입부터 운영까지
              <br />
              검증 기준을 먼저 정리합니다.
            </>
          }
          description={
            <>
              대상 시스템의 GxP 영향도와 현재 운영 상태를 기준으로
              <br />
              필요한 CSV 범위, 문서 패키지와 수행 순서를 함께 정리합니다.
            </>
          }
        />
      </section>
    </PageLayout>
  );
}
