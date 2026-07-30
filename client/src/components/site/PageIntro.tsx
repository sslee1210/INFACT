import { useEffect, useMemo, type CSSProperties } from "react";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
};

const DEFAULT_INTRO_IMAGE = "./images/sub/banner.jpg";
const SITE_NAME = "INFACT";

function getMeta(selector: string) {
  return document.querySelector<HTMLMetaElement>(selector);
}

export function PageIntro({
  label,
  title,
  description,
  image,
  className,
}: PageIntroProps) {
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
    const nextTitle = `${title} | ${SITE_NAME}`;
    const metadata = [
      { element: getMeta('meta[name="description"]'), value: description },
      { element: getMeta('meta[property="og:title"]'), value: nextTitle },
      { element: getMeta('meta[property="og:description"]'), value: description },
      { element: getMeta('meta[name="twitter:title"]'), value: nextTitle },
      { element: getMeta('meta[name="twitter:description"]'), value: description },
    ];
    const previousTitle = document.title;
    const previousValues = metadata.map(({ element }) => element?.content);

    document.title = nextTitle;
    metadata.forEach(({ element, value }) => {
      if (element && value) element.content = value;
    });

    return () => {
      document.title = previousTitle;
      metadata.forEach(({ element }, index) => {
        const previousValue = previousValues[index];
        if (element && previousValue !== undefined) {
          element.content = previousValue;
        }
      });
    };
  }, [description, title]);

  return (
    <section
      className={["page-intro", className].filter(Boolean).join(" ")}
      style={animationStyle}
    >
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h1 className="page-title">{title}</h1>
        {description ? <p className="page-description">{description}</p> : null}
      </div>
    </section>
  );
}
