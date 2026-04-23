import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewSupplier() {
  const navigate = useNavigate();

  // FORM
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // SELECTED ITEMS
  const [selectedItems, setSelectedItems] = useState([]);

  const [error, setError] = useState("");

  // PRODUCTS (DUMMY)
  const [products] = useState([
    {
            id: 1,
            name: "Semen Portland 40 kg",
            category: "Semen",
            price: "65000",
            stock: "50pcs",
            image: "/image/SEMEN.webp",
        },
        {
            id: 2,
            name: "Cat Tembok Interior 5 kg",
            category: "Cat",
            price: "185000",
            stock: "80cat",
            image: "/image/CAT TEMBOK.jpg",
        },
        {
            id: 3,
            name: "Keramik Lantai 40x40cm",
            category: "Keramik",
            price: "75000",
            stock: "900dus",
            image: "/image/KERAMIK.webp",
        },
        {
            id: 4,
            name: "Pipa PVC AW 1/2inch x 4m",
            category: "Pipa",
            price: "35000",
            stock: "600pcs",
            image: "/image/PIPA PVC.jpg",
        },
        {
            id: 5,
            name: "Baja Ringan 0.75mm x 6 m",
            category: "Baja Ringan",
            price: "95000",
            stock: "900pcs",
            image: "/image/BAJA RINGAN.webp",
        },
        {
            id: 6,
            name: "Kuas Cat 3inch",
            category: "Alat Cat",
            price: "15000",
            stock: "550pcs",
            image: "/image/KUAS .jpg",
        },
        {
            id: 7,
            name: "Paku Kayu 3inch (kg)",
            category: "Paku & Baut",
            price: "20000",
            stock: "200kg",
            image: "/image/PAKU KAYU.jpeg",
        },
        {
            id: 8,
            name: "Kran Air 1/2inch",
            category: "Saniter",
            price: "45000",
            stock: "350pcs",
            image: "/image/KRAN AIR.webp",
        },
        {
            id: 9,
            name: "Mortar Instan 40Kg",
            category: "Semen",
            price: "85000",
            stock: "230pcs",
            image: "/image/MORTAR INSTAN.webp",
        },
        {
            id: 10,
            name: "Bata Ringan 60 x 20 x 10 cm",
            category: "Bata",
            price: "10000",
            stock: "1200pcs",
            image: "/image/BATA RINGAN.jpeg",
        },
        {
            id: 11,
            name: "Besi Beton 10mm x 12mm",
            category: "Besi",
            price: "82000",
            stock: "120pcs",
            image: "/image/BESI BETON POLOS.png",
        },
        {
            id: 12,
            name: "Grendel Pintu 4inch",
            category: "Aksesori Pintu",
            price: "25000",
            stock: "80pcs",
            image: "/image/GRENDEL PINTU.webp",
        },
        {
            id: 13,
            name: "Kabel Listrik NYM 2 x 1.5mm",
            category: "Elektrikal",
            price: "12000",
            stock: "500meter",
            image: "/image/KABEL LISTRIK.jpg",
        },
         {
            id: 14,
            name: "Atap Galvalum 1.8 m x 80 cm",
            category: "Atap",
            price: "70000",
            stock: "170pcs",
            image: "/image/ATAP GALVANUM.webp",
        },
         {
            id: 15,
            name: "Lem Pipa PVC 40 gram",
            category: "Lem",
            price: "10000",
            stock: "70pcs",
            image: "/image/LEM PIPA PVC.png",
        },
         {
            id: 16,
            name: "Tangga Alumunium 1.5meter",
            category: "Alat Kerja",
            price: "450000",
            stock: "25pcs",
            image: "/image/TANGGA ALUMINIUM.jpg",
        },
         {
            id: 17,
            name: "Tandon Air 500Liter",
            category: "Tangki Air",
            price: "1200000",
            stock: "10",
            image: "/image/TANDON AIR.jpg",
        },
         {
            id: 18,
            name: "Engsel Pintu 4 inch",
            category: "Aksesori Pintu",
            price: "40000",
            stock: "60Pasang",
            image: "/image/ENGSEL PINTU.jpg",
        },
         {
            id: 19,
            name: "Sekop Pasir",
            category: "Alat Kerja",
            price: "55000",
            stock: "32pcs",
            image: "/image/SEKOP.jpg",
        },
         {
            id: 20,
            name: "Wood Filler 1Kg",
            category: "Finishing",
            price: "35000",
            stock: "40pcs",
            image: "/image/WOOD FILLER.avif",
        },
  ]);

  // TOGGLE SELECT ITEM
  const toggleItem = (item) => {
    setSelectedItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  // SUBMIT
  const handleAdd = () => {
    console.log({
      companyName,
      phone,
      email,
      address,
      items: selectedItems,
    });

    if (!companyName || !phone || !email || !address) {
    setError("Semua field wajib diisi");
    return;
  }

  setError("");

    navigate("/supplier", {
        state: { success: "Supplier berhasil ditambah" }
        });
    };

  return (
    <div className="flex min-h-screen bg-[#EAEAEA] items-stretch">

      {/* LEFT: PRODUCT GRID */}
      <div className="flex-1 p-6 overflow-y-auto">

        <h1 className="text-[32px] font-semibold mb-6">
          Add Supplier
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {products.map((item) => {
            const isSelected = selectedItems.find(i => i.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item)}
                className={`p-4 rounded-2xl cursor-pointer transition
                ${isSelected
                  ? "bg-[#702BF0] text-white scale-[1.02]"
                  : "bg-white hover:scale-[1.02]"}
                `}
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[182px] object-cover rounded-xl"
                />

                {/* BADGE */}
                <div className="mt-3">
                  <span className={`text-[12px] px-[15px] py-[5px] rounded-full
                    ${isSelected ? "bg-white text-black" : "bg-[#EAEAEA]"}
                  `}>
                    {item.category}
                  </span>
                </div>

                {/* NAME */}
                <p className="text-[14px] font-semibold mt-2">
                  {item.name}
                </p>

                {/* PRICE */}
                <p className={`${isSelected ? "text-white" : "text-[#702BF0]"} font-semibold`}>
                  Rp {item.price.toLocaleString("id-ID")}
                </p>

                {/* STOCK */}
                <div className="flex justify-between mt-2 text-[12px]">
                  <span className={`${isSelected ? "text-white/70" : "text-gray-400"}`}>
                    Quantity
                  </span>
                  <span className={`${isSelected ? "text-white" : "text-[#702BF0]"}`}>
                    {item.stock}
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: FORM PANEL */}
      <div className="w-[400px] h-screen sticky top-0 bg-white p-6 flex flex-col shadow-lg">

        <h2 className="text-[28px] font-semibold mb-6">
          Add Supplier
        </h2>

        <div className="flex flex-col gap-4">

          {/* COMPANY */}
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          {/* PHONE */}
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          {/* EMAIL */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          {/* ADDRESS */}
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          {/* SELECTED INFO */}
          <p className="text-sm text-gray-400">
            {selectedItems.length} item selected
          </p>

        </div>

        {error && (
        <p className="text-red-500 text-sm mt-2">
            {error}
        </p>
        )}

        {/* BUTTON */}
        <div className="mt-auto flex justify-end gap-3 pt-6">

          <button
            onClick={() => navigate("/supplier")}
            className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:scale-110 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className={`px-6 py-2 rounded-full text-white
            ${
              !companyName || !phone || !email || !address
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#702BF0] hover:opacity-80 cursor-pointer hover:scale-110 transition"
            }`}
          >
            Add
          </button>

        </div>

      </div>
    </div>
  );
}