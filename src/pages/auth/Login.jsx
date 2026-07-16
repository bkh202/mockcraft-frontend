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
  const { login } = useAuth();

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
    setErrors({});
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "/auth/login",
        { email, password, rememberMe },
        { headers: { "Content-Type": "application/json" } }
      );

      const { accessToken, refreshToken, role } = response.data;

      if (!accessToken) {
        throw new Error("Access token not returned by backend");
      }

      if (login) {
        await login(accessToken, email, role, refreshToken, rememberMe);
      } else {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("accessToken", accessToken);
        storage.setItem("email", email);
        storage.setItem("role", role);
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        // If you have a setUser function, call it here
        // setUser({ email, role });
      }

      navigate("/dashboard", { replace: true });
    } catch (err) {
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
          <label className="block text-lg font-semibold text-black mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fa fa-envelope text-xl text-gray-500"></i>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-white text-black text-lg focus:ring-2 focus:ring-black focus:border-black focus:outline-none placeholder:text-gray-400`}
              placeholder="you@example.com"
              disabled={loading}
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-lg font-semibold text-black">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-base font-medium text-gray-700 hover:text-black hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-4 pr-12 py-3.5 rounded-xl border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-white text-black text-lg focus:ring-2 focus:ring-black focus:border-black focus:outline-none placeholder:text-gray-400`}
              placeholder="Enter your password"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-black text-xl"
              disabled={loading}
            >
              <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
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
            className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
            disabled={loading}
          />
          <span className="ml-3 text-base text-gray-700">Remember me</span>
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
          className={`w-full py-4 font-bold rounded-xl transition-colors text-lg ${
            loading
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <i className="fa fa-spinner fa-spin mr-2"></i>
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Signup */}
        <div className="text-center">
          <p className="text-base text-gray-700">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;