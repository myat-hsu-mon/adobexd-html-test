import DiagnosisList from "./DiagnosisList";
import DiagnosisHistory from "./DiagnosisHistory";

export default function Diagnosis({ patient }) {
  return (
    <div className="h-[calc(100vh-128px)] space-y-5 overflow-auto">
      <DiagnosisHistory diagnosisHistory={patient.diagnosis_history} />
      <DiagnosisList diagnosisList={patient.diagnostic_list} />
    </div>
  );
}
