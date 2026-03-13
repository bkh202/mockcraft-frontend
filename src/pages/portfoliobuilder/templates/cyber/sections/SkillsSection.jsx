import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="pt-10">
      <h2 className="text-2xl font-bold mb-8 text-green-400">
        {">"} ./view_skills.sh<span className="blinking-cursor"></span>
      </h2>

      <div className="space-y-10 mb-12">
        {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-mono mb-4 text-green-500/80 flex items-center gap-2">
              <span className="text-green-300">root@sys:~/skills/{category.replace(/[^a-zA-Z]/g, '').toLowerCase()}$</span> ls -la
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="glitch-card p-3 flex items-center justify-center gap-2.5 cursor-crosshair group">
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                    }}
                  />
                  <span className="opacity-70 group-hover:opacity-100 group-hover:text-white transition-colors text-sm font-medium">
                    [{skill}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.languages && data.languages.length > 0 && (
        <div className="pt-6 border-t border-green-500/20">
          <h2 className="text-2xl font-bold mb-6 text-green-400">
            {">"} ./view_languages.sh
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.languages.map((lang, i) => (
              <div key={i} className="glitch-card p-3 flex items-center justify-center gap-2 cursor-crosshair border-dashed group">
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">🌐</span>
                <span className="opacity-70 group-hover:opacity-100 group-hover:text-white transition-colors text-sm font-medium">
                  CMD_LANG: {lang}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SkillsSection;