import { Link } from "react-router-dom";

export default function GovernmentHome() {
  const subjects = [
    {
      title: "Quantitative Aptitude",
      subtitle: "Maths for SSC & Railway",
      path: "/government/quantitative",
      icon: "🧮",
      questionCount: "AI-Based Questions",
      topics: ["Arithmetic", "Algebra", "Geometry", "Mensuration", "Trigonometry"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Reasoning",
      subtitle: "Logical & Analytical",
      path: "/government/reasoning",
      icon: "🧠",
      questionCount: "AI-Based Questions",
      topics: ["Verbal", "Non-Verbal", "Puzzles", "Syllogisms", "Coding"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: "English Language",
      subtitle: "Grammar & Comprehension",
      path: "/government/english",
      icon: "📚",
      questionCount: "AI-Based Questions",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Error Spotting", "Cloze Test"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: "General Awareness",
      subtitle: "GK & Current Affairs",
      path: "/government/ga",
      icon: "🌍",
      questionCount: "AI-Based Questions",
      topics: ["Static GK", "Current Affairs", "History", "Geography", "Polity"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    }
  ];

  

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <span>→</span>
          <span className="font-medium text-gray-900">Government Exams</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Government Exam Preparation
            </h1>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">
              Prepare for SSC, Railway, Banking & UPSC exams with topic-wise practice and mock tests.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">AI-Based Questions</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-xl">📝</span>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-900">AI-Based</p>
                <p className="text-sm text-gray-600"> Questions</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xl">🎯</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-sm text-gray-600">Exam Categories</p>
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

    

      {/* Subject Cards */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Core Subjects
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Click to explore topics</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={subject.path}
              className={`group block ${subject.bgColor} rounded-2xl border ${subject.borderColor} p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${subject.gradient} flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{subject.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{subject.title}</h3>
                    <p className="text-sm text-gray-600">{subject.subtitle}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-4 grow">
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.slice(0, 3).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/70 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-lg"
                      >
                        {topic}
                      </span>
                    ))}
                    {subject.topics.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{subject.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                  <span className="text-sm font-medium text-gray-700">
                    {subject.questionCount}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      
     

      {/* Diagnostic Test */}
      <div className="bg-linear-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">Not sure where to start?</h3>
            <p className="text-blue-100 mb-4 max-w-2xl">
              Take our free diagnostic test to identify your strong and weak areas. Get a personalized study plan.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>30-minute assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Personalized report</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Study plan</span>
              </div>
            </div>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Start Diagnostic Test
          </button>
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-linear-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Government Exam Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
              <span className="text-blue-600">⏱️</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Time Management</h4>
            <p className="text-sm text-gray-600">Allocate time per section based on your strengths</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
              <span className="text-green-600">📊</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Sectional Strategy</h4>
            <p className="text-sm text-gray-600">Focus on high-scoring sections first</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
              <span className="text-purple-600">📝</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Negative Marking</h4>
            <p className="text-sm text-gray-600">Avoid guessing in sections with negative marking</p>
          </div>
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