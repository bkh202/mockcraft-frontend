import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  return (
    <section id="projects" className="animate-fade-in-up delay-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects?.map((p, i) => (
          <div
            key={i}
            className="group relative glass-card rounded-3xl p-8 flex flex-col h-full overflow-hidden hover:border-indigo-500/40 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {p.title}
                </h3>
                <span className="text-xs font-mono px-3 py-1 glass-card rounded-full text-gray-500">
                  {p.duration}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300/80 mb-8 grow">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.techStack?.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium backdrop-blur-md border border-gray-300/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-colors"
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

              {p.link && (
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all text-sm">
                    View Live Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;