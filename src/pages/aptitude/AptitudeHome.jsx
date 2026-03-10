// AptitudeHome.jsx
import { Link } from "react-router-dom";

export default function AptitudeHome() {
  const topics = [
    {
      title: "Quantitative Aptitude",
      subtitle: "Math & Calculations",
      path: "/aptitude/quantitative",
      icon: "🧮",
      questionCount: "AI-Based Questions",
      subjects: ["Arithmetic", "Algebra", "Geometry", "Trigonometry", "Calculus"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      highlight: true
    },
    {
      title: "Logical Reasoning",
      subtitle: "Analytical Thinking",
      path: "/aptitude/logical",
      icon: "🧠",
      questionCount: "AI-Based Questions",
      subjects: ["Puzzles", "Syllogisms", "Coding-Decoding", "Series", "Patterns"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      highlight: true
    },
    {
      title: "Verbal Ability",
      subtitle: "English & Language",
      path: "/aptitude/verbal",
      icon: "📚",
      questionCount: "AI-Based Questions",
      subjects: ["Grammar", "Vocabulary", "Comprehension", "Error Spotting", "Para Jumbles"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: "Data Interpretation",
      subtitle: "Charts & Analysis",
      path: "/aptitude/di",
      icon: "📊",
      questionCount: "AI-Based Questions",
      subjects: ["Tables", "Graphs", "Charts", "Caselets", "Probability"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      title: "General Knowledge",
      subtitle: "Static & Current Affairs",
      path: "/aptitude/gk",
      icon: "🌍",
      questionCount: "AI-Based Questions",
      subjects: ["History", "Geography", "Polity", "Economy", "Science"],
      gradient: "from-yellow-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      borderColor: "border-yellow-300"
    },
    {
      title: "Computer Aptitude",
      subtitle: "Tech & IT Concepts",
      path: "/aptitude/computer",
      icon: "💻",
      questionCount: "AI-Based Questions",
      subjects: ["Hardware", "Software", "Networking", "DBMS", "Algorithms"],
      gradient: "from-indigo-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      borderColor: "border-indigo-300"
    }
  ];

  return (
    <div className="p-4 md:p-6">

      {/* ── HEADER ── */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <span>→</span>
          <span className="font-medium text-gray-900">Aptitude Practice</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Aptitude & Reasoning Practice
            </h1>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">
              Master aptitude skills for competitive exams with topic-wise practice, mock tests, and previous year questions.
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
          {[
            { icon: "📝", color: "bg-blue-100", textColor: "text-blue-600", value: "AI-Based", label: "Total Questions", bold: false },
            { icon: "🎯", color: "bg-green-100", textColor: "text-green-600", value: "6", label: "Categories", bold: true },
            { icon: "⏱️", color: "bg-purple-100", textColor: "text-purple-600", value: "AI-Based", label: "Mock Tests", bold: false },
            { icon: "📅", color: "bg-orange-100", textColor: "text-orange-600", value: "10+", label: "Exam Types", bold: true },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <span className={`${stat.textColor} text-xl`}>{stat.icon}</span>
                </div>
                <div>
                  <p className={`${stat.bold ? "text-2xl font-bold" : "text-xl font-medium"} text-gray-900`}>{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── APTITUDE CATEGORIES ── */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Aptitude Categories</h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Click to explore topics</span>
          </div>
        </div>

        {/* Highlighted Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {topics.filter(t => t.highlight).map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className={`group relative overflow-hidden rounded-2xl border-2 ${topic.borderColor} p-8 hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${topic.gradient} opacity-5`}></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${topic.gradient} flex items-center justify-center`}>
                      <span className="text-3xl">{topic.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{topic.title}</h3>
                      <p className="text-gray-600">{topic.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">{topic.questionCount}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.subjects.map((subject, idx) => (
                      <span key={idx} className="px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                  <span className="text-lg font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Start Practice →
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Most Popular</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.filter(t => !t.highlight).map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className={`group block ${topic.bgColor} rounded-2xl border ${topic.borderColor} p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${topic.gradient} flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{topic.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{topic.title}</h3>
                    <p className="text-sm text-gray-600">{topic.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4 grow">
                  <div className="flex flex-wrap gap-2">
                    {topic.subjects.slice(0, 3).map((subject, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/70 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-lg">
                        {subject}
                      </span>
                    ))}
                    {topic.subjects.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">+{topic.subjects.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                  <span className="text-sm font-medium text-gray-700">{topic.questionCount}</span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── TIPS ── */}
      <div className="bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-200 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Quick Tips for Aptitude Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "⏱️", color: "bg-blue-100", textColor: "text-blue-600", title: "Time Management", desc: "Spend max 1 min per question in mocks" },
            { icon: "🎯", color: "bg-green-100", textColor: "text-green-600", title: "Accuracy First", desc: "Focus on accuracy before attempting speed" },
            { icon: "📊", color: "bg-purple-100", textColor: "text-purple-600", title: "Weak Areas", desc: "Identify and practice weak topics daily" },
            { icon: "📝", color: "bg-orange-100", textColor: "text-orange-600", title: "Revision", desc: "Revise formulas & concepts weekly" },
          ].map((tip, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <div className={`w-10 h-10 rounded-lg ${tip.color} flex items-center justify-center mb-3`}>
                <span className={tip.textColor}>{tip.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BACK ── */}
      <div className="mt-8">
        <Link to="/dashboard" className="inline-flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </div>

    </div>
  );
}