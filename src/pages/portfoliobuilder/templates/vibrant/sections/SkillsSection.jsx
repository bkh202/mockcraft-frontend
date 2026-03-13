import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <div className="space-y-8">
      {/* Skills Card */}
      <div className="vibrant-card p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
          <span className="text-2xl">⚡</span> Skills
        </h2>

        <div className="space-y-6">
          {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-pink-500 mb-3 tracking-wide uppercase">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="chip-vibrant">
                    <img
                      src={getSkillLogo(skill)}
                      alt={skill}
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/711/711280.png";
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
        <div className="vibrant-card p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
            <span className="text-2xl">🌍</span> Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang, i) => (
              <span key={i} className="chip-vibrant bg-linear-to-r from-emerald-100 to-teal-100 text-teal-800 border-teal-200">
                🗣 {lang}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsSection;