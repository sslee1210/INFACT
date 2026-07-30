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
                <div className="org-tree__box org-tree__box--primary">
                  경영지원 사업본부
                </div>

                <div className="org-tree__department">
                  <div className="org-tree__box org-tree__box--secondary">
                    인사/총무부
                  </div>
                </div>
              </div>

              <div className="org-tree__primary-node">
                <div className="org-tree__box org-tree__box--primary">
                  영업&amp;마케팅 사업본부
                </div>

                <div className="org-tree__department">
                  <div className="org-tree__box org-tree__box--secondary">
                    영업&amp;마케팅부
                  </div>
                </div>
              </div>

              <div className="org-tree__primary-node org-tree__primary-node--validation">
                <div className="org-tree__box org-tree__box--primary">
                  밸리데이션 사업본부
                </div>

                <div className="org-tree__department">
                  <div className="org-tree__box org-tree__box--secondary">
                    GMP 컨설팅 사업부
                  </div>

                  <div className="org-tree__teams">
                    <div className="org-tree__team">
                      <div className="org-tree__box org-tree__box--team">
                        개념설계 사업부
                      </div>
                    </div>
                    <div className="org-tree__team">
                      <div className="org-tree__box org-tree__box--team">
                        GMP 사업부
                      </div>
                    </div>
                    <div className="org-tree__team">
                      <div className="org-tree__box org-tree__box--team">
                        CSV 사업부
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile hierarchy: vertical spine with nested branch groups. */}
          <div className="org-mobile-tree" aria-label="INFACT 모바일 조직도">
            <div className="org-mobile-tree__lead">대표이사</div>

            <div className="org-mobile-branch">
              <div className="org-mobile-branch__item">
                <div className="org-mobile-branch__node org-mobile-branch__node--primary">
                  경영지원 사업본부
                </div>

                <div className="org-mobile-branch__children org-mobile-branch__children--single">
                  <div className="org-mobile-branch__child">
                    <div className="org-mobile-branch__node org-mobile-branch__node--secondary">
                      인사/총무부
                    </div>
                  </div>
                </div>
              </div>

              <div className="org-mobile-branch__item">
                <div className="org-mobile-branch__node org-mobile-branch__node--primary">
                  영업&amp;마케팅 사업본부
                </div>

                <div className="org-mobile-branch__children org-mobile-branch__children--single">
                  <div className="org-mobile-branch__child">
                    <div className="org-mobile-branch__node org-mobile-branch__node--secondary">
                      영업&amp;마케팅부
                    </div>
                  </div>
                </div>
              </div>

              <div className="org-mobile-branch__item org-mobile-branch__item--validation">
                <div className="org-mobile-branch__node org-mobile-branch__node--primary org-mobile-branch__node--validation">
                  밸리데이션 사업본부
                </div>

                <div className="org-mobile-branch__children org-mobile-branch__children--single">
                  <div className="org-mobile-branch__child">
                    <div className="org-mobile-branch__node org-mobile-branch__node--secondary">
                      GMP 컨설팅 사업부
                    </div>

                    <div className="org-mobile-branch__teams">
                      <div className="org-mobile-branch__team">
                        개념설계 사업부
                      </div>
                      <div className="org-mobile-branch__team">
                        GMP 사업부
                      </div>
                      <div className="org-mobile-branch__team">
                        CSV 사업부
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
