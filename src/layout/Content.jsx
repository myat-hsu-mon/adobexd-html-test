import PatientList from "../components/patients/PatientList";
import PatientProfile from "../components/patients/PatientProfile";
import LabResults from "../components/lab/LabResults";
import Diagnosis from "../components/diagnosis/Diagnosis";

import usePatients from "../hooks/usePatients";

export default function Content() {
  const { loading, patients } = usePatients();

  if (loading) return <div>loading...</div>;

  return (
    <div className="flex max-h-full flex-1 gap-5 overflow-hidden">
      <PatientList patients={patients} />
      <Diagnosis patient={patients[3]} />
      <div className="flex h-[calc(100vh-128px)] flex-col gap-5 overflow-auto">
        <PatientProfile patient={patients[3]} />
        <LabResults labResults={patients[3].lab_results} />
      </div>
    </div>
  );
}
