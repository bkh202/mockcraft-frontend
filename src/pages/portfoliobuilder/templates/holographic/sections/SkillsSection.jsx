import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="animate-cinematic pt-10" style={{ animationDelay: '0.3s' }}>
      <h3 className="text-center text-sm font-bold text-purple-400 tracking-[0.3em] uppercase mb-12">
        Core Competencies
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
          <div key={category} className="spatial-card p-8 flex flex-col group hover:border-cyan-400/50 transition-all duration-500">
            <h4 className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase mb-6 border-b border-gray-800/50 pb-4 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium tracking-wide hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-crosshair"
                >
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:brightness-125 transition-all"
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
      </div>

      {data.languages && data.languages.length > 0 && (
        <>
          <h3 className="text-center text-sm font-bold text-cyan-400 tracking-[0.3em] uppercase mb-8 mt-16">
            Linguistics
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {data.languages.map((lang, i) => (
              <div
                key={i}
                className="spatial-card px-8 py-4 flex items-center gap-3 text-gray-300 font-bold tracking-wide hover:text-white hover:border-purple-400/50 transition-all cursor-crosshair"
              >
                <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">🌐</span>
                {lang}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default SkillsSection;