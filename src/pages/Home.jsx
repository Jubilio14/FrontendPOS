import Filter from "../components/Filter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

  const navigate = useNavigate();
  const [filter, setFilter] = useState("Week");
  const bestSeller = [
    { name: "Gelas Plastik", size: "220 ml", color: "Transparan", stock: "4,500 pcs" },
    { name: "Botol Plastik PET", size: "600 ml", color: "Bening", stock: "2,800 pcs" },
    { name: "Kotak Makan Plastik", size: "1000 ml", color: "Transparan", stock: "1,950 pcs" },
    { name: "Ember Plastik", size: "10 Liter", color: "Hijau", stock: "820 pcs" },
    { name: "Toples Plastik", size: "5 Liter", color: "Biru", stock: "740 pcs" },
  ];

  const labels = {
    Day: ["00","04","08","12","16","20"],
    Week: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    Month: ["1","5","10","15","20","25","30"],
    Year: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  };

  const dataRevenue = {
    Day:   [20, 40, 35, 60, 50, 70],
    Week:  [50, 60, 55, 80, 70, 90, 65],
    Month: [30, 50, 40, 60, 55, 70, 65],
    Year:  [70, 80, 75, 90, 85, 95, 88, 92, 86, 89, 93, 97],
  };

  const dataCategory = {
    Day:   [15, 30, 25, 40, 35, 45],
    Week:  [30, 50, 40, 60, 55, 70, 65],
    Month: [20, 40, 35, 50, 45, 60, 55],
    Year:  [60, 70, 65, 80, 75, 85, 78, 82, 76, 79, 83, 87],
  };

  const categoryData = dataCategory[filter];
  const revenueData = dataRevenue[filter];
  const currentLabels = labels[filter];
  const points = revenueData
    .map((val, i) => `${(i * 300) / (revenueData.length - 1)},${100 - val}`)
    .join(" ");
  const categoryPoints = categoryData
    .map((val, i) => `${(i * 300) / (categoryData.length - 1)},${100 - val}`)
    .join(" ");

  return (
    <div className="space-y-[50px]">

      {/* Header */}
      <div className="flex justify-between items-center">
        
        <h1 className="text-[50px] font-semibold leading-[75px] text-black">
          Home
        </h1>

        <Filter value={filter} onChange={setFilter} />
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-3 gap-6">

        {/* Best Seller */}
       <div className="col-span-2 bg-white p-6 rounded-2xl shadow-sm ">
  
            <h4 className="text-[24px] leading-[36px] font-semibold  mb-4 text-black">
                Best Seller
            </h4>

            <div className="space-y-3">
                {bestSeller.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b-[0.5px] border-[#D1D5DB] py-[20px] last:border-none text-[12px] leading-[18px] font-medium text-black"
                >
                    
                    {/* Kiri */}
                    <div className="flex items-center gap-3">
                    <span className="w-4 text-gray-400">{index + 1}</span>
                    <span>{item.name}</span>
                    </div>

                    {/* Tengah */}
                    <span className="text-center">{item.size}</span>
                    <span className="text-center">{item.color}</span>

                    {/* Kanan */}
                    <span className="text-right">{item.stock}</span>

                </div>
                ))}
            </div>

       </div>

        {/* Target (kosong dulu) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-[24px] leading-[36px] font-semibold text-black">
            Target
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* Revenue */}
        <div
            onClick={() => navigate("/revenue")}
            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition"
        >
            <h2 className="text-[24px] leading-[36px] font-semibold mb-4 text-black">
                Revenue
            </h2>

            <div className="h-[260px] flex flex-col justify-end">

                {/* Chart */}
                <div className="flex-1">
                <svg key={filter} viewBox="0 0 300 100" className="w-full h-full">
                    <polyline
                        fill="none"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        points={points}
                        className="animate-draw"
                    />
                </svg>
                </div>

                {/* Label */}
                <div className="flex justify-between text-[10px] text-gray-400 pt-2">
                    {currentLabels.map((d, i) => (
                        <span key={i}>{d}</span>
                    ))}
                </div>

            </div>
        </div>

        {/* Sales by Category */}
        <div
            onClick={() => navigate("/sales-category")}
            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition"
        >
            <h2 className="text-[24px] leading-[36px] font-semibold mb-4 text-black">
                Sales by Category
            </h2>

            <div className="h-[260px] flex flex-col justify-end">

                {/* Chart */}
                <div className="flex-1">
                <svg key={filter} viewBox="0 0 300 100" className="w-full h-full">
                    
                    {/* background lines */}
                    <polyline
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="1"
                    points="0,50 50,30 100,60 150,40 200,70 250,30 300,10"
                    />

                    <polyline
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                    points="0,70 50,60 100,40 150,60 200,50 250,70 300,20"
                    />

                    {/* main line */}
                    <polyline
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    points={categoryPoints}
                    className="animate-draw"
                    />
                </svg>
                </div>

                {/* Label */}
                <div className="flex justify-between text-[10px] text-gray-400 pt-2">
                    {currentLabels.map((d, i) => (
                        <span key={i}>{d}</span>
                    ))}
                </div>

            </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">

            <h2 className="text-[24px] leading-[36px] font-semibold mb-4 text-black">
                Low stock
            </h2>

            <div>
                {[
                { name: "Gelas Plastik", size: "220 ml", color: "Transparan", stock: "50 pcs" },
                { name: "Botol Plastik PET", size: "600 ml", color: "Bening", stock: "20 pcs" },
                { name: "Kotak Makan Plastik", size: "1000 ml", color: "Transparan", stock: "20 pcs" },
                { name: "Ember Plastik", size: "10 Liter", color: "Hijau", stock: "10 pcs" },
                { name: "Toples Plastik", size: "5 Liter", color: "Biru", stock: "5 pcs" },
                ].map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-start py-[10px] border-b-[0.5px] border-[#D1D5DB] last:border-none"
                >
                    
                    {/* Kiri */}
                    <div className="flex gap-3">

                    {/* Nomor */}
                    <span className="text-[12px] text-gray-400 w-4">
                        {index + 1}
                    </span>

                    {/* Nama + Detail */}
                    <div>
                        <p className="text-[14px] font-medium text-gray-800">
                        {item.name}
                        </p>

                        <p className="text-[12px] text-gray-400">
                        {item.size} <span className="mx-1">•</span> {item.color}
                        </p>
                    </div>

                    </div>

                    {/* Stock */}
                    <span className="text-[12px] font-semibold text-purple-600">
                    {item.stock}
                    </span>

                </div>
                ))}
            </div>

        </div>

    </div>

    </div>
  );
}