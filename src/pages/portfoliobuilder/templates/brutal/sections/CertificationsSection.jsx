function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-24 relative">
      <div className="bt-section-num">06</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px', animationDelay: '0.9s' }} />
        <h3 className="bt-display text-5xl bt-white">CERTIFICATIONS</h3>
      </div>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="border-b border-[#1e1e1e] pb-3 last:border-0 last:pb-0 flex items-start gap-3">
            <span className="bt-accent text-xl">▶</span>
            <div>
              <h5 className="font-bold text-white">{cert.name}</h5>
              <p className="bt-mono text-xs bt-dim mt-1">{cert.issuer} — {cert.date || 'N/A'}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="bt-mono text-xs text-orange-500 hover:underline inline-block mt-1">
                  verify →
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