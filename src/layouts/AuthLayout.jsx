import { useState } from "react";

export default function AuthLayout({ children, type = "login" }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-black">
      {/* Left Side - Brand/Info Section */}
      <div className="lg:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-between border-r border-gray-200">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
              <i className="fa fa-rocket text-3xl text-black"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black">MockCraft</h1>
              <p className="text-base text-gray-700">AI-Powered Practice Platform</p>
            </div>
          </div>

          <div className="mt-8 md:mt-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              {type === "login" ? "Welcome Back!" : "Start Your Journey"}
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed max-w-lg">
              {type === "login"
                ? "Continue your learning journey with personalized practice and AI-powered insights."
                : "Join 50,000+ learners who are mastering exams and skills with smart practice."}
            </p>
          </div>

          {/* Features List */}
          <div className="mt-8 md:mt-12 space-y-4">
            {[
              "AI-Adaptive Question Bank",
              "Weakness Detection & Analysis",
              "Performance Analytics Dashboard",
              "Mock Tests with Real Exam Simulation",
              "Resume to Portfolio",
              "Resume Analyzer",
              "AI Interviewer",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-black rounded-full shrink-0"></div>
                <span className="text-lg text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-6 text-gray-500">
            <div>
              <p className="text-2xl font-bold text-black">50K+</p>
              <p className="text-sm text-gray-600">Active Learners</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">10K+</p>
              <p className="text-sm text-gray-600">Mock Tests Taken</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">95%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Back Button for Mobile */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-700 hover:text-black text-lg"
            >
              <i className="fa fa-arrow-left"></i>
              Back
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10 relative">
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-700 text-lg">Please wait...</p>
                </div>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 border border-gray-200 mb-4">
                <i
                  className={`fa ${
                    type === "login" ? "fa-lock" : "fa-user-plus"
                  } text-3xl text-black`}
                ></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {type === "login" ? "Login to Your Account" : "Create Account"}
              </h2>
              <p className="text-gray-700 mt-2 text-lg">
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