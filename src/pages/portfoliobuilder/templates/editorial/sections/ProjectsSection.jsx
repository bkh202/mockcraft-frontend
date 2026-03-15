import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section id="projects" className="mb-16 ed-reveal">
      <p className="ed-section-label">Work</p>
      <h2 className="ed-serif text-3xl md:text-4xl text-[#111] mb-10">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.projects.map((p, i) => (
          <div key={i} className="ed-card p-6 flex flex-col h-full">
            {/* Top row */}
            <div className="flex items-start justify-between mb-4 gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-lg shrink-0">
                📁
              </div>
              <span className="ed-mono text-xs text-stone-400 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full self-start">
                {p.duration}
              </span>
            </div>

            <h3 className="ed-serif text-xl text-[#111] mb-3 leading-snug">{p.title}</h3>

            <p className="text-stone-500 text-sm leading-relaxed mb-5 grow">
              {p.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-4 pt-4 border-t border-stone-100">
              {p.techStack?.map((tech, idx) => (
                <span key={idx} className="ed-tag text-xs">
                  <img src={getSkillLogo(tech)} alt={tech}
                    className="w-3.5 h-3.5 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#111] transition-colors group w-fit ed-mono">
                View Project
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;