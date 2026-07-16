import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";

// ─── Stat Card ────────────────────────────────────────────────────────
const StatCard = ({ label, value, icon }) => (
  <div className="p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 sm:gap-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 text-black flex items-center justify-center text-xl sm:text-2xl shrink-0 border border-gray-200">
      <i className={`fa ${icon}`}></i>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mb-0.5 sm:mb-1">{label}</p>
      <p className="text-xl sm:text-2xl lg:text-3xl font-black text-black leading-tight truncate">{value}</p>
    </div>
  </div>
);

// ─── Category Card ──────────────────────────────────────────────────
const CategoryCard = ({ title, count, link, premium = false }) => (
  <Link
    to={link}
    className={`group block p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
  >
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-100 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
    <div className="relative z-10">
      <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-black mb-1 sm:mb-2 leading-tight break-words">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 font-medium break-words">{count}</p>
      {premium && (
        <span className="inline-block mt-2 text-xs font-black text-white bg-black px-3 py-1 rounded-full border border-gray-300">
          PRO
        </span>
      )}
    </div>
  </Link>
);

// ─── Upgrade Popup ──────────────────────────────────────────────────
const UpgradePopup = ({ feature, onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl">
        <div className="w-16 h-16 bg-gray-100 text-black rounded-full flex items-center justify-center mx-auto mb-5 text-3xl border border-gray-200">
          <i className="fa fa-star"></i>
        </div>
        <h2 className="text-2xl font-black text-black mb-3">Unlock Premium</h2>
        <p className="text-gray-700 mb-6 text-base font-light">
          Get access to {feature?.title || "this feature"}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-5 py-3.5 border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50 text-sm transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              navigate("/upgrade");
            }}
            className="flex-1 px-5 py-3.5 bg-black text-white font-black rounded-xl hover:bg-gray-800 text-sm transition shadow-sm"
          >
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Dashboard ──────────────────────────────────────────────────
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
    } catch {
      return false;
    }
  };

  const [premiumUser] = useState(getTierFromToken);
  const isPremium = () => premiumUser;

  useEffect(() => {
    axios
      .get("/user/dashboard")
      .then((res) => {
        setDashboard(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-black mb-5"></div>
        <p className="text-gray-700 font-semibold text-lg text-center">Loading your dashboard...</p>
      </div>
    );
  }

  // Error
  if (!dashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center max-w-sm p-6 sm:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
          <div className="w-16 h-16 bg-gray-100 text-black rounded-full flex items-center justify-center mx-auto mb-5 border border-gray-200">
            <i className="fa fa-exclamation-triangle text-3xl"></i>
          </div>
          <h3 className="text-2xl font-black text-black mb-3">Unable to load dashboard</h3>
          <p className="text-gray-700 mb-6 text-base">Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-5 py-3.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition text-base"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  const premiumModules = [
    {
      title: "AI Mock Interview",
      count: "Real-time AI Feedback",
      link: "/ai-mock-interview",
    },
    {
      title: "Resume to Portfolio",
      count: "1-Click Web Builder",
      link: "/resume-to-portfolio-dashboard",
    },
    {
      title: "Resume Analyzer",
      count: "ATS Scoring Engine",
      link: "/resume-analyzer",
    },
    {
      title: "Placement Quiz",
      count: "Company Specific",
      link: "/premium/engineering",
    },
  ];

  const freeModules = [
    {
      title: "Aptitude Tests",
      count: "Quantitative & Logic",
      link: "/aptitude",
    },
    {
      title: "Government Exams",
      count: "SSC, Banking & More",
      link: "/government",
    },
    {
      title: "Engineering Core",
      count: "GATE, CS/IT, Mech",
      link: "/engineering",
    },
    {
      title: "Medical Entrance",
      count: "NEET Prep",
      link: "/medical",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 space-y-6 sm:space-y-8">
        {upgradePopup && (
          <UpgradePopup feature={upgradePopup} onClose={() => setUpgradePopup(null)} />
        )}

        {/* ─── 1. HEADER ─── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-10 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                Student Dashboard
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black tracking-tight truncate">
                Welcome,{" "}
                <span className="text-gray-800">
                  {dashboard?.profile?.name || "Learner"}
                </span>
                !
              </h1>
              <p className="text-gray-600 font-light mt-1 sm:mt-2 text-base sm:text-lg">
                Here is your learning trajectory for today.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white p-3 sm:p-4 lg:p-5 rounded-2xl shadow-sm border border-gray-200 self-start sm:self-auto shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 flex items-center justify-center rounded-xl text-black border border-gray-200 text-xl sm:text-2xl">
                <i className="fa fa-fire"></i>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Streak</p>
                <p className="text-xl sm:text-2xl font-black text-black">3 Days</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="p-4 sm:p-6 lg:p-10 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4">
            <StatCard icon="fa-bullseye" label="Avg. Accuracy" value={dashboard?.recentAttempts?.[0]?.accuracy ? `${dashboard.recentAttempts[0].accuracy}%` : "0%"} />
            <StatCard icon="fa-book" label="Tests Done" value={dashboard?.recentAttempts?.length || 0} />
            <StatCard icon="fa-exclamation-triangle" label="Weak Topics" value={dashboard?.weakTopics?.length || 0} />
            <StatCard icon="fa-bolt" label="Level" value={dashboard?.recentAttempts?.[0]?.mode || "Beginner"} />
          </div>
        </div>

        {/* ─── 2. AI LEARNING PATH ─── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-2 flex items-center gap-3 flex-wrap">
                <i className="fa fa-brain text-black"></i> AI Learning Path
              </h2>
              <p className="text-gray-600 font-light mb-3 sm:mb-4 text-base sm:text-lg">
                Based on your last attempt, targeted practice is the fastest way to improve.
              </p>
              {dashboard?.weakTopics?.length > 0 ? (
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="text-sm sm:text-base font-bold text-gray-700 py-1.5 mr-1">Focus:</span>
                  {dashboard.weakTopics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 border border-gray-200 text-black rounded-lg text-xs sm:text-sm font-semibold break-words"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="px-4 py-2 bg-gray-100 border border-gray-200 text-black rounded-lg text-sm font-semibold inline-block">
                  You're doing great! Try a Full Mock Test next.
                </span>
              )}
            </div>
            <Link to="/premium/engineering/recommended-quiz" className="shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-black text-white font-black rounded-xl hover:bg-gray-800 transition text-sm sm:text-base shadow-sm">
                Start Targeted Practice
              </button>
            </Link>
          </div>
        </div>

        {/* ─── 3. PREMIUM MODULES ─── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-10 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-1 flex items-center gap-3 flex-wrap">
                <i className="fa fa-star text-black"></i> Pro Tools
              </h2>
              <p className="text-gray-600 font-light text-base sm:text-lg">
                Gain the unfair advantage in your career journey.
              </p>
            </div>
            {!isPremium() && (
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-xl text-xs sm:text-sm font-black shadow-sm self-start sm:self-auto shrink-0 border border-gray-300">
                UPGRADE REQUIRED
              </span>
            )}
          </div>
          <div className="p-4 sm:p-6 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {premiumModules.map((module, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={(e) => handlePremiumClick(e, module)}
              >
                <CategoryCard
                  title={module.title}
                  count={module.count}
                  link={isPremium() ? module.link : "#"}
                  premium={!isPremium()}
                />
                {!isPremium() && (
                  <>
                    <div className="absolute top-4 right-4 bg-gray-100 backdrop-blur-md p-1.5 rounded-full border border-gray-200">
                      <i className="fa fa-lock text-black text-sm"></i>
                    </div>
                    <div className="absolute inset-0 bg-white/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                      <span className="bg-black text-white text-xs sm:text-sm font-black px-3 sm:px-4 py-2 rounded-full shadow-lg pointer-events-auto">
                        Unlock Access
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ─── 4. FREE MODULES + ACTIVITY ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black mb-1 flex items-center gap-2">
                <i className="fa fa-bullseye text-black"></i> Practice Banks
              </h2>
              <p className="text-gray-600 text-base sm:text-lg font-light">Free AI-powered question banks</p>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freeModules.map((module, index) => (
                <CategoryCard
                  key={index}
                  title={module.title}
                  count={module.count}
                  link={module.link}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black flex items-center gap-2">
                <i className="fa fa-clock text-black"></i> Activity
              </h2>
              <Link to="/history" className="text-sm sm:text-base font-bold text-gray-600 hover:text-black transition">
                View All
              </Link>
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              {dashboard?.recentAttempts?.length > 0 ? (
                <div className="space-y-4">
                  {dashboard.recentAttempts.slice(0, 4).map((attempt, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-gray-200 ${
                            attempt.correct
                              ? "bg-gray-100 text-black"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {attempt.correct ? (
                            <i className="fa fa-check text-lg"></i>
                          ) : (
                            <i className="fa fa-times text-lg"></i>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-black text-sm sm:text-base truncate">{attempt.subject}</p>
                          <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{attempt.topic}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-0 sm:ml-3">
                        <p className="font-black text-black text-lg sm:text-xl">{attempt.accuracy}%</p>
                        <p className="text-xs font-bold text-gray-500 uppercase">{attempt.mode}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-10 opacity-60">
                  <div className="text-4xl mb-3">
                    <i className="fa fa-ghost text-gray-300"></i>
                  </div>
                  <p className="text-base font-bold text-gray-500">No recent activity.</p>
                  <p className="text-sm font-medium text-gray-400 mt-1">Take a test to see history here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );R
};

export default Dashboard;