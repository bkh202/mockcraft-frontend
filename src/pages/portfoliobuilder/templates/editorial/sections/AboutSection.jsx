import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <section id="about" className="mb-16 pt-6 ed-reveal">
      {/* Profile image */}
      <div className="relative inline-block mb-7 group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-stone-200 to-zinc-300 opacity-60 group-hover:opacity-80 transition-opacity blur-sm" />
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-[3px] border-white shadow-xl"
        />
        <div className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"
          style={{ animation: 'ed-pulse-dot 2.5s ease-in-out infinite' }} />
      </div>

      {/* Name + title */}
      <div className="mb-5">
        <p className="ed-section-label mb-2">Portfolio</p>
        <h1 className="ed-serif text-4xl md:text-6xl text-[#111] leading-tight tracking-tight mb-3">
          {data.name}
        </h1>
        <p className="text-lg md:text-xl text-stone-500 font-light tracking-wide">{data.title}</p>
      </div>

      {/* Contact meta */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-400 mb-7 ed-mono">
        {data.location && (
          <span className="flex items-center gap-1.5">
            <span>📍</span> {data.location}
          </span>
        )}
        {data.email && (
          <a href={`mailto:${data.email}`}
            className="flex items-center gap-1.5 hover:text-stone-700 transition-colors">
            <span>✉</span> {data.email}
          </a>
        )}
        {data.phone && (
          <a href={`tel:${data.phone}`}
            className="flex items-center gap-1.5 hover:text-stone-700 transition-colors">
            <span>☎</span> {data.phone}
          </a>
        )}
      </div>

      {/* Social links */}
      {data.links && (
        <div className="flex flex-wrap gap-2 mb-10">
          {Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a key={platform} href={url} target="_blank" rel="noreferrer"
                className="ed-link-btn capitalize">
                <img src={getSkillLogo(platform)} alt={platform}
                  className="w-4 h-4 object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }} />
                {platform}
                <span className="text-stone-400 text-xs">↗</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Summary callout */}
      <div className="ed-callout">
        <p className="text-base leading-relaxed text-stone-600 font-light">
          {data.summary}
        </p>
      </div>
    </section>
  );
}

export default AboutSection;