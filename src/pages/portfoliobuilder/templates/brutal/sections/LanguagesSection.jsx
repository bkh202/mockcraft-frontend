function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-24 relative">
      <div className="bt-section-num">05</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px', animationDelay: '0.9s' }} />
        <h3 className="bt-display text-5xl bt-white">LANGUAGES</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang, i) => (
          <span key={i} className="bt-tag px-4 py-2 flex items-center gap-2">
            <span className="text-orange-500">🗣</span>
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;