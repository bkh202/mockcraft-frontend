import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 01</div>
        <h3 className="sp-section-title text-3xl">TECHNICAL SYSTEMS</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="sp-card p-6 rounded-2xl break-inside-avoid">
            <h4 className="sp-display text-xs tracking-widest sp-blue mb-4 pb-3 border-b border-blue-500/10">{cat}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="sp-tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-default">
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3.5 h-3.5 object-contain opacity-60"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
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