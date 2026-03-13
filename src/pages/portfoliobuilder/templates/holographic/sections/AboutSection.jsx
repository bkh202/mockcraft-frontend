import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center justify-between gap-16 animate-cinematic pt-10" style={{ animationDelay: '0.1s' }}>
      <div className="lg:w-3/5 space-y-8 z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></span>
          <span className="text-sm font-bold tracking-widest text-cyan-300 uppercase">System Online</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
          I am <br />
          <span className="holo-text">{data.name}</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light text-gray-400">
          {data.title}
        </h2>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          {data.email && <span className="spatial-card px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300">✉️ {data.email}</span>}
          {data.phone && <span className="spatial-card px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300">📞 {data.phone}</span>}
          {data.location && <span className="spatial-card px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300">📍 {data.location}</span>}
        </div>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
          {data.summary}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
          {data.links && Object.entries(data.links).map(([platform, url]) => {
            if (!url) return null;
            return (
              <div key={platform} className="spin-border-wrapper hover:scale-105 transition-transform cursor-pointer group">
                <a href={url} target="_blank" rel="noreferrer" className="spin-border-inner flex items-center gap-3 px-8 py-4 font-bold text-white uppercase tracking-wider text-sm">
                  <img
                    src={getSkillLogo(platform)}
                    alt={platform}
                    className="w-5 h-5 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                    }}
                  />
                  <span>{platform}</span>
                  <span className="text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <div className="lg:w-2/5 flex justify-center animate-float-slow z-10">
        <div className="spin-border-wrapper w-72 h-72 md:w-96 md:h-96 shadow-[0_0_80px_rgba(124,58,237,0.3)]">
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80"}
            alt="Avatar"
            className="spin-border-inner w-full h-full object-cover p-1"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;