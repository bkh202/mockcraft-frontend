function EducationSection({ data }) {
  if (!data.education?.length) return null;

  return (
    <section id="education" className="py-24 relative">
      <div className="pp-section-num">04</div>
      <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Education</h3>
      <div className="pp-line-brown w-32 mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.education.map((ed, i) => (
          <div key={i} className="pp-sticky p-8 rounded-sm relative">
            <div className="pp-pin" />
            <div className="text-3xl mb-4">🎓</div>
            <h4 className="pp-serif font-bold pp-dark mb-2">{ed.degree}</h4>
            <p className="text-gray-600 text-sm mb-3">{ed.college}</p>
            <div className="pp-hand pp-brown" style={{ fontSize: "1rem" }}>
              {ed.year} · {ed.score}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;