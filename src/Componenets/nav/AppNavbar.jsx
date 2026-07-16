import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "../../api/axiosInstance";
import SubPageLogo from "../../logo/SubPageLogo";

export default function AppNavbar() {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    axios.get("/user/me")
      .then(res => setUser(res.data))
      .catch(err => console.log("User fetch error:", err));
  }, []);

  // Close dropdown when clicking outside
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
    { label: "Dashboard", icon: "fa-th-large", path: "/dashboard" },
    { label: "History", icon: "fa-history", path: "/history" },
    { label: "Resources", icon: "fa-folder-open", path: "/resources" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Left: Logo and Brand */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-3 -ml-2 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <i className={`fa ${showMobileMenu ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>

            <Link to="/dashboard">
                          <SubPageLogo />
                        </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-10 items-center space-x-2 border-l border-gray-200 pl-10">
              {navLinks.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-3 px-5 py-3 text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? "bg-gray-100 text-black border border-gray-300"
                        : "text-gray-700 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    <i className={`fa ${item.icon} ${isActive ? "text-black" : "text-gray-500"}`}></i>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: User Profile */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-4 p-2 pr-4 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-black/10"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center font-bold text-base border border-gray-200">
                  {user?.fullName ? user.fullName.charAt(0).toUpperCase() : <i className="fa fa-user"></i>}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-base font-bold text-black leading-none">
                    {user?.fullName || "Guest User"}
                  </p>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">
                    {user?.role || "Candidate"}
                  </p>
                </div>
                <i className={`fa fa-chevron-down text-gray-400 transition-transform duration-200 text-sm ${showProfileMenu ? "rotate-180" : ""}`}></i>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <p className="text-base font-bold text-black">
                      {user?.fullName || "Guest User"}
                    </p>
                    <p className="text-sm font-medium text-gray-600 truncate mt-0.5">
                      {user?.email || "No email provided"}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-2 pb-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-6 py-3 text-base font-bold text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                    >
                      <i className="fa fa-sign-out-alt"></i>
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
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg absolute w-full animate-in slide-in-from-top-2">
          <div className="px-6 py-5 space-y-2">
            {navLinks.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-4 px-5 py-4 text-base font-bold rounded-xl transition-colors ${
                    isActive
                      ? "bg-gray-100 text-black border border-gray-300"
                      : "text-gray-700 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  <i className={`fa ${item.icon} ${isActive ? "text-black" : "text-gray-500"} text-lg`}></i>
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