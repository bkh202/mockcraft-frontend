function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="lx-card p-8">
      <h4 className="lx-display text-sm tracking-widest text-yellow-600/70 mb-6 pb-4 border-b border-yellow-600/10">
        CERTIFICATIONS
      </h4>
      <div className="space-y-4">
        {certificates.map((cert, i) => (
          <div key={i} className="flex items-start gap-4 border-b border-yellow-600/10 pb-4 last:border-0 last:pb-0">
            <div className="lx-ornament mt-1" />
            <div>
              <h5 className="lx-serif text-white font-bold">{cert.name}</h5>
              <p className="lx-sans text-xs text-yellow-600/50 mt-1">{cert.issuer} — {cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="lx-serif text-xs text-yellow-500 hover:text-yellow-300 mt-2 inline-block">
                  View Credential ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection;