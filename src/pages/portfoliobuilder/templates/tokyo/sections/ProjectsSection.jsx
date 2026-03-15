import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-cyan">作品</h3>
        <span className="tn-display text-gray-600 text-xl">/ PROJECTS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {data.projects.map((p, i) => (
          <div key={i} className="tn-card p-8 rounded-sm group tn-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex justify-between items-start mb-4">
              <span className="tn-code text-xs text-gray-600">{p.duration}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="tn-btn px-4 py-1.5 text-xs">
                  VIEW ↗
                </a>
              )}
            </div>
            <h4 className="text-2xl font-bold tn-white mb-3 group-hover:text-red-400 transition-colors">{p.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="tn-tag flex items-center gap-1.5 px-2.5 py-1 cursor-default text-xs">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain opacity-50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
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