import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="qm-section-label mb-8 qm-reveal">sys://portfolio.init()</div>

      <div className="relative mb-10 qm-reveal" style={{ animationDelay: "0.2s" }}>
        <div
          className="absolute -inset-3 rounded-full"
          style={{
            border: "1px solid rgba(0,212,255,0.2)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -inset-6 rounded-full"
          style={{
            border: "1px solid rgba(124,58,237,0.15)",
            animation: "pulse 3s ease-in-out infinite 1s",
          }}
        />
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-40 h-40 rounded-full object-cover"
          style={{ border: "1px solid rgba(0,212,255,0.25)", boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
        />
      </div>

      <h1 className="qm-mono text-5xl md:text-7xl font-semibold qm-white mb-3 qm-reveal" style={{ animationDelay: "0.3s", letterSpacing: "-0.02em" }}>
        {data.name}
      </h1>
      <h2 className="qm-mono text-base qm-cyan mb-8 tracking-widest qm-reveal" style={{ animationDelay: "0.5s" }}>
        {">"} {data.title}
      </h2>
      <p className="qm-mid text-lg max-w-2xl mx-auto leading-relaxed qm-reveal" style={{ animationDelay: "0.7s" }}>
        {data.summary}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 qm-reveal" style={{ animationDelay: "0.9s" }}>
        {data.links &&
          Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="qm-btn px-6 py-3 rounded-full flex items-center gap-2 capitalize"
              >
                <img
                  src={getSkillLogo(platform)}
                  alt={platform}
                  className="w-4 h-4 object-contain opacity-60"
                  onError={(e) => { e.target.style.display = "none"; }}
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