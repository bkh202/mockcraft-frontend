import { getSkillLogo } from "../../../components/categorizeSkills";

function ProjectsSection({ data }) {
  if (!data.projects?.length) return null;

  return (
    <section id="projects">
      <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
        <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Selected Works
      </h2>
      <div className="grid xl:grid-cols-2 gap-8">
        {data.projects.map((p, i) => (
          <div key={i} className="group bg-white dark:bg-[#131b2f] p-8 md:p-10 rounded-4xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {p.title}
              </h3>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-colors">
                  ↗
                </a>
              )}
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8 grow leading-relaxed text-sm md:text-base">
              {p.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              {p.techStack?.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <img
                    src={getSkillLogo(tech)}
                    alt={tech}
                    className="w-3.5 h-3.5 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
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