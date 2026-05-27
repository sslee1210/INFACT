import { CompanyIntro } from "@/components/site/CompanyIntro";
import { CompanySubNav } from "@/components/site/CompanySubNav";
import { PageLayout } from "@/components/site/PageLayout";

export default function CompanyOrganization() {
  return (
    <PageLayout>
      <CompanyIntro />

      <section className="section section--white">
        <CompanySubNav />

        <div className="site-shell company-section company-organization">
          <div className="company-organization__hero">
            <p className="section-label">Organization</p>
            <h2 className="company-organization__title">조직 구성</h2>
          </div>

          <div className="org-fixed" aria-label="INFACT 조직도">
            {/* 대표이사 */}
            <div className="org-fixed__lead">
              <div className="org-box org-box--lead">대표이사</div>
            </div>

            {/* 1차 조직 연결선 */}
            <div className="org-fixed__main-v" />
            <div className="org-fixed__main-h" />
            <div className="org-fixed__main-v1" />
            <div className="org-fixed__main-v2" />
            <div className="org-fixed__main-v3" />

            {/* 1차 조직 */}
            <div className="org-fixed__primary org-fixed__primary--1">
              <div className="org-box org-box--primary">경영 지원 사업부</div>
            </div>

            <div className="org-fixed__primary org-fixed__primary--2">
              <div className="org-box org-box--primary">영업&amp;마케팅 사업부</div>
            </div>

            <div className="org-fixed__primary org-fixed__primary--3">
              <div className="org-box org-box--primary">밸리데이션 사업부</div>
            </div>

            {/* 밸리데이션 하위 연결선 */}
            <div className="org-fixed__sub-v" />
            <div className="org-fixed__sub-h" />
            <div className="org-fixed__sub-v1" />
            <div className="org-fixed__sub-v2" />

            {/* 2차 조직 */}
            <div className="org-fixed__secondary org-fixed__secondary--1">
              <div className="org-box org-box--secondary">GMP 사업부</div>
            </div>

            <div className="org-fixed__secondary org-fixed__secondary--2">
              <div className="org-box org-box--secondary">CSV 사업부</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}