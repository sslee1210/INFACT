import { ServiceSectionHeader } from "@/components/site/ServiceBusinessLayout";

const projectInputs = [
  {
    title: "제품 및 생산계획",
    description:
      "시설 규모와 공정별 처리용량을 결정하기 위해 제품 특성과 생산 목표를 확인합니다.",
    items: ["제품 유형 및 제형", "Batch Size와 생산량", "생산주기와 증설계획"],
  },
  {
    title: "제조공정",
    description:
      "작업실의 구성과 공정 간 인접성을 검토하기 위해 실제 제조 흐름을 정리합니다.",
    items: ["공정 순서와 작업시간", "공정별 입·출력 물질", "세척과 공정 대기조건"],
  },
  {
    title: "장비",
    description:
      "장비 배치뿐 아니라 작업, 반입과 유지보수에 필요한 공간까지 함께 검토합니다.",
    items: ["주요 장비와 수량", "장비 크기와 작업공간", "반입·정비 조건"],
  },
  {
    title: "인원 및 물류",
    description:
      "작업자와 자재, 제품, 폐기물의 흐름을 구분해 운영 가능한 동선을 계획합니다.",
    items: ["작업인원과 교대형태", "원자재·반제품·완제품 흐름", "폐기물과 장비 이동경로"],
  },
  {
    title: "환경 및 유틸리티",
    description:
      "제품과 공정에 필요한 환경조건을 HVAC와 주요 지원설비의 설계 기준으로 전환합니다.",
    items: ["청정도와 차압조건", "온·습도와 환경관리", "용수·가스·전기·배기·Drain"],
  },
] as const;

const designAreas = [
  {
    title: "시설 규모와 배치",
    description:
      "생산량, 장비, 창고와 지원시설을 반영해 필요한 시설 규모와 대지 내 배치 방향을 설정합니다.",
    output: "Facility Size · Site Plan",
  },
  {
    title: "공정과 작업실 구성",
    description:
      "제조공정 순서에 따라 작업실과 지원실을 구성하고 장비 배치와 작업공간을 검토합니다.",
    output: "GMP Layout · Room List",
  },
  {
    title: "인원·자재·제품 동선",
    description:
      "작업자, 원자재, 반제품, 완제품과 폐기물의 흐름을 분리하고 교차 가능성을 검토합니다.",
    output: "Personnel · Material · Waste Flow",
  },
  {
    title: "청정구역과 차압",
    description:
      "제품과 공정 특성에 따라 청정등급, 구역구분, Air Lock과 실간 차압 방향을 설정합니다.",
    output: "Zoning · Pressure Concept",
  },
  {
    title: "유틸리티와 Drain",
    description:
      "공정별 사용점을 기준으로 제약용수, 가스, 전기, 배기, 세척 및 배수 조건을 정리합니다.",
    output: "Utility Point · Drain Concept",
  },
  {
    title: "보관과 운영·유지보수",
    description:
      "자재와 제품의 보관조건, 장비 반입·정비공간, 작업자 접근성과 향후 확장성을 검토합니다.",
    output: "Storage · Operation Strategy",
  },
] as const;

const designProcess = [
  {
    title: "프로젝트 정의",
    description: "목표와 범위, 일정, 사용자 요구사항을 확인합니다.",
    output: "Project Brief · 요구사항 목록",
  },
  {
    title: "공정·장비 분석",
    description: "제조공정, 생산량, 주요 장비와 운영조건을 정리합니다.",
    output: "Process Flow · Equipment List",
  },
  {
    title: "공간·동선 계획",
    description: "작업실 구성, 장비 배치와 인원·물류 동선을 설계합니다.",
    output: "Block Layout · GMP Flow",
  },
  {
    title: "GMP·유틸리티 검토",
    description: "청정구역, 차압, 오염관리와 유틸리티 조건을 연결합니다.",
    output: "Zoning · Pressure · Utility Concept",
  },
  {
    title: "설계 기준 확정",
    description: "검토 결과를 도면과 요구사항, 보고서로 정리합니다.",
    output: "Conceptual Design Package",
  },
] as const;

const projectBenefits = [
  {
    title: "상세설계 기준 명확화",
    description: "합의된 공간, 동선과 기술조건을 기준으로 후속 설계를 시작합니다.",
  },
  {
    title: "변경과 재작업 최소화",
    description: "초기 단계에서 주요 쟁점을 확인해 설계 변경 가능성을 줄입니다.",
  },
  {
    title: "부서 간 의사결정 통일",
    description: "생산, 품질, 공무와 설계사가 같은 기준으로 프로젝트를 검토합니다.",
  },
  {
    title: "Validation 연계 기반",
    description: "후속 DQ, Qualification과 Validation에 필요한 설계 근거를 확보합니다.",
  },
] as const;

export function ConceptualDesignDetails() {
  return (
    <>
      <section className="service-business-section service-business-section--white design-detail-section">
        <div className="site-shell">
          <ServiceSectionHeader
            index="03"
            label="Project Input"
            title="설계 전에 먼저 확인하는 정보"
            description="제품과 제조공정, 생산계획과 운영조건을 확인해 시설 규모와 레이아웃 검토의 출발점을 설정합니다."
          />

          <div className="design-input-ledger">
            {projectInputs.map((input) => (
              <article key={input.title} className="design-input-ledger__row">
                <h3>{input.title}</h3>
                <div className="design-input-ledger__content">
                  <p>{input.description}</p>
                  <ul>
                    {input.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-business-section service-business-section--soft design-detail-section">
        <div className="site-shell">
          <ServiceSectionHeader
            index="04"
            label="Design Scope"
            title="공정과 GMP 요구사항을 공간 기준으로 전환합니다."
            description="프로젝트의 의사결정을 좌우하는 여섯 가지 설계영역을 통합해 검토합니다."
          />

          <div className="design-scope-grid">
            {designAreas.map((area) => (
              <article key={area.title} className="design-scope-item">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <strong>{area.output}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-business-section service-business-section--white design-detail-section">
        <div className="site-shell">
          <ServiceSectionHeader
            index="05"
            label="Process"
            title="필요한 정보를 단계별 설계 기준으로 발전시킵니다."
            description="프로젝트 정의부터 최종 설계 기준 확정까지 각 단계의 검토 결과와 산출물이 다음 단계의 입력으로 연결됩니다."
          />

          <ol className="design-process-flow">
            {designProcess.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="design-process-flow__output">
                  <small>단계 결과</small>
                  <strong>{step.output}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-business-section service-business-section--soft design-detail-section design-benefit-section">
        <div className="site-shell design-benefits">
          <div className="design-benefits__heading">
            <p className="section-label">06 · Project Value</p>
            <h2>초기 의사결정의 품질이 프로젝트 전체를 좌우합니다.</h2>
            <p>
              개념설계는 도면을 만드는 단계가 아니라 후속 설계와 구축, 검증의
              기준을 합의하는 과정입니다.
            </p>
          </div>

          <div className="design-benefits__list">
            {projectBenefits.map((benefit) => (
              <article key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
