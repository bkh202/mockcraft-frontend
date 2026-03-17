function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="vibrant-card p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
        <span className="text-2xl">🌍</span> Languages
      </h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span key={i} className="chip-vibrant bg-linear-to-r from-emerald-100 to-teal-100 text-teal-800 border-teal-200">
            🗣 {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;