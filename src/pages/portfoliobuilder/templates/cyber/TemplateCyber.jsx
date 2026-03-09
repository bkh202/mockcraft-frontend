import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateCyber({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap');
        
        .font-mono { font-family: 'Fira Code', monospace; }
        
        .scanlines {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 50;
        }
        
        .glitch-card {
          border: 1px solid #00ff41;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.1), inset 0 0 20px rgba(0, 255, 65, 0.05);
          background: rgba(0, 20, 0, 0.6);
          position: relative;
          transition: all 0.3s ease;
        }
        .glitch-card::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          border: 1px solid #00ff41;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .glitch-card:hover {
          background: rgba(0, 40, 0, 0.8);
          transform: translateX(5px);
        }
        .glitch-card:hover::before {
          opacity: 1;
          box-shadow: 0 0 15px #00ff41;
        }

        .typewriter-text {
          overflow: hidden;
          border-right: .15em solid #00ff41;
          white-space: nowrap;
          margin: 0;
          letter-spacing: .05em;
          animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #00ff41; } }
        
        .blinking-cursor {
          display: inline-block;
          width: 10px;
          height: 1.2em;
          background-color: #00ff41;
          animation: blink-caret 1s step-end infinite;
          vertical-align: bottom;
          margin-left: 5px;
        }
      `}</style>

      <div className="min-h-screen bg-[#050505] text-[#00ff41] font-mono relative overflow-x-hidden selection:bg-[#00ff41] selection:text-black pb-20">
        <div className="scanlines"></div>

        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10 space-y-16">

          {/* ✅ ID ADDED: ABOUT (Header Terminal) */}
          <section id="about" className="pt-10">
            <div className="glitch-card p-8 rounded-sm">
              <div className="flex items-center gap-2 border-b border-[#00ff41]/30 pb-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs opacity-70">root@{data?.name?.replace(/\s+/g, '').toLowerCase() || 'sysadmin'}:~</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image ASCII-style placeholder or real image */}
                <div className="w-32 h-32 shrink-0 border border-[#00ff41] p-1 bg-[#00ff41]/10 relative group">
                  <div className="absolute inset-0 bg-[#00ff41]/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                  <img
                    src={data.profileImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop"}
                    alt="Profile"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                </div>

                <div className="grow">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center flex-wrap">
                    {">"} <span className="typewriter-text ml-2">{data.name}_</span>
                  </h1>
                  <p className="text-xl md:text-2xl mt-4 opacity-90 text-white">{">"} {data.title}</p>

                  {/* System Variables (Contact Info) */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm opacity-80 bg-[#00ff41]/5 p-4 border border-[#00ff41]/20">
                    {data.location && <div><span className="text-white">SYS_LOC:</span> {data.location}</div>}
                    {data.email && <div><span className="text-white">SYS_MAIL:</span> {data.email}</div>}
                    {data.phone && <div><span className="text-white">SYS_COMM:</span> {data.phone}</div>}
                    <div><span className="text-white">STATUS:</span> ONLINE <span className="w-2 h-2 inline-block bg-green-500 rounded-full animate-pulse"></span></div>
                  </div>

                  <p className="mt-8 text-sm md:text-base leading-relaxed opacity-80">
                    <span className="text-white font-bold">cat bio.txt</span><br />
                    {data.summary}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ✅ ID ADDED: SKILLS & LANGUAGES */}
          {/* ✅ ID ADDED: SKILLS & LANGUAGES (Categorized Terminal Vibe) */}
          <section id="skills" className="pt-10">
            <h2 className="text-2xl font-bold mb-8 text-green-400">
              {">"} ./view_skills.sh<span className="blinking-cursor"></span>
            </h2>

            <div className="space-y-10 mb-12">
              {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
                <div key={category}>
                  {/* Hacker style category header */}
                  <h3 className="text-sm font-mono mb-4 text-green-500/80 flex items-center gap-2">
                    <span className="text-green-300">root@sys:~/skills/{category.replace(/[^a-zA-Z]/g, '').toLowerCase()}$</span> ls -la
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, i) => (
                      <div key={i} className="glitch-card p-3 flex items-center justify-center gap-2.5 cursor-crosshair group">
                        {/* Skill Logo */}
                        <img
                          src={getSkillLogo(skill)}
                          alt={skill}
                          className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                          }}
                        />
                        {/* Skill Text */}
                        <span className="opacity-70 group-hover:opacity-100 group-hover:text-white transition-colors text-sm font-medium">
                          [{skill}]
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Addition */}
            {data.languages && data.languages.length > 0 && (
              <div className="pt-6 border-t border-green-500/20">
                <h2 className="text-2xl font-bold mb-6 text-green-400">
                  {">"} ./view_languages.sh
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.languages.map((lang, i) => (
                    <div key={i} className="glitch-card p-3 flex items-center justify-center gap-2 cursor-crosshair border-dashed group">
                      <span className="opacity-50 group-hover:opacity-100 transition-opacity">🌐</span>
                      <span className="opacity-70 group-hover:opacity-100 group-hover:text-white transition-colors text-sm font-medium">
                        CMD_LANG: {lang}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ✅ ID ADDED: PROJECTS */}
          <section id="projects" className="pt-10">
            <h2 className="text-2xl font-bold mb-6">{">"} ls -la ./projects<span className="blinking-cursor"></span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((p, i) => (
                <div key={i} className="glitch-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs opacity-50 border border-[#00ff41]/30 px-2 py-1">TIMESTMP: {p.duration}</div>
                      {/* Project Link */}
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="text-xs bg-[#00ff41] text-black font-bold px-3 py-1 hover:bg-white transition-colors">
                          [EXECUTE]
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-[#00ff41] transition-colors">./{p.title}</h3>
                    <p className="text-sm opacity-80 mb-6">{p.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-[#00ff41]/20">
                    <span className="text-xs text-white opacity-50 mr-1">DEPENDENCIES:</span>

                    {/* ✅ LOGOS ADDED HERE WITH NEON GLOW */}
                    {p.techStack?.map((tech, idx) => (
                      <div key={idx} className="inline-flex items-center gap-1.5 text-xs border border-[#00ff41]/50 px-2 py-1 bg-[#00ff41]/10 text-white hover:bg-[#00ff41]/20 transition-colors">
                        <img
                          src={getSkillLogo(tech)}
                          alt={tech}
                          // Neon Green drop shadow applied to the logo
                          className="w-3.5 h-3.5 object-contain opacity-80 drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]"
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

          {/* ✅ ID ADDED: EXPERIENCE */}
          {data.experience && data.experience.length > 0 && (
            <section id="experience" className="pt-10">
              <h2 className="text-2xl font-bold mb-6">{">"} cat experience.log<span className="blinking-cursor"></span></h2>
              <div className="space-y-6">
                {data.experience.map((e, i) => (
                  <div key={i} className="border-l-2 border-[#00ff41]/50 pl-6 py-2 relative hover:bg-[#00ff41]/5 transition-colors p-4">
                    <div className="absolute -left-2.25 top-6 w-4 h-4 bg-[#050505] border-2 border-[#00ff41] shadow-[0_0_10px_#00ff41]"></div>
                    <div className="text-xs opacity-50 mb-2 font-bold text-white">[{e.duration}]</div>
                    <h3 className="text-xl font-bold text-white mb-1">{e.role} <span className="opacity-50 mx-2">@</span> <span className="text-[#00ff41]">{e.company}</span></h3>
                    <p className="mt-3 text-sm opacity-80 leading-relaxed">{e.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ✅ ID ADDED: EDUCATION & CERTIFICATES */}
          <section id="education" className="pt-10">
            <h2 className="text-2xl font-bold mb-6">{">"} grep "degree" education.txt</h2>
            <div className="space-y-4 mb-16">
              {data.education?.map((e, i) => (
                <div key={i} className="glitch-card p-5 border-l-4 border-l-[#00ff41] hover:border-l-white transition-colors">
                  <h3 className="text-xl font-bold text-white">{e.degree}</h3>
                  <div className="flex flex-col md:flex-row justify-between md:items-center mt-2 opacity-80 text-sm gap-2">
                    <span>HOST: {e.college}</span>
                    <span className="font-bold border border-[#00ff41]/30 px-2 py-1">[{e.year}] | SCORE: {e.score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates Section */}
            {data.certificates && data.certificates.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-6">{">"} cat certificates.log</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.certificates.map((cert, i) => (
                    <div key={i} className="glitch-card p-5 border border-dashed border-[#00ff41]/50">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white truncate pr-4">{cert.name}</h3>
                        {cert.link && (
                          <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs bg-[#00ff41]/20 border border-[#00ff41] px-2 py-1 hover:bg-[#00ff41] hover:text-black transition-colors shrink-0">
                            [VERIFY]
                          </a>
                        )}
                      </div>
                      <p className="text-sm opacity-70 mb-2">ISSUER: {cert.issuer}</p>
                      <p className="text-xs font-bold text-[#00ff41] opacity-50">DATE: {cert.date || 'VALID'}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>

          {/* ✅ ID ADDED: CONTACT (Dynamic Links) */}
         <section id="contact" className="pt-10">
            <h2 className="text-2xl font-bold mb-6 text-[#00ff41]">
              {">"} ./connect.sh --all-ports<span className="blinking-cursor"></span>
            </h2>
            <div className="flex flex-wrap gap-4 pb-10">

              {/* Email */}
              {data.email && (
                <a href={`mailto:${data.email}`} className="group glitch-card px-6 py-4 hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-sm uppercase flex items-center gap-3">
                  <span className="text-lg opacity-80 group-hover:text-black transition-colors">✉️</span>
                  [MAIL_PROTOCOL]
                </a>
              )}
              
              {/* Phone */}
              {data.phone && (
                <a href={`tel:${data.phone}`} className="group glitch-card px-6 py-4 hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-sm uppercase flex items-center gap-3">
                  <span className="text-lg opacity-80 group-hover:text-black transition-colors">📞</span>
                  [VOICE_LINK]
                </a>
              )}

              {/* Dynamic Links from Object */}
              {data.links && Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a 
                    key={platform} 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group glitch-card px-6 py-4 hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-sm uppercase flex items-center gap-3"
                  >
                    {/* ✅ LOGO ADDED HERE */}
                    <img 
                      src={getSkillLogo(platform)} 
                      alt={platform} 
                      // Drop shadow for neon glow, and brightness-0 makes it turn black on hover!
                      className="w-5 h-5 object-contain opacity-80 drop-shadow-[0_0_5px_rgba(0,255,65,0.8)] group-hover:brightness-0 transition-all"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                      }}
                    />
                    [{platform}]
                  </a>
                )
              })}
            </div>

            <div className="glitch-card p-3 border border-[#00ff41]/30">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
export default TemplateCyber;