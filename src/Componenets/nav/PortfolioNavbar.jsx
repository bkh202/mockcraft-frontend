import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";
import SubPageLogo from "../../logo/SubPageLogo";

export default function PortfolioNavbar() {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get("/user/me")
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinks = [
    { label: "Dashboard", icon: "fa-tachometer-alt", path: "/portfolio/dashboard" },
    { label: "Resumes", icon: "fa-file-alt", path: "/analyzer/history" },
    { label: "AI Interview", icon: "fa-microphone", path: "/ai-mock-interview" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo and Brand */}
          <div className="flex items-center">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden mr-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fa fa-bars text-xl text-black"></i>
            </button>

            <Link to="/dashboard">
              <SubPageLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-10 items-center space-x-2">
              {navLinks.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 text-base font-semibold rounded-lg transition-all ${
                      isActive
                        ? "text-black bg-gray-100 shadow-sm border border-gray-200"
                        : "text-gray-700 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    <i className={`fa ${item.icon} text-base`}></i>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: User Profile */}
          <div className="flex items-center gap-4">
            <Link
              to="/create"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-black text-white text-base font-bold rounded-lg hover:bg-gray-800 transition shadow-sm border border-gray-300"
            >
              <i className="fa fa-plus text-sm"></i> Create New
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-black font-bold border border-gray-200">
                  {user?.fullName?.charAt(0) || "U"}
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-base font-bold text-black">{user?.fullName || "Awesome User"}</p>
                    <p className="text-sm text-gray-600 truncate">{user?.email || "user@mockcraft.com"}</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-3 py-2 text-base text-black font-medium hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <i className="fa fa-sign-out-alt text-base"></i>
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
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                <i className={`fa ${item.icon} text-lg w-6 text-center`}></i>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}