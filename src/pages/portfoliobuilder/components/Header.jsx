import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ "Certificates" add kar diya Education ke baad
  const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Certificates", "Contact"];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled ? "py-4" : "py-6"
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center transition-all duration-500 ${
          scrolled 
            ? "px-6 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-sm" 
            : "px-2 py-2 bg-transparent"
        }`}>
          
          {/* Universal Monochrome Logo Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
              <span className="text-white dark:text-black font-bold text-sm">P.</span>
            </div>
            <span className="font-bold tracking-tight text-gray-900 dark:text-gray-100 opacity-0 md:opacity-100 transition-opacity">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown (Universal Glassmorphism) */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <nav className="flex flex-col space-y-1 px-4 py-6 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-3xl shadow-xl">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;