import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  const categorizedSkills = categorizeSkills(data.skills || []);

  return (
    <section id="skills">
      <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
        <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Expertise
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="bg-white dark:bg-[#131b2f] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-teal-100 dark:hover:border-teal-900/50 transition-all">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-default">
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain"
                    onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                  />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {data.languages && data.languages.length > 0 && (
          <div className="bg-white dark:bg-[#131b2f] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-rose-100 dark:hover:border-rose-900/50 transition-all">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.languages.map((lang, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl text-sm font-bold text-rose-600 dark:text-rose-400">
                  💬 {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsSection;