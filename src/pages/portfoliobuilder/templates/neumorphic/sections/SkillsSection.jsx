import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="animate-reveal space-y-6" style={{ animationDelay: "0.1s" }}>
      {/* Technical Skills Card */}
      <div className="stripe-card p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <div className="w-1.5 h-7 bg-indigo-500 rounded-full"></div> Core Expertise
        </h3>
        <div className="gradient-line mb-8"></div>

        <div className="space-y-8">
          {Object.entries(categorizeSkills(data.skills)).map(([category, skills], idx) => (
            <div key={category} className={idx !== 0 ? "pt-6 border-t border-gray-100" : ""}>
              <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag inline-flex items-center gap-1.5 hover:shadow-md transition-shadow"
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
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Card */}
      {data.languages && data.languages.length > 0 && (
        <div className="stripe-card p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <div className="w-1.5 h-7 bg-teal-500 rounded-full"></div> Languages
          </h3>
          <div className="gradient-line mb-6 opacity-60"></div>
          <div className="flex flex-wrap gap-2.5">
            {data.languages.map((lang, i) => (
              <span key={i} className="skill-tag inline-flex items-center gap-1.5 hover:shadow-md transition-shadow">
                <span className="text-gray-400 opacity-70">🌐</span>
                {lang}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SkillsSection;