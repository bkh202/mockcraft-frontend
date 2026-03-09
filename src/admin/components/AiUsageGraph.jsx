import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
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

  if (loading) return (
    <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
      Loading graph...
    </div>
  );

  if (data.length === 0) return (
    <div style={{ textAlign: "center", padding: "40px", color: "#9ca3af" }}>
      No AI usage data yet.
    </div>
  );

  return (
    <div style={{ background: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: 0 }}>
            🤖 AI Usage — Last 7 Days
          </h2>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
            Total calls in period
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>Total</p>
            <p style={{ fontSize: "22px", fontWeight: "700", color: "#1d4ed8", margin: 0 }}>{total}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>Peak Day</p>
            <p style={{ fontSize: "22px", fontWeight: "700", color: "#7e22ce", margin: 0 }}>{max}</p>
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
            contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb", fontSize: "12px" }}
            formatter={(value) => [`${value} calls`, "AI Calls"]}
          />
          <Bar dataKey="calls" fill="#3b82f6" radius={[6, 6, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}