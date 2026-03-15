import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="lx-ornament mb-8 lx-reveal" />

      <div className="lx-display text-xs tracking-[0.6em] text-stone-500 mb-12 lx-reveal" style={{ animationDelay: '0.2s' }}>
        PORTFOLIO COLLECTION
      </div>

      <div className="relative mb-12 lx-reveal" style={{ animationDelay: '0.3s' }}>
        <div className="w-1 h-24 bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent mx-auto mb-8" />
        <div className="relative inline-block">
          <div className="absolute -inset-3 rounded-full border border-yellow-600/10" />
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
            style={{ filter: 'sepia(20%) contrast(1.05)', border: '1px solid rgba(201,168,76,0.3)' }}
          />
        </div>
      </div>

      <h1 className="lx-display text-5xl md:text-7xl font-semibold lx-gold lx-reveal mb-4" style={{ animationDelay: '0.5s' }}>
        {data.name}
      </h1>

      <div className="lx-divider w-64 mx-auto my-8" />

      <h2 className="lx-serif text-2xl md:text-3xl italic text-stone-400 mb-8 lx-reveal" style={{ animationDelay: '0.7s' }}>
        {data.title}
      </h2>

      <p className="lx-serif text-lg text-stone-500 max-w-2xl mx-auto leading-loose italic lx-reveal" style={{ animationDelay: '0.9s' }}>
        "{data.summary}"
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-12 lx-reveal" style={{ animationDelay: '1.1s' }}>
        {data.links && Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <a key={platform} href={url} target="_blank" rel="noreferrer" className="lx-btn px-8 py-3 rounded-none flex items-center gap-3">
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
    </section>
  );
}

export default HeroSection;