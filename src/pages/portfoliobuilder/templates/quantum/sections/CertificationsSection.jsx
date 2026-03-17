function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-24">
      <div className="qm-section-label mb-2">module.certifications</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" style={{ animationDelay: "1.0s" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, i) => (
          <div key={i} className="qm-card p-6 rounded-xl">
            <div className="flex justify-between items-start mb-3">
              <h4 className="qm-mono font-bold qm-white">{cert.name}</h4>
              <span className="qm-mono text-xs qm-dim">{cert.date}</span>
            </div>
            <p className="qm-mono text-xs qm-dim mb-3">{cert.issuer}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="qm-btn text-xs inline-block px-3 py-1 rounded"
              >
                verify ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;