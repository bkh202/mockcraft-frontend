function ExperienceSection({ data }) {
  return (
    <section id="experience" className="stripe-card p-8 md:p-10 animate-reveal" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        <div className="w-1.5 h-8 bg-purple-500 rounded-full"></div> Work Experience
      </h3>
      <div className="gradient-line bg-linear-to-r from-purple-500 to-pink-500 w-24"></div>

      <div className="space-y-8 mt-8">
        {data.experience?.map((exp, i) => (
          <div key={i} className="pb-8 border-b border-gray-100 last:border-0 last:pb-0 group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {exp.role}
              </h4>
              <span className="text-sm font-semibold bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                {exp.duration}
              </span>
            </div>
            <div className="text-purple-600 font-semibold mb-4 flex items-center gap-2">
              <span>🏢</span> {exp.company}
            </div>
            <p className="text-gray-600 leading-relaxed text-md">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;