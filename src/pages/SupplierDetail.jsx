import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SupplierDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const supplier = location.state?.supplier;

  // fallback biar ga error
  if (!supplier) {
    return <div className="p-6">Supplier tidak ditemukan</div>;
  }

  // 🔥 PRODUCTS (DUMMY)
  const products = [
    {
            name: "Semen Portland 40 kg",
            category: "Semen",
            price: "65.000",
            stock: "50pcs",
            image: "/image/SEMEN.webp",
        },
        {
            name: "Cat Tembok Interior 5 kg",
            category: "Cat",
            price: "185.000",
            stock: "80cat",
            image: "/image/CAT TEMBOK.jpg",
        },
        {
            name: "Keramik Lantai 40x40cm",
            category: "Keramik",
            price: "75.000",
            stock: "900dus",
            image: "/image/KERAMIK.webp",
        },
        {
            name: "Pipa PVC AW 1/2inch x 4m",
            category: "Pipa",
            price: "35.000",
            stock: "600pcs",
            image: "/image/PIPA PVC.jpg",
        },
        {
            name: "Baja Ringan 0.75mm x 6 m",
            category: "Baja Ringan",
            price: "95.000",
            stock: "900pcs",
            image: "/image/BAJA RINGAN.webp",
        },
        {
            name: "Kuas Cat 3inch",
            category: "Alat Cat",
            price: "15.000",
            stock: "550pcs",
            image: "/image/KUAS .jpg",
        },
        {
            name: "Paku Kayu 3inch (kg)",
            category: "Paku & Baut",
            price: "20.000",
            stock: "200kg",
            image: "/image/PAKU KAYU.jpeg",
        },
        {
            name: "Kran Air 1/2inch",
            category: "Saniter",
            price: "45.000",
            stock: "350pcs",
            image: "/image/KRAN AIR.webp",
        },
        {
            name: "Mortar Instan 40Kg",
            category: "Semen",
            price: "85.000",
            stock: "230pcs",
            image: "/image/MORTAR INSTAN.webp",
        },
        {
            name: "Bata Ringan 60 x 20 x 10 cm",
            category: "Bata",
            price: "10.000",
            stock: "1200pcs",
            image: "/image/BATA RINGAN.jpeg",
        },
        {
            name: "Besi Beton 10mm x 12mm",
            category: "Besi",
            price: "82.000",
            stock: "120pcs",
            image: "/image/BESI BETON POLOS.png",
        },
        {
            name: "Grendel Pintu 4inch",
            category: "Aksesori Pintu",
            price: "25.000",
            stock: "80pcs",
            image: "/image/GRENDEL PINTU.webp",
        },
        {
            name: "Kabel Listrik NYM 2 x 1.5mm",
            category: "Elektrikal",
            price: "12.000",
            stock: "500meter",
            image: "/image/KABEL LISTRIK.jpg",
        },
         {
            name: "Atap Galvalum 1.8 m x 80 cm",
            category: "Atap",
            price: "70.000",
            stock: "170pcs",
            image: "/image/ATAP GALVANUM.webp",
        },
         {
            name: "Lem Pipa PVC 40 gram",
            category: "Lem",
            price: "10.000",
            stock: "70pcs",
            image: "/image/LEM PIPA PVC.png",
        },
         {
            name: "Tangga Alumunium 1.5meter",
            category: "Alat Kerja",
            price: "450.000",
            stock: "25pcs",
            image: "/image/TANGGA ALUMINIUM.jpg",
        },
         {
            name: "Tandon Air 500Liter",
            category: "Tangki Air",
            price: "1.200.000",
            stock: "10",
            image: "/image/TANDON AIR.jpg",
        },
         {
            name: "Engsel Pintu 4 inch",
            category: "Aksesori Pintu",
            price: "40.000",
            stock: "60Pasang",
            image: "/image/ENGSEL PINTU.jpg",
        },
         {
            name: "Sekop Pasir",
            category: "Alat Kerja",
            price: "55.000",
            stock: "32pcs",
            image: "/image/SEKOP.jpg",
        },
         {
            name: "Wood Filler 1Kg",
            category: "Finishing",
            price: "35.000",
            stock: "40pcs",
            image: "/image/WOOD FILLER.avif",
        },
  ];

  // 🔥 MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [variant, setVariant] = useState("Merah");
  const [type, setType] = useState("");
  const [qty, setQty] = useState(1);

  const variants = ["Merah", "Putih", "Kuning", "Hijau", "Biru", "Hitam"];

  const getTypes = () => {
    if (!selectedProduct) return [];
    if (selectedProduct.name === "Keramik") {
      return ["30x30", "40x40", "60x60"];
    }
    return ["Kecil", "Sedang", "Besar"];
  };

  const stockNumber = parseInt(selectedProduct?.stock) || 0;

  // 🔥 CART
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const priceNumber = Number(
      selectedProduct.price.replace(/\./g, "")
    );

    const newItem = {
      id: Date.now(),
      name: selectedProduct.name,
      price: priceNumber,
      variant,
      type,
      qty,
    };

    setCart((prev) => [...prev, newItem]);

    // 🔥 trigger animasi
    setAnimateCart(true);
    setTimeout(() => setAnimateCart(false), 200);
    setShowModal(false);
    setQty(1);
    setType("");
    setVariant("Merah");
  };

    const [animateCart, setAnimateCart] = useState(false);

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-[32px] font-semibold">
          {supplier.name}
        </h1>

        <p className="text-sm text-gray-400">
          {supplier.address}
        </p>
      </div>

      {/* GRID PRODUCT */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow-sm">

            <img
              src={item.image}
              className="w-full h-[182px] object-cover rounded-xl"
            />

            <div className="mt-3">
              <span className="text-xs bg-[#EAEAEA] px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>

            <p className="mt-2 font-semibold">{item.name}</p>

            <p className="text-[#702BF0] font-semibold">
              Rp {item.price}
            </p>

            <div className="flex justify-between text-xs mt-2">
              <span className="text-gray-400">Quantity</span>
              <span className="text-[#702BF0]">{item.stock}</span>
            </div>

            <button
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
              className="w-full mt-4 bg-[#702BF0] text-white py-2 rounded-full cursor-pointer hover:scale-105 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* MODAL ADD TO CART */}
      
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showModal ? "visible" : "invisible"}
        `}>

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showModal ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowModal(false)}
        ></div>

        {/* PANEL */}
        <div
            className={`w-[550px] h-screen bg-white p-6 shadow-lg flex flex-col
            transform transition-transform duration-300
            ${showModal ? "translate-x-0" : "translate-x-full"}
            `}
        >

        {selectedProduct && (
        <>
            {/* SCROLL AREA */}
            <div className="flex-1 overflow-y-auto pr-2">

            {/* TITLE */}
            <h2 className="text-[36px] leading-[54px] font-semibold mb-6">
                {selectedProduct.name}
            </h2>


            {/* QTY */}
            <p className="text-[14px] font-medium mb-2">Quantity</p>

            <div className="flex items-center gap-3 mb-6">

                {/* BOX */}
                <div className="flex items-center bg-[#EAEAEA] rounded-full px-4 py-2 gap-3">

                <button
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    className="text-[#702BF0] text-lg"
                >
                    -
                </button>

                <input
                    type="number"
                    value={qty}
                    onChange={(e) => {
                    let value = Number(e.target.value);
                    if (value < 1) value = 1;
                    if (value > stockNumber) value = stockNumber;
                    setQty(value);
                    }}
                    className="w-[40px] text-center bg-transparent outline-none"
                />

                <button
                    onClick={() => setQty((prev) => Math.min(stockNumber, prev + 1))}
                    className="text-[#702BF0] text-lg"
                >
                    +
                </button>

                </div>

                <span className="text-gray-400 text-sm">
                / {stockNumber}
                </span>

            </div>

            </div>

            {/* BUTTON (FIXED BOTTOM) */}
            <div className="pt-4 border-t flex justify-end gap-3">

            <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:scale-110 transition"
            >
                Cancel
            </button>

            <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-[#702BF0] text-white rounded-full hover:opacity-80 cursor-pointer hover:scale-110 transition "
            >
                Add To Cart
            </button>

            </div>
        </>
        )}

    </div>
    </div>

        {/* FLOAT CART */}
        <div
            onClick={() => setShowCart(true)}
            className={`fixed bottom-6 right-6 z-[999] w-[64px] h-[64px] 
                bg-[#702BF0] rounded-full flex items-center justify-center 
                cursor-pointer shadow-lg transition-transform duration-200
                ${animateCart ? "scale-125" : "scale-100"}
            `}
            >
            {/* ICON */}
            <img src="/icons/Cart.png" className="w-[28px] h-[28px]" />

            {/* BADGE */}
            {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 
                bg-red-500 text-white text-[11px] 
                w-[20px] h-[20px] flex items-center justify-center 
                rounded-full font-medium
                ">
                {cart.length}
                </span>
            )}
        </div>

        {/* CART MODAL */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showCart ? "visible" : "invisible"}
        `}>

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showCart ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowCart(false)}
        ></div>

        {/* PANEL */}
        <div
            className={`w-[550px] h-screen bg-white p-6 flex flex-col
            transform transition-transform duration-300
            ${showCart ? "translate-x-0" : "translate-x-full"}
            `}
        >

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
            <h2 className="text-[36px] font-semibold">Cart Preview</h2>

            <div className="w-[48px] h-[48px] bg-[#702BF0] text-white flex items-center justify-center rounded-full text-xl">
                {cart.length}
            </div>
            </div>

            {/* LIST */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">

            {cart.length === 0 ? (
                <p className="text-center text-gray-400 mt-10">
                Cart masih kosong
                </p>
            ) : (
                cart.map((item, i) => (
                <div key={i} className="bg-[#EAEAEA] p-4 rounded-xl">

                    {/* TOP */}
                    <div className="flex justify-between">
                    <div>
                        <p className="text-sm font-medium">{item.name}</p>
                    </div>

                    {/* DELETE */}
                    <button
                        onClick={() =>
                        setCart(prev => prev.filter((_, idx) => idx !== i))
                        }
                        className="opacity-40 hover:opacity-100 transition"
                    >
                        <img src="/icons/Delete.png" className="w-5" />
                    </button>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex justify-between items-center mt-3">

                    {/* PRICE */}
                    <p className="text-lg font-semibold text-[#702BF0]">
                        Rp {(item.price * item.qty).toLocaleString("id-ID")}
                    </p>

                    {/* QTY */}
                    <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1">

                        <button
                        onClick={() =>
                            setCart(prev =>
                            prev.map((c, idx) =>
                                idx === i
                                ? { ...c, qty: Math.max(1, c.qty - 1) }
                                : c
                            )
                            )
                        }
                        className="text-[#702BF0]"
                        >
                        -
                        </button>

                        <span className="text-sm text-gray-400">
                        {item.qty}
                        </span>

                        <button
                        onClick={() =>
                            setCart(prev =>
                            prev.map((c, idx) =>
                                idx === i
                                ? { ...c, qty: c.qty + 1 }
                                : c
                            )
                            )
                        }
                        className="text-[#702BF0]"
                        >
                        +
                        </button>

                    </div>
                    </div>

                </div>
                ))
            )}

            </div>

            {/* TOTAL */}
            <div className="pt-4 border-t mt-4">

            <p className="text-sm text-gray-400">Total</p>

            <p className="text-xl font-semibold text-[#702BF0]">
                Rp {cart
                .reduce((sum, item) => sum + item.price * item.qty, 0)
                .toLocaleString("id-ID")}
            </p>

            {/* BUTTON */}
            <div className="flex justify-end gap-3 mt-4">

                <button
                onClick={() => setShowCart(false)}
                className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:scale-102 transition "
                >
                Cancel
                </button>

                <button
                onClick={() => {
                    if (cart.length === 0) return; // extra safety
                    navigate("/supplier/invoice", { state: { cart } });
                }}
                disabled={cart.length === 0}
                className={`px-6 py-2 rounded-full transition
                    ${cart.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#702BF0] text-white hover:opacity-80 cursor-pointer hover:scale-102 transition"
                    }
                `}
                >
                Checkout
                </button>

            </div>

            </div>

        </div>
        </div>

    </div>
  );
}