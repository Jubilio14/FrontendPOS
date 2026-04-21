import { useLocation, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react"; // 🔥 INI YANG KURANG

export default function WarehouseDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const warehouseName = location.state?.name || "Warehouse";

  // 🔥 PREFIX
  const generatePrefix = (name) => {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  const prefix = generatePrefix(warehouseName);

  // 🔥 STATUS LOGIC
  const getStatus = (total, max) => {
    if (total === 0) return "Empty";
    if (total >= max) return "Full";
    if (total < max * 0.3) return "Warning";
    return "Safe";
  };

  // 🔥 DATA YANG ADA
  const items = [
    {
      name: "Botol Plastik PET",
      variant: "600 ml",
      type: "Bening",
      max: 500,
      total: 400,
    },
    {
      name: "Kotak Makan Plastik",
      variant: "1000 ml",
      type: "Transparan",
      max: 300,
      total: 50,
    },
    {
      name: "Ember Plastik",
      variant: "20 Liter",
      type: "Merah",
      max: 150,
      total: 0,
    },
    {
      name: "Gelas Plastik",
      variant: "1 Liter",
      type: "Merah",
      max: 150,
      total: 150,
    },
  ];

  // 🔥 TOTAL SLOT (biar banyak row)
  const totalRows = 12;

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAddItem, setShowAddItem] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionIndex, setActionIndex] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editTotal, setEditTotal] = useState("");

  const [form, setForm] = useState({
    name: "",
    variant: "",
    type: "",
    max: "",
    total: "",
  });

  const [error, setError] = useState("");
  const [customItems, setCustomItems] = useState({});

  // 🔥 GABUNG DATA + SLOT KOSONG
  const data = Array.from({ length: totalRows }, (_, i) => {
    const custom = customItems[i];
    const item = custom || items[i];

    if (item) {
      return {
        ...item,
        code: `${prefix}-${String(i + 1).padStart(3, "0")}`,
        status: getStatus(item.total, item.max),
      };
    }

    return {
      code: `${prefix}-${String(i + 1).padStart(3, "0")}`,
      name: "",
      variant: "",
      type: "",
      max: "",
      total: "",
      status: "",
    };
  });

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[44px] font-semibold leading-[66px] text-[#1D1D1D]">
            {warehouseName}
          </h1>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-black cursor-pointer "
        >
          ← Back
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl overflow-hidden">

        {/* HEADER TABLE */}
        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_80px] px-6 py-4 text-[14px] font-medium text-[#1D1D1D] text-[14px] leading-[21px] font-medium ">
          <span>Code</span>
          <span>Item</span>
          <span>Type</span>
          <span>Variant</span>
          <span>Max Item</span>
          <span>Total Item</span>
          <span>Status</span>
          <span className="text-center">Action</span>
        </div>

        {/* ROW */}
        {data.map((item, i) => {
          const hasData = item.name !== "";

          return (
            <div
              key={i}
              className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_80px] px-6 py-4 text-[14px] leading-[21px] border-b last:border-none items-center hover:bg-gray-50 transition"
            >
              {/* CODE */}
              <span className="font-semibold">{item.code}</span>

              {/* DATA */}
              <span className={hasData ? "" : "text-gray-300"}>
                {item.name || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.type || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.variant || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.max || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.total || "-"}
              </span>

              {/* STATUS */}
              <span
                className={`font-semibold ${
                  item.status === "Safe"
                    ? "text-green-500"
                    : item.status === "Warning"
                    ? "text-yellow-500"
                    : item.status === "Empty"
                    ? "text-gray-400"
                    : item.status === "Full"
                    ? "text-red-500"
                    : "text-gray-300"
                }`}
              >
                {item.status || "-"}
              </span>

              {/* ACTION */}
              <div className="flex justify-center">
                {hasData ? (
                  <button 
                    onClick={() => {
                      setActionIndex(i);
                      setShowActionModal(true);
                    }}
                    className="hover:scale-110 transition cursor-pointer">
                    <img
                      src="/icons/Transfer.png" 
                      className="w-[18px] opacity-60 hover:opacity-100"
                    />
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      setSelectedIndex(i);
                      setShowAddItem(true);
                    }}
                    className="text-[#702BF0] text-[20px] hover:scale-110 transition cursor-pointer">
                    <img
                      src="/icons/plusPurple.png" 
                      className="w-[18px] opacity-60 hover:opacity-100"
                    />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

        {/* Modal Add Item */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
          ${showAddItem ? "visible" : "invisible"}
          `}>
            <div
                className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
                ${showAddItem ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowAddItem(false)}
            ></div>

            {/* PANEL */}
            <div
                className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
                ${showAddItem ? "translate-x-0" : "translate-x-full"}
                `}
            >

                {/* TITLE */}
                <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
                Add Item Warehouse
                </h2>
                
                {/* FORM */}
                <div className="flex flex-col gap-4">

                {/* NAME */}
                <div className="relative group">
                    <img
                      src="/icons/Warehouse.png"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
                    />

                    <input
                      type="text"
                      placeholder="Item Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                    />
                </div>

                {/* VARIANT */}
                <div className="relative group">
                    <img
                      src="/icons/Warehouse.png"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
                    />

                    <input
                      type="text"
                      placeholder="Variant"
                      value={form.variant}
                      onChange={(e) => setForm({ ...form, variant: e.target.value })}
                      className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                    />
                </div>

                {/* TYPE */}
                <div className="relative group">
                    <img
                      src="/icons/Warehouse.png"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
                    />

                    <input
                      type="text"
                      placeholder="Type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                    />
                </div>

                {/* MAX ITEM */}
                <div className="relative group">
                    <img
                      src="/icons/Warehouse.png"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
                    />

                    <input
                      type="number"
                      placeholder="Max Item"
                      value={form.max}
                      onChange={(e) => setForm({ ...form, max: e.target.value })}
                      className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                    />
                </div>

                {/* Total Item */}
                <div className="relative group">
                    <img
                      src="/icons/Warehouse.png"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
                    />

                    <input
                      type="number"
                      placeholder="Total Item"
                      value={form.total}
                      onChange={(e) => setForm({ ...form, total: e.target.value })}
                      className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                    />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                {/* Button */}
                <div className="mt-auto flex justify-end gap-3 pt-6">

                  <button
                    onClick={() => setShowAddItem(false)}
                    className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                        const max = Number(form.max);
                        const total = Number(form.total);

                        if (!form.name || !form.variant || !form.type || !max || !total) {
                          setError("Semua field wajib diisi");
                          return;
                        }

                        if (total > max) {
                          setError("Total Item tidak boleh lebih dari Max Total Item di Warehouse");
                          return;
                        }

                        // 🔥 SIMPAN KE SLOT
                        setCustomItems((prev) => ({
                          ...prev,
                          [selectedIndex]: {
                            ...form,
                            max,
                            total,
                          },
                        }));

                        // reset
                        setForm({
                          name: "",
                          variant: "",
                          type: "",
                          max: "",
                          total: "",
                        });

                        setError("");
                        setShowAddItem(false);
                      }}
                    className={`px-6 py-2 rounded-full text-white ${
                      !form.name || !form.variant || !form.type || !form.max || !form.total
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#702BF0] cursor-pointer hover:opacity-80 transition"
                    }`}
                  >
                    Add
                  </button>

                </div>

                </div>

                
            </div>

          </div>

        {/* Modal Action */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
          ${showActionModal? "visible" : "invisible"}
          `}>
            <div
                className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
                ${showActionModal ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowActionModal(false)}
            ></div>

            {/* PANEL */}
            <div
                className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
                ${showActionModal? "translate-x-0" : "translate-x-full"}
                `}
            >

                {/* TITLE */}
                <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
                Action Item
                </h2>
                
                {/* FORM */}
                <div className="flex flex-col gap-4">

                  <button
                    onClick={() => {
                      setEditTotal(data[actionIndex].total);
                      setShowActionModal(false);
                      setShowEditModal(true);
                    }}
                    className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
                  >
                    Edit Item
                  </button>

                  <button
                    onClick={() => {
                      alert("Transfer (dummy dulu)");
                      setShowActionModal(false);
                    }}
                    className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
                  >
                    Transfer Item
                  </button>

                </div>
                
                {/* Button */}
                <div className="mt-auto flex justify-end gap-3 pt-6">

                  <button
                    onClick={() => setShowActionModal(false)}
                    className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
                  >
                    Cancel
                  </button>

                </div>

                
            </div>

          </div>

        {/* Modal EDIT TOTAL ITEM */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
          ${showEditModal? "visible" : "invisible"}
          `}>
            <div
                className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
                ${showEditModal ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowEditModal(false)}
            ></div>

            {/* PANEL */}
            <div
                className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
                ${showEditModal? "translate-x-0" : "translate-x-full"}
                `}
            >

                {/* TITLE */}
                <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
                Edit Total Item
                </h2>
                
                {/* FORM */}
                <div className="flex flex-col gap-4">

                  {/* INFO */}
                  <p className="text-sm text-gray-400">
                    Max Item: <span className="font-semibold text-[#1D1D1D]">
                      {data[actionIndex]?.max}
                    </span>
                  </p>
                  
                  <input
                    type="number"
                    value={editTotal}
                    onChange={(e) => setEditTotal(e.target.value)}
                    className="h-[45px] bg-[#EAEAEA] rounded-full px-4 outline-none"
                  />

                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                
                {/* Button */}
                <div className="mt-auto flex justify-end gap-3 pt-6">

                  <button
                    onClick={() => setShowEditModal(false)}
                    className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      const max = data[actionIndex].max;
                      const total = Number(editTotal);

                      if (total > max) {
                          setError("Total Item tidak boleh lebih dari Max Total Item di Warehouse");
                          return;
                        }

                      // 🔥 UPDATE DATA
                      setCustomItems((prev) => ({
                        ...prev,
                        [actionIndex]: {
                          ...data[actionIndex],
                          total,
                        },
                      }));

                      setError("");
                      setShowEditModal(false);
                    }}
                    className="px-4 py-2 bg-[#702BF0] text-white rounded-full cursor-pointer hover:opacity-80"
                  >
                    Save
                  </button>

                </div>

                
            </div>

          </div>

    </div>
  );
}