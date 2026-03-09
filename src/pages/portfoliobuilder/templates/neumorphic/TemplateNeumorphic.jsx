import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateNeumorphic({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        .font-stripe { font-family: 'Inter', sans-serif; }
        
        .bg-stripe {
          background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
        }

        .stripe-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.7);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        
        .stripe-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 45px -15px rgba(79, 70, 229, 0.15), 0 8px 20px -8px rgba(0,0,0,0.1);
          background: white;
          border-color: rgba(255,255,255,1);
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          color: #4f46e5;
          transition: all 0.2s;
        }
        .contact-icon:hover {
          background: #4f46e5;
          color: white;
          transform: scale(1.1);
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: linear-gradient(145deg, #ffffff, #f9fafc);
          border: 1px solid #eef2f6;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1e293b;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          transition: all 0.2s;
        }
        .skill-tag:hover {
          background: white;
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transform: scale(1.02);
        }

        .gradient-line {
          height: 4px;
          width: 60px;
          background: linear-gradient(90deg, #4f46e5, #a855f7);
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        /* Smooth Reveal */
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="min-h-screen bg-stripe text-[#0f172a] font-stripe pb-24 antialiased">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-24 space-y-12">

          {/* ✅ ID ADDED: ABOUT (Hero Section) */}
          <section id="about" className="stripe-card p-8 md:p-12 relative overflow-hidden animate-reveal">
            {/* Subtle decorative gradient */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-linear-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative flex flex-col md:flex-row gap-10 items-center">
              <div className="shrink-0">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                  <img
                    src={data.profileImage || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80"}
                    alt="Profile"
                    className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-white shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 border-4 border-white rounded-full animate-bounce"></div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-3">
                  {data.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold mb-4">
                  {data.title}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl mb-6 text-lg">
                  {data.summary}
                </p>

                {/* Contact Info as icon row */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                  {data.email && (
                    <a href={`mailto:${data.email}`} className="contact-icon" title={data.email}>
                      <span className="text-lg">✉️</span>
                    </a>
                  )}
                  {data.phone && (
                    <a href={`tel:${data.phone}`} className="contact-icon" title={data.phone}>
                      <span className="text-lg">📞</span>
                    </a>
                  )}
                  {data.location && (
                    <span className="contact-icon" title={data.location}>
                      <span className="text-lg">📍</span>
                    </span>
                  )}

                  <div className="w-px h-6 bg-gray-300 mx-2 hidden sm:block"></div>

                  {/* Social links */}
                  {data.links && Object.entries(data.links).map(([platform, url]) => (
                    url && (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        // 'group' add kiya taaki hover pe arrow aur logo animate ho sake
                        className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 transition-all shadow-sm flex items-center gap-2 capitalize"
                      >
                        {/* ✅ CLEAN CORPORATE LOGO */}
                        <img
                          src={getSkillLogo(platform)}
                          alt={platform}
                          className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                          }}
                        />

                        <span>{platform}</span>

                        {/* ✅ Animated Arrow on the right */}
                        <span className="text-xs text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main 3-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 space-y-8">

              <section id="skills" className="animate-reveal space-y-6" style={{ animationDelay: "0.1s" }}>

                {/* TECHNICAL SKILLS CARD */}
                <div className="stripe-card p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <div className="w-1.5 h-7 bg-indigo-500 rounded-full"></div> Core Expertise
                  </h3>
                  <div className="gradient-line mb-8"></div>

                  <div className="space-y-8">
                    {Object.entries(categorizeSkills(data.skills)).map(([category, skills], idx) => (
                      <div key={category} className={idx !== 0 ? "pt-6 border-t border-gray-100" : ""}>
                        <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">
                          {category}
                        </h4>

                        <div className="flex flex-wrap gap-2.5">
                          {skills.map((skill, i) => (
                            <span
                              key={i}
                              // inline-flex ensure karega ki logo aur text ek line me properly center ho
                              className="skill-tag inline-flex items-center gap-1.5 hover:shadow-md transition-shadow"
                            >
                              {/* ✅ CLEAN LOGO INTEGRATION */}
                              <img
                                src={getSkillLogo(skill)}
                                alt={skill}
                                className="w-4 h-4 object-contain drop-shadow-sm"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                                }}
                              />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LANGUAGES CARD (Optional but looks great in Stripe layout) */}
                {data.languages && data.languages.length > 0 && (
                  <div className="stripe-card p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <div className="w-1.5 h-7 bg-teal-500 rounded-full"></div> Languages
                    </h3>
                    <div className="gradient-line mb-6 opacity-60"></div>
                    <div className="flex flex-wrap gap-2.5">
                      {data.languages.map((lang, i) => (
                        <span key={i} className="skill-tag inline-flex items-center gap-1.5 hover:shadow-md transition-shadow">
                          <span className="text-gray-400 opacity-70">🌐</span>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </section>


              {/* ✅ ID ADDED: EDUCATION */}
              <section id="education" className="stripe-card p-8 animate-reveal" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-7 bg-blue-500 rounded-full"></div> Education
                </h3>
                <div className="gradient-line bg-linear-to-r from-blue-400 to-cyan-500"></div>
                <div className="space-y-6">
                  {data.education?.map((ed, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-gray-200 hover:border-blue-400 transition-colors">
                      <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white"></div>
                      <h4 className="font-bold text-gray-900 leading-tight">{ed.degree}</h4>
                      <p className="text-sm text-gray-500 mt-1">{ed.college}</p>
                      <div className="text-xs font-semibold text-gray-400 mt-2 flex gap-2">
                        <span>{ed.year}</span>
                        {ed.score && <span className="text-blue-600">• Score: {ed.score}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CERTIFICATES */}
              {data.certificates && data.certificates.length > 0 && (
                <section id="certificates" className="stripe-card p-8 animate-reveal" style={{ animationDelay: "0.4s" }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-7 bg-amber-500 rounded-full"></div> Certifications
                  </h3>
                  <div className="gradient-line bg-linear-to-r from-amber-400 to-orange-500"></div>
                  <div className="space-y-4">
                    {data.certificates.map((cert, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 mt-0.5 border border-amber-100">🏆</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs text-indigo-500 font-medium inline-flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                              View credential <span>↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 space-y-8">

              {/* ✅ ID ADDED: EXPERIENCE */}
              <section id="experience" className="stripe-card p-8 md:p-10 animate-reveal" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-purple-500 rounded-full"></div> Work Experience
                </h3>
                <div className="gradient-line bg-linear-to-r from-purple-500 to-pink-500 w-24"></div>

                <div className="space-y-8 mt-8">
                  {data.experience?.map((exp, i) => (
                    <div key={i} className="pb-8 border-b border-gray-100 last:border-0 last:pb-0 group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="text-purple-600 font-semibold mb-4 flex items-center gap-2">
                        <span>🏢</span> {exp.company}
                      </div>
                      <p className="text-gray-600 leading-relaxed text-md">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ✅ ID ADDED: PROJECTS */}
         {/* ✅ ID ADDED: PROJECTS */}
              <section id="projects" className="animate-reveal" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pl-2 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> Featured Projects
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.projects?.map((p, i) => (
                    <div key={i} className="stripe-card p-6 flex flex-col h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Project Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-xs font-bold tracking-wider text-indigo-500 uppercase bg-indigo-50 px-2.5 py-1 rounded-md shadow-sm border border-indigo-100">
                          {p.duration}
                        </div>
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-gray-200 shadow-sm">
                            {/* Animated Arrow */}
                            <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                          </a>
                        )}
                      </div>
                      
                      {/* Project Details */}
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                        {p.description}
                      </p>
                      
                      {/* ✅ UPGRADED: TECH STACK WITH LOGOS */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                        {p.techStack?.map((tech, idx) => (
                          <div 
                            key={idx} 
                            // inline-flex ensure karta hai ki icon aur text aage-peeche perfectly align rahein
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all cursor-default"
                          >
                            <img 
                              src={getSkillLogo(tech)} 
                              alt={tech} 
                              className="w-3.5 h-3.5 object-contain"
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

            </div>
          </div>

          {/* ✅ NAYA: CONTACT SECTION BOTTOM */}
          <section id="contact" className="stripe-card p-10 md:p-16 text-center animate-reveal relative overflow-hidden mt-12" style={{ animationDelay: "0.6s" }}>
            <div className="absolute inset-0 bg-linear-to-t from-indigo-500/5 to-transparent pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Let's work together</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto text-lg">Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects.</p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {data.email && (
                <a href={`mailto:${data.email}`} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5">
                  Say Hello 👋
                </a>
              )}
              {data.links?.linkedin && (
                <a href={`https://${data.links.linkedin}`} target="_blank" rel="noreferrer" className="px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                  Connect on LinkedIn
                </a>
              )}
            </div>

            <div className="glitch-card p-2">
              <ContactForm data={data} />
            </div>

          </section>

        </div>
      </div>
    </Layout>
  );
}
export default TemplateNeumorphic;