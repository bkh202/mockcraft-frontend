const HowToUse = () => {
  const steps = [
    { step: "Choose your Domain", desc: "Select from 50+ categories", icon: "🎯", duration: "2 mins" },
    { step: "Adaptive Practice", desc: "AI adjusts difficulty on the fly", icon: "🧠", duration: "Daily" },
    { step: "Targeted Revision", desc: "Fix weak topics specifically", icon: "🔧", duration: "Smart" },
    { step: "Analytics & Mocks", desc: "Track progress with real stats", icon: "📊", duration: "Weekly" },
  ];

  return (
    <section className="bg-slate-950 py-24 px-4 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Master it in <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            A simple, scientifically proven process for maximum retention.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div key={i} className="relative group bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/30 transform group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <div className="text-4xl mb-6 mt-2">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
              <p className="text-slate-400 font-medium mb-4">{item.desc}</p>
              <div className="inline-block px-3 py-1 bg-slate-950 border border-slate-800 rounded-md text-xs font-bold text-cyan-400 uppercase tracking-widest">
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default HowToUse