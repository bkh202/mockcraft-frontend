import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <span className="text-3xl">🚀</span> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <div key={i} className="vibrant-card p-6 hover:border-pink-300 group flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                {p.title}
              </h3>
              <span className="text-xs bg-gray-100 font-medium px-2 py-1 rounded-md text-gray-500 whitespace-nowrap ml-2 shadow-inner">
                {p.duration}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-5 grow">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.techStack?.map((tech, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-gray-200 px-2.5 py-1 rounded-full text-gray-700 shadow-sm">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3 h-3 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/711/711280.png";
                    }}
                  />
                  {tech}
                </span>
              ))}
            </div>

            {p.link && (
              <div className="mt-auto pt-3 border-t border-gray-100">
                <a href={p.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-pink-500 hover:text-purple-600 transition-colors inline-flex items-center gap-1 group/link">
                  View Project <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;