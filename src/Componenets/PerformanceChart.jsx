// PerformanceChart.jsx (Simple chart component)
const PerformanceChart = () => {
  const data = [65, 70, 75, 80, 85, 82, 84];
  const maxValue = Math.max(...data);
  
  return (
    <div className="h-64">
      <div className="flex h-full items-end gap-2">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-linear-to-t from-blue-500 to-indigo-400 rounded-t-lg transition-all duration-300 hover:opacity-80"
              style={{ height: `${(value / maxValue) * 90}%` }}
            ></div>
            <div className="text-xs text-gray-500 mt-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
            </div>
            <div className="text-sm font-semibold text-gray-900 mt-1">
              {value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;