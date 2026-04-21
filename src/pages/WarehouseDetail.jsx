import { useLocation, useNavigate } from "react-router-dom";

export default function WarehouseDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const warehouseName = location.state?.name || "Warehouse";

  // 🔥 PREFIX
  const generatePrefix = (name) => {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  const prefix = generatePrefix(warehouseName);

  // 🔥 STATUS LOGIC
  const getStatus = (total, max) => {
    if (total === 0) return "Empty";
    if (total >= max) return "Full";
    if (total < max * 0.3) return "Warning";
    return "Safe";
  };

  // 🔥 DATA YANG ADA
  const items = [
    {
      name: "Botol Plastik PET",
      variant: "600 ml",
      type: "Bening",
      max: 500,
      total: 400,
    },
    {
      name: "Kotak Makan Plastik",
      variant: "1000 ml",
      type: "Transparan",
      max: 300,
      total: 50,
    },
    {
      name: "Ember Plastik",
      variant: "20 Liter",
      type: "Merah",
      max: 150,
      total: 0,
    },
    {
      name: "Gelas Plastik",
      variant: "1 Liter",
      type: "Merah",
      max: 150,
      total: 150,
    },
  ];

  // 🔥 TOTAL SLOT (biar banyak row)
  const totalRows = 12;

  // 🔥 GABUNG DATA + SLOT KOSONG
  const data = Array.from({ length: totalRows }, (_, i) => {
    const item = items[i];

    if (item) {
      return {
        ...item,
        code: `${prefix}-${String(i + 1).padStart(3, "0")}`,
        status: getStatus(item.total, item.max),
      };
    }

    return {
      code: `${prefix}-${String(i + 1).padStart(3, "0")}`,
      name: "",
      variant: "",
      type: "",
      max: "",
      total: "",
      status: "",
    };
  });

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[44px] font-semibold leading-[66px]">
            {warehouseName}
          </h1>
          <p className="text-sm text-gray-400">
            Code Prefix: {prefix}
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-black"
        >
          ← Back
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl overflow-hidden">

        {/* HEADER TABLE */}
        <div className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_80px] px-6 py-4 text-[14px] font-medium text-[#1D1D1D] border-b">
          <span>Code</span>
          <span>Item</span>
          <span>Variant</span>
          <span>Type</span>
          <span>Max Item</span>
          <span>Total Item</span>
          <span>Status</span>
          <span className="text-center">Action</span>
        </div>

        {/* ROW */}
        {data.map((item, i) => {
          const hasData = item.name !== "";

          return (
            <div
              key={i}
              className="grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr_1fr_80px] px-6 py-4 border-b last:border-none items-center hover:bg-gray-50 transition"
            >
              {/* CODE */}
              <span className="font-semibold">{item.code}</span>

              {/* DATA */}
              <span className={hasData ? "" : "text-gray-300"}>
                {item.name || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.variant || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.type || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.max || "-"}
              </span>
              <span className={hasData ? "" : "text-gray-300"}>
                {item.total || "-"}
              </span>

              {/* STATUS */}
              <span
                className={`font-semibold ${
                  item.status === "Safe"
                    ? "text-green-500"
                    : item.status === "Warning"
                    ? "text-yellow-500"
                    : item.status === "Empty"
                    ? "text-gray-400"
                    : item.status === "Full"
                    ? "text-red-500"
                    : "text-gray-300"
                }`}
              >
                {item.status || "-"}
              </span>

              {/* ACTION */}
              <div className="flex justify-center">
                {hasData ? (
                  <button className="hover:scale-110 transition">
                    <img
                      src="/icons/Transfer.png" 
                      className="w-[18px] opacity-60 hover:opacity-100"
                    />
                  </button>
                ) : (
                  <button className="text-[#702BF0] text-[20px] hover:scale-110 transition">
                    <img
                      src="/icons/plusPurple.png" 
                      className="w-[18px] opacity-60 hover:opacity-100"
                    />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}