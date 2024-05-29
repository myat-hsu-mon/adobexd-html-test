export default function Card({ children, className }) {
  return (
    <div className={`bg-color-ffffff rounded-xl p-5 ${className}`}>
      {children}
    </div>
  );
}

export const CardHeader = ({ title, children }) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <h2 className="card-title-24pt">{title}</h2>
      {children && children}
    </div>
  );
};
