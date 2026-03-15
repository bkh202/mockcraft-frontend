import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section id="projects" className="py-24 relative">
      <div className="pp-section-num">03</div>
      <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Featured Projects</h3>
      <div className="pp-line-brown w-32 mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="pp-card p-8 rounded-sm group pp-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex justify-between items-start mb-4">
              <span className="pp-hand pp-light" style={{ fontSize: "1rem" }}>
                {p.duration}
              </span>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="pp-btn px-4 py-1.5 text-xs rounded-none">
                  View →
                </a>
              )}
            </div>
            <h4 className="pp-serif text-2xl pp-dark font-bold mb-3 group-hover:pp-brown transition-colors">{p.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div
                  key={idx}
                  className="pp-tag flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs cursor-default"
                >
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