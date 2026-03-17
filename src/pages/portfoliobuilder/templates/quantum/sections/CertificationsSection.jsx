function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="qm-card p-6 rounded-xl">
      <div className="qm-mono text-xs qm-cyan/50 mb-4 pb-3 border-b border-cyan-500/10">
        {'/* certifications */'}
      </div>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="border-b border-cyan-500/10 pb-3 last:border-0 last:pb-0">
            <div className="flex justify-between items-start">
              <span className="qm-mono text-sm font-bold qm-white">{cert.name}</span>
              <span className="qm-mono text-xs qm-dim">{cert.date}</span>
            </div>
            <p className="qm-mono text-xs qm-dim mt-1">{cert.issuer}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="qm-btn text-xs inline-block mt-2 px-3 py-1 rounded">
                verify ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection;