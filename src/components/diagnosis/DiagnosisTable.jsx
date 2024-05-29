export default function DiagnosisTable({ diagnosisList }) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="body-emphasized-14pt">
          <th className="bg-color-f6f7f8 rounded-l-xl py-3.5 pl-4 text-left">
            Problem/Diagnosis
          </th>
          <th className="bg-color-f6f7f8 py-3.5 text-left">Description</th>
          <th className="bg-color-f6f7f8 rounded-r-xl py-3.5 text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {diagnosisList.map((diagnosis) => (
          <tr key={diagnosis.name}>
            <td className="body-regular-14 pl-4 whitespace-nowrap py-5 text-left">
              {diagnosis.status}
            </td>
            <td className="body-regular-14 whitespace-nowrap py-5 text-left">
              {diagnosis.description}
            </td>
            <td className="body-regular-14 whitespace-nowrap py-5 text-left">
              {diagnosis.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
