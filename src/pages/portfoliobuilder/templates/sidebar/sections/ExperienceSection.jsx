function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section id="experience">
      <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
        <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Work History
      </h2>
      <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-4 pl-8 md:pl-10 relative">
        {data.experience.map((e, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-10.25 md:-left-12.25 top-1.5 w-5 h-5 bg-white dark:bg-[#0b0f19] border-4 border-slate-300 dark:border-slate-700 rounded-full group-hover:border-teal-500 transition-colors"></div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{e.role}</h3>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md w-fit">
                {e.duration}
              </span>
            </div>
            <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">{e.company}</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl text-sm md:text-base">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;