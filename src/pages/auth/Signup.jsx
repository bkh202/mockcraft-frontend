import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axiosInstance";
import AuthLayout from "../../layouts/AuthLayout";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    else if (formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
      newErrors.password =
        "Password must contain uppercase, lowercase, and numbers";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.acceptTerms)
      newErrors.acceptTerms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post(
        "/auth/signup",
        {
          fullName: formData.name,
          email: formData.email,
          password: formData.password,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      navigate("/login");
    } catch (err) {
      if (err.response) {
        setErrors({ form: err.response.data.message || "Registration failed" });
      } else {
        setErrors({ form: "Server unreachable. Check backend." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout type="signup">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fa fa-user text-xl text-gray-500"></i>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } bg-white text-black text-lg focus:ring-2 focus:ring-black focus:border-black focus:outline-none placeholder:text-gray-400`}
              placeholder="John Doe"
              disabled={loading}
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
          <label className="block text-lg font-semibold text-black mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-4 pr-12 py-3.5 rounded-xl border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } bg-white text-black text-lg focus:ring-2 focus:ring-black focus:border-black focus:outline-none placeholder:text-gray-400`}
              placeholder="Create a strong password"
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

        {/* Confirm Password */}
        <div>
          <label className="block text-lg font-semibold text-black mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full pl-4 pr-4 py-3.5 rounded-xl border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } bg-white text-black text-lg focus:ring-2 focus:ring-black focus:border-black focus:outline-none placeholder:text-gray-400`}
              placeholder="Re-enter your password"
              disabled={loading}
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
              disabled={loading}
            />
            <span className="ml-3 text-base text-gray-700">
              I accept the{" "}
              <Link to="/terms" target="_blank" className="text-black font-semibold hover:underline">
                Terms & Conditions
              </Link>
            </span>
          </label>
          {errors.acceptTerms && (
            <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
          )}
        </div>

        {/* Backend Error */}
        {errors.form && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 text-center">{errors.form}</p>
          </div>
        )}

        {/* Submit Button */}
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
              Creating Account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Already have account? */}
        <div className="text-center">
          <p className="text-base text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;