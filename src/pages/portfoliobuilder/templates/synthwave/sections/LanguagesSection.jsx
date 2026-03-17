function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// LANGUAGES</div>
      <div className="flex flex-wrap justify-center gap-3">
        {languages.map((lang, i) => (
          <span key={i} className="sw-tag flex items-center gap-1.5 px-4 py-2 rounded-sm text-sm font-semibold cursor-default">
            <span className="text-cyan-400">💬</span> {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;