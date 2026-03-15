import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// TECH STACK</div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="sw-card p-6 rounded-sm break-inside-avoid">
            <h4 className="sw-pixel text-lg text-pink-400 mb-4 tracking-wider border-b border-pink-500/20 pb-2">
              {cat}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div
                  key={i}
                  className="sw-tag flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-semibold cursor-default"
                >
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3.5 h-3.5 object-contain"
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