import Layout from "../../components/Layout"
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";
import ContactForm from "../../components/ContactForm";

function TemplateBento({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;800&display=swap');
        
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        /* Background Animations */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Text Shine Animation */
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .text-shine {
          background: linear-gradient(to right, #fff 20%, #818cf8 40%, #818cf8 60%, #fff 80%);
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        /* Floating Animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .float-card { animation: float 6s ease-in-out infinite; }

        /* Reveal Animation */
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .reveal-item {
          opacity: 0;
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Premium Glassmorphism */
        .glass-premium {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-premium:hover {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.15);
        }

        /* Tags */
        .skill-tag { transition: all 0.3s ease; }
        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-2px) scale(1.05);
          color: #fff;
        }
      `}</style>

      <div className="min-h-screen bg-[#030305] text-gray-200 font-outfit overflow-x-hidden relative selection:bg-indigo-500/30">

        {/* Animated Background Blobs */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-120 h-120 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-120 h-120 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-160 h-160 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 space-y-40">

          {/* ✅ ID ADDED: ABOUT SECTION */}
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
                    // 'group' add kiya hai hover animations ke liye
                    className="group px-8 py-4 rounded-full glass-premium font-bold hover:scale-105 transition-all duration-300 text-white capitalize flex items-center gap-3 shadow-lg"
                  >
                    {/* ✅ PREMIUM LOGO ADDED */}
                    <img
                      src={getSkillLogo(platform)}
                      alt={platform}
                      className="w-5 h-5 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:brightness-125 transition-all"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; // Fallback Link icon
                      }}
                    />

                    <span>{platform}</span>

                    {/* Animated Arrow */}
                    <span className="text-white/50 text-sm group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">↗</span>
                  </a>
                )
              })}
            </div>
          </section>

          {/* ✅ ID ADDED: SKILLS SECTION */}
          <section id="skills" className="reveal-item" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-center text-3xl font-bold text-white mb-12 tracking-widest uppercase drop-shadow-md">
              Tech Arsenal
            </h3>

            {/* ✅ Premium Masonry Grid Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">

              {/* SKILLS CATEGORIES IN GLASS CARDS */}
              {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
                <div
                  key={category}
                  className="glass-premium p-6 rounded-3xl break-inside-avoid flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-300 mb-5 border-b border-white/10 pb-3 flex items-center gap-2 tracking-wide">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 skill-tag rounded-xl font-medium text-gray-300 cursor-default flex items-center gap-2 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                      >
                        {/* ✅ PREMIUM GLOWING LOGO */}
                        <img
                          src={getSkillLogo(skill)}
                          alt={skill}
                          className="w-4 h-4 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
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

              {/* LANGUAGES IN GLASS CARD */}
              {data.languages && data.languages.length > 0 && (
                <div className="glass-premium p-6 rounded-3xl break-inside-avoid flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-300 mb-5 border-b border-white/10 pb-3 flex items-center gap-2 tracking-wide">
                    🗣️ Languages
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {data.languages.map((lang, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 skill-tag rounded-xl font-medium text-gray-300 cursor-default flex items-center gap-2 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                      >
                        <span className="opacity-80">🌐</span>
                        <span className="text-sm">{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* ✅ ID ADDED: EXPERIENCE SECTION */}
          {data.experience && data.experience.length > 0 && (
            <section id="experience" className="pt-10">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center reveal-item">Work Experience</h3>
              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-linear-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
                {data.experience.map((exp, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-item" style={{ animationDelay: `${0.2 * i}s` }}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030305] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125"></div>

                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] glass-premium p-8 rounded-3xl float-card" style={{ animationDelay: `${i * 0.5}s` }}>
                      <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 font-bold tracking-wider text-xs rounded-lg mb-4">{exp.duration}</span>
                      <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                      <h5 className="text-lg text-gray-400 mb-4">{exp.company}</h5>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ✅ ID ADDED: PROJECTS SECTION */}
          <section id="projects" className="pt-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center reveal-item">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects?.map((p, i) => (
                <div key={i} className="glass-premium rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full relative overflow-hidden group reveal-item float-card" style={{ animationDelay: `${0.2 * i}s` }}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-300 w-fit">
                        {p.duration}
                      </span>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-white transition-colors bg-indigo-500/10 hover:bg-indigo-500/30 px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-500/20 flex items-center gap-1">
                          Live Demo ↗
                        </a>
                      )}
                    </div>

                    <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{p.title}</h4>
                    <p className="text-gray-400 leading-relaxed mb-8 grow text-sm md:text-base">
                      {p.description}
                    </p>

                    {/* ✅ LOGOS ADDED IN TECH STACK */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.techStack?.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default shadow-sm"
                        >
                          <img
                            src={getSkillLogo(tech)}
                            alt={tech}
                            // Halki si white drop shadow for premium look
                            className="w-3.5 h-3.5 object-contain drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]"
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
                </div>
              ))}
            </div>
          </section>

          {/* ✅ ID ADDED: EDUCATION & IMPROVED CERTIFICATIONS */}
          <section id="education" className="reveal-item pt-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Education & Credentials</h3>

            {/* Education Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {data.education?.map((ed, i) => (
                <div key={i} className="glass-premium p-8 rounded-3xl text-center group float-card" style={{ animationDelay: `${i * 0.3}s` }}>
                  <div className="w-16 h-16 mx-auto bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)] text-2xl">
                    🎓
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{ed.degree}</h4>
                  <p className="text-gray-400 mb-4">{ed.college}</p>
                  <div className="flex justify-center items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span>{ed.year}</span>
                    <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                    <span className="text-indigo-400">Score: {ed.score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ UPDATED CERTIFICATES DESIGN */}
            {data.certificates && data.certificates.length > 0 && (
              <div className="max-w-5xl mx-auto">
                <h4 className="text-xl font-bold text-center text-gray-400 mb-8 uppercase tracking-widest">Professional Certifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.certificates.map((cert, i) => (
                    <div key={i} className="glass-premium p-6 rounded-3xl flex items-start gap-5 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                        <span className="text-xl">🏆</span>
                      </div>
                      <div className="grow z-10">
                        <h5 className="font-bold text-lg text-white mb-1 group-hover:text-indigo-300 transition-colors">{cert.name}</h5>
                        <p className="text-gray-400 text-sm mb-3 font-medium">{cert.issuer}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md">{cert.date || 'Certified'}</span>
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-400 hover:text-white transition-colors flex items-center gap-1">
                              View Credential ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ✅ NAYA: MASSIVE PREMIUM CONTACT SECTION */}
          <section id="contact" className="pb-32 pt-10 reveal-item">
            <div className="glass-premium rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border-t border-indigo-500/30">
              <div className="absolute inset-0 bg-linear-to-t from-indigo-500/10 to-transparent pointer-events-none"></div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                Let's build something <span className="text-indigo-400 block sm:inline">incredible.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 relative z-10">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    <span>✉️</span> Say Hello
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-lg transition-all hover:scale-105">
                    <span>📞</span> {data.phone}
                  </a>
                )}
              </div>

              {data.location && (
                <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 font-medium">
                  <span>📍</span> Based in {data.location}
                </div>
              )}
            </div>

            <div className="glitch-card p-3">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
export default TemplateBento;