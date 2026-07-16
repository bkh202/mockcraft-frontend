const Features = () => {
  const features = [
    { title: "Dynamic Difficulty", desc: "Questions adjust from easy to hard based on your real-time performance metrics.", icon: "fa-chart-line" },
    { title: "Weakness Radar", desc: "AI-powered analysis to pinpoint exactly where you are losing marks.", icon: "fa-bullseye" },
    { title: "Spaced Repetition", desc: "Automated short quizzes focusing specifically on embedding your weak areas.", icon: "fa-sync-alt" },
    { title: "Proctored Mocks", desc: "Time-bound tests simulating brutal real-exam pressure conditions.", icon: "fa-hourglass-half" },
  ];

  return (
    <section className="relative bg-black py-24 px-4 overflow-hidden border-t border-gray-800">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Core <span className="text-gray-300">Learning Engine</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Everything you need to study less, but score more.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group bg-black rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white mb-6 border border-gray-800 group-hover:bg-white/20 transition-colors">
                <i className={`fa ${f.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;