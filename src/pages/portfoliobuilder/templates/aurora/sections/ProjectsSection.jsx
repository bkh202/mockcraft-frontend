import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">03 — PROJECTS</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Featured Work</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="ar-card p-8 rounded-2xl group ar-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flex justify-between items-start mb-4">
              <span className="ar-mono text-xs ar-dim">{p.duration}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="ar-btn px-4 py-1.5 rounded-full text-xs">
                  OPEN ↗
                </a>
              )}
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">{p.title}</h4>
            <p className="text-emerald-300/40 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="ar-tag flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain opacity-50"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
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