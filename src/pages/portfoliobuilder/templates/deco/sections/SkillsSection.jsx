import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-28 relative">
      <div className="ad-num">I</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Technical Mastery</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="ad-card p-8 break-inside-avoid">
            <h4 className="ad-sans text-xs tracking-[0.3em] ad-gold mb-6 pb-4 border-b border-yellow-700/20">
              {cat.toUpperCase()}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="ad-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
                  <img
                    src={getSkillLogo(s)}
                    alt={s}
                    className="w-3.5 h-3.5 object-contain opacity-50"
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