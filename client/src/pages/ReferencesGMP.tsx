import { ReferencesPage } from "@/components/site/ReferencesPage";
import { gmpReferenceYears } from "@/content/references/gmpReferences";

export default function ReferencesGMP() {
  return (
    <ReferencesPage
      label="GMP"
      title="GMP 수행실적"
      description="제약·바이오 프로젝트의 GMP 컨설팅, 품질시스템 구축, 밸리데이션 및 규제기관 대응 실적입니다."
      years={gmpReferenceYears}
    />
  );
}
