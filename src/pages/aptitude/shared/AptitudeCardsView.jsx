import { Link } from "react-router-dom";

export default function AptitudeCardsView({ config, onSelectSubject }) {
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
            ? "bg-gray-100 text-gray-700"
            : level === "Medium"
            ? "bg-gray-200 text-gray-800"
            : "bg-gray-300 text-black",
        subjects: subjects.filter((s) => s.difficulty === level).length,
      }));

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <Link to={parentPath} className="hover:text-black transition-colors font-medium">
          {parentLabel}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">{breadcrumb}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">{pageTitle}</h1>
          <p className="text-xl text-gray-600 mt-2">{description}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-gray-100 rounded-xl px-4 py-2 border border-gray-200">
            <i className="fa fa-robot text-2xl text-black"></i>
            <span className="ml-2 text-base font-bold text-black">AI Powered</span>
          </div>
        </div>
      </div>

      {/* Difficulty Legend */}
      <div className="flex flex-wrap gap-4 mb-8">
        {diffLevels.map((level) => (
          <div key={level.level} className="flex items-center gap-2">
            <div className={`px-3 py-1 rounded-full ${level.color} text-sm font-bold border border-gray-200`}>
              {level.level}
            </div>
            <span className="text-sm text-gray-600">{level.subjects} topic(s)</span>
          </div>
        ))}
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {subjects.map((subject) => {
          const topics = subject.subtopics || subject.topics || [];
          return (
            <div
              key={subject.name}
              onClick={() => onSelectSubject(subject.name)}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-black transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform">
                  <i className={`fa ${subject.icon} text-3xl text-black`}></i>
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full border ${
                      subject.difficulty === "Easy"
                        ? "bg-gray-100 text-gray-700 border-gray-200"
                        : subject.difficulty === "Medium"
                        ? "bg-gray-200 text-gray-800 border-gray-300"
                        : "bg-gray-300 text-black border-gray-400"
                    }`}
                  >
                    {subject.difficulty}
                  </span>
                  {subject.timePerQuestion && (
                    <p className="text-xs text-gray-500 mt-1">{subject.timePerQuestion}</p>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                {subject.name}
              </h3>

              <div className="mb-4">
                <div className="text-base text-gray-600 mb-3">{subject.questions} questions</div>
                <div className="flex flex-wrap gap-2">
                  {topics.slice(0, 3).map((item, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                      {item}
                    </span>
                  ))}
                  {topics.length > 3 && (
                    <span className="text-xs text-gray-500">+{topics.length - 3} more</span>
                  )}
                </div>
                {subject.tip && (
                  <p className="text-xs text-black font-bold mt-2 flex items-center gap-1">
                    <i className="fa fa-lightbulb"></i> {subject.tip}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-base font-bold text-black group-hover:translate-x-1 transition-transform">
                  Start AI Quiz <i className="fa fa-arrow-right text-xs ml-1"></i>
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                  AI‑generated
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}