const inputDataRows = [
  {
    category: "제품 및 생산계획",
    items: "제품군, 제형, 연간 생산량, Batch Size, 생산주기",
    purpose: "시설 규모와 공정별 처리용량 산정",
  },
  {
    category: "제조공정",
    items: "공정 흐름도, 공정별 작업시간, 대기시간, 공정 간 이동조건",
    purpose: "작업실 구성과 공정 인접성 검토",
  },
  {
    category: "주요 장비",
    items: "장비명, 수량, 외형치수, 유지보수 공간, 반입경로",
    purpose: "장비 배치와 작업·정비 공간 검토",
  },
  {
    category: "인원 및 운영",
    items: "근무인원, 교대형태, 작업자 구분, 방문자 및 유지보수 인력",
    purpose: "갱의·전실·작업자 동선 계획",
  },
  {
    category: "원자재 및 물류",
    items: "원자재·부자재 종류, 입고량, 보관조건, 공정별 이동단위",
    purpose: "창고 규모와 자재 동선 계획",
  },
  {
    category: "폐기물 및 배수",
    items: "폐기물 종류, 발생량, 배출주기, 세척수 및 폐수 발생조건",
    purpose: "폐기물 동선과 Drain 계획",
  },
  {
    category: "환경 및 유틸리티",
    items: "청정등급, 온·습도, 차압, 전기, 용수, 압축공기, 배기",
    purpose: "HVAC 및 Process Utility 요구조건 정리",
  },
];

const processRows = [
  {
    step: "원자재 입고·보관",
    equipment: "Pallet, Rack, Refrigerator",
    capacity: "일/주간 입고량 및 최대 보관량",
    flow: "입고 → 검수 → 격리 → 승인보관",
    support: "온·습도, 냉장, 방충·방서, 자재 식별",
  },
  {
    step: "칭량·분주",
    equipment: "Dispensing Booth, Balance",
    capacity: "Batch별 칭량량 및 동시 작업건수",
    flow: "승인 원자재 → 칭량 → 공정대기",
    support: "집진, 국소배기, 차압, 세척",
  },
  {
    step: "조제·혼합",
    equipment: "Mixer, Vessel, Tank",
    capacity: "Batch Size 및 일일 생산 Batch",
    flow: "칭량품 → 투입 → 혼합 → 이송",
    support: "PW/WFI, Steam, CIP/SIP, 배수",
  },
  {
    step: "충전·포장",
    equipment: "Filling Machine, Packaging Line",
    capacity: "시간당 처리량 및 Line Balance",
    flow: "반제품 → 충전 → 검사 → 포장",
    support: "압축공기, 진공, 전기, 청정환경",
  },
  {
    step: "완제품 보관·출하",
    equipment: "Rack, Cold Storage, Dock",
    capacity: "출하주기와 최대 재고량",
    flow: "포장완료 → 격리 → 승인 → 출하",
    support: "온·습도, 냉장, 출입통제, 동선분리",
  },
];

const roomRows = [
  {
    room: "원자재 창고",
    activity: "입고, 검수, 격리 및 승인보관",
    equipment: "Rack, Pallet, Refrigerator",
    grade: "CNC / 관리구역",
    pressure: "외부 대비 양압 또는 중립",
    utility: "전기, 냉장, 온·습도 모니터링",
    point: "격리·승인·부적합 자재의 물리적 또는 전산적 구분",
  },
  {
    room: "칭량실",
    activity: "원자재 개봉, 칭량 및 분주",
    equipment: "Dispensing Booth, Balance",
    grade: "공정 요구등급",
    pressure: "주변실 대비 음압 또는 국소배기",
    utility: "전기, 집진, 배기, 세척수",
    point: "교차오염 방지와 칭량품·잔량 자재의 분리",
  },
  {
    room: "조제실",
    activity: "원료 투입, 용해, 혼합 및 이송",
    equipment: "Vessel, Mixer, Pump",
    grade: "제품·공정 위험도에 따라 설정",
    pressure: "인접 구역과 차압구배 유지",
    utility: "PW/WFI, Steam, 압축공기, Drain",
    point: "장비 정비공간, 세척성, 배관 접근성과 반제품 이동",
  },
  {
    room: "충전실",
    activity: "반제품 충전, 밀봉 및 공정중검사",
    equipment: "Filler, Capping/Sealing Machine",
    grade: "무균/비무균 공정조건에 따라 설정",
    pressure: "청정도 순차에 따른 양압구배",
    utility: "전기, 압축공기, 진공, HVAC",
    point: "작업자 개입 최소화, 자재 투입과 제품 배출 분리",
  },
  {
    room: "포장실",
    activity: "라벨링, 1·2차 포장 및 검사",
    equipment: "Labeler, Cartoner, Vision System",
    grade: "CNC / 관리구역",
    pressure: "중립 또는 인접실 기준",
    utility: "전기, 압축공기, Data Network",
    point: "혼입·혼선 방지, Line Clearance 및 포장자재 관리",
  },
  {
    room: "세척실",
    activity: "이동식 기구와 부품 세척·건조",
    equipment: "Washer, Sink, Drying Cabinet",
    grade: "공정 요구등급",
    pressure: "오염구역에서 청정구역 방향 역류 방지",
    utility: "PW/WFI, Hot Water, Steam, Drain",
    point: "세척 전·후 기구 동선과 보관구역 분리",
  },
];

