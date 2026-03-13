import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  return (
    <section id="projects" className="pt-10">
      <h2 className="text-2xl font-bold mb-6">{">"} ls -la ./projects<span className="blinking-cursor"></span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects?.map((p, i) => (
          <div key={i} className="glitch-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs opacity-50 border border-[#00ff41]/30 px-2 py-1">TIMESTMP: {p.duration}</div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-xs bg-[#00ff41] text-black font-bold px-3 py-1 hover:bg-white transition-colors">
                    [EXECUTE]
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 hover:text-[#00ff41] transition-colors">./{p.title}</h3>
              <p className="text-sm opacity-80 mb-6">{p.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-[#00ff41]/20">
              <span className="text-xs text-white opacity-50 mr-1">DEPENDENCIES:</span>
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 text-xs border border-[#00ff41]/50 px-2 py-1 bg-[#00ff41]/10 text-white hover:bg-[#00ff41]/20 transition-colors">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3.5 h-3.5 object-contain opacity-80 drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]"
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