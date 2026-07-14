import { useEffect, useRef } from "react";

type CountUpValueProps = {
  target: number;
  suffix?: string;
  format?: boolean;
};

export function CountUpValue({ target, suffix = "", format = false }: CountUpValueProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const formatValue = (value: number) =>
      format ? value.toLocaleString("en-US") : String(value);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.textContent = `${formatValue(target)}${suffix}`;
      return;
    }

    let frameId = 0;
    let started = false;

    const animate = () => {
      const duration = 1800;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${formatValue(Math.round(target * eased))}${suffix}`;

        if (progress < 1) frameId = requestAnimationFrame(tick);
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        animate();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [format, suffix, target]);

  const initialValue = format ? "0" : 0;

  return <strong ref={ref}>{initialValue}{suffix}</strong>;
}
