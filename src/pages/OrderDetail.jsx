import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function OrderDetail() {
  const navigate = useNavigate();

  // 🔥 DUMMY DATA (1 ORDER)
  const orderItems = [
    {
      name: "Semen Portland 40 kg",
      qty: 200,
      status: "Safe",
      warehouse: "GD-1012",
    },
    {
      name: "Cat Tembok Interior 5 Kg",
      qty: 500,
      status: "Safe",
      warehouse: "WH-2027",
    },
    {
      name: "Kuas Cat 3 Inch",
      qty: 80,
      status: "Warning",
      warehouse: "ST-1008",
    },
    {
      name: "Besi Beton 10mm x 12mm",
      qty: 2000,
      status: "Safe",
      warehouse: "WR-2015",
    },
    {
      name: "Sekop Pasir",
      qty: 120,
      status: "Full",
      warehouse: "DG-1019",
    },
    {
      name: "Wood Filler 1 Kg",
      qty: 90,
      status: "Safe",
      warehouse: "ST-2033",
    },
    {
      name: "Tangga Alumunium 1.5 Meter",
      qty: 150,
      status: "Warning",
      warehouse: "WH-1004",
    },
    {
      name: "Tandon Air 500 Liter",
      qty: 180,
      status: "Warning",
      warehouse: "GD-2021",
    },
    {
      name: "Paku Kayu 3inch (kg)",
      qty: 140,
      status: "Full",
      warehouse: "WR-1016",
    },
    {
      name: "Kran Air 1/2 Inch",
      qty: 60,
      status: "Full",
      warehouse: "DG-2009",
    },
  ];
  

  const handleDownloadPDF = async () => {
  const element = document.getElementById("pdf-content");

  const canvas = await html2canvas(element, {
    scale: 2, // biar tajam
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const imgWidth = 210; // A4 width
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;

  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  // kalau panjang → auto page baru
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save("order-detail.pdf");
};



  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[44px] leading-[66px] text-[#1D1D1D] font-semibold">
          Order History
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-black"
        >
          ← Back
        </button>
      </div>

      {/* TABLE */}
      <div id="pdf-content" className="bg-white text-black rounded-2xl p-6">

        {/* HEADER TABLE */}
        <div className="grid grid-cols-[60px_2fr_1fr_1fr_1.5fr] text-[14px] leading-[21px] font-medium text-[#1D1D1D] px-[20px] py-[30px] gap-[20px]">
          <span>No</span>
          <span>Item</span>
          <span>Quantity</span>
          <span>Status</span>
          <span>Warehouse Code</span>
        </div>

        {/* ROW */}
        {orderItems.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[60px_2fr_1fr_1fr_1.5fr] items-center p-[20px] gap-[20px] border-b last:border-none text-[14px] leading-[21px] font-medium text-[#1D1D1D] hover:bg-gray-50 transition"
          >
            <span>{i + 1}</span>
            <span>{item.name}</span>

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

      <button
  onClick={handleDownloadPDF}
  className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-[#702BF0] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition"
>
  <img src="/icons/documentWhite.png" className="w-[24px] h-[24px]" />
</button>
    </div>
  );
}