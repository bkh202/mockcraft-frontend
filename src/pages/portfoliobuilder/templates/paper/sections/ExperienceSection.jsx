function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section id="experience" className="py-24 relative">
      <div className="pp-section-num">02</div>
      <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Work Experience</h3>
      <div className="pp-line-brown w-32 mb-12" />
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <div key={i} className="pp-card p-8 rounded-sm pp-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-start mb-4">
              <div>
                <h4 className="pp-serif text-2xl pp-dark font-bold">{exp.role}</h4>
                <h5 className="pp-brown font-semibold">{exp.company}</h5>
              </div>
              <span className="pp-hand text-lg pp-light self-start" style={{ fontSize: "1.1rem" }}>
                {exp.duration}
              </span>
            </div>
            <div className="pp-line mb-4" />
            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;