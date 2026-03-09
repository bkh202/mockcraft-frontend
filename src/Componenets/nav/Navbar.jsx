import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for dynamic background and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="font-black text-2xl tracking-tighter">
              <span className="text-white">Mock</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Craft</span>
            </div>
          </Link>

          {/* CTA Buttons (Desktop & Mobile dono pe same dikhenge ab) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/login"
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-slate-300 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
            
            <Link
              to="/signup"
              className="px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-bold text-slate-900 bg-linear-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
            >
              Sign Up Free
            </Link>
          </div>

        </div>
      </div>

      {/* Progress Bar Indicator (Shows on scroll) */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800">
          <div 
            className="h-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-150"
            style={{
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;