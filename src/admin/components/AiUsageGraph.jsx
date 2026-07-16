import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

export default function AiUsageGraph() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/ai/stats/daily")
      .then(res => {
        // Last 7 days only
        const formatted = res.data
          .slice(-7)
          .map(item => ({
            date: formatDate(item.date),
            calls: Number(item.count)
          }));
        setData(formatted);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
  };

  const total = data.reduce((sum, d) => sum + d.calls, 0);
  const max = Math.max(...data.map(d => d.calls), 0);

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex items-center justify-center py-10">
        <i className="fa fa-spinner fa-spin text-2xl text-black"></i>
        <span className="ml-3 text-gray-600 font-medium">Loading graph...</span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center py-10">
        <p className="text-gray-500 font-medium">No AI usage data yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="text-lg font-extrabold text-black flex items-center gap-2">
            <i className="fa fa-robot text-black"></i> AI Usage — Last 7 Days
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">Total calls in period</p>
        </div>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total</p>
            <p className="text-2xl font-black text-black">{total}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Peak Day</p>
            <p className="text-2xl font-black text-black">{max}</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
              background: "white",
              color: "#000"
            }}
            formatter={(value) => [`${value} calls`, "AI Calls"]}
            labelStyle={{ color: "#000" }}
            itemStyle={{ color: "#000" }}
          />
          <Bar dataKey="calls" fill="#000000" radius={[6, 6, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}