function ExperienceSection({ data }) {
  return (
    <section id="experience" className="nm-card p-7 md:p-9 nm-reveal" style={{ animationDelay: '0.2s' }}>
      <div className="nm-section-head">
        <div className="nm-accent-bar h-8 bg-purple-500" />
        <h3 className="text-xl font-bold text-slate-900">Work Experience</h3>
      </div>
      <div className="h-0.5 w-14 rounded-full mb-7"
        style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }} />

      <div className="space-y-0">
        {data.experience?.map((exp, i) => (
          <div key={i} className="nm-timeline-item group flex gap-5 pb-8 last:pb-0">
            {/* Timeline */}
            <div className="flex flex-col items-center pt-1.5">
              <div className="nm-timeline-dot" />
              {i < data.experience.length - 1 && (
                <div className="w-px flex-1 mt-2 bg-slate-100 group-hover:bg-indigo-200 transition-colors" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {exp.role}
                </h4>
                <span className="nm-mono text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-semibold text-purple-600 mb-3 flex items-center gap-1.5">
                <span>🏢</span> {exp.company}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;