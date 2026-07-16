import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ─── White‑colored Brain SVG (monochrome) ──────────────────────────
const BrainLogo = () => (
  <svg width="180" height="40" viewBox="0 0 200 44" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(4, 3)">
      {/* Left hemisphere */}
      <path
        d="M16 2 C16 2 7 2 5 8 C3 14 6 19 6 19 C4 21 2 25 4 29 C6 33 11 34 14 33 C15 36 16 38 18 38 L18 2 Z"
        fill="#1a1a1a"
        stroke="#a0a0a0" // gray outline
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right hemisphere */}
      <path
        d="M20 2 C20 2 29 2 31 8 C33 14 30 19 30 19 C32 21 34 25 32 29 C30 33 25 34 22 33 C21 36 20 38 18 38 L18 2 Z"
        fill="#1a1a1a"
        stroke="#a0a0a0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center dashed line */}
      <line
        x1="18"
        y1="2"
        x2="18"
        y2="38"
        stroke="#666"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2.5 2.5"
      />
      {/* Neural connections – left */}
      <path
        d="M16 10 C11 9 9 12 10 15"
        fill="none"
        stroke="#888"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 21 C10 20 8 24 10 27"
        fill="none"
        stroke="#888"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Neural connections – right */}
      <path
        d="M20 10 C25 9 27 12 26 15"
        fill="none"
        stroke="#888"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 21 C26 20 28 24 26 27"
        fill="none"
        stroke="#888"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Synaptic dots */}
      <circle cx="13" cy="17" r="1.8" fill="#ccc" opacity="0.9" />
      <circle cx="18" cy="23" r="1.8" fill="#aaa" opacity="0.9" />
      <circle cx="23" cy="17" r="1.8" fill="#ccc" opacity="0.9" />
      {/* Connection lines between dots */}
      <line
        x1="13"
        y1="17"
        x2="18"
        y2="23"
        stroke="#aaa"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <line
        x1="23"
        y1="17"
        x2="18"
        y2="23"
        stroke="#aaa"
        strokeWidth="0.8"
        opacity="0.7"
      />
    </g>
    {/* Text next to the brain */}
    <text
      x="46"
      y="29"
      style={{
        fontFamily: "'Rockwell', 'Georgia', serif",
        fontSize: "26px",
        fontWeight: 700,
        fill: "#ffffff",
        letterSpacing: "-0.5px",
      }}
    >
      Mock<tspan fill="#a0a0a0">Craft</tspan>
    </text>
  </svg>
);

// ─── Navbar component (monochrome) ──────────────────────────────────
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
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-gray-800 shadow-xl"
          : "bg-black/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <BrainLogo />
          </Link>

          {/* CTA Buttons – monochrome */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/login"
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-gray-300 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-bold text-black bg-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30 border border-gray-800"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar – white gradient */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-white to-gray-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;