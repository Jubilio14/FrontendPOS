import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function History() {
  // 🔥 STATE
  const [activeTab, setActiveTab] = useState("product");
  const [filterType, setFilterType] = useState("all"); // all | in | out

  const navigate = useNavigate();

  // 🔥 DATA DUMMY

const productHeader = [
  "Date",
  "Reference ID",
  "Item Name",
  "Quantity",
  "Unit Price (Rp)",
  "Total Price (Rp)",
];

const orderHeader = [
  "Date",
  "Time",
  "Order ID",
  "Total Item",
  "Total Price",
  "Document",
];

  const productHistory = [
    {
      date: "16 Feb 2026",
      ref: "PO-2026-001",
      name: "Semen Portland 40Kg",
      qty: 200,
      price: 18000,
    },
    {
      date: "16 Feb 2026",
      ref: "SO-2026-001",
      name: "Cat Tembok Interior 5 kg",
      qty: -45,
      price: 18000,
    },
    {
      date: "16 Feb 2026",
      ref: "SO-2026-002",
      name: "Keramik Lantai 40x40cm",
      qty: -120,
      price: 6500,
    },
    {
      date: "15 Feb 2026",
      ref: "SO-2026-003",
      name: "Pipa PVC AW 1/2inch x 4m",
      qty: -300,
      price: 350,
    },
    {
      date: "15 Feb 2026",
      ref: "PO-2026-002",
      name: "Kuas Cat 3inch",
      qty: 500,
      price: 6500,
    },
    {
      date: "15 Feb 2026",
      ref: "SO-2026-004",
      name: "Kran Air 1/2inch",
      qty: -35,
      price: 25000,
    },
    {
      date: "15 Feb 2026",
      ref: "SO-2026-005",
      name: "Bata Ringan 60 x 20 x 10 cm",
      qty: -28,
      price: 28000,
    },
    {
      date: "14 Feb 2026",
      ref: "SO-2026-006",
      name: "Lem Pipa PVC 40 gram",
      qty: -60,
      price: 12000,
    },
    {
      date: "14 Feb 2026",
      ref: "PO-2026-003",
      name: "Sekop Pasir",
      qty: 80,
      price: 55000,
    },
    {
      date: "13 Feb 2026",
      ref: "SO-2026-007",
      name: "Wood Filler 1Kg",
      qty: -40,
      price: 32000,
    },
    {
      date: "13 Feb 2026",
      ref: "SO-2026-008",
      name: "Wood Filler 1Kg",
      qty: -22,
      price: 65000,
    },
  ];

 const orderHistory = [
    {
      date: "06 Mar 2026",
      time: "16:11",
      orderId: "ORD-10250",
      totalItem: 18,
      totalPrice: 2450000,
    },
    {
      date: "06 Mar 2026",
      time: "15:27",
      orderId: "ORD-10248",
      totalItem: 25,
      totalPrice: 3120000,
    },
    {
      date: "06 Mar 2026",
      time: "14:02",
      orderId: "ORD-10248",
      totalItem: 12,
      totalPrice: 1780000,
    },
    {
      date: "06 Mar 2026",
      time: "13:11",
      orderId: "ORD-10247",
      totalItem: 20,
      totalPrice: 2960000,
    },
    {
      date: "06 Mar 2026",
      time: "12:05",
      orderId: "ORD-10246",
      totalItem: 15,
      totalPrice: 2140000,
    },
    {
      date: "06 Mar 2026",
      time: "11:20",
      orderId: "ORD-10245",
      totalItem: 22,
      totalPrice: 3480000,
    },
    {
      date: "06 Mar 2026",
      time: "10:37",
      orderId: "ORD-10244",
      totalItem: 14,
      totalPrice: 1920000,
    },
    {
      date: "06 Mar 2026",
      time: "10:03",
      orderId: "ORD-10243",
      totalItem: 17,
      totalPrice: 2310000,
    },
    {
      date: "06 Mar 2026",
      time: "09:45",
      orderId: "ORD-10242",
      totalItem: 21,
      totalPrice: 2870000,
    },
    {
      date: "06 Mar 2026",
      time: "09:12",
      orderId: "ORD-10241",
      totalItem: 16,
      totalPrice: 2050000,
    },
  ]; 
  // 🔥 FILTER LOGIC
  const filteredData =
  activeTab === "product"
    ? productHistory.filter((item) => {
        if (filterType === "in") return item.qty > 0;
        if (filterType === "out") return item.qty < 0;
        return true;
      })
    : orderHistory;

  const handleToggleFilter = () => {
    if (filterType === "all") setFilterType("in");
    else if (filterType === "in") setFilterType("out");
    else setFilterType("all");
  };

const data = activeTab === "product" ? productHistory : orderHistory;
const headers = activeTab === "product" ? productHeader : orderHeader;

  return (
    <div className="p-6">

      {/* TITLE */}
      <h1 className="text-[44px] leading-[66px] text-[#1D1D1D] font-semibold mb-6">
        History
      </h1>

      {/* TAB + FILTER */}
      <div className="flex justify-between items-center mb-4">

        {/* TAB */}
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("product")}
            className={`px-[30px] py-[10px] gap-[10px] rounded-full text-[14px] leading-[21px] font-medium cursor-pointer ${
              activeTab === "product"
                ? "bg-[#702BF0] text-[#EAEAEA]"
                : "bg-[#FFFFFF] text-[#1D1D1D]"
            }`}
          >
            Product
          </button>

          <button
            onClick={() => setActiveTab("order")}
            className={`px-[30px] py-[10px] gap-[10px] rounded-full text-[14px] leading-[21px] font-medium cursor-pointer ${
              activeTab === "order"
                ? "bg-[#702BF0] text-[#EAEAEA]"
                : "bg-[#FFFFFF] text-[#1D1D1D] "
            }`}
          >
            Order
          </button>
        </div>

       {/* FILTER */}
{/* FILTER */}
<div className="flex gap-3">

  {/* ALL */}
  <button
    onClick={() => setFilterType("all")}
    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer shadow transition-all duration-200
      ${
        filterType === "all"
          ? "bg-[#702BF0] scale-105"
          : "bg-white hover:scale-105 hover:shadow-md"
      }`}
  >
    <img
      src="/icons/all.png"
      className={`w-[20px] h-[20px] ${
        filterType === "all"
          ? "brightness-0 invert"
          : ""
      }`}
    />
  </button>

  {/* IN */}
  <button
    onClick={() => setFilterType("in")}
    className="cursor-pointer transition-all duration-200 hover:scale-105"
  >
    <img
      src="/icons/in.png"
      className={`w-[40px] h-[40px] object-contain ${
        filterType === "in" ? "scale-115" : ""
      }`}
    />
  </button>

  {/* OUT */}
  <button
    onClick={() => setFilterType("out")}
    className="cursor-pointer transition-all duration-200 hover:scale-105"
  >
    <img
      src="/icons/out.png"
      className={`w-[40px] h-[40px] object-contain ${
        filterType === "out" ? "scale-115" : ""
      }`}
    />
  </button>

</div>

      </div>

      {/* TABLE */}
      <div className="bg-[#FFFFFF] rounded-xl p-4 shadow-sm">

        {/* HEADER */}
        <div className="grid grid-cols-6 text-[14px] leading-[21px] text-[#1D1D1D] font-medium mb-[10px] padding-[20px] gap-[10px]">
           {headers.map((h, i) => (
                <span key={i}>{h}</span>
            ))}
        </div>

        {/* ROW */}
        {filteredData.length === 0 ? (
        <div className="text-center py-10 text-gray-400 text-sm">
            Tidak ada data
        </div>
        ) : (
        filteredData.map((item, i) => (
            <div
            key={i}
            className="grid grid-cols-6 items-center py-[20px] gap-[10px] border-b last:border-none text-[14px] leading-[21px] font-medium text-[#1D1D1D] hover:bg-gray-50 transition"
            >

            {activeTab === "product" ? (
                <>
                <span>{item.date}</span>
                <span>{item.ref}</span>
                <span>{item.name}</span>

                {/* QTY */}
                <span
                    className={`font-semibold ${
                    item.qty > 0 ? "text-green-500" : "text-[#702BF0]"
                    }`}
                >
                    {item.qty > 0 ? `+${item.qty}` : item.qty}
                </span>

                {/* PRICE */}
                <span>
                    {item.price.toLocaleString("id-ID")}
                </span>

                {/* TOTAL */}
                <span>
                    {(item.price * Math.abs(item.qty)).toLocaleString("id-ID")}
                </span>
                </>
            ) : (
                <>
                <span>{item.date}</span>
                <span>{item.time}</span>
                <span>{item.orderId}</span>
                <span>{item.totalItem}</span>

                {/* TOTAL PRICE */}
                <span>
                    {item.totalPrice.toLocaleString("id-ID")}
                </span>

                {/* DOCUMENT */}
                <span>
                    <img
                    src="/icons/document.png"
                    className="w-[12px] cursor-pointer hover:opacity-70 transition"
                    onClick={() => navigate("/history/order-detail")}
                    />
                </span>
                </>
            )}

            </div>
        ))
        )}

      </div>
    </div>
  );
}