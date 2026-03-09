const HeroSection = () => (
  <section className="relative bg-slate-950 py-20 md:py-32 px-4 text-center overflow-hidden">
    {/* Premium Background Glows */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="relative max-w-4xl mx-auto z-10">
      <div className="inline-block px-4 py-1.5 bg-slate-800/50 border border-slate-700 text-cyan-400 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-lg backdrop-blur-sm">
        🚀 AI-Powered Career Prep
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
        Practice <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Smarter.</span> 
        <br className="hidden md:block" /> Crack Interviews Faster.
      </h1>

      <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
        MockCraft uses AI to conduct brutal mock interviews, build your web portfolio, analyze your resume, and adapt practice questions to your exact level.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {["AI Interviews", "Portfolio Builder", "Resume Analyzer", "GATE", "JEE", "Engineering", "Aptitude"].map((tag) => (
          <span key={tag} className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-xl text-sm font-semibold text-slate-300 cursor-default backdrop-blur-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
        <a
          href="/signup"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-black text-slate-950 bg-linear-to-r from-cyan-400 to-blue-500 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>Start 7-Day Free Trial</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        
        <a
          href="/login"
          className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-800/50 border border-slate-600 rounded-xl hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
        >
          <span>Login</span>
        </a>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <span>Full Access to Premium Tools</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;