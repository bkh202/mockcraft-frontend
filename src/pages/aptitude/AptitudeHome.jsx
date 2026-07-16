import { Link } from "react-router-dom";

export default function AptitudeHome() {
  const topics = [
    {
      title: "Quantitative Aptitude",
      subtitle: "Math & Calculations",
      path: "/aptitude/quantitative",
      icon: "fa-calculator",
      questionCount: "AI-Based Questions",
      subjects: ["Arithmetic", "Algebra", "Geometry", "Trigonometry", "Calculus"],
      highlight: true
    },
    {
      title: "Logical Reasoning",
      subtitle: "Analytical Thinking",
      path: "/aptitude/logical",
      icon: "fa-brain",
      questionCount: "AI-Based Questions",
      subjects: ["Puzzles", "Syllogisms", "Coding-Decoding", "Series", "Patterns"],
      highlight: true
    },
    {
      title: "Verbal Ability",
      subtitle: "English & Language",
      path: "/aptitude/verbal",
      icon: "fa-book",
      questionCount: "AI-Based Questions",
      subjects: ["Grammar", "Vocabulary", "Comprehension", "Error Spotting", "Para Jumbles"]
    },
    {
      title: "Data Interpretation",
      subtitle: "Charts & Analysis",
      path: "/aptitude/di",
      icon: "fa-chart-bar",
      questionCount: "AI-Based Questions",
      subjects: ["Tables", "Graphs", "Charts", "Caselets", "Probability"]
    },
    {
      title: "General Knowledge",
      subtitle: "Static & Current Affairs",
      path: "/aptitude/gk",
      icon: "fa-globe",
      questionCount: "AI-Based Questions",
      subjects: ["History", "Geography", "Polity", "Economy", "Science"]
    },
    {
      title: "Computer Aptitude",
      subtitle: "Tech & IT Concepts",
      path: "/aptitude/computer",
      icon: "fa-laptop",
      questionCount: "AI-Based Questions",
      subjects: ["Hardware", "Software", "Networking", "DBMS", "Algorithms"]
    }
  ];

  const stats = [
    { icon: "fa-pencil-alt", label: "Total Questions", value: "AI-Based" },
    { icon: "fa-tags", label: "Categories", value: "6" },
    { icon: "fa-clock", label: "Mock Tests", value: "AI-Based" },
    { icon: "fa-calendar-alt", label: "Exam Types", value: "10+" }
  ];

  const tips = [
    { icon: "fa-clock", title: "Time Management", desc: "Spend max 1 min per question in mocks" },
    { icon: "fa-bullseye", title: "Accuracy First", desc: "Focus on accuracy before attempting speed" },
    { icon: "fa-chart-line", title: "Weak Areas", desc: "Identify and practice weak topics daily" },
    { icon: "fa-undo", title: "Revision", desc: "Revise formulas & concepts weekly" }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">

      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-2 text-base text-gray-600 mb-6">
        <Link to="/dashboard" className="hover:text-black transition-colors font-medium">
          Dashboard
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">Aptitude Practice</span>
      </div>

      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Aptitude & Reasoning Practice
          </h1>
          <p className="text-xl text-gray-600 mt-3 max-w-2xl leading-relaxed">
            Master aptitude skills for competitive exams with topic-wise practice, mock tests, and previous year questions.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full shadow-sm">
            <i className="fa fa-robot text-black"></i>
            <span className="text-sm font-bold text-black">AI-Based Questions</span>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* ── APTITUDE CATEGORIES ── */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">Aptitude Categories</h2>
          <div className="flex items-center gap-2">
            <i className="fa fa-arrow-right text-gray-400"></i>
            <span className="text-sm text-gray-500">Click to explore topics</span>
          </div>
        </div>

        {/* Highlighted Cards (first two) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {topics.filter(t => t.highlight).map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 p-8 hover:shadow-md hover:border-black transition-all duration-300"
            >
              {/* Subtle left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
              <div className="relative pl-4">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                      <i className={`fa ${topic.icon} text-3xl text-black`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-500">{topic.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
                    <span className="text-sm font-bold text-gray-700">{topic.questionCount}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-500 mb-3">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                    Start Practice <i className="fa fa-arrow-right ml-2"></i>
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">Most Popular</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.filter(t => !t.highlight).map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 border border-gray-200">
                      <i className={`fa ${topic.icon} text-2xl text-black`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-1">{topic.title}</h3>
                    <p className="text-sm text-gray-500">{topic.subtitle}</p>
                  </div>
                </div>

                <div className="mb-4 grow">
                  <div className="flex flex-wrap gap-2">
                    {topic.subjects.slice(0, 3).map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-xs font-bold text-gray-700 rounded-lg border border-gray-200"
                      >
                        {subject}
                      </span>
                    ))}
                    {topic.subjects.length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{topic.subjects.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-bold text-gray-700">{topic.questionCount}</span>
                  <i className="fa fa-arrow-right text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── TIPS ── */}
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-8">
        <h3 className="text-2xl font-extrabold text-black mb-4 flex items-center gap-2">
          <i className="fa fa-lightbulb text-black"></i> Quick Tips for Aptitude Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 border border-gray-200">
                <i className={`fa ${tip.icon} text-xl text-black`}></i>
              </div>
              <h4 className="font-bold text-black mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BACK ── */}
      <div className="mt-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 px-5 py-2.5 text-gray-700 bg-white rounded-xl border border-gray-300 hover:bg-gray-100 hover:border-black transition-all shadow-sm text-base font-bold"
        >
          <i className="fa fa-arrow-left"></i> Back to Dashboard
        </Link>
      </div>

    </div>
  );
}