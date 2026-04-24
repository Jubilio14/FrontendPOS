import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  // 🔥 LOGOUT MODAL STATE
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // 🔥 ADMIN
  const adminMenus = [
    {
      path: "/",
      activeIcon: "/icons/Home.png",
      inactiveIcon: "/icons/HomeWhite.png",
    },
    {
      path: "/cashier",
      activeIcon: "/icons/Cashier.png",
      inactiveIcon: "/icons/CashierWhite.png",
    },
    {
      path: "/product",
      activeIcon: "/icons/Item.png",
      inactiveIcon: "/icons/ItemWhite.png",
    },
    {
      path: "/warehouse",
      activeIcon: "/icons/Warehouse.png",
      inactiveIcon: "/icons/WarehouseWhite.png",
    },
    {
      path: "/supplier",
      activeIcon: "/icons/Supplier.png",
      inactiveIcon: "/icons/SupplierWhite.png",
    },
    {
      path: "/history",
      activeIcon: "/icons/History.png",
      inactiveIcon: "/icons/HistoryWhite.png",
    },
  ];

  // 🔥 CASHIER
  const cashierMenus = [
    { path: "/cashier", activeIcon: "/icons/Cashier.png",
      inactiveIcon: "/icons/CashierWhite.png", },
  ];

  const menus = role === "admin" ? adminMenus : cashierMenus;

  return (
    <>
      <div className="w-20 h-screen bg-white fixed left-0 top-0 flex flex-col items-center py-4">

        {/* MENU */}
        <div className="flex flex-col gap-4">
          {menus.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {({ isActive }) => (
                <div
                  className={`w-12 h-12 flex flex-col items-center justify-center rounded-2xl 
                  transition-all duration-200
                  ${isActive ? "scale-110" : "hover:scale-105"}`}
                >
                  {/* ICON */}
                  <img
                    src={isActive ? item.activeIcon : item.inactiveIcon}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-auto flex flex-col items-center gap-4">

          {/* PROFILE = OPEN LOGOUT MODAL */}
          <img
            src="/icons/Profile.png"
            onClick={() => setShowLogoutModal(true)}
            className="w-8 h-8 cursor-pointer hover:scale-110 transition"
            title="Logout"
          />

          <div className="bg-[#702BF0] p-2 rounded-full">
            <img
              src="/icons/LightIcon.png"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      {/* LOGOUT MODAL */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300
        ${showLogoutModal ? "visible" : "invisible"}`}
      >
        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300
          ${showLogoutModal ? "opacity-100" : "opacity-0"}`}
          onClick={() => setShowLogoutModal(false)}
        />

        {/* MODAL BOX */}
        <div
          className={`relative bg-white w-[420px] rounded-3xl p-8 shadow-lg z-10
          transform transition-all duration-300
          ${showLogoutModal ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <h2 className="text-[28px] font-semibold text-[#1D1D1D] mb-3">
            Logout?
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Apakah kamu yakin ingin keluar dari sistem?
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="px-6 py-2 bg-[#EAEAEA] rounded-full hover:opacity-80 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("role");
                navigate("/login");
              }}
              className="px-6 py-2 bg-[#702BF0] text-white rounded-full hover:opacity-80 transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}