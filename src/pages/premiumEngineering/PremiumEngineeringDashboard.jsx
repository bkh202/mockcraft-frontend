import { Link } from "react-router-dom";

export default function PremiumEngineeringDashboard() {
  const branches = [
    {
      title: "Computer Science",
      subtitle: "CSE / IT",
      path: "/premium/engineering/csdash",
      icon: "fa-laptop",
      questionCount: "AI-Based Questions",
      subjects: ["DSA", "OS", "DBMS", "Networks", "Algorithms"],
    },
    {
      title: "Electronics",
      subtitle: "EC / ECE",
      path: "/premium/engineering/ecedash",
      icon: "fa-microchip",
      questionCount: "AI-Based Questions",
      subjects: ["Digital Electronics", "Analog Circuits", "Signals", "VLSI"],
    },
    {
      title: "Mechanical",
      subtitle: "ME",
      path: "/premium/engineering/medash",
      icon: "fa-cogs",
      questionCount: "AI-Based Questions",
      subjects: ["Thermodynamics", "Fluid Mech", "Machine Design", "CAD"],
    },
    {
      title: "Civil",
      subtitle: "CE",
      path: "/premium/engineering/civildash",
      icon: "fa-building",
      questionCount: "AI-Based Questions",
      subjects: ["Structural", "Geotech", "Transportation", "Surveying"],
    },
    {
      title: "Electrical",
      subtitle: "EE",
      path: "/premium/engineering/eedash",
      icon: "fa-bolt",
      questionCount: "AI-Based Questions",
      subjects: ["Power Systems", "Machines", "Control Systems", "EMF"],
      highlight: true,
    },
    {
      title: "Common Subjects",
      subtitle: "All Branches",
      path: "/premium/engineering/common",
      icon: "fa-book",
      questionCount: "AI-Based Questions",
      subjects: ["Maths", "Physics", "Chemistry", "English"],
      highlight: true,
    },
  ];

  const stats = [
    { label: "Questions", value: "AI-Gen", icon: "fa-chart-bar" },
    { label: "Disciplines", value: "06", icon: "fa-university" },
    { label: "Subjects", value: "50+", icon: "fa-book-open" },
    { label: "Tests", value: "Live", icon: "fa-clock" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <Link to="/dashboard" className="hover:text-black transition-colors flex items-center gap-1">
              <i className="fa fa-arrow-left text-xs"></i> Dashboard
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-black">Engineering Wing</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-bold border border-gray-200 uppercase tracking-wider">
              System Online
            </span>
            <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse"></div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
              Engineering <br />
              <span className="text-gray-800">Excellence Hub</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Navigate your academic journey with precision. Our AI-driven engine adapts to your performance, providing real-time analytics and personalized mock tests.
            </p>
          </div>

          {/* Right side: action buttons + stats */}
          <div className="space-y-4">
            {/* Quick Action Buttons */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-wrap justify-around items-center gap-3 shadow-sm">
              <Link to="/history/premium" className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 transition-colors min-w-20">
                <i className="fa fa-chart-line text-2xl text-black mb-1"></i>
                <span className="text-xs font-bold text-gray-700">Analytics</span>
              </Link>
              <Link to="/premium/engineering/recommended-quiz" className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 transition-colors min-w-20">
                <i className="fa fa-bullseye text-2xl text-black mb-1"></i>
                <span className="text-xs font-bold text-gray-700">Recommended</span>
              </Link>
              <Link to="/premium/engineering/attempted-quiz" className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 transition-colors min-w-20">
                <i className="fa fa-clipboard-list text-2xl text-black mb-1"></i>
                <span className="text-xs font-bold text-gray-700">Attempted</span>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                  <i className={`fa ${stat.icon} text-2xl text-black mb-2`}></i>
                  <span className="text-xl font-bold text-black">{stat.value}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Branches Section */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-black tracking-tight">Core Branches</h2>
              <p className="text-gray-600 mt-1">Select your primary discipline</p>
            </div>
            <div className="hidden sm:block text-xs font-bold text-gray-400 uppercase tracking-wider">
              Updated for 2026 Curriculum
            </div>
          </div>

          {/* Highlighted Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {branches.filter(b => b.highlight).map((branch, index) => (
              <Link
                key={index}
                to={branch.path}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-4xl text-black border border-gray-200">
                        <i className={`fa ${branch.icon}`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                          {branch.title}
                        </h3>
                        <p className="text-gray-500 font-medium">{branch.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-bold text-gray-700">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                      Active
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {branch.subjects.map((subj, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 group-hover:border-gray-300 transition-colors">
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-700 transition-colors">
                      {branch.questionCount}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-200 group-hover:border-black">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Standard Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.filter(b => !b.highlight).map((branch, index) => (
              <Link
                key={index}
                to={branch.path}
                className="group relative flex flex-col justify-between bg-white rounded-3xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      <i className={`fa ${branch.icon}`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1 group-hover:text-gray-700 transition-colors">
                    {branch.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{branch.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {branch.subjects.slice(0, 2).map((s, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                        {s}
                      </span>
                    ))}
                    {branch.subjects.length > 2 && (
                      <span className="text-[10px] font-bold text-black bg-gray-100 px-2 py-1 rounded border border-gray-200">
                        +{branch.subjects.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-black transition-colors pt-4 border-t border-gray-100">
                  <span>View Modules</span>
                  <i className="fa fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Command Center - Dark contrast section but still black & white */}
        <div className="mb-20">
          <div className="bg-black rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Command Center</h3>
                  <p className="text-gray-400">Quick access to high-priority learning modules.</p>
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                  <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                  <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mock Test Card */}
                <Link to="/engineering/mock-tests" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl text-gray-300 group-hover:text-white group-hover:bg-gray-700 transition-all">
                      <i className="fa fa-clock"></i>
                    </div>
                    <span className="px-2 py-1 bg-gray-800 rounded text-[10px] font-bold text-gray-300 uppercase border border-gray-700">Timed</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Full Simulation</h4>
                  <p className="text-sm text-gray-400 mb-6">3-hour full syllabus mock tests with percentile prediction.</p>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 w-2/3"></div>
                  </div>
                  <div className="mt-2 text-[10px] text-gray-500 text-right">Adaptive Difficulty</div>
                </Link>

                {/* PYQ Card */}
                <Link to="/engineering/previous-year" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl text-gray-300 group-hover:text-white group-hover:bg-gray-700 transition-all">
                      <i className="fa fa-file-alt"></i>
                    </div>
                    <span className="px-2 py-1 bg-gray-800 rounded text-[10px] font-bold text-gray-300 uppercase border border-gray-700">Solved</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Archives (10+ Yrs)</h4>
                  <p className="text-sm text-gray-400 mb-6">Previous year papers with detailed step-by-step solutions.</p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-gray-700 bg-gray-800"></div>)}
                    <div className="w-6 h-6 rounded-full border border-gray-700 bg-gray-600 flex items-center justify-center text-[8px] text-white font-bold">+12</div>
                  </div>
                </Link>

                {/* Topic Wise Card */}
                <Link to="/engineering/topic-wise" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl text-gray-300 group-hover:text-white group-hover:bg-gray-700 transition-all">
                      <i className="fa fa-bullseye"></i>
                    </div>
                    <span className="px-2 py-1 bg-gray-800 rounded text-[10px] font-bold text-gray-300 uppercase border border-gray-700">Focus</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Precision Practice</h4>
                  <p className="text-sm text-gray-400 mb-6">Drill down into specific topics to strengthen weak areas.</p>
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(5)].map((_, i) => <div key={i} className={`h-1 rounded-full ${i < 3 ? 'bg-gray-500' : 'bg-gray-800'}`}></div>)}
                  </div>
                  <div className="mt-2 text-[10px] text-gray-500 text-right">Mastery Level</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-10 pb-10">
          <Link to="/dashboard" className="group flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-black group-hover:shadow-sm transition-all">
              <i className="fa fa-arrow-left text-sm"></i>
            </div>
            <span className="font-bold">Return to Dashboard</span>
          </Link>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <span className="text-sm text-gray-400">© 2026 Engineering Platform</span>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}