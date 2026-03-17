function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// CERTIFICATIONS</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <div key={i} className="sw-card p-6 rounded-sm">
            <div className="flex justify-between items-start mb-2">
              <span className="sw-pixel text-white font-bold">{cert.name}</span>
              <span className="sw-pixel text-xs text-cyan-400">{cert.date}</span>
            </div>
            <p className="sw-pixel text-xs text-gray-400">{cert.issuer}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="sw-pixel text-xs text-pink-400 hover:text-pink-300 inline-block mt-3">
                [VERIFY]
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;