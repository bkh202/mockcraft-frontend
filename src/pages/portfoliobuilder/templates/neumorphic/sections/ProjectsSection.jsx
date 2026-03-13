import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  return (
    <section id="projects" className="animate-reveal" style={{ animationDelay: "0.4s" }}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-2 flex items-center gap-2">
        <span className="text-2xl">🚀</span> Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects?.map((p, i) => (
          <div key={i} className="stripe-card p-6 flex flex-col h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="text-xs font-bold tracking-wider text-indigo-500 uppercase bg-indigo-50 px-2.5 py-1 rounded-md shadow-sm border border-indigo-100">
                {p.duration}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-gray-200 shadow-sm">
                  <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
              )}
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {p.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
              {p.techStack?.map((tech, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all cursor-default"
                >
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;