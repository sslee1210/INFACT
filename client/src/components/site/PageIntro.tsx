import { useEffect, useMemo, type CSSProperties } from "react";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
  image?: string;
};

const DEFAULT_INTRO_IMAGE = "./images/sub/banner.jpg";
const SITE_NAME = "INFACT";

export function PageIntro({ label, title, description, image }: PageIntroProps) {
  const animationStyle = useMemo(() => {
    const duration = 14;
    const elapsed = (Date.now() % (duration * 1000)) / 1000;
    const introImage = image ?? DEFAULT_INTRO_IMAGE;
    return {
      "--sub-banner-delay": `-${elapsed}s`,
      "--page-intro-image": `url("${introImage}")`,
    } as CSSProperties;
  }, [image]);

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = descriptionMeta?.content;

    document.title = `${title} | ${SITE_NAME}`;
    if (description && descriptionMeta) {
      descriptionMeta.content = description;
    }

    return () => {
      document.title = previousTitle;
      if (descriptionMeta && previousDescription !== undefined) {
        descriptionMeta.content = previousDescription;
      }
    };
  }, [description, title]);

  return (
    <section className="page-intro" style={animationStyle}>
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h1 className="page-title">{title}</h1>
        {description ? <p className="page-description">{description}</p> : null}
      </div>
    </section>
  );
}
