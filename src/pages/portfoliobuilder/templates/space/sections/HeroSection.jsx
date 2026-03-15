import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-20 relative">
      {/* Orbit rings around profile */}
      <div className="relative mb-12 sp-reveal" style={{ animationDelay: "0.2s" }}>
        <div
          className="sp-orbit-ring"
          style={{
            width: "220px",
            height: "220px",
            top: "-30px",
            left: "-30px",
            animation: "orbitRotate 20s linear infinite",
          }}
        />
        <div
          className="sp-orbit-ring"
          style={{
            width: "280px",
            height: "280px",
            top: "-60px",
            left: "-60px",
            animation: "orbitCounter 30s linear infinite",
            borderStyle: "dashed",
            opacity: 0.5,
          }}
        />
        {/* Orbiting dot */}
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            top: "-30px",
            left: "-30px",
            animation: "orbitRotate 20s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#64a0ff",
              boxShadow: "0 0 10px #64a0ff",
            }}
          />
        </div>

        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-40 h-40 rounded-full object-cover z-10"
          style={{ border: "1px solid rgba(100,160,255,0.3)", boxShadow: "0 0 40px rgba(100,160,255,0.2)" }}
        />
      </div>

      <div className="sp-display text-xs tracking-[0.5em] sp-dim mb-4 sp-reveal" style={{ animationDelay: "0.3s" }}>
        SYSTEM: ONLINE — COORDINATES LOCKED
      </div>

      <h1
        className="text-5xl md:text-7xl font-bold sp-white mb-4 sp-reveal"
        style={{ animationDelay: "0.5s", textShadow: "0 0 40px rgba(100,160,255,0.3)" }}
      >
        {data.name}
      </h1>

      <h2 className="sp-section-title text-lg mb-8 sp-reveal" style={{ animationDelay: "0.7s" }}>
        {data.title}
      </h2>

      <p className="text-blue-300/60 text-lg max-w-2xl mx-auto leading-relaxed sp-reveal" style={{ animationDelay: "0.9s" }}>
        {data.summary}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 sp-reveal" style={{ animationDelay: "1.1s" }}>
        {data.links &&
          Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="sp-btn px-6 py-3 rounded-full flex items-center gap-2"
              >
                <img
                  src={getSkillLogo(platform)}
                  alt={platform}
                  className="w-4 h-4 object-contain opacity-70"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
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