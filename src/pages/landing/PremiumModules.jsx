import { Link } from "react-router-dom";

const PremiumModules = () => {
  const modules = [
    {
      title: "AI Mock Interview",
      desc: "Face real-time, dynamic technical and HR questions from our AI interviewer. Get instant feedback on confidence, speech, and accuracy.",
      icon: "fa-robot",
    },
    {
      title: "Resume to Portfolio",
      desc: "Don't just send a PDF. Upload your resume and let our AI generate a stunning, responsive, and shareable web portfolio in 60 seconds.",
      icon: "fa-magic",
    },
    {
      title: "Resume Analyzer",
      desc: "Bypass the ATS. Get your resume scored against specific job descriptions. Find missing keywords and fix formatting issues instantly.",
      icon: "fa-file-alt",
    },
  ];

  return (
    <section className="relative bg-black py-24 px-4 overflow-hidden border-t border-gray-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Get The <span className="text-gray-300">Unfair Advantage</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Stop relying on outdated methods. Use our premium AI tools to perfect your resume, build your brand, and crack interviews.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="group relative bg-black border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl text-white mb-6 border border-gray-800 group-hover:bg-white/20 transition-colors">
                <i className={`fa ${mod.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{mod.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 font-light">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Call-to-action banner */}
        <div className="bg-white/5 border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                Try Premium for <span className="text-gray-300">7 Days Free</span>
              </h3>
              <p className="text-gray-400 text-lg font-light">
                Unlock AI Interviews, Portfolio Generation, and Resume Analysis instantly. No hidden charges.
              </p>
            </div>
            <Link
              to="/signup"
              className="shrink-0 px-8 py-4 bg-white text-black font-black text-lg rounded-xl hover:bg-gray-200 transition-all shadow-sm"
            >
              Claim Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumModules;