import { Link } from "react-router-dom";

export default function EngineeringHome() {
  const branches = [
    {
      title: "Computer Science",
      subtitle: "CSE / IT",
      path: "/engineering/cse",
      icon: "fa-laptop",
      questionCount: "AI-Based Questions",
      subjects: ["DSA", "OS", "DBMS", "Networks", "Algorithms"],
    },
    {
      title: "Electronics",
      subtitle: "EC / ECE",
      path: "/engineering/ec",
      icon: "fa-microchip",
      questionCount: "AI-Based Questions",
      subjects: ["Digital Electronics", "Analog Circuits", "Signals", "VLSI"],
    },
    {
      title: "Mechanical",
      subtitle: "ME",
      path: "/engineering/me",
      icon: "fa-cogs",
      questionCount: "AI-Based Questions",
      subjects: ["Thermodynamics", "Fluid Mech", "Machine Design", "CAD"],
    },
    {
      title: "Civil",
      subtitle: "CE",
      path: "/engineering/civil",
      icon: "fa-building",
      questionCount: "AI-Based Questions",
      subjects: ["Structural", "Geotech", "Transportation", "Surveying"],
    },
    {
      title: "Electrical",
      subtitle: "EE",
      path: "/engineering/ee",
      icon: "fa-bolt",
      questionCount: "AI-Based Questions",
      subjects: ["Power Systems", "Machines", "Control Systems", "EMF"],
      highlight: true,
    },
    {
      title: "Common Subjects",
      subtitle: "All Branches",
      path: "/engineering/common",
      icon: "fa-book",
      questionCount: "AI-Based Questions",
      subjects: ["Maths", "Physics", "Chemistry", "English"],
      highlight: true,
    },
  ];

  const stats = [
    { label: "Questions", value: "AI-Powered", icon: "fa-chart-bar" },
    { label: "Branches", value: "6", icon: "fa-university" },
    { label: "Subjects", value: "50+", icon: "fa-book-open" },
    { label: "Mock Tests", value: "AI-Powered", icon: "fa-clock" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to="/dashboard" className="hover:text-black transition-colors font-medium">
          Dashboard
        </Link>
        <span className="text-gray-400">/</span>
        <span className="font-bold text-black">Engineering</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Engineering Practice
          </h1>
          <p className="text-gray-600 mt-3 text-xl max-w-2xl leading-relaxed">
            Choose your branch to start focused practice with topic-wise questions, mock tests, and previous year papers.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full shadow-sm">
            <i className="fa fa-robot text-black"></i>
            <span className="text-sm font-bold text-black">AI-Powered</span>
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

      {/* Featured Branch Cards */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black tracking-tight">
            Featured Engineering Branches
          </h2>
          <div className="flex items-center gap-2">
            <i className="fa fa-star text-black"></i>
            <span className="text-sm text-gray-500 font-medium">Most Popular</span>
          </div>
        </div>

        {/* Highlighted Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {branches
            .filter((b) => b.highlight)
            .map((branch, index) => (
              <Link
                key={index}
                to={branch.path}
                className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black"></div>
                <div className="relative pl-4">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                        <i className={`fa ${branch.icon} text-3xl text-black`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">{branch.title}</h3>
                        <p className="text-gray-500">{branch.subtitle}</p>
                      </div>
                    </div>
                    <div className="px-4 py-1.5 bg-gray-100 rounded-full border border-gray-200 text-sm font-bold text-black">
                      {branch.questionCount}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                      Key Subjects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {branch.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-700 border border-gray-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                      Start Learning <i className="fa fa-arrow-right ml-2"></i>
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-400">Active Now</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Regular Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches
            .filter((b) => !b.highlight)
            .map((branch, index) => (
              <Link
                key={index}
                to={branch.path}
                className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 border border-gray-200">
                        <i className={`fa ${branch.icon} text-2xl text-black`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-black mb-1">{branch.title}</h3>
                      <p className="text-sm text-gray-500">{branch.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-4 grow">
                    <div className="flex flex-wrap gap-2">
                      {branch.subjects.slice(0, 3).map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 text-xs font-bold text-gray-700 rounded-lg border border-gray-200"
                        >
                          {subject}
                        </span>
                      ))}
                      {branch.subjects.length > 3 && (
                        <span className="text-xs text-gray-400 px-2 py-1.5">
                          +{branch.subjects.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm font-bold text-gray-700">
                      {branch.questionCount}
                    </span>
                    <i className="fa fa-arrow-right text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all"></i>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black rounded-3xl p-8 border border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-gray-300 text-lg">
              Take our quick assessment to find the perfect branch for your career goals.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-8 py-3 bg-white text-black font-bold rounded-xl shadow-sm hover:bg-gray-200 transition-colors text-lg border border-gray-300">
            Take Career Assessment <i className="fa fa-arrow-right ml-2"></i>
          </button>
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