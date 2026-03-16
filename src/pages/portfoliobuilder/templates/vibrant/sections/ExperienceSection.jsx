function ExperienceSection({ data }) {
  if (!data.experience?.length) return null;

  return (
    <div className="vb-card p-7 md:p-9 vb-reveal" style={{ animationDelay: '0.15s' }}>
      <div className="vb-label mb-1">Career</div>
      <h2 className="text-xl font-bold text-gray-900 mb-7 pb-4 border-b border-pink-100/60">
        💼 Experience
      </h2>

      <div className="space-y-0">
        {data.experience.map((exp, i) => (
          <div key={i} className="vb-timeline-item group flex gap-5 pb-8 last:pb-0">
            {/* Timeline */}
            <div className="flex flex-col items-center pt-1.5">
              <div className="vb-dot" />
              {i < data.experience.length - 1 && (
                <div className="w-px flex-1 mt-2 bg-gradient-to-b from-pink-200 to-purple-100 group-hover:from-pink-300 group-hover:to-purple-200 transition-colors" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-gray-900 group-hover:vb-grad transition-all leading-snug">
                  {exp.role}
                </h3>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-semibold text-pink-500 mb-3 flex items-center gap-1.5">
                🏢 {exp.company}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;