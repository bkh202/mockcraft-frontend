function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="bt-card p-8 bg-[#0a0a0a]">
      <h4 className="bt-display text-4xl bt-white mb-4">LANGUAGES</h4>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang, i) => (
          <span key={i} className="bt-tag px-4 py-2 flex items-center gap-2">
            <span className="text-orange-500">🗣</span>
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;