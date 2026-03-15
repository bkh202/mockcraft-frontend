function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-20">
      <div className="mx-section-header mb-2">education.records</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" style={{ animationDelay: "0.9s" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.education.map((ed, i) => (
          <div key={i} className="mx-card p-8 rounded-sm text-center">
            <div className="mx-mono text-4xl mx-dim mb-4">[EDU]</div>
            <h4 className="font-bold mx-bright mb-2">{ed.degree}</h4>
            <p className="mx-dim text-sm mb-3">{ed.college}</p>
            <div className="mx-mono text-xs mx-accent">
              {ed.year} / {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;