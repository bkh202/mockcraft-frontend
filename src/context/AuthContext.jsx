import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // ✅ Trial expired check
  const isPremiumOrTrial = (userData) => {
    const u = userData || user;
    if (!u) return false;
    if (u.tier === "PREMIUM") return true;
    if (u.tier === "TRIAL" && u.trialEndDate) {
      return new Date(u.trialEndDate) > new Date();
    }
    return false;
  };

  const loadUser = async () => {
    const token = localStorage.getItem("accessToken")
               || sessionStorage.getItem("accessToken");

    if (!token) {
      setUser(null);
      return null;
    }

    setAuthToken(token);

    try {
      const res = await axios.get("/user/me");
      const userData = res.data;

      // ✅ Trial expired — locally downgrade to FREE
      if (userData.tier === "TRIAL" && userData.trialEndDate) {
        if (new Date(userData.trialEndDate) < new Date()) {
          userData.tier = "FREE";
        }
      }

      setUser(userData);
      return userData;
    } catch {
      setUser(null);
      return null;
    }
  };

  const login = async (token, email, role, refreshToken, rememberMe = false) => {
    // ✅ Pehle dono storage clear karo
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("userTier");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");

    // ✅ Ab naya token save karo
    const storage = localStorage;
    storage.setItem("accessToken", token);
    storage.setItem("email", email);
    storage.setItem("role", role);
    if (refreshToken) storage.setItem("refreshToken", refreshToken);

    setAuthToken(token);
    await loadUser();
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("userTier");
    localStorage.removeItem("hasPremiumAccess");
    localStorage.removeItem("trialActive");

    sessionStorage.clear();

    setAuthToken(null);
    setUser(null);
  };

  useEffect(() => {
    loadUser().finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      loadUser,
      login,
      logout,
      isPremiumOrTrial,   // ✅ exposed
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);