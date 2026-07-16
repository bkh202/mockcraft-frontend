const GrowthTips = () => {
  const tips = [
    { tip: "Consistency > Intensity", desc: "30 minutes daily is better than 5 hours on Sunday.", icon: "fa-fire" },
    { tip: "Accuracy First", desc: "Speed comes naturally once your concepts are rock solid.", icon: "fa-bolt" },
    { tip: "Review Mistakes", desc: "If you don't review mocks, you just wasted 3 hours.", icon: "fa-brain" },
    { tip: "Embrace Failure", desc: "Failing in practice saves you from failing in reality.", icon: "fa-shield-alt" },
  ];

  return (
    <section className="bg-black py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            The <span className="text-gray-300">1%</span> Rules
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Harsh truths and strategies used by top percentile achievers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((item, i) => (
            <div key={i} className="bg-black border border-gray-800 rounded-3xl p-8 hover:bg-white/5 transition-colors">
              <div className="text-3xl mb-4 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-800 text-white">
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">{item.tip}</h3>
              <p className="text-sm text-gray-400 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTips;