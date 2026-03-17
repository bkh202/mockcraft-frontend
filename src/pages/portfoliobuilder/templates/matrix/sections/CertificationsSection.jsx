function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-20">
      <div className="mx-section-header mb-2">certifications.list</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" style={{ animationDelay: "1.0s" }} />
      </div>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="mx-card p-5 rounded-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold mx-bright">{cert.name}</h4>
                <p className="mx-dim text-xs mt-1">{cert.issuer}</p>
              </div>
              <span className="mx-mono text-xs mx-dim">{cert.date}</span>
            </div>
            {cert.link && (
              <div className="mt-2">
                <a href={cert.link} target="_blank" rel="noreferrer" className="mx-btn text-xs px-3 py-1 inline-block">
                  [VERIFY]
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;