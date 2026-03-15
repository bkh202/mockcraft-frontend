function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">02 — EXPERIENCE</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Work History</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <div key={i} className="ar-card p-8 rounded-2xl ar-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
              <div>
                <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                <h5 className="ar-teal font-medium">{exp.company}</h5>
              </div>
              <span className="ar-mono text-xs ar-dim border border-emerald-500/10 px-3 py-1 rounded-full self-start">
                {exp.duration}
              </span>
            </div>
            <div className="ar-divider mb-4" />
            <p className="text-emerald-300/50 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;