function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <section id="experience" className="mb-14 pt-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4">
        <span className="text-2xl">💼</span> Work Experience
      </h2>
      <div className="space-y-8 pl-2">
        {data.experience.map((exp, i) => (
          <div key={i} className="group relative pl-8 pb-2 transition-all hover:pl-9">
            <div className="absolute -left-1.25 top-1.5 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-gray-800 transition-all ring-4 ring-white"></div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
              <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
              <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
            </div>
            <div className="text-gray-600 font-medium mb-3 flex items-center gap-2">
              <span className="text-gray-400">🏢</span> {exp.company}
            </div>
            <p className="text-gray-600 leading-relaxed text-sm/relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;