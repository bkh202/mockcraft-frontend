const HeroSection = () => (
  <section className="relative bg-black py-24 md:py-36 px-4 text-center overflow-hidden">
    {/* Subtle white glows (no red) */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div className="relative max-w-4xl mx-auto z-10">
      <div className="inline-block px-5 py-2 bg-white/5 border border-gray-800 text-gray-300 rounded-full text-base font-bold tracking-widest uppercase mb-8 shadow-sm backdrop-blur-sm">
        <i className="fa fa-rocket mr-2"></i> AI-Powered Career Prep
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
        Practice <span className="text-gray-300">Smarter.</span>
        <br className="hidden md:block" /> Crack Interviews Faster.
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
        MockCraft uses AI to conduct brutal mock interviews, build your web portfolio, analyze your resume, and adapt practice questions to your exact level.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {["AI Interviews", "Portfolio Builder", "Resume Analyzer", "GATE", "JEE", "Engineering", "Aptitude"].map((tag) => (
          <span key={tag} className="px-5 py-2.5 bg-white/5 border border-gray-800 rounded-xl text-sm font-semibold text-gray-300 cursor-default backdrop-blur-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
        <a
          href="/signup"
          className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-black text-black bg-white rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
        >
          <span>Start 7-Day Free Trial</span>
          <i className="fa fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </a>
        <a
          href="/login"
          className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-black border border-gray-800 rounded-xl hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
        >
          <span>Login</span>
        </a>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
          <span>Full Access to Premium Tools</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;