function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="sp-card p-6 rounded-2xl">
      <h4 className="sp-display text-xs tracking-widest sp-blue mb-4 pb-3 border-b border-blue-500/10">
        LINGUISTIC SYSTEMS
      </h4>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span key={i} className="sp-tag flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs cursor-default">
            <span className="text-blue-400">🌐</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;