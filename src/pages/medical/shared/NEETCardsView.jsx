import { Link } from "react-router-dom";

export default function NEETCardsView({ config, onSelectSubject }) {
  const {
    pageTitle,
    breadcrumb,
    description,
    parentPath,
    parentLabel,
    subjects,
    difficultyLevels = [],
  } = config;

  const diffLevels = difficultyLevels.length
    ? difficultyLevels
    : ["Easy", "Medium", "Hard"].map((level) => ({
        level,
        color:
          level === "Easy"
            ? "bg-green-100 text-green-800"
            : level === "Medium"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800",
        subjects: subjects.filter((s) => s.difficulty === level).length,
      }));

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to={parentPath} className="hover:text-blue-600">
          {parentLabel}
        </Link>
        <span>→</span>
        <span className="font-medium text-gray-900">{breadcrumb}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{pageTitle}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">🤖 AI</p>
              <p className="text-sm text-gray-600">Powered Quizzes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {subjects.reduce((sum, s) => sum + parseInt(s.questions) || 0, 0)}+
              </p>
              <p className="text-sm text-gray-600">Questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Legend */}
      <div className="mt-6 flex flex-wrap gap-4 mb-8">
        {diffLevels.map((level) => (
          <div key={level.level} className="flex items-center gap-2">
            <div className={`px-3 py-1 rounded-full ${level.color} text-sm font-medium shadow-sm`}>
              {level.level}
            </div>
            <span className="text-sm text-gray-600">{level.subjects} topic(s)</span>
          </div>
        ))}
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            onClick={() => onSelectSubject(subject.name)}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-xl ${subject.color} flex items-center justify-center`}>
                <span className="text-2xl">{subject.icon}</span>
              </div>
              <div className="text-right">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    subject.difficulty === "Easy"
                      ? "bg-green-100 text-green-800"
                      : subject.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {subject.difficulty}
                </span>
                {subject.weightage && (
                  <p className="text-xs text-gray-500 mt-1">{subject.weightage} weightage</p>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
              {subject.name}
            </h3>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-3">
                {subject.questions} questions • {subject.topics?.length || subject.subtopics?.length} topics
              </div>
              <div className="flex flex-wrap gap-2">
                {(subject.topics || subject.subtopics).slice(0, 3).map((item, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {item}
                  </span>
                ))}
                {(subject.topics || subject.subtopics).length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{(subject.topics || subject.subtopics).length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-blue-600">Start AI Quiz →</span>
              <div className="text-xs text-gray-500">NEET pattern</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}