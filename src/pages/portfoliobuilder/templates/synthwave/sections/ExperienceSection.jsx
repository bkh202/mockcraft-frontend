function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// EXPERIENCE LOG</div>
      <div className="relative pl-8 sw-timeline space-y-12">
        {data.experience.map((exp, i) => (
          <div key={i} className="sw-card p-8 rounded-sm relative">
            <div
              className="absolute left-0 top-8 w-3 h-3 bg-pink-500 rounded-full -translate-x-[calc(2rem+1px)]"
              style={{ boxShadow: "0 0 10px #ff3c78" }}
            />
            <span className="sw-pixel text-cyan-400 text-sm tracking-widest">{exp.duration}</span>
            <h4 className="text-2xl font-bold text-white mt-1">{exp.role}</h4>
            <h5 className="text-pink-400 font-semibold mb-3">{exp.company}</h5>
            <p className="text-gray-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;