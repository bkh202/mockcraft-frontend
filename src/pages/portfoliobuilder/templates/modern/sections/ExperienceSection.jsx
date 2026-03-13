function ExperienceSection({ data }) {
  return (
    <section id="experience" className="animate-fade-in-up delay-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Experience</h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
        {data.experience.map((e, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col mb-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{e.company}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{e.role}</h3>
              </div>
              <time className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block">{e.duration}</time>
              <p className="text-gray-600 dark:text-gray-300/80 leading-relaxed text-sm md:text-base">
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;