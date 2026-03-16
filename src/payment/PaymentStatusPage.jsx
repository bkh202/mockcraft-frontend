import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";

export default function PaymentStatusPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { loadUser } = useAuth();
    const [status, setStatus] = useState("verifying"); // verifying | success | failed

    const orderId = searchParams.get("orderId");

    useEffect(() => {
        if (!orderId) { setStatus("failed"); return; }

        const verify = async () => {
            try {
                const res = await axios.post("/api/payment/verify", { orderId });

                if (res.data.success) {
                    localStorage.setItem("userTier", "PREMIUM");
                    localStorage.setItem("hasPremiumAccess", "true");
                    await loadUser();
                    setStatus("success");
                } else {
                    setStatus("failed");
                }
            } catch (err) {
                setStatus("failed");
            }
        };

        verify();
    }, [orderId]);

    if (status === "verifying") return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
            <p className="text-gray-500 font-medium">Verifying payment...</p>
        </div>
    );

    if (status === "success") return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center max-w-md w-full">
                <div className="text-5xl mb-4 animate-bounce">👑</div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                    Premium <span className="text-indigo-600">Activated!</span>
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                    Welcome to MockCraft Premium! Sab features unlock hain.
                </p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition"
                >
                    Go to Dashboard →
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center max-w-md w-full">
                <div className="text-5xl mb-4">❌</div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Payment Failed</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Kuch issue aaya — dobara try karo.
                </p>
                <button
                    onClick={() => navigate("/upgrade")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}