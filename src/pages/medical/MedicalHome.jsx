import { Link } from "react-router-dom";

export default function MedicalHome() {
  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <span>→</span>
          <span className="font-medium text-gray-900">Medical Exams</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Medical Exam Preparation
            </h1>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">
              Focused preparation for NEET UG with comprehensive question banks and mock tests.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">AI-Based Questions</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xl">💊</span>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-900">AI-Based</p>
                <p className="text-sm text-gray-600"> Questions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-xl">📚</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4</p>
                <p className="text-sm text-gray-600">Subjects</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-xl">⏱️</span>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-900">AI-Based</p>
                <p className="text-sm text-gray-600">Mock Tests</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-xl">📅</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600">Year Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEET UG Card - Focused and Prominent */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            NEET UG Preparation
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Most Popular</span>
          </div>
        </div>
        
        <Link 
          to="/medical/neet"
          className="group relative overflow-hidden rounded-2xl border-2 border-green-200 p-8 hover:shadow-2xl transition-all duration-300 block"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-600 opacity-5"></div>
          
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-4xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">NEET UG</h3>
                  <p className="text-gray-600">Undergraduate Medical Entrance Exam</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
                <span className="text-sm font-medium text-gray-700">AI-Based Questions</span>
              </div>
            </div>

            {/* Subjects */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Subjects Covered:</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-lg text-sm font-medium text-blue-700">
                  Physics 
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-red-200 rounded-lg text-sm font-medium text-red-700">
                  Chemistry 
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg text-sm font-medium text-green-700">
                  Botany 
                </span>
                <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-lg text-sm font-medium text-purple-700">
                  Zoology 
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Key Features:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Previous 10-year papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Chapter-wise practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">AI-Based mock tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Performance analytics</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
              <span className="text-lg font-semibold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Start NEET Preparation →
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Active Now</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Practice Options */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Quick Practice
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/medical/neet"
            className="group bg-linear-to-br from-green-900 to-emerald-900 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-3xl">⏱️</span>
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm font-medium"> AI-Based</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-3">AI-Based Mock Tests</h4>
            <p className="text-green-100 mb-6">Timed tests with NEET exam patterns and difficulty</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">Take Test</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
          
          <Link 
            to="/medical/previous-year"
            className="group bg-linear-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-3xl">📄</span>
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm font-medium">10+ Years</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-3">Previous Year Papers</h4>
            <p className="text-blue-100 mb-6">Actual NEET papers from previous years with solutions</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">Solve Papers</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Diagnostic Test */}
      <div className="bg-linear-to-r from-green-900 to-emerald-900 text-white rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">Start with Diagnostic Test</h3>
            <p className="text-green-100 mb-4 max-w-2xl">
              Identify your strong and weak areas in Physics, Chemistry, and Biology with a personalized assessment.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>AI-Based assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Subject-wise analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Personalized study plan</span>
              </div>
            </div>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-green-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Start Diagnostic Test
          </button>
        </div>
      </div>

      {/* Back to Dashboard */}
      <div className="mt-8">
        <Link 
          to="/dashboard"
          className="inline-flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}