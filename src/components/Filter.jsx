export default function Filter({
  value,
  onChange,
  options = ["Day", "Week", "Month", "Year"],
}) {
  return (
    <div className="flex p-2 rounded-full  w-fit gap-2">

      {options.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`px-8 py-3 rounded-full text-[14px] leading-[21px] font-medium transition-all duration-200 cursor-pointer
            ${
              value === item
                ? "bg-[#702BF0] text-white shadow-sm"
                : "bg-[#FFFFFF] text-[#1D1D1D] hover:bg-gray-100"
            }
          `}
        >
          {item}
        </button>
      ))}

    </div>
  );
}