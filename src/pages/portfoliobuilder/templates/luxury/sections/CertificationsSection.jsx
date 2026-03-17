function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-28">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">CERTIFICATIONS</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <div key={i} className="lx-card p-8 flex items-start gap-4">
            <div className="lx-ornament mt-1 shrink-0" />
            <div>
              <h4 className="lx-serif text-white font-bold text-lg">{cert.name}</h4>
              <p className="lx-sans text-xs text-yellow-600/50 mt-1">
                {cert.issuer} — {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="lx-serif text-xs text-yellow-500 hover:text-yellow-300 mt-3 inline-block"
                >
                  View Credential ↗
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