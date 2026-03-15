import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-20">
      <div className="mx-section-header mb-2">skills.query()</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="mx-card p-6 rounded-sm break-inside-avoid">
            <div className="mx-dim text-xs mb-3">// {cat}</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="mx-tag flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-mono cursor-default">
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3 h-3 object-contain opacity-70"
                    onError={(e) => { e.target.style.display = "none"; }}
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