import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateSynthwave({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=VT323&display=swap');

        .sw-body { font-family: 'Rajdhani', sans-serif; }
        .sw-pixel { font-family: 'VT323', monospace; }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 80px; }
        }
        @keyframes sunPulse {
          0%,100% { box-shadow: 0 0 40px 10px rgba(255,60,120,0.3), 0 0 80px 20px rgba(255,100,60,0.15); }
          50% { box-shadow: 0 0 60px 20px rgba(255,60,120,0.5), 0 0 120px 40px rgba(255,100,60,0.25); }
        }
        @keyframes neonFlicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity:1; text-shadow: 0 0 7px #ff3c78, 0 0 21px #ff3c78, 0 0 42px #ff3c78; }
          20%,24%,55% { opacity: 0.4; text-shadow: none; }
        }
        @keyframes scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 4px; }
        }
        @keyframes revealUp {
          from { opacity:0; transform: translateY(30px); }
          to { opacity:1; transform: translateY(0); }
        }
        @keyframes horizonGlow {
          0%,100% { opacity:0.6; } 50% { opacity:1; }
        }
        @keyframes chromaShift {
          0% { text-shadow: -2px 0 #ff3c78, 2px 0 #00eaff; }
          33% { text-shadow: 2px 0 #ff3c78, -2px 0 #00eaff; }
          66% { text-shadow: 0 2px #ff3c78, 0 -2px #00eaff; }
          100% { text-shadow: -2px 0 #ff3c78, 2px 0 #00eaff; }
        }

        .sw-bg {
          background: #0a0010;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .sw-grid {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 55vh;
          background-image:
            linear-gradient(rgba(255,60,120,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,60,120,0.3) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridMove 2s linear infinite;
          transform: perspective(600px) rotateX(65deg);
          transform-origin: bottom center;
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to bottom, transparent 0%, black 50%);
        }

        .sw-sun {
          position: fixed;
          bottom: 45vh;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(180deg, #ffb347 0%, #ff6b35 30%, #ff3c78 60%, #9b30ff 100%);
          animation: sunPulse 3s ease-in-out infinite;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .sw-sun::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 100%;
          background: repeating-linear-gradient(
            transparent 0px,
            transparent 12px,
            #0a0010 12px,
            #0a0010 16px
          );
        }

        .sw-horizon {
          position: fixed;
          bottom: 45vh;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff3c78, #ffb347, #ff3c78, transparent);
          animation: horizonGlow 2s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }

        .sw-scanlines {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.03) 0px,
            rgba(0,0,0,0.03) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 999;
          animation: scanlines 0.1s linear infinite;
        }

        .sw-card {
          background: rgba(20, 0, 30, 0.85);
          border: 1px solid rgba(255,60,120,0.3);
          backdrop-filter: blur(12px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .sw-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,60,120,0.05), transparent);
          transition: left 0.5s;
        }
        .sw-card:hover::before { left: 100%; }
        .sw-card:hover {
          border-color: rgba(255,60,120,0.7);
          box-shadow: 0 0 20px rgba(255,60,120,0.15), inset 0 0 20px rgba(255,60,120,0.03);
          transform: translateY(-3px);
        }

        .sw-neon {
          color: #ff3c78;
          animation: neonFlicker 8s infinite;
        }
        .sw-chroma {
          animation: chromaShift 4s ease-in-out infinite;
        }
        .sw-reveal { animation: revealUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }

        .sw-tag {
          background: rgba(255,60,120,0.08);
          border: 1px solid rgba(255,60,120,0.25);
          color: #ff90b3;
          transition: all 0.3s;
        }
        .sw-tag:hover {
          background: rgba(255,60,120,0.15);
          border-color: rgba(255,60,120,0.6);
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(255,60,120,0.2);
        }

        .sw-btn {
          background: transparent;
          border: 2px solid #ff3c78;
          color: #ff3c78;
          font-family: 'VT323', monospace;
          font-size: 1.2rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .sw-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: #ff3c78;
          transition: left 0.3s;
          z-index: -1;
        }
        .sw-btn:hover { color: #0a0010; }
        .sw-btn:hover::before { left: 0; }

        .sw-section-title {
          font-family: 'VT323', monospace;
          font-size: 3rem;
          color: #00eaff;
          text-shadow: 0 0 10px rgba(0,234,255,0.5);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .sw-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, #ff3c78, #9b30ff, transparent);
        }
      `}</style>

      <div className="sw-bg sw-body text-gray-200">
        <div className="sw-scanlines" />
        <div className="sw-sun" />
        <div className="sw-horizon" />
        <div className="sw-grid" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* HERO */}
          <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
            <div className="sw-pixel text-sm tracking-[0.5em] text-pink-400 mb-6 sw-reveal" style={{animationDelay:'0.2s'}}>
              &gt; LOADING PROFILE...
            </div>

            <div className="relative mb-8 sw-reveal" style={{animationDelay:'0.3s'}}>
              <div className="w-36 h-36 rounded-full mx-auto border-2 border-pink-500 p-1" style={{boxShadow:'0 0 30px rgba(255,60,120,0.4)'}}>
                <img
                  src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-wider uppercase sw-neon sw-chroma sw-reveal" style={{animationDelay:'0.5s'}}>
              {data.name}
            </h1>

            <h2 className="sw-pixel text-2xl md:text-3xl text-cyan-400 mt-4 mb-6 tracking-widest sw-reveal" style={{animationDelay:'0.7s'}}>
              {data.title}
            </h2>

            <p className="max-w-2xl text-gray-400 text-lg leading-relaxed sw-reveal" style={{animationDelay:'0.9s'}}>
              {data.summary}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10 sw-reveal" style={{animationDelay:'1.1s'}}>
              {data.links && Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a key={platform} href={url} target="_blank" rel="noreferrer"
                    className="sw-btn px-6 py-3 rounded-sm font-semibold flex items-center gap-2">
                    <img src={getSkillLogo(platform)} alt={platform} className="w-4 h-4 object-contain invert"
                      onError={(e) => { e.target.style.display='none'; }} />
                    {platform}
                  </a>
                );
              })}
            </div>
          </section>

          {/* SKILLS */}
          <section className="py-24">
            <div className="sw-section-title text-center mb-16">// TECH STACK</div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
                <div key={cat} className="sw-card p-6 rounded-sm break-inside-avoid">
                  <h4 className="sw-pixel text-lg text-pink-400 mb-4 tracking-wider border-b border-pink-500/20 pb-2">{cat}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <div key={i} className="sw-tag flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-semibold cursor-default">
                        <img src={getSkillLogo(s)} alt={s} className="w-3.5 h-3.5 object-contain"
                          onError={(e)=>{e.target.style.display='none';}} />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          {data.experience?.length > 0 && (
            <section className="py-24">
              <div className="sw-section-title text-center mb-16">// EXPERIENCE LOG</div>
              <div className="relative pl-8 sw-timeline space-y-12">
                {data.experience.map((exp, i) => (
                  <div key={i} className="sw-card p-8 rounded-sm relative">
                    <div className="absolute left-0 top-8 w-3 h-3 bg-pink-500 rounded-full -translate-x-[calc(2rem+1px)]"
                      style={{boxShadow:'0 0 10px #ff3c78'}} />
                    <span className="sw-pixel text-cyan-400 text-sm tracking-widest">{exp.duration}</span>
                    <h4 className="text-2xl font-bold text-white mt-1">{exp.role}</h4>
                    <h5 className="text-pink-400 font-semibold mb-3">{exp.company}</h5>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          <section className="py-24">
            <div className="sw-section-title text-center mb-16">// PROJECTS.DB</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((p, i) => (
                <div key={i} className="sw-card p-8 rounded-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="sw-pixel text-cyan-400 text-sm">{p.duration}</span>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="sw-pixel text-pink-400 hover:text-pink-300 text-sm tracking-wider">
                        [LAUNCH ↗]
                      </a>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{p.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.techStack?.map((tech, idx) => (
                      <div key={idx} className="sw-tag flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-semibold">
                        <img src={getSkillLogo(tech)} alt={tech} className="w-3 h-3 object-contain"
                          onError={(e)=>{e.target.style.display='none';}} />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="py-24">
            <div className="sw-section-title text-center mb-16">// EDUCATION.EXE</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {data.education?.map((ed, i) => (
                <div key={i} className="sw-card p-8 rounded-sm text-center">
                  <div className="sw-pixel text-4xl text-pink-500 mb-4">EDU</div>
                  <h4 className="font-bold text-white text-lg mb-2">{ed.degree}</h4>
                  <p className="text-gray-400 text-sm mb-3">{ed.college}</p>
                  <div className="sw-pixel text-cyan-400">{ed.year} · {ed.score}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-24">
            <div className="sw-section-title text-center mb-16">// CONTACT.SYS</div>
            <div className="sw-card p-10 rounded-sm text-center mb-8">
              <p className="sw-pixel text-2xl text-gray-300 mb-8 tracking-wider">
                READY TO COLLABORATE? INITIATE TRANSMISSION.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.email && (
                  <a href={`mailto:${data.email}`}
                    className="sw-btn px-8 py-3 rounded-sm flex items-center gap-2">
                    ✉ {data.email}
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`}
                    className="sw-btn px-8 py-3 rounded-sm flex items-center gap-2">
                    📞 {data.phone}
                  </a>
                )}
              </div>
              {data.location && <p className="sw-pixel text-gray-500 mt-6 tracking-widest">📍 {data.location}</p>}
            </div>
            <div className="sw-card p-4 rounded-sm">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

export default TemplateSynthwave;