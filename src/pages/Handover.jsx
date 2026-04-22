import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Handover() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storeName = decodeURIComponent(id || "Toko Default");

  const [items, setItems] = useState([
    {
      name: "Kotak Makan Plastik",
      variant: "1000 ml",
      type: "Transparan",
      qty: 200,
      notes: "Semua unit diterima dalam kondisi baik",
      status: "approved",
    },
    {
      name: "Botol Plastik PET",
      variant: "600 ml",
      type: "Bening",
      qty: 500,
      notes: "Ditemukan 12 unit penyok ringan",
      status: "defect",
    },
    {
      name: "Ember Plastik",
      variant: "20 Liter",
      type: "Merah",
      qty: 80,
      notes: "Semua unit sesuai spesifikasi",
      status: "approved",
    },
    {
      name: "Gelas Plastik",
      variant: "220 ml",
      type: "Transparan",
      qty: 2000,
      notes: "Semua unit diterima, tidak ditemukan cacat.",
      status: "approved",
    },
    {
      name: "Toples Plastik",
      variant: "5 Liter",
      type: "Biru",
      qty: 120,
      notes: "Banyak unit retak",
      status: "returned",
    },
    {
      name: "Jerigen Plastik",
      variant: "5 Liter",
      type: "Kuning",
      qty: 90,
      notes: "",
      status: "pending",
    },
    {
      name: "Ember Plastik",
      variant: "10 Liter",
      type: "Hijau",
      qty: 150,
      notes: "",
      status: "pending",
    },
    {
      name: "kotak Makan Plastik",
      variant: "750 ml",
      type: "Pink",
      qty: 180,
      notes: "",
      status: "pending",
    },
    {
      name: "Baskom Plastik",
      variant: "30 cm",
      type: "Orange",
      qty: 140,
      notes: "",
      status: "pending",
    },
    {
      name: "Tempat Sampah Plastik",
      variant: "25 Liter",
      type: "Abu-abu",
      qty: 60,
      notes: "",
      status: "pending",
    },  
  ]);

    const [showNotesModal, setShowNotesModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [notesInput, setNotesInput] = useState("");

    const openNotes = (index, status) => {
        setSelectedIndex(index);
        setSelectedStatus(status);
        setShowNotesModal(true);
    };

    const handleSaveNotes = () => {
        setItems(prev =>
            prev.map((item, i) =>
            i === selectedIndex
                ? {
                    ...item,
                    notes: notesInput,
                    status: selectedStatus,
                }
                : item
            )
        );

        setNotesInput("");
        setShowNotesModal(false);
    };

    
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [transferIndex, setTransferIndex] = useState(null);

    const [transferForm, setTransferForm] = useState({
    qty: "",
    warehouse: "",
    code: "",
    datetime: "",
    });

    const [transferError, setTransferError] = useState("");

    const warehouses = [
        { name: "Gudang Sentral Logistik Utama", max: 300 },
        { name: "Gudang Distribusi Nusantara", max: 500 },
        { name: "Gudang Mitra Supply Chain", max: 200 },
        { name: "Gudang Central Inventory",  max: 250 },
        { name: "Gudang Utama Regional Barat", max: 30 },
        { name: "Gudang Hub Distribusi Nasional", max: 50 },
        { name: "Gudang Penyimpanan Utama", max: 70 },
        { name: "Gudang Logistic Fullfilment Centre", max: 40 },
    ];

    const openTransfer = (index) => {
        setTransferIndex(index);
        setTransferForm({
            qty: "",
            warehouse: "",
            code: "",
            datetime: "",
        });
        setShowTransferModal(true);
    };

    useEffect(() => {
    if (transferForm.warehouse) {
        const prefix = transferForm.warehouse
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

        setTransferForm(prev => ({
        ...prev,
        code: `${prefix}-001`,
        }));
    }
    }, [transferForm.warehouse]);

    const source = items[transferIndex];

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[44px] leading-[66px] font-semibold text-[#1D1D1D]">
            Handover Report
          </h1>
          <p className="text-[#1D1D1D] font-semibold text-[24px] leading-[36px] ">{storeName}</p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-black"
        >
          ← Back
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl p-6">

        {/* HEADER TABLE */}
        <div className="grid grid-cols-[50px_1.5fr_1fr_1fr_1fr_200px_120px_80px] text-[14px] leading-[21px] font-medium text-[#1D1D1D] px-[20px] py-[30px] gap-[20px] mb-2">
          <span>No</span>
          <span>Item</span>
          <span>Variant</span>
          <span>Type</span>
          <span>Quantity</span>
          <span>Notes</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* ROW */}
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[50px_1.5fr_1fr_1fr_1fr_200px_120px_80px] items-center p-[20px] gap-[20px] border-b last:border-none text-[14px] leading-[21px] font-medium text-[#1D1D1D]"
          >
            <span>{i + 1}</span>
            <span>{item.name}</span>
            <span>{item.variant}</span>
            <span>{item.type}</span>
            <span>{item.qty}</span>

            {/* NOTES */}
            <span className="truncate">
                {item.notes || "-"}
            </span>

            {/* STATUS */}
            <span
              className={`
                ${item.status === "approved" && "text-green-500"}
                ${item.status === "defect" && "text-yellow-500"}
                ${item.status === "returned" && "text-red-500"}
              `}
            >
              {item.status === "approved" && "Approved"}
              {item.status === "defect" && "Defect"}
              {item.status === "returned" && "Returned"}
              {item.status === "pending" && "-"}
            </span>

            {/* ACTION */}
            <span className="flex gap-3 text-[#702BF0]">

              {item.status === "pending" ? (
                <>
                    <img
                        src="/icons/True.png"
                        onClick={() => openNotes(i, "approved")}
                        className="w-[16px] cursor-pointer hover:scale-110 transition"
                    />

                    <img
                        src="/icons/Return.png"
                        onClick={() => openNotes(i, "defect")}
                        className="w-[16px] cursor-pointer hover:scale-110 transition"
                    />

                    <img
                        src="/icons/Cross.png"
                        onClick={() => openNotes(i, "returned")}
                        className="w-[16px] cursor-pointer hover:scale-110 transition"
                    />
                </>
              ) : item.status === "returned" ? (
                    <img
                        src="/icons/Cross.png"
                        className="w-[16px]  cursor-not-allowed"
                    />
              ) : (
                <img
                  src="/icons/Transfer.png"
                  onClick={() => openTransfer(i)}
                  className="w-[16px] cursor-pointer hover:scale-110 transition"
                />
              )}

            </span>
          </div>
        ))}

      </div>
        
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300
            ${showNotesModal ? "visible" : "invisible"}
            `}
            >

            {/* OVERLAY */}
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300
                ${showNotesModal ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setShowNotesModal(false)}
            ></div>

            {/* MODAL */}
            <div
                className={`relative bg-white w-[400px] rounded-2xl p-6 shadow-lg transform transition-all duration-300
                ${showNotesModal ? "scale-100 opacity-100" : "scale-90 opacity-0"}
                `}
            >

                <h2 className="text-lg font-semibold mb-4">
                Tambah Notes
                </h2>

                <textarea
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="Tulis notes..."
                className="w-full h-[100px] bg-[#EAEAEA] rounded-xl p-3 outline-none mb-4"
                />

                <div className="flex justify-end gap-3">
                <button
                    onClick={() => setShowNotesModal(false)}
                    className="px-4 py-2 bg-[#EAEAEA] rounded-full"
                >
                    Cancel
                </button>

                <button
                    onClick={handleSaveNotes}
                    className="px-4 py-2 bg-[#702BF0] text-white rounded-full"
                >
                    Save
                </button>
                </div>

            </div>
            </div>
        
        {/* TRANSFER MODAL */}
        <div
        className={`fixed inset-0 z-[9999] flex h-screen transition-all duration-300
        ${showTransferModal ? "visible" : "invisible"}
        `}
        >

        {/* OVERLAY */}
        <div
            className={`flex-1 h-screen bg-black/50 transition-opacity duration-300
            ${showTransferModal ? "opacity-100" : "opacity-0"}
            `}
            onClick={() => setShowTransferModal(false)}
        ></div>

        {/* PANEL */}
        <div
            className={`w-[550px] h-screen bg-white p-6 shadow-lg flex flex-col transform transition-transform duration-300
            ${showTransferModal ? "translate-x-0" : "translate-x-full"}
            `}
        >

            {/* TITLE */}
            <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold mb-6">
            Transfer Item
            </h2>

            {/* FORM */}
            {source && (
            <div className="flex flex-col gap-4">

                {/* ITEM NAME */}
                <div className="relative">
                <img
                    src="/icons/Warehouse.png"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] opacity-50"
                />
                <input
                    value={source.name}
                    disabled
                    className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none opacity-70 cursor-not-allowed "
                />
                </div>

                {/* QTY */}
                <div className="relative">
                <img
                    src="/icons/qty.png"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] opacity-50"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={transferForm.qty}
                    onChange={(e) =>
                    setTransferForm({ ...transferForm, qty: e.target.value })
                    }
                    className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                />
                </div>

                {/* DATETIME */}
                <div className="relative">
                <img
                    src="/icons/Date.png"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] opacity-50"
                />
                <input
                    type="datetime-local"
                    value={transferForm.datetime}
                    onChange={(e) =>
                    setTransferForm({ ...transferForm, datetime: e.target.value })
                    }
                    className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none"
                />
                </div>

                {/* WAREHOUSE */}
                <div className="relative">
                <img
                    src="/icons/Warehouse.png"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] opacity-50"
                />
                <select
                    value={transferForm.warehouse}
                    onChange={(e) =>
                    setTransferForm({ ...transferForm, warehouse: e.target.value })
                    }
                    className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none appearance-none cursor-pointer "
                >
                    <option value="">Select Warehouse</option>
                    {warehouses.map((w, i) => (
                    <option key={i} value={w.name}>
                        {w.name}
                    </option>
                    ))}
                </select>
                </div>

                {/* CODE */}
                <div className="relative">
                <img
                    src="/icons/Code.png"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] opacity-50"
                />
                <input
                    placeholder="Code"
                    value={transferForm.code}
                    disabled
                    className="h-[50px] w-full bg-[#EAEAEA] rounded-full pl-10 pr-4 outline-none opacity-70 cursor-not-allowed"
                />
                </div>

                {/* MAX INFO */}
                {transferForm.warehouse && (
                <p className="text-sm text-gray-400">
                    Max Warehouse:{" "}
                    {
                    warehouses.find(w => w.name === transferForm.warehouse)?.max
                    }
                </p>
                )}

                {/* ERROR */}
                {transferError && (
                <p className="text-red-500 text-sm">
                    {transferError}
                </p>
                )}

            </div>
            )}

            {/* BUTTON */}
            <div className="mt-auto flex justify-end gap-3 pt-6">

            <button
                onClick={() => setShowTransferModal(false)}
                className="px-6 py-2 bg-[#EAEAEA] rounded-full hover:opacity-80 transition"
            >
                Cancel
            </button>

            <button
                onClick={() => {
                const qty = Number(transferForm.qty);
                const target = warehouses.find(
                    w => w.name === transferForm.warehouse
                );

                if (!qty || !transferForm.warehouse) {
                    setTransferError("Lengkapi data");
                    return;
                }

                if (qty > source.qty) {
                    setTransferError("Melebihi stok item");
                    return;
                }

                if (qty > target.max) {
                    setTransferError("Melebihi max warehouse");
                    return;
                }

                // UPDATE QTY
                setItems(prev =>
                prev
                    .map((item, i) => {
                    if (i === transferIndex) {
                        const newQty = item.qty - qty;

                        // kalau habis → return null (nanti difilter)
                        if (newQty <= 0) return null;

                        return { ...item, qty: newQty };
                    }
                    return item;
                    })
                    .filter(item => item !== null) // hapus item null
                );

                setTransferError("");
                setShowTransferModal(false);
                }}
                className="px-6 py-2 bg-[#702BF0] text-white rounded-full hover:opacity-80 transition"
            >
                Transfer
            </button>

            </div>

        </div>
        </div>
    </div>
  );
}