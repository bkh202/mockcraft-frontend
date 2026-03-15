import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
      <div className="ar-num mb-8 ar-reveal">PORTFOLIO / {new Date().getFullYear()}</div>
      <div className="relative mb-10 ar-float ar-reveal" style={{ animationDelay: "0.2s" }}>
        <div
          className="absolute -inset-4 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg,rgba(52,211,153,0.3),rgba(129,140,248,0.3),rgba(45,212,191,0.3),rgba(52,211,153,0.3))",
            filter: "blur(15px)",
          }}
        />
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-44 h-44 rounded-full object-cover border border-emerald-500/20"
        />
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold ar-title ar-reveal mb-4" style={{ animationDelay: "0.3s" }}>
        {data.name}
      </h1>
      <div className="ar-divider w-64 mx-auto my-6" />
      <h2 className="text-xl md:text-2xl ar-teal font-medium tracking-widest uppercase ar-reveal" style={{ animationDelay: "0.5s" }}>
        {data.title}
      </h2>
      <p className="text-emerald-300/50 text-lg max-w-2xl mx-auto leading-relaxed mt-8 ar-reveal" style={{ animationDelay: "0.7s" }}>
        {data.summary}
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10 ar-reveal" style={{ animationDelay: "0.9s" }}>
        {data.links &&
          Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="ar-btn px-6 py-3 rounded-full flex items-center gap-2 capitalize"
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