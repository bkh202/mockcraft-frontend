function EducationSection({ data }) {
  return (
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
  );
}

export default EducationSection;