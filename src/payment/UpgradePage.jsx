// payment/UpgradePage.jsx
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../api/axiosInstance";

const FEATURES = [
  { icon: "🎤", title: "AI Mock Interview", desc: "Practice with real company questions" },
  { icon: "📄", title: "Resume Analyzer", desc: "AI-powered resume feedback" },
  { icon: "🏗️", title: "Portfolio Builder", desc: "Resume to portfolio in 1 click" },
  { icon: "📊", title: "Premium Analytics", desc: "Track your performance over time" },
  { icon: "🎯", title: "Placement Quiz", desc: "Company-specific question sets" },
  { icon: "🔥", title: "Focused Quiz", desc: "AI recommended weak-area practice" },
];

export default function UpgradePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ✅ Check if redirected due to trial expiry
  const trialExpired = searchParams.get("reason") === "trial_expired";

  const handleUpgrade = async () => {
    setLoading(true);
    setError(null);
    setStep(0);

    try {
      const orderRes = await axios.post("/api/payment/create-order");
      const order = orderRes.data;
      setStep(1);
      await new Promise((r) => setTimeout(r, 600));

      const verifyRes = await axios.post("/api/payment/verify", {
        orderId: order.orderId,
      });
      const result = verifyRes.data;

      if (!result.success) throw new Error(result.error || "Verification failed");

      setStep(2);
      await new Promise((r) => setTimeout(r, 500));

      // ✅ Update local state after successful payment
      localStorage.setItem("userTier", "PREMIUM");
      localStorage.setItem("hasPremiumAccess", "true");
      localStorage.setItem("trialActive", "false");

      setSuccess(true);
    } catch (err) {
      const msg = err.response?.data?.error || err.message || "Something went wrong";
      setError(msg);
      setStep(null);
    } finally {
      setLoading(false);
    }
  };

  const steps = ["Order", "Payment", "Activated"];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg">

        {/* ── Trial Expired Banner ── */}
        {trialExpired && !success && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-6 text-center">
            <p className="text-red-400 font-semibold">⏰ Your 7-day free trial has ended</p>
            <p className="text-gray-400 text-sm mt-1">
              Upgrade to keep using all premium features
            </p>
          </div>
        )}

        {/* ── Success ── */}
        {success ? (
          <div className="bg-gray-900 border border-yellow-400/20 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-3 animate-bounce">👑</div>
            <h2 className="text-2xl font-bold mb-2">
              Premium <span className="text-yellow-400">Activated!</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Saare premium features ab unlock hain.
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-semibold py-3 rounded-xl transition"
            >
              Go to Dashboard →
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 border border-yellow-400/20 rounded-2xl p-8">

            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🚀</div>
              <h1 className="text-2xl font-bold mb-1">
                Upgrade to <span className="text-yellow-400">Premium</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Unlock everything MockCraft has to offer
              </p>
            </div>

            {/* Price */}
            <div className="bg-gray-950 border border-yellow-400/10 rounded-xl px-5 py-4 mb-5">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-yellow-400">₹499</span>
                <span className="text-gray-500 text-sm">/month</span>
                <span className="ml-auto text-xs bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-2">
                    <span className="text-base mt-0.5">{f.icon}</span>
                    <div>
                      <p className="text-xs font-medium text-gray-300">{f.title}</p>
                      <p className="text-[10px] text-gray-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Tracker */}
            {step !== null && (
              <div className="flex justify-between mb-4 px-2">
                {steps.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div className={`text-sm transition-all ${i <= step ? "text-yellow-400" : "text-gray-700"}`}>
                      {i < step ? "✓" : i === step ? "●" : "○"}
                    </div>
                    <div className={`text-[10px] ${i <= step ? "text-gray-400" : "text-gray-700"}`}>{s}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2 text-xs text-red-400 mb-4">
                ⚠ {error}
              </div>
            )}

            {/* CTA */}
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed
                text-gray-950 font-semibold py-3.5 rounded-xl transition hover:-translate-y-0.5
                shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2 mb-3"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-gray-950/20 border-t-gray-950 rounded-full animate-spin" />
                  Processing…
                </>
              ) : (
                "Unlock Premium — ₹99/month"
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-gray-700">
              <span>🔒 Secure payment</span>
              <span>✅ No hidden charges</span>
              <span>↩ Cancel anytime</span>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="w-full mt-4 text-xs text-gray-600 hover:text-gray-400 transition"
            >
              ← Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}