const Features = () => {
  const features = [
    { title: "Dynamic Difficulty", desc: "Questions adjust from easy to hard based on your real-time performance metrics.", icon: "📈", color: "from-blue-500 to-cyan-400" },
    { title: "Weakness Radar", desc: "AI-powered analysis to pinpoint exactly where you are losing marks.", icon: "🎯", color: "from-purple-500 to-pink-500" },
    { title: "Spaced Repetition", desc: "Automated short quizzes focusing specifically on embedding your weak areas.", icon: "🔄", color: "from-emerald-400 to-teal-500" },
    { title: "Proctored Mocks", desc: "Time-bound tests simulating brutal real-exam pressure conditions.", icon: "⏳", color: "from-amber-400 to-orange-500" },
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-4 overflow-hidden border-t border-slate-900">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Learning Engine</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Everything you need to study less, but score more.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group bg-slate-900/80 rounded-3xl p-8 border border-slate-800 hover:border-slate-600 transition-colors">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features