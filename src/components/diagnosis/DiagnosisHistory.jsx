import Card, { CardHeader } from "../common/Card";
import BloodPressureChart from "./vital-signs/BloodPressureChart";
import VitalSignCard from "./vital-signs/VitalSignCard";

export default function DiagnosisHistory({ diagnosisHistory }) {
  const lastSixMonthsHistory = diagnosisHistory.slice(0, 6);
  const lastDiagnosisHistory = diagnosisHistory[diagnosisHistory.length - 1];
  const lastRespiratoryRate = lastDiagnosisHistory.respiratory_rate;
  const lastTemperature = lastDiagnosisHistory.temperature;
  const lastHeartRate = lastDiagnosisHistory.heart_rate;

  const vitalSignCards = [
    {
      name: "Respiratory Rate",
      icon: "assets/RespiratoryRate.svg",
      color: "bg-color-E0F3FA",
      status: lastRespiratoryRate.levels,
      value: `${lastRespiratoryRate.value} bpm`,
    },
    {
      name: "Temperature",
      icon: "assets/Temperature.svg",
      color: "bg-color-FFE6E9",
      status: lastTemperature.levels,
      value: `${lastTemperature.value}°F`,
    },
    {
      name: "Heart Rate",
      icon: "assets/HeartBPM.svg",
      color: "bg-color-FFE6F1",
      status: lastHeartRate.levels,
      value: `${lastHeartRate.value} bpm`,
    },
  ];

  return (
    <Card>
      <CardHeader title="Diagnosis History" />
      <div className="space-y-5">
        <BloodPressureChart diagnosisHistory={lastSixMonthsHistory} />
        <div className="flex space-x-5">
          {vitalSignCards.map((sign) => (
            <VitalSignCard sign={sign} key={sign.name} />
          ))}
        </div>
      </div>
    </Card>
  );
}
