import { useState } from "react";
import Filter from "../components/Filter";

export default function Revenue() {
  const [filter, setFilter] = useState("Week");

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

  const revenueData = dataRevenue[filter];
  const currentLabels = labels[filter];

  // 🔥 LIMIT AREA BIAR GAK KEPO TONG
  const max = Math.max(...revenueData);
  const min = Math.min(...revenueData);

  const width = 1000;
  const height = 160;

  const paddingX = 60;
  const topLimit = 100;
  const bottomLimit = 150;

  const points = revenueData
    .map((val, i) => {
      const x =
        revenueData.length > 1
          ? paddingX +
            (i * (width - paddingX * 2)) /
              (revenueData.length - 1)
          : width / 2;

      const y =
        max === min
          ? (topLimit + bottomLimit) / 2
          : topLimit +
            (1 - (val - min) / (max - min)) *
              (bottomLimit - topLimit);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="space-y-[40px]">

      {/* Header */}
      <div className="flex justify-between items-center relative z-10">
        <h1 className="text-[50px] font-semibold leading-[75px]">
          Revenue
        </h1>

        <Filter value={filter} onChange={setFilter} />
      </div>

      {/* Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">

        <h2 className="text-[24px] font-semibold mb-6">
          Revenue Overview
        </h2>

        <div className="h-[300px] flex flex-col justify-end pt-6">

          {/* Chart */}
          <div className="flex-1">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full pointer-events-none"
            >
              {/* 🔥 Gradient */}
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* 🔥 Area (biar keren) */}
              <polygon
                fill="url(#gradient)"
                points={`${paddingX},${bottomLimit} ${points} ${width - paddingX},${bottomLimit}`}
              />

              {/* 🔥 Line */}
              <polyline
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
              />
            </svg>
          </div>

          {/* Label */}
          <div className="flex justify-between text-xs text-gray-400 pt-3 px-[60px]">
            {currentLabels.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}