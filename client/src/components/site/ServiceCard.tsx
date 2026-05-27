import type { ServicePanel } from "@/content/homeServicePanels";

type ServiceCardProps = {
  panel: ServicePanel;
  index: number;
  onHover: () => void;
  onNavigate: () => void;
};

export function ServiceCard({ panel, index: _index, onHover, onNavigate }: ServiceCardProps) {
  return (
    <a
      href={panel.link}
      className="service-card"
      data-service-index={_index}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onNavigate}
    >
      <div className="service-card__media" aria-hidden="true">
        <img src={panel.image} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="service-card__content">
        <p className="service-card__label">{panel.label}</p>
        <h3 className="service-card__title">{panel.title}</h3>
      </div>
    </a>
  );
}
