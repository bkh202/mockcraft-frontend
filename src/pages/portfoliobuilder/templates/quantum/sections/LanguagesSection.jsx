function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="qm-card p-6 rounded-xl">
      <div className="qm-mono text-xs qm-cyan/50 mb-4 pb-3 border-b border-cyan-500/10">
        {'/* languages */'}
      </div>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span key={i} className="qm-tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-default">
            <span className="qm-cyan">🌐</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;