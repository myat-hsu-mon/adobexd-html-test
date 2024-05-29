import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout() {
  return (
    <div className="flex max-h-full flex-col gap-5 overflow-auto">
      <Navbar />
      <Content />
    </div>
  );
}
