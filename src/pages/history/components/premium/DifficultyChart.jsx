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
      console.log("Difficulty API response:", res);
      console.log("Difficulty data:", res.data);
      setData(res.data || []);
    });
  }, [range]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <i className="fa fa-chart-bar text-xl text-black"></i>
        <h3 className="text-lg font-extrabold text-black">Difficulty Breakdown</h3>
      </div>
      {data.length === 0 ? (
        <div className="h-[300px] flex items-center justify-center text-gray-500 text-lg font-medium">
          No data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="difficulty" tick={{ fontSize: 12, fill: '#6b7280' }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#6b7280' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                color: "#000"
              }}
            />
            <Bar dataKey="accuracy" fill="#000000" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DifficultyChart;