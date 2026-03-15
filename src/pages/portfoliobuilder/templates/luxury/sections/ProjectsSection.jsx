import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section className="py-28">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">WORKS</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {data.projects.map((p, i) => (
          <div key={i} className="lx-card p-10 relative overflow-hidden group">
            <div className="lx-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="lx-display text-xs tracking-widest text-yellow-700/50">{p.duration}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="lx-btn px-4 py-1.5 text-xs">
                    VIEW ↗
                  </a>
                )}
              </div>
              <h4 className="lx-serif text-3xl text-stone-200 mb-4 group-hover:text-yellow-500 transition-colors">
                {p.title}
              </h4>
              <p className="lx-serif text-stone-500 leading-loose mb-8">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.techStack?.map((tech, idx) => (
                  <div key={idx} className="lx-tag flex items-center gap-1.5 px-3 py-1 cursor-default text-xs">
                    <img
                      src={getSkillLogo(tech)}
                      alt={tech}
                      className="w-3 h-3 object-contain opacity-40"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;