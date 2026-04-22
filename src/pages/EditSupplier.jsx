import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditSupplier() {
  const navigate = useNavigate();
  const location = useLocation();

  // ambil data dari navigate state
  const supplier = location.state?.supplier;

  // FORM PREFILL
  const [companyName, setCompanyName] = useState(supplier?.name || "");
  const [phone, setPhone] = useState(supplier?.phone || "");
  const [email, setEmail] = useState(supplier?.email || "");
  const [address, setAddress] = useState(supplier?.address || "");

  const [error, setError] = useState("");

  // PRODUCTS (SAMA DENGAN ADD)
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
  ]);

  // 🔥 SELECTED ITEMS (DUMMY PREFILL)
  const [selectedItems, setSelectedItems] = useState([
    products[0],
    products[1],
  ]);

  // TOGGLE ITEM
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
  const handleUpdate = () => {
    if (!companyName || !phone || !email || !address) {
      setError("Semua field wajib diisi");
      return;
    }

    setError("");

    console.log("UPDATE SUPPLIER:", {
      companyName,
      phone,
      email,
      address,
      items: selectedItems,
    });

    navigate("/supplier", {
    state: { success: "Supplier berhasil diupdate" }
    });
  };

  return (
    <div className="flex min-h-screen bg-[#EAEAEA]">

      {/* LEFT */}
      <div className="flex-1 p-6 overflow-y-auto">

        <h1 className="text-[32px] font-semibold mb-6">
          Edit Supplier
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

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[182px] object-cover rounded-xl"
                />

                <div className="mt-3">
                  <span className={`text-[12px] px-[15px] py-[5px] rounded-full
                    ${isSelected ? "bg-white text-black" : "bg-[#EAEAEA]"}
                  `}>
                    {item.category}
                  </span>
                </div>

                <p className="text-[14px] font-semibold mt-2">
                  {item.name}
                </p>

                <p className={`${isSelected ? "text-white" : "text-[#702BF0]"} font-semibold`}>
                  Rp {item.price.toLocaleString("id-ID")}
                </p>

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

      {/* RIGHT PANEL */}
      <div className="w-[400px] bg-white p-6 flex flex-col ">

        <h2 className="text-[28px] font-semibold mb-6">
          Edit Supplier
        </h2>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              setError("");
            }}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError("");
            }}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setError("");
            }}
            className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
          />

          {/* INFO */}
          <p className="text-sm text-gray-400">
            {selectedItems.length} item selected
          </p>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

        </div>

        {/* BUTTON */}
        <div className="mt-auto flex justify-end gap-3 pt-6">

          <button
            onClick={() => navigate("/supplier")}
            className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:scale-110 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-[#702BF0] text-white rounded-full hover:opacity-80 cursor-pointer hover:scale-110 transition"
          >
            Update
          </button>

        </div>

      </div>
    </div>
  );
}