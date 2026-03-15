function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-24">
      <div className="qm-section-label mb-2">module.education</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" style={{ animationDelay: "0.9s" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.education.map((ed, i) => (
          <div key={i} className="qm-card p-8 rounded-xl text-center">
            <div className="qm-hex mx-auto mb-5">🎓</div>
            <h4 className="font-bold qm-white mb-2">{ed.degree}</h4>
            <p className="qm-dim text-sm mb-3">{ed.college}</p>
            <div className="qm-mono text-xs qm-cyan">
              {ed.year} :: {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;