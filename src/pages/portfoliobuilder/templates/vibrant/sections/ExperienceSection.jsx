function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <div className="vibrant-card p-8 md:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <span className="text-3xl">💼</span> Experience
      </h2>
      <div className="space-y-8">
        {data.experience.map((exp, i) => (
          <div key={i} className="relative pl-8 group">
            <div className="absolute left-0 top-2 w-4 h-4 bg-linear-to-br from-pink-400 to-purple-500 rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all">
                {exp.role}
              </h3>
              <span className="text-sm font-medium bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full shadow-inner">
                {exp.duration}
              </span>
            </div>
            <p className="text-purple-600 font-semibold mb-3">{exp.company}</p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;