import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateMatrix({ data }) {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const intro = `> INITIALIZING PORTFOLIO...\n> DECRYPTING PROFILE DATA...\n> ACCESS GRANTED. WELCOME.`;

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(intro.slice(0, i));
      i++;
      if (i > intro.length) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Source+Code+Pro:wght@400;600;700&display=swap');

        .mx-mono { font-family: 'Share Tech Mono', monospace; }
        .mx-code { font-family: 'Source Code Pro', monospace; }

        @keyframes matrixRain {
          0% { transform: translateY(-100%); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes phosphorPulse {
          0%,100% { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41; }
          50% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41; }
        }
        @keyframes scanCrt {
          0%,100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes crtFlicker {
          0%,100% { opacity:1; }
          92% { opacity:1; }
          93% { opacity:0.8; }
          94% { opacity:1; }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }

        .mx-bg {
          background: #000d00;
          min-height: 100vh;
          animation: crtFlicker 8s infinite;
        }
        .mx-rain-col {
          position: fixed;
          top: 0;
          font-family: 'Share Tech Mono', monospace;
          font-size: 14px;
          color: #00ff41;
          writing-mode: vertical-lr;
          pointer-events: none;
          z-index: 0;
          user-select: none;
          animation: matrixRain linear infinite;
          opacity: 0.12;
        }
        .mx-crt {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,20,0,0.04) 0px,
            rgba(0,20,0,0.04) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
          z-index: 99;
          animation: scanCrt 4s ease-in-out infinite;
        }

        .mx-card {
          background: rgba(0, 15, 0, 0.9);
          border: 1px solid rgba(0,255,65,0.2);
          transition: all 0.3s;
        }
        .mx-card:hover {
          border-color: rgba(0,255,65,0.6);
          box-shadow: 0 0 20px rgba(0,255,65,0.08), inset 0 0 30px rgba(0,255,65,0.03);
          transform: translateY(-2px);
        }

        .mx-title {
          color: #00ff41;
          animation: phosphorPulse 4s ease-in-out infinite;
        }
        .mx-dim { color: rgba(0,255,65,0.5); }
        .mx-bright { color: #00ff41; }
        .mx-accent { color: #00cc33; }

        .mx-tag {
          background: rgba(0,255,65,0.05);
          border: 1px solid rgba(0,255,65,0.2);
          color: rgba(0,255,65,0.7);
          transition: all 0.2s;
        }
        .mx-tag:hover {
          background: rgba(0,255,65,0.1);
          border-color: rgba(0,255,65,0.5);
          color: #00ff41;
        }

        .mx-progress {
          height: 2px;
          background: rgba(0,255,65,0.1);
          overflow: hidden;
        }
        .mx-progress-bar {
          height: 100%;
          background: #00ff41;
          box-shadow: 0 0 8px #00ff41;
          animation: progressBar 2s ease-out forwards;
        }

        .mx-section-header {
          font-family: 'Share Tech Mono', monospace;
          color: #00ff41;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .mx-reveal { animation: fadeIn 0.8s ease both; }

        .mx-btn {
          background: transparent;
          border: 1px solid #00ff41;
          color: #00ff41;
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 0.1em;
          transition: all 0.3s;
        }
        .mx-btn:hover {
          background: rgba(0,255,65,0.1);
          box-shadow: 0 0 15px rgba(0,255,65,0.2);
        }
      `}</style>

      <div className="mx-bg mx-code text-green-400 relative">
        <div className="mx-crt" />

        {/* Matrix rain columns */}
        {Array.from({length: 20}).map((_, i) => (
          <div key={i} className="mx-rain-col" style={{
            left: `${i * 5.2}%`,
            animationDuration: `${6 + (i % 7) * 1.5}s`,
            animationDelay: `${(i % 5) * -2}s`,
            fontSize: `${12 + (i%3)*2}px`
          }}>
            {'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF'.split('').sort(() => Math.random()-0.5).join('')}
          </div>
        ))}

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* HERO */}
          <section className="min-h-screen flex flex-col justify-center py-20">
            <div className="mx-card p-8 rounded-sm mb-8 mx-reveal">
              <div className="mx-section-header mb-4">terminal v4.2.1 — authenticated session</div>
              <pre className="mx-mono text-sm text-green-400 whitespace-pre-wrap leading-relaxed">
                {typed}{showCursor ? '█' : ' '}
              </pre>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start mx-reveal" style={{animationDelay:'2s'}}>
              <div className="mx-card p-2 rounded-sm shrink-0">
                <img
                  src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
                  alt="Profile"
                  className="w-40 h-40 object-cover"
                  style={{filter:'saturate(0) sepia(100%) hue-rotate(80deg) brightness(0.8) contrast(1.2)'}}
                />
              </div>
              <div>
                <div className="mx-dim text-sm mb-2">identity.profile</div>
                <h1 className="text-5xl md:text-6xl font-bold mx-title mb-2">{data.name}</h1>
                <h2 className="mx-code text-green-500 text-xl mb-4">{data.title}</h2>
                <p className="text-green-700 leading-relaxed max-w-xl">{data.summary}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {data.links && Object.entries(data.links).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <a key={platform} href={url} target="_blank" rel="noreferrer"
                        className="mx-btn px-4 py-2 text-sm rounded-sm capitalize">
                        [{platform} ↗]
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="py-20">
            <div className="mx-section-header mb-2">skills.query()</div>
            <div className="mx-progress mb-12"><div className="mx-progress-bar" /></div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
                <div key={cat} className="mx-card p-6 rounded-sm break-inside-avoid">
                  <div className="mx-dim text-xs mb-3">// {cat}</div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <div key={i} className="mx-tag flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-mono cursor-default">
                        <img src={getSkillLogo(s)} alt={s} className="w-3 h-3 object-contain opacity-70"
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
            <section className="py-20">
              <div className="mx-section-header mb-2">experience.log</div>
              <div className="mx-progress mb-12"><div className="mx-progress-bar" style={{animationDelay:'0.3s'}} /></div>
              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  <div key={i} className="mx-card p-8 rounded-sm mx-reveal" style={{animationDelay:`${0.2*i}s`}}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="mx-dim text-xs mb-1">[{String(i+1).padStart(2,'0')}] entry</div>
                        <h4 className="text-xl font-bold mx-bright">{exp.role}</h4>
                        <h5 className="mx-accent">{exp.company}</h5>
                      </div>
                      <span className="mx-dim text-sm mx-mono">{exp.duration}</span>
                    </div>
                    <p className="text-green-700 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          <section className="py-20">
            <div className="mx-section-header mb-2">projects.list()</div>
            <div className="mx-progress mb-12"><div className="mx-progress-bar" style={{animationDelay:'0.6s'}} /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((p, i) => (
                <div key={i} className="mx-card p-8 rounded-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="mx-dim text-xs">{`project_${String(i+1).padStart(2,'0')}.init()`}</span>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="mx-dim text-xs hover:text-green-400 transition-colors">[OPEN]</a>
                    )}
                  </div>
                  <h4 className="text-xl font-bold mx-bright mb-3">{p.title}</h4>
                  <p className="text-green-700 text-sm leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.techStack?.map((tech, idx) => (
                      <div key={idx} className="mx-tag flex items-center gap-1.5 px-2 py-1 text-xs">
                        <img src={getSkillLogo(tech)} alt={tech} className="w-3 h-3 object-contain opacity-60"
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
          <section className="py-20">
            <div className="mx-section-header mb-2">education.records</div>
            <div className="mx-progress mb-12"><div className="mx-progress-bar" style={{animationDelay:'0.9s'}} /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.education?.map((ed, i) => (
                <div key={i} className="mx-card p-8 rounded-sm text-center">
                  <div className="mx-mono text-4xl mx-dim mb-4">[EDU]</div>
                  <h4 className="font-bold mx-bright mb-2">{ed.degree}</h4>
                  <p className="mx-dim text-sm mb-3">{ed.college}</p>
                  <div className="mx-mono text-xs mx-accent">{ed.year} / {ed.score}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-20 pb-32">
            <div className="mx-section-header mb-2">contact.connect()</div>
            <div className="mx-progress mb-12"><div className="mx-progress-bar" style={{animationDelay:'1.2s'}} /></div>
            <div className="mx-card p-10 rounded-sm text-center mb-8">
              <p className="mx-mono text-green-600 text-sm mb-6">
                {'> CHANNEL OPEN. AWAITING INPUT...'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="mx-btn px-8 py-3 rounded-sm text-sm">
                    [EMAIL: {data.email}]
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="mx-btn px-8 py-3 rounded-sm text-sm">
                    [CALL: {data.phone}]
                  </a>
                )}
              </div>
              {data.location && <p className="mx-dim mt-4 text-xs mx-mono">📍 {data.location}</p>}
            </div>
            <div className="mx-card p-4 rounded-sm">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

export default TemplateMatrix;