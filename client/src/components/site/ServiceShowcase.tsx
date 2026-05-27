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
          <h2 className="service-immersive__title">SERVICE</h2>
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
