import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axiosInstance";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Changed from loadUser to login if your context has it

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGIN BUTTON CLICKED");
    setErrors({});
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      console.log("Request payload:", { email, password });

      const response = await axios.post(
        "/auth/login",
        {
          email,
          password,
          rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      const { accessToken, refreshToken, role } = response.data;

      if (!accessToken) {
        throw new Error("Access token not returned by backend");
      }

      console.log("Tokens received, calling AuthContext login...");

      // Use the login function from AuthContext
      if (login) {
        await login(accessToken, email, role, refreshToken, rememberMe);
        console.log("AuthContext login successful");
      } else {
        // Fallback if login function not available
        console.warn("login function not found in AuthContext, using fallback");
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("accessToken", accessToken);
        storage.setItem("email", email);
        storage.setItem("role", role);

        // Set axios header
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        // Manually set user
        setUser({ email, role });
      }

      console.log("Navigating to /dashboard...");
      navigate("/dashboard", { replace: true });

    } catch (err) {
      console.error("LOGIN ERROR FULL:", err);
      console.error("Error response:", err.response?.data);
      console.error("Error status:", err.response?.status);

      let errorMessage = "Login failed. Please try again.";

      if (err.response?.status === 401) {
        errorMessage = "Invalid email or password. Please check your credentials.";
      } else if (err.response?.status === 403) {
        errorMessage = "Access forbidden. Please contact support.";
      } else if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err.message) {
        errorMessage = err.message;
      } else if (err.code === "ERR_NETWORK") {
        errorMessage = "Network error. Please check if the backend server is running.";
      }

      setErrors({ form: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout type="login">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? "border-red-300" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none`}
              placeholder="you@example.com"
              disabled={loading}
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-4 pr-12 py-3 rounded-xl border ${errors.password ? "border-red-300" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none`}
              placeholder="Enter your password"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              disabled={loading}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            disabled={loading}
          />
          <span className="ml-2 text-sm text-gray-700">Remember me</span>
        </div>

        {/* Backend Error */}
        {errors.form && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 text-center">{errors.form}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 font-semibold rounded-xl transition-colors ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Signup */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>

      {/* Debug info - remove in production */}

    </AuthLayout>
  );
};

export default Login;