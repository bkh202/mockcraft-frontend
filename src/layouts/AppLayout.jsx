// AppLayout.jsx
import { Outlet, Link } from "react-router-dom";
import AppNavbar from "../Componenets/nav/AppNavbar";
import TrialBanner from "../trail/components/TrialBanner";
import { useState } from "react";
import ReviewPopup from "../Componenets/review/ReviewPopup";

const tips = [
  "Take 5-minute breaks every 25 minutes of study.",
  "Revise yesterday's topics before starting new ones.",
  "Attempt mock tests under real exam conditions.",
  "Focus on accuracy first, then build speed.",
  "Review your wrong answers — that's where growth is.",
];

const quickLinks = [
  { label: "Aptitude Practice", path: "/aptitude", icon: "🧮" },
  { label: "Government Exams", path: "/government", icon: "🏛️" },
  { label: "Engineering Core", path: "/engineering", icon: "⚙️" },
  { label: "Medical Entrance", path: "/medical", icon: "🧬" },
];

export default function AppLayout() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <TrialBanner />
      <AppNavbar />

      {/* ✅ Review Popup */}
      {showReview && <ReviewPopup onClose={() => setShowReview(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 space-y-6">
            <Outlet />
          </main>

          {/* SIDEBAR */}
          <aside className="space-y-5">

            {/* ✅ Rate Us Button */}
            <button
              onClick={() => setShowReview(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-linear-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-md text-sm"
            >
              ⭐ Rate MockCraft
            </button>

            {/* Quick Navigation */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">⚡ Quick Access</h3>
              <div className="space-y-2">
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium text-gray-700"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Study Tip */}
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">💡 Study Tip</h3>
              <p className="text-sm text-blue-800">{randomTip}</p>
            </div>

            {/* Motivational Banner */}
            <div className="bg-linear-to-br from-indigo-600 to-blue-700 rounded-xl p-5 text-white">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold mb-1 text-base">Stay Consistent!</h3>
              <p className="text-xs text-indigo-200 mb-3">
                Just 30 minutes of daily practice can change your result.
              </p>
              <Link
                to="/aptitude"
                className="block text-center bg-white text-indigo-700 font-bold text-xs py-2 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Start Practicing →
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}