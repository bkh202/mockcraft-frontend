import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateHolographic({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap');
        
        .font-spatial { font-family: 'Space Grotesk', sans-serif; }
        
        /* Deep Space Background with moving mesh */
        .bg-spatial {
          background-color: #020205;
          background-image: 
            radial-gradient(at 0% 0%, rgba(29, 78, 216, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.15) 0px, transparent 50%);
        }

        /* Holographic Glass Card */
        .spatial-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255,255,255,0.1);
          border-top-color: rgba(255,255,255,0.2);
          border-left-color: rgba(255,255,255,0.2);
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
          border-radius: 24px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .spatial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 40px 80px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 40px rgba(124, 58, 237, 0.2);
          border-color: rgba(124, 58, 237, 0.4);
        }

        /* Rotating Gradient Border for Avatar & Buttons */
        .spin-border-wrapper {
          position: relative;
          overflow: hidden;
          padding: 3px;
          border-radius: 9999px;
        }
        .spin-border-wrapper::before {
          content: "";
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: conic-gradient(transparent, rgba(124, 58, 237, 1), transparent 30%);
          animation: spin 3s linear infinite;
        }
        .spin-border-inner {
          position: relative;
          background: #020205;
          border-radius: 9999px;
          z-index: 1;
          transition: background 0.3s ease;
        }
        .spin-border-wrapper:hover .spin-border-inner {
          background: #0a0a1a;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Text Hologram Animation */
        .holo-text {
          background: linear-gradient(to right, #60a5fa, #c084fc, #f472b6, #60a5fa);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shineText 4s linear infinite;
        }
        @keyframes shineText { to { background-position: 200% center; } }

        /* Cinematic Reveal */
        @keyframes cinematicUp {
          from { opacity: 0; transform: translateY(60px) scale(0.95) rotateX(10deg); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0) scale(1) rotateX(0); filter: blur(0); }
        }
        .animate-cinematic {
          opacity: 0;
          animation: cinematicUp 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        /* Floating Animation */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-spatial text-gray-200 font-spatial overflow-x-hidden selection:bg-purple-500/30 selection:text-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-40">

          {/* ✅ HERO SECTION (Added IDs, Email, Phone, Location & Dynamic Links) */}
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

              {/* Contact Info Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {data.email && <span className="spatial-card px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300">✉️ {data.email}</span>}
                {data.phone && <span className="spatial-card px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300">📞 {data.phone}</span>}
                {data.location && <span className="spatial-card px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300">📍 {data.location}</span>}
              </div>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                {data.summary}
              </p>

              {/* Dynamic Links Generation */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                {data.links && Object.entries(data.links).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <div key={platform} className="spin-border-wrapper hover:scale-105 transition-transform cursor-pointer group">
                      <a href={url} target="_blank" rel="noreferrer" className="spin-border-inner flex items-center gap-3 px-8 py-4 font-bold text-white uppercase tracking-wider text-sm">

                        {/* ✅ PLATFORM LOGO ADDED HERE */}
                        <img
                          src={getSkillLogo(platform)}
                          alt={platform}
                          className="w-5 h-5 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; // Fallback Link Icon
                          }}
                        />

                        <span>{platform}</span>

                        {/* Arrow with a slight hover effect */}
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

          {/* ✅ SPATIAL SKILLS & LANGUAGES GRID */}
          <section id="skills" className="animate-cinematic pt-10" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-center text-sm font-bold text-purple-400 tracking-[0.3em] uppercase mb-12">
              Core Competencies
            </h3>

            {/* ✅ Categorized Layout in Cinematic Spatial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
                <div
                  key={category}
                  className="spatial-card p-8 flex flex-col group hover:border-cyan-400/50 transition-all duration-500"
                >
                  {/* Category Header with Pulse Effect */}
                  <h4 className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase mb-6 border-b border-gray-800/50 pb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                    {category}
                  </h4>

                  {/* Skill Badges with Glow */}
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium tracking-wide hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-crosshair"
                      >
                        {/* ✅ LOGO ADDED WITH CINEMATIC GLOW */}
                        <img
                          src={getSkillLogo(skill)}
                          alt={skill}
                          className="w-4 h-4 object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:brightness-125 transition-all"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                          }}
                        />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Linguistics Section */}
            {data.languages && data.languages.length > 0 && (
              <>
                <h3 className="text-center text-sm font-bold text-cyan-400 tracking-[0.3em] uppercase mb-8 mt-16">
                  Linguistics
                </h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                  {data.languages.map((lang, i) => (
                    <div
                      key={i}
                      className="spatial-card px-8 py-4 flex items-center gap-3 text-gray-300 font-bold tracking-wide hover:text-white hover:border-purple-400/50 transition-all cursor-crosshair"
                    >
                      <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">🌐</span>
                      {lang}
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>

          {/* ✅ EXPERIENCE TIMELINE */}
          {data.experience && data.experience.length > 0 && (
            <section id="experience" className="pt-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-cinematic" style={{ animationDelay: '0.4s' }}>Work History</h3>
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-linear-to-b before:from-cyan-500/0 before:via-cyan-500/50 before:to-purple-500/0">
                {data.experience.map((exp, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cinematic" style={{ animationDelay: `${0.2 * i + 0.5}s` }}>

                    {/* Glowing Node */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#020205] border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-500"></div>

                    {/* Experience Card */}
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] spatial-card p-8 md:p-10">
                      <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-cyan-300 tracking-wider mb-4">
                        {exp.duration}
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{exp.role}</h4>
                      <h5 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h5>
                      <p className="text-gray-400 leading-relaxed font-light">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ✅ PROJECTS GRID */}
          <section id="projects" className="pt-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-cinematic" style={{ animationDelay: '0.6s' }}>Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects?.map((p, i) => (
                <div key={i} className="spatial-card p-8 md:p-10 flex flex-col h-full group animate-cinematic" style={{ animationDelay: `${0.2 * i + 0.7}s` }}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{p.duration}</span>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-cyan-300 tracking-wide transition-colors uppercase">
                          Demo ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-3xl font-bold text-white mb-4 group-hover:holo-text transition-all duration-300">{p.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-light mb-8 grow">
                    {p.description}
                  </p>

                  {/* ✅ UPGRADED TECH STACK WITH GLOWING LOGOS */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.techStack?.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-300 tracking-wide hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all cursor-crosshair"
                      >
                        <img
                          src={getSkillLogo(tech)}
                          alt={tech}
                          // Cyan drop-shadow for that sci-fi holographic feel
                          className="w-3.5 h-3.5 object-contain drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                          }}
                        />
                        {tech}
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </section>
          {/* ✅ EDUCATION & CERTIFICATES */}
          <section id="education" className="animate-cinematic pb-20 pt-10" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">Education & Credentials</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {data.education?.map((ed, i) => (
                <div key={i} className="spatial-card p-8 flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-gray-800 to-gray-900 border-2 border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-purple-500 transition-colors">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{ed.degree}</h4>
                    <p className="text-gray-400 text-sm mb-3">{ed.college}</p>
                    <div className="flex gap-4 text-xs font-bold tracking-widest uppercase text-gray-500">
                      <span>{ed.year}</span>
                      <span className="text-cyan-400">Score: {ed.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates */}
            {data.certificates && data.certificates.length > 0 && (
              <div>
                <h4 className="text-center text-sm font-bold text-purple-400 tracking-[0.3em] uppercase mb-10">Verified Certifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.certificates.map((cert, i) => (
                    <div key={i} className="spatial-card p-6 flex flex-col justify-between group relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
                      <div className="flex items-start gap-4 z-10">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-cyan-400/50">
                          <span className="text-lg">🏆</span>
                        </div>
                        <div className="grow">
                          <h5 className="font-bold text-lg text-white mb-1">{cert.name}</h5>
                          <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6 z-10 pt-4 border-t border-white/10">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{cert.date || 'Certified'}</span>
                        {cert.link && (
                          <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-cyan-400 hover:text-white uppercase tracking-wider transition-colors">
                            View Credential ↗
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ✅ NAYA: SPATIAL CONTACT SECTION */}
          <section id="contact" className="animate-cinematic pb-32 pt-10" style={{ animationDelay: '1s' }}>
            <div className="spatial-card p-12 md:p-24 text-center relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter relative z-10">
                Initiate <span className="holo-text">Connection</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 font-light">
                My communication channels are open. Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 relative z-10">
                {data.email && (
                  <div className="spin-border-wrapper hover:scale-105 transition-transform cursor-pointer">
                    <a href={`mailto:${data.email}`} className="spin-border-inner flex items-center gap-3 px-10 py-5 font-bold text-white uppercase tracking-wider text-sm">
                      ✉️ Transmit Message
                    </a>
                  </div>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="spatial-card flex items-center justify-center gap-3 px-10 py-5 font-bold text-white uppercase tracking-wider text-sm hover:border-cyan-400/50 hover:text-cyan-300">
                    📞 {data.phone}
                  </a>
                )}
              </div>
            </div>
            <div className="glitch-card p-4">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
export default TemplateHolographic;