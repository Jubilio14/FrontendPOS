import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Warehouse() {
  const navigate = useNavigate();

  // 🔥 DUMMY DATA (1 ORDER)
  const orderItems = [
    {
      name: "Gudang Sentral Logistik Utama",
      address: "Jl. Industri Raya No. 12, Bekasi, Jawa Barat",
      floor: "3",
      gfa: 12500,
      storageArea: 48,
    },
    {
      name: "Gudang Distribusi Nusantara",
      address: "Jl. Pergudangan Blok C5, Tangerang, Banten",
      floor: "2",
      gfa: 8200,
      storageArea: 32,
    },
    {
      name: "Gudang Mitra Supply Chain",
      address: "Jl. Raya Karawang KM 15, Karawang, Jawa Barat",
      floor: "4",
      gfa: 15000,
      storageArea: 60,
    },
    {
      name: "Gudang Central Inventory",
      address: "Jl. Kawasan Industri No. 88, Cikarang, Jawa Barat",
      floor: "3",
      gfa: 10750,
      storageArea: 41,
    },
    {
      name: "Gudang Utama Regional Barat",
      address: "Jl. Veteran No. 21, Bandung, Jawa Barat",
      floor: "2",
      gfa: 6900,
      storageArea: 27,
    },
    {
      name: "Gudang Hub Distribusi Nasional",
      address: "Jl. Lingkar Timur No. 45, Surabaya, Jawa Timur",
      floor: "5",
      gfa: 18300,
      storageArea: 75,
    },
    {
      name: "Gudang Penyimpanan Utama",
      address: "Jl. Pelabuhan No. 9, Semarang, Jawa Tengah",
      floor: "3",
      gfa: 9600,
      storageArea: 36,
    },
    {
      name: "Gudang Logistic Fullfilment Centre",
      address: "Jl. Soekarno Hatta KM 23, Medan, Sumatera Utara",
      floor: "4",
      gfa: 14200,
      storageArea: 54,
    },
  ];

   const [animateCart, setAnimateCart] = useState(false);
   const [showAddWarehouse, setShowAddWarehouse] = useState(false);
   const [warehouseName, setWarehouseName] = useState("");
   const [address, setAddress] = useState("");
   const [floor, setFloor] = useState("");
   const [gfa, setGFA] = useState("");
   const [storageArea, setStorageArea] = useState("");
   const [errorWarehouse, setErrorWarehouse] = useState("");
   
  const [warehouse, setWarehouse] = useState(orderItems);

   const handleAddItem = () => {
    const name = warehouseName.trim();

      if (!name || !address || !floor || !gfa || !storageArea) {
        setErrorWarehouse("Semua field wajib diisi");
        return;
      }

      const newItem = {
        id: Date.now(),
        name,
        address,
        floor,
        gfa,
        storageArea,
      };

      setWarehouse((prev) => [...prev, newItem]);

      // reset form
      setWarehouseName("");
      setAddress("");
      setGFA("");
      setFloor("");
      setStorageArea("");
      setErrorWarehouse("");

      setShowAddWarehouse(false);
    };

  return (
    <div className="p-6">

      {/* Header */}
        <div className="flex justify-between items-center mb-6">

            {/* Kiri */}
            <div>
            <h1 className="text-[44px] font-semibold leading-[66px]">
                Warehouse
            </h1>
            </div>

            {/* Kanan (Search) */}
            <div className="w-[48px] h-[48px] bg-white rounded-full shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/icons/searchIcon.png" alt="search" className="w-[24px] h-[24px]" />
            </div>

        </div>

      {/* TABLE */}
      <div id="pdf-content" className="bg-white text-black rounded-2xl p-6">

        {/* HEADER TABLE */}
        <div className="grid grid-cols-[50px_2fr_3fr_1fr_1fr_1fr] text-[14px] leading-[21px] font-medium text-[#1D1D1D] px-[20px] py-[30px] gap-[20px]">
          <span>No</span>
          <span>Warehouse Name</span>
          <span>Address</span>
          <span>Floor</span>
          <span>GFA</span>
          <span>Storage Area</span>
        </div>

        {/* ROW */}
        {warehouse.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[50px_2fr_3fr_1fr_1fr_1fr] items-center p-[20px] gap-[20px] border-b last:border-none text-[14px] leading-[21px] font-medium text-[#1D1D1D] hover:bg-gray-50 transition"
          >
            <span>{i + 1}</span>
            <span>{item.name}</span>
            <span>{item.address}</span>
            <span>{item.floor}</span>
            <span>{item.gfa}</span>
            <span>{item.storageArea}</span>
          </div>
        ))}

      </div>

      {/* ADD Floating  */}
        <div
            onClick={() => setShowAddWarehouse(true)}
            className={`bottom-6 right-[24px] z-[10] w-[64px] h-[64px] bg-[#DF5C53] rounded-full flex items-center justify-center cursor-pointer shadow-lg relative 
              ${animateCart ? "scale-125" : "scale-100"}  `}
            style={{ position: "fixed" }}
        >
            <img src="/icons/Plus.png" className="w-[28px] h-[28px]" />
        </div>

        {/* ADD ITEM MODAL */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showAddWarehouse ? "visible" : "invisible"}
        `}>

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showAddWarehouse ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowAddWarehouse(false)}
        ></div>

        {/* PANEL */}
        <div
            className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
            ${showAddWarehouse ? "translate-x-0" : "translate-x-full"}
            `}
        >

            {/* TITLE */}
            <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
            Add Warehouse
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
                placeholder="Warehouse Name"
                value={warehouseName}
                onChange={(e) => setWarehouseName(e.target.value)}
                className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
              />
            </div>

            {/* Address */}
            <div className="relative group">
              <img
                src="/icons/Location.png"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                setAddress(e.target.value);
                }}
                className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
              />
            </div>
            

            {/* Floor */}
            <div className="relative group">
              <img
                src="/icons/Floor.png"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
              />
              <input
                type="text"
                placeholder="Floor"
                value={floor}
                onChange={(e) => {
                setFloor(e.target.value);
                }}
                className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
              />
            </div>
            

            {/* GFA */}
            <div className="relative group">
              <img
                src="/icons/Warehouse.png"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
              />
              <input
                type="text"
                placeholder="GFA"
                value={gfa}
                onChange={(e) => {
                setGFA(e.target.value);
                }}
                className="h-[50px] bg-[#EAEAEA] w-full pl-10 pr-4 rounded-full  outline-none"
              />
            </div>

            {/* CODE */}
            <div className="relative group">
              <img
                src="/icons/Warehouse.png"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] opacity-50"
              />
              <input
                type="text"
                placeholder="Code"
                value={storageArea}
                onChange={(e) => {
                setStorageArea(e.target.value);
                }}
                className="h-[50px] bg-[#EAEAEA] w-full pl-10 pr-4 rounded-full px-4 outline-none"
              />
            </div>
            
            {/* Button */}
            <div className="mt-auto flex justify-end gap-3 pt-6">

              <button
                onClick={() => setShowAddWarehouse(false)}
                className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleAddItem}
                className={`px-6 py-2 rounded-full text-white ${
                  !warehouseName || !address || !floor || !gfa || !storageArea
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

    </div>
  );
}