import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <div className="relative mb-16 vb-reveal">
      {/* Floating background blobs */}
      <div className="absolute top-0 left-8 w-56 h-56 rounded-full pointer-events-none vb-float"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '0s' }} />
      <div className="absolute bottom-0 right-8 w-72 h-72 rounded-full pointer-events-none vb-float"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '2.5s' }} />

      <div className="relative vb-card p-8 md:p-14 text-center overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #6366f1, #06b6d4)' }} />

        {/* Profile image */}
        <div className="relative inline-block mb-7 vb-float">
          <div className="absolute -inset-2 rounded-full opacity-50"
            style={{ background: 'conic-gradient(from 0deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)', filter: 'blur(10px)', animation: 'vb-glow 3s ease-in-out infinite' }} />
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop"}
            alt={data.name}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            style={{ border: '4px solid white', boxShadow: '0 12px 40px rgba(139,92,246,0.25)' }}
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-400 border-[3px] border-white rounded-full"
            style={{ boxShadow: '0 0 12px rgba(52,211,153,0.5)', animation: 'vb-glow 2s ease-in-out infinite' }} />
        </div>

        {/* Name */}
        <div className="mb-2 text-xs font-bold tracking-[0.25em] uppercase vb-label">Portfolio</div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-3 leading-tight">
          {data.name}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold vb-grad mb-5">{data.title}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed mb-8 font-light">
          {data.summary}
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-3 mb-7">
          {data.email && (
            <a href={`mailto:${data.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-white transition-all border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-white transition-all border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              ☎ {data.phone}
            </a>
          )}
          {data.location && (
            <span className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 border border-white/60 shadow-sm">
              📍 {data.location}
            </span>
          )}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-3">
          {data.links && Object.entries(data.links).map(([platform, url]) => (
            url ? (
              <a key={platform} href={url} target="_blank" rel="noreferrer"
                className="vb-pill capitalize group">
                <img src={getSkillLogo(platform)} alt={platform}
                  className="w-4 h-4 object-contain brightness-0 invert"
                  onError={(e) => { e.target.style.display = 'none'; }} />
                {platform}
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">↗</span>
              </a>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;