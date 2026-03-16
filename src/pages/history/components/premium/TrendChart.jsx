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
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-80 flex items-center justify-center text-gray-400">
        <div className="text-center">
          <span className="text-4xl block mb-2">🔍</span>
          Select a topic to view trend
        </div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-80 flex items-center justify-center text-gray-400">
        No data available
      </div>
    );
  }

  const hasPreviousData = data.some(d => d.previousAccuracy > 0);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const current = payload.find(p => p.dataKey === "accuracy");
    const previous = payload.find(p => p.dataKey === "previousAccuracy");

    return (
      <div className="bg-white p-3 rounded-lg shadow border">
        <p className="text-sm font-medium">{label}</p>
        {current && (
          <p className="text-indigo-600 font-semibold">
            Current: {current.value.toFixed(1)}%
          </p>
        )}
        {previous && (
          <p className="text-gray-500 font-medium">
            Previous: {previous.value.toFixed(1)}%
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>📊</span> {topic} Trend
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="dateLabel" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="#6366f1"
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
            stroke="#f59e0b"
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