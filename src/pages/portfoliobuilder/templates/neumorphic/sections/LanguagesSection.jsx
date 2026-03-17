function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <div className="stripe-card p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
        <div className="w-1.5 h-7 bg-teal-500 rounded-full"></div> Languages
      </h3>
      <div className="gradient-line mb-6 opacity-60"></div>
      <div className="flex flex-wrap gap-2.5">
        {languages.map((lang, i) => (
          <span key={i} className="skill-tag inline-flex items-center gap-1.5 hover:shadow-md transition-shadow">
            <span className="text-gray-400 opacity-70">🌐</span>
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LanguagesSection;