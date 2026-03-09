function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-black/10 dark:border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-md pt-12 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Universal Footer Logo Mark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-md">
            <span className="text-white dark:text-black font-bold text-xs">P.</span>
          </div>
          <span className="font-bold tracking-tight text-gray-900 dark:text-gray-100 text-lg">
            Portfolio Generator
          </span>
        </div>
        
        {/* Universal Navigation Links */}
        <div className="flex gap-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 dark:text-gray-500 font-medium text-center md:text-right">
          © {new Date().getFullYear()} Premium Portfolio.<br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;