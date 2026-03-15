import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="mb-16 ed-reveal">
      <p className="ed-section-label">Stack</p>
      <h2 className="ed-serif text-3xl md:text-4xl text-[#111] mb-10">Technical Expertise</h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
        {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
          <div key={category} className="ed-card p-5 break-inside-avoid">
            <h3 className="ed-mono text-xs text-stone-400 uppercase tracking-widest mb-4 pb-3 border-b border-stone-100">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <span key={i} className="ed-tag">
                  <img src={getSkillLogo(skill)} alt={skill}
                    className="w-3.5 h-3.5 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {data.languages?.length > 0 && (
          <div className="ed-card p-5 break-inside-avoid">
            <h3 className="ed-mono text-xs text-stone-400 uppercase tracking-widest mb-4 pb-3 border-b border-stone-100">
              Languages
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {data.languages.map((lang, i) => (
                <span key={i} className="ed-tag">
                  🗣 {lang}
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