import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <div className="space-y-5 vb-reveal" style={{ animationDelay: '0.1s' }}>

      <div className="vb-card p-7">
        <div className="vb-label mb-1">Expertise</div>
        <h2 className="text-lg font-bold text-gray-900 mb-5 pb-4 border-b border-pink-100/60">
          ⚡ Skills
        </h2>
        <div className="space-y-5">
          {Object.entries(categorizeSkills(data.skills)).map(([category, skills], idx) => (
            <div key={category} className={idx !== 0 ? 'pt-4 border-t border-gray-50' : ''}>
              <p className="text-xs font-bold text-pink-500 uppercase tracking-widest mb-3">{category}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="vb-chip">
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

      {data.languages?.length > 0 && (
        <div className="vb-card p-7">
          <div className="vb-label mb-1">Communication</div>
          <h2 className="text-lg font-bold text-gray-900 mb-5 pb-4 border-b border-pink-100/60">
            🌍 Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang, i) => (
              <span key={i} className="vb-chip"
                style={{ background: 'linear-gradient(145deg, #ecfdf5, #f0fdfa)', color: '#065f46', borderColor: 'rgba(16,185,129,0.15)' }}>
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