function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section id="Certifications" className="reveal-item pt-10">
      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">🏆 Certifications </h3>
      <div className="glass-premium p-6 rounded-3xl flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
        <div className="space-y-4">
          {certificates.map((cert, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                <span className="text-lg">🏆</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors">{cert.name}</h5>
                <p className="text-gray-400 text-xs mt-1">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs text-indigo-400 hover:text-white transition-colors inline-flex items-center gap-1 mt-1">
                    View Credential ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;