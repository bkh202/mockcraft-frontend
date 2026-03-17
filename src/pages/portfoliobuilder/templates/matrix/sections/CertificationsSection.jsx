function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="mx-card p-6 rounded-sm">
      <div className="mx-dim text-xs mb-3">// certifications</div>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="border-b border-green-500/10 pb-3 last:border-0 last:pb-0">
            <div className="flex justify-between">
              <span className="mx-bright text-sm font-bold">{cert.name}</span>
              <span className="mx-dim text-xs">{cert.date}</span>
            </div>
            <p className="mx-dim text-xs mt-1">{cert.issuer}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="mx-btn text-xs inline-block mt-2 px-2 py-1">
                [VERIFY]
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection;