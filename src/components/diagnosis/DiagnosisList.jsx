import Card, { CardHeader } from "../common/Card";
import DiagnosisTable from "./DiagnosisTable";

export default function DiagnosisList({ diagnosisList }) {
  return (
    <Card>
      <CardHeader title="Diagnosis List" />
      <DiagnosisTable diagnosisList={diagnosisList} />
    </Card>
  );
}
