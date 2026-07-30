import { CompanyIntro } from "@/components/site/CompanyIntro";
import { CompanySubNav } from "@/components/site/CompanySubNav";
import { PageLayout } from "@/components/site/PageLayout";

export default function Company() {
  return (
    <PageLayout>
      <CompanyIntro />

      <section className="section section--white">
        <CompanySubNav />

        <div className="site-shell company-section company-greeting">
          <div className="company-section__heading">
            <p className="section-label">인사말</p>
            <h2 className="section-title">완벽한 개념설계에서 시작해야 합니다.</h2>
          </div>

          <figure className="company-greeting__visual" aria-hidden="true">
            <img src="./images/sub/intro.jpg" alt="" />
          </figure>

          <div className="company-greeting__body">
            <p className="body-copy">모두에 앞서</p>
            <p className="body-copy">
              INFACT 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
            </p>
            <p className="body-copy">
              2016년, 밸리데이션(Validation) 중심의 GMP 컨설팅 업무에 첫발을 내딛고 인팩트를
              세상에 소개하던 창립 초기에는 모든 것이 낯설고 서툴렀습니다. 하지만 세월이
              흐르며 '인팩트(INFACT)'라는 이름은 제약 현장에서 신뢰의 동의어로 자연스럽게
              회자되기 시작했습니다. 회사의 눈부신 발전과 성장을 함께 일궈낸 우리 인팩트
              임직원들은 오늘날 제약 산업의 중심에서 진정한 긍지를 느끼며 일하고 있습니다.
            </p>
            <p className="body-copy">
              오랜 시간 변함없이 동행해 주신 기존 고객분들과 새로운 인연으로 저희를 찾아주신
              모든 분들께 깊은 감사를 드립니다. 인팩트는 지금 이 순간에도 끊임없이 진화하고
              있으며, 고객사에서 요구하시는 모든 프로젝트의 성공을 위해 오늘도 든든한
              동반자로서 발맞추어 걷고 있습니다.
            </p>
            <p className="body-copy">
              오늘날 제약 산업은 전례 없는 속도로 혁신하고 있습니다. 관계기관의 높아진 규정,
              AI(인공지능)의 도입, 데이터 완전성(Data Integrity)에 대한 엄격한 요구, 새롭게
              개발되는 신약의 신속한 시장 적용 등 첨단 기술과 규제 변화가 의약품 생산의
              패러다임을 근본적으로 바꾸고 있습니다. 환자 맞춤형 치료제와 바이오의약품의 수요
              또한 급격히 증가하는 추세입니다.
            </p>
            <p className="body-copy">
              이러한 급격한 변화 속에서 제조 공정의 신뢰성과 안정성을 검증하는 것은 이제
              선택이 아닌 기업의 생존을 위한 필수 과제가 되었습니다. 이에 INFACT는 제약
              기업들이 안심하고 혁신을 주도할 수 있도록, 가장 믿을 수 있는 최적의 검증
              파트너로서 동행하고자 합니다.
            </p>
            <p className="body-copy">
              우리는 첨단 기술 도입부터 최종 상용화에 이르는 전 과정에서 과학적 근거에 기반한
              엄격한 밸리데이션 서비스를 제공합니다. 이를 통해 복잡한 규제 요구사항과
              까다로운 글로벌 GMP 기준 충족을 완벽하게 보장합니다. 제약 기업들과의 지속적인
              협업과 깊은 신뢰를 바탕으로, 인팩트는 제약 제조의 신뢰성을 보장하는 새로운
              글로벌 기준을 만들어 가겠습니다.
            </p>

            <p className="body-copy">감사합니다.</p>

            <p className="company-greeting__signature">INFACT 임직원 일동</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
