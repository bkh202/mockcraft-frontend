import React from "react";

const RangeSelector = ({ range, setRange }) => {
  const options = [
    { label: "7d", value: "SEVEN_DAYS" },
    { label: "30d", value: "THIRTY_DAYS" },
    { label: "ALL", value: "ALL" }
  ];

  return (
    <div className="flex gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-200 w-fit">
      {options.map(option => (
        <button
          key={option.value}
          onClick={() => setRange(option.value)}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
            range === option.value
              ? "bg-black text-white border border-black"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default RangeSelector;