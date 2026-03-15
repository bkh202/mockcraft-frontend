import { categorizeSkills, getSkillLogo } from "../../../components/categorizeSkills";

function SkillsSection({ data }) {
  return (
    <section className="py-28">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">EXPERTISE</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
          <div key={cat} className="lx-card p-8 break-inside-avoid">
            <h4 className="lx-display text-sm tracking-widest text-yellow-600/70 mb-6 pb-4 border-b border-yellow-600/10">
              {cat.toUpperCase()}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="lx-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
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