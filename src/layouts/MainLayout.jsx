import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

export default function MainLayout() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (role === "cashier") {
      const allowedRoutes = ["/cashier", "/invoice"];

      if (!allowedRoutes.includes(location.pathname)) {
        navigate("/cashier", { replace: true });
      }
    }
  }, [role, location.pathname]);

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 bg-[#EAEAEA] ml-20 px-6 pt-[40px] pb-6 overflow-x-hidden">
        <Outlet />
      </div>

    </div>
  );
}