function EducationSection({ data }) {
  return (
    <section id="education" className="reveal-item pt-10">
      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Education & Credentials</h3>

      {/* Education Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {data.education?.map((ed, i) => (
          <div key={i} className="glass-premium p-8 rounded-3xl text-center group float-card" style={{ animationDelay: `${i * 0.3}s` }}>
            <div className="w-16 h-16 mx-auto bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)] text-2xl">
              🎓
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{ed.degree}</h4>
            <p className="text-gray-400 mb-4">{ed.college}</p>
            <div className="flex justify-center items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500">
              <span>{ed.year}</span>
              <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
              <span className="text-indigo-400">Score: {ed.score}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates */}
      {data.certificates && data.certificates.length > 0 && (
        <div className="max-w-5xl mx-auto">
          <h4 className="text-xl font-bold text-center text-gray-400 mb-8 uppercase tracking-widest">Professional Certifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.certificates.map((cert, i) => (
              <div key={i} className="glass-premium p-6 rounded-3xl flex items-start gap-5 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                  <span className="text-xl">🏆</span>
                </div>
                <div className="grow z-10">
                  <h5 className="font-bold text-lg text-white mb-1 group-hover:text-indigo-300 transition-colors">{cert.name}</h5>
                  <p className="text-gray-400 text-sm mb-3 font-medium">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md">{cert.date || 'Certified'}</span>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-400 hover:text-white transition-colors flex items-center gap-1">
                        View Credential ↗
                      </a>
                    )}
                  </div>
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