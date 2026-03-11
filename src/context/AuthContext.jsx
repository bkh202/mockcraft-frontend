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
    const token = localStorage.getItem("accessToken") 
             || sessionStorage.getItem("accessToken"); // ← ADD sessionStorage

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
  const storage = rememberMe ? localStorage : sessionStorage;
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