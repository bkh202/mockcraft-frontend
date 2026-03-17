function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 06</div>
        <h3 className="sp-section-title text-3xl">CERTIFICATIONS</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <div key={i} className="sp-card p-6 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <span className="text-blue-400 text-lg">★</span>
            </div>
            <div>
              <h4 className="font-bold sp-white mb-1">{cert.name}</h4>
              <p className="text-xs sp-dim">{cert.issuer} · {cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs sp-blue hover:underline inline-block mt-2">
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