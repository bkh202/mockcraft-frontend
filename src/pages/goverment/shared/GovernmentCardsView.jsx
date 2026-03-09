import { Link } from "react-router-dom";

export default function GovernmentCardsView({ config, onSelectSubject }) {
  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link to={config.parentPath} className="hover:text-green-600">
            {config.parentLabel}
          </Link>
          <span>→</span>
          <span className="text-gray-900 font-medium">{config.breadcrumb}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {config.pageTitle}
            </h1>
            <p className="text-gray-600 mt-2">{config.description}</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            {config.headerStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {config.subjects.map((subject, i) => (
          <SubjectCard
            key={i}
            subject={subject}
            onClick={() => onSelectSubject(subject.name)}
            accentColor={config.cardAccent}
          />
        ))}
      </div>

      {/* Quick Practice */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Practice Options
        </h3>

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
          ← Back to {config.parentLabel}
        </Link>
      </div>
    </div>
  );
}

function SubjectCard({ subject, onClick, accentColor = "blue" }) {
  const hoverBorder =
    accentColor === "green"
      ? "hover:border-green-300"
      : "hover:border-blue-300";

  const hoverText =
    accentColor === "green"
      ? "group-hover:text-green-600"
      : "group-hover:text-blue-600";

  const weightBadge =
    accentColor === "green"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";

  const ctaColor =
    accentColor === "green"
      ? "text-green-600"
      : "text-blue-600";

  return (
    <div
      onClick={onClick}
      className={`group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg ${hoverBorder} transition-all cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center`}
        >
          <span className="text-2xl">{subject.icon}</span>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            subject.difficulty === "Easy"
              ? "bg-green-100 text-green-800"
              : subject.difficulty === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {subject.difficulty}
        </span>
      </div>

      <div className="mb-2">
        <h3 className={`text-lg font-semibold text-gray-900 ${hoverText}`}>
          {subject.name}
        </h3>

        {subject.examWeightage && (
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-1 rounded ${weightBadge}`}>
              {subject.examWeightage.banking}
            </span>
            <span className="text-sm text-gray-600">
              {subject.questions} questions
            </span>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {subject.topics.slice(0, 4).join(", ")}...
      </p>

      <div className="pt-4 border-t border-gray-100">
        <span className={`text-sm font-medium ${ctaColor}`}>
          Start AI Quiz →
        </span>
      </div>
    </div>
  );
}