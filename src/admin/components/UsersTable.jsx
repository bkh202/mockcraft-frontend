import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const TIER_STYLE = {
  PREMIUM: { bg: "#fdf4ff", color: "#7e22ce", label: "👑 Premium" },
  FREE:    { bg: "#f3f4f6", color: "#374151", label: "🆓 Free"    },
};

const formatDate = (dateStr) => {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const isTrialActive = (trialEndDate) => {
  if (!trialEndDate) return false;
  return new Date(trialEndDate) > new Date();
};

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => { loadData(); }, [page]);

  const loadData = async () => {
    try {
      const res = await api.get(`/admin/stats/Admindashboard?page=${page}&size=5`);
      setUsers(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBlockToggle = async (user) => {
    if (user.blocked) {
      const reason = prompt("Enter unblock reason:");
      if (!reason) return;
      await api.put(`/admin/users/${user.id}/unblock?reason=${encodeURIComponent(reason)}`);
    } else {
      await api.put(`/admin/users/${user.id}/block?reason=manual-admin`);
    }
    loadData();
  };

  if (loading) return <p style={{ color: "#6b7280", textAlign: "center", padding: "16px" }}>Loading users...</p>;

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
            {["Name", "Email", "Tier", "Trial Ends", "Joined", "AI Calls", "Rate Hits", "Status", "Action"].map(h => (
              <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#6b7280", fontWeight: "600", fontSize: "11px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            const trialActive = isTrialActive(user.trialEndDate);
            const tierInfo = TIER_STYLE[user.tier] || TIER_STYLE.FREE;

            return (
              <tr key={user.id} style={{ borderBottom: "1px solid #f3f4f6" }}
                onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
                onMouseLeave={e => e.currentTarget.style.background = "white"}
              >
                {/* Name */}
                <td style={{ padding: "10px 12px", color: "#111827", fontWeight: "500" }}>
                  {user.name || "—"}
                </td>

                {/* Email */}
                <td style={{ padding: "10px 12px", color: "#6b7280", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {user.email}
                </td>

                {/* Tier */}
                <td style={{ padding: "10px 12px" }}>
                  <span style={{
                    background: tierInfo.bg, color: tierInfo.color,
                    padding: "3px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600"
                  }}>
                    {tierInfo.label}
                  </span>
                </td>

                {/* Trial End */}
                <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                  {user.trialEndDate ? (
                    <span style={{ color: trialActive ? "#15803d" : "#9ca3af", fontWeight: trialActive ? "600" : "400" }}>
                      {trialActive ? "⏳ " : "✗ "}{formatDate(user.trialEndDate)}
                    </span>
                  ) : "—"}
                </td>

                {/* Joined */}
                <td style={{ padding: "10px 12px", color: "#6b7280", whiteSpace: "nowrap" }}>
                  {formatDate(user.joinedDate)}
                </td>

                {/* AI Calls */}
                <td style={{ padding: "10px 12px", color: "#1d4ed8", fontWeight: "600", textAlign: "center" }}>
                  {user.totalCalls}
                </td>

                {/* Rate Hits */}
                <td style={{ padding: "10px 12px", textAlign: "center" }}>
                  <span style={{
                    background: user.rateLimitHits > 0 ? "#fff7ed" : "#f3f4f6",
                    color: user.rateLimitHits > 0 ? "#c2410c" : "#6b7280",
                    padding: "2px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600"
                  }}>
                    {user.rateLimitHits}
                  </span>
                </td>

                {/* Status */}
                <td style={{ padding: "10px 12px" }}>
                  <span style={{
                    background: user.blocked ? "#fef2f2" : "#f0fdf4",
                    color: user.blocked ? "#b91c1c" : "#15803d",
                    padding: "3px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600"
                  }}>
                    {user.blocked ? "🚫 Blocked" : "✅ Active"}
                  </span>
                </td>

                {/* Action */}
                <td style={{ padding: "10px 12px" }}>
                  <button
                    onClick={() => handleBlockToggle(user)}
                    style={{
                      background: user.blocked ? "#16a34a" : "#dc2626",
                      color: "white", border: "none", borderRadius: "6px",
                      padding: "4px 10px", fontSize: "11px", fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
        <button
          disabled={page === 0}
          onClick={() => setPage(p => p - 1)}
          style={{ padding: "6px 14px", background: "#e5e7eb", border: "none", borderRadius: "6px", cursor: page === 0 ? "not-allowed" : "pointer", opacity: page === 0 ? 0.5 : 1 }}
        >
          Prev
        </button>
        <span style={{ fontSize: "13px", color: "#6b7280" }}>Page {page + 1} of {totalPages}</span>
        <button
          disabled={page + 1 === totalPages}
          onClick={() => setPage(p => p + 1)}
          style={{ padding: "6px 14px", background: "#e5e7eb", border: "none", borderRadius: "6px", cursor: page + 1 === totalPages ? "not-allowed" : "pointer", opacity: page + 1 === totalPages ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </div>
  );
}