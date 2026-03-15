function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section id="experience" className="mb-16 ed-reveal">
      <p className="ed-section-label">Career</p>
      <h2 className="ed-serif text-3xl md:text-4xl text-[#111] mb-10">Work Experience</h2>

      <div className="space-y-0">
        {data.experience.map((exp, i) => (
          <div key={i} className="ed-timeline-item group flex gap-6 pb-10 relative">
            {/* Left: timeline line */}
            <div className="flex flex-col items-center pt-1.5">
              <div className="ed-timeline-dot mt-0.5" />
              {i < data.experience.length - 1 && (
                <div className="w-px flex-1 mt-2 bg-stone-200 group-hover:bg-stone-300 transition-colors" />
              )}
            </div>

            {/* Right: content */}
            <div className="flex-1 pb-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#111] leading-tight">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-stone-500 text-sm font-medium">
                    <span>🏢</span> {exp.company}
                  </div>
                </div>
                <span className="ed-mono text-xs text-stone-400 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;