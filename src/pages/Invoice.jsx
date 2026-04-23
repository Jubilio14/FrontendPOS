import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Invoice() {
    const navigate = useNavigate();
    const location = useLocation();
    const [cart, setCart] = useState(location.state?.cart || []);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    const [showCashModal, setShowCashModal] = useState(false);
    const [cashInput, setCashInput] = useState(""); // string biar gampang append angka

    // uang dibayar (number)
    const cashValue = Number(cashInput || 0);

    // change = bayar - total
    const change = cashValue - total;

    const handleNumber = (num) => {
        setCashInput(prev => {
            if (prev.length > 9) return prev; // limit
            return prev + num;
        });
    };

    const handleClear = () => setCashInput("");
    const handleDelete = () => setCashInput(prev => prev.slice(0, -1));
    const getRoundedCash = (total) => {
        const step = 50000; // kelipatan 50rb
        return Math.ceil(total / step) * step;
    };

    const exactCash = total;
    const roundedCash = getRoundedCash(total);
    const [showSuccess, setShowSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showQRIS, setShowQRIS] = useState(false);
    const [isWaitingQRIS, setIsWaitingQRIS] = useState(false);
    

  return (
    <div className="bg-white p-6 rounded-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[44px] leading-[66px] text-[#1D1D1D] font-semibold">Invoice</h1>
        <p className="text-gray-400 text-sm">
          {new Date().toLocaleString()}
        </p>
      </div>

      {/* TABLE */}
      <div className="space-y-4">

        {/* HEADER */}
        <div className="grid grid-cols-[40px_2fr_60px_1fr_1fr_40px] text-xs text-gray-400 pb-2 border-b">
            <span>No</span>
            <span>Product</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Total</span>
            <span>Action</span>
        </div>

        {/* ROW */}
        {cart.map((item, i) => (
            <div
            key={i}
            className="grid grid-cols-[40px_2fr_60px_1fr_1fr_40px] items-center text-sm border-b pb-3"
            >

            {/* NO */}
            <span className="font-medium text-[14px] leading-[21px] text-[#1D1D1D]">{i + 1}</span>

            {/* PRODUCT */}
            <div className="flex items-center gap-3">
                <img
                src={item.image}
                className="w-[64px] h-[64px] rounded"
                />
                <div>
                <p className="font-medium text-[14px] leading-[21px] text-[#1D1D1D]">{item.name}</p>
                </div>
            </div>

            {/* QTY */}
            <span className="font-medium text-[14px] leading-[21px] text-[#1D1D1D]">{item.qty}</span>

            {/* PRICE */}
            <span className="font-medium text-[14px] leading-[21px] text-[#1D1D1D]">
                Rp {item.price.toLocaleString("id-ID")}
            </span>

            {/* TOTAL */}
            <span className="font-medium text-[14px] leading-[21px] text-[#1D1D1D]">
                Rp {(item.price * item.qty).toLocaleString("id-ID")}
            </span>

            {/* DELETE */}
            <button
                onClick={() =>
                    setCart(prev => prev.filter((_, idx) => idx !== i))
                }
                className="cursor-pointer"
                >
                <img
                    src="/icons/Delete.png"
                    className="w-[24px] h-[24px] brightness-0 opacity-40 hover:opacity-80 transition"
                />
            </button>

            </div>
        ))}

        </div>

      {/* TOTAL */}
      <div className="flex justify-between items-center mt-10">

        <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold">
          Total
        </h2>

        <h2 className="text-[44px] leading-[66px] font-semibold text-[#702BF0]">
          Rp {total.toLocaleString("id-ID")}
        </h2>

      </div>

      {/* BUTTON */}
      <div className="flex justify-end gap-4 mt-6">

        <button 
            onClick={() => setShowQRIS(true)}
            className="w-[150px] h-[41px] px-[30px] py-[10px] gap-[10px] bg-[#702BF0] text-[#EAEAEA] text-[14px] leading-[21px] rounded-full cursor-pointer hover:opacity-80 transition">
          QRIS
        </button>

        <button 
            onClick={() => setShowCashModal(true)}
            className="w-[150px] h-[41px] px-[30px] py-[10px] gap-[10px] bg-[#702BF0] text-[#EAEAEA] text-[14px] leading-[21px] rounded-full cursor-pointer hover:opacity-80 transition">
          Cash
        </button>

      </div>

      {showCashModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

            {/* OVERLAY */}
            <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowCashModal(false)}
            ></div>

            {/* MODAL */}
            <div className="relative bg-[#FFFFFF] w-[492px] p-[30px] rounded-xl shadow-lg">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-[36px] leading-[54px] text-[#1D1D1D] ">
                    Add Cash Amount
                    </h2>
                    <button className="cursor-pointer hover:opacity-80 transition" onClick={() => setShowCashModal(false)}>✕</button>
                </div>

                {/* TOTAL INPUT */}
                <p className="text-center text-[24px] leading-[36px] text-[#1D1D1D] font-semibold mb-4">
                    Rp {cashValue.toLocaleString("id-ID")}
                </p>

                {/* QUICK BUTTON */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {/* EXACT */}
                    <button
                        onClick={() => setCashInput(String(exactCash))}
                        className="bg-[#EAEAEA] py-2 rounded-full text-[14px] leading-[21px] font-medium cursor-pointer hover:opacity-70 transition "
                    >
                        Rp {exactCash.toLocaleString("id-ID")}
                    </button>

                    {/* ROUNDED */}
                    <button
                        onClick={() => setCashInput(String(roundedCash))}
                        className="bg-[#EAEAEA] py-2 rounded-full text-[14px] leading-[21px] font-medium cursor-pointer hover:opacity-70 transition"
                    >
                        Rp {roundedCash.toLocaleString("id-ID")}
                    </button>

                </div>

                {/* KEYPAD */}
                <div className="grid grid-cols-3 gap-2 text-center">

                    {[1,2,3,4,5,6,7,8,9].map((n) => (
                    <button
                        key={n}
                        onClick={() => handleNumber(String(n))}
                        className="bg-[#EAEAEA] py-3 rounded cursor-pointer hover:opacity-70 transition"
                    >
                        {n}
                    </button>
                    ))}

                    <button onClick={handleClear} className="bg-[#EAEAEA] py-3 rounded cursor-pointer hover:opacity-70 transition">
                    C
                    </button>

                    <button onClick={() => handleNumber("0")} className="bg-[#EAEAEA] py-3 rounded cursor-pointer hover:opacity-70 transition">
                    0
                    </button>

                    <button onClick={handleDelete} className="bg-[#EAEAEA] py-3 rounded cursor-pointer hover:opacity-70 transition">
                    ⌫
                    </button>

                </div>

                {/* CHANGE */}
                <div className="mt-4">
                    <p className="text-[14px] leading-[21px] font-medium text-[#1D1D1D] ">Change</p>

                    <p
                    className={`text-[24px] leading-[36px] font-medium ${
                        change < 0 ? "text-red-500" : "text-green-500"
                    }`}
                    >
                    Rp {change.toLocaleString("id-ID")}
                    </p>
                </div>

                {/* BUTTON */}
                <div className="flex justify-end gap-2 mt-4">

                    <button
                        onClick={() => setShowCashModal(false)}
                        className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:opacity-70 transition"
                        >
                            Cancel
                    </button>

                    <button
                        onClick={() => {
                            if (change < 0) return;

                            setShowCashModal(false);
                            setPaymentMethod("cash");
                            setShowSuccess(true);
                        }}
                        disabled={change < 0}
                        className={`px-4 py-2 rounded-full text-white transition
                            ${change < 0 
                            ? "bg-gray-300 cursor-not-allowed opacity-70" 
                            : "bg-[#702BF0] cursor-pointer hover:opacity-80"
                            }`}
                        >
                            Pay
                    </button>

                </div>

            </div>

            
        </div>
      )}

      {showSuccess && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center">

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* CONTENT */}
    <div className="relative bg-white w-[400px] p-6 rounded-xl shadow-lg text-center">

      {/* ICON */}
      <div className="w-[60px] h-[60px] mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
        <span className="text-green-500 text-2xl">✓</span>
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-2">
        {paymentMethod === "cash"
          ? "Payment Success"
          : "QRIS Payment Success"}
      </h2>

      {/* DETAIL */}
      <div className="text-sm text-gray-500 space-y-1 mb-4">

        {/* TOTAL */}
        <p>Total: Rp {total.toLocaleString("id-ID")}</p>

        {/* CASH */}
        {paymentMethod === "cash" && (
          <>
            <p>Cash: Rp {cashValue.toLocaleString("id-ID")}</p>

            <p className={`font-medium ${
              change < 0 ? "text-red-500" : "text-green-500"
            }`}>
              Change: Rp {change.toLocaleString("id-ID")}
            </p>
          </>
        )}

        {/* QRIS */}
        {paymentMethod === "qris" && (
          <p className="text-green-500 font-medium">
            Paid via QRIS
          </p>
        )}

      </div>

      {/* BUTTON */}
      <button
        onClick={() => {
          setShowSuccess(false);
          setCart([]);
          setCashInput("");
          setPaymentMethod("");
          navigate("/cashier");
        }}
        className="w-full py-2 bg-[#702BF0] text-white rounded-full cursor-pointer hover:opacity-80 transition"
      >
        Done
      </button>

    </div>
  </div>
)}

        {showQRIS && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">

            {/* OVERLAY */}
            <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowQRIS(false)}
            ></div>

            {/* CONTENT */}
            <div className="relative bg-[#FFFFFF] w-[492px] p-[30px] rounded-xl shadow-lg">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[36px] leading-[54px] text-[#1D1D1D] font-semibold">QRIS Payment</h2>
                <button className="cursor-pointer hover:opacity-80 transition" onClick={() => setShowQRIS(false)}>✕</button>
            </div>

            {/* TOTAL */}
            <div className="text-center mb-4">
                <p className="text-[24px] leading-[36px] text-[#1D1D1D] font-semibold">
                Rp {total.toLocaleString("id-ID")}
                </p>
                <div className="w-[120px] h-[1px] bg-gray-300 mx-auto mt-1"></div>
            </div>

            {/* QR DUMMY */}
            <div className="flex justify-center mb-6">
                {isWaitingQRIS ? (
                    <div className="flex flex-col items-center gap-3">
                    <div className="w-[50px] h-[50px] border-4 border-gray-300 border-t-[#702BF0] rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-400">Menunggu pembayaran...</p>
                    </div>
                ) : (
                    <div className="w-[180px] h-[180px] rounded-lg flex items-center justify-center">
                        <img src="../icons/Code.png" className="w-[180px]" />
                    </div>
                )}
                
            </div>

            {/* BUTTON */}
            <div className="flex justify-end gap-3">
                <button
                onClick={() => setShowQRIS(false)}
                className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:opacity-80 transition "
                >
                Cancel
                </button>

                <button
                    onClick={() => {
                        setIsWaitingQRIS(true);

                        setTimeout(() => {
                        setIsWaitingQRIS(false);
                        setShowQRIS(false);
                        setPaymentMethod("qris");
                        setShowSuccess(true);
                        }, 5000); // 5 detik
                    }}
                    className="px-4 py-2 bg-[#702BF0] text-white rounded-full cursor-pointer hover:opacity-80 transition"
                >
                Pay
                </button>
            </div>

            </div>
        </div>
        )}

    </div>
  );
}