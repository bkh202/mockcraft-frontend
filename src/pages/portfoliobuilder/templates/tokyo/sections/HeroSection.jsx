import { getSkillLogo } from "../../../components/categorizeSkills";
import Marquee from "./Marquee";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <Marquee text={`東京 · TOKYO NEON · ${data.name} · ${data.title} · `} />

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative shrink-0">
          <div
            className="absolute -inset-4 rounded-2xl opacity-30"
            style={{
              background: 'linear-gradient(135deg, rgba(255,0,60,0.4), rgba(0,245,255,0.4))',
              filter: 'blur(20px)',
            }}
          />
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
            alt="Profile"
            className="relative w-48 h-48 object-cover"
            style={{ border: '1px solid rgba(255,0,60,0.3)', filter: 'contrast(1.1) saturate(1.2)' }}
          />
          <div className="absolute -bottom-3 -right-3 bg-red-600 px-3 py-1" style={{ boxShadow: '0 0 15px rgba(255,0,60,0.5)' }}>
            <span className="tn-code text-white text-xs font-bold">AVAIL</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="tn-code text-xs tracking-[0.4em] text-gray-600 mb-4 tn-reveal">&lt;portfolio&gt;</div>
          <h1 className="text-5xl md:text-7xl font-bold tn-white mb-3 tn-reveal" style={{ animationDelay: '0.1s' }}>
            {data.name.split(' ')[0]}
            <span className="tn-red block">{data.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h2 className="tn-display text-lg tn-cyan mb-6 tn-reveal" style={{ animationDelay: '0.2s' }}>
            {data.title}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-lg tn-reveal" style={{ animationDelay: '0.3s' }}>
            {data.summary}
          </p>
          <div className="flex flex-wrap gap-3 mt-8 tn-reveal" style={{ animationDelay: '0.4s' }}>
            {data.links &&
              Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="tn-btn px-5 py-2.5 flex items-center gap-2 capitalize"
                  >
                    <img
                      src={getSkillLogo(platform)}
                      alt={platform}
                      className="w-4 h-4 object-contain opacity-60"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {platform}
                  </a>
                );
              })}
          </div>
          <div className="tn-code text-xs tracking-[0.4em] text-gray-600 mt-4 tn-reveal" style={{ animationDelay: '0.5s' }}>
            &lt;/portfolio&gt;
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;