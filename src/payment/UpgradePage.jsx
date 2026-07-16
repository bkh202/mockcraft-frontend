// payment/UpgradePage.jsx
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import { load } from "@cashfreepayments/cashfree-js";

const FEATURES = [
  { icon: "fa-microphone", title: "AI Mock Interview", desc: "Practice with real company questions" },
  { icon: "fa-file-alt", title: "Resume Analyzer", desc: "AI-powered resume feedback" },
  { icon: "fa-briefcase", title: "Portfolio Builder", desc: "Resume to portfolio in 1 click" },
  { icon: "fa-chart-line", title: "Premium Analytics", desc: "Track your performance over time" },
  { icon: "fa-bullseye", title: "Placement Quiz", desc: "Company-specific question sets" },
  { icon: "fa-fire", title: "Focused Quiz", desc: "AI recommended weak-area practice" },
];

export default function UpgradePage() {
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(null);
  const [error, setError] = useState(null);
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
      const cashfree = await load({ mode: "production" });

      await cashfree.checkout({
        paymentSessionId: order.paymentSessionId,
        returnUrl: `https://mockcraft-frontend.vercel.app/payment/status?orderId=${order.orderId}`,
      });

      setStep(2);
      const verifyRes = await axios.post("/api/payment/verify", {
        orderId: order.orderId,
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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg">

        {/* Trial Expired Banner */}
        {trialExpired && !success && (
          <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 mb-6 text-center">
            <p className="text-gray-800 font-bold flex items-center justify-center gap-2">
              <i className="fa fa-clock text-gray-600"></i> Your 7-day free trial has ended
            </p>
            <p className="text-gray-600 text-sm mt-1">Upgrade to keep using all premium features</p>
          </div>
        )}

        {/* Success */}
        {success ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
            <div className="text-5xl mb-3 flex justify-center">
              <i className="fa fa-crown text-black"></i>
            </div>
            <h2 className="text-3xl font-extrabold text-black mb-2">
              Premium <span className="text-gray-600">Activated!</span>
            </h2>
            <p className="text-gray-500 text-base mb-6">All premium features are now unlocked.</p>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition border border-gray-300"
            >
              Go to Dashboard <i className="fa fa-arrow-right ml-2"></i>
            </button>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-gray-200">
                <i className="fa fa-rocket text-2xl text-black"></i>
              </div>
              <h1 className="text-2xl font-extrabold text-black mb-1">
                Upgrade to <span className="text-gray-700">Premium</span>
              </h1>
              <p className="text-gray-500 text-base">Unlock everything MockCraft has to offer</p>
            </div>

            {/* Price Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 mb-5">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-black">₹499</span>
                <span className="text-gray-400 text-sm">/month</span>
                <span className="ml-auto text-xs bg-black text-white px-2 py-1 rounded-full font-bold">
                  Most Popular
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-2">
                    <i className={`fa ${f.icon} text-base text-black mt-0.5`}></i>
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
                    <div className={`text-sm font-bold transition-all ${i <= step ? "text-black" : "text-gray-300"}`}>
                      {i < step ? "✓" : i === step ? "●" : "○"}
                    </div>
                    <div className={`text-[10px] font-semibold ${i <= step ? "text-gray-700" : "text-gray-300"}`}>{s}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 font-semibold mb-4 flex items-center gap-2">
                <i className="fa fa-exclamation-circle text-gray-600"></i> {error}
              </div>
            )}

            {/* CTA Button */}
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition shadow-sm flex items-center justify-center gap-2 mb-3 border border-gray-300"
            >
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i>
                  Processing…
                </>
              ) : (
                "Unlock Premium — ₹199/month"
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <span><i className="fa fa-lock mr-1"></i> Secure payment</span>
              <span><i className="fa fa-check mr-1"></i> No hidden charges</span>
              <span><i className="fa fa-undo mr-1"></i> Cancel anytime</span>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="w-full mt-4 text-xs text-gray-400 hover:text-gray-700 transition"
            >
              <i className="fa fa-arrow-left mr-1"></i> Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}