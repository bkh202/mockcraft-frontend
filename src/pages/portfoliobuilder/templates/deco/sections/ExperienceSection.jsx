function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-28 relative">
      <div className="ad-num">II</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Professional Chronicle</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="space-y-1">
        {data.experience.map((exp, i) => (
          <div key={i} className="ad-card p-10 ad-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-start mb-6">
              <div>
                <div className="ad-diamond mb-3" />
                <h4 className="ad-display text-2xl ad-cream" style={{ letterSpacing: "0.1em" }}>
                  {exp.role}
                </h4>
                <h5 className="ad-sans text-xs tracking-[0.3em] ad-gold mt-1">{exp.company.toUpperCase()}</h5>
              </div>
              <span className="ad-sans text-xs tracking-widest ad-dim border border-yellow-700/20 px-3 py-1 self-start">
                {exp.duration}
              </span>
            </div>
            <div className="ad-divider w-24 mb-6" />
            <p className="ad-serif italic ad-mid leading-loose">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;