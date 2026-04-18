import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-[#EAEAEA] ml-20 px-6 pt-[40px] pb-6">
        <Outlet />
      </div>
    </div>
  );
}