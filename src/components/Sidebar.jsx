import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  // 🔥 ADMIN
  const adminMenus = [
    { path: "/", icon: "/icons/Home.png" },
    { path: "/cashier", icon: "/icons/Cashier.png" },
    { path: "/product", icon: "/icons/Item.png" },
    { path: "/warehouse", icon: "/icons/Warehouse.png" },
    { path: "/supplier", icon: "/icons/Supplier.png" },
    { path: "/history", icon: "/icons/History.png" },
  ];

  // 🔥 CASHIER (ONLY 1 MENU)
  const cashierMenus = [
    { path: "/cashier", icon: "/icons/Cashier.png" },
  ];

  const menus = role === "admin" ? adminMenus : cashierMenus;

  return (
    <div className="w-20 h-screen bg-white fixed left-0 top-0 flex flex-col items-center py-4">

      {/* MENU */}
      <div className="flex flex-col gap-4">
        {menus.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-200 ${
                isActive ? "scale-150" : "hover:scale-120"
              }`
            }
          >
            <img
              src={item.icon}
              className="w-8 h-8 object-contain"
            />
          </NavLink>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="mt-auto flex flex-col items-center gap-4">

        <img src="/icons/Notif.png" className="w-8 h-8" />

        {/* PROFILE = LOGOUT 🔥 */}
        <img
          src="/icons/Profile.png"
          onClick={() => {
            localStorage.removeItem("role");
            navigate("/login");
          }}
          className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          title="Logout"
        />

        <div className="bg-purple-600 p-2 rounded-full">
          <img src="/icons/Dark Mode.png" className="w-6 h-6 invert" />
        </div>

      </div>

    </div>
  );
}