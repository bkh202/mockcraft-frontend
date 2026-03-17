function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="sw-card p-6 rounded-sm">
      <h4 className="sw-pixel text-lg text-pink-400 mb-4 tracking-wider border-b border-pink-500/20 pb-2">
        // CERTIFICATIONS
      </h4>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="border-b border-pink-500/10 pb-3 last:border-0 last:pb-0">
            <div className="flex justify-between items-start">
              <span className="sw-pixel text-white font-bold">{cert.name}</span>
              <span className="sw-pixel text-xs text-cyan-400">{cert.date}</span>
            </div>
            <p className="sw-pixel text-xs text-gray-400 mt-1">{cert.issuer}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="sw-pixel text-xs text-pink-400 hover:text-pink-300 inline-block mt-2">
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