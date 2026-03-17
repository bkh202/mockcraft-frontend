function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col break-inside-avoid hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-white/5">
      <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700/50 pb-3 flex items-center gap-2">
        🗣️ Languages
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {languages.map((lang, i) => (
          <div
            key={i}
            className="px-3 py-1.5 bg-white/40 dark:bg-black/20 border border-gray-200/50 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/20 hover:border-purple-400/50 transition-colors cursor-default flex items-center gap-2"
          >
            🌐 {lang}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;