import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section id="projects" className="mb-14 pt-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4">
        <span className="text-2xl">🚀</span> Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="notion-card p-6 flex flex-col h-full bg-white">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-gray-600">📁</span> {p.title}
              </h3>
              <div className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{p.duration}</div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5 grow">
              {p.description}
            </p>

            <div className="flex flex-col gap-4 mt-auto pt-5 border-t border-gray-100">
              <div className="flex flex-wrap gap-1.5">
                {p.techStack?.map((tech, idx) => (
                  <div key={idx} className="notion-tag text-xs px-3 py-1.5 inline-flex items-center gap-1.5">
                    <img
                      src={getSkillLogo(tech)}
                      alt={tech}
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                      }}
                    />
                    {tech}
                  </div>
                ))}
              </div>

              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors w-fit group">
                  View Project <span className="text-xs group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;