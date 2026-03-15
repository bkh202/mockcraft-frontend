function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-24 relative">
      <div className="bt-section-num">02</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px', animationDelay: '0.3s' }} />
        <h3 className="bt-display text-5xl bt-white">EXPERIENCE</h3>
      </div>
      <div className="space-y-1">
        {data.experience.map((exp, i) => (
          <div
            key={i}
            className="bt-card p-8 bg-[#0a0a0a] bt-reveal"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h4 className="bt-display text-3xl bt-white">{exp.role}</h4>
                <h5 className="bt-accent font-bold tracking-wide">{exp.company}</h5>
              </div>
              <span className="bt-mono text-sm bt-dim border border-[#1e1e1e] px-3 py-1 self-start">
                {exp.duration}
              </span>
            </div>
            <div className="bt-line-h mb-4" />
            <p className="text-gray-500 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;