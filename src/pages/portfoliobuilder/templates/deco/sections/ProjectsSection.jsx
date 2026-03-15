import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-28 relative">
      <div className="ad-num">III</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Distinguished Works</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {data.projects.map((p, i) => (
          <div key={i} className="ad-card p-10 group ad-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flex justify-between items-start mb-6">
              <div className="ad-diamond" style={{ animationDelay: `${i * 0.1}s` }} />
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="ad-btn px-4 py-1.5 text-xs">
                  <span>VIEW ↗</span>
                </a>
              )}
            </div>
            <h4 className="ad-display text-3xl ad-cream mb-3 group-hover:ad-gold transition-colors" style={{ letterSpacing: "0.1em" }}>
              {p.title}
            </h4>
            <div className="ad-sans text-xs tracking-widest ad-dim mb-4">{p.duration}</div>
            <p className="ad-serif italic ad-mid text-sm leading-loose mb-8">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="ad-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain opacity-40"
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