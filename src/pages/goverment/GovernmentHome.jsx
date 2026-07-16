import { Link } from "react-router-dom";

export default function GovernmentHome() {
  const subjects = [
    {
      title: "Quantitative Aptitude",
      subtitle: "Maths for SSC & Railway",
      path: "/government/quantitative",
      icon: "fa-calculator",
      questionCount: "AI-Based Questions",
      topics: ["Arithmetic", "Algebra", "Geometry", "Mensuration", "Trigonometry"],
    },
    {
      title: "Reasoning",
      subtitle: "Logical & Analytical",
      path: "/government/reasoning",
      icon: "fa-brain",
      questionCount: "AI-Based Questions",
      topics: ["Verbal", "Non-Verbal", "Puzzles", "Syllogisms", "Coding"],
    },
    {
      title: "English Language",
      subtitle: "Grammar & Comprehension",
      path: "/government/english",
      icon: "fa-book",
      questionCount: "AI-Based Questions",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Error Spotting", "Cloze Test"],
    },
    {
      title: "General Awareness",
      subtitle: "GK & Current Affairs",
      path: "/government/ga",
      icon: "fa-globe",
      questionCount: "AI-Based Questions",
      topics: ["Static GK", "Current Affairs", "History", "Geography", "Polity"],
    },
  ];

  const stats = [
    { label: "Questions", value: "AI-Based", icon: "fa-pencil-alt" },
    { label: "Exam Categories", value: "5", icon: "fa-bullseye" },
    { label: "Mock Tests", value: "AI-Based", icon: "fa-clock" },
    { label: "Year Papers", value: "10+", icon: "fa-calendar-alt" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <Link to="/dashboard" className="hover:text-black transition-colors font-medium">
          Dashboard
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">Government Exams</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Government Exam Preparation
          </h1>
          <p className="text-gray-600 mt-3 text-xl max-w-2xl leading-relaxed">
            Prepare for SSC, Railway, Banking & UPSC exams with topic-wise practice and mock tests.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full shadow-sm">
            <i className="fa fa-robot text-black"></i>
            <span className="text-sm font-bold text-black">AI-Based Questions</span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                <i className={`fa ${stat.icon} text-xl text-black`}></i>
              </div>
              <div>
                <p className="text-xl font-bold text-black">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subject Cards */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">Core Subjects</h2>
          <div className="flex items-center gap-2">
            <i className="fa fa-arrow-right text-gray-400"></i>
            <span className="text-sm text-gray-500">Click to explore topics</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={subject.path}
              className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 border border-gray-200">
                      <i className={`fa ${subject.icon} text-2xl text-black`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-1">{subject.title}</h3>
                    <p className="text-sm text-gray-500">{subject.subtitle}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-4 grow">
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.slice(0, 3).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-xs font-bold text-gray-700 rounded-lg border border-gray-200"
                      >
                        {topic}
                      </span>
                    ))}
                    {subject.topics.length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{subject.topics.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-bold text-gray-700">
                    {subject.questionCount}
                  </span>
                  <i className="fa fa-arrow-right text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Diagnostic Test */}
      <div className="bg-black rounded-3xl p-8 border border-gray-800 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Not sure where to start?
            </h3>
            <p className="text-gray-300 text-lg mb-4 max-w-2xl">
              Take our free diagnostic test to identify your strong and weak areas. Get a personalized study plan.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">30-minute assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-300">Personalized report</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300">Study plan</span>
              </div>
            </div>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors text-lg border border-gray-300">
            Start Diagnostic Test <i className="fa fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-lightbulb text-black"></i> Government Exam Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
              <i className="fa fa-clock text-xl text-black"></i>
            </div>
            <h4 className="font-bold text-black mb-2">Time Management</h4>
            <p className="text-sm text-gray-600">Allocate time per section based on your strengths</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
              <i className="fa fa-chart-bar text-xl text-black"></i>
            </div>
            <h4 className="font-bold text-black mb-2">Sectional Strategy</h4>
            <p className="text-sm text-gray-600">Focus on high-scoring sections first</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
              <i className="fa fa-pen text-xl text-black"></i>
            </div>
            <h4 className="font-bold text-black mb-2">Negative Marking</h4>
            <p className="text-sm text-gray-600">Avoid guessing in sections with negative marking</p>
          </div>
        </div>
      </div>

      {/* Back to Dashboard */}
      <div className="mt-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-colors shadow-sm text-base font-bold"
        >
          <i className="fa fa-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}