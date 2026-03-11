// Testimonials.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || "https://mockcraft-backend-production.up.railway.app";

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <span key={s} className={s <= rating ? "text-yellow-400" : "text-slate-600"}>★</span>
    ))}
  </div>
);

const getInitials = (name) =>
  name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?";

const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-green-500",
  "bg-orange-500", "bg-rose-500", "bg-teal-500",
];

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/reviews/public`)
      .then((res) => setReviews(res.data))
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && reviews.length === 0) return null;

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <section className="py-20" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-yellow-400/10 text-yellow-400 text-sm font-bold rounded-full mb-4 border border-yellow-400/20">
            ⭐ Student Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            What Our Users Say
          </h2>
          {avgRating && (
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="text-4xl font-black text-white">{avgRating}</span>
              <div>
                <StarRating rating={Math.round(avgRating)} />
                <p className="text-xs text-slate-400 mt-0.5">{reviews.length} reviews</p>
              </div>
            </div>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full" />
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 6).map((review, i) => (
              <div
                key={review.id}
                className="rounded-2xl p-6 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between"
                style={{ backgroundColor: "#0d1b2e" }}
              >
                <div>
                  <StarRating rating={review.rating} />
                  <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-4">
                    "{review.comment}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <div className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} text-white text-sm font-bold flex items-center justify-center`}>
                    {getInitials(review.userName)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{review.userName}</p>
                    <p className="text-xs text-slate-500">
                      {new Date(review.createdAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}