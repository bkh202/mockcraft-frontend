import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <section id="about" className="min-h-[75vh] flex flex-col items-center justify-center text-center relative reveal-item pt-10" style={{ animationDelay: '0.1s' }}>
      <div className="relative mb-10 group">
        <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-2 border-white/10"
        />
      </div>

      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 reveal-item" style={{ animationDelay: '0.3s' }}>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
        <span className="text-sm font-semibold tracking-wide text-gray-200">Available for Opportunities</span>
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 reveal-item text-shine" style={{ animationDelay: '0.5s' }}>
        {data.name}
      </h1>

      <h2 className="text-2xl md:text-4xl font-medium text-indigo-400 mb-8 reveal-item" style={{ animationDelay: '0.7s' }}>
        {data.title}
      </h2>

      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed reveal-item" style={{ animationDelay: '0.9s' }}>
        {data.summary}
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-12 reveal-item" style={{ animationDelay: '1.1s' }}>
        {data.links && Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-4 rounded-full glass-premium font-bold hover:scale-105 transition-all duration-300 text-white capitalize flex items-center gap-3 shadow-lg"
            >
              <img
                src={getSkillLogo(platform)}
                alt={platform}
                className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:brightness-125 transition-all"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                }}
              />
              <span>{platform}</span>
              <span className="text-white/50 text-sm group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
            </a>
          )
        })}
      </div>
    </section>
  );
}

export default AboutSection;