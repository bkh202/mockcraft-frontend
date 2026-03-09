import React from "react";
import Layout from "../../components/Layout";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";
import ContactForm from "../../components/ContactForm";

function SidebarTemplate({ data }) {
  if (!data) return null;

  const categorizedSkills = categorizeSkills(data.skills || []);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#fafaf9] dark:bg-[#0b0f19] text-slate-800 dark:text-slate-200 font-sans selection:bg-teal-500/30">
        
        {/* =========================================
            LEFT SIDEBAR (Fixed on Desktop)
        ========================================= */}
        <aside className="md:w-95 md:fixed md:h-screen bg-[#0f172a] text-slate-100 p-8 md:p-12 flex flex-col justify-between overflow-y-auto custom-scrollbar relative z-20 shadow-2xl">
          {/* Subtle background glow in sidebar */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-10">
            {/* Profile Section */}
            <div className="text-center md:text-left">
              <div className="inline-block relative mb-6 group">
                <div className="absolute -inset-1.5 bg-linear-to-tr from-teal-400 to-rose-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                {data.profileImage ? (
                  <img
                    src={data.profileImage}
                    alt="Profile"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#0f172a]"
                  />
                ) : (
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-4 border-[#0f172a] flex items-center justify-center text-4xl font-black text-slate-400">
                    {data.name?.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                {data.name}
              </h1>
              <p className="text-lg font-medium text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-teal-200 mb-6">
                {data.title}
              </p>
              
              {/* Quick Contact Info */}
              <div className="space-y-3 text-sm font-medium text-slate-400">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="text-teal-400">✉</span> {data.email}
                  </a>
                )}
                {data.phone && (
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400">📞</span> {data.phone}
                  </div>
                )}
                {data.location && (
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400">📍</span> {data.location}
                  </div>
                )}
              </div>
            </div>

            {/* Social Links with Logos */}
            {data.links && Object.keys(data.links).length > 0 && (
              <div className="pt-8 border-t border-slate-800">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Connect</h2>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(data.links).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                        title={platform}
                      >
                        <img
                          src={getSkillLogo(platform)}
                          alt={platform}
                          className="w-4 h-4 object-contain brightness-0 invert"
                          onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative Bottom Text */}
          <div className="hidden md:block relative z-10 mt-12 text-xs font-bold text-slate-700 uppercase tracking-widest">
            Portfolio © {new Date().getFullYear()}
          </div>
        </aside>

        {/* =========================================
            MAIN CONTENT (Scrollable on Desktop)
        ========================================= */}
        <main className="flex-1 md:ml-95 p-6 md:p-16 lg:p-24 space-y-24 relative z-10">
          
          {/* Background pattern for main area */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          {/* About Section */}
          {data.summary && (
            <section className="relative" id="about">
              <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> About Me
              </h2>
              <p className="text-xl md:text-3xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                {data.summary}
              </p>
            </section>
          )}

          {/* Skills & Languages (Categorized) */}
          <section id="skills">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Expertise
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="bg-white dark:bg-[#131b2f] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-teal-100 dark:hover:border-teal-900/50 transition-all">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                      <span key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-default">
                        <img
                          src={getSkillLogo(skill)}
                          alt={skill}
                          className="w-4 h-4 object-contain"
                          onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Languages Card */}
              {data.languages && data.languages.length > 0 && (
                <div className="bg-white dark:bg-[#131b2f] p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-rose-100 dark:hover:border-rose-900/50 transition-all">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {data.languages.map((lang, i) => (
                      <span key={i} className="flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl text-sm font-bold text-rose-600 dark:text-rose-400">
                        💬 {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Work Experience */}
          {data.experience?.length > 0 && (
            <section id="experience">
              <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Work History
              </h2>
              <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-4 pl-8 md:pl-10 relative">
                {data.experience.map((e, i) => (
                  <div key={i} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-10.25 md:-left-12.25 top-1.5 w-5 h-5 bg-white dark:bg-[#0b0f19] border-4 border-slate-300 dark:border-slate-700 rounded-full group-hover:border-teal-500 transition-colors"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{e.role}</h3>
                      <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                      <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md w-fit">
                        {e.duration}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">{e.company}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl text-sm md:text-base">
                      {e.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects?.length > 0 && (
           <section id="projects">
              <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Selected Works
              </h2>
              <div className="grid xl:grid-cols-2 gap-8">
                {data.projects.map((p, i) => (
                  <div key={i} className="group bg-white dark:bg-[#131b2f] p-8 md:p-10 rounded-4xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {p.title}
                      </h3>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-colors">
                          ↗
                        </a>
                      )}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-8 grow leading-relaxed text-sm md:text-base">
                      {p.description}
                    </p>
                    
                    {/* Tech Stack in Projects */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                      {p.techStack?.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          <img
                            src={getSkillLogo(tech)}
                            alt={tech}
                            className="w-3.5 h-3.5 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                            onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                          />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education & Certifications */}
          <section id="education">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> Credentials
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Education Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
                {data.education?.map((e, i) => (
                  <div key={i} className="bg-slate-100 dark:bg-[#131b2f] p-6 rounded-2xl border-l-4 border-teal-500">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{e.degree}</h4>
                    <p className="text-teal-600 dark:text-teal-400 font-medium my-1">{e.college || e.institution}</p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <span>{e.year || e.duration}</span>
                      <span>{e.score}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificates Grid */}
              {data.certificates?.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Certifications</h3>
                  {data.certificates.map((cert, i) => (
                    <div key={i} className="bg-slate-100 dark:bg-[#131b2f] p-6 rounded-2xl border-l-4 border-rose-400 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-xl shadow-sm shrink-0">
                        🏅
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{cert.name || cert.title || cert}</h4>
                        {cert.issuer && <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{cert.issuer}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="pt-12" id="contact">
            <div className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Work Together</h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
                  Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
                </p>
                
                {/* Embed the ContactForm Component */}
                <div className="max-w-2xl mx-auto text-left bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl">
                  <ContactForm data={data} />
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </Layout>
  );
}

export default SidebarTemplate;