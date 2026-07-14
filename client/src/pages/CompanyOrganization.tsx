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

          {/* Desktop / tablet hierarchy */}
          <div className="org-tree" aria-label="INFACT 조직도">
            <div className="org-tree__lead">
              <div className="org-tree__box org-tree__box--lead">대표이사</div>
            </div>

            <div className="org-tree__primary-row">
              <div className="org-tree__primary-node">
                <div className="org-tree__box org-tree__box--primary">경영 지원 사업부</div>
              </div>

              <div className="org-tree__primary-node">
                <div className="org-tree__box org-tree__box--primary">영업&amp;마케팅 사업부</div>
              </div>

              <div className="org-tree__primary-node org-tree__primary-node--validation">
                <div className="org-tree__box org-tree__box--primary">밸리데이션 사업부</div>

                <div className="org-tree__validation-children">
                  <div className="org-tree__secondary-node">
                    <div className="org-tree__box org-tree__box--secondary">GMP 사업부</div>
                  </div>

                  <div className="org-tree__secondary-node org-tree__secondary-node--csv">
                    <div className="org-tree__box org-tree__box--secondary">CSV 사업부</div>

                    <div className="org-tree__teams">
                      <div className="org-tree__team">
                        <div className="org-tree__box org-tree__box--team">자동제어</div>
                      </div>
                      <div className="org-tree__team">
                        <div className="org-tree__box org-tree__box--team">CSV 1팀</div>
                      </div>
                      <div className="org-tree__team">
                        <div className="org-tree__box org-tree__box--team">CSV 2팀</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile hierarchy: each level owns its own grid and connectors. */}
          <div className="org-mobile-tree" aria-label="INFACT 모바일 조직도">
            <div className="org-mobile-tree__lead">대표이사</div>

            <div className="org-mobile-tree__primary-grid">
              <div className="org-mobile-tree__card org-mobile-tree__card--primary">
                경영 지원 사업부
              </div>
              <div className="org-mobile-tree__card org-mobile-tree__card--primary">
                영업&amp;마케팅 사업부
              </div>
              <div className="org-mobile-tree__card org-mobile-tree__card--primary">
                밸리데이션 사업부
              </div>
            </div>

            <div className="org-mobile-tree__secondary-grid">
              <div className="org-mobile-tree__card org-mobile-tree__card--secondary">
                GMP 사업부
              </div>
              <div className="org-mobile-tree__card org-mobile-tree__card--secondary">
                CSV 사업부
              </div>
            </div>

            <div className="org-mobile-tree__teams-grid">
              <div className="org-mobile-tree__card org-mobile-tree__card--team">자동제어</div>
              <div className="org-mobile-tree__card org-mobile-tree__card--team">CSV 1팀</div>
              <div className="org-mobile-tree__card org-mobile-tree__card--team">CSV 2팀</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
