// components/AdminReviewsTable.jsx
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function AdminReviewsTable() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null); // track loading per row

  const fetchReviews = async () => {
    try {
      const res = await axiosInstance.get("/reviews/admin/all");
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const handleApprove = async (id) => {
    setActionId(id);
    try {
      await axiosInstance.put(`/reviews/admin/approve/${id}`);
      setReviews((prev) =>
        prev.map((r) => r.id === id ? { ...r, approved: true } : r)
      );
    } catch (err) {
      alert("Failed to approve review");
    } finally {
      setActionId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    setActionId(id);
    try {
      await axiosInstance.delete(`/reviews/admin/delete/${id}`);
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      alert("Failed to delete review");
    } finally {
      setActionId(null);
    }
  };

  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">User Reviews</h2>
        <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
          {reviews.length} total
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin h-7 w-7 border-4 border-blue-500 border-t-transparent rounded-full" />
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-400 py-10">No reviews yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-gray-500 border-b">
                <th className="pb-3 pr-4">User</th>
                <th className="pb-3 pr-4">Rating</th>
                <th className="pb-3 pr-4">Comment</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {reviews.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-gray-800 whitespace-nowrap">
                    {r.userName}
                  </td>
                  <td className="py-3 pr-4 text-yellow-500 whitespace-nowrap tracking-wider text-xs">
                    {stars(r.rating)}
                  </td>
                  <td className="py-3 pr-4 text-gray-600 max-w-xs truncate">
                    {r.comment || <span className="text-gray-300 italic">No comment</span>}
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      r.approved
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {r.approved ? "Approved" : "Pending"}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      {!r.approved && (
                        <button
                          onClick={() => handleApprove(r.id)}
                          disabled={actionId === r.id}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors"
                        >
                          {actionId === r.id ? "..." : "Approve"}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(r.id)}
                        disabled={actionId === r.id}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors"
                      >
                        {actionId === r.id ? "..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}