import { Link } from "wouter";
import { PageIntro } from "@/components/site/PageIntro";
import { PageLayout } from "@/components/site/PageLayout";
import { scrollToTopSoon } from "@/lib/scroll";

export default function NotFound() {
  return (
    <PageLayout>
      <PageIntro
        label="404"
        title="페이지를 찾을 수 없습니다."
        description="요청하신 주소가 변경되었거나 삭제되었을 수 있습니다."
      />

      <section className="section section--white">
        <div className="site-shell ui-section">
          <p className="section-label">Navigation</p>
          <h2 className="section-title">IN-FACT 홈페이지에서 다시 시작해 주세요.</h2>
          <p className="body-copy">
            주소를 다시 확인하거나 홈으로 이동해 회사소개, 사업안내 및 수행실적을 확인할 수 있습니다.
          </p>
          <Link
            href="/"
            className="ui-button ui-button--primary"
            onClick={scrollToTopSoon}
          >
            홈으로 돌아가기
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
