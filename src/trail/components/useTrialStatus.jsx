// hooks/useTrialStatus.js
import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

/**
 * Hook to get the current user's trial status.
 * Returns: { trialActive, daysLeft, isPaid, hasPremiumAccess, loading }
 */
export function useTrialStatus() {
  const [status, setStatus] = useState({
    trialActive: false,
    daysLeft: 0,
    isPaid: false,
    hasPremiumAccess: false,
    trialEndDate: null,
    loading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setStatus((s) => ({ ...s, loading: false }));
      return;
    }

    axiosInstance
      .get("/auth/trial-status")
      .then((res) => {
        const data = res.data;
        // Cache in localStorage for quick reads (e.g., PremiumRoute)
        localStorage.setItem("trialActive", data.trialActive ? "true" : "false");
        localStorage.setItem("trialDaysLeft", String(data.daysLeft));
        localStorage.setItem("hasPremiumAccess", data.hasPremiumAccess ? "true" : "false");

        setStatus({
          trialActive: data.trialActive,
          daysLeft: data.daysLeft,
          isPaid: data.isPaid,
          hasPremiumAccess: data.hasPremiumAccess,
          trialEndDate: data.trialEndDate,
          loading: false,
        });
      })
      .catch(() => {
        setStatus((s) => ({ ...s, loading: false }));
      });
  }, []);

  return status;
}