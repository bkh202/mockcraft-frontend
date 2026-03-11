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
      style={{
        background: isUrgent ? "#dc2626" : "#facc15",
        color: isUrgent ? "#ffffff" : "#111827",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "14px",
        fontWeight: "500",
        width: "100%",
         zIndex: 9999,
        position: "sticky",  // ✅ fixed se sticky karo
        top: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{isUrgent ? "⚠️" : "🎉"}</span>
        <span>
          {daysLeft === 0
            ? "Your free trial expires today!"
            : `Free Trial: ${daysLeft} day${daysLeft !== 1 ? "s" : ""} remaining`}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => navigate("/upgrade")}
          style={{
            background: isUrgent ? "#ffffff" : "#111827",
            color: isUrgent ? "#dc2626" : "#facc15",
            border: "none",
            borderRadius: "999px",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Upgrade Now
        </button>
        <button
          onClick={() => setDismissed(true)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            opacity: 0.7,
            color: isUrgent ? "#ffffff" : "#111827",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}