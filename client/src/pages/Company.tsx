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
            <p className="section-label">CEO 인사말</p>
            <h2 className="section-title">모든 것은 IN-FACT로 증명됩니다.</h2>
          </div>

          <figure className="company-greeting__visual" aria-hidden="true">
            <img src="/images/sub/intro.jpg" alt="" />
          </figure>

          <div className="company-greeting__body">
            <p className="body-copy">
              IN-FACT 홈페이지를 방문해 주신 여러분께 진심으로 감사드립니다.
            </p>
            <p className="body-copy">
              2016년의 시작, 회사가 창립되고 인팩트를 소개하던 초기는 어색함 그 자체였습니다.
              그러나 세월이 흐르며 인팩트(INFACT)라는 이름이 현장에서 자연스럽게 회자되기
              시작했고, 저희 인팩트 가족들은 회사의 발전과 성장 속에서 진정한 긍지를 느끼게
              되었습니다.
            </p>
            <p className="body-copy">
              새로이 저희를 찾아주신 분들과 지금까지 함께해주신 모든 분들께 깊은 감사를
              드립니다. 인팩트는 오늘도 진화하며, 고객님들의 곁으로 더욱 가까이 다가가고
              있습니다.
            </p>
            <p className="body-copy">
              오늘날 제약 산업은 전례 없는 변화의 속도로 진화하고 있습니다. AI, 디지털 트윈,
              연속 제조 등 첨단 기술이 의약품 생산의 패러다임을 바꾸고 있으며, 환자 맞춤형
              치료제와 바이오의약품의 수요 또한 급격히 늘고 있습니다.
            </p>
            <p className="body-copy">
              이러한 급속한 혁신 속에서 제조 공정의 신뢰성과 안정성을 검증하는 것은 더 이상
              선택이 아닌 필수가 되었습니다. INFACT는 제약 기업들의 성공적인 혁신을 믿을 수
              있는 검증 파트너로서 함께 동반합니다.
            </p>
            <p className="body-copy">
              첨단 기술 도입부터 상용화까지 모든 단계에서 과학적 근거 기반의 엄격한
              밸리데이션을 제공하며, 규제 요구사항과 국제 기준 충족을 보장합니다. 제약
              기업들과의 지속적인 협업과 신뢰의 관계를 바탕으로, 제약 제조의 신뢰성을 보장하는
              새로운 기준을 만들어 가고 있습니다.
            </p>

            <blockquote className="company-greeting__quote">
              인팩트의 가치는 오직 하나의 이름으로 검증됩니다. 그것은 'IN-FACT'입니다.
            </blockquote>

            <p className="company-greeting__signature">(주)인팩트 대표이사 고동주</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
