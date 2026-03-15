import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-24">
      <div className="qm-section-label mb-2">module.projects</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="qm-card p-8 rounded-xl group qm-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex justify-between items-start mb-4">
              <span className="qm-mono text-xs qm-dim">{p.duration}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="qm-btn px-4 py-1.5 rounded-full text-xs">
                  exec() ↗
                </a>
              )}
            </div>
            <h4 className="text-2xl font-bold qm-white mb-3 group-hover:qm-cyan transition-colors">{p.title}</h4>
            <p className="qm-mid text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="qm-tag flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs cursor-default">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain opacity-50"
                    onError={(e) => { e.target.style.display = "none"; }}
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