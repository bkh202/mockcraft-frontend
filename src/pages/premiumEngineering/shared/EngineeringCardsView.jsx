// shared/EngineeringCardsView.jsx
import { Link } from "react-router-dom";

export default function EngineeringCardsView({ config, onSelectSubject }) {
  const {
    pageTitle, breadcrumb, description,
    parentPath, parentLabel,
    subjects, difficultyLevels = [], quickPractice = [],
    adaptiveSubject, quizLabel,
  } = config;

  const diffLevels = difficultyLevels.length
    ? difficultyLevels
    : ["Easy", "Medium", "Hard"].map((level) => ({
        level,
        color:
          level === "Easy"   ? "bg-green-100 text-green-800"  :
          level === "Medium" ? "bg-yellow-100 text-yellow-800" :
                               "bg-red-100 text-red-800",
        subjects: subjects.filter((s) => s.difficulty === level).length,
      }));

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to={parentPath} className="hover:text-blue-600 transition-colors">
            {parentLabel}
          </Link>
          <span>→</span>
          <span className="text-gray-900 font-medium">{breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{pageTitle}</h1>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-2xl font-bold text-blue-600">🤖 AI</span>
              <span className="ml-2 text-sm text-gray-600">Powered</span>
            </div>
          </div>
        </div>

        {/* Difficulty legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {diffLevels.map((level) => (
            <div key={level.level} className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full ${level.color} text-sm font-medium shadow-sm`}>
                {level.level}
              </div>
              <span className="text-sm text-gray-600">{level.subjects} subject(s)</span>
            </div>
          ))}
        </div>

        {/* Subject cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              onClick={() => onSelectSubject(subject.name)}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <span className="text-3xl">{subject.icon}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {subject.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  subject.difficulty === "Easy"   ? "bg-green-100 text-green-800"  :
                  subject.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                                                    "bg-red-100 text-red-800"
                }`}>
                  {subject.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{subject.questions} questions</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {subject.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {topic}
                  </span>
                ))}
                {subject.topics.length > 3 && (
                  <span className="text-xs text-gray-500">+{subject.topics.length - 3} more</span>
                )}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                  Start AI Quiz →
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">AI‑generated</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">🤖 {quizLabel}</h3>
              <p className="text-purple-100 text-lg">Get detailed results with AI explanations after completing quizzes</p>
            </div>
            <button
              onClick={() => onSelectSubject(adaptiveSubject)}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Adaptive Quiz
            </button>
          </div>
        </div>

        {/* Quick practice */}
        {quickPractice.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickPractice.map((opt) => (
                <div
                  key={opt.title}
                  onClick={() => onSelectSubject(opt.subject)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{opt.title}</p>
                      <p className="text-sm text-gray-600">{opt.description}</p>
                    </div>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">Start →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <Link
          to={parentPath}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {parentLabel}
        </Link>
      </div>
    </div>
  );
}