import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <section id="about" className="nm-card p-8 md:p-12 relative overflow-hidden nm-reveal">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]"
        style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)' }} />

      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />

      <div className="relative flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Avatar */}
        <div className="shrink-0 group">
          <div className="relative">
            {/* Spinning ring */}
            <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #6366f1)',
                animation: 'nm-spin-slow 4s linear infinite',
                borderRadius: '50%',
                padding: '2px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }} />
            <img
              src={data.profileImage || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80"}
              alt="Profile"
              className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover"
              style={{ border: '3px solid white', boxShadow: '0 8px 32px rgba(99,102,241,0.2)' }}
            />
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-400 border-[3px] border-white rounded-full"
              style={{ animation: 'nm-pulse 2.5s ease-in-out infinite' }} />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="nm-mono text-xs text-indigo-400 tracking-[0.2em] uppercase mb-3">Portfolio</div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2 leading-tight">
            {data.name}
          </h1>
          <h2 className="text-lg md:text-xl font-semibold mb-4"
            style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {data.title}
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-2xl mb-7 text-base font-light">
            {data.summary}
          </p>

          {/* Contact icons + links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            {data.email && (
              <a href={`mailto:${data.email}`} className="nm-icon-circle" title={data.email}>
                <span>✉</span>
              </a>
            )}
            {data.phone && (
              <a href={`tel:${data.phone}`} className="nm-icon-circle" title={data.phone}>
                <span>☎</span>
              </a>
            )}
            {data.location && (
              <span className="nm-icon-circle" title={data.location}>
                <span>📍</span>
              </span>
            )}

            {(data.email || data.phone || data.location) && data.links &&
              Object.values(data.links).some(Boolean) && (
              <div className="w-px h-6 bg-slate-200 hidden sm:block mx-1" />
            )}

            {data.links && Object.entries(data.links).map(([platform, url]) => (
              url ? (
                <a key={platform} href={url} target="_blank" rel="noreferrer"
                  className="nm-pill capitalize">
                  <img src={getSkillLogo(platform)} alt={platform}
                    className="w-4 h-4 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }} />
                  {platform}
                  <span className="text-slate-300 text-xs">↗</span>
                </a>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;