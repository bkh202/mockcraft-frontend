import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <i className="fa fa-spinner fa-spin text-2xl text-black"></i>
        <span className="ml-3 text-gray-600 font-medium">Loading users...</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {["Name", "Email", "Tier", "Trial Ends", "Joined", "AI Calls", "Rate Hits", "Status", "Action"].map((h) => (
              <th
                key={h}
                className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const trialActive = isTrialActive(user.trialEndDate);

            return (
              <tr
                key={user.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* Name */}
                <td className="px-3 py-3 text-sm font-bold text-black whitespace-nowrap">
                  {user.name || "—"}
                </td>

                {/* Email */}
                <td className="px-3 py-3 text-sm text-gray-600 max-w-[160px] truncate">
                  {user.email}
                </td>

                {/* Tier */}
                <td className="px-3 py-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      user.tier === "PREMIUM"
                        ? "bg-gray-100 text-black border-gray-300"
                        : "bg-gray-50 text-gray-600 border-gray-200"
                    }`}
                  >
                    {user.tier === "PREMIUM" ? (
                      <><i className="fa fa-crown text-black mr-1"></i> Premium</>
                    ) : (
                      <><i className="fa fa-user text-gray-400 mr-1"></i> Free</>
                    )}
                  </span>
                </td>

                {/* Trial End */}
                <td className="px-3 py-3 whitespace-nowrap">
                  {user.trialEndDate ? (
                    <span className={`font-medium ${trialActive ? "text-black" : "text-gray-400"}`}>
                      {trialActive ? (
                        <i className="fa fa-clock mr-1 text-black"></i>
                      ) : (
                        <i className="fa fa-times mr-1 text-gray-400"></i>
                      )}
                      {formatDate(user.trialEndDate)}
                    </span>
                  ) : "—"}
                </td>

                {/* Joined */}
                <td className="px-3 py-3 text-sm text-gray-500 whitespace-nowrap">
                  {formatDate(user.joinedDate)}
                </td>

                {/* AI Calls */}
                <td className="px-3 py-3 text-sm font-bold text-black text-center">
                  {user.totalCalls}
                </td>

                {/* Rate Hits */}
                <td className="px-3 py-3 text-center">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      user.rateLimitHits > 0
                        ? "bg-gray-200 text-black border-gray-300"
                        : "bg-gray-50 text-gray-400 border-gray-200"
                    }`}
                  >
                    {user.rateLimitHits}
                  </span>
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      user.blocked
                        ? "bg-gray-200 text-gray-700 border-gray-300"
                        : "bg-gray-100 text-black border-gray-300"
                    }`}
                  >
                    {user.blocked ? (
                      <><i className="fa fa-ban text-gray-500 mr-1"></i> Blocked</>
                    ) : (
                      <><i className="fa fa-check-circle text-black mr-1"></i> Active</>
                    )}
                  </span>
                </td>

                {/* Action */}
                <td className="px-3 py-3">
                  <button
                    onClick={() => handleBlockToggle(user)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${
                      user.blocked
                        ? "bg-white text-black border-gray-300 hover:bg-gray-100"
                        : "bg-black text-white border-gray-300 hover:bg-gray-800"
                    }`}
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
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
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
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors border ${
            page + 1 === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
              : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-black"
          }`}
        >
          Next <i className="fa fa-chevron-right ml-1"></i>
        </button>
      </div>
    </div>
  );
}