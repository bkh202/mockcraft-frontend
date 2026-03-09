import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";
// ── INLINED COMPONENTS FOR CANVAS COMPATIBILITY ─────────────────────────────

const StatCard = ({ label, value, icon }) => (
  <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-slate-500 mb-0.5">{label}</p>
      <p className="text-2xl font-black text-slate-900 leading-none">{value}</p>
    </div>
  </div>
);

const CategoryCard = ({ title, count, color, link }) => (
  <Link to={link} className={`group block p-6 rounded-2xl text-white ${color} hover:opacity-95 transition-all duration-300 h-full shadow-md hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}>
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
    <div className="relative z-10">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-white/80 font-medium">{count}</p>
    </div>
  </Link>
);

const UpgradePopup = ({ feature, onClose }) => (
  <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
    <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95">
      <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">⭐</div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">Unlock Premium</h2>
      <p className="text-slate-500 mb-6 font-medium">Get access to {feature?.title || "this feature"} and supercharge your preparation.</p>
      <div className="flex gap-3">
        <button onClick={onClose} className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 transition-colors">Cancel</button>
        <button className="flex-1 px-4 py-3 bg-linear-to-r from-amber-400 to-orange-500 text-white font-black rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20">Upgrade Now</button>
      </div>
    </div>
  </div>
);
// ─────────────────────────────────────────────────────────────────────────────

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [upgradePopup, setUpgradePopup] = useState(null);

  // Check premium status
  const getTierFromToken = () => {
    try {
      const saved = localStorage.getItem("userTier");
      if (saved === "PREMIUM") return true;
      const token = localStorage.getItem("accessToken");
      if (!token) return false;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload?.tier === "PREMIUM";
    } catch {
      return false;
    }
  };

  const [premiumUser, setPremiumUser] = useState(getTierFromToken);
  const isPremium = () => premiumUser;

  useEffect(() => {
    // 🛑 Absolute URL for Canvas compilation
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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-blue-600 mb-4"></div>
        <p className="text-slate-500 font-medium animate-pulse">Loading your dashboard...</p>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="text-center max-w-md p-8 bg-white rounded-3xl shadow-lg border border-slate-100">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-2">Unable to load dashboard</h3>
          <p className="text-slate-500 mb-6 font-medium">Please try refreshing the page or contact support if the problem persists.</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  const premiumModules = [
    { title: "AI Mock Interview", count: "Real-time AI Feedback", color: "from-indigo-600 to-blue-700", link: "/ai-mock-interview", badge: "PREMIUM" },
    { title: "Resume to Portfolio", count: "1-Click Web Builder", color: "from-fuchsia-600 to-pink-600", link: "/resume-to-portfolio-dashboard", badge: "PREMIUM" },
    { title: "Resume Analyzer", count: "ATS Scoring Engine", color: "from-amber-500 to-orange-600", link: "/resume-analyzer", badge: "PREMIUM" },
    { title: "Placement Quiz", count: "Company Specific", color: "from-emerald-500 to-teal-600", link: "/premium/engineering", badge: "PREMIUM" },
  ];

  const freeModules = [
    { title: "Aptitude Tests", count: "Quantitative & Logic", color: "from-slate-700 to-slate-800", link: "/aptitude", badge: "FREE" },
    { title: "Government Exams", count: "SSC, Banking & More", color: "from-blue-500 to-cyan-600", link: "/government", badge: "FREE" },
    { title: "Engineering Core", count: "GATE, CS/IT, Mech", color: "from-purple-500 to-indigo-600", link: "/engineering", badge: "FREE" },
    { title: "Medical Entrance", count: "NEET Prep", color: "from-rose-500 to-red-600", link: "/medical", badge: "FREE" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 font-sans">

      {upgradePopup && (
        <UpgradePopup feature={upgradePopup} onClose={() => setUpgradePopup(null)} />
      )}

      <div className="max-w-7xl mx-auto space-y-8">

        {/* ── 1. HEADER & MAIN STATS ── */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-linear-to-r from-white to-blue-50/50">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Student Dashboard
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Welcome back, <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">{dashboard?.profile?.name || "Learner"}</span>!
              </h1>
              <p className="text-slate-500 font-medium mt-1">Here is your learning trajectory for today.</p>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded-xl text-2xl">🔥</div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Streak</p>
                <p className="text-xl font-black text-slate-800">3 Days</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50/30">
            <StatCard icon="🎯" label="Avg. Accuracy" value={dashboard?.recentAttempts?.[0]?.accuracy ? `${dashboard.recentAttempts[0].accuracy}%` : "0%"} />
            <StatCard icon="📚" label="Tests Completed" value={dashboard?.recentAttempts?.length || 0} />
            <StatCard icon="⚠️" label="Weak Topics" value={dashboard?.weakTopics?.length || 0} />
            <StatCard icon="⚡" label="Current Level" value={dashboard?.recentAttempts?.[0]?.mode || "Beginner"} />
          </div>
        </div>

        {/* ── 2. NEW AI INSIGHTS & RECOMMENDATIONS (Replaced Quick Actions) ── */}
        <div className="bg-linear-to-br from-indigo-900 to-slate-900 rounded-3xl shadow-lg p-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"></div>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 border border-white/10">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2 flex items-center gap-2">
                <span className="text-2xl">🧠</span> AI Learning Path
              </h2>
              <p className="text-indigo-200 font-medium mb-4">
                Based on your last attempt, we noticed you're struggling with specific areas. Targeted practice is the fastest way to improve.
              </p>

              {dashboard?.weakTopics?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-bold text-slate-400 py-1.5 mr-2">Focus Areas:</span>
                  {dashboard.weakTopics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg text-sm font-semibold">
                      {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-lg text-sm font-semibold">
                    You're doing great! Try a Full Mock Test next.
                  </span>
                </div>
              )}
            </div>

            <Link to="/premium/engineering/recommended-quiz">
              <button className="shrink-0 px-6 py-3.5 bg-white text-indigo-900 font-black rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                Start Targeted Practice
              </button>
            </Link>
          </div>
        </div>

        {/* ── 3. PREMIUM MODULES ── */}
        <div className="bg-linear-to-b from-amber-50 to-white rounded-3xl shadow-sm border border-amber-200/60 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-1 flex items-center gap-2">
                ✨ Pro Tools
              </h2>
              <p className="text-slate-500 font-medium">Gain the unfair advantage in your career journey.</p>
            </div>
            {!isPremium() && (
              <span className="inline-flex items-center px-4 py-2 bg-linear-to-r from-amber-400 to-orange-500 text-white rounded-xl text-sm font-black shadow-md shadow-orange-500/20">
                UPGRADE REQUIRED
              </span>
            )}
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumModules.map((module, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={(e) => handlePremiumClick(e, module)}>
                <CategoryCard
                  title={module.title}
                  count={module.count}
                  color={`bg-gradient-to-br ${module.color}`}
                  link={isPremium() ? module.link : "#"}
                />

                {!isPremium() && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0v1h2V7a5 5 0 00-5-5z" />
                    </svg>
                  </div>
                )}

                {!isPremium() && (
                  <div className="absolute inset-0 bg-slate-900/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-amber-400 text-slate-950 text-sm font-black px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Unlock Access
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── 4. FREE MODULES (Takes 2/3 width on desktop) ── */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-900 mb-1">🎯 Practice Banks</h2>
              <p className="text-slate-500 text-sm font-medium">Free AI-powered question banks</p>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {freeModules.map((module, index) => (
                <CategoryCard
                  key={index}
                  title={module.title}
                  count={module.count}
                  color={`bg-gradient-to-br ${module.color}`}
                  link={module.link}
                />
              ))}
            </div>
          </div>

          {/* ── 5. RECENT ACTIVITY (Takes 1/3 width on desktop) ── */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-black text-slate-900">📝 Activity</h2>
              <Link to="/history" className="text-sm font-bold text-blue-600 hover:text-blue-800">View All</Link>
            </div>

            <div className="p-6 flex-1 bg-slate-50/50">
              {dashboard?.recentAttempts?.length > 0 ? (
                <div className="space-y-4">
                  {dashboard.recentAttempts.slice(0, 4).map((attempt, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${attempt.correct ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                          {attempt.correct ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm line-clamp-1">{attempt.subject}</p>
                          <p className="text-xs font-medium text-slate-500 line-clamp-1">{attempt.topic}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="font-black text-slate-900">{attempt.accuracy}%</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{attempt.mode}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-8 opacity-60">
                  <div className="text-4xl mb-3">👻</div>
                  <p className="text-sm font-bold text-slate-500">No recent activity.</p>
                  <p className="text-xs font-medium text-slate-400 mt-1">Take a test to see history here.</p>
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