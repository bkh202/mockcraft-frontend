function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-28">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">EXPERIENCE</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="space-y-1">
        {data.experience.map((exp, i) => (
          <div key={i} className="lx-card p-10 relative overflow-hidden">
            <div className="lx-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="relative z-10">
              <div className="lx-display text-xs tracking-[0.3em] text-yellow-700/60 mb-2">{exp.duration}</div>
              <h4 className="lx-serif text-3xl text-stone-200 mb-1">{exp.role}</h4>
              <h5 className="lx-display text-sm tracking-wider text-yellow-600/70 mb-6">{exp.company}</h5>
              <div className="lx-divider w-24" style={{ animationDelay: `${i * 0.2}s` }} />
              <p className="lx-serif text-stone-500 leading-loose mt-6 text-lg">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;