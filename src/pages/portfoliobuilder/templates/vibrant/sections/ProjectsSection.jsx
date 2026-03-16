import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <div className="vb-reveal" style={{ animationDelay: '0.25s' }}>
      <div className="vb-label mb-1 pl-1">Work</div>
      <h2 className="text-xl font-bold text-gray-900 mb-6 pl-1">🚀 Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.projects.map((p, i) => (
          <div key={i} className="vb-card p-6 flex flex-col h-full group">
            {/* Top */}
            <div className="flex items-start justify-between mb-4 gap-2">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                {p.duration}
              </span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 bg-gray-50 border border-gray-200 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-500 transition-all text-sm shrink-0">
                  ↗
                </a>
              )}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:vb-grad transition-all leading-snug">
              {p.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 grow">{p.description}</p>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
              {p.techStack?.map((tech, idx) => (
                <span key={idx}
                  className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-gray-200 px-2.5 py-1 rounded-full text-gray-600 shadow-sm hover:border-pink-200 hover:text-pink-600 transition-colors cursor-default">
                  <img src={getSkillLogo(tech)} alt={tech}
                    className="w-3 h-3 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;