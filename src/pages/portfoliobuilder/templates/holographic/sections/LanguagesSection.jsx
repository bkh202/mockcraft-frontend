function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <>
      <h3 className="text-center text-sm font-bold text-cyan-400 tracking-[0.3em] uppercase mb-8 mt-16">
        Linguistics
      </h3>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {languages.map((lang, i) => (
          <div
            key={i}
            className="spatial-card px-8 py-4 flex items-center gap-3 text-gray-300 font-bold tracking-wide hover:text-white hover:border-purple-400/50 transition-all cursor-crosshair"
          >
            <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">🌐</span>
            {lang}
          </div>
        ))}
      </div>
    </>
  );
}

export default LanguagesSection;