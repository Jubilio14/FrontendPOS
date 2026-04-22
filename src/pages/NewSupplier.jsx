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
      name: "Keramik",
      category: "Botol & Tumbler",
      price: 20000,
      stock: 200,
      image: "/cashier.png",
    },
    {
      id: 2,
      name: "Piring",
      category: "Wadah Makanan",
      price: 15000,
      stock: 150,
      image: "/cashier.png",
    },
    {
      id: 3,
      name: "Botol",
      category: "Kantong & Kemasan",
      price: 18000,
      stock: 100,
      image: "/cashier.png",
    },
    {
            id: 4,
            name: "Botol",
            category: "Peralatan Rumah",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 5,
            name: "Botol",
            category: "Penyimpanan",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 6,
            name: "Botol",
            category: "Peralatan Makanan",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 7,
            name: "Botol",
            category: "Kantong & Kemasan",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 8,
            name: "Botol",
            category: "Peralatan Makan",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 9,
            name: "Botol",
            category: "Penyimpanan",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 10,
            name: "Botol",
            category: "Wadah Makanan",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
        },
        {
            id: 11,
            name: "Botol",
            category: "Botol & Tumbler",
            price: 18000,
            stock: 100,
            image: "/cashier.png",
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
                    {item.stock} pcs
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: FORM PANEL */}
      <div className="w-[400px] bg-white p-6 flex flex-col shadow-lg">

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