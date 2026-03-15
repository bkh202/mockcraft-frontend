import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">01 — SKILLS</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Tech Arsenal</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="ar-card p-6 rounded-2xl break-inside-avoid">
            <h4 className="ar-mono text-xs ar-green tracking-widest uppercase mb-4 pb-3 border-b border-emerald-500/10">
              {cat}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div
                  key={i}
                  className="ar-tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-default"
                >
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