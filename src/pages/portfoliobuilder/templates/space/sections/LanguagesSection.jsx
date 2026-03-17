function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 05</div>
        <h3 className="sp-section-title text-3xl">LINGUISTIC SYSTEMS</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map((lang, i) => (
          <div key={i} className="sp-card p-4 rounded-2xl flex items-center gap-3">
            <span className="text-blue-400 text-lg">🌐</span>
            <span className="sp-white font-bold">{lang}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;