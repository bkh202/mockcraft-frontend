function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="glass-premium p-6 rounded-3xl break-inside-avoid flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-300 mb-5 border-b border-white/10 pb-3 flex items-center gap-2">
        🗣️ Languages
      </h4>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang, i) => (
          <div
            key={i}
            className="px-4 py-2 bg-white/5 border border-white/10 skill-tag rounded-xl font-medium text-gray-300 cursor-default flex items-center gap-2 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
          >
            <span className="opacity-80">🌐</span>
            <span className="text-sm">{lang}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;