import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-yellow">スキル</h3>
        <span className="tn-display text-gray-600 text-xl">/ SKILLS</span>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="tn-card p-6 rounded-sm break-inside-avoid">
            <h4 className="tn-code text-xs tracking-widest text-red-500/50 mb-4 pb-3 border-b border-red-500/10">
              // {cat}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="tn-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3.5 h-3.5 object-contain opacity-60"
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