export default function PatientItem({ patient }) {
  return (
    <div
      key={patient.name}
      className={`-mx-5 flex items-center justify-between px-5 py-4 ${patient.name === "Jessica Taylor" && "bg-color-d8fcf7"}`}
    >
      <div className="flex items-center space-x-3">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="h-12 w-12"
        />
        <div>
          <p className="body-emphasized-14pt">{patient.name}</p>
          <p className="body-secondary-info-14pt">
            {patient.gender} {patient.age}
          </p>
        </div>
      </div>
      <img
        src="assets/MoreHorizontal.svg"
        alt="MoreHorizontal"
        className="w-4.5"
      />
    </div>
  );
}
