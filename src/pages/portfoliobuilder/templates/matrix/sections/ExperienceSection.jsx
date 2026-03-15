function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-20">
      <div className="mx-section-header mb-2">experience.log</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <div key={i} className="mx-card p-8 rounded-sm mx-reveal" style={{ animationDelay: `${0.2 * i}s` }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="mx-dim text-xs mb-1">[{String(i + 1).padStart(2, "0")}] entry</div>
                <h4 className="text-xl font-bold mx-bright">{exp.role}</h4>
                <h5 className="mx-accent">{exp.company}</h5>
              </div>
              <span className="mx-dim text-sm mx-mono">{exp.duration}</span>
            </div>
            <p className="text-green-700 leading-relaxed text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;