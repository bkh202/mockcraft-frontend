import React, { useEffect, useState } from "react";
import { getDifficulty } from "../../../../services/premiumAnalyticsApi";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from "recharts";

const DifficultyChart = ({ range }) => {
  const [data, setData] = useState([]);

 useEffect(() => {
  if (!range) return;
  getDifficulty(range).then(res => {
    console.log("Difficulty API response:", res);      // full response
    console.log("Difficulty data:", res.data);         // data field
    setData(res.data || []);
  });
}, [range]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📊</span>
        <h3 className="text-lg font-semibold">Difficulty Breakdown</h3>
      </div>
      {data.length === 0 ? (
        <div className="h-[300px] flex items-center justify-center text-gray-400">
          No data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="difficulty" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
            />
            <Bar dataKey="accuracy" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DifficultyChart;