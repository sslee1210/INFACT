import { ReferencesPage } from "@/components/site/ReferencesPage";
import { conceptualDesignReferenceYears } from "@/content/references/conceptualDesignReferences";

export default function ReferencesDesign() {
  return (
    <ReferencesPage
      label="개념설계"
      title="개념설계 수행실적"
      description="제약·바이오 제조시설의 공정 분석, GMP Layout, 구역·동선·유틸리티 계획과 개념설계 보고서 작성 실적입니다."
      years={conceptualDesignReferenceYears}
    />
  );
}
