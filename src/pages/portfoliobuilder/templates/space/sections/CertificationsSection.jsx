function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="sp-card p-6 rounded-2xl">
      <h4 className="sp-display text-xs tracking-widest sp-blue mb-4 pb-3 border-b border-blue-500/10">
        CERTIFICATIONS
      </h4>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="flex items-start gap-3 border-b border-blue-500/10 pb-3 last:border-0 last:pb-0">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <span className="text-blue-400 text-sm">★</span>
            </div>
            <div>
              <h5 className="text-sm font-bold sp-white">{cert.name}</h5>
              <p className="text-xs sp-dim mt-1">{cert.issuer} · {cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs sp-blue hover:underline inline-block mt-2">
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