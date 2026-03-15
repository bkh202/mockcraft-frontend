import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-24 relative">
      <div className="bt-section-num">03</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px', animationDelay: '0.6s' }} />
        <h3 className="bt-display text-5xl bt-white">PROJECTS</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {data.projects.map((p, i) => (
          <div
            key={i}
            className="bt-card p-8 bg-[#0a0a0a] group bt-reveal"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="bt-mono text-xs bt-dim">{p.duration}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="bt-btn px-4 py-1.5 text-xs">
                  VIEW →
                </a>
              )}
            </div>
            <h4 className="bt-display text-4xl bt-white mb-3 group-hover:text-orange-500 transition-colors">
              {p.title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="bt-tag flex items-center gap-1.5 px-2.5 py-1 cursor-default">
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