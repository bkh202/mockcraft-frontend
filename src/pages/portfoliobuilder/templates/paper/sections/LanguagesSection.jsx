function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section  className="py-24 relative">
        <div className="pp-section-num">05</div>
        <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Langauges</h3>
        <div className="pp-line-brown w-32 mb-12" />
    <div className="pp-card p-6 rounded-sm mt-6">
      <h4 className="pp-serif text-sm pp-brown font-semibold italic mb-4 pb-3 border-b border-black/5 flex items-center gap-2">
        <span className="text-lg">🌐</span> Languages
      </h4>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang, i) => (
          <span
            key={i}
            className="pp-tag flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs cursor-default pp-sans"
          >
            <span className="text-gray-500">🗣</span> {lang}
          </span>
        ))}
      </div>
    </div>
    </section>
  );
}

export default LanguagesSection;