import { useLocation } from "react-router-dom";

export default function SupplierInvoice() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const totalAll = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-6">

      {/* TITLE */}
      <h1 className="text-[44px] leading-[66px] text-[#1D1D1D] font-semibold mb-6">
        Purchase Requisition
      </h1>

      {/* TABLE */}
      <div className="bg-white rounded-2xl p-6 gap-[30px]">

        {/* HEADER */}
        <div className="grid grid-cols-[50px_2fr_1fr_1fr_1fr_1fr_1.5fr] px-[20px] py-[30px] gap-[20px] text-[14px] leading-[21px] font-medium text-[#1D1D1D]">
          <span>No</span>
          <span>Item</span>
          <span>Variant</span>
          <span>Type</span>
          <span>Price (Rp)</span>
          <span>Quantity</span>
          <span>Total Price (Rp)</span>
        </div>

        {/* ROW */}
        {cart.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            Tidak ada data
          </div>
        ) : (
          cart.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[50px_2fr_1fr_1fr_1fr_1fr_1.5fr] gap-[20px] p-[20px] border-b last:border-none text-[14px] leading-[21px] font-medium text-[#1D1D1D] "
            >
              <span>{i + 1}</span>
              <span>{item.name}</span>
              <span>{item.variant}</span>
              <span>{item.type || "-"}</span>
              <span>{item.price.toLocaleString("id-ID")}</span>
              <span>{item.qty}</span>
              <span className="text-[#702BF0] font-medium">
                {(item.price * item.qty).toLocaleString("id-ID")}
              </span>
            </div>
          ))
        )}

        {/* TOTAL */}
        <div className="flex justify-end mt-6">
          <div className="text-right">
            <p className="text-sm text-gray-400">Total</p>
            <p className="text-[36px] leading-[54px] font-semibold text-[#702BF0]">
              Rp {totalAll.toLocaleString("id-ID")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}