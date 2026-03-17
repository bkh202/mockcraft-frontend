function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-cyan">資格</h3>
        <span className="tn-display text-gray-600 text-xl">/ CERTIFICATIONS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {certificates.map((cert, i) => (
          <div key={i} className="tn-card p-6 rounded-sm">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h4 className="font-bold tn-white">{cert.name}</h4>
                <p className="tn-dim text-xs mt-1">{cert.issuer} · {cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="tn-code text-xs tn-cyan inline-block mt-2 hover:underline"
                  >
                    [VERIFY] ↗
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