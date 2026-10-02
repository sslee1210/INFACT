import { useEffect } from 'react';
import { HomeHeroSection } from '@/components/site/HomeSections';
import { homeAbout, homeExperienceClients, homeExperienceCta } from '@/content/homePage';
import { SERVICE_PANELS } from '@/content/homeServicePanels';
import { PreviewLayout, PreviewContact } from './PreviewLayout';
import './home.css';

export default function HomePreview() {
  useEffect(() => { document.title = 'INFACT | 디자인 미리보기'; }, []);
  return <PreviewLayout home>
    <div className="home-main dp-home-hero"><HomeHeroSection /></div>

    <section className="dp-section dp-home-about" aria-labelledby="dp-about-title">
      <div className="dp-shell">
        <h2 className="dp-heading" id="dp-about-title"><span>GMP</span>는 검증되어야 하고,<br /><span>INFACT</span>는 <span>Valification</span>을 지원합니다.</h2>
        <div className="dp-home-about__body">
          <figure><img src="./images/home/company-building-v2.png" alt="인팩트의 전문성과 신뢰를 상징하는 현대적인 업무용 건물" loading="lazy" /></figure>
          <div>
            <p className="dp-home-about__statement">㈜인팩트는 완제의약품, 원료의약품, 동물의약품, 건강기능식품, 첨단바이오의약품, 화장품 업계에서 요구되고, GMP에 관한 모든 서비스를 제공하고 있습니다.</p>
            <p>인팩트의 모든 임직원은 고객사의 GMP 품질 향상과 확보에 최선을 다하고 있습니다.</p>
            {homeAbout.ctaHref ? <a className="dp-button dp-button--secondary" href={homeAbout.ctaHref} download={homeAbout.ctaDownloadName}>{homeAbout.ctaLabel}</a> : <button type="button" className="dp-button dp-button--secondary" disabled>{homeAbout.ctaLabel} (준비 중)</button>}
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="dp-section dp-home-framework" aria-labelledby="dp-framework-title">
      <div className="dp-shell">
        <h2 className="dp-heading" id="dp-framework-title">기획부터 승인까지,<br />GMP 전 과정을 지원합니다.</h2>
        <p className="dp-lead">{homeAbout.summary}</p>
        <ol className="dp-home-framework__steps" aria-label="GMP 지원 체계">
          {homeAbout.frameworkSteps.map(step => <li key={step.position}><h3>{step.title}</h3><p>{step.english}</p></li>)}
        </ol>
        <p className="dp-home-framework__result">실행 가능한 품질 체계 설계</p>
      </div>
    </section>

    <section id="experience" className="dp-section dp-home-experience" aria-labelledby="dp-experience-title">
      <div className="dp-shell">
        <h2 className="dp-heading" id="dp-experience-title">검증된 전문 컨설턴트가<br />함께합니다.</h2>
        <p className="dp-lead">{homeExperienceCta.description}</p>
        <dl className="dp-home-experience__metrics">
          {[...homeAbout.metrics].reverse().map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.format ? metric.value.toLocaleString('en-US') : metric.value}{metric.suffix ?? ''}</dd></div>)}
        </dl>
        <div className="dp-home-experience__clients" aria-label="주요 수행 고객사">{homeExperienceClients.map(client => <span key={client}>{client}</span>)}</div>
      </div>
    </section>

    <section id="service" className="dp-section dp-home-services" aria-labelledby="dp-services-title">
      <div className="dp-shell">
        <h2 className="dp-heading" id="dp-services-title">프로젝트 단계에 맞는<br />전문 서비스를 연결합니다.</h2>
        <p className="dp-lead">초기 기획과 GMP 운영 기준에 맞는 검증까지<br />프로젝트에 필요한 업무 범위로 구현화하고 체계화하여 완성합니다.</p>
        <div className="dp-home-services__grid">
          {SERVICE_PANELS.map(panel => <article key={panel.key}>
            <a href={panel.link} className="dp-home-services__image" aria-label={panel.linkLabel}><img src={panel.image} alt="" loading="lazy" /></a>
            <div className="dp-home-services__copy">
              <h3><a href={panel.link}>{panel.title}</a></h3>
              <p className="dp-home-services__phase">{panel.phase}</p>
              <p>{panel.description}</p>
              <a href={panel.link} className="dp-link">{panel.linkLabel}</a>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <PreviewContact title={<>프로젝트 범위가 흐려지기 전에<br />기준부터 정리하세요</>} description="초기 기획, GMP 허가 승인, GMP System 구축을 위한 기준을 정리합니다." />
  </PreviewLayout>;
}
