const Motivation = () => (
  <section className="relative bg-slate-950 py-32 px-4 text-center overflow-hidden border-t border-slate-900 border-b">
    {/* Deep background elements */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
        The Bottom Line
      </div>
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
        Consistency <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-500">Kills</span> Talent
      </h2>
      <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
        "Success doesn't come from studying more hours, it comes from practicing the <span className="text-white border-b-2 border-cyan-500 pb-1">right way</span> every single day."
      </p>
    </div>
  </section>
);
export default Motivation