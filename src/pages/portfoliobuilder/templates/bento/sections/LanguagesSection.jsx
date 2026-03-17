function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
     <section id="Certifications" className="reveal-item pt-10">
      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">🗣️ Languages </h3>
    <div className="glass-premium p-6 rounded-3xl break-inside-avoid flex flex-col shadow-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
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
    </section>
  );
}

export default LanguagesSection;