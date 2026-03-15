function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 04</div>
        <h3 className="sp-section-title text-3xl">EDUCATION</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.education.map((ed, i) => (
          <div key={i} className="sp-card p-8 rounded-2xl text-center">
            <div
              className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: "rgba(100,160,255,0.08)", border: "1px solid rgba(100,160,255,0.2)" }}
            >
              <span className="text-xl">🎓</span>
            </div>
            <h4 className="font-bold sp-white mb-2">{ed.degree}</h4>
            <p className="sp-dim text-sm mb-3">{ed.college}</p>
            <div className="sp-display text-xs sp-blue">
              {ed.year} · {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;