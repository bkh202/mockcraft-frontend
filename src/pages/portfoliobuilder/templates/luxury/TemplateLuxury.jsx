import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateLuxury({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap');

        .lx-serif { font-family: 'Cormorant Garamond', serif; }
        .lx-display { font-family: 'Cinzel', serif; }
        .lx-sans { font-family: 'Raleway', sans-serif; }

        @keyframes goldShimmer {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes revealMask {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0% 0 0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes particleFloat {
          0%,100% { transform:translateY(0) rotate(0deg); opacity:0.3; }
          50% { transform:translateY(-20px) rotate(180deg); opacity:0.6; }
        }

        .lx-bg {
          background: #080608;
          min-height: 100vh;
        }

        .lx-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #f7d774 30%, #c9a84c 50%, #e8c96a 70%, #a07830 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 4s ease-in-out infinite;
        }

        .lx-gold-border {
          border-color: rgba(201,168,76,0.3);
        }
        .lx-gold-border:hover {
          border-color: rgba(201,168,76,0.7);
        }

        .lx-card {
          background: rgba(12, 10, 8, 0.95);
          border: 1px solid rgba(201,168,76,0.15);
          transition: all 0.5s ease;
          position: relative;
        }
        .lx-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .lx-card:hover::before { opacity: 1; }
        .lx-card:hover {
          border-color: rgba(201,168,76,0.35);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.05);
          transform: translateY(-4px);
        }

        .lx-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
          animation: lineExpand 1.5s ease forwards;
          transform-origin: center;
        }

        .lx-ornament {
          width: 6px; height: 6px;
          background: #c9a84c;
          transform: rotate(45deg);
          display: inline-block;
        }

        .lx-particle {
          position: fixed;
          width: 2px; height: 2px;
          background: #c9a84c;
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat linear infinite;
        }

        .lx-num {
          font-family: 'Cinzel', serif;
          font-size: 6rem;
          color: rgba(201,168,76,0.06);
          position: absolute;
          top: -1rem;
          right: 1rem;
          line-height: 1;
          user-select: none;
        }

        .lx-tag {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.2);
          color: rgba(201,168,76,0.7);
          transition: all 0.3s;
          font-family: 'Raleway', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .lx-tag:hover {
          background: rgba(201,168,76,0.05);
          border-color: rgba(201,168,76,0.5);
          color: #c9a84c;
        }

        .lx-btn {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.4);
          color: #c9a84c;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }
        .lx-btn::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: rgba(201,168,76,0.08);
          transition: height 0.4s;
        }
        .lx-btn:hover::before { height: 100%; }
        .lx-btn:hover {
          border-color: rgba(201,168,76,0.7);
          box-shadow: 0 0 20px rgba(201,168,76,0.1);
        }

        .lx-reveal { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      <div className="lx-bg lx-sans text-stone-300 overflow-x-hidden">

        {/* Gold particles */}
        {Array.from({length: 12}).map((_, i) => (
          <div key={i} className="lx-particle" style={{
            left: `${8 + i * 8}%`,
            top: `${10 + (i % 5) * 15}%`,
            animationDuration: `${8 + i * 1.5}s`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.2 + (i % 3) * 0.1
          }} />
        ))}

        <div className="max-w-5xl mx-auto px-8 relative z-10">

          {/* HERO */}
          <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
            <div className="lx-ornament mb-8 lx-reveal" />

            <div className="lx-display text-xs tracking-[0.6em] text-stone-500 mb-12 lx-reveal" style={{animationDelay:'0.2s'}}>
              PORTFOLIO COLLECTION
            </div>

            <div className="relative mb-12 lx-reveal" style={{animationDelay:'0.3s'}}>
              <div className="w-1 h-24 bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent mx-auto mb-8" />
              <div className="relative inline-block">
                <div className="absolute -inset-3 rounded-full border border-yellow-600/10" />
                <img
                  src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover"
                  style={{filter:'sepia(20%) contrast(1.05)', border:'1px solid rgba(201,168,76,0.3)'}}
                />
              </div>
            </div>

            <h1 className="lx-display text-5xl md:text-7xl font-semibold lx-gold lx-reveal mb-4" style={{animationDelay:'0.5s'}}>
              {data.name}
            </h1>

            <div className="lx-divider w-64 mx-auto my-8" />

            <h2 className="lx-serif text-2xl md:text-3xl italic text-stone-400 mb-8 lx-reveal" style={{animationDelay:'0.7s'}}>
              {data.title}
            </h2>

            <p className="lx-serif text-lg text-stone-500 max-w-2xl mx-auto leading-loose italic lx-reveal" style={{animationDelay:'0.9s'}}>
              "{data.summary}"
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-12 lx-reveal" style={{animationDelay:'1.1s'}}>
              {data.links && Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a key={platform} href={url} target="_blank" rel="noreferrer"
                    className="lx-btn px-8 py-3 rounded-none flex items-center gap-3">
                    <img src={getSkillLogo(platform)} alt={platform} className="w-4 h-4 object-contain opacity-60"
                      onError={(e)=>{e.target.style.display='none';}} />
                    {platform}
                  </a>
                );
              })}
            </div>
          </section>

          {/* SKILLS */}
          <section className="py-28">
            <div className="text-center mb-20">
              <span className="lx-ornament mb-4" />
              <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">EXPERTISE</h3>
              <div className="lx-divider w-48 mx-auto mt-6" />
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {Object.entries(categorizeSkills(data.skills)).map(([cat, skills]) => (
                <div key={cat} className="lx-card p-8 break-inside-avoid">
                  <h4 className="lx-display text-sm tracking-widest text-yellow-600/70 mb-6 pb-4 border-b border-yellow-600/10">
                    {cat.toUpperCase()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                      <div key={i} className="lx-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
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
            <section className="py-28">
              <div className="text-center mb-20">
                <span className="lx-ornament mb-4" />
                <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">EXPERIENCE</h3>
                <div className="lx-divider w-48 mx-auto mt-6" />
              </div>
              <div className="space-y-1">
                {data.experience.map((exp, i) => (
                  <div key={i} className="lx-card p-10 relative overflow-hidden">
                    <div className="lx-num">{String(i+1).padStart(2,'0')}</div>
                    <div className="relative z-10">
                      <div className="lx-display text-xs tracking-[0.3em] text-yellow-700/60 mb-2">{exp.duration}</div>
                      <h4 className="lx-serif text-3xl text-stone-200 mb-1">{exp.role}</h4>
                      <h5 className="lx-display text-sm tracking-wider text-yellow-600/70 mb-6">{exp.company}</h5>
                      <div className="lx-divider w-24" style={{animationDelay:`${i*0.2}s`}} />
                      <p className="lx-serif text-stone-500 leading-loose mt-6 text-lg">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          <section className="py-28">
            <div className="text-center mb-20">
              <span className="lx-ornament mb-4" />
              <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">WORKS</h3>
              <div className="lx-divider w-48 mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {data.projects?.map((p, i) => (
                <div key={i} className="lx-card p-10 relative overflow-hidden group">
                  <div className="lx-num">{String(i+1).padStart(2,'0')}</div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="lx-display text-xs tracking-widest text-yellow-700/50">{p.duration}</span>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer"
                          className="lx-btn px-4 py-1.5 text-xs">VIEW ↗</a>
                      )}
                    </div>
                    <h4 className="lx-serif text-3xl text-stone-200 mb-4 group-hover:text-yellow-500 transition-colors">{p.title}</h4>
                    <p className="lx-serif text-stone-500 leading-loose mb-8">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.techStack?.map((tech, idx) => (
                        <div key={idx} className="lx-tag flex items-center gap-1.5 px-3 py-1 cursor-default text-xs">
                          <img src={getSkillLogo(tech)} alt={tech} className="w-3 h-3 object-contain opacity-40"
                            onError={(e)=>{e.target.style.display='none';}} />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="py-28">
            <div className="text-center mb-20">
              <span className="lx-ornament mb-4" />
              <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">EDUCATION</h3>
              <div className="lx-divider w-48 mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {data.education?.map((ed, i) => (
                <div key={i} className="lx-card p-10 text-center">
                  <div className="lx-ornament mx-auto mb-6" />
                  <h4 className="lx-display text-sm tracking-wider text-stone-300 mb-3">{ed.degree}</h4>
                  <p className="lx-serif text-stone-500 italic mb-4">{ed.college}</p>
                  <div className="lx-display text-xs tracking-widest text-yellow-700/60">{ed.year} · {ed.score}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-28 pb-40">
            <div className="text-center mb-20">
              <span className="lx-ornament mb-4" />
              <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">CONNECT</h3>
              <div className="lx-divider w-48 mx-auto mt-6" />
            </div>
            <div className="lx-card p-16 text-center mb-8">
              <p className="lx-serif text-3xl italic text-stone-400 mb-10">
                "Every great collaboration begins with a conversation."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="lx-btn px-10 py-4">
                    ✉ {data.email}
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="lx-btn px-10 py-4">
                    ✆ {data.phone}
                  </a>
                )}
              </div>
              {data.location && (
                <p className="lx-serif italic text-stone-600 mt-8">{data.location}</p>
              )}
            </div>
            <div className="lx-card p-4">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

export default TemplateLuxury;