function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">05 — LANGUAGES</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Languages Spoken</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {languages.map((lang, i) => (
          <div
            key={i}
            className="ar-card p-6 rounded-2xl text-center ar-float"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div
              className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}
            >
              <span style={{ fontSize: "22px" }}>🌐</span>
            </div>
            <h4 className="font-bold text-white">{lang}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;