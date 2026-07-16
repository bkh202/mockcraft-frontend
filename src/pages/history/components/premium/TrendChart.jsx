import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { getTopicTrend } from "../../../../services/premiumAnalyticsApi";

const TrendChart = ({ topic, range }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!topic || !range) return;

    getTopicTrend(topic, range)
      .then(res => {
        const formatted = (res.data || []).map(item => ({
          ...item,
          dateLabel: new Date(item.date).toLocaleDateString()
        }));
        setData(formatted);
      })
      .catch(() => setData([]));
  }, [topic, range]);

  if (!topic) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-80 flex items-center justify-center text-gray-500">
        <div className="text-center">
          <i className="fa fa-search text-4xl block mb-2 text-gray-300"></i>
          <span className="text-lg font-medium">Select a topic to view trend</span>
        </div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-80 flex items-center justify-center text-gray-500">
        <span className="text-lg font-medium">No data available</span>
      </div>
    );
  }

  const hasPreviousData = data.some(d => d.previousAccuracy > 0);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const current = payload.find(p => p.dataKey === "accuracy");
    const previous = payload.find(p => p.dataKey === "previousAccuracy");

    return (
      <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
        <p className="text-base font-bold text-black">{label}</p>
        {current && (
          <p className="text-black font-bold">
            Current: <span className="text-gray-800">{current.value.toFixed(1)}%</span>
          </p>
        )}
        {previous && (
          <p className="text-gray-600 font-medium">
            Previous: {previous.value.toFixed(1)}%
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
        <i className="fa fa-chart-line text-black"></i> {topic} Trend
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="dateLabel" tick={{ fontSize: 12, fill: '#6b7280' }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#6b7280' }} />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="#000000"
            strokeWidth={3}
            dot={false}
          />

          {hasPreviousData && (
            <Line
              type="monotone"
              dataKey="previousAccuracy"
              stroke="#9ca3af"
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={false}
            />
          )}

          <Line
            type="monotone"
            dataKey="rolling"
            stroke="#6b7280"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;