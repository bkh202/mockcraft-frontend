function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">04 — EDUCATION</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Academic Journey</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.education.map((ed, i) => (
          <div
            key={i}
            className="ar-card p-8 rounded-2xl text-center ar-float"
            style={{ animationDelay: `${i * 1.5}s` }}
          >
            <div
              className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}
            >
              <span style={{ fontSize: "22px" }}>🎓</span>
            </div>
            <h4 className="font-bold text-white mb-2">{ed.degree}</h4>
            <p className="text-emerald-300/40 text-sm mb-3">{ed.college}</p>
            <div className="ar-mono text-xs ar-teal">
              {ed.year} · {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;