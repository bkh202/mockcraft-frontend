import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="animate-fade-in-up delay-100">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Tools, technologies, and languages I work with</p>
        </div>
      </div>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
          <div
            key={category}
            className="glass-card p-6 rounded-2xl flex flex-col break-inside-avoid hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-white/5"
          >
            <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700/50 pb-3 flex items-center">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-white/40 dark:bg-black/20 border border-gray-200/50 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/20 hover:border-indigo-400/50 transition-colors cursor-default flex items-center gap-2"
                >
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain drop-shadow-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                    }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}

        {data.languages && data.languages.length > 0 && (
          <div className="glass-card p-6 rounded-2xl flex flex-col break-inside-avoid hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-white/5">
            <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700/50 pb-3 flex items-center gap-2">
              🗣️ Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {data.languages.map((lang, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-white/40 dark:bg-black/20 border border-gray-200/50 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/20 hover:border-purple-400/50 transition-colors cursor-default flex items-center gap-2"
                >
                  🌐 {lang}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsSection;