import { getSkillLogo } from "../../../components/categorizeSkills";

function HeroSection({ data }) {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 text-center">
      <div className="pp-stamp mb-8 pp-reveal">Open for work</div>

      <div className="relative mb-10 pp-reveal pp-float" style={{ animationDelay: "0.2s" }}>
        <div className="pp-pin" />
        <div className="pp-card p-2 rounded-none" style={{ transform: "rotate(-2deg)" }}>
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
            alt="Profile"
            className="w-44 h-44 object-cover"
            style={{ filter: "sepia(10%) contrast(1.05)" }}
          />
        </div>
      </div>

      <h1 className="pp-serif text-6xl md:text-8xl pp-dark font-bold mb-4 pp-reveal" style={{ animationDelay: "0.3s" }}>
        {data.name}
      </h1>

      <div className="pp-line-brown w-48 mx-auto mb-6" />

      <h2 className="pp-hand text-2xl pp-brown mb-6 pp-reveal" style={{ animationDelay: "0.5s", fontSize: "1.6rem" }}>
        {data.title}
      </h2>

      <p className="pp-sans text-gray-600 max-w-2xl leading-relaxed text-lg pp-reveal" style={{ animationDelay: "0.7s" }}>
        {data.summary}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 pp-reveal" style={{ animationDelay: "0.9s" }}>
        {data.links &&
          Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="pp-btn-outline px-6 py-3 rounded-none flex items-center gap-2 capitalize"
              >
                <img
                  src={getSkillLogo(platform)}
                  alt={platform}
                  className="w-4 h-4 object-contain"
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