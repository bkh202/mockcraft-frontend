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
        <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-black"></div>
            <p className="text-gray-600 font-medium text-lg">Verifying payment...</p>
        </div>
    );

    if (status === "success") return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center max-w-md w-full">
                <div className="text-5xl mb-4 flex justify-center">
                    <i className="fa fa-crown text-black"></i>
                </div>
                <h2 className="text-3xl font-extrabold text-black mb-2">
                    Premium <span className="text-gray-700">Activated!</span>
                </h2>
                <p className="text-gray-600 text-base mb-6">
                    Welcome to MockCraft Premium! All features are unlocked.
                </p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition border border-gray-300"
                >
                    Go to Dashboard <i className="fa fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center max-w-md w-full">
                <div className="text-5xl mb-4 flex justify-center">
                    <i className="fa fa-times-circle text-gray-600"></i>
                </div>
                <h2 className="text-3xl font-extrabold text-black mb-2">Payment Failed</h2>
                <p className="text-gray-600 text-base mb-6">
                    Something went wrong — please try again.
                </p>
                <button
                    onClick={() => navigate("/upgrade")}
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition border border-gray-300"
                >
                    Try Again <i className="fa fa-redo ml-2"></i>
                </button>
            </div>
        </div>
    );
}