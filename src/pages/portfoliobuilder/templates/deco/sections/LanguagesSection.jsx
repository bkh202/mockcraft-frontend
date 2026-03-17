function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="ad-card p-8">
      <h4 className="ad-sans text-xs tracking-[0.3em] ad-gold mb-6 pb-4 border-b border-yellow-700/20">
        LANGUAGES
      </h4>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span key={i} className="ad-tag flex items-center gap-1.5 px-3 py-1.5 cursor-default">
            <span className="text-yellow-500">✦</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;