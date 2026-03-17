function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">06 — CERTIFICATIONS</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Professional Certifications</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="ar-card p-6 rounded-2xl ar-float text-left"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}
              >
                <span style={{ fontSize: "20px" }}>🏆</span>
              </div>
              <div>
                <h4 className="font-bold text-white">{cert.name}</h4>
                <p className="text-emerald-300/40 text-sm mt-1">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ar-mono text-xs ar-teal inline-block mt-2 hover:underline"
                  >
                    verify ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;