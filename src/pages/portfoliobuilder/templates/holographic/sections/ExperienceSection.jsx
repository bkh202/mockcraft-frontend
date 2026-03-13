function ExperienceSection({ data }) {
  return (
    <section id="experience" className="pt-10">
      <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-cinematic" style={{ animationDelay: '0.4s' }}>Work History</h3>
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-linear-to-b before:from-cyan-500/0 before:via-cyan-500/50 before:to-purple-500/0">
        {data.experience.map((exp, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cinematic" style={{ animationDelay: `${0.2 * i + 0.5}s` }}>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#020205] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-500"></div>
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] spatial-card p-8 md:p-10">
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-cyan-300 tracking-wider mb-4">
                {exp.duration}
              </div>
              <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{exp.role}</h4>
              <h5 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h5>
              <p className="text-gray-400 leading-relaxed font-light">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;