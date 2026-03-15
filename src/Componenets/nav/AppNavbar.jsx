import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "../../api/axiosInstance";
import MockCraftLogo from "../../logo/MockCraftLogo"; // 🛑 FIX: Switched to standard axios for Canvas environment
import {
  LayoutDashboard,
  History,
  FolderOpen,
  Bell,
  ChevronDown,
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function AppNavbar() {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    // 🛑 FIX: Using full localhost URL since we dropped the custom instance
    axios.get("/user/me")
      .then(res => setUser(res.data))
      .catch(err => console.log("User fetch error:", err));
  }, []);

  // 🛑 THE UX FIX: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  const handleLogout = () => {
    // Implement actual logout logic (clear tokens etc.) here
    navigate("/");
  };

  const navLinks = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, path: "/dashboard" },
    { label: "History", icon: <History className="w-4 h-4" />, path: "/history" },
    { label: "Resources", icon: <FolderOpen className="w-4 h-4" />, path: "/resources" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo and Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/dashboard" className="flex items-center">
              <MockCraftLogo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-8 items-center space-x-1 border-l border-slate-200 pl-8">
              {navLinks.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                      }`}
                  >
                    <span className={isActive ? "text-blue-600" : "text-slate-400"}>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: User Profile & Notifications */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Notification Bell */}
           

            {/* User Profile */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-1.5 pr-3 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-100 to-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shadow-inner">
                  {user?.fullName ? user.fullName.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-bold text-slate-700 leading-none">
                    {user?.fullName || "Guest User"}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {user?.role || "Candidate"}
                  </p>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`} />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
                    <p className="text-sm font-bold text-slate-800">
                      {user?.fullName || "Guest User"}
                    </p>
                    <p className="text-xs font-medium text-slate-500 truncate mt-0.5">
                      {user?.email || "No email provided"}
                    </p>
                  </div>

                 

                  <div className="border-t border-slate-100 pt-2 pb-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-5 py-2.5 text-sm font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md absolute w-full shadow-lg animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                >
                  <span className={isActive ? "text-blue-600" : "text-slate-400"}>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}