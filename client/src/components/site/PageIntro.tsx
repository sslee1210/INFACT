import { useMemo, type CSSProperties } from "react";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
  image?: string;
};

export function PageIntro({ label, title, description, image }: PageIntroProps) {
  const animationStyle = useMemo(() => {
    const duration = 14;
    const elapsed = (Date.now() % (duration * 1000)) / 1000;
    return {
      "--sub-banner-delay": `-${elapsed}s`,
      ...(image ? { "--page-intro-image": `url("${image}")` } : {}),
    } as CSSProperties;
  }, [image]);

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
