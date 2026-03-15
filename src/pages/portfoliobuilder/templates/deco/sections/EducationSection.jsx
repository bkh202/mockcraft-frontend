function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-28 relative">
      <div className="ad-num">IV</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Academic Distinction</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {data.education.map((ed, i) => (
          <div key={i} className="ad-card p-10 text-center">
            <div
              className="ad-diamond mx-auto mb-6"
              style={{ width: "12px", height: "12px", animationDelay: `${i * 0.1}s` }}
            />
            <h4 className="ad-display ad-cream mb-3" style={{ letterSpacing: "0.1em", fontSize: "1.1rem" }}>
              {ed.degree}
            </h4>
            <p className="ad-serif italic ad-mid text-sm mb-4">{ed.college}</p>
            <div className="ad-sans text-xs tracking-widest ad-gold">
              {ed.year} · {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;