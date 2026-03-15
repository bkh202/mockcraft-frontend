import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
      <div
        className="sw-pixel text-sm tracking-[0.5em] text-pink-400 mb-6 sw-reveal"
        style={{ animationDelay: "0.2s" }}
      >
        &gt; LOADING PROFILE...
      </div>

      <div className="relative mb-8 sw-reveal" style={{ animationDelay: "0.3s" }}>
        <div
          className="w-36 h-36 rounded-full mx-auto border-2 border-pink-500 p-1"
          style={{ boxShadow: "0 0 30px rgba(255,60,120,0.4)" }}
        >
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <h1
        className="text-6xl md:text-8xl font-bold tracking-wider uppercase sw-neon sw-chroma sw-reveal"
        style={{ animationDelay: "0.5s" }}
      >
        {data.name}
      </h1>

      <h2
        className="sw-pixel text-2xl md:text-3xl text-cyan-400 mt-4 mb-6 tracking-widest sw-reveal"
        style={{ animationDelay: "0.7s" }}
      >
        {data.title}
      </h2>

      <p className="max-w-2xl text-gray-400 text-lg leading-relaxed sw-reveal" style={{ animationDelay: "0.9s" }}>
        {data.summary}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 sw-reveal" style={{ animationDelay: "1.1s" }}>
        {data.links &&
          Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="sw-btn px-6 py-3 rounded-sm font-semibold flex items-center gap-2"
              >
                <img
                  src={getSkillLogo(platform)}
                  alt={platform}
                  className="w-4 h-4 object-contain invert"
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