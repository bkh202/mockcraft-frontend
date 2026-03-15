import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="ad-ornament mb-10 ad-reveal">
        <div className="ad-ornament-line rev" />
        <div className="ad-diamond" />
        <div className="ad-ornament-line" />
      </div>

      <div className="ad-sans text-xs tracking-[0.6em] ad-dim mb-6 ad-reveal" style={{ animationDelay: "0.1s" }}>
        PORTFOLIO · {new Date().getFullYear()}
      </div>

      <div className="relative mb-12 ad-reveal" style={{ animationDelay: "0.2s" }}>
        <div
          className="absolute -inset-6"
          style={{
            border: "1px solid rgba(218,165,32,0.2)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: "spinSlow 20s linear infinite",
          }}
        />
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
          alt="Profile"
          className="w-40 h-40 object-cover"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            border: "1px solid rgba(218,165,32,0.3)",
          }}
        />
      </div>

      <h1
        className="ad-display text-6xl md:text-8xl ad-cream mb-4 ad-reveal"
        style={{ animationDelay: "0.3s", letterSpacing: "0.2em" }}
      >
        {data.name}
      </h1>

      <div className="ad-divider w-64 mx-auto my-6" />

      <h2 className="ad-sans text-sm tracking-[0.4em] ad-gold mb-8 ad-reveal" style={{ animationDelay: "0.5s" }}>
        {data.title.toUpperCase()}
      </h2>

      <p className="ad-serif italic ad-mid text-lg max-w-2xl mx-auto leading-loose ad-reveal" style={{ animationDelay: "0.7s" }}>
        {data.summary}
      </p>

      <div className="ad-ornament mt-8 mb-10 ad-reveal" style={{ animationDelay: "0.8s" }}>
        <div className="ad-ornament-line rev" />
        <div className="ad-diamond" />
        <div className="ad-diamond" style={{ animationDelay: "0.1s" }} />
        <div className="ad-diamond" style={{ animationDelay: "0.2s" }} />
        <div className="ad-ornament-line" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 ad-reveal" style={{ animationDelay: "0.9s" }}>
        {data.links &&
          Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="ad-btn px-8 py-3 flex items-center gap-2 capitalize"
              >
                <span className="flex items-center gap-2">
                  <img
                    src={getSkillLogo(platform)}
                    alt={platform}
                    className="w-4 h-4 object-contain opacity-60"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  {platform}
                </span>
              </a>
            );
          })}
      </div>
    </section>
  );
}

export default HeroSection;