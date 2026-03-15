function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-red">経験</h3>
        <span className="tn-display text-gray-600 text-xl">/ EXPERIENCE</span>
      </div>
      <div className="space-y-1">
        {data.experience.map((exp, i) => (
          <div key={i} className="tn-card p-8 rounded-sm tn-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex flex-col md:flex-row gap-4 md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-2xl font-bold tn-white">{exp.role}</h4>
                <h5 className="tn-cyan font-medium">{exp.company}</h5>
              </div>
              <span className="tn-code text-xs text-gray-600 border border-gray-700 px-3 py-1 self-start">
                {exp.duration}
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;