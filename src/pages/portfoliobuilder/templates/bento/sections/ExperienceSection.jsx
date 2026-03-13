function ExperienceSection({ data }) {
  return (
    <section id="experience" className="pt-10">
      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center reveal-item">Work Experience</h3>
      <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-linear-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
        {data.experience.map((exp, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-item" style={{ animationDelay: `${0.2 * i}s` }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030305] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125"></div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] glass-premium p-8 rounded-3xl float-card" style={{ animationDelay: `${i * 0.5}s` }}>
              <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 font-bold tracking-wider text-xs rounded-lg mb-4">{exp.duration}</span>
              <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
              <h5 className="text-lg text-gray-400 mb-4">{exp.company}</h5>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;