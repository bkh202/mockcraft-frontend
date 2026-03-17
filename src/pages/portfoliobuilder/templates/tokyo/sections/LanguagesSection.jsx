function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-24">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-yellow">言語</h3>
        <span className="tn-display text-gray-600 text-xl">/ LANGUAGES</span>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {languages.map((lang, i) => (
          <span
            key={i}
            className="tn-tag flex items-center gap-2 px-4 py-2 text-sm cursor-default"
          >
            <span className="text-cyan-400">💬</span>
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;