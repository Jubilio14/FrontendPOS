import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetailProduct() {
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;

    const [qty, setQty] = useState(1);

    const [selectedVariant, setSelectedVariant] = useState("");
    const [selectedType, setSelectedType] = useState("");
    useEffect(() => {
    setSelectedVariant("Hitam");
    setSelectedType("500ml");
    }, []);

    const categories = [
        { name: "All Item" },
        { name: "Botol & Tumbler" },
        { name: "Wadah Makanan" },
        { name: "Kantong & Kemasan" },
        { name: "Peralatan Rumah" },
        { name: "Penyimpanan" },
        { name: "Peralatan Makan" },
        { name: "Perlengkapan" },
    ];
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [errorProduct, setErrorProduct] = useState("");
    const handleOpenEdit = () => {
        setProductName(product.name);
        setProductCategory(product.category);
        setPrice(product.price);
        setStock(product.stock);

        setShowEditProduct(true);
    };
    const [showDelete, setShowDelete] = useState(false);


  // 🔥 fallback kalau data hilang (misal refresh)
  if (!product) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Data tidak ditemukan</p>
        <button
          onClick={() => navigate("/product")}
          className="mt-4 px-4 py-2 bg-[#702BF0] text-white rounded-full"
        >
          Kembali ke Product
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-[44px] leading-[66px] font-semibold text-[#1D1D1D]">
          Detail Product
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#EAEAEA] rounded-full hover:opacity-80 transition cursor-pointer"
        >
          Back
        </button>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-3 gap-6">

        {/* ================= LEFT ================= */}
        <div className="bg-white p-4 rounded-xl">

          <img
            src={product.image}
            className="w-full h-[300px] object-cover rounded-xl"
          />

          {/* thumbnail */}
          <div className="flex gap-3 mt-4">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src={product.image}
                className="w-[80px] h-[80px] rounded-lg object-cover"
              />
            ))}
          </div>

        </div>

        {/* ================= CENTER ================= */}
        <div className="bg-white p-6 rounded-xl">

          {/* CATEGORY + ACTION */}
          <div className="flex justify-between items-center mb-4">
            <span className="bg-[#EAEAEA] px-[15px] py-[8px] rounded-full text-[14px] leading-[21px] font-normal text-[#1D1D1D] ">
              {product.category}
            </span>

            <div className="flex gap-2">
                <button 
                    onClick={handleOpenEdit}
                    className="opacity-40 hover:opacity-100 transition cursor-pointer">
                    <img
                        src="/icons/Edit.png"
                        className="w-[20px] h-[20px] brightness-0 opacity-40 hover:opacity-100 transition"
                    />
                </button>
                <button 
                    onClick={() => setShowDelete(true)}
                    className="opacity-40 hover:opacity-100 transition cursor-pointer">
                    <img
                        src="/icons/Delete.png"
                        className="w-[20px] h-[20px] brightness-0 opacity-40 hover:opacity-100 transition"
                    />
                </button>
            </div>
          </div>

          {/* NAME */}
          <h2 className="text-[24px] leading-[36px] font-semibold text-[#1D1D1D]">
            {product.name}
          </h2>

          {/* PRICE */}
          <p className="text-[#702BF0] text-[24px] leading-[36px] font-semibold mt-2">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          {/* VARIANT */}
          <div className="mt-4">
            <p className="text-[14px] leading-[21px] font-normal mb-2">Variant</p>
            <div className="flex flex-wrap gap-2">
                {["Hitam", "Putih", "Biru", "Pink"].map((v, i) => (
                <button
                    key={i}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-[20px] py-[8px] rounded-full text-[12px] leading-[18px] font-normal transition cursor-pointer
                    ${
                    selectedVariant === v
                        ? "bg-[#702BF0] text-white"
                        : "bg-[#EAEAEA] text-[#1D1D1D]"
                    }`}
                >
                    {v}
                </button>
                ))}
            </div>
          </div>

          {/* TYPE */}
          <div className="mt-4">
            <p className="text-[14px] leading-[21px] font-normal mb-2">Type</p>
            <div className="flex gap-2">
                {["500ml", "750ml", "1000ml"].map((t, i) => (
                <button
                    key={i}
                    onClick={() => setSelectedType(t)}
                    className={`px-[20px] py-[8px] rounded-full text-[12px] leading-[18px] font-normal transition cursor-pointer
                    ${
                    selectedType === t
                        ? "bg-[#702BF0] text-white"
                        : "bg-[#EAEAEA] text-[#1D1D1D]"
                    }`}
                >
                    {t}
                </button>
                ))}
            </div>
          </div>

          {/* DETAIL */}
          <div className="mt-6">
            <h3 className="font-semibold text-[24px] leading-[36px] text-[#1D1D1D] mb-2">
              Detail Product
            </h3>
            <p className="text-sm text-gray-400">
              Ini deskripsi dummy untuk prototype kamu. Produk ini dibuat
              untuk kebutuhan sehari-hari dengan kualitas terbaik.
            </p>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white p-6 rounded-xl h-fit">

          <p className="text-sm mb-3">Atur jumlah</p>

          {/* QTY */}
          <div className="flex items-center gap-3 mb-4">

            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="text-[#702BF0] cursor-pointer"
            >
              -
            </button>

            <span className="text-[14px]">
              {qty}
            </span>

            <button
              onClick={() => setQty((q) => q + 1)}
              className="text-[#702BF0] cursor-pointer"
            >
              +
            </button>

            <span className="text-gray-400">
              Stock: {product.stock}
            </span>

          </div>

          {/* SUBTOTAL */}
          <p className="text-sm text-gray-400">
            Sub Total
          </p>

          <p className="text-[#702BF0] font-semibold mb-4">
            Rp {(product.price * qty).toLocaleString("id-ID")}
          </p>

          {/* BUTTON */}
          <button className="w-full py-2 bg-[#702BF0] text-white rounded-full hover:opacity-80 transition cursor-pointer">
            Add To Cart
          </button>

        </div>

      </div>

      {/* EDIT ITEM MODAL */}
        <div className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showEditProduct ? "visible" : "invisible"}
        `}>

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showEditProduct ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowEditProduct(false)}
        ></div>

        {/* PANEL */}
        <div
            className={`w-[550px] h-screen z-[9999] bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
            ${showEditProduct ? "translate-x-0" : "translate-x-full"}
            `}
        >

            {/* TITLE */}
            <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
            Edit Item
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
                onClick={() => setShowEditProduct(false)}
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

                    // 🔥 UPDATE PRODUCT (LOCAL DETAIL ONLY)
                    product.name = name;
                    product.category = productCategory;
                    product.price = Number(price);
                    product.stock = Number(stock);

                    // trigger re-render manual
                    setProductName(name);

                    setShowEditProduct(false);
                }}
                className="px-6 py-2 bg-[#702BF0] text-white rounded-full cursor-pointer hover:opacity-80"
                >
                Save
                </button>

            </div>

        </div>
        </div>

    {/* DELETE MODAL */}
    {showDelete && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

            {/* overlay */}
            <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowDelete(false)}
            ></div>

            {/* content */}
            <div className="relative bg-white w-[350px] p-6 rounded-xl text-center">

            <h2 className="text-lg font-semibold mb-2">
                Hapus Produk?
            </h2>

            <p className="text-sm text-gray-400 mb-6">
                Apakah kamu yakin ingin menghapus item ini?
            </p>

            <div className="flex justify-center gap-3">
                
                <button
                onClick={() => setShowDelete(false)}
                className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:opacity-80 transition"
                >
                Cancel
                </button>

                <button
                onClick={() => {
                    setShowDelete(false);
                    navigate("/product", { state: { deleted: true } });
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-full cursor-pointer hover:opacity-80 transition"
                >
                Delete
                </button>

            </div>

            </div>
        </div>
        )}

    </div>
  );
}