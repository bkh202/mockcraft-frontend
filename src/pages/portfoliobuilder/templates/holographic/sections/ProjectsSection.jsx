import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  return (
    <section id="projects" className="pt-10">
      <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-cinematic" style={{ animationDelay: '0.6s' }}>Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects?.map((p, i) => (
          <div key={i} className="spatial-card p-8 md:p-10 flex flex-col h-full group animate-cinematic" style={{ animationDelay: `${0.2 * i + 0.7}s` }}>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{p.duration}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-cyan-300 tracking-wide transition-colors uppercase">
                    Demo ↗
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-3xl font-bold text-white mb-4 group-hover:holo-text transition-all duration-300">{p.title}</h4>
            <p className="text-gray-400 leading-relaxed font-light mb-8 grow">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {p.techStack?.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-300 tracking-wide hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all cursor-crosshair"
                >
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3.5 h-3.5 object-contain drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
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
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;