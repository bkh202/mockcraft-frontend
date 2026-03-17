function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section id="education" className="pt-10">
      <h2 className="text-2xl font-bold mb-6">{">"} cat certificates.log</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <div key={i} className="glitch-card p-5 border border-dashed border-[#00ff41]/50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white truncate pr-4">{cert.name}</h3>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs bg-[#00ff41]/20 border border-[#00ff41] px-2 py-1 hover:bg-[#00ff41] hover:text-black transition-colors shrink-0">
                  [VERIFY]
                </a>
              )}
            </div>
            <p className="text-sm opacity-70 mb-2">ISSUER: {cert.issuer}</p>
            <p className="text-xs font-bold text-[#00ff41] opacity-50">DATE: {cert.date || 'VALID'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;