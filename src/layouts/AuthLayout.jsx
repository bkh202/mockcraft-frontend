// AuthLayout.jsx
import { useState } from "react";

export default function AuthLayout({ children, type = "login" }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Left Side - Brand/Info Section */}
      <div className="lg:w-1/2 bg-linear-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">MockCraft</h1>
              <p className="text-sm text-blue-100">AI-Powered Practice Platform</p>
            </div>
          </div>

          <div className="mt-8 md:mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {type === "login" ? "Welcome Back!" : "Start Your Journey"}
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              {type === "login" 
                ? "Continue your learning journey with personalized practice and AI-powered insights." 
                : "Join 50,000+ learners who are mastering exams and skills with smart practice."}
            </p>
          </div>

          {/* Features List */}
          <div className="mt-8 md:mt-12 space-y-4">
            {[
              "✅ AI-Adaptive Question Bank",
              "✅ Weakness Detection & Analysis",
              "✅ Performance Analytics Dashboard",
              "✅ Mock Tests with Real Exam Simulation"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-blue-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold"></p>
              <p className="text-sm text-blue-100"></p>
            </div>
            <div>
              <p className="text-2xl font-bold"></p>
              <p className="text-sm text-blue-100"></p>
            </div>
            <div>
              <p className="text-2xl font-bold"></p>
              <p className="text-sm text-blue-100"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Back Button for Mobile */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-600">Please wait...</p>
                </div>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-blue-100 to-indigo-100 mb-4">
                <span className="text-2xl">
                  {type === "login" ? "🔐" : "🚀"}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {type === "login" ? "Login to Your Account" : "Create Account"}
              </h2>
              <p className="text-gray-600 mt-2">
                {type === "login" 
                  ? "Enter your credentials to continue" 
                  : "Start your free trial today"}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}