const Motivation = () => (
  <section className="relative bg-black py-32 px-4 text-center overflow-hidden border-t border-gray-800 border-b">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/5 via-black to-black"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="inline-block px-4 py-1.5 bg-black border border-gray-800 text-gray-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
        <i className="fa fa-flag-checkered mr-2"></i> The Bottom Line
      </div>
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
        Consistency <span className="text-gray-300">Kills</span> Talent
      </h2>
      <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
        "Success doesn't come from studying more hours, it comes from practicing the <span className="text-white border-b-2 border-gray-500 pb-1">right way</span> every single day."
      </p>
    </div>
  </section>
);

export default Motivation;