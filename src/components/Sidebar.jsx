import { NavLink } from "react-router-dom";

const menus = [
  { path: "/", icon: "/icons/Home.png" },
  { path: "/Cashier", icon: "/icons/Cashier.png" },
  { path: "/Product", icon: "/icons/Item.png" },
  { path: "/Warehouse", icon: "/icons/Warehouse.png" },
  { path: "/Supplier", icon: "/icons/Supplier.png" },
  { path: "/history", icon: "/icons/History.png" },
];

export default function Sidebar() {
  return (
    <div className="w-20 h-screen bg-white fixed left-0 top-0 flex flex-col items-center py-4">

      {/* Menu */}
      <div className="flex flex-col gap-4">
        {menus.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
                `w-12 h-12 flex items-center justify-center rounded-2xl transition ${
                isActive ? "bg-purple-100" : "hover:bg-gray-100"
                }`
            }
            >
            <img
                src={item.icon}
                className="w-9 h-9 object-contain"
            />
           </NavLink>
        ))}
      </div>

      {/* Bottom icon (settings/profile) */}
      <div className="mt-auto flex flex-col items-center gap-4">
        <img src="/icons/Notif.png" className="w-9 h-9 " />
        <img src="/icons/Profile.png" className="w-9 h-9 " />
        <div className="bg-purple-600 p-3 rounded-full">
          <img src="/icons/Dark Mode.png" className="w-9 h-9 invert" />
        </div>
      </div>

    </div>
  );
}