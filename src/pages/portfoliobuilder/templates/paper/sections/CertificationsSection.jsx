function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section id="certificates" className="py-24 relative">
        <div className="pp-section-num">06</div>
    <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Certifications</h3>
    <div className="pp-line-brown w-32 mb-12" />
    <div className="pp-card p-6 rounded-sm mt-6">
      <h4 className="pp-serif text-sm pp-brown font-semibold italic mb-4 pb-3 border-b border-black/5 flex items-center gap-2">
        <span className="text-lg">🏆</span> Certifications
      </h4>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-sm bg-white/50 hover:bg-white/80 transition-colors border border-black/5"
          >
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 border border-amber-200">
              <span className="text-sm">🏆</span>
            </div>
            <div className="flex-1">
              <h5 className="pp-serif font-bold text-sm pp-dark">{cert.name || cert.title || cert}</h5>
              {cert.issuer && (
                <p className="pp-sans text-xs pp-light mt-0.5">
                  {cert.issuer} {cert.date && `· ${cert.date}`}
                </p>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pp-sans text-xs pp-brown inline-flex items-center gap-1 mt-1.5 hover:underline"
                >
                  View Credential <span className="text-xs">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default CertificationsSection;