function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-28 relative">
      <div className="ad-num">V</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Languages</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {languages.map((lang, i) => (
          <span key={i} className="ad-tag flex items-center gap-1.5 px-4 py-2 cursor-default">
            <span className="text-yellow-500">✦</span> {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;