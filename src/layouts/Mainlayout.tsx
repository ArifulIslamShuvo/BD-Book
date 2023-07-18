import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
