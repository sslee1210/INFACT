import { useState } from "react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICE_PANELS } from "@/content/homeServicePanels";
import { scrollToTopSoon } from "@/lib/scroll";

export function ServiceShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoverClass =
    hoveredIndex === null
      ? ""
      : ` is-hovering is-hovering-${SERVICE_PANELS[hoveredIndex].key}`;

  return (
    <section id="service" className="section service-immersive-section">
      <div className="service-immersive__overlay" aria-hidden="true" />
      <div className="service-immersive__blueprint" aria-hidden="true" />

      <div className="home-container service-immersive">
        <div className="service-immersive__intro">
          <p className="service-immersive__eyebrow">Service Scope</p>
          <h2 className="service-immersive__title">검토 범위가 분리되지 않도록, 한 흐름으로 정리합니다.</h2>
          <p className="service-immersive__summary">
            개념설계, GMP 컨설팅, CSV 컨설팅은 각각의 산출물이 다르지만 실제 프로젝트에서는
            요구사항, 위험, 시험근거, 운영 문서가 서로 연결되어야 합니다.
          </p>
        </div>

        <div className="service-immersive__showcase">
          <div
            className={`service-card-rail${hoverClass}`}
            onMouseLeave={() => setHoveredIndex(null)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setHoveredIndex(null);
              }
            }}
          >
            {SERVICE_PANELS.map((panel, index) => (
              <ServiceCard
                key={panel.key}
                panel={panel}
                index={index}
                onHover={() => setHoveredIndex(index)}
                onNavigate={scrollToTopSoon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
