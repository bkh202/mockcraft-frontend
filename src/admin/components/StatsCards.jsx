import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const CARDS = [
  { key: "totalUsers",       label: "Total Users",       icon: "fa-users" },
  { key: "newUsersToday",    label: "New Today",          icon: "fa-user-plus" },
  { key: "trialUsers",       label: "Trial Users",        icon: "fa-hourglass-half" },
  { key: "premiumUsers",     label: "Premium Users",      icon: "fa-crown" },
  { key: "totalTodayCalls",  label: "AI Calls Today",     icon: "fa-robot" },
  { key: "todayRateLimited", label: "Rate Limit Hits",    icon: "fa-exclamation-triangle" },
  { key: "blockedUsers",     label: "Blocked Users",      icon: "fa-ban" },
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-6">
      {CARDS.map(card => (
        <Card
          key={card.key}
          label={card.label}
          value={loading ? "..." : stats[card.key]}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

function Card({ label, value, icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-2xl text-black mb-1">
        <i className={`fa ${icon}`}></i>
      </div>
      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-2xl font-black text-black leading-tight">
        {value}
      </p>
    </div>
  );
}