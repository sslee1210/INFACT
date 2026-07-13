import type { ServicePanel } from "@/content/homeServicePanels";

type ServiceCardProps = {
  panel: ServicePanel;
  index: number;
  onNavigate: () => void;
};

export function ServiceCard({ panel, index: _index, onNavigate }: ServiceCardProps) {
  return (
    <a
      href={panel.link}
      className="service-card"
      data-service-index={_index}
      onClick={onNavigate}
    >
      <div className="service-card__media" aria-hidden="true">
        <img src={panel.image} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="service-card__content">
        <p className="service-card__label">{panel.label}</p>
        <div className="service-card__body">
          <h3 className="service-card__title">{panel.title}</h3>
          <p className="service-card__scope">{panel.phase}</p>
          <p className="service-card__description">{panel.description}</p>
        </div>
      </div>
    </a>
  );
}
