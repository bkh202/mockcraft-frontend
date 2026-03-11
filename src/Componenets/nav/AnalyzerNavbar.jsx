import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function AnalyzerNavbar() {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch user details
    axiosInstance.get("/user/me")
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Analyzer specific links
  const navLinks = [
    { label: "New Scan", icon: "⚡", path: "/resume-analyzer" },
    { label: "Scan History", icon: "📂", path: "/analyzer/history" },
    { label: "AI Interview", icon: "🎙️", path: "/ai-mock-interview" },
    { label: "Pro Plans", icon: "💎", path: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left: Logo and Brand */}
          <div className="flex items-center">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden mr-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/analyzer/upload" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0b0f19]"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-black bg-linear-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  AI Analyzer
                </h1>
                <p className="text-xs text-slate-500 font-bold tracking-wider uppercase">by MockCraft</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-10 items-center space-x-2">
              {navLinks.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                      isActive 
                        ? "text-teal-700 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400 shadow-sm" 
                        : "text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Credits & User Profile */}
          <div className="flex items-center gap-4">
            
            {/* Scans Left Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Scans Left:</span>
              <span className="text-sm font-black text-teal-600 dark:text-teal-400">4/5</span>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 flex items-center justify-center text-teal-700 dark:text-teal-400 font-black border border-teal-200 dark:border-teal-800">
                  {user?.fullName?.charAt(0) || "U"}
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-700">
                    <p className="text-sm font-black text-slate-900 dark:text-white">{user?.fullName || "Awesome User"}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email || "user@mockcraft.com"}</p>
                  </div>
                  <div className="p-2">
                    <button onClick={() => navigate('/resume-to-portfolio-dashboard')} className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      💼 Back to Portfolio
                    </button>
                    <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2 text-sm text-rose-600 font-bold hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}