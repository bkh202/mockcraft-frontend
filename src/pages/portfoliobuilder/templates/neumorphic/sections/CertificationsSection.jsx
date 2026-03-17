function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <section id="certificates" className="stripe-card p-8 animate-reveal" style={{ animationDelay: "0.4s" }}>
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-7 bg-amber-500 rounded-full"></div> Certifications
      </h3>
      <div className="gradient-line bg-linear-to-r from-amber-400 to-orange-500"></div>
      <div className="space-y-4">
        {certificates.map((cert, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 mt-0.5 border border-amber-100">🏆</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">
                {cert.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs text-indigo-500 font-medium inline-flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  View credential <span>↗</span>
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