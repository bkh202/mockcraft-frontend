// router/PremiumRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

/**
 * PremiumRoute — API se trial status fetch karke access decide karta hai
 * - PREMIUM tier → allow
 * - Active trial → allow + TrialBanner dikhega
 * - Trial expired / FREE → /upgrade redirect
 */
export default function PremiumRoute({ children }) {
  const [status, setStatus] = useState("loading"); // "loading" | "allow" | "deny"

  useEffect(() => {
    const token = localStorage.getItem("accessToken") 
           || sessionStorage.getItem("accessToken"); 
    if (!token) {
      setStatus("deny");
      return;
    }

    axiosInstance
      .get("/auth/trial-status")
      .then((res) => {
        const data = res.data;

        // Cache karo localStorage mein for TrialBanner
        localStorage.setItem("trialActive", data.trialActive ? "true" : "false");
        localStorage.setItem("trialDaysLeft", String(data.daysLeft));
        localStorage.setItem("hasPremiumAccess", data.hasPremiumAccess ? "true" : "false");
        if (data.isPaid) localStorage.setItem("userTier", "PREMIUM");

        setStatus(data.hasPremiumAccess ? "allow" : "deny");
      })
      .catch(() => {
        // API fail hone pe deny karo
        setStatus("deny");
      });
  }, []);

if (status === "loading") {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-black"></div>
    </div>
  );
}

  if (status === "deny") {
    return <Navigate to="/upgrade" replace />;
  }

  return children;
}