function EducationSection({ data }) {
  return (
    <section id="education" className="animate-cinematic pb-20 pt-10" style={{ animationDelay: '0.8s' }}>
      <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">Education & Credentials</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {data.education?.map((ed, i) => (
          <div key={i} className="spatial-card p-8 flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-gray-800 to-gray-900 border-2 border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-purple-500 transition-colors">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">{ed.degree}</h4>
              <p className="text-gray-400 text-sm mb-3">{ed.college}</p>
              <div className="flex gap-4 text-xs font-bold tracking-widest uppercase text-gray-500">
                <span>{ed.year}</span>
                <span className="text-cyan-400">Score: {ed.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.certificates && data.certificates.length > 0 && (
        <div>
          <h4 className="text-center text-sm font-bold text-purple-400 tracking-[0.3em] uppercase mb-10">Verified Certifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.certificates.map((cert, i) => (
              <div key={i} className="spatial-card p-6 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
                <div className="flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-cyan-400/50">
                    <span className="text-lg">🏆</span>
                  </div>
                  <div className="grow">
                    <h5 className="font-bold text-lg text-white mb-1">{cert.name}</h5>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 z-10 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{cert.date || 'Certified'}</span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-cyan-400 hover:text-white uppercase tracking-wider transition-colors">
                      View Credential ↗
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