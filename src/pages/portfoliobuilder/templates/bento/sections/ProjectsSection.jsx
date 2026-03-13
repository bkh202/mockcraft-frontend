import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  return (
    <section id="projects" className="pt-10">
      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center reveal-item">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects?.map((p, i) => (
          <div key={i} className="glass-premium rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full relative overflow-hidden group reveal-item float-card" style={{ animationDelay: `${0.2 * i}s` }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-300 w-fit">
                  {p.duration}
                </span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-white transition-colors bg-indigo-500/10 hover:bg-indigo-500/30 px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-500/20 flex items-center gap-1">
                    Live Demo ↗
                  </a>
                )}
              </div>

              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{p.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-8 grow text-sm md:text-base">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.techStack?.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default shadow-sm"
                  >
                    <img
                      src={getSkillLogo(tech)}
                      alt={tech}
                      className="w-3.5 h-3.5 object-contain drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                      }}
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