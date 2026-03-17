function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="pt-6 border-t border-green-500/20">
      <h2 className="text-2xl font-bold mb-6 text-green-400">
        {">"} ./view_languages.sh
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {languages.map((lang, i) => (
          <div key={i} className="glitch-card p-3 flex items-center justify-center gap-2 cursor-crosshair border-dashed group">
            <span className="opacity-50 group-hover:opacity-100 transition-opacity">🌐</span>
            <span className="opacity-70 group-hover:opacity-100 group-hover:text-white transition-colors text-sm font-medium">
              CMD_LANG: {lang}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;