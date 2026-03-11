import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";

const StatCard = ({ label, value, icon }) => (
  <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs font-semibold text-gray-500 mb-0.5 truncate">{label}</p>
      <p className="text-xl font-black text-gray-900 leading-none">{value}</p>
    </div>
  </div>
);

const CategoryCard = ({ title, count, color, link }) => (
  <Link to={link} className={`group block p-5 rounded-2xl text-white ${color} hover:opacity-95 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}>
    <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
    <div className="relative z-10">
      <h3 className="text-base font-bold mb-1 leading-tight">{title}</h3>
      <p className="text-xs text-white/80 font-medium">{count}</p>
    </div>
  </Link>
);

const UpgradePopup = ({ feature, onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl">
        <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⭐</div>
        <h2 className="text-xl font-black text-gray-900 mb-2">Unlock Premium</h2>
        <p className="text-gray-500 mb-5 text-sm font-medium">Get access to {feature?.title || "this feature"}.</p>
        <div className="flex gap-3">
          <button onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 text-sm">
            Cancel
          </button>
          <button
            onClick={() => { onClose(); navigate('/upgrade'); }}
            className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-sm transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [upgradePopup, setUpgradePopup] = useState(null);

  const getTierFromToken = () => {
    try {
      const hasPremiumAccess = localStorage.getItem("hasPremiumAccess");
      if (hasPremiumAccess === "true") return true;
      const saved = localStorage.getItem("userTier");
      if (saved === "PREMIUM") return true;
      const token = localStorage.getItem("accessToken");
      if (!token) return false;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload?.tier === "PREMIUM";
    } catch { return false; }
  };

  const [premiumUser] = useState(getTierFromToken);
  const isPremium = () => premiumUser;

  useEffect(() => {
    axios.get("/user/dashboard")
      .then(res => { setDashboard(res.data); setLoading(false); })
      .catch(err => { console.log(err); setLoading(false); });
  }, []);

  const handlePremiumClick = (e, module) => {
    if (!isPremium()) {
      e.preventDefault();
      e.stopPropagation();
      setUpgradePopup(module);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-indigo-600 mb-4"></div>
        <p className="text-gray-500 font-medium text-sm">Loading your dashboard...</p>
      </div>
    );
  }

  // Error
  if (!dashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center max-w-sm p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
          <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-black text-gray-900 mb-2">Unable to load dashboard</h3>
          <p className="text-gray-500 mb-5 text-sm">Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()}
            className="w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition text-sm">
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  const premiumModules = [
    { title: "AI Mock Interview",    count: "Real-time AI Feedback", color: "from-indigo-600 to-blue-700",    link: "/ai-mock-interview" },
    { title: "Resume to Portfolio",  count: "1-Click Web Builder",   color: "from-fuchsia-600 to-pink-600",   link: "/resume-to-portfolio-dashboard" },
    { title: "Resume Analyzer",      count: "ATS Scoring Engine",    color: "from-amber-500 to-orange-600",   link: "/resume-analyzer" },
    { title: "Placement Quiz",       count: "Company Specific",      color: "from-emerald-500 to-teal-600",   link: "/premium/engineering" },
  ];

  const freeModules = [
    { title: "Aptitude Tests",     count: "Quantitative & Logic", color: "from-slate-600 to-slate-700",   link: "/aptitude" },
    { title: "Government Exams",   count: "SSC, Banking & More",  color: "from-blue-500 to-cyan-600",     link: "/government" },
    { title: "Engineering Core",   count: "GATE, CS/IT, Mech",   color: "from-purple-500 to-indigo-600", link: "/engineering" },
    { title: "Medical Entrance",   count: "NEET Prep",            color: "from-rose-500 to-red-600",      link: "/medical" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6">

        {upgradePopup && <UpgradePopup feature={upgradePopup} onClose={() => setUpgradePopup(null)} />}

        {/* ── 1. HEADER ── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white to-indigo-50/50">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span> Student Dashboard
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight truncate">
                Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{dashboard?.profile?.name || "Learner"}</span>!
              </h1>
              <p className="text-gray-500 font-medium mt-1 text-sm">Here is your learning trajectory for today.</p>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-100 self-start sm:self-auto shrink-0">
              <div className="w-10 h-10 bg-orange-100 flex items-center justify-center rounded-xl text-xl">🔥</div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Streak</p>
                <p className="text-lg font-black text-gray-800">3 Days</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-gray-50/30">
            <StatCard icon="🎯" label="Avg. Accuracy" value={dashboard?.recentAttempts?.[0]?.accuracy ? `${dashboard.recentAttempts[0].accuracy}%` : "0%"} />
            <StatCard icon="📚" label="Tests Done"    value={dashboard?.recentAttempts?.length || 0} />
            <StatCard icon="⚠️" label="Weak Topics"  value={dashboard?.weakTopics?.length || 0} />
            <StatCard icon="⚡" label="Level"         value={dashboard?.recentAttempts?.[0]?.mode || "Beginner"} />
          </div>
        </div>

        {/* ── 2. AI LEARNING PATH ── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-indigo-100 overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-indigo-50 to-purple-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
                <span>🧠</span> AI Learning Path
              </h2>
              <p className="text-gray-500 font-medium mb-3 text-sm">
                Based on your last attempt, targeted practice is the fastest way to improve.
              </p>
              {dashboard?.weakTopics?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold text-gray-400 py-1.5 mr-1">Focus:</span>
                  {dashboard.weakTopics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-xs font-semibold">{topic}</span>
                  ))}
                </div>
              ) : (
                <span className="px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-lg text-xs font-semibold">
                  You're doing great! Try a Full Mock Test next.
                </span>
              )}
            </div>
            <Link to="/premium/engineering/recommended-quiz" className="shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl transition text-sm shadow-sm">
                Start Targeted Practice
              </button>
            </Link>
          </div>
        </div>

        {/* ── 3. PREMIUM MODULES ── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-indigo-100 overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col xs:flex-row xs:items-center justify-between gap-3 bg-indigo-50/40">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-0.5 flex items-center gap-2">✨ Pro Tools</h2>
              <p className="text-gray-500 font-medium text-xs sm:text-sm">Gain the unfair advantage in your career journey.</p>
            </div>
            {!isPremium() && (
              <span className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-black shadow-sm self-start xs:self-auto shrink-0">
                UPGRADE REQUIRED
              </span>
            )}
          </div>
          <div className="p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {premiumModules.map((module, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={(e) => handlePremiumClick(e, module)}>
                <CategoryCard title={module.title} count={module.count} color={`bg-gradient-to-br ${module.color}`} link={isPremium() ? module.link : "#"} />
                {!isPremium() && (
                  <>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1 rounded-full">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0v1h2V7a5 5 0 00-5-5z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-indigo-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                      <span className="bg-indigo-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg pointer-events-auto">Unlock Access</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. FREE MODULES + ACTIVITY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

          <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h2 className="text-lg font-black text-gray-900 mb-0.5">🎯 Practice Banks</h2>
              <p className="text-gray-500 text-xs font-medium">Free AI-powered question banks</p>
            </div>
            <div className="p-4 sm:p-5 grid grid-cols-2 gap-3">
              {freeModules.map((module, index) => (
                <CategoryCard key={index} title={module.title} count={module.count} color={`bg-gradient-to-br ${module.color}`} link={module.link} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-black text-gray-900">📝 Activity</h2>
              <Link to="/history" className="text-xs font-bold text-indigo-600 hover:text-indigo-800">View All</Link>
            </div>
            <div className="p-4 sm:p-5 bg-gray-50/50">
              {dashboard?.recentAttempts?.length > 0 ? (
                <div className="space-y-3">
                  {dashboard.recentAttempts.slice(0, 4).map((attempt, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${attempt.correct ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                          {attempt.correct ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 text-xs truncate">{attempt.subject}</p>
                          <p className="text-xs font-medium text-gray-400 truncate">{attempt.topic}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="font-black text-gray-900 text-sm">{attempt.accuracy}%</p>
                        <p className="text-xs font-bold text-gray-400 uppercase">{attempt.mode}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-8 opacity-60">
                  <div className="text-3xl mb-2">👻</div>
                  <p className="text-xs font-bold text-gray-500">No recent activity.</p>
                  <p className="text-xs font-medium text-gray-400 mt-1">Take a test to see history here.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;