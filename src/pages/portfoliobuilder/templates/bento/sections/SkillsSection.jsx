import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="reveal-item" style={{ animationDelay: '0.3s' }}>
      <h3 className="text-center text-3xl font-bold text-white mb-12 tracking-widest uppercase drop-shadow-md">
        Tech Arsenal
      </h3>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
        {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
          <div
            key={category}
            className="glass-premium p-6 rounded-3xl break-inside-avoid flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold text-gray-300 mb-5 border-b border-white/10 pb-3 flex items-center gap-2 tracking-wide">
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 skill-tag rounded-xl font-medium text-gray-300 cursor-default flex items-center gap-2 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                >
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                    }}
                  />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {data.languages && data.languages.length > 0 && (
          <div className="glass-premium p-6 rounded-3xl break-inside-avoid flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-300 mb-5 border-b border-white/10 pb-3 flex items-center gap-2 tracking-wide">
              🗣️ Languages
            </h4>
            <div className="flex flex-wrap gap-3">
              {data.languages.map((lang, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 skill-tag rounded-xl font-medium text-gray-300 cursor-default flex items-center gap-2 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                >
                  <span className="opacity-80">🌐</span>
                  <span className="text-sm">{lang}</span>
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