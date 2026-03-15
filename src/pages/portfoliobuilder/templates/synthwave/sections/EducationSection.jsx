function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// EDUCATION.EXE</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {data.education.map((ed, i) => (
          <div key={i} className="sw-card p-8 rounded-sm text-center">
            <div className="sw-pixel text-4xl text-pink-500 mb-4">EDU</div>
            <h4 className="font-bold text-white text-lg mb-2">{ed.degree}</h4>
            <p className="text-gray-400 text-sm mb-3">{ed.college}</p>
            <div className="sw-pixel text-cyan-400">
              {ed.year} · {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;