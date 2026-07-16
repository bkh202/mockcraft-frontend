import { Link } from "react-router-dom";

export default function MedicalHome() {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <Link to="/dashboard" className="hover:text-black transition-colors font-medium">
          Dashboard
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">Medical Exams</span>
      </div>

      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Medical Exam Preparation
          </h1>
          <p className="text-xl text-gray-600 mt-3 max-w-2xl leading-relaxed">
            Focused preparation for NEET UG with comprehensive question banks and mock tests.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full shadow-sm">
            <i className="fa fa-robot text-black"></i>
            <span className="text-sm font-bold text-black">AI-Based Questions</span>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { icon: "fa-pills", label: "Questions", value: "AI-Based" },
          { icon: "fa-book", label: "Subjects", value: "4" },
          { icon: "fa-clock", label: "Mock Tests", value: "AI-Based" },
          { icon: "fa-calendar-alt", label: "Year Papers", value: "10+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                <i className={`fa ${stat.icon} text-xl text-black`}></i>
              </div>
              <div>
                <p className="text-xl font-bold text-black">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── NEET UG CARD ── */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">NEET UG Preparation</h2>
          <div className="flex items-center gap-2">
            <i className="fa fa-star text-black"></i>
            <span className="text-sm text-gray-500">Most Popular</span>
          </div>
        </div>

        <Link
          to="/medical/neet"
          className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 p-8 hover:shadow-md hover:border-black transition-all duration-300 block"
        >
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                  <i className="fa fa-hospital text-4xl text-black"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-black">NEET UG</h3>
                  <p className="text-gray-600 text-lg">Undergraduate Medical Entrance Exam</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                <span className="text-sm font-bold text-gray-700">AI-Based Questions</span>
              </div>
            </div>

            {/* Subjects */}
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-500 mb-3">Subjects Covered:</p>
              <div className="flex flex-wrap gap-3">
                {["Physics", "Chemistry", "Botany", "Zoology"].map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-500 mb-3">Key Features:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Previous 10-year papers",
                  "Chapter-wise practice",
                  "AI-Based mock tests",
                  "Performance analytics",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                      <i className="fa fa-check text-xs text-black"></i>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <span className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                Start NEET Preparation <i className="fa fa-arrow-right ml-2"></i>
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Active Now</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ── QUICK PRACTICE ── */}
      <div className="mb-12">
        <h3 className="text-2xl font-extrabold text-black mb-6">Quick Practice</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/medical/neet"
            className="group bg-black text-white rounded-2xl p-8 hover:shadow-md transition-all duration-300 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700">
                <i className="fa fa-clock text-3xl text-white"></i>
              </div>
              <div className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700">
                <span className="text-sm font-bold text-gray-300">AI-Based</span>
              </div>
            </div>
            <h4 className="text-xl font-extrabold mb-3">AI-Based Mock Tests</h4>
            <p className="text-gray-300 mb-6">Timed tests with NEET exam patterns and difficulty</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Take Test</span>
              <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </Link>

          <Link
            to="/medical/previous-year"
            className="group bg-white text-black rounded-2xl p-8 hover:shadow-md transition-all duration-300 border-2 border-gray-200 hover:border-black"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                <i className="fa fa-file-alt text-3xl text-black"></i>
              </div>
              <div className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
                <span className="text-sm font-bold text-gray-700">10+ Years</span>
              </div>
            </div>
            <h4 className="text-xl font-extrabold mb-3">Previous Year Papers</h4>
            <p className="text-gray-600 mb-6">Actual NEET papers from previous years with solutions</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Solve Papers</span>
              <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </Link>
        </div>
      </div>

      {/* ── DIAGNOSTIC TEST ── */}
      <div className="bg-black rounded-2xl p-8 mb-8 text-white border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-extrabold mb-3">Start with Diagnostic Test</h3>
            <p className="text-gray-300 text-lg mb-4 max-w-2xl">
              Identify your strong and weak areas in Physics, Chemistry, and Biology with a personalized assessment.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">AI-Based assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-300">Subject-wise analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300">Personalized study plan</span>
              </div>
            </div>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors border border-gray-300 text-lg">
            Start Diagnostic Test
          </button>
        </div>
      </div>

      {/* ── BACK TO DASHBOARD ── */}
      <div className="mt-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
        >
          <i className="fa fa-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}