// WeakItem.jsx
function WeakItem({ topic, percent }) {
  const getColor = (percent) => {
    if (percent < 60) return "bg-red-500";
    if (percent < 75) return "bg-yellow-500";
    return "bg-blue-500";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-900">{topic}</span>
        <span className="text-sm font-bold text-gray-900">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getColor(percent)} rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        {percent < 60 ? "High priority" : percent < 75 ? "Needs improvement" : "Good progress"}
      </p>
    </div>
  );
}

export default WeakItem;