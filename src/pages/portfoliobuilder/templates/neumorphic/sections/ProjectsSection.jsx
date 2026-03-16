import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  return (
    <section id="projects" className="nm-reveal" style={{ animationDelay: '0.35s' }}>
      <div className="nm-section-head mb-6">
        <span className="text-xl">🚀</span>
        <h3 className="text-xl font-bold text-slate-900">Featured Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.projects?.map((p, i) => (
          <div key={i} className="nm-card p-6 flex flex-col h-full group">
            {/* Top */}
            <div className="flex items-start justify-between mb-4">
              <span className="nm-mono text-xs font-bold text-indigo-500 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                {p.duration}
              </span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all text-sm">
                  ↗
                </a>
              )}
            </div>

            <h4 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors leading-snug">
              {p.title}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 grow">
              {p.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="nm-tag text-xs">
                  <img src={getSkillLogo(tech)} alt={tech}
                    className="w-3.5 h-3.5 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;