function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-28">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">EDUCATION</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {data.education.map((ed, i) => (
          <div key={i} className="lx-card p-10 text-center">
            <div className="lx-ornament mx-auto mb-6" />
            <h4 className="lx-display text-sm tracking-wider text-stone-300 mb-3">{ed.degree}</h4>
            <p className="lx-serif text-stone-500 italic mb-4">{ed.college}</p>
            <div className="lx-display text-xs tracking-widest text-yellow-700/60">
              {ed.year} · {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;