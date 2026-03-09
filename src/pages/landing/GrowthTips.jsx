const GrowthTips = () => {
  const tips = [
    { tip: "Consistency > Intensity", desc: "30 minutes daily is better than 5 hours on Sunday.", icon: "🔥" },
    { tip: "Accuracy First", desc: "Speed comes naturally once your concepts are rock solid.", icon: "⚡" },
    { tip: "Review Mistakes", desc: "If you don't review mocks, you just wasted 3 hours.", icon: "🧠" },
    { tip: "Embrace Failure", desc: "Failing in practice saves you from failing in reality.", icon: "🛡️" },
  ];

  return (
    <section className="bg-slate-950 py-24 px-4 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            The <span className="text-emerald-400">1%</span> Rules
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Harsh truths and strategies used by top percentile achievers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/80 transition-colors">
              <div className="text-3xl mb-4 bg-slate-800 w-14 h-14 flex items-center justify-center rounded-2xl border border-slate-700">{item.icon}</div>
              <h3 className="font-bold text-white mb-2 text-lg">{item.tip}</h3>
              <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTips