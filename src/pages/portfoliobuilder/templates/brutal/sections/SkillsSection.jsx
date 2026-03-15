import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-24 relative">
      <div className="bt-section-num">01</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px' }} />
        <h3 className="bt-display text-5xl bt-white">TECH ARSENAL</h3>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="bt-card p-6 bg-[#0a0a0a] break-inside-avoid">
            <h4 className="bt-mono text-xs uppercase tracking-widest bt-dim mb-4">{cat}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="bt-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3 h-3 object-contain opacity-50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {s}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;