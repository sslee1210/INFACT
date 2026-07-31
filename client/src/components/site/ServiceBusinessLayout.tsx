import type { ReactNode } from "react";
import { Link } from "wouter";
import "@/styles/pages/service-contact-link-emphasis.css";

type ServiceSectionHeaderProps = {
  index?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  compact?: boolean;
};

export function ServiceSectionHeader({
  index,
  label,
  title,
  description,
  centered = true,
  compact = false,
}: ServiceSectionHeaderProps) {
  return (
    <header
      className={[
        "service-business-heading",
        centered ? "service-business-heading--centered" : "",
        compact ? "service-business-heading--compact" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="section-label">
        {index ? `${index} · ` : ""}
        {label}
      </p>

      <div className="service-business-heading__copy">
        <h2>{title}</h2>

        {description && (
          <div className="service-business-heading__description">
            {description}
          </div>
        )}
      </div>
    </header>
  );
}

type ServiceOverviewProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  pillars: Array<{
    number: string;
    title: string;
  }>;
};

export function ServiceOverview({
  eyebrow,
  title,
  description,
  pillars,
}: ServiceOverviewProps) {
  return (
    <section className="service-business-overview">
      <div className="site-shell">
        <div className="service-business-overview__head">
          <p className="section-label">{eyebrow}</p>

          <h2>{title}</h2>

          <div className="service-business-overview__description">
            {description}
          </div>
        </div>

        <div className="service-business-overview__pillars">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="service-business-overview__pillar"
            >
              <span>{pillar.number}</span>
              <strong>{pillar.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceContactProps = {
  buttonLabel: string;
  title?: ReactNode;
  description?: ReactNode;
};

export function ServiceContact({
  buttonLabel,
  title,
  description,
}: ServiceContactProps) {
  return (
    <section className="service-business-contact">
      <div
        className="service-business-contact__overlay"
        aria-hidden="true"
      />

      <div className="site-shell service-business-contact__inner">
        <div className="service-business-contact__copy">
          <p className="service-business-contact__eyebrow">Contact</p>

          <h2>
            {title ?? (
              <>
                프로젝트의 기준을
                <br />
                먼저 정리합니다.
              </>
            )}
          </h2>

          <span
            className="service-business-contact__rule"
            aria-hidden="true"
          />

          <p>
            {description ?? (
              <>
                현재 단계에 필요한 검토 범위와 산출물,
                <br />
                진행 순서를 함께 정리합니다.
              </>
            )}
          </p>
        </div>

        <div className="service-business-contact__action">
          <Link
            href="/contact"
            className="service-business-contact__text-link ui-line-link"
          >
            <span className="service-business-contact__text">
              {buttonLabel}
            </span>

            <svg
              className="service-business-contact__link-line"
              viewBox="0 0 246 18"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 17 H245 L233 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
