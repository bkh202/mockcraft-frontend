function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="sw-card p-6 rounded-sm">
      <h4 className="sw-pixel text-lg text-pink-400 mb-4 tracking-wider border-b border-pink-500/20 pb-2">
        // LANGUAGES
      </h4>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span key={i} className="sw-tag flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-semibold cursor-default">
            <span className="text-cyan-400">💬</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;