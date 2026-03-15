import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-24">
      <div className="qm-section-label mb-2">module.skills</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="qm-card p-6 rounded-xl break-inside-avoid">
            <div className="qm-mono text-xs qm-cyan/50 mb-4 pb-3 border-b border-cyan-500/10">{`/* ${cat} */`}</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="qm-tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-default">
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3.5 h-3.5 object-contain opacity-60"
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