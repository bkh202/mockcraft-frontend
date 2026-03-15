import { getSkillLogo } from "../../../components/categorizeSkills";
import Marquee from "./Marquee";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 relative max-w-6xl mx-auto">
      <Marquee text={`${data.name} — ${data.title} — AVAILABLE FOR HIRE — `} />

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="bt-mono text-xs bt-dim uppercase tracking-widest mb-4 bt-reveal">
            Portfolio — {new Date().getFullYear()}
          </div>

          <h1 className="bt-display text-[5rem] md:text-[8rem] leading-none bt-white bt-reveal" style={{ animationDelay: '0.1s' }}>
            {data.name.split(' ').map((w, i) => (
              <span key={i}>
                {i % 2 === 1 ? <span className="bt-accent">{w}</span> : w}{' '}
              </span>
            ))}
          </h1>

          <div className="flex items-center gap-4 my-6 bt-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="bt-line-accent" style={{ width: '60px' }} />
            <h2 className="bt-mono text-base" style={{ color: '#888' }}>{data.title}</h2>
          </div>

          <p className="text-gray-500 leading-relaxed max-w-xl bt-reveal" style={{ animationDelay: '0.5s' }}>
            {data.summary}
          </p>

          <div className="flex flex-wrap gap-3 mt-8 bt-reveal" style={{ animationDelay: '0.7s' }}>
            {data.links && Object.entries(data.links).map(([platform, url]) => {
              if (!url) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="bt-btn-outline px-5 py-2.5 flex items-center gap-2"
                >
                  <img
                    src={getSkillLogo(platform)}
                    alt={platform}
                    className="w-4 h-4 object-contain opacity-50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {platform}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative shrink-0 bt-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-orange-500/20 bt-stripe" />
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
            alt="Profile"
            className="relative w-56 h-64 object-cover"
            style={{ filter: 'contrast(1.1) grayscale(20%)', border: '2px solid #1e1e1e' }}
          />
          <div className="absolute -bottom-3 -right-3 bg-orange-600 w-12 h-12 flex items-center justify-center">
            <span className="bt-mono text-white text-xs font-bold">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;