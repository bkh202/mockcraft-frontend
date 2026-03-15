import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-20">
      <div className="mx-section-header mb-2">projects.list()</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="mx-card p-8 rounded-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="mx-dim text-xs">{`project_${String(i + 1).padStart(2, "0")}.init()`}</span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="mx-dim text-xs hover:text-green-400 transition-colors">
                  [OPEN]
                </a>
              )}
            </div>
            <h4 className="text-xl font-bold mx-bright mb-3">{p.title}</h4>
            <p className="text-green-700 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="mx-tag flex items-center gap-1.5 px-2 py-1 text-xs">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain opacity-60"
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