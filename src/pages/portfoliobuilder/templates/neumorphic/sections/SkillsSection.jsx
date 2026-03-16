import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="space-y-5 nm-reveal" style={{ animationDelay: '0.1s' }}>

      {/* Skills card */}
      <div className="nm-card p-7">
        <div className="nm-section-head">
          <div className="nm-accent-bar h-7 bg-indigo-500" />
          <h3 className="text-lg font-bold text-slate-900">Core Expertise</h3>
        </div>
        <div className="h-0.5 w-12 rounded-full mb-6"
          style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)' }} />

        <div className="space-y-6">
          {Object.entries(categorizeSkills(data.skills)).map(([category, skills], idx) => (
            <div key={category} className={idx !== 0 ? 'pt-5 border-t border-slate-100' : ''}>
              <p className="nm-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="nm-tag">
                    <img src={getSkillLogo(skill)} alt={skill}
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages card */}
      {data.languages?.length > 0 && (
        <div className="nm-card p-7">
          <div className="nm-section-head">
            <div className="nm-accent-bar h-7 bg-teal-500" />
            <h3 className="text-lg font-bold text-slate-900">Languages</h3>
          </div>
          <div className="h-0.5 w-12 rounded-full mb-5"
            style={{ background: 'linear-gradient(90deg, #14b8a6, #06b6d4)' }} />
          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang, i) => (
              <span key={i} className="nm-tag">
                🌐 {lang}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SkillsSection;