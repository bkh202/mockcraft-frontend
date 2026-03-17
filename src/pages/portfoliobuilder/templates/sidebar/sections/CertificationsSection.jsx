function CertificationsSection({ certificates }) {
  if (!certificates?.length) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Certifications</h3>
      {certificates.map((cert, i) => (
        <div key={i} className="bg-slate-100 dark:bg-[#131b2f] p-6 rounded-2xl border-l-4 border-rose-400 flex items-center gap-4">
          <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-xl shadow-sm shrink-0">
            🏅
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">{cert.name}</h4>
            {cert.issuer && <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{cert.issuer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CertificationsSection;