import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section id="skills" className="py-24 relative">
      <div className="pp-section-num">01</div>
      <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Skills & Tools</h3>
      <div className="pp-line-brown w-32 mb-12" />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="pp-card p-6 rounded-sm break-inside-avoid">
            <h4 className="pp-serif text-sm pp-brown font-semibold italic mb-4 pb-3 border-b border-black/5">{cat}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div
                  key={i}
                  className="pp-tag flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs cursor-default pp-sans"
                >
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3.5 h-3.5 object-contain opacity-70"
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