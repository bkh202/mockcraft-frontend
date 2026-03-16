function CertificatesSection({ data }) {
  if (!data.certificates?.length) return null;

  return (
    <div className="vb-card p-7 vb-reveal" style={{ animationDelay: '0.2s' }}>
      <div className="vb-label mb-1">Credentials</div>
      <h2 className="text-lg font-bold text-gray-900 mb-5 pb-4 border-b border-pink-100/60">
        🏆 Certifications
      </h2>
      <div className="space-y-3">
        {data.certificates.map((cert, i) => (
          <div key={i}
            className="group flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-pink-50/60 to-purple-50/60 hover:from-pink-50 hover:to-purple-50 border border-transparent hover:border-pink-100 transition-all">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm"
              style={{ background: 'linear-gradient(135deg, #fce7f3, #f3e8ff)', boxShadow: '0 2px 8px rgba(236,72,153,0.12)' }}>
              🏆
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-pink-600 transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer"
                  className="text-xs font-semibold text-pink-500 hover:text-purple-600 inline-flex items-center gap-1 mt-1.5 transition-colors">
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

export default CertificatesSection;