function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div id="certificates">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
        <span className="text-2xl">🏆</span> Certifications
      </h2>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <div key={i} className="p-5 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all bg-white">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-900 text-base">{cert.name}</h3>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors p-1 -mt-1 -mr-1" title="View Credential">
                  ↗
                </a>
              )}
            </div>
            <div className="text-sm text-gray-500 mb-2">{cert.issuer}</div>
            {cert.date && <div className="text-xs text-gray-400 font-medium bg-gray-50 inline-block px-3 py-1 rounded-full">{cert.date}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection;