import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";

function TemplateEditorial({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .font-notion { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        
        .notion-divider { 
          border-bottom: 1px solid rgba(55, 53, 47, 0.16); 
          margin: 2.5rem 0;
        }
        
        .notion-callout {
          padding: 20px 20px 20px 24px;
          border-radius: 8px;
          background: rgba(250, 250, 248, 1);
          display: flex;
          gap: 14px;
          align-items: flex-start;
          border: 1px solid rgba(55, 53, 47, 0.08);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .notion-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 13px;
          line-height: 1.2;
          background: rgba(235, 235, 233, 0.7);
          color: rgba(55, 53, 47, 0.9);
          white-space: nowrap;
          font-weight: 500;
          transition: background 0.15s ease;
        }
        .notion-tag:hover {
          background: rgba(220, 220, 218, 1);
        }

        .notion-card {
          border: 1px solid rgba(55, 53, 47, 0.1);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
          background: white;
        }
        .notion-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
          border-color: rgba(55, 53, 47, 0.2);
          transform: translateY(-2px);
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
      `}</style>

      <div className="min-h-screen bg-white text-[#1e1e1e] font-notion pb-32 selection:bg-blue-200/30 antialiased">

        {/* Cover Image Banner with subtle gradient overlay */}
        <div className="h-56 md:h-72 w-full bg-linear-to-br from-gray-100 via-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #cbd5e1 0.5px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto px-6 relative -mt-20 md:-mt-24">

          {/* ✅ ID ADDED: ABOUT (Profile & Header) */}
          <section id="about" className="mb-14 pt-4">
            <div className="relative inline-block mb-5 group">
              <img
                src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl ring-1 ring-black/5"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2 tracking-tight text-gray-900">
              {data.name}
            </h1>
            <p className="text-xl text-gray-500 font-medium mb-4">{data.title}</p>

            {/* Contact Info with refined spacing */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-7">
              {data.location && <span className="flex items-center gap-1.5">📍 <span className="border-b border-dotted border-gray-300">{data.location}</span></span>}
              {data.email && <a href={`mailto:${data.email}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-400 group">✉️ <span className="group-hover:text-gray-900">{data.email}</span></a>}
              {data.phone && <a href={`tel:${data.phone}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-400 group">📞 <span className="group-hover:text-gray-900">{data.phone}</span></a>}
            </div>

            {/* Social Links as subtle buttons with icons */}
            <div className="flex flex-wrap gap-2 mb-10">
              {data.links && Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-sm font-medium transition-all border border-gray-200/80 capitalize text-gray-700 hover:shadow-sm"
                  >
                    {/* ✅ LOGO ADDED HERE */}
                    <img
                      src={getSkillLogo(platform)}
                      alt={platform}
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; // Fallback link icon
                      }}
                    />

                    {platform}

                    {/* Arrow shifted to right with hover effect */}
                    <span className="text-gray-400 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                )
              })}
            </div>

            {/* Enhanced Notion Callout with subtle shadow */}
            <div className="notion-callout text-base leading-relaxed text-[#2e2e2e]">
              <span className="text-2xl leading-none">💡</span>
              <div className="[&>p]:mt-0 [&>p]:mb-2">{data.summary}</div>
            </div>
          </section>

          <div className="notion-divider"></div>

          {/* ✅ ID ADDED: EXPERIENCE */}
          {data.experience && data.experience.length > 0 && (
            <section id="experience" className="mb-14 pt-6">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4">
                <span className="text-2xl">💼</span> Work Experience
              </h2>
              <div className="space-y-8 pl-2">
                {data.experience.map((exp, i) => (
                  <div key={i} className="group relative pl-8 pb-2 transition-all hover:pl-9">
                    <div className="absolute -left-1.25 top-1.5 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-gray-800 transition-all ring-4 ring-white"></div>
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
                    </div>
                    <div className="text-gray-600 font-medium mb-3 flex items-center gap-2">
                      <span className="text-gray-400">🏢</span> {exp.company}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm/relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="notion-divider"></div>

          {/* ✅ ID ADDED: PROJECTS */}
          <section id="projects" className="mb-14 pt-6">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4">
              <span className="text-2xl">🚀</span> Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((p, i) => (
                <div key={i} className="notion-card p-6 flex flex-col h-full bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-gray-600">📁</span> {p.title}
                    </h3>
                    <div className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{p.duration}</div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 grow">
                    {p.description}
                  </p>

                  <div className="flex flex-col gap-4 mt-auto pt-5 border-t border-gray-100">

                    {/* ✅ LOGOS ADDED IN TECH STACK */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.techStack?.map((tech, idx) => (
                        <div key={idx} className="notion-tag text-xs px-3 py-1.5 inline-flex items-center gap-1.5">
                          <img
                            src={getSkillLogo(tech)}
                            alt={tech}
                            className="w-3.5 h-3.5 object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; // Fallback icon
                            }}
                          />
                          {tech}
                        </div>
                      ))}
                    </div>

                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors w-fit group">
                        View Project <span className="text-xs group-hover:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="notion-divider"></div>

          {/* ✅ ID ADDED: SKILLS & LANGUAGES (Split View) */}
          <section id="skills" className="mb-14 pt-6">
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Technical Expertise
              </h2>
            </div>

            {/* ✅ Masonry Layout (Perfect Fitting Cards) */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

              {/* SKILL CATEGORIES */}
              {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
                <div
                  key={category}
                  className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-bold mb-4 text-gray-800 flex items-center gap-2">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 font-medium text-sm rounded-full border border-gray-200/80 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-default shadow-sm"
                      >
                        {/* ✅ Skill Logo */}
                        <img
                          src={getSkillLogo(skill)}
                          alt={skill}
                          className="w-4 h-4 object-contain"
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

              {/* LANGUAGES SECTION */}
              {data.languages && data.languages.length > 0 && (
                <div className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-base font-bold mb-4 text-gray-800 flex items-center gap-2">
                    🌍 Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 font-medium text-sm rounded-full border border-gray-200/80 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-default shadow-sm"
                      >
                        <span className="text-gray-400 text-sm">🗣</span> {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>

          <div className="notion-divider"></div>

          {/* ✅ ID ADDED: EDUCATION & CERTIFICATES (Split View) */}
          <section id="education" className="mb-14 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">🎓</span> Education
                </h2>
                <div className="space-y-6">
                  {data.education?.map((ed, i) => (
                    <div key={i} className="relative pl-5 border-l-2 border-gray-200 hover:border-gray-400 transition-colors group">
                      <div className="absolute -left-1.75 top-1.5 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-gray-800 ring-4 ring-white"></div>
                      <h3 className="text-md font-bold text-gray-900 leading-tight mb-1">{ed.degree}</h3>
                      <div className="text-gray-500 text-sm mb-2">{ed.college}</div>
                      <div className="flex gap-2 text-xs text-gray-500">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{ed.year}</span>
                        {ed.score && <span className="bg-gray-100 px-3 py-1 rounded-full">{ed.score}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              {data.certificates && data.certificates.length > 0 && (
                <div id="certificates">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">🏆</span> Certifications
                  </h2>
                  <div className="space-y-3">
                    {data.certificates.map((cert, i) => (
                      <div key={i} className="p-5 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all bg-white">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-gray-900 text-base">{cert.name}</h3>
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors p-1 -mt-1 -mr-1" title="View Credential">
                              ↗
                            </a>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mb-2">{cert.issuer}</div>
                        {cert.date && <div className="text-xs text-gray-400 font-medium bg-gray-50 inline-block px-3 py-1 rounded-full">{cert.date}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>

          <div className="glitch-card p-3">
            <ContactForm data={data} />
          </div>

        </div>
      </div>
    </Layout>
  );
}
export default TemplateEditorial;