import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrainLogo = () => (
  <svg width="180" height="40" viewBox="0 0 200 44" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(4, 3)">
      <path d="M16 2 C16 2 7 2 5 8 C3 14 6 19 6 19 C4 21 2 25 4 29 C6 33 11 34 14 33 C15 36 16 38 18 38 L18 2 Z"
        fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 2 C20 2 29 2 31 8 C33 14 30 19 30 19 C32 21 34 25 32 29 C30 33 25 34 22 33 C21 36 20 38 18 38 L18 2 Z"
        fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="2" x2="18" y2="38" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2.5 2.5"/>
      <path d="M16 10 C11 9 9 12 10 15"  fill="none" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M20 10 C25 9 27 12 26 15"  fill="none" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M16 21 C10 20 8 24 10 27"  fill="none" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M20 21 C26 20 28 24 26 27"  fill="none" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="13" cy="17" r="1.8" fill="#818cf8" opacity="0.9"/>
      <circle cx="18" cy="23" r="1.8" fill="#a5b4fc" opacity="0.9"/>
      <circle cx="23" cy="17" r="1.8" fill="#818cf8" opacity="0.9"/>
      <line x1="13" y1="17" x2="18" y2="23" stroke="#818cf8" strokeWidth="0.8" opacity="0.7"/>
      <line x1="23" y1="17" x2="18" y2="23" stroke="#818cf8" strokeWidth="0.8" opacity="0.7"/>
    </g>
    <text x="46" y="29"
      style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 700, fill: "#ffffff", letterSpacing: "-0.5px" }}>
      Mock<tspan fill="#818cf8">Craft</tspan>
    </text>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? "bg-slate-900/90 backdrop-blur-lg border-b border-slate-800 shadow-xl"
        : "bg-slate-900/50 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <BrainLogo />
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/login"
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-slate-300 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Sign Up Free
            </Link>
          </div>

        </div>
      </div>

      {/* Progress Bar */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800">
          <div
            className="h-full bg-indigo-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;