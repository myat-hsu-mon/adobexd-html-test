import Card, { CardHeader } from "../common/Card";

export default function LabResults({ labResults }) {
  return (
    <Card>
      <CardHeader title="Lab Results" />
      <div className="space-y-1">
        {labResults.map((result) => (
          <LabItem key={result} result={result} />
        ))}
      </div>
    </Card>
  );
}

const LabItem = ({ result }) => (
  <div className="hover:bg-color-f6f7f8 flex items-center justify-between rounded-sm px-4 py-2.5 transition-all duration-100">
    <p>{result}</p>
    <img src="assets/Download.svg" alt="Download" />
  </div>
);
