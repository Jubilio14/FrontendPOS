import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Product() {
    const [categories, setCategories] = useState([
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
    ]);

    const [products, setProducts] = useState([
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


    const [activeCategory, setActiveCategory] = useState("All Item");
    const [search, setSearch] = useState("");
    const filteredProducts = products.filter((item) => {
    const matchCategory =
        activeCategory === "All Item" ||
        item.category === activeCategory;

    const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
    });
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

    const [showAddMenu, setShowAddMenu] = useState(false);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState("");
    const [showAddProduct, setShowAddProduct] = useState(false);

    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [errorProduct, setErrorProduct] = useState("");
    const getTotalByCategory = (categoryName) => {
        return products.filter(p => p.category === categoryName).length;
    };

    const location = useLocation();
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
    if (location.state?.deletedId) {
        setProducts((prev) =>
        prev.filter((item) => item.id !== location.state.deletedId)
        );

        setShowToast(true);

        setTimeout(() => {
        setShowToast(false);
        }, 2000);

        // 🔥 HAPUS STATE AGAR TOAST TIDAK MUNCUL LAGI
        navigate(location.pathname, {
        replace: true,
        state: {},
        });
    }
    }, [location.state]);
    
  return (
    <div className="space-y-[50px]">

        {/* Header */}
        <div className="flex justify-between items-center">

            {/* Kiri */}
            <div>
            <h1 className="text-[44px] font-semibold leading-[66px]">
                Product Management
            </h1>
            </div>

            {/* Kanan (Search) */}
            <div className="relative">

            {/* ICON */}
            <img
                src="/icons/searchPurple.png"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px]"
            />

            {/* INPUT */}
            <input
                type="text"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[320px] h-[48px] bg-white rounded-full pl-11 pr-4 outline-none text-[14px] shadow-sm"
            />

            </div>

        </div>

        {/* FILTER */}
        <div className="max-w-full overflow-x-auto pb-2 scrollbar-hide">

        <div className="flex gap-[20px] min-w-max">

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
                    onClick={() =>
                        navigate(`/product/${item.id}`, {
                            state: { product: item },
                        })
                    }   
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow-sm cursor-pointer hover:scale-[1.02] transition"
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
                        Rp {item.price.toLocaleString("id-ID")}
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

         {/* ADD Floating  */}
        <div
            onClick={() => setShowAddMenu(true)}
            className={`bottom-6 right-[24px] z-[10] w-[64px] h-[64px] bg-[#702BF0] rounded-full flex items-center justify-center cursor-pointer shadow-lg relative 
              ${animateCart ? "scale-125" : "scale-100"}  `}
            style={{ position: "fixed" }}
        >
            <img src="/icons/Plus.png" className="w-[28px] h-[28px]" />
        </div>

        {/* Choose Item/Category */}
        <div className={`fixed inset-0 z-en z-[9999] flex h-screen transition-all duration-300
            ${showAddMenu ? "visible" : "invisible"}
            `}>

            {/* OVERLAY */}
            <div
                className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
                ${showAddMenu ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowAddMenu(false)}
            ></div>

            {/* PANEL KANAN */}
            <div
                className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
                ${showAddMenu ? "translate-x-0" : "translate-x-full"}
                `}
            >

                {/* TITLE */}
                <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-[20px]">
                Add Data
                </h2>

                {/* OPTION */}
                <div className="flex flex-col gap-4">

                {/* ADD CATEGORY */}
                <button
                    onClick={() => {
                    setShowAddMenu(false);
                    setShowAddCategory(true);
                    }}
                    className="w-full h-[50px] bg-[#EAEAEA] rounded-xl text-left px-4 cursor-pointer hover:bg-gray-300 transition"
                >
                    Add Category
                </button>

                {/* ADD PRODUCT */}
                <button
                    onClick={() => {
                    setShowAddMenu(false);
                    setShowAddProduct(true);
                    }}
                    className="w-full h-[50px] bg-[#EAEAEA] rounded-xl text-left px-4 cursor-pointer hover:bg-gray-300 transition"
                >
                    Add Product
                </button>

                </div>

            </div>
        </div>

        {/* ADD CATEGORY MODAL */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showAddCategory ? "visible" : "invisible"}
        `}>

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showAddCategory ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowAddCategory(false)}
        ></div>

        {/* PANEL KANAN */}
        <div
            className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
            ${showAddCategory ? "translate-x-0" : "translate-x-full"}
            `}
        >

            {/* TITLE */}
            <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
            Add Category
            </h2>

            {/* FORM */}
            <div className="flex flex-col gap-4">

            {/* ICON (STATIC) */}
            <div className="flex items-center h-[50px] bg-[#EAEAEA] rounded-full px-4 gap-3 opacity-60 cursor-not-allowed">
                <img src="/icons/category.png" className="w-[20px] h-[20px]" />
                <span className="text-sm text-gray-400">
                Icon (auto)
                </span>
            </div>

            {/* INPUT NAME */}
            <input
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {error}
                </p>
            )}

            </div>

            {/* BUTTON BAWAH */}
            <div className="mt-auto flex justify-end gap-3 pt-6">

            <button
                onClick={() => setShowAddCategory(false)}
                className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
            >
                Cancel
            </button>

            <button
                onClick={() => {
                const name = categoryName.trim();

                // ❌ kosong
                if (!name) {
                setError("Category name tidak boleh kosong");
                return;
                }

                // ❌ duplicate (case insensitive)
                const isExist = categories.some(
                (c) => c.name.toLowerCase() === name.toLowerCase()
                );

                if (isExist) {
                setError("Category sudah ada");
                return;
                }

                // ✅ lolos
                const newCategory = {
                name,
                icon: "/icons/category.png",
                };

                setCategories((prev) => [...prev, newCategory]);

                // reset
                setCategoryName("");
                setError("");
                setShowAddCategory(false);
                }}
                className={`px-6 py-2 bg-[#702BF0] text-white rounded-full hover:opacity-80 transition ${
                    !categoryName.trim()
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#702BF0] cursor-pointer hover:opacity-80"
                }`}
            >
                Add
            </button>

            </div>

        </div>
        </div>

        {/* ADD ITEM MODAL */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showAddProduct ? "visible" : "invisible"}
        `}>

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showAddProduct ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowAddProduct(false)}
        ></div>

        {/* PANEL */}
        <div
            className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
            ${showAddProduct ? "translate-x-0" : "translate-x-full"}
            `}
        >

            {/* TITLE */}
            <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
            Add Item
            </h2>

            {/* FORM */}
            <div className="flex flex-col gap-4">

            {/* IMAGE (AUTO) */}
            <div className="flex items-center h-[50px] bg-[#EAEAEA] rounded-full px-4 gap-3 opacity-60 cursor-not-allowed">
                <img src="/cashier.png" className="w-[24px] h-[24px]" />
                <span className="text-sm text-gray-400">
                Image (auto)
                </span>
            </div>

            {/* NAME */}
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => {
                setProductName(e.target.value);
                setErrorProduct("");
                }}
                className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
            />

            {/* CATEGORY */}
            <div className="relative">
  
                <select
                    value={productCategory}
                    onChange={(e) => {
                    setProductCategory(e.target.value);
                    setErrorProduct("");
                    }}
                    className="w-full h-[50px] bg-[#EAEAEA] rounded-full px-4 pr-10 outline-none appearance-none cursor-pointer hover:bg-[#E0E0E0] transition"
                >
                    <option value="">Select Category</option>
                    {categories
                    .filter(c => c.name !== "All Item")
                    .map((cat) => (
                        <option key={cat.name} value={cat.name}>
                        {cat.name}
                        </option>
                    ))}
                </select>

                {/* CUSTOM ARROW */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    >
                    <path
                        d="M5 7L10 12L15 7"
                        stroke="#1D1D1D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </div>

                </div>

            {/* PRICE */}
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => {
                setPrice(e.target.value);
                setErrorProduct("");
                }}
                className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
            />

            {/* STOCK */}
            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => {
                setStock(e.target.value);
                setErrorProduct("");
                }}
                className="h-[50px] bg-[#EAEAEA] rounded-full px-4 outline-none"
            />

            {/* ERROR */}
            {errorProduct && (
                <p className="text-red-500 text-sm">
                {errorProduct}
                </p>
            )}

            </div>

            {/* BUTTON */}
            <div className="mt-auto flex justify-end gap-3 pt-6">

            <button
                onClick={() => setShowAddProduct(false)}
                className="px-6 py-2 bg-[#EAEAEA] rounded-full cursor-pointer hover:opacity-80 transition"
            >
                Cancel
            </button>

            <button
                onClick={() => {
                const name = productName.trim();

                if (!name || !productCategory || !price || !stock) {
                    setErrorProduct("Semua field wajib diisi");
                    return;
                }

                const isExist = products.some(
                    (p) => p.name.toLowerCase() === name.toLowerCase()
                );

                if (isExist) {
                    setErrorProduct("Product sudah ada");
                    return;
                }

                const newProduct = {
                    id: Date.now(),
                    name,
                    category: productCategory,
                    price: Number(price),
                    stock: Number(stock),
                    image: "/cashier.png",
                };

                setProducts((prev) => [...prev, newProduct]);

                // reset
                setProductName("");
                setProductCategory("");
                setPrice("");
                setStock("");
                setErrorProduct("");
                setShowAddProduct(false);
                }}
                className={`px-6 py-2 rounded-full text-white ${
                !productName || !productCategory || !price || !stock
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#702BF0] cursor-pointer hover:opacity-80 transition"
                }`}
            >
                Add
            </button>

            </div>

        </div>
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

        {showToast && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] animate-slide-down">
                
                <div className="bg-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 border">

                {/* ICON */}
                <div className="w-[40px] h-[40px] bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-xl">✓</span>
                </div>

                {/* TEXT */}
                <div>
                    <p className="text-[14px] font-semibold text-[#1D1D1D]">
                    Berhasil
                    </p>
                    <p className="text-[12px] text-gray-400">
                    Produk berhasil dihapus
                    </p>
                </div>

                </div>

            </div>
            )}

    </div>
    
    
  );
}