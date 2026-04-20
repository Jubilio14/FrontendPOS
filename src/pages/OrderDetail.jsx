import { useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const navigate = useNavigate();

  // 🔥 DUMMY DATA (1 ORDER)
  const orderItems = [
    {
      name: "Kotak Makan Plastik",
      variant: "1000 ml",
      type: "Transparan",
      qty: 200,
      status: "Safe",
      warehouse: "GD-1012",
    },
    {
      name: "Botol Plastik PET",
      variant: "600 ml",
      type: "Bening",
      qty: 500,
      status: "Safe",
      warehouse: "WH-2027",
    },
    {
      name: "Ember Plastik",
      variant: "20 Liter",
      type: "Merah",
      qty: 80,
      status: "Warning",
      warehouse: "ST-1008",
    },
    {
      name: "Toples Plastik",
      variant: "5 Liter",
      type: "Biru",
      qty: 120,
      status: "Full",
      warehouse: "DG-1019",
    },
  ];

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[36px] font-semibold">
          Order Detail
        </h1>

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
        <div className="grid grid-cols-7 text-sm text-gray-400 pb-3 border-b">
          <span>No</span>
          <span>Item</span>
          <span>Variant</span>
          <span>Type</span>
          <span>Quantity</span>
          <span>Status</span>
          <span>Warehouse Code</span>
        </div>

        {/* ROW */}
        {orderItems.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-7 items-center py-[18px] border-b last:border-none text-[14px] hover:bg-gray-50 transition"
          >
            <span>{i + 1}</span>
            <span>{item.name}</span>
            <span>{item.variant}</span>
            <span>{item.type}</span>

            {/* QTY */}
            <span>{item.qty}</span>

            {/* STATUS */}
            <span
              className={`font-semibold ${
                item.status === "Safe"
                  ? "text-green-500"
                  : item.status === "Warning"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {item.status}
            </span>

            <span>{item.warehouse}</span>
          </div>
        ))}

      </div>

    </div>
  );
}