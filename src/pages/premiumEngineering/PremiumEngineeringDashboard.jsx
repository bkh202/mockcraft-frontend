// EngineeringHome.jsx – Ultra-Premium Edition (Bento / High-Tech)
import { Link } from "react-router-dom";

export default function PremiumEngineeringDashboard() {
  const branches = [
    {
      title: "Computer Science",
      subtitle: "CSE / IT",
      path: "/premium/engineering/csdash",
      icon: "💻",
      questionCount: "AI-Based Questions",
      subjects: ["DSA", "OS", "DBMS", "Networks", "Algorithms"],
      gradient: "from-blue-600 to-cyan-500",
      bgColor: "bg-blue-50/50",
      borderColor: "group-hover:border-blue-500/50",
      shadowColor: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Electronics",
      subtitle: "EC / ECE",
      path: "/premium/engineering/ecedash",
      icon: "🔌",
      questionCount: "AI-Based Questions",
      subjects: ["Digital Electronics", "Analog Circuits", "Signals", "VLSI"],
      gradient: "from-violet-600 to-fuchsia-500",
      bgColor: "bg-violet-50/50",
      borderColor: "group-hover:border-violet-500/50",
      shadowColor: "group-hover:shadow-violet-500/20"
    },
    {
      title: "Mechanical",
      subtitle: "ME",
      path: "/premium/engineering/medash",
      icon: "⚙️",
      questionCount: "AI-Based Questions",
      subjects: ["Thermodynamics", "Fluid Mech", "Machine Design", "CAD"],
      gradient: "from-orange-600 to-red-500",
      bgColor: "bg-orange-50/50",
      borderColor: "group-hover:border-orange-500/50",
      shadowColor: "group-hover:shadow-orange-500/20"
    },
    {
      title: "Civil",
      subtitle: "CE",
      path: "/premium/engineering/civildash",
      icon: "🏗️",
      questionCount: "AI-Based Questions",
      subjects: ["Structural", "Geotech", "Transportation", "Surveying"],
      gradient: "from-emerald-600 to-teal-500",
      bgColor: "bg-emerald-50/50",
      borderColor: "group-hover:border-emerald-500/50",
      shadowColor: "group-hover:shadow-emerald-500/20"
    },
    {
      title: "Electrical",
      subtitle: "EE",
      path: "/premium/engineering/eedash",
      icon: "⚡",
      questionCount: "AI-Based Questions",
      subjects: ["Power Systems", "Machines", "Control Systems", "EMF"],
      gradient: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50/50",
      borderColor: "group-hover:border-amber-500/50",
      shadowColor: "group-hover:shadow-amber-500/20",
      highlight: true
    },
    {
      title: "Common Subjects",
      subtitle: "All Branches",
      path: "/premium/engineering/common",
      icon: "📚",
      questionCount: "AI-Based Questions",
      subjects: ["Maths", "Physics", "Chemistry", "English"],
      gradient: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50/50",
      borderColor: "group-hover:border-indigo-500/50",
      shadowColor: "group-hover:shadow-indigo-500/20",
      highlight: true
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      
      {/* Technical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="fixed inset-0 z-0 bg-linear-to-b from-slate-50/0 via-slate-50/80 to-slate-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-350 mx-auto p-6 md:p-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-full border border-slate-200 shadow-sm">
             <Link to="/dashboard" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               Dashboard
             </Link>
             <span className="text-slate-300">|</span>
             <span className="text-slate-900">Engineering Wing</span>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
             <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 uppercase tracking-wider">
               System Online
             </span>
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </div>

        {/* Hero Section with Glassmorphism */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                Excellence Hub
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Navigate your academic journey with precision. Our AI-driven engine adapts to your performance, providing real-time analytics and personalized mock tests.
            </p>
          </div>

          {/* Right side: action buttons + stats */}
          <div className="space-y-4">
            {/* New Action Buttons Card */}
            <div className="bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-xl shadow-slate-200/50 p-4 flex flex-wrap justify-around items-center gap-3">
              <Link 
                to="/history/premium" 
                className="flex flex-col items-center p-3 rounded-xl hover:bg-white/80 transition-colors min-w-20"
              >
                <span className="text-2xl text-indigo-600 mb-1">📈</span>
                <span className="text-xs font-semibold text-slate-700">Analytics</span>
              </Link>
              <Link 
                to="/premium/engineering/recommended-quiz" 
                className="flex flex-col items-center p-3 rounded-xl hover:bg-white/80 transition-colors min-w-20"
              >
                <span className="text-2xl text-purple-600 mb-1">🎯</span>
                <span className="text-xs font-semibold text-slate-700">Recommended</span>
              </Link>
              <Link 
                to="/premium/engineering/attempted-quiz" 
                className="flex flex-col items-center p-3 rounded-xl hover:bg-white/80 transition-colors min-w-20"
              >
                <span className="text-2xl text-emerald-600 mb-1">📋</span>
                <span className="text-xs font-semibold text-slate-700">Attempted</span>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-xl shadow-slate-200/50">
              {[
                { label: "Questions", value: "AI-Gen", icon: "📊", color: "text-indigo-600" },
                { label: "Disciplines", value: "06", icon: "🏛️", color: "text-purple-600" },
                { label: "Subjects", value: "50+", icon: "📚", color: "text-orange-600" },
                { label: "Tests", value: "Live", icon: "⏱️", color: "text-emerald-600" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white transition-colors cursor-default">
                  <span className={`text-2xl mb-2 ${stat.color} drop-shadow-sm`}>{stat.icon}</span>
                  <span className="text-xl font-bold text-slate-800">{stat.value}</span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Section - Bento Grid Style */}
        <div className="mb-20">
           <div className="flex items-end justify-between mb-8 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Core Branches</h2>
                <p className="text-slate-500 mt-1">Select your primary discipline</p>
              </div>
              <div className="hidden sm:block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Updated for 2026 Curriculum
              </div>
           </div>

           {/* Highlighted Large Cards */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {branches.filter(b => b.highlight).map((branch, index) => (
                <Link 
                  key={index} 
                  to={branch.path}
                  className={`group relative overflow-hidden rounded-4xl bg-white border border-slate-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${branch.borderColor}`}
                >
                   {/* Dynamic Gradient Glow */}
                   <div className={`absolute inset-0 bg-linear-to-br ${branch.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                   <div className={`absolute -right-20 -top-20 w-64 h-64 bg-linear-to-br ${branch.gradient} opacity-5 blur-3xl rounded-full`}></div>
                   
                   <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-start justify-between">
                         <div className="flex items-center gap-5">
                            <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${branch.gradient} flex items-center justify-center text-4xl shadow-lg shadow-indigo-500/10 text-white`}>
                               {branch.icon}
                            </div>
                            <div>
                               <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{branch.title}</h3>
                               <p className="text-slate-500 font-medium">{branch.subtitle}</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-1 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                            Active
                         </div>
                      </div>

                      <div className="mt-8">
                         <div className="flex flex-wrap gap-2">
                            {branch.subjects.map((subj, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600 group-hover:border-indigo-100 group-hover:bg-white transition-colors">
                                {subj}
                              </span>
                            ))}
                         </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                         <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                           {branch.questionCount}
                         </span>
                         <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/30">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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
                   className={`group relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${branch.shadowColor}`}
                 >
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-500/10 transition-colors pointer-events-none"></div>
                    
                    <div>
                       <div className="flex items-center justify-between mb-5">
                          <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${branch.bgColor} border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                             {branch.icon}
                          </div>
                       </div>
                       
                       <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{branch.title}</h3>
                       <p className="text-sm text-slate-500 mb-4">{branch.subtitle}</p>
                       
                       <div className="flex flex-wrap gap-1.5 mb-4">
                          {branch.subjects.slice(0, 2).map((s, i) => (
                             <span key={i} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                               {s}
                             </span>
                          ))}
                          {branch.subjects.length > 2 && (
                             <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">+{branch.subjects.length - 2}</span>
                          )}
                       </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 group-hover:text-slate-900 transition-colors pt-4 border-t border-slate-50">
                       <span>View Modules</span>
                       <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                 </Link>
              ))}
           </div>
        </div>

        {/* Command Center / Quick Actions - Dark Mode Contrast */}
        <div className="mb-20">
           <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-slate-900/20">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-100 h-100 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10">
                 <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                       <h3 className="text-3xl font-bold text-white mb-2">Command Center</h3>
                       <p className="text-slate-400">Quick access to high-priority learning modules.</p>
                    </div>
                    <div className="flex gap-2">
                       <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                       <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                       <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Mock Test Card */}
                    <Link to="/engineering/mock-tests" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                       <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-2xl text-indigo-300 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                             ⏱️
                          </div>
                          <span className="px-2 py-1 bg-indigo-500/20 rounded text-[10px] font-bold text-indigo-300 uppercase border border-indigo-500/30">Timed</span>
                       </div>
                       <h4 className="text-lg font-bold text-white mb-2">Full Simulation</h4>
                       <p className="text-sm text-slate-400 mb-6">3-hour full syllabus mock tests with percentile prediction.</p>
                       <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 w-2/3"></div>
                       </div>
                       <div className="mt-2 text-[10px] text-slate-500 text-right">Adaptive Difficulty</div>
                    </Link>

                    {/* PYQ Card */}
                    <Link to="/engineering/previous-year" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                       <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-2xl text-emerald-300 group-hover:text-white group-hover:bg-emerald-500 transition-all">
                             📄
                          </div>
                          <span className="px-2 py-1 bg-emerald-500/20 rounded text-[10px] font-bold text-emerald-300 uppercase border border-emerald-500/30">Solved</span>
                       </div>
                       <h4 className="text-lg font-bold text-white mb-2">Archives (10+ Yrs)</h4>
                       <p className="text-sm text-slate-400 mb-6">Previous year papers with detailed step-by-step solutions.</p>
                       <div className="flex -space-x-2">
                          {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-slate-800 bg-slate-700"></div>)}
                          <div className="w-6 h-6 rounded-full border border-slate-800 bg-emerald-600 flex items-center justify-center text-[8px] text-white font-bold">+12</div>
                       </div>
                    </Link>

                    {/* Topic Wise Card */}
                    <Link to="/engineering/topic-wise" className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                       <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-2xl text-amber-300 group-hover:text-white group-hover:bg-amber-500 transition-all">
                             🎯
                          </div>
                          <span className="px-2 py-1 bg-amber-500/20 rounded text-[10px] font-bold text-amber-300 uppercase border border-amber-500/30">Focus</span>
                       </div>
                       <h4 className="text-lg font-bold text-white mb-2">Precision Practice</h4>
                       <p className="text-sm text-slate-400 mb-6">Drill down into specific topics to strengthen weak areas.</p>
                       <div className="grid grid-cols-5 gap-1">
                          {[...Array(5)].map((_, i) => <div key={i} className={`h-1 rounded-full ${i < 3 ? 'bg-amber-500' : 'bg-slate-700'}`}></div>)}
                       </div>
                       <div className="mt-2 text-[10px] text-slate-500 text-right">Mastery Level</div>
                    </Link>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-10 pb-10">
           <Link to="/dashboard" className="group flex items-center gap-3 text-slate-500 hover:text-indigo-600 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-indigo-200 group-hover:shadow-md transition-all">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              </div>
              <span className="font-semibold">Return to Dashboard</span>
           </Link>
           
           <div className="mt-4 md:mt-0 flex items-center gap-6">
              <span className="text-sm text-slate-400">© 2026 Engineering Platform</span>
              <div className="flex gap-4">
                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}