function CertificatesSection({ data }) {
  if (!data.certificates?.length) return null;

  return (
    <div className="vibrant-card p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
        <span className="text-2xl">🏆</span> Certifications
      </h2>
      <div className="space-y-4">
        {data.certificates.map((cert, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 hover:bg-pink-50 transition-colors border border-transparent hover:border-pink-100">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">🏆</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{cert.issuer} • {cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs text-pink-500 font-medium hover:underline inline-flex items-center gap-1 mt-1.5">
                  Verify Credential <span>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatesSection;