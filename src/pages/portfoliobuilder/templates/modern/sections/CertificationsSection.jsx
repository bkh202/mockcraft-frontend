function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div id="certificates">
      <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Professional Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex flex-col relative overflow-hidden group hover:border-purple-500/30 transition-all">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                <span className="text-xl">🎓</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{cert.name}</h4>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 grow">{cert.issuer}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{cert.date || 'Certified'}</span>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                  Verify ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsSection;