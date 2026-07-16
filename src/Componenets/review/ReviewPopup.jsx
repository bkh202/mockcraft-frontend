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
  // Use grayscale for labels – no colors
  const colors = ["", "text-gray-600", "text-gray-600", "text-gray-700", "text-gray-800", "text-black"];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-gray-200">

        {submitted ? (
          /* ── Success State ── */
          <div className="text-center py-4">
            <div className="text-5xl mb-4 flex justify-center">
              <i className="fa fa-check-circle text-black"></i>
            </div>
            <h2 className="text-xl font-extrabold text-black mb-2">Thank you!</h2>
            <p className="text-gray-600 text-base mb-6">
              Your review has been submitted and is pending approval.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors border border-gray-300"
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
                <h2 className="text-xl font-extrabold text-black">Rate MockCraft</h2>
                <p className="text-sm text-gray-500 mt-0.5">Your feedback helps us improve!</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
              >
                <i className="fa fa-times"></i>
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
                    <i
                      className={`fa fa-star ${
                        star <= (hovered || rating) ? "text-black" : "text-gray-300"
                      }`}
                    ></i>
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
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                Your Experience
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={500}
                rows={3}
                placeholder="Tell us what you liked or how we can improve..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base text-black bg-white focus:outline-none focus:ring-2 focus:ring-black resize-none placeholder:text-gray-400"
              />
              <p className="text-right text-xs text-gray-400 mt-1">{comment.length}/500</p>
            </div>

            {/* Error */}
            {error && (
              <p className="text-xs text-gray-600 font-bold mb-3 flex items-center gap-2">
                <i className="fa fa-exclamation-triangle"></i> {error}
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 hover:text-black transition-colors text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 py-3 bg-black hover:bg-gray-800 disabled:opacity-60 text-white font-bold rounded-xl text-base transition-colors flex items-center justify-center gap-2 border border-gray-300"
              >
                {loading ? (
                  <>
                    <i className="fa fa-spinner fa-spin"></i>
                    Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}