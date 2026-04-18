export default function Filter({ value, onChange, options = ["Day", "Week", "Month", "Year"] }) {

  return (
    <div className="flex bg-white p-1 rounded-full shadow-sm w-fit gap-1">

      {options.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)} // 🔥 kirim ke Home
          className={`px-4 py-1 rounded-full text-sm transition cursor-pointer ${
            value === item
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
}