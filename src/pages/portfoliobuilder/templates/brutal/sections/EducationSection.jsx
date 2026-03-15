function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-24 relative">
      <div className="bt-section-num">04</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px', animationDelay: '0.9s' }} />
        <h3 className="bt-display text-5xl bt-white">EDUCATION</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {data.education.map((ed, i) => (
          <div key={i} className="bt-card p-8 bg-[#0a0a0a] text-center">
            <div className="bt-display text-6xl bt-accent mb-4">{String(i + 1).padStart(2, '0')}</div>
            <h4 className="font-bold bt-white mb-2">{ed.degree}</h4>
            <p className="bt-dim text-sm mb-3">{ed.college}</p>
            <div className="bt-mono text-xs text-orange-600">
              {ed.year} / {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;