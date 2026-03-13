import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosInstance";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=newPassword
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      await axios.post("/auth/forgot-password", { email });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Email not found");
    } finally { setLoading(false); }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      await axios.post("/auth/verify-otp", { email, otp });
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally { setLoading(false); }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match"); return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters"); return;
    }
    setLoading(true); setError("");
    try {
      await axios.post("/auth/reset-password", { email, otp, newPassword });
      navigate("/login", { state: { message: "Password reset successful! Please login." } });
    } catch (err) {
      setError(err.response?.data?.message || "Reset failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-md">

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {["Email", "OTP", "Password"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                ${step > i + 1 ? "bg-green-500 text-white" :
                  step === i + 1 ? "bg-indigo-600 text-white" :
                  "bg-gray-200 text-gray-400"}`}>
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className={`text-xs font-medium ${step === i + 1 ? "text-indigo-600" : "text-gray-400"}`}>
                {label}
              </span>
              {i < 2 && <div className={`w-8 h-0.5 ${step > i + 1 ? "bg-green-500" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1 — Email */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🔐</div>
              <h2 className="text-xl font-black text-gray-900">Forgot Password?</h2>
              <p className="text-sm text-gray-500 mt-1">Enter your email — we'll send an OTP</p>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition">
              {loading ? "Sending OTP..." : "Send OTP →"}
            </button>
            <button type="button" onClick={() => navigate("/login")}
              className="w-full text-sm text-gray-400 hover:text-gray-600 mt-2">
              ← Back to Login
            </button>
          </form>
        )}

        {/* Step 2 — OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">📧</div>
              <h2 className="text-xl font-black text-gray-900">Enter OTP</h2>
              <p className="text-sm text-gray-500 mt-1">
                OTP sent to <span className="font-semibold text-indigo-600">{email}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">Valid for 10 minutes</p>
            </div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/, "").slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-center text-2xl tracking-widest font-bold"
            />
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button type="submit" disabled={loading || otp.length !== 6}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition">
              {loading ? "Verifying..." : "Verify OTP →"}
            </button>
            <button type="button" onClick={() => handleSendOtp({ preventDefault: () => {} })}
              className="w-full text-sm text-indigo-500 hover:text-indigo-700 mt-1">
              Resend OTP
            </button>
          </form>
        )}

        {/* Step 3 — New Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🔑</div>
              <h2 className="text-xl font-black text-gray-900">New Password</h2>
              <p className="text-sm text-gray-500 mt-1">Choose a strong password</p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-12"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition">
              {loading ? "Resetting..." : "Reset Password ✓"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}