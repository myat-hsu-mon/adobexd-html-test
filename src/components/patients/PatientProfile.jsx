import Card from "../common/Card";

export default function PatientProfile({ patient }) {
  return (
    <Card>
      <div className="mb-8 flex w-80 flex-col items-center space-y-6">
        <img
          src={patient.profile_picture}
          alt="Jessica Jessica Taylor"
          className="h-48 w-48"
        />
        <p className="card-title-24pt">{patient.name}</p>
      </div>
      <div className="space-y-6">
        <ProfileInfo
          icon="assets/BirthIcon.svg"
          title="Date Of Birth"
          subtitle={patient.date_of_birth}
        />
        <ProfileInfo
          icon="assets/FemaleIcon.svg"
          title="Gender"
          subtitle={patient.gender}
        />
        <ProfileInfo
          icon="assets/PhoneIcon.svg"
          title="Contact Info."
          subtitle={patient.phone_number}
        />
        <ProfileInfo
          icon="assets/PhoneIcon.svg"
          title="Emergency Contacts"
          subtitle={patient.emergency_contact}
        />
        <ProfileInfo
          icon="assets/InsuranceIcon.svg"
          title="Insurance Provider"
          subtitle={patient.insurance_type}
        />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button className="body-emphasized-14pt bg-color-01f0d0 rounded-full px-10 py-2.5">
          Show All Information
        </button>
      </div>
    </Card>
  );
}

const ProfileInfo = ({ icon, title, subtitle }) => (
  <div className="flex space-x-4">
    <img src={icon} alt={title} className="h-10 w-10" />
    <div>
      <p className="body-regular-14">{title}</p>
      <p className="body-emphasized-14pt">{subtitle}</p>
    </div>
  </div>
);
