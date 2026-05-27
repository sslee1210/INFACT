import { Link } from "wouter";

export function BrandLogo() {
  return (
    <Link href="/" className="brand-logo" aria-label="INFACT 홈으로 이동">
      <span className="brand-logo__title">INFACT</span>
      <span className="brand-logo__subtitle">GMP Consulting &amp; CSV Consulting</span>
    </Link>
  );
}
