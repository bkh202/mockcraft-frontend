import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// PROJECTS.DB</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="sw-card p-8 rounded-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="sw-pixel text-cyan-400 text-sm">{p.duration}</span>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="sw-pixel text-pink-400 hover:text-pink-300 text-sm tracking-wider"
                >
                  [LAUNCH ↗]
                </a>
              )}
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">{p.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div
                  key={idx}
                  className="sw-tag flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-semibold"
                >
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain"
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