const reviewMatrix = [
  {
    area: "Facility Size & Site Plan",
    review: "생산량, 장비, 창고, 지원시설을 반영한 면적과 대지 내 배치 검토",
    criteria: "증설 가능성, 물류 접근성, 유틸리티 공급, 비상동선",
    output: "시설 규모 산정표, Site 배치안",
  },
  {
    area: "GMP Layout",
    review: "공정 순서와 구역별 기능을 반영한 작업실 및 지원실 배치",
    criteria: "공정 인접성, 오염방지, 운영효율, 유지보수 접근성",
    output: "GMP Layout, Room List",
  },
  {
    area: "Personnel / Material Flow",
    review: "작업자, 원자재, 반제품, 완제품의 이동경로 검토",
    criteria: "교차동선 최소화, 입·출구 분리, 전실 및 에어락",
    output: "인동선·물동선 계획도",
  },
  {
    area: "Waste / Equipment Flow",
    review: "폐기물 배출과 장비 반입·반출 및 정비경로 검토",
    criteria: "청정동선과 분리, 외부 반출 접근성, 유지보수성",
    output: "폐기물·장비 동선 계획도",
  },
  {
    area: "Cleanroom & Pressure",
    review: "청정등급, 구역구분, 실간 차압과 Air Lock 구성 검토",
    criteria: "제품 보호, 작업자 보호, 오염원 확산방지",
    output: "청정등급도, Zone 및 차압 계획",
  },
  {
    area: "Process Utility & Drain",
    review: "공정별 유틸리티 사용점과 세척·배수 요구조건 검토",
    criteria: "사용량, 품질등급, 접근성, 교차연결 및 역류 방지",
    output: "Utility Point List, Drain Plan",
  },
  {
    area: "Storage Strategy",
    review: "원자재, 포장자재, 반제품, 완제품과 부적합품 보관계획",
    criteria: "상태별 구분, 보관조건, 재고회전, 냉장·냉동 요구",
    output: "보관구역 및 용량계획",
  },
];

const deliverables = [
  {
    group: "시설·배치",
    items: ["Facility Size 산정", "Site Plan", "GMP Layout", "Equipment Layout"],
  },
  {
    group: "구역·환경",
    items: ["Room List", "청정등급 계획", "Zone Division", "차압 및 Air Lock 계획"],
  },
  {
    group: "동선·물류",
    items: ["Personnel Flow", "Material Flow", "Waste Flow", "Equipment In/Out Flow"],
  },
  {
    group: "공정·설비",
    items: ["Process Analysis Sheet", "Room Design Requirement", "Utility Point List", "Drain Plan"],
  },
  {
    group: "보관·운영",
    items: ["원자재 보관계획", "반제품 보관계획", "완제품 보관계획", "운영조건 검토사항"],
  },
  {
    group: "최종 문서",
    items: ["개념설계 도면", "검토의견 반영내역", "주요 의사결정 기록", "개념설계 최종 보고서"],
  },
];

