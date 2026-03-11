// components/ReviewPopup.jsx
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function ReviewPopup({ onClose }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (rating === 0) { setError("Please select a rating!"); return; }
    if (comment.trim().length < 10) { setError("Please write at least 10 characters."); return; }

    setLoading(true);
    setError("");
    try {
      await axiosInstance.post("/reviews/submit", { rating, comment });
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
  const colors = ["", "text-red-500", "text-orange-500", "text-yellow-500", "text-blue-500", "text-green-500"];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-99999 p-4">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl">

        {submitted ? (
          /* ── Success State ── */
          <div className="text-center py-4">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-xl font-black text-gray-900 mb-2">Thank you!</h2>
            <p className="text-gray-500 text-sm mb-6">
              Your review has been submitted and is pending approval.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* ── Form State ── */
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-black text-gray-900">Rate MockCraft</h2>
                <p className="text-xs text-gray-500 mt-0.5">Your feedback helps us improve!</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Stars */}
            <div className="flex flex-col items-center mb-5">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    className="text-4xl transition-transform hover:scale-110"
                  >
                    <span className={star <= (hovered || rating) ? "text-yellow-400" : "text-gray-200"}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
              {(hovered || rating) > 0 && (
                <p className={`text-sm font-bold ${colors[hovered || rating]}`}>
                  {labels[hovered || rating]}
                </p>
              )}
            </div>

            {/* Comment */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Your Experience
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={500}
                rows={3}
                placeholder="Tell us what you liked or how we can improve..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <p className="text-right text-xs text-gray-400 mt-1">{comment.length}/500</p>
            </div>

            {/* Error */}
            {error && (
              <p className="text-xs text-red-500 font-bold mb-3">⚠ {error}</p>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Submitting...
                  </>
                ) : "Submit Review"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}