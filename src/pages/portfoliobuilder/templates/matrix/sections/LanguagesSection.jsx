function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-20">
      <div className="mx-section-header mb-2">languages.list</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" style={{ animationDelay: "0.8s" }} />
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {languages.map((lang, i) => (
          <div key={i} className="mx-card p-4 rounded-sm flex items-center gap-2">
            <span className="mx-mono text-2xl mx-dim">🗣</span>
            <span className="mx-bright font-bold">{lang}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;