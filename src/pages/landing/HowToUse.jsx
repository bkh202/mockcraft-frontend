const HowToUse = () => {
  const steps = [
    { step: "Choose your Domain", desc: "Select from 50+ categories", icon: "fa-bullseye", duration: "2 mins" },
    { step: "Adaptive Practice", desc: "AI adjusts difficulty on the fly", icon: "fa-brain", duration: "Daily" },
    { step: "Targeted Revision", desc: "Fix weak topics specifically", icon: "fa-tools", duration: "Smart" },
    { step: "Analytics & Mocks", desc: "Track progress with real stats", icon: "fa-chart-bar", duration: "Weekly" },
  ];

  return (
    <section className="bg-black py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Master it in <span className="text-gray-300">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            A simple, scientifically proven process for maximum retention.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div key={i} className="relative group bg-black backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-gray-600 hover:bg-white/5 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-black shadow-sm transform group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <div className="text-4xl mb-6 mt-2 text-white">
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
              <p className="text-gray-400 font-light mb-4">{item.desc}</p>
              <div className="inline-block px-3 py-1 bg-white/5 border border-gray-800 rounded-md text-xs font-bold text-gray-300 uppercase tracking-widest">
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;