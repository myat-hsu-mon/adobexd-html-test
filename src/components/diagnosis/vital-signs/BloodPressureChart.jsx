import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Blood Pressure History (Last 6 Months)",
    },
  },
};

export default function BloodPressureChart({ diagnosisHistory }) {
  const labels = diagnosisHistory.map(
    (entry) => `${entry.month}, ${entry.year}`,
  );

  const systolicData = diagnosisHistory.map(
    (entry) => entry.blood_pressure.systolic.value,
  );
  const diastolicData = diagnosisHistory.map(
    (entry) => entry.blood_pressure.diastolic.value,
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
