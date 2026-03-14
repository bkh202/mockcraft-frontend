import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateBrutal({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

        .bt-body { font-family: 'Space Grotesk', sans-serif; }
        .bt-display { font-family: 'Bebas Neue', cursive; letter-spacing: 0.05em; }
        .bt-mono { font-family: 'DM Mono', monospace; }

        @keyframes slideIn {
          from { opacity:0; transform:translateX(-40px); }
          to { opacity:1; transform:translateX(0); }
        }
        @keyframes stripesMove {
          from { background-position: 0 0; }
          to { background-position: 40px 0; }
        }
        @keyframes borderPulse {
          0%,100% { border-color: #ff3f00; }
          50% { border-color: #ffb800; }
        }
        @keyframes tagBounce {
          0%,100% { transform:translateY(0); }
          50% { transform:translateY(-3px); }
        }
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        @keyframes fillBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .bt-bg { background: #0f0f0f; min-height: 100vh; }

        .bt-accent { color: #ff3f00; }
        .bt-yellow { color: #ffb800; }
        .bt-white { color: #f0f0f0; }
        .bt-dim { color: #555; }

        .bt-card {
          border: 2px solid #1e1e1e;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .bt-card:hover {
          border-color: #ff3f00;
          transform: translate(-3px, -3px);
          box-shadow: 5px 5px 0 #ff3f00;
        }

        .bt-tag {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          color: #888;
          transition: all 0.2s;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .bt-tag:hover {
          background: #ff3f00;
          border-color: #ff3f00;
          color: #fff;
          transform: translateY(-2px);
          animation: tagBounce 0.4s ease;
        }

        .bt-btn {
          background: #ff3f00;
          color: #fff;
          font-family: 'Bebas Neue', cursive;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          border: 2px solid #ff3f00;
          transition: all 0.2s;
        }
        .bt-btn:hover {
          background: transparent;
          color: #ff3f00;
        }
        .bt-btn-outline {
          background: transparent;
          color: #f0f0f0;
          font-family: 'Bebas Neue', cursive;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          border: 2px solid #2a2a2a;
          transition: all 0.2s;
        }
        .bt-btn-outline:hover {
          border-color: #ff3f00;
          color: #ff3f00;
          transform: translate(-2px,-2px);
          box-shadow: 3px 3px 0 #ff3f00;
        }

        .bt-section-num {
          font-family: 'Bebas Neue', cursive;
          font-size: 8rem;
          color: rgba(255,63,0,0.06);
          position: absolute;
          top: -1rem; right: 1rem;
          line-height: 1;
          user-select: none;
        }

        .bt-marquee {
          overflow: hidden;
          border-top: 1px solid #1e1e1e;
          border-bottom: 1px solid #1e1e1e;
          padding: 12px 0;
          background: #0a0a0a;
        }
        .bt-marquee-inner {
          white-space: nowrap;
          animation: marquee 20s linear infinite;
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.2em;
          font-size: 0.9rem;
          color: #2a2a2a;
        }

        .bt-reveal { animation: slideIn 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        .bt-noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 99;
          opacity: 0.4;
        }

        .bt-stripe {
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,63,0,0.04) 8px,
            rgba(255,63,0,0.04) 10px
          );
        }

        .bt-line-h {
          height: 1px;
          background: #1e1e1e;
        }
        .bt-line-accent {
          height: 3px;
          background: #ff3f00;
          transform-origin: left;
          animation: fillBar 1.2s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>

      <div className="bt-bg bt-body text-gray-200">
        <div className="bt-noise" />

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 relative max-w-6xl mx-auto">
          <div className="bt-marquee mb-12">
            <div className="bt-marquee-inner">
              {Array(6).fill(`${data.name} — ${data.title} — AVAILABLE FOR HIRE — `).join('')}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="bt-mono text-xs bt-dim uppercase tracking-widest mb-4 bt-reveal">
                Portfolio — {new Date().getFullYear()}
              </div>

              <h1 className="bt-display text-[5rem] md:text-[8rem] leading-none bt-white bt-reveal" style={{animationDelay:'0.1s'}}>
                {data.name.split(' ').map((w, i) => (
                  <span key={i}>
                    {i % 2 === 1 ? <span className="bt-accent">{w}</span> : w}{' '}
                  </span>
                ))}
              </h1>

              <div className="flex items-center gap-4 my-6 bt-reveal" style={{animationDelay:'0.3s'}}>
                <div className="bt-line-accent" style={{width:'60px'}} />
                <h2 className="bt-mono text-base" style={{color:'#888'}}>{data.title}</h2>
              </div>

              <p className="text-gray-500 leading-relaxed max-w-xl bt-reveal" style={{animationDelay:'0.5s'}}>
                {data.summary}
              </p>

              <div className="flex flex-wrap gap-3 mt-8 bt-reveal" style={{animationDelay:'0.7s'}}>
                {data.links && Object.entries(data.links).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <a key={platform} href={url} target="_blank" rel="noreferrer"
                      className="bt-btn-outline px-5 py-2.5 flex items-center gap-2">
                      <img src={getSkillLogo(platform)} alt={platform} className="w-4 h-4 object-contain opacity-50"
                        onError={(e)=>{e.target.style.display='none';}} />
                      {platform}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative shrink-0 bt-reveal" style={{animationDelay:'0.4s'}}>
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-orange-500/20 bt-stripe" />
              <img
                src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
                alt="Profile"
                className="relative w-56 h-64 object-cover"
                style={{filter:'contrast(1.1) grayscale(20%)', border:'2px solid #1e1e1e'}}
              />
              <div className="absolute -bottom-3 -right-3 bg-orange-600 w-12 h-12 flex items-center justify-center">
                <span className="bt-mono text-white text-xs font-bold">→</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bt-marquee">
          <div className="bt-marquee-inner" style={{animationDirection:'reverse'}}>
            {Array(8).fill('◆ SKILLS ◆ PROJECTS ◆ EXPERIENCE ◆ EDUCATION ◆ ').join('')}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-16">

          {/* SKILLS */}
          <section className="py-24 relative">
            <div className="bt-section-num">01</div>
            <div className="flex items-center gap-4 mb-16">
              <div className="bt-line-accent" style={{width:'40px'}} />
              <h3 className="bt-display text-5xl bt-white">TECH ARSENAL</h3>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
                <div key={cat} className="bt-card p-6 bg-[#0a0a0a] break-inside-avoid">
                  <h4 className="bt-mono text-xs uppercase tracking-widest bt-dim mb-4">{cat}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <div key={i} className="bt-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
                        <img src={getSkillLogo(s)} alt={s} className="w-3 h-3 object-contain opacity-50"
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
            <section className="py-24 relative">
              <div className="bt-section-num">02</div>
              <div className="flex items-center gap-4 mb-16">
                <div className="bt-line-accent" style={{width:'40px', animationDelay:'0.3s'}} />
                <h3 className="bt-display text-5xl bt-white">EXPERIENCE</h3>
              </div>
              <div className="space-y-1">
                {data.experience.map((exp, i) => (
                  <div key={i} className="bt-card p-8 bg-[#0a0a0a] bt-reveal" style={{animationDelay:`${i*0.1}s`}}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="bt-display text-3xl bt-white">{exp.role}</h4>
                        <h5 className="bt-accent font-bold tracking-wide">{exp.company}</h5>
                      </div>
                      <span className="bt-mono text-sm bt-dim border border-[#1e1e1e] px-3 py-1 self-start">{exp.duration}</span>
                    </div>
                    <div className="bt-line-h mb-4" />
                    <p className="text-gray-500 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          <section className="py-24 relative">
            <div className="bt-section-num">03</div>
            <div className="flex items-center gap-4 mb-16">
              <div className="bt-line-accent" style={{width:'40px', animationDelay:'0.6s'}} />
              <h3 className="bt-display text-5xl bt-white">PROJECTS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {data.projects?.map((p, i) => (
                <div key={i} className="bt-card p-8 bg-[#0a0a0a] group bt-reveal" style={{animationDelay:`${i*0.15}s`}}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bt-mono text-xs bt-dim">{p.duration}</span>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="bt-btn px-4 py-1.5 text-xs">VIEW →</a>
                    )}
                  </div>
                  <h4 className="bt-display text-4xl bt-white mb-3 group-hover:text-orange-500 transition-colors">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.techStack?.map((tech, idx) => (
                      <div key={idx} className="bt-tag flex items-center gap-1.5 px-2.5 py-1 cursor-default">
                        <img src={getSkillLogo(tech)} alt={tech} className="w-3 h-3 object-contain opacity-50"
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
          <section className="py-24 relative">
            <div className="bt-section-num">04</div>
            <div className="flex items-center gap-4 mb-16">
              <div className="bt-line-accent" style={{width:'40px', animationDelay:'0.9s'}} />
              <h3 className="bt-display text-5xl bt-white">EDUCATION</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {data.education?.map((ed, i) => (
                <div key={i} className="bt-card p-8 bg-[#0a0a0a] text-center">
                  <div className="bt-display text-6xl bt-accent mb-4">{String(i+1).padStart(2,'0')}</div>
                  <h4 className="font-bold bt-white mb-2">{ed.degree}</h4>
                  <p className="bt-dim text-sm mb-3">{ed.college}</p>
                  <div className="bt-mono text-xs text-orange-600">{ed.year} / {ed.score}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-24 pb-40 relative">
            <div className="bt-section-num">05</div>
            <div className="flex items-center gap-4 mb-16">
              <div className="bt-line-accent" style={{width:'40px', animationDelay:'1.2s'}} />
              <h3 className="bt-display text-5xl bt-white">LET'S WORK</h3>
            </div>
            <div className="bt-card p-12 bg-[#0a0a0a] bt-stripe mb-1">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <h4 className="bt-display text-4xl bt-white mb-2">GOT A PROJECT?</h4>
                  <p className="bt-mono text-sm bt-dim">Let's build something great together.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.email && (
                    <a href={`mailto:${data.email}`} className="bt-btn px-8 py-3">SEND EMAIL</a>
                  )}
                  {data.phone && (
                    <a href={`tel:${data.phone}`} className="bt-btn-outline px-8 py-3">CALL NOW</a>
                  )}
                </div>
              </div>
              {data.location && (
                <div className="bt-line-h mt-8 mb-4" />
              )}
              {data.location && <p className="bt-mono text-xs bt-dim">📍 {data.location}</p>}
            </div>
            <div className="bt-card p-4 bg-[#0a0a0a]">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

export default TemplateBrutal;