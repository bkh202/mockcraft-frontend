function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 02</div>
        <h3 className="sp-section-title text-3xl">MISSION LOG</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <div
            key={i}
            className="sp-card p-8 rounded-2xl sp-reveal"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="shrink-0 text-center">
                <div
                  className="w-14 h-14 rounded-full border border-blue-500/20 flex items-center justify-center"
                  style={{ background: "rgba(100,160,255,0.05)", boxShadow: "0 0 20px rgba(100,160,255,0.1)" }}
                >
                  <span className="sp-display text-sm sp-blue">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <div>
                <span className="sp-display text-xs tracking-widest sp-dim">{exp.duration}</span>
                <h4 className="text-2xl font-bold sp-white mt-1">{exp.role}</h4>
                <h5 className="sp-blue font-medium mb-4">{exp.company}</h5>
                <p className="text-blue-300/50 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;