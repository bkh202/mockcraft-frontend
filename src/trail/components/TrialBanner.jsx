// components/TrialBanner.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTrialStatus } from "./useTrialStatus";

export default function TrialBanner() {
  const { trialActive, daysLeft, isPaid, loading } = useTrialStatus();
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  if (loading || isPaid || !trialActive || dismissed) return null;

  const isUrgent = daysLeft <= 2;

  return (
    <div
      className={`sticky top-0 z-50 w-full px-4 py-2.5 flex items-center justify-between text-sm sm:text-base font-bold ${
        isUrgent
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800 border-b border-gray-200"
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <i
          className={`fa ${isUrgent ? "fa-exclamation-triangle" : "fa-gift"} ${
            isUrgent ? "text-red-400" : "text-gray-500"
          }`}
        ></i>
        <span>
          {daysLeft === 0
            ? "Your free trial expires today!"
            : `Free Trial: ${daysLeft} day${daysLeft !== 1 ? "s" : ""} remaining`}
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => navigate("/upgrade")}
          className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors border ${
            isUrgent
              ? "bg-white text-gray-900 hover:bg-gray-100 border-gray-300"
              : "bg-black text-white hover:bg-gray-800 border-gray-300"
          }`}
        >
          Upgrade Now
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="text-base opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  );
}