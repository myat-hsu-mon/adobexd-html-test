import Card, { CardHeader } from "../common/Card";
import PatientItem from "./PatientItem";

export default function PatientList({ patients }) {
  return (
    <Card className="h-[calc(100vh-128px)] w-96 overflow-auto">
      <div>
        <CardHeader title="Patients">
          <img src="assets/Search.svg" alt="Search" />
        </CardHeader>
        <div>
          {patients.map((patient) => (
            <PatientItem patient={patient} key={patient.name} />
          ))}
        </div>
      </div>
    </Card>
  );
}
