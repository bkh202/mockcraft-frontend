// AnalyzerNavbar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import SubPageLogo from "../../logo/SubPageLogo";

export default function AnalyzerNavbar() {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axiosInstance.get("/user/me")
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinks = [
    { label: "New Scan", icon: "⚡", path: "/resume-analyzer" },
    { label: "Scan History", icon: "📂", path: "/analyzer/history" },
    { label: "AI Interview", icon: "🎙️", path: "/ai-mock-interview" },
    { label: "Pro Plans", icon: "💎", path: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden mr-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/dashboard">
              <SubPageLogo  />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex ml-10 items-center space-x-1">
              {navLinks.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link key={item.label} to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all ${isActive
                        ? "text-indigo-700 bg-indigo-50 shadow-sm"
                        : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

          

            {/* Profile */}
            <div className="relative">
              <button onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm">
                  {user?.fullName?.charAt(0) || "U"}
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-black text-gray-900">{user?.fullName || "Awesome User"}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email || "user@mockcraft.com"}</p>
                  </div>
                  <div className="p-2">
                    <button onClick={() => navigate('/resume-to-portfolio-dashboard')}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 font-bold hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-colors">
                      💼 Back to Portfolio
                    </button>
                    <button onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm text-rose-600 font-bold hover:bg-rose-50 rounded-lg transition-colors mt-1">
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
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((item) => (
              <Link key={item.label} to={item.path}
                className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                onClick={() => setShowMobileMenu(false)}>
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