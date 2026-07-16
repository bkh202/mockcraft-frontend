// components/AdminReviewsTable.jsx
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function AdminReviewsTable() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);

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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="text-black text-base">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fa fa-star text-black"></i>
        ))}
        {halfStar && <i className="fa fa-star-half-alt text-black"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="fa fa-star-o text-gray-300"></i>
        ))}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-extrabold text-black">User Reviews</h2>
        <span className="text-xs font-bold text-black bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
          {reviews.length} total
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <i className="fa fa-spinner fa-spin text-3xl text-black"></i>
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-500 font-medium py-10">No reviews yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="pb-3 pr-4">User</th>
                <th className="pb-3 pr-4">Rating</th>
                <th className="pb-3 pr-4">Comment</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reviews.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 pr-4 font-bold text-black whitespace-nowrap">
                    {r.userName}
                  </td>
                  <td className="py-3 pr-4 whitespace-nowrap">
                    {renderStars(r.rating)}
                  </td>
                  <td className="py-3 pr-4 text-gray-700 max-w-xs truncate">
                    {r.comment || <span className="text-gray-400 italic">No comment</span>}
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${
                      r.approved
                        ? "bg-gray-100 text-black border-gray-300"
                        : "bg-gray-50 text-gray-600 border-gray-200"
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
                          className="px-3 py-1 bg-black hover:bg-gray-800 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors border border-gray-300"
                        >
                          {actionId === r.id ? (
                            <i className="fa fa-spinner fa-spin"></i>
                          ) : (
                            "Approve"
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(r.id)}
                        disabled={actionId === r.id}
                        className="px-3 py-1 bg-white hover:bg-gray-100 disabled:opacity-50 text-gray-700 text-xs font-bold rounded-lg transition-colors border border-gray-300"
                      >
                        {actionId === r.id ? (
                          <i className="fa fa-spinner fa-spin"></i>
                        ) : (
                          "Delete"
                        )}
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