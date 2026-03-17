function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="bt-card p-8 bg-[#0a0a0a]">
      <h4 className="bt-display text-4xl bt-white mb-4">CERTIFICATIONS</h4>
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
    </div>
  );
}

export default CertificationsSection;