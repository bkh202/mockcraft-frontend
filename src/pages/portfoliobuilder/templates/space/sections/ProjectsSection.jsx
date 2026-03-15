import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 03</div>
        <h3 className="sp-section-title text-3xl">LAUNCHED PROJECTS</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div
            key={i}
            className="sp-card p-8 rounded-2xl sp-reveal"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="sp-display text-xs sp-dim">{p.duration}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="sp-btn px-4 py-1.5 rounded-full text-xs">
                  LAUNCH ↗
                </a>
              )}
            </div>
            <h4 className="text-2xl font-bold sp-white mb-3">{p.title}</h4>
            <p className="text-blue-300/50 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="sp-tag flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs">
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