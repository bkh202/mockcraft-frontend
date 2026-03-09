// EngineeringHome.jsx – Premium Edition (Distinct UI)
import { Link } from "react-router-dom";

export default function EngineeringHome() {
  const branches = [
    {
      title: "Computer Science",
      subtitle: "CSE / IT",
      path: "/engineering/cse",
      icon: "💻",
      questionCount: "AI-Based Questions",
      subjects: ["DSA", "OS", "DBMS", "Networks", "Algorithms"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Electronics",
      subtitle: "EC / ECE",
      path: "/engineering/ec",
      icon: "🔌",
      questionCount: "AI-Based Questions",
      subjects: ["Digital Electronics", "Analog Circuits", "Signals", "VLSI"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Mechanical",
      subtitle: "ME",
      path: "/engineering/me",
      icon: "⚙️",
      questionCount: "AI-Based Questions",
      subjects: ["Thermodynamics", "Fluid Mech", "Machine Design", "CAD"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Civil",
      subtitle: "CE",
      path: "/engineering/civil",
      icon: "🏗️",
      questionCount: "AI-Based Questions",
      subjects: ["Structural", "Geotech", "Transportation", "Surveying"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: "Electrical",
      subtitle: "EE",
      path: "/engineering/ee",
      icon: "⚡",
      questionCount: "AI-Based Questions",
      subjects: ["Power Systems", "Machines", "Control Systems", "EMF"],
      gradient: "from-yellow-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
      borderColor: "border-yellow-300",
      highlight: true
    },
    {
      title: "Common Subjects",
      subtitle: "All Branches",
      path: "/engineering/common",
      icon: "📚",
      questionCount: "AI-Based Questions",
      subjects: ["Maths", "Physics", "Chemistry", "English"],
      gradient: "from-indigo-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      borderColor: "border-indigo-300",
      highlight: true
    }
  ];

  return (
    <div className="p-4 md:p-6 bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
          <Link to="/dashboard" className="hover:text-neutral-900 transition-colors">
            Dashboard
          </Link>
          <span>→</span>
          <span className="font-medium text-neutral-900">Engineering</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Engineering Practice
            </h1>
            <p className="text-neutral-500 mt-3 text-lg max-w-2xl leading-relaxed">
              Choose your branch to start focused practice with topic-wise questions, mock tests, and previous year papers.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-neutral-800">AI-Powered</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="group bg-white p-4 rounded-2xl border border-neutral-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-sm">
                <span className="text-white text-xl">📊</span>
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-900">AI-Powered</p>
                <p className="text-sm text-neutral-400">Questions</p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-4 rounded-2xl border border-neutral-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm">
                <span className="text-white text-xl">🏛️</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">6</p>
                <p className="text-sm text-neutral-400">Branches</p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-4 rounded-2xl border border-neutral-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-sm">
                <span className="text-white text-xl">📚</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">50+</p>
                <p className="text-sm text-neutral-400">Subjects</p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-4 rounded-2xl border border-neutral-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-sm">
                <span className="text-white text-xl">⏱️</span>
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-900">AI-Powered</p>
                <p className="text-sm text-neutral-400">Mock Tests</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Branch Cards - Highlight Electrical & Common Subjects */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Featured Engineering Branches
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-linear-to-r from-amber-400 to-orange-400 rounded-full"></div>
            <span className="text-sm text-neutral-500 font-medium">Most Popular</span>
          </div>
        </div>

        {/* Highlighted Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {branches.filter(b => b.highlight).map((branch, index) => (
            <Link
              key={index}
              to={branch.path}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-neutral-100 p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Colored left accent */}
              <div className={`absolute left-0 top-0 bottom-0 w-2 bg-linear-to-b ${branch.gradient}`}></div>
              <div className="relative pl-4">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${branch.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{branch.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">{branch.title}</h3>
                      <p className="text-neutral-500">{branch.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-neutral-50 rounded-full border border-neutral-200 text-sm font-semibold text-neutral-700">
                    {branch.questionCount}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">Key Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {branch.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                  <span className="text-lg font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-purple-700">
                    Start Learning →
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-neutral-400">Active Now</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.filter(b => !b.highlight).map((branch, index) => (
            <Link
              key={index}
              to={branch.path}
              className="group block bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${branch.gradient} flex items-center justify-center mb-4 shadow-md`}>
                      <span className="text-2xl">{branch.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{branch.title}</h3>
                    <p className="text-sm text-neutral-500">{branch.subtitle}</p>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-4 grow">
                  <div className="flex flex-wrap gap-2">
                    {branch.subjects.slice(0, 3).map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-neutral-50 text-xs font-medium text-neutral-600 rounded-lg border border-neutral-200"
                      >
                        {subject}
                      </span>
                    ))}
                    {branch.subjects.length > 3 && (
                      <span className="text-xs text-neutral-400 px-2 py-1.5">
                        +{branch.subjects.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="text-sm font-semibold text-neutral-700">
                    {branch.questionCount}
                  </span>
                  <svg
                    className="w-5 h-5 text-neutral-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

     
      {/* Call to Action */}
      <div className="bg-linear-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-indigo-100 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-neutral-500">
              Take our quick assessment to find the perfect branch for your career goals.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all">
            Take Career Assessment
          </button>
        </div>
      </div>

      {/* Back to Dashboard */}
      <div className="mt-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 px-5 py-2.5 text-neutral-700 bg-white rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}