import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="mb-14 pt-6">
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-2xl">⚡</span> Technical Expertise
        </h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
          <div
            key={category}
            className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-bold mb-4 text-gray-800 flex items-center gap-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 font-medium text-sm rounded-full border border-gray-200/80 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-default shadow-sm"
                >
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain"
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

        {data.languages && data.languages.length > 0 && (
          <div className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-base font-bold mb-4 text-gray-800 flex items-center gap-2">
              🌍 Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.languages.map((lang, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 font-medium text-sm rounded-full border border-gray-200/80 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-default shadow-sm"
                >
                  <span className="text-gray-400 text-sm">🗣</span> {lang}
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