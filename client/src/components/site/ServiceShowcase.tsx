import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICE_PANELS } from "@/content/homeServicePanels";
import { scrollToTopSoon } from "@/lib/scroll";

export function ServiceShowcase() {
  return (
    <section id="service" className="section service-immersive-section">
      <div className="service-immersive__overlay" aria-hidden="true" />
      <div className="service-immersive__blueprint" aria-hidden="true" />

      <div className="home-container service-immersive">
        <div className="service-immersive__intro">
          <p className="service-immersive__eyebrow">SERVICE</p>

          <h2 className="service-immersive__title">
            프로젝트 단계에 맞는
            <br />
            전문 서비스를 연결합니다.
          </h2>

          <p className="service-immersive__summary">
            초기 기획과 GMP 운영 기준부터 컴퓨터화시스템 검증까지,
            프로젝트에 필요한 업무 범위를 명확하게 구조화합니다.
          </p>
        </div>

        <div className="service-immersive__showcase">
          <div className="service-card-rail">
            {SERVICE_PANELS.map((panel, index) => (
              <ServiceCard
                key={panel.key}
                panel={panel}
                index={index}
                onNavigate={scrollToTopSoon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