export function ConceptualDesignDetails() {
  return (
    <div className="concept-materials">
      <section className="concept-materials__section concept-materials__section--intro">
        <div className="site-shell">
          <header className="concept-materials__head">
            <p className="section-label">Project Input</p>
            <h2>개념설계 착수 전 확인자료</h2>
            <p>
              개념설계는 제품·공정·생산량·장비·운영조건을 동일한 기준에서 검토하는 것부터 시작합니다.
              초기 입력자료를 체계적으로 정리해 시설 규모와 레이아웃 검토의 기준을 설정합니다.
            </p>
          </header>

          <div className="concept-table-wrap">
            <table className="concept-table">
              <thead>
                <tr>
                  <th>자료 구분</th>
                  <th>주요 확인내용</th>
                  <th>설계 활용목적</th>
                </tr>
              </thead>
              <tbody>
                {inputDataRows.map((row) => (
                  <tr key={row.category}>
                    <th scope="row">{row.category}</th>
                    <td>{row.items}</td>
                    <td>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="concept-materials__section">
        <div className="site-shell">
          <header className="concept-materials__head">
            <p className="section-label">Process Analysis Sheet</p>
            <h2>공정 분석표</h2>
            <p>
              공정별 장비, 처리용량, 물량 흐름과 지원조건을 함께 검토해 작업실과 지원설비 범위를 결정합니다.
            </p>
          </header>

          <div className="concept-table-wrap">
            <table className="concept-table concept-table--wide">
              <thead>
                <tr>
                  <th>공정 단계</th>
                  <th>주요 장비</th>
                  <th>처리용량 검토</th>
                  <th>자재·제품 흐름</th>
                  <th>지원조건</th>
                </tr>
              </thead>
              <tbody>
                {processRows.map((row) => (
                  <tr key={row.step}>
                    <th scope="row">{row.step}</th>
                    <td>{row.equipment}</td>
                    <td>{row.capacity}</td>
                    <td>{row.flow}</td>
                    <td>{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="concept-materials__section concept-materials__section--soft">
        <div className="site-shell">
          <header className="concept-materials__head">
            <p className="section-label">Room Design Requirement</p>
            <h2>작업실 설계 요구사항</h2>
            <p>
              각 작업실의 기능과 장비, 청정도, 차압, 유틸리티 요구사항을 정리해 레이아웃과 상세설계의 기준으로 활용합니다.
            </p>
          </header>

          <div className="concept-table-wrap">
            <table className="concept-table concept-table--room">
              <thead>
                <tr>
                  <th>작업실</th>
                  <th>주요 작업</th>
                  <th>배치 장비</th>
                  <th>청정도</th>
                  <th>차압 조건</th>
                  <th>필요 유틸리티</th>
                  <th>주요 설계 고려사항</th>
                </tr>
              </thead>
              <tbody>
                {roomRows.map((row) => (
                  <tr key={row.room}>
                    <th scope="row">{row.room}</th>
                    <td>{row.activity}</td>
                    <td>{row.equipment}</td>
                    <td>{row.grade}</td>
                    <td>{row.pressure}</td>
                    <td>{row.utility}</td>
                    <td>{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="concept-materials__section">
        <div className="site-shell">
          <header className="concept-materials__head">
            <p className="section-label">GMP Layout Review Matrix</p>
            <h2>주요 검토영역과 결과자료</h2>
            <p>
              개념설계의 주요 검토영역, 판단기준과 결과자료를 연결해 프로젝트 범위와 의사결정 기준을 명확하게 제시합니다.
            </p>
          </header>

          <div className="concept-table-wrap">
            <table className="concept-table concept-table--matrix">
              <thead>
                <tr>
                  <th>검토영역</th>
                  <th>주요 검토내용</th>
                  <th>판단기준</th>
                  <th>결과자료</th>
                </tr>
              </thead>
              <tbody>
                {reviewMatrix.map((row) => (
                  <tr key={row.area}>
                    <th scope="row">{row.area}</th>
                    <td>{row.review}</td>
                    <td>{row.criteria}</td>
                    <td>{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="concept-materials__section concept-materials__section--soft">
        <div className="site-shell">
          <header className="concept-materials__head">
            <p className="section-label">Deliverables</p>
            <h2>개념설계 주요 산출물</h2>
            <p>
              검토 결과는 상세설계와 투자·일정 의사결정에 활용할 수 있도록 영역별 도면과 기술자료로 정리합니다.
            </p>
          </header>

          <div className="concept-deliverable-grid">
            {deliverables.map((group) => (
              <section key={group.group} className="concept-deliverable-group">
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="concept-materials__section concept-materials__section--flow">
        <div className="site-shell">
          <header className="concept-materials__head">
            <p className="section-label">Design Flow</p>
            <h2>개념설계 결과의 연결 구조</h2>
          </header>

          <ol className="concept-result-flow">
            <li>기초자료 및 생산계획</li>
            <li aria-hidden="true">↓</li>
            <li>공정 분석 및 작업실 요구사항</li>
            <li aria-hidden="true">↓</li>
            <li>GMP Layout·구역·동선 검토</li>
            <li aria-hidden="true">↓</li>
            <li>청정도·차압·유틸리티·보관조건 검토</li>
            <li aria-hidden="true">↓</li>
            <li>최종 도면 및 개념설계 보고서</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
