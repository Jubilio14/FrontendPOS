import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cashier() {
    const categories = [
        { name: "All Item", icon: "/icons/category.png" },
        { name: "Semen", icon: "/icons/category.png" },
        { name: "Cat", icon: "/icons/category.png" },
        { name: "Keramik", icon: "/icons/category.png" },
        { name: "Pipa", icon: "/icons/category.png" },
        { name: "Baja Ringan", icon: "/icons/category.png" },
        { name: "Alat Cat", icon: "/icons/category.png" },
        { name: "Paku & Baut", icon: "/icons/category.png" },
        { name: "Saniter", icon: "/icons/category.png" },
        { name: "Aksesori Pintu", icon: "/icons/category.png" },   
        { name: "Besi", icon: "/icons/category.png" },
        { name: "Bata", icon: "/icons/category.png" },
        { name: "Elektrikal", icon: "/icons/category.png" },
        { name: "Atap", icon: "/icons/category.png" },
        { name: "Lem", icon: "/icons/category.png" },
        { name: "Alat Kerja", icon: "/icons/category.png" },
        { name: "Tangki Air", icon: "/icons/category.png" },
        { name: "Finishing", icon: "/icons/category.png" },
    ];

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

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [sortType, setSortType] = useState("asc");

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category]
        );
        };
    
    const filteredProducts = products
        .filter((item) => {
            const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(item.category);

            const matchSearch =
            item.name.toLowerCase().includes(search.toLowerCase());

            return matchCategory && matchSearch;
        })
        .sort((a, b) =>
            sortType === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );
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
    
    const fullStock = selectedProduct?.stock || "";

    const stockNumber = parseInt(fullStock) || 0;

    const stockUnit = fullStock.replace(/[0-9]/g, "") || "";
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
    <div className="space-y-[50px] overflow-x-hidden">

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
            <div className="flex items-center gap-3 relative">

                {/* SEARCH */}
                <div className="relative">
                    <img
                    src="/icons/searchPurple.png"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px]"
                    />

                    <input
                    type="text"
                    placeholder="Search item..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[300px] h-[48px] bg-white rounded-full pl-11 pr-4 outline-none text-[14px] shadow-sm"
                    />
                </div>

                {/* FILTER BUTTON */}
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="w-[48px] h-[48px] bg-white rounded-full shadow-sm flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                    <img
                    src="/icons/Polygon 1.png"
                    className="w-[20px] h-[20px]"
                    />
                </button>

                {showFilter && (
                    <div className="absolute top-[70px] right-0 w-[280px] bg-white rounded-2xl shadow-lg p-5 z-50">

                        <p className="font-semibold mb-3">By Alphabetical</p>

                        <div className="space-y-2 mb-5">
                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    checked={sortType === "asc"}
                                    onChange={() => setSortType("asc")}
                                />
                                <span>Ascending (A-Z)</span>
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    checked={sortType === "desc"}
                                    onChange={() => setSortType("desc")}
                                />
                                <span>Descending (Z-A)</span>
                            </label>
                        </div>

                        <p className="font-semibold mb-3">By Category</p>

                        <div className="space-y-3 max-h-[220px] overflow-y-auto">

                        {categories
                            .filter((cat) => cat.name !== "All Item")
                            .map((cat) => (
                            <label
                                key={cat.name}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input
                                type="checkbox"
                                checked={selectedCategories.includes(cat.name)}
                                onChange={() => handleCategoryChange(cat.name)}
                                className="w-4 h-4 accent-[#702BF0]"
                                />

                                <span className="text-sm text-[#1D1D1D]">
                                {cat.name}
                                </span>
                            </label>
                        ))}
                        </div>

                    </div>
                    )}

            </div>

        </div>



        {/* Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
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
                        className="w-full h-[41px] mt-4 mx-auto block bg-[#702BF0] text-[#EAEAEA] text-[14px] py-[10px] px-[30px] rounded-full cursor-pointer hover:opacity-90 transition">
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
                        <h2 className="text-[36px] leading-[54px] font-semibold mb-10">
                        {selectedProduct.name}
                        </h2>

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
                                / {stockNumber} {stockUnit}
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