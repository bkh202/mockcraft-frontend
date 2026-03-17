function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="ad-card p-8">
      <h4 className="ad-sans text-xs tracking-[0.3em] ad-gold mb-6 pb-4 border-b border-yellow-700/20">
        CERTIFICATIONS
      </h4>
      <div className="space-y-4">
        {certificates.map((cert, i) => (
          <div key={i} className="flex items-start gap-4 border-b border-yellow-700/10 pb-4 last:border-0 last:pb-0">
            <div className="ad-diamond mt-1" style={{ width: '8px', height: '8px' }} />
            <div>
              <h5 className="ad-serif text-white font-bold">{cert.name}</h5>
              <p className="ad-sans text-xs ad-dim mt-1">{cert.issuer} — {cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="ad-sans text-xs ad-gold hover:underline mt-2 inline-block">
                  view credential ↗
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