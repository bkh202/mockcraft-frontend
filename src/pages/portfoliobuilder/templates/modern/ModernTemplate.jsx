import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { categorizeSkills, getSkillLogo } from "../../components/categorizeSkills";// Path apne folder structure ke hisab se set kar lena

function ModernTemplate({ data }) {
  return (
    <Layout>
      <style>{`
        :root {
          --glass-border: rgba(255, 255, 255, 0.1);
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
        
        .pulse-dot {
          animation: pulseDot 2s infinite;
        }

        /* Subtle grid background */
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* Delay Utilities */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        /* Premium Glass Card */
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
        }
      `}</style>

      {/* Main Container with Grid Pattern */}
      <div className="relative min-h-screen bg-gray-50 dark:bg-[#0a0a0a] bg-grid-pattern text-gray-900 dark:text-gray-100 overflow-hidden font-sans">

        {/* Ambient Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">

          {/* ✅ HERO SECTION (Profile Image & Contact Info Added) */}
          <section id="about" className="text-center relative pt-10 animate-fade-in-up">
            <div className="mb-10 relative inline-block">
              <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
                alt="Profile"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></span>
              <span className="text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300">Available for new opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                {data.name}
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient font-semibold max-w-3xl mx-auto mb-8">
              {data.title}
            </p>

            {/* Premium Contact Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300 mb-12">
              {data.location && <span className="px-4 py-2 glass-card rounded-full flex items-center gap-2">📍 {data.location}</span>}
              {data.email && <a href={`mailto:${data.email}`} className="px-4 py-2 glass-card rounded-full flex items-center gap-2 hover:text-indigo-500 transition-colors">✉️ {data.email}</a>}
              {data.phone && <a href={`tel:${data.phone}`} className="px-4 py-2 glass-card rounded-full flex items-center gap-2 hover:text-indigo-500 transition-colors">📞 {data.phone}</a>}
            </div>

            <div className="glass-card rounded-4xl p-10 md:p-14 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500 max-w-4xl mx-auto text-left">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-semibold mb-6">About Me</h2>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {data.summary}
              </p>
            </div>
          </section>

          {/* ✅ SKILLS & LANGUAGES SECTION (Grid Card Layout) */}
          <section id="skills" className="animate-fade-in-up delay-100">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Tools, technologies, and languages I work with</p>
              </div>
            </div>

            {/* Unified Grid for all skill categories AND languages */}
            {/* Unified MASONRY Grid for all skill categories AND languages */}
            {/* ✅ 'grid' hata kar 'columns' use kiya hai */}
            <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

              {/* SKILLS CARDS */}
              {Object.entries(categorizeSkills(data.skills)).map(([category, skills]) => (
                <div
                  key={category}
                  // ✅ break-inside-avoid lagana zaroori hai taaki card beech se na kate
                  className="glass-card p-6 rounded-2xl flex flex-col break-inside-avoid hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-white/5"
                >
                  {/* Category Name */}
                  <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700/50 pb-3 flex items-center">
                    {category}
                  </h3>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 bg-white/40 dark:bg-black/20 border border-gray-200/50 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/20 hover:border-indigo-400/50 transition-colors cursor-default flex items-center gap-2"
                      >
                        <img
                          src={getSkillLogo(skill)}
                          alt={skill}
                          className="w-4 h-4 object-contain drop-shadow-sm"
                          onError={(e) => {
                            e.target.onerror = null;
                            // Naya fallback icon jo dark mode me accha lage
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                          }}
                        />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* LANGUAGES CARD */}
              {data.languages && data.languages.length > 0 && (
                <div className="glass-card p-6 rounded-2xl flex flex-col break-inside-avoid hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-white/5">
                  <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700/50 pb-3 flex items-center gap-2">
                    🗣️ Languages
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {data.languages.map((lang, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 bg-white/40 dark:bg-black/20 border border-gray-200/50 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/20 hover:border-purple-400/50 transition-colors cursor-default flex items-center gap-2"
                      >
                        🌐 {lang}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          {data.experience && data.experience.length > 0 && (
            <section id="experience" className="animate-fade-in-up delay-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Experience</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
                {data.experience.map((e, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col mb-2">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{e.company}</span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{e.role}</h3>
                      </div>
                      <time className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 block">{e.duration}</time>
                      <p className="text-gray-600 dark:text-gray-300/80 leading-relaxed text-sm md:text-base">
                        {e.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ✅ PROJECTS SECTION (With Tech Stack Logos & Live Links) */}
          <section id="projects" className="animate-fade-in-up delay-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects?.map((p, i) => (
                <div
                  key={i}
                  className="group relative glass-card rounded-3xl p-8 flex flex-col h-full overflow-hidden hover:border-indigo-500/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-xs font-mono px-3 py-1 glass-card rounded-full text-gray-500">
                        {p.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300/80 mb-8 grow">
                      {p.description}
                    </p>

                    {/* ✅ TECH STACK WITH LOGOS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.techStack?.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium backdrop-blur-md border border-gray-300/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-colors"
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

                    {/* Project Link */}
                    {p.link && (
                      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all text-sm">
                          View Live Project
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ✅ EDUCATION & CERTIFICATES */}
          <section id="education" className="animate-fade-in-up delay-400">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Education & Credentials</h2>

            {/* Education Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {data.education?.map((e, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start group hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                      {e.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">{e.college}</p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-3 text-right text-sm">
                    <span className="px-3 py-1 bg-gray-200/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-full font-mono">{e.year}</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full font-bold">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates Grid */}
            {data.certificates && data.certificates.length > 0 && (
              <div id="certificates">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Professional Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.certificates.map((cert, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl flex flex-col relative overflow-hidden group hover:border-purple-500/30 transition-all">
                      <div className="absolute -right-6 -top-6 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                          <span className="text-xl">🎓</span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{cert.name}</h4>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 grow">{cert.issuer}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{cert.date || 'Certified'}</span>
                        {cert.link && (
                          <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                            Verify ↗
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ✅ CONTACT SECTION (Dynamic Links) */}
          <section id="contact" className="py-24 animate-fade-in-up delay-500 text-center border-t border-gray-200/50 dark:border-gray-800/50 mt-32 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              Let's create together.
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10 mb-16">
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="group px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.6)] flex items-center gap-3"
                >
                  <span className="text-xl">👋</span> Say Hello
                </a>
              )}

              {/* ✅ ADDED LOGOS TO SOCIAL LINKS */}
              {data.links && Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 glass-card text-gray-900 dark:text-white rounded-full font-semibold transition-all hover:-translate-y-1 flex items-center gap-3 capitalize"
                  >
                    {/* Platform Logo using getSkillLogo */}
                    <img
                      src={getSkillLogo(platform)}
                      alt={platform}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        // Fallback icon for platforms not in Devicon (like Instagram)
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; // Link Icon
                      }}
                    />

                    {platform}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                )
              })}
            </div>

            <div className="glitch-card p-3 max-w-6xl mx-auto text-left">
              <ContactForm data={data} />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

export default ModernTemplate;