import { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateSpace({ data }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({length: 200}).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.001
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.speed * (Math.random() > 0.5 ? 1 : -1);
        s.alpha = Math.max(0.1, Math.min(1, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(200,220,255,${s.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,200;0,300;0,400;0,700;1,300&family=Orbitron:wght@400;600;700&display=swap');

        .sp-body { font-family: 'Exo 2', sans-serif; }
        .sp-display { font-family: 'Orbitron', sans-serif; }

        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes nebulaPulse {
          0%,100% { opacity:0.15; transform:scale(1); }
          50% { opacity:0.25; transform:scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes cosmicGlow {
          0%,100% { box-shadow: 0 0 20px rgba(100,160,255,0.2); }
          50% { box-shadow: 0 0 40px rgba(100,160,255,0.4), 0 0 80px rgba(100,160,255,0.1); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity:1; }
          100% { transform: translateX(300px) translateY(300px) rotate(45deg); opacity:0; }
        }

        .sp-bg {
          background: radial-gradient(ellipse at 20% 20%, #050a1a 0%, #030508 60%, #000204 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .sp-nebula {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: nebulaPulse ease-in-out infinite;
        }

        .sp-card {
          background: rgba(5, 15, 35, 0.8);
          border: 1px solid rgba(100,160,255,0.12);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .sp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(100,160,255,0.3), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .sp-card:hover::before { opacity: 1; }
        .sp-card:hover {
          border-color: rgba(100,160,255,0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(100,160,255,0.05);
          transform: translateY(-4px);
          animation: cosmicGlow 2s ease-in-out infinite;
        }

        .sp-blue { color: #64a0ff; }
        .sp-purple { color: #a080ff; }
        .sp-white { color: #e0ecff; }
        .sp-dim { color: rgba(150,180,220,0.5); }

        .sp-tag {
          background: rgba(100,160,255,0.05);
          border: 1px solid rgba(100,160,255,0.15);
          color: rgba(150,190,255,0.7);
          transition: all 0.3s;
        }
        .sp-tag:hover {
          background: rgba(100,160,255,0.1);
          border-color: rgba(100,160,255,0.4);
          color: #a0c0ff;
        }

        .sp-btn {
          background: transparent;
          border: 1px solid rgba(100,160,255,0.3);
          color: #64a0ff;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s;
        }
        .sp-btn:hover {
          background: rgba(100,160,255,0.08);
          border-color: rgba(100,160,255,0.6);
          box-shadow: 0 0 20px rgba(100,160,255,0.1);
        }

        .sp-section-title {
          font-family: 'Orbitron', sans-serif;
          color: #64a0ff;
          text-shadow: 0 0 20px rgba(100,160,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sp-orbit-ring {
          border: 1px solid rgba(100,160,255,0.15);
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
        }

        .sp-reveal { animation: fadeIn 1s cubic-bezier(0.16,1,0.3,1) both; }

        .sp-shooting {
          position: fixed;
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, rgba(200,220,255,0.8), transparent);
          pointer-events: none;
          animation: shootingStar 3s ease-in forwards;
        }
      `}</style>

      <div className="sp-bg sp-body text-blue-100 relative">
        {/* Starfield canvas */}
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{opacity:0.7}} />

        {/* Nebula blobs */}
        <div className="sp-nebula" style={{width:'500px',height:'500px',background:'rgba(80,40,180,1)',top:'-10%',left:'-10%',animationDuration:'12s'}} />
        <div className="sp-nebula" style={{width:'400px',height:'400px',background:'rgba(20,80,200,1)',top:'30%',right:'-10%',animationDuration:'15s',animationDelay:'3s'}} />
        <div className="sp-nebula" style={{width:'600px',height:'300px',background:'rgba(10,40,120,1)',bottom:'10%',left:'20%',animationDuration:'18s',animationDelay:'6s'}} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* HERO */}
          <section className="min-h-screen flex flex-col items-center justify-center text-center py-20 relative">
            {/* Orbit rings around profile */}
            <div className="relative mb-12 sp-reveal" style={{animationDelay:'0.2s'}}>
              <div className="sp-orbit-ring" style={{width:'220px',height:'220px',top:'-30px',left:'-30px',animation:'orbitRotate 20s linear infinite'}} />
              <div className="sp-orbit-ring" style={{width:'280px',height:'280px',top:'-60px',left:'-60px',animation:'orbitCounter 30s linear infinite',borderStyle:'dashed',opacity:0.5}} />
              {/* Orbiting dot */}
              <div style={{
                position:'absolute', width:'220px', height:'220px', top:'-30px', left:'-30px',
                animation:'orbitRotate 20s linear infinite'
              }}>
                <div style={{
                  position:'absolute', top:0, left:'50%', transform:'translateX(-50%) translateY(-50%)',
                  width:'8px', height:'8px', borderRadius:'50%', background:'#64a0ff',
                  boxShadow:'0 0 10px #64a0ff'
                }} />
              </div>

              <img
                src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
                alt="Profile"
                className="relative w-40 h-40 rounded-full object-cover z-10"
                style={{border:'1px solid rgba(100,160,255,0.3)', boxShadow:'0 0 40px rgba(100,160,255,0.2)'}}
              />
            </div>

            <div className="sp-display text-xs tracking-[0.5em] sp-dim mb-4 sp-reveal" style={{animationDelay:'0.3s'}}>
              SYSTEM: ONLINE — COORDINATES LOCKED
            </div>

            <h1 className="text-5xl md:text-7xl font-bold sp-white mb-4 sp-reveal" style={{animationDelay:'0.5s', textShadow:'0 0 40px rgba(100,160,255,0.3)'}}>
              {data.name}
            </h1>

            <h2 className="sp-section-title text-lg mb-8 sp-reveal" style={{animationDelay:'0.7s'}}>
              {data.title}
            </h2>

            <p className="text-blue-300/60 text-lg max-w-2xl mx-auto leading-relaxed sp-reveal" style={{animationDelay:'0.9s'}}>
              {data.summary}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10 sp-reveal" style={{animationDelay:'1.1s'}}>
              {data.links && Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a key={platform} href={url} target="_blank" rel="noreferrer"
                    className="sp-btn px-6 py-3 rounded-full flex items-center gap-2">
                    <img src={getSkillLogo(platform)} alt={platform} className="w-4 h-4 object-contain opacity-70"
                      onError={(e)=>{e.target.style.display='none';}} />
                    {platform}
                  </a>
                );
              })}
            </div>
          </section>

          {/* SKILLS */}
          <section className="py-24">
            <div className="text-center mb-16">
              <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 01</div>
              <h3 className="sp-section-title text-3xl">TECHNICAL SYSTEMS</h3>
              <div className="h-px w-48 mx-auto mt-4" style={{background:'linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)'}} />
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
                <div key={cat} className="sp-card p-6 rounded-2xl break-inside-avoid">
                  <h4 className="sp-display text-xs tracking-widest sp-blue mb-4 pb-3 border-b border-blue-500/10">
                    {cat}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <div key={i} className="sp-tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-default">
                        <img src={getSkillLogo(s)} alt={s} className="w-3.5 h-3.5 object-contain opacity-60"
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
              <div className="text-center mb-16">
                <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 02</div>
                <h3 className="sp-section-title text-3xl">MISSION LOG</h3>
                <div className="h-px w-48 mx-auto mt-4" style={{background:'linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)'}} />
              </div>
              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  <div key={i} className="sp-card p-8 rounded-2xl sp-reveal" style={{animationDelay:`${i*0.15}s`}}>
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="shrink-0 text-center">
                        <div className="w-14 h-14 rounded-full border border-blue-500/20 flex items-center justify-center"
                          style={{background:'rgba(100,160,255,0.05)', boxShadow:'0 0 20px rgba(100,160,255,0.1)'}}>
                          <span className="sp-display text-sm sp-blue">{String(i+1).padStart(2,'0')}</span>
                        </div>
                      </div>
                      <div>
                        <span className="sp-display text-xs tracking-widest sp-dim">{exp.duration}</span>
                        <h4 className="text-2xl font-bold sp-white mt-1">{exp.role}</h4>
                        <h5 className="sp-blue font-medium mb-4">{exp.company}</h5>
                        <p className="text-blue-300/50 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          <section className="py-24">
            <div className="text-center mb-16">
              <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 03</div>
              <h3 className="sp-section-title text-3xl">LAUNCHED PROJECTS</h3>
              <div className="h-px w-48 mx-auto mt-4" style={{background:'linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)'}} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((p, i) => (
                <div key={i} className="sp-card p-8 rounded-2xl sp-reveal" style={{animationDelay:`${i*0.15}s`}}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="sp-display text-xs sp-dim">{p.duration}</span>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="sp-btn px-4 py-1.5 rounded-full text-xs">
                        LAUNCH ↗
                      </a>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold sp-white mb-3">{p.title}</h4>
                  <p className="text-blue-300/50 text-sm leading-relaxed mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.techStack?.map((tech, idx) => (
                      <div key={idx} className="sp-tag flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs">
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
          <section className="py-24">
            <div className="text-center mb-16">
              <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 04</div>
              <h3 className="sp-section-title text-3xl">EDUCATION</h3>
              <div className="h-px w-48 mx-auto mt-4" style={{background:'linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)'}} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.education?.map((ed, i) => (
                <div key={i} className="sp-card p-8 rounded-2xl text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{background:'rgba(100,160,255,0.08)', border:'1px solid rgba(100,160,255,0.2)'}}>
                    <span className="text-xl">🎓</span>
                  </div>
                  <h4 className="font-bold sp-white mb-2">{ed.degree}</h4>
                  <p className="sp-dim text-sm mb-3">{ed.college}</p>
                  <div className="sp-display text-xs sp-blue">{ed.year} · {ed.score}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-24 pb-40">
            <div className="text-center mb-16">
              <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 05</div>
              <h3 className="sp-section-title text-3xl">OPEN CHANNEL</h3>
              <div className="h-px w-48 mx-auto mt-4" style={{background:'linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)'}} />
            </div>
            <div className="sp-card p-12 rounded-2xl text-center mb-8">
              <p className="text-blue-300/60 text-lg mb-8 max-w-xl mx-auto">
                Signal received. Ready to connect across the universe.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="sp-btn px-8 py-4 rounded-full flex items-center gap-2">
                    ✉ {data.email}
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="sp-btn px-8 py-4 rounded-full flex items-center gap-2">
                    📞 {data.phone}
                  </a>
                )}
              </div>
              {data.location && <p className="sp-dim mt-6 text-sm sp-display tracking-wider">📍 {data.location}</p>}
            </div>
            <div className="sp-card p-4 rounded-2xl">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

export default TemplateSpace;