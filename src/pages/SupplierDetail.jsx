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
      name: "Keramik",
      category: "Botol & Tumbler",
      price: "20.000",
      stock: "200pcs",
      image: "/cashier.png",
    },
    {
      name: "Piring",
      category: "Wadah Makanan",
      price: "15.000",
      stock: "150pcs",
      image: "/cashier.png",
    },
    {
      name: "Botol",
      category: "Kantong & Kemasan",
      price: "18.000",
      stock: "100pcs",
      image: "/cashier.png",
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

            {/* VARIANT */}
            <p className="text-[14px] font-medium mb-2">Variant</p>
            <div className="flex flex-wrap gap-3 mb-6">
                {variants.map((v) => (
                <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-4 py-2 rounded-full text-sm transition
                    ${variant === v
                        ? "bg-[#702BF0] text-white"
                        : "bg-[#EAEAEA] text-[#1D1D1D]"}
                    `}
                >
                    {v}
                </button>
                ))}
            </div>

            {/* TYPE */}
            <p className="text-[14px] font-medium mb-2">Type</p>
            <div className="flex flex-wrap gap-3 mb-6">
                {getTypes().map((t) => (
                <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 rounded-full text-sm transition
                    ${type === t
                        ? "bg-[#702BF0] text-white"
                        : "bg-[#EAEAEA]"}
                    `}
                >
                    {t}
                </button>
                ))}
            </div>

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
                        <p className="text-xs text-gray-400">
                        {item.variant} • {item.type}
                        </p>
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