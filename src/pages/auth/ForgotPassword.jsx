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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {["Email", "OTP", "Password"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
                  step > i + 1
                    ? "bg-gray-200 text-black border-gray-300"
                    : step === i + 1
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-400 border-gray-300"
                }`}
              >
                {step > i + 1 ? <i className="fa fa-check text-xs"></i> : i + 1}
              </div>
              <span
                className={`text-sm font-bold ${
                  step === i + 1 ? "text-black" : "text-gray-400"
                }`}
              >
                {label}
              </span>
              {i < 2 && (
                <div
                  className={`w-8 h-0.5 ${
                    step > i + 1 ? "bg-gray-400" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 — Email */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div className="text-center mb-4">
              <div className="text-3xl mb-3 flex justify-center">
                <i className="fa fa-lock text-black"></i>
              </div>
              <h2 className="text-2xl font-extrabold text-black">Forgot Password?</h2>
              <p className="text-base text-gray-600 mt-1">Enter your email — we'll send an OTP</p>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-base text-black"
            />
            {error && <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-2"><i className="fa fa-exclamation-circle"></i> {error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition border border-gray-300"
            >
              {loading ? <><i className="fa fa-spinner fa-spin mr-2"></i> Sending OTP...</> : "Send OTP →"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full text-sm text-gray-500 hover:text-black transition font-medium mt-2"
            >
              <i className="fa fa-arrow-left mr-1"></i> Back to Login
            </button>
          </form>
        )}

        {/* Step 2 — OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div className="text-center mb-4">
              <div className="text-3xl mb-3 flex justify-center">
                <i className="fa fa-envelope text-black"></i>
              </div>
              <h2 className="text-2xl font-extrabold text-black">Enter OTP</h2>
              <p className="text-base text-gray-600 mt-1">
                OTP sent to <span className="font-bold text-black">{email}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Valid for 10 minutes</p>
            </div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-center text-2xl tracking-widest font-bold text-black"
            />
            {error && <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-2"><i className="fa fa-exclamation-circle"></i> {error}</p>}
            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full bg-black hover:bg-gray-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition border border-gray-300"
            >
              {loading ? <><i className="fa fa-spinner fa-spin mr-2"></i> Verifying...</> : "Verify OTP →"}
            </button>
            <button
              type="button"
              onClick={() => handleSendOtp({ preventDefault: () => {} })}
              className="w-full text-sm text-gray-500 hover:text-black transition font-medium"
            >
              Resend OTP
            </button>
          </form>
        )}

        {/* Step 3 — New Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div className="text-center mb-4">
              <div className="text-3xl mb-3 flex justify-center">
                <i className="fa fa-key text-black"></i>
              </div>
              <h2 className="text-2xl font-extrabold text-black">New Password</h2>
              <p className="text-base text-gray-600 mt-1">Choose a strong password</p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none pr-12 text-base text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-black text-lg"
              >
                <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-base text-black"
            />
            {error && <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-2"><i className="fa fa-exclamation-circle"></i> {error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition border border-gray-300"
            >
              {loading ? <><i className="fa fa-spinner fa-spin mr-2"></i> Resetting...</> : "Reset Password ✓"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}