import { Link } from "react-router-dom";

const PremiumModules = () => {
  const modules = [
    {
      title: "AI Mock Interview",
      desc: "Face real-time, dynamic technical and HR questions from our AI interviewer. Get instant feedback on confidence, speech, and accuracy.",
      icon: "🤖",
      color: "from-cyan-500 to-blue-600",
      glow: "hover:shadow-cyan-500/30 hover:border-cyan-500/50"
    },
    {
      title: "Resume to Portfolio",
      desc: "Don't just send a PDF. Upload your resume and let our AI generate a stunning, responsive, and shareable web portfolio in 60 seconds.",
      icon: "✨",
      color: "from-purple-500 to-pink-600",
      glow: "hover:shadow-purple-500/30 hover:border-purple-500/50"
    },
    {
      title: "Resume Analyzer",
      desc: "Bypass the ATS. Get your resume scored against specific job descriptions. Find missing keywords and fix formatting issues instantly.",
      icon: "📄",
      color: "from-amber-400 to-orange-500",
      glow: "hover:shadow-amber-500/30 hover:border-amber-500/50"
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-4 overflow-hidden border-t border-slate-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-slate-500 to-transparent opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Get The <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-orange-500">Unfair Advantage</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Stop relying on outdated methods. Use our premium AI tools to perfect your resume, build your brand, and crack interviews.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {modules.map((mod, i) => (
            <div 
              key={i} 
              className={`group relative bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${mod.glow}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${mod.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {mod.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{mod.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                Try Premium for <span className="text-cyan-400">7 Days Free</span>
              </h3>
              <p className="text-slate-400 text-lg font-medium">
                Unlock AI Interviews, Portfolio Generation, and Resume Analysis instantly. No hidden charges.
              </p>
            </div>
            <a href="/signup" className="shrink-0 px-8 py-4 bg-white text-slate-950 font-black text-lg rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all">
              Claim Your Free Trial
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumModules