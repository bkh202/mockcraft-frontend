function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="lx-card p-8">
      <h4 className="lx-display text-sm tracking-widest text-yellow-600/70 mb-6 pb-4 border-b border-yellow-600/10">
        LANGUAGES
      </h4>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang, i) => (
          <span key={i} className="lx-tag px-4 py-2 text-xs">
            <span className="text-yellow-500 mr-1">✦</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;