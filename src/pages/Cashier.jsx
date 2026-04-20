import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cashier() {
    const categories = [
        { name: "All Item", icon: "/icons/category.png" },
        { name: "Botol & Tumbler", icon: "/icons/category.png" },
        { name: "Wadah Makanan", icon: "/icons/category.png" },
        { name: "Kantong & Kemasan", icon: "/icons/category.png" },
        { name: "Peralatan Rumah", icon: "/icons/category.png" },
        { name: "Penyimpanan", icon: "/icons/category.png" },
        { name: "Peralatan Makan", icon: "/icons/category.png" },
        { name: "Perlengkapan", icon: "/icons/category.png" },
    ];

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
        {
            name: "Botol",
            category: "Peralatan Rumah",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Penyimpanan",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Peralatan Makanan",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Kantong & Kemasan",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Peralatan Makan",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Penyimpanan",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Wadah Makanan",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Botol & Tumbler",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Botol & Tumbler",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
        {
            name: "Botol",
            category: "Botol & Tumbler",
            price: "18.000",
            stock: "100pcs",
            image: "/cashier.png",
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All Item");
    const filteredProducts =
        activeCategory === "All Item"
            ? products
            : products.filter((item) => item.category === activeCategory);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [variant, setVariant] = useState("Merah");
    const [type, setType] = useState("");
    const [qty, setQty] = useState(1);

    const variants = ["Merah","Putih","Kuning","Hijau","Biru","Hitam"];
    const getTypes = () => {
        if (!selectedProduct) return [];

        if (selectedProduct.name === "Keramik") {
            return ["30x30","40x40","60x60"];
        }

        return ["Kecil","Sedang","Besar"];
        };
    
    selectedProduct?.stock
    const stockNumber = parseInt(selectedProduct?.stock) || 0;
    const [cart, setCart] = useState([]);
    const handleAddToCart = () => {
        if (!selectedProduct) return;

        const priceNumber = Number(
            selectedProduct.price.replace(/\./g, "")
        );


        const newItem = {
            id: Date.now(), // biar unik
            name: selectedProduct.name,
            price: priceNumber,
            image: selectedProduct.image,
            variant,
            type,
            qty,
        };

        setCart((prev) => [...prev, newItem]);

        setAnimateCart(true);

        setTimeout(() => {
            setAnimateCart(false);
        }, 300);

        // reset + close modal
        setShowModal(false);
        setQty(1);
        setType("");
        setVariant("Merah");
    };
    
    const [showCart, setShowCart] = useState(false);
    const [animateCart, setAnimateCart] = useState(false);
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    const navigate = useNavigate();
    const getTotalByCategory = (categoryName) => {
        return products.filter(p => p.category === categoryName).length;
    };
    
  return (
    <div className="space-y-[50px]">

        {/* Header */}
        <div className="flex justify-between items-center">

            {/* Kiri */}
            <div>
            <h1 className="text-[44px] font-semibold leading-[66px]">
                Hello!
            </h1>

            <p className="text-[14px] leading-[21px] font-normal text-[#9A9A9A]">
                Asep Rendang
            </p>
            </div>

            {/* Kanan (Search) */}
            <div className="w-[48px] h-[48px] bg-white rounded-full shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/icons/searchIcon.png" alt="search" className="w-[24px] h-[24px]" />
            </div>

        </div>

        {/* FILTER */}
        
        <div className="flex gap-[20px] overflow-x-auto pb-2">

            {categories.map((cat) => {
                const isActive = activeCategory === cat.name;

                return (
                <div
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-[140px] h-[120px] p-3 rounded-xl cursor-pointer transition
                    ${
                        isActive
                        ? "bg-[#702BF0]"
                        : "bg-[#FFFFFF]"
                    }`}
                >

                    {/* ICON */}
                    <img
                    src={cat.icon}
                    className={`w-[24px] h-[24px] mb-2 ${
                        isActive
                        ? "brightness-0 invert"
                        : "opacity-50"
                    }`}
                    />

                    {/* TEXT */}
                    <p
                        className={`text-[14px] leading-[21px] font-semibold ${
                            isActive ? "text-white" : "text-[#D1D5D8]"
                        }`}
                    >
                        {cat.name}
                    </p>

                    {/* SUB TEXT */}
                    <p className={`text-[12px] leading-[18px] font-normal ${
                        isActive ? "text-white" : "text-[#D1D5D8]"
                        }`}>
                        {cat.name === "All Item"
                            ? `${products.length} item`
                            : `${getTotalByCategory(cat.name)} item`}
                    </p>

                </div>
                );
            })}

        </div>

        {/* Produk */}
        <div className="grid grid-cols-4 gap-6">
            {filteredProducts.length === 0 ? (

                // 🔥 EMPTY STATE
                <div className="col-span-4 flex flex-col items-center justify-center py-20 text-center">
                <p className="text-gray-400 text-sm">
                    Tidak ada produk di kategori ini
                </p>
                </div>

            ) : (
                filteredProducts.map((item, i) => (
                    <div
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow-sm"
                    >

                    {/* IMAGE */}
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[182px] object-cover rounded-xl"
                    />

                    {/* BADGE */}
                    <div className="mt-3">
                        <span className="text-[12px] leading-[18px] font-normal bg-[#EAEAEA] px-[15px] py-[5px] rounded-full text-[#1D1D1D]">
                        {item.category}
                        </span>
                    </div>

                    {/* NAMA */}
                    <p className="text-[14px] leading-[21px] font-semibold mt-2 text-[#1D1D1D]">
                        {item.name}
                    </p>

                    {/* HARGA */}
                    <p className="text-[14px] leading-[21px] font-semibold text-[#702BF0]">
                        {item.price}
                    </p>

                    {/* QUANTITY */}
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-[12px] leading-[18px] text-[#D1D5D8]">
                        Quantity
                        </span>

                        <span className="text-[12px] leading-[18px] text-[#702BF0]">
                        {item.stock}
                        </span>
                    </div>

                    {/* BUTTON */}
                    <button 
                        onClick={() => {
                            setSelectedProduct(item);
                            setVariant("Merah");
                            setType("");
                            setQty(1);
                            setShowModal(true)}}
                        className="w-[252px] h-[41px] mt-4 mx-auto block bg-[#702BF0] text-[#EAEAEA] text-[14px] py-[10px] px-[30px] rounded-full cursor-pointer hover:opacity-90 transition">
                         Add to Cart
                    </button>

                    </div>
                ))
            )}
        </div>

        {/* MODAL */}
        <div className={`fixed inset-0 z-en z-[9999] flex h-screen transition-all duration-300
            ${showModal ? "visible" : "invisible"}
            `}>

            {/* Overlay */}
            <div
                className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
                ${showModal ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowModal(false)}
            ></div>

            {/* Panel kanan */}
            <div
                className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
                ${showModal ? "translate-x-0" : "translate-x-full"}
                `}
            >

                {selectedProduct && (
                    <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto">
                        {/* NAMA */}
                        <h2 className="text-[36px] leading-[54px] font-semibold mb-4">
                        {selectedProduct.name}
                        </h2>

                        {/* VARIANT */}
                        <p className="text-[14px] leading-[21px] font-medium mb-2">Variant</p>
                        <div className="flex flex-wrap gap-[20px] mb-4">
                        {variants.map((v) => (
                            <button
                            key={v}
                            onClick={() => setVariant(v)}
                            className={`w-[105px] h-[41px] px-[30px] py-[10px] rounded-full text-[14px] font-normal leading-[21px] cursor-pointer hover:opacity-80 transition ${
                                variant === v
                                ? "bg-[#702BF0] text-white"
                                : "bg-[#D1D5D8] text-[#1D1D1D]"
                            }`}
                            >
                            {v}
                            </button>
                        ))}
                        </div>

                        {/* TYPE */}
                        <p className="text-[14px] leading-[21px] font-medium mb-2 text-[#1D1D1D]">Type</p>
                        <div className="flex gap-[10px] mb-4">
                        {getTypes().map((t) => (
                            <button
                            key={t}
                            onClick={() => setType(t)}
                            className={`px-[30px] py-[10px] rounded-full text-[14px] leading-[21px] font-normal cursor-pointer hover:opacity-80 transition ${
                                type === t
                                ? "bg-[#702BF0] text-white"
                                : "bg-[#D1D5D8] text-[#1D1D1D]"
                            }`}
                            >
                            {t}
                            </button>
                        ))}
                        </div>

                        {/* QTY */}
                        <div className="flex items-center gap-[10px] mb-6">

                            {/* KIRI */}
                            <p className="text-[14px] leading-[21px] font-medium text-[#1D1D1D]">
                                Quantity
                            </p>

                            {/* KANAN */}
                            <div className="flex items-center gap-[5px]">

                                {/* BOX */}
                                <div className="flex items-center h-[41px] w-[100px] bg-[#EAEAEA] rounded-full px-[15px] py-[10px] gap-[10px]">

                                <button
                                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                                    className="text-[#702BF0] text-[14px] leading-[21px] font-normal cursor-pointer hover:opacity-80 transition"
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
                                    className="w-[30px] text-center  bg-transparent outline-none text-[14px] leading-[21px] font-normal text-[#D1D5D8]"
                                />

                                <button
                                    onClick={() => setQty((prev) => Math.min(stockNumber, prev + 1))}
                                    className="text-[#702BF0] text-[14px] leading-[21px] font-normal cursor-pointer hover:opacity-80 transition"
                                >
                                    +
                                </button>

                                </div>

                                {/* STOCK */}
                                <span className="text-[14px] leading-[21px] font-medium text-[#D1D5D8]">
                                / {stockNumber}
                                </span>

                            </div>

                        </div>
                    </div>

                            {/* 🔥 BUTTON FIXED BAWAH */}
                            <div className="flex justify-end gap-[10px] pt-4 ">
                            <button
                                onClick={() => setShowModal(false)}
                                className="h-[41px] w-[111px] px-[30px] py-[10px] bg-[#EAEAEA] text-[14px] leading-[21px] font-medium text-[#1D1D1D] rounded-full cursor-pointer hover:opacity-80 transition"
                            >
                                Cancel
                            </button>

                            <button 
                                onClick={handleAddToCart}
                                className="h-[41px] w-[144px] px-[30px] py-[10px] bg-[#702BF0] text-[#FFFFFF] text-[14px] leading-[21px] font-medium rounded-full cursor-pointer hover:opacity-80 transition">
                                    Add To Cart
                            </button>
                            </div>

                    </div>
                    )}

            </div>

        </div>

         {/* CART  */}
        <div
            onClick={() => setShowCart(true)}
            className={`bottom-6 right-[24px] z-[10] w-[64px] h-[64px] bg-[#702BF0] rounded-full flex items-center justify-center cursor-pointer shadow-lg relative 
              ${animateCart ? "scale-125" : "scale-100"}  `}
            style={{ position: "fixed" }}
        >
            <img src="/icons/Cart.png" className="w-[48px] h-[48px]" />

            {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
                </span>
            )}
        </div>

        {/* CART MODAL */}
        <div className={`fixed inset-0 z-[9999] flex h-screen
            transition-all duration-300
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
                    className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
                    ${showCart ? "translate-x-0" : "translate-x-full"}
                    `}
                >

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold">
                    Cart Preview
                    </h2>

                    <div className="w-[48px] h-[48px] py-[2px] gap-[10px] bg-[#702BF0] text-[#EAEAEA] flex items-center justify-center rounded-full text-[24px] leading-[36px]">
                    {cart.length}
                    </div>
                </div>

                {/* LIST ITEM */}
                <div className="flex-1 overflow-y-auto space-y-4">

                    {cart.length === 0 ? (
                    <p className="text-center text-gray-400 mt-10">
                        Cart masih kosong
                    </p>
                    ) : (
                    cart.map((item, i) => (
                        <div key={i} className="bg-[#EAEAEA] p-[20px] rounded-xl">

                        {/* TOP */}
                        <div className="flex justify-between items-start">
                            <div>
                            <p className="text-[14px] leading-[21px] font-medium text-[#1D1D1D]">
                                {item.name}
                            </p>

                            <p className="text-[12px] leading-[18px] font-medium text-[#D1D5D8]">
                                {item.variant} • {item.type}
                            </p>
                            </div>

                            {/* DELETE */}
                            <button
                            onClick={() =>
                                setCart(prev => prev.filter((_, idx) => idx !== i))
                            }
                            className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                            >
                            <img
                                src="/icons/Delete.png"
                                className="w-[24px] h-[24px] brightness-0 opacity-40 hover:opacity-100 transition"
                            />
                            </button>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                            {/* PRICE */}
                            <p className="text-[24px] leading-[36px] font-medium text-[#702BF0] ">
                                Rp {(item.price * item.qty).toLocaleString("id-ID")}
                            </p>

                            {/* QTY */}
                            
                            <div className="flex items-center justify-between gap-[10px] bg-[#FFFFFF] w-[89px] h-[41px] rounded-full px-[15px] py-[10px]">

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
                                    className="text-[#702BF0] text-[14px] leading-[21px] font-normal cursor-pointer"
                                >
                                    -
                                </button>

                                <span className="text-[14px] text-[#D1D5D8] leading-[21px] font-normal text-[#D1D5D8] ">
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
                                    className="text-[#702BF0] text-[14px] leading-[21px] font-normal cursor-pointer"
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

                    <p className="text-[12px] text-gray-400">
                    Total
                    </p>

                    <p className="text-[20px] font-semibold text-[#702BF0]">
                    Rp {cart
                        .reduce((sum, item) => sum + item.price * item.qty, 0)
                        .toLocaleString("id-ID")}
                    </p>

                    {/* BUTTON */}
                    <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={() => setShowCart(false)}
                        className="px-4 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-70 transition"
                    >
                        Cancel
                    </button>

                    <button 
                        onClick={() => navigate("/invoice", { state: { cart } })}
                        disabled={cart.length === 0}
                        className={`px-4 py-2 rounded-full transition
                            ${cart.length === 0
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-[#702BF0] text-white cursor-pointer hover:opacity-80"
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