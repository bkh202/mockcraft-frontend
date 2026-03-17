function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="break-inside-avoid bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-base font-bold mb-4 text-gray-800 flex items-center gap-2">
        🌍 Languages
      </h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 font-medium text-sm rounded-full border border-gray-200/80 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-default shadow-sm"
          >
            <span className="text-gray-400 text-sm">🗣</span> {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;