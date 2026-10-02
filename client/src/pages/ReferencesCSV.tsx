import { ReferencesPage } from "@/components/site/ReferencesPage";
import { csvReferenceYears } from "@/content/references/csvReferences";

export default function ReferencesCSV() {
  return (
    <ReferencesPage
      label="CSV"
      title="CSV 수행실적"
      description="제약·바이오 산업의 전산시스템과 제조·시험설비를 대상으로 수행한 컴퓨터화 시스템 밸리데이션 실적입니다."
      years={csvReferenceYears}
    />
  );
}
