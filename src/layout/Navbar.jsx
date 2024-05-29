const navItems = [
  { name: "Overview", icon: "assets/Home.svg", active: false },
  { name: "Patients", icon: "assets/Group.svg", active: true },
  { name: "Schedule", icon: "assets/CalendarToday.svg", active: false },
  { name: "Message", icon: "assets/ChatBubble.svg", active: false },
  { name: "Transactions", icon: "assets/CreditCard.svg", active: false },
];

export default function Navbar() {
  return (
    <div className="bg-color-ffffff flex items-center justify-between rounded-full px-5 py-3.5">
      <img src="assets/TestLogo.svg" alt="test-logo" className="h-12" />
      <div className="flex items-center space-x-5">
        {navItems.map((nav) => (
          <div
            key={nav.name}
            className={`flex items-center space-x-2 rounded-full px-4 py-3 ${nav.active ? "bg-color-01f0d0" : ""}`}
          >
            <img src={nav.icon} alt={nav.icon} />
            <p className="body-emphasized-14pt">{nav.name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2 divide-x">
        <div className="flex items-center space-x-2">
          <img
            src="assets/DoctorSimon.png"
            className="h-11 w-11"
            alt="Doctor Simon"
          />
          <div>
            <p className="body-emphasized-14pt">Dr. Jose Simmons</p>
            <p className="body-secondary-info-14pt">General Practitioner</p>
          </div>
        </div>
        <div className="body-emphasized-14pt flex items-center space-x-3 pl-3">
          <img src="assets/Settings.svg" alt="Settings" />
          <img src="assets/MoreVertical.svg" alt="MoreVertical" />
        </div>
      </div>
    </div>
  );
}
