import { Link } from "react-router-dom";

export default function EngineeringCardsView({ config, onSelectSubject }) {
  const {
    pageTitle,
    breadcrumb,
    description,
    parentPath,
    parentLabel,
    subjects,
    difficultyLevels = [],
    quickPractice = [],
    adaptiveSubject,
    quizLabel,
  } = config;

  const diffLevels = difficultyLevels.length
    ? difficultyLevels
    : ["Easy", "Medium", "Hard"].map((level) => ({
        level,
        color:
          level === "Easy"
            ? "bg-gray-100 text-gray-700"
            : level === "Medium"
              ? "bg-gray-200 text-gray-800"
              : "bg-gray-300 text-black",
        subjects: subjects.filter((s) => s.difficulty === level).length,
      }));

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
          <Link to={parentPath} className="hover:text-black transition-colors font-medium">
            {parentLabel}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-bold">{breadcrumb}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2">{pageTitle}</h1>
            <p className="text-xl text-gray-600">{description}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-gray-100 rounded-xl px-4 py-2 border border-gray-200">
              <i className="fa fa-robot text-2xl text-black"></i>
              <span className="ml-2 text-base font-bold text-black">AI Powered</span>
            </div>
          </div>
        </div>

        {/* Difficulty legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {diffLevels.map((level) => (
            <div key={level.level} className="flex items-center gap-2">
              <div className={`px-3 py-1 rounded-full ${level.color} text-sm font-bold border border-gray-200`}>
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
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-black transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 border border-gray-200 group-hover:scale-110 transition-transform">
                {/* ✅ FIX: Render FontAwesome icon correctly */}
                <i className={`fa ${subject.icon} text-3xl text-black`}></i>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                  {subject.name}
                </h3>
                <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
                  subject.difficulty === "Easy"
                    ? "bg-gray-100 text-gray-700 border-gray-200"
                    : subject.difficulty === "Medium"
                      ? "bg-gray-200 text-gray-800 border-gray-300"
                      : "bg-gray-300 text-black border-gray-400"
                }`}>
                  {subject.difficulty}
                </span>
              </div>
              <p className="text-base text-gray-600 mb-4">{subject.questions} questions</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {subject.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                    {topic}
                  </span>
                ))}
                {subject.topics.length > 3 && (
                  <span className="text-xs text-gray-500">+{subject.topics.length - 3} more</span>
                )}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-base font-bold text-black group-hover:translate-x-1 transition-transform">
                  Start AI Quiz <i className="fa fa-arrow-right text-xs"></i>
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">AI‑generated</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-black rounded-2xl shadow-sm border border-gray-800 p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-extrabold mb-2 flex items-center gap-2">
                <i className="fa fa-robot text-white"></i> {quizLabel}
              </h3>
              <p className="text-gray-300 text-lg">Get detailed results with AI explanations after completing quizzes</p>
            </div>
            <button
              onClick={() => onSelectSubject(adaptiveSubject)}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-sm text-lg border border-gray-300"
            >
              Start Adaptive Quiz <i className="fa fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>

        {/* Quick practice */}
        {quickPractice.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-2xl font-extrabold text-black mb-4">Quick Practice Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickPractice.map((opt) => (
                <div
                  key={opt.title}
                  onClick={() => onSelectSubject(opt.subject)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">{opt.title}</p>
                      <p className="text-base text-gray-600">{opt.description}</p>
                    </div>
                    <span className="text-black group-hover:translate-x-1 transition-transform">
                      <i className="fa fa-arrow-right text-lg"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <Link
          to={parentPath}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
        >
          <i className="fa fa-arrow-left text-sm"></i> Back to {parentLabel}
        </Link>
      </div>
    </div>
  );
}