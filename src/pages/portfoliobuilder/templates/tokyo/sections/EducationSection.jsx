function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-yellow">学歴</h3>
        <span className="tn-display text-gray-600 text-xl">/ EDUCATION</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {data.education.map((ed, i) => (
          <div key={i} className="tn-card p-8 rounded-sm text-center">
            <div className="text-3xl mb-4">🎓</div>
            <h4 className="font-bold tn-white mb-2">{ed.degree}</h4>
            <p className="tn-dim text-sm mb-3">{ed.college}</p>
            <div className="tn-code text-xs tn-cyan">
              {ed.year} / {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;