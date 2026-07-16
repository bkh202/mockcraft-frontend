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
  { label: "Aptitude Practice", path: "/aptitude", icon: "fa-calculator" },
  { label: "Government Exams", path: "/government", icon: "fa-university" },
  { label: "Engineering Core", path: "/engineering", icon: "fa-microchip" },
  { label: "Medical Entrance", path: "/medical", icon: "fa-heartbeat" },
];

export default function AppLayout() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <TrialBanner />
      <AppNavbar />

      {showReview && <ReviewPopup onClose={() => setShowReview(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 space-y-6">
            <Outlet />
          </main>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* Rate Us Button */}
            <button
              onClick={() => setShowReview(true)}
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-sm text-lg border border-gray-200"
            >
              <i className="fa fa-star text-xl"></i>
              Rate MockCraft
            </button>

            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6">
              <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2">
                <i className="fa fa-bolt text-black"></i> Quick Access
              </h3>
              <div className="space-y-2">
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 hover:text-black transition-colors text-lg font-medium text-gray-700"
                  >
                    <i className={`fa ${item.icon} text-xl w-6 text-center`}></i>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Study Tip */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200">
              <h3 className="text-lg font-extrabold text-black mb-3 flex items-center gap-2">
                <i className="fa fa-lightbulb text-xl text-black"></i> Study Tip
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">{randomTip}</p>
            </div>

            {/* Motivational Banner */}
            <div className="bg-black rounded-2xl p-5 sm:p-6 text-white border border-gray-200">
              <div className="text-3xl mb-3">
                <i className="fa fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-extrabold mb-1">Stay Consistent!</h3>
              <p className="text-base text-gray-300 mb-4">
                Just 30 minutes of daily practice can change your result.
              </p>
              <Link
                to="/aptitude"
                className="block text-center bg-white text-black font-extrabold text-base py-3 rounded-xl hover:bg-gray-200 transition-colors border border-gray-300"
              >
                Start Practicing <i className="fa fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}