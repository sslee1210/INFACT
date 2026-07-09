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
        <div className="service-card__header">
          <p className="service-card__label">{panel.label}</p>
          <span className="service-card__stage">{panel.stage}</span>
        </div>

        <div className="service-card__body">
          <h3 className="service-card__title">{panel.title}</h3>
          <p className="service-card__description">{panel.description}</p>

          <dl className="service-card__facts">
            <div>
              <dt>Phase</dt>
              <dd>{panel.phase}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{panel.output}</dd>
            </div>
          </dl>
        </div>
      </div>
    </a>
  );
}
