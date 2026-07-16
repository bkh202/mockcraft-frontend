import { Link } from "react-router-dom";

export default function GovernmentCardsView({ config, onSelectSubject }) {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <Link to={config.parentPath} className="hover:text-black transition-colors font-medium">
          {config.parentLabel}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-black font-bold">{config.breadcrumb}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2">
            {config.pageTitle}
          </h1>
          <p className="text-xl text-gray-600">{config.description}</p>
        </div>

        {config.headerStats && (
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            {config.headerStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-black">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {config.subjects.map((subject, i) => (
          <SubjectCard key={i} subject={subject} onClick={() => onSelectSubject(subject.name)} />
        ))}
      </div>

      {/* Quick Practice */}
      {config.quickPractice?.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-2xl font-extrabold text-black mb-4">Quick Practice Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {config.quickPractice.map((item, i) => (
              <div
                key={i}
                onClick={() => onSelectSubject(item.subject)}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-base text-gray-600">{item.description}</p>
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
        to={config.parentPath}
        className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
      >
        <i className="fa fa-arrow-left text-sm"></i> Back to {config.parentLabel}
      </Link>
    </div>
  );
}

// Subject Card Component
function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-black transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform">
          {/* FontAwesome icon – subject.icon should be a class string like "fa-book" */}
          <i className={`fa ${subject.icon} text-3xl text-black`}></i>
        </div>
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
      </div>

      <div className="mb-2">
        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
          {subject.name}
        </h3>

        {subject.examWeightage && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
              {subject.examWeightage.banking}
            </span>
            <span className="text-sm text-gray-600">{subject.questions} questions</span>
          </div>
        )}
      </div>

      <p className="text-base text-gray-600 mb-4">
        {subject.topics.slice(0, 4).join(", ")}
        {subject.topics.length > 4 && "..."}
      </p>

      <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-base font-bold text-black group-hover:translate-x-1 transition-transform">
          Start AI Quiz <i className="fa fa-arrow-right text-xs ml-1"></i>
        </span>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
          AI‑generated
        </span>
      </div>
    </div>
  );
}