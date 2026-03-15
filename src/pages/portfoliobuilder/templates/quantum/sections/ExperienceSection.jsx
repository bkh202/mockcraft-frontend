function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-24">
      <div className="qm-section-label mb-2">module.experience</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <div key={i} className="qm-card p-8 rounded-xl qm-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="qm-hex shrink-0">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4 className="text-xl font-bold qm-white">{exp.role}</h4>
                  <h5 className="qm-cyan text-sm qm-mono">{exp.company}</h5>
                </div>
              </div>
              <span className="qm-mono text-xs qm-dim border border-cyan-900/30 px-3 py-1 rounded self-start">
                {exp.duration}
              </span>
            </div>
            <div className="qm-divider mb-4" />
            <p className="qm-mid leading-relaxed text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;