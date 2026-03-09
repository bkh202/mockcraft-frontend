import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const CARDS = [
  { key: "totalUsers",       label: "Total Users",       icon: "👥", bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
  { key: "newUsersToday",    label: "New Today",          icon: "🆕", bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
  { key: "trialUsers",       label: "Trial Users",        icon: "⏳", bg: "#fefce8", border: "#fde68a", text: "#b45309" },
  { key: "premiumUsers",     label: "Premium Users",      icon: "👑", bg: "#fdf4ff", border: "#e9d5ff", text: "#7e22ce" },
  { key: "totalTodayCalls",  label: "AI Calls Today",     icon: "🤖", bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
  { key: "todayRateLimited", label: "Rate Limit Hits",    icon: "⚠️", bg: "#fff7ed", border: "#fed7aa", text: "#c2410c" },
  { key: "blockedUsers",     label: "Blocked Users",      icon: "🚫", bg: "#fef2f2", border: "#fecaca", text: "#b91c1c" },
];

export default function StatsCards() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersToday: 0,
    trialUsers: 0,
    premiumUsers: 0,
    totalTodayCalls: 0,
    todayRateLimited: 0,
    blockedUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/stats/overview")
      .then(res => { setStats(res.data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "16px",
      marginBottom: "24px"
    }}>
      {CARDS.map(card => (
        <Card
          key={card.key}
          label={card.label}
          value={loading ? "..." : stats[card.key]}
          icon={card.icon}
          bg={card.bg}
          border={card.border}
          text={card.text}
        />
      ))}
    </div>
  );
}

function Card({ label, value, icon, bg, border, text }) {
  return (
    <div style={{
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: "12px",
      padding: "16px 20px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: "22px", marginBottom: "6px" }}>{icon}</div>
      <p style={{ color: "#6b7280", fontSize: "12px", fontWeight: "500", marginBottom: "4px" }}>
        {label}
      </p>
      <p style={{ color: text, fontSize: "28px", fontWeight: "700", lineHeight: 1 }}>
        {value}
      </p>
    </div>
  );
}