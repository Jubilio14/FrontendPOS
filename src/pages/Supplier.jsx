import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Supplier() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("supplier");

    const supplierContent = [
        {
        name: "CV Plastik Jaya Abadi",
        address: "Jl. Soekarno Hatta No. 88, Bandung",
        phone: "0812-3446-7890",
        },
        {
        name: "PT Sumber Plastik Indonesia",
        address: "Jl. Raya Bekasi KM 12, Jakarta",
        phone: "0813-9876-5432",
        },
        {
        name: "PT Plastik Nusantara Mandiri",
        address: "Jl. Gatot Subroto No. 21, Medan",
        phone: "0819-2233-4455",
        },
        {
        name: "CV Prima Packaging Supplier",
        address: "Jl. Ahmad Yani No. 67, Semarang",
        phone: "0822-3344-5566",
        },
        {
        name: "PT Global Plastik Sentosa",
        address: "Jl. MH Thamrin No. 19, Tangerang",
        phone: "0815-6677-8899",
        },
        {
        name: "PT Indo Packaging Solution",
        address: "Jl. Pelabuhan No. 7, Makassar",
        phone: "0818-5566-1122",
        },
        {
        name: "CV Anugerah Plastik Makmur",
        address: "Jl. Raya Solo No. 34, Yogyakarta",
        phone: "0823-4455-6677",
        },
        {
        name: "PT Cahaya Kemasan Abadi",
        address: "Jl. Diponegoro No. 10, Malang",
        phone: "0817-7788-9900",
        },
        {
        name: "UD Sinar Plastik Utama",
        address: "Jl. Sudirman No. 55, Palembang",
        phone: "0821-9988-7766",
        },
        {
        name: "CV Berkah Plastik Sejahtera",
        address: "Jl. Pahlawan No. 28, Padang",
        phone: "0822-6677-3344",
        },
    ];

    const orderData = [
        {
            name: "Toko Bangun Jaya",
            address: "Jl. Soekarno Hatta No. 88, Bandung",
            phone: "0812-3456-7890",
            email: "contact@plastikjayabadi.co.id",
            totalItem: 10,
            date: "24 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
        {
            name: "Toko Maju Jaya",
            address: "Jl. Ahmad Yani No. 21, Jakarta",
            phone: "0813-2222-3333",
            email: "maju@plastik.co.id",
            totalItem: 5,
            date: "25 February 2026",
            status: "On Going",
        },
    ];
    const [listData, setListData] = useState(supplierContent);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const data = activeTab === "supplier" ? listData : orderData;

  return (
    <div className="p-6">

        {/* TITLE */}
        <h1 className="text-[44px] leading-[66px] text-[#1D1D1D] font-semibold mb-6">
            {activeTab === "supplier" ? "Supplier" : "Order"}
        </h1>

        {/* TAB + FILTER */}
        <div className="flex justify-between items-center mb-4">

            {/* TAB */}
            <div className="flex gap-3">
            <button
                onClick={() => setActiveTab("supplier")}
                className={`px-[30px] py-[10px] gap-[10px] rounded-full text-[14px] leading-[21px] font-medium cursor-pointer ${
                activeTab === "supplier"
                    ? "bg-[#702BF0] text-[#EAEAEA]"
                    : "bg-[#FFFFFF] text-[#1D1D1D]"
                }`}
            >
                Supplier
            </button>

            <button
                onClick={() => setActiveTab("order")}
                className={`px-[30px] py-[10px] gap-[10px] rounded-full text-[14px] leading-[21px] font-medium cursor-pointer ${
                activeTab === "order"
                    ? "bg-[#702BF0] text-[#EAEAEA]"
                    : "bg-[#FFFFFF] text-[#1D1D1D] "
                }`}
            >
                Order
            </button>
            </div>

        </div>

        {/* SUPPLIER CONTENT */}
        {activeTab === "supplier" && (
        <div className="bg-white text-black rounded-2xl p-6">

            {/* HEADER TABLE */}
            <div className="grid grid-cols-[50px_1fr_2fr_1fr_80px] leading-[21px] font-medium text-[#1D1D1D] px-[20px] py-[30px] gap-[20px]">
            <span>No</span>
            <span>Company Name</span>
            <span>Address</span>
            <span>Phone</span>
            <span>Action</span>
            </div>

            {/* ROW */}
            {data.length === 0 ? (
            <div className="text-center py-10 text-gray-400 text-sm">
                Tidak ada data
            </div>
            ) : (
            data.map((item, i) => (
                <div
                key={i}
                className="grid grid-cols-[50px_1fr_2fr_1fr_80px] items-center px-[20px] py-[20px] gap-[20px] border-b last:border-none text-[14px] leading-[21px] font-medium text-[#1D1D1D] hover:bg-gray-50 transition"
                >
                <span>{i + 1}</span>
                <span>{item.name}</span>
                <span className="truncate">{item.address}</span>
                <span>{item.phone}</span>

                <span className="flex items-center gap-3">
                    <img
                    src="/icons/EditPurple.png"
                    className="w-[16px] cursor-pointer hover:scale-110 transition"
                    />
                    <img
                        src="/icons/DeletePurple.png"
                        className="w-[16px] cursor-pointer hover:scale-110 transition"
                        onClick={(e) => {
                            e.stopPropagation(); // biar ga kena klik row
                            setDeleteIndex(i);
                            setShowDeleteModal(true);
                        }}
                    />
                </span>
                </div>
            ))
            )}
        </div>
        )}

        {/* ORDER CONTENT */}
        {activeTab === "order" && (
        <div className="grid grid-cols-3 gap-6">
            {orderData.map((item, i) => (
            <div key={i} className="bg-[#FFFFFF] rounded-2xl p-[20px] gap-[30px] shadow-sm">
                <h2 className="font-semibold text-[24px] leading-[36px] text-[#1D1D1D] ">{item.name}</h2>
                <p className="text-[#702BF0] text-[12px] leading-[18px] font-normal mb-2">{item.status}</p>

                <div className="flex items-center gap-[10px] text-[14px] leading-[21px] font-normal text-[#1D1D1D] mb-1 ">
                    <img src="/icons/LocationBlack.png" className="w-[14px] h-[14px]" />
                    <span>{item.address}</span>
                </div>

                <div className="flex items-center gap-[10px] text-[14px] leading-[21px] font-normal text-[#1D1D1D] mb-1">
                    <img src="/icons/Phone.png" className="w-[14px] h-[14px]" />
                    <span>{item.phone}</span>
                </div>

                <div className="flex items-center gap-[10px] text-[14px] leading-[21px] font-normal text-[#1D1D1D] mb-1">
                    <img src="/icons/EmailBlack.png" className="w-[14px] h-[14px]" />
                    <span>{item.email}</span>
                </div>

                <div className="flex items-center gap-[10px] text-[14px] leading-[21px] font-normal text-[#1D1D1D] mb-1">
                    <img src="/icons/ItemBlack.png" className="w-[14px] h-[14px]" />
                    <span>{item.totalItem} Item</span>
                </div>
                <p className="text-[12px] leading-[18px] font-normal text-[#1D1D1D] ">{item.date}</p>

                <button 
                    onClick={() =>
                        navigate(`/supplier/${encodeURIComponent(item.name)}`)
                    }
                    className="mt-4 w-full bg-[#702BF0] text-white px-[30px] py-[10px] gap-[10px] text-[14px] leading-[21px] font-normal text-[#EAEAEA] rounded-full hover:opacity-80 transition cursor-pointer ">
                Confirm
                </button>
            </div>
            ))}
        </div>
        )}

        {/* Delete MODAL */}
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300
            ${showDeleteModal ? "visible" : "invisible"}
            `}
            >

            {/* OVERLAY */}
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300
                ${showDeleteModal ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowDeleteModal(false)}
            ></div>

            {/* MODAL */}
            <div
                className={`relative w-[400px] bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300
                ${showDeleteModal ? "scale-100 opacity-100" : "scale-95 opacity-0"}
                `}
            >
                <h2 className="text-xl font-semibold mb-4">
                Hapus Supplier?
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                Data yang dihapus tidak bisa dikembalikan.
                </p>

                <div className="flex justify-end gap-3">
                <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 bg-[#EAEAEA] rounded-full cursor-pointer"
                >
                    Cancel
                </button>

                <button
                    onClick={() => {
                    setListData(prev =>
                        prev.filter((_, idx) => idx !== deleteIndex)
                    );

                    setShowDeleteModal(false);

                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2000);
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-full cursor-pointer"
                >
                    Delete
                </button>
                </div>
            </div>

        </div>

        {showToast && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white shadow-md px-6 py-3 rounded-xl flex items-center gap-3 z-[9999]">

                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                ✓
                </div>

                <div>
                <p className="text-sm font-semibold">Berhasil</p>
                <p className="text-xs text-gray-400">Supplier berhasil dihapus</p>
                </div>

            </div>
            )}
    </div>
  );
}