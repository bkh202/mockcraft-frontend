import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const formatDate = (dateStr) => {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    + " " + d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
};

const HEADERS = ["User", "Category", "Subject", "Topic", "Company", "Tokens", "Latency", "Status", "Time"];

export default function AiGenerationLogTable() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => { loadLogs(); }, [page]);

  const loadLogs = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/admin/ai/logs?page=${page}&size=10`);
      // ✅ FIX: res.data is a Page object — extract .content safely
      const data = res.data;
      setLogs(Array.isArray(data) ? data : (data.content || []));
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("AI logs error:", err);
      setLogs([]);
    } finally {
      setLoading(false);
    }
  };

  const filtered = logs.filter(l => {
    if (filter === "SUCCESS") return l.success === true;
    if (filter === "FAILED") return l.success === false;
    return true;
  });

  return (
    <div style={{ background: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb", marginTop: "24px" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: 0 }}>
            📋 AI Generation Logs
          </h2>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>
            Quiz generation history with tokens & latency
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {["ALL", "SUCCESS", "FAILED"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "4px 12px", borderRadius: "999px", fontSize: "12px",
              fontWeight: "600", border: "none", cursor: "pointer",
              background: filter === f ? "#1d4ed8" : "#f3f4f6",
              color: filter === f ? "white" : "#6b7280"
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#9ca3af", padding: "32px" }}>Loading logs...</p>
      ) : filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "#9ca3af", padding: "32px" }}>No logs found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                {HEADERS.map(h => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#6b7280", fontWeight: "600", fontSize: "11px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(log => (
                <tr key={log.id} style={{ borderBottom: "1px solid #f3f4f6" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
                  onMouseLeave={e => e.currentTarget.style.background = "white"}
                >
                  <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                    <span style={{ background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600" }}>
                      #{log.userId}
                    </span>
                    <span style={{ marginLeft: "6px", color: "#6b7280", fontSize: "11px" }}>{log.tier}</span>
                  </td>
                  <td style={{ padding: "10px 12px", color: "#374151", fontWeight: "500" }}>{log.category || "—"}</td>
                  <td style={{ padding: "10px 12px", color: "#6b7280", maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{log.subject || "—"}</td>
                  <td style={{ padding: "10px 12px", color: "#6b7280", maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{log.topic || "—"}</td>
                  <td style={{ padding: "10px 12px" }}>
                    {log.company
                      ? <span style={{ background: "#fdf4ff", color: "#7e22ce", padding: "2px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600" }}>🏢 {log.company}</span>
                      : <span style={{ color: "#d1d5db" }}>—</span>}
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center" }}>
                    {log.tokensUsed != null
                      ? <span style={{ color: "#1d4ed8", fontWeight: "700" }}>{log.tokensUsed}</span>
                      : <span style={{ color: "#d1d5db" }}>—</span>}
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center" }}>
                    {log.latencyMs != null ? (
                      <span style={{ color: log.latencyMs > 5000 ? "#dc2626" : log.latencyMs > 2000 ? "#d97706" : "#15803d", fontWeight: "600" }}>
                        {log.latencyMs > 1000 ? `${(log.latencyMs / 1000).toFixed(1)}s` : `${log.latencyMs}ms`}
                      </span>
                    ) : <span style={{ color: "#d1d5db" }}>—</span>}
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ background: log.success ? "#f0fdf4" : "#fef2f2", color: log.success ? "#15803d" : "#b91c1c", padding: "3px 8px", borderRadius: "999px", fontSize: "11px", fontWeight: "600" }}>
                      {log.success ? "✅ OK" : "❌ Failed"}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px", color: "#9ca3af", whiteSpace: "nowrap", fontSize: "11px" }}>
                    {formatDate(log.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
          <button disabled={page === 0} onClick={() => setPage(p => p - 1)}
            style={{ padding: "6px 14px", background: "#e5e7eb", border: "none", borderRadius: "6px", cursor: page === 0 ? "not-allowed" : "pointer", opacity: page === 0 ? 0.5 : 1 }}>
            Prev
          </button>
          <span style={{ fontSize: "13px", color: "#6b7280" }}>Page {page + 1} of {totalPages}</span>
          <button disabled={page + 1 === totalPages} onClick={() => setPage(p => p + 1)}
            style={{ padding: "6px 14px", background: "#e5e7eb", border: "none", borderRadius: "6px", cursor: page + 1 === totalPages ? "not-allowed" : "pointer", opacity: page + 1 === totalPages ? 0.5 : 1 }}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}