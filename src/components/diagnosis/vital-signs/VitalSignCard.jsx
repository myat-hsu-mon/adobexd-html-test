export default function VitalSignCard({ sign }) {
  return (
    <div
      className={`${sign.color} flex w-56 flex-col space-y-2 rounded-xl p-4`}
    >
      <img src={sign.icon} alt={sign.name} className="h-24 w-24" />
      <div>
        <p className="text-color-072635 text-base font-medium">{sign.name}</p>
        <p className="card-title-24pt">{sign.value}</p>
      </div>
      <p className="body-regular-14">{sign.status}</p>
    </div>
  );
}
