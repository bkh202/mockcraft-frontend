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

  const loadUser = async () => {
    // ✅ FIX: Sirf localStorage — sessionStorage nahi
    // Pehle dono check karta tha — inconsistency hoti thi
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setUser(null);
      return null;
    }

    setAuthToken(token);

    try {
      const res = await axios.get("/user/me");
      setUser(res.data);
      return res.data;
    } catch {
      setUser(null);
      return null;
    }
  };

  const login = async (token, email, role) => {
    // ✅ FIX: Hamesha localStorage — sessionStorage nahi
    // Purani condition galat thi:
    // "localStorage mein token hai? localStorage : sessionStorage"
    // Pehli baar login pe localStorage empty hota tha
    // → sessionStorage mein save hota tha
    // → PremiumRoute localStorage check karta tha → token nahi milta → /login!
    localStorage.setItem("accessToken", token);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);

    setAuthToken(token);
    await loadUser();
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    // ✅ FIX: userTier bhi clear karo
    // Warna logged out user bhi premium access le sakta tha!
    localStorage.removeItem("userTier");

    sessionStorage.clear(); // sab clear karo

    setAuthToken(null);
    setUser(null);
  };

  useEffect(() => {
    loadUser().finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loadUser, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);