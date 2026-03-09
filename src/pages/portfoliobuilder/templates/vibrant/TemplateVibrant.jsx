import Layout from "../../components/Layout";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills"; // Path theek kar lena agar alag ho
import ContactForm from "../../components/ContactForm";

function TemplateVibrant({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-vibrant { font-family: 'Inter', sans-serif; }
        
        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 20px 5px rgba(236, 72, 153, 0.2); }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .animate-fade-up-delay-1 {
          animation: fade-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-up-delay-2 {
          animation: fade-up 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        /* Card styles */
        .vibrant-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vibrant-card:hover {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 30px 50px -20px rgba(236, 72, 153, 0.4);
          border-color: rgba(236, 72, 153, 0.3);
          background: white;
        }
        
        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Skill chips upgraded */
        .chip-vibrant {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.4rem 1.2rem;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          background: linear-gradient(145deg, #fce7f3, #f3e8ff);
          color: #6b21a8;
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: 0 2px 5px rgba(0,0,0,0.02);
          transition: all 0.2s;
        }
        .chip-vibrant:hover {
          transform: scale(1.05);
          background: linear-gradient(145deg, #fbcfe8, #ede9fe);
          box-shadow: 0 8px 15px rgba(236, 72, 153, 0.2);
        }
        
        /* Background pattern */
        .bg-pattern {
          background-color: #f5f3ff;
          background-image: radial-gradient(at 30% 30%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
                            radial-gradient(at 70% 80%, rgba(139, 92, 246, 0.1) 0px, transparent 50%);
        }
      `}</style>

      <div className="font-vibrant bg-pattern min-h-screen text-gray-800 antialiased pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          
          {/* HERO SECTION */}
          <div className="relative mb-20">
            <div className="absolute top-0 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="animate-float mb-6">
                <img 
                  src={data.profileImage || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop"} 
                  alt={data.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl animate-pulse-glow"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 animate-fade-up">
                {data.name}
              </h1>
              <p className="text-xl md:text-2xl text-purple-600 font-medium mb-6 animate-fade-up-delay-1">
                {data.title}
              </p>
              <p className="text-gray-600 max-w-2xl text-lg leading-relaxed mb-8 animate-fade-up-delay-2">
                {data.summary}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-up-delay-2">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-white transition-all border border-white/50 shadow-sm">
                    ✉️ {data.email}
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-white transition-all border border-white/50 shadow-sm">
                    📞 {data.phone}
                  </a>
                )}
                {data.location && (
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/50 shadow-sm">
                    📍 {data.location}
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 animate-fade-up-delay-2">
                {data.links && Object.entries(data.links).map(([platform, url]) => (
                  url && (
                    <a 
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <img 
                        src={getSkillLogo(platform)} 
                        alt={platform} 
                        className="w-4 h-4 object-contain brightness-0 invert drop-shadow-md"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                        }}
                      />
                      <span className="capitalize">{platform}</span> 
                      <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Skills */}
              <div className="vibrant-card p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                  <span className="text-2xl">⚡</span> Skills
                </h2>
                
                <div className="space-y-6">
                  {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="text-sm font-bold text-pink-500 mb-3 tracking-wide uppercase">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <span key={i} className="chip-vibrant">
                            <img 
                              src={getSkillLogo(skill)} 
                              alt={skill} 
                              className="w-3.5 h-3.5 object-contain"
                              onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = "https://cdn-icons-png.flaticon.com/512/711/711280.png";
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
              
              {/* Languages */}
              {data.languages && data.languages.length > 0 && (
                <div className="vibrant-card p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                    <span className="text-2xl">🌍</span> Languages
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.languages.map((lang, i) => (
                      <span key={i} className="chip-vibrant bg-linear-to-r from-emerald-100 to-teal-100 text-teal-800 border-teal-200">
                        🗣 {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Certificates */}
              {data.certificates && data.certificates.length > 0 && (
                <div className="vibrant-card p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                    <span className="text-2xl">🏆</span> Certifications
                  </h2>
                  <div className="space-y-4">
                    {data.certificates.map((cert, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 hover:bg-pink-50 transition-colors border border-transparent hover:border-pink-100">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">🏆</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{cert.issuer} • {cert.date}</p>
                          {cert.link && (
                            <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs text-pink-500 font-medium hover:underline inline-flex items-center gap-1 mt-1.5">
                              Verify Credential <span>↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Experience */}
              {data.experience && data.experience.length > 0 && (
                <div className="vibrant-card p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <span className="text-3xl">💼</span> Experience
                  </h2>
                  <div className="space-y-8">
                    {data.experience.map((exp, i) => (
                      <div key={i} className="relative pl-8 group">
                        <div className="absolute left-0 top-2 w-4 h-4 bg-linear-to-br from-pink-400 to-purple-500 rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all">
                            {exp.role}
                          </h3>
                          <span className="text-sm font-medium bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full shadow-inner">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-purple-600 font-semibold mb-3">{exp.company}</p>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* ✅ FIX: Projects Grid (Separated from Education) */}
              {data.projects && data.projects.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-3xl">🚀</span> Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.projects.map((p, i) => (
                      <div key={i} className="vibrant-card p-6 hover:border-pink-300 group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                            {p.title}
                          </h3>
                          <span className="text-xs bg-gray-100 font-medium px-2 py-1 rounded-md text-gray-500 whitespace-nowrap ml-2 shadow-inner">
                            {p.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-5 grow">
                          {p.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {p.techStack?.map((tech, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-gray-200 px-2.5 py-1 rounded-full text-gray-700 shadow-sm">
                              <img 
                                src={getSkillLogo(tech)} 
                                alt={tech} 
                                className="w-3 h-3 object-contain"
                                onError={(e) => {
                                  e.target.onerror = null; 
                                  e.target.src = "https://cdn-icons-png.flaticon.com/512/711/711280.png";
                                }}
                              />
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {p.link && (
                          <div className="mt-auto pt-3 border-t border-gray-100">
                            <a href={p.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-pink-500 hover:text-purple-600 transition-colors inline-flex items-center gap-1 group/link">
                              View Project <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* ✅ FIX: Education Section */}
              {data.education && data.education.length > 0 && (
                <div className="space-y-6 pt-4">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-3xl">🎓</span> Education
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.education.map((ed, i) => (
                      <div key={i} className="vibrant-card p-6 hover:border-purple-300 transition-colors h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-pink-100 to-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-sm border border-white">
                            🎓
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 leading-tight mb-1">{ed.degree}</h3>
                            <p className="text-sm font-medium text-gray-500 mb-3">{ed.college}</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="text-xs font-medium bg-gray-100 px-2.5 py-1 rounded-md text-gray-600 shadow-inner">{ed.year}</span>
                              {ed.score && <span className="text-xs font-bold bg-purple-100 px-2.5 py-1 rounded-md text-purple-700 border border-purple-200">{ed.score}</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </div>
          
          {/* ✅ MISSING CONTACT FORM ADDED HERE */}
          <div className="mt-12">
            <div className="vibrant-card p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  Let's Connect
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  Have a project in mind or just want to say hi? Drop a message!
                </p>
                <ContactForm data={data} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default TemplateVibrant;