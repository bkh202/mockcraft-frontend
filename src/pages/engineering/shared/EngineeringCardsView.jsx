import { Link } from "react-router-dom";

export default function EngineeringCardsView({ config, onSelectSubject }) {
  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to={config.parentPath} className="hover:text-blue-600">{config.parentLabel}</Link>
          <span>→</span>
          <span className="text-gray-900 font-medium">{config.breadcrumb}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{config.pageTitle}</h1>
            <p className="text-gray-600 mt-2">{config.description}</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">🤖 AI</p>
              <p className="text-sm text-gray-600">Powered Quizzes</p>
            </div>
          </div>
        </div>

        {/* Difficulty badges */}
        <div className="mt-6 flex flex-wrap gap-4">
          {config.difficultyLevels.map((level, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full ${level.color} text-sm font-medium`}>{level.level}</div>
              <span className="text-sm text-gray-600">{level.subjects} subject(s)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {config.subjects.map((subject, i) => (
          <SubjectCard key={i} subject={subject} onClick={() => onSelectSubject(subject.name)} />
        ))}
      </div>

      {/* CTA Banner */}
      <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">🤖 Try AI-Powered {config.breadcrumb} Quiz</h3>
            <p className="text-purple-100">Get detailed results with AI explanations after completing quizzes</p>
          </div>
          <button
            onClick={() => onSelectSubject(config.adaptiveSubject)}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start Adaptive Quiz
          </button>
        </div>
      </div>

      {/* Quick Practice */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Practice Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.quickPractice.map((item, i) => (
            <div
              key={i}
              onClick={() => onSelectSubject(item.subject)}
              className="bg-white border border-gray-300 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <span className="text-blue-600">Start →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back */}
      <div className="mt-8">
        <Link
          to={config.parentPath}
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {config.parentLabel}
        </Link>
      </div>
    </div>
  );
}

function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
    >
      <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center mb-4`}>
        <span className="text-2xl">{subject.icon}</span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{subject.name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          subject.difficulty === "Easy" ? "bg-green-100 text-green-800" :
          subject.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
          "bg-red-100 text-red-800"
        }`}>
          {subject.difficulty}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4">{subject.questions} questions</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {subject.topics.slice(0, 3).map((topic, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{topic}</span>
        ))}
        {subject.topics.length > 3 && (
          <span className="text-xs text-gray-500">+{subject.topics.length - 3} more</span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm font-medium text-blue-600">Start AI Quiz →</span>
        <span className="text-xs text-gray-500">AI-generated</span>
      </div>
    </div>
  );
}