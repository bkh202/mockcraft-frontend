// payment/UpgradePage.jsx
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { load } from "@cashfreepayments/cashfree-js";

const FEATURES = [
  { icon: "🎤", title: "AI Mock Interview",   desc: "Practice with real company questions" },
  { icon: "📄", title: "Resume Analyzer",     desc: "AI-powered resume feedback" },
  { icon: "🏗️", title: "Portfolio Builder",   desc: "Resume to portfolio in 1 click" },
  { icon: "📊", title: "Premium Analytics",   desc: "Track your performance over time" },
  { icon: "🎯", title: "Placement Quiz",      desc: "Company-specific question sets" },
  { icon: "🔥", title: "Focused Quiz",        desc: "AI recommended weak-area practice" },
];

export default function UpgradePage() {
  const navigate = useNavigate();
 const { user, loadUser } = useAuth(); 
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [step,    setStep]    = useState(null);
  const [error,   setError]   = useState(null);
  const [success, setSuccess] = useState(false);

  const trialExpired = searchParams.get("reason") === "trial_expired";

  useEffect(() => {
    if (user?.tier === "PREMIUM") {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleUpgrade = async () => {
    setLoading(true);
    setError(null);
    setStep(0);

    try {
        // Step 1 — Order create
        const orderRes = await axios.post("/api/payment/create-order");
        const order = orderRes.data;
        setStep(1);

        // Step 2 — Cashfree load + checkout
        const cashfree = await load({ mode: "production" }); // production mein "production"

        await cashfree.checkout({
            paymentSessionId: order.paymentSessionId,
            returnUrl: `https://mockcraft-frontend.vercel.app/payment/status?orderId=${order.orderId}`,
        });

        // Yeh tab chalega jab user return karega
        setStep(2);
        const verifyRes = await axios.post("/api/payment/verify", {
            orderId: order.orderId
        });

        if (!verifyRes.data.success) throw new Error(verifyRes.data.error);

        localStorage.setItem("userTier", "PREMIUM");
        localStorage.setItem("hasPremiumAccess", "true");
        await loadUser();
        setSuccess(true);

    } catch (err) {
        setError(err.message || "Something went wrong");
        setStep(null);
    } finally {
        setLoading(false);
    }
};

  const steps = ["Order", "Payment", "Activated"];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">

        {/* Trial Expired Banner */}
        {trialExpired && !success && (
          <div className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 mb-6 text-center">
            <p className="text-rose-600 font-semibold">⏰ Your 7-day free trial has ended</p>
            <p className="text-gray-500 text-sm mt-1">Upgrade to keep using all premium features</p>
          </div>
        )}

        {/* Success */}
        {success ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-5xl mb-3 animate-bounce">👑</div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              Premium <span className="text-indigo-600">Activated!</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6">Saare premium features ab unlock hain.</p>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition"
            >
              Go to Dashboard →
            </button>
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">🚀</div>
              <h1 className="text-2xl font-black text-gray-900 mb-1">
                Upgrade to <span className="text-indigo-600">Premium</span>
              </h1>
              <p className="text-gray-500 text-sm">Unlock everything MockCraft has to offer</p>
            </div>

            {/* Price Card */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 mb-5">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-indigo-600">₹499</span>
                <span className="text-gray-400 text-sm">/month</span>
                <span className="ml-auto text-xs bg-indigo-600 text-white px-2 py-1 rounded-full font-bold">
                  Most Popular
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-2">
                    <span className="text-base mt-0.5">{f.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{f.title}</p>
                      <p className="text-[10px] text-gray-400">{f.desc}</p>
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
                    <div className={`text-sm font-bold transition-all ${i <= step ? "text-indigo-600" : "text-gray-300"}`}>
                      {i < step ? "✓" : i === step ? "●" : "○"}
                    </div>
                    <div className={`text-[10px] font-semibold ${i <= step ? "text-gray-600" : "text-gray-300"}`}>{s}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 rounded-lg px-3 py-2 text-xs text-rose-600 font-semibold mb-4">
                ⚠ {error}
              </div>
            )}

            {/* CTA Button */}
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition shadow-sm flex items-center justify-center gap-2 mb-3"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing…
                </>
              ) : (
                "Unlock Premium — ₹199/month"
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>🔒 Secure payment</span>
              <span>✅ No hidden charges</span>
              <span>↩ Cancel anytime</span>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="w-full mt-4 text-xs text-gray-400 hover:text-gray-600 transition"
            >
              ← Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}