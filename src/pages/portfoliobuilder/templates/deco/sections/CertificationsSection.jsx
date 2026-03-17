function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-28 relative">
      <div className="ad-num">VI</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Certificates</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
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
    </section>
  );
}

export default CertificationsSection;