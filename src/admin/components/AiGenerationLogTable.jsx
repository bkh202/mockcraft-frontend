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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg font-extrabold text-black flex items-center gap-2">
            <i className="fa fa-list text-black"></i> AI Generation Logs
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">Quiz generation history with tokens & latency</p>
        </div>
        <div className="flex gap-2">
          {["ALL", "SUCCESS", "FAILED"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors border ${
                filter === f
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <i className="fa fa-spinner fa-spin text-2xl text-black"></i>
          <span className="ml-3 text-gray-600 font-medium">Loading logs...</span>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500 font-medium py-10">No logs found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {HEADERS.map(h => (
                  <th key={h} className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map(log => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  {/* User */}
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-black text-xs font-bold border border-gray-200">
                      <i className="fa fa-user text-gray-500"></i> #{log.userId}
                    </span>
                    <span className="ml-2 text-xs text-gray-400">{log.tier}</span>
                  </td>
                  {/* Category */}
                  <td className="px-3 py-3 text-sm font-medium text-black">{log.category || "—"}</td>
                  {/* Subject */}
                  <td className="px-3 py-3 text-sm text-gray-600 max-w-[120px] truncate">{log.subject || "—"}</td>
                  {/* Topic */}
                  <td className="px-3 py-3 text-sm text-gray-600 max-w-[100px] truncate">{log.topic || "—"}</td>
                  {/* Company */}
                  <td className="px-3 py-3">
                    {log.company ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-black text-xs font-bold border border-gray-200">
                        <i className="fa fa-building text-gray-500"></i> {log.company}
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  {/* Tokens */}
                  <td className="px-3 py-3 text-center">
                    {log.tokensUsed != null ? (
                      <span className="font-bold text-black">{log.tokensUsed}</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  {/* Latency */}
                  <td className="px-3 py-3 text-center">
                    {log.latencyMs != null ? (
                      <span className="font-bold text-black">
                        {log.latencyMs > 1000 ? `${(log.latencyMs / 1000).toFixed(1)}s` : `${log.latencyMs}ms`}
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  {/* Status */}
                  <td className="px-3 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      log.success
                        ? "bg-gray-100 text-black border-gray-300"
                        : "bg-gray-200 text-gray-700 border-gray-300"
                    }`}>
                      {log.success ? (
                        <><i className="fa fa-check-circle mr-1 text-black"></i> OK</>
                      ) : (
                        <><i className="fa fa-times-circle mr-1 text-gray-500"></i> Failed</>
                      )}
                    </span>
                  </td>
                  {/* Time */}
                  <td className="px-3 py-3 text-xs text-gray-400 whitespace-nowrap">
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
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <button
            disabled={page === 0}
            onClick={() => setPage(p => p - 1)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors border ${
              page === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-black"
            }`}
          >
            <i className="fa fa-chevron-left mr-1"></i> Prev
          </button>
          <span className="text-sm font-medium text-gray-600">
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page + 1 === totalPages}
            onClick={() => setPage(p => p + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors border ${
              page + 1 === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-black"
            }`}
          >
            Next <i className="fa fa-chevron-right ml-1"></i>
          </button>
        </div>
      )}
    </div>
  );
}