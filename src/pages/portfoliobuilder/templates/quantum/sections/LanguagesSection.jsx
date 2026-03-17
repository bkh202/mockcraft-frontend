function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-24">
      <div className="qm-section-label mb-2">module.languages</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" style={{ animationDelay: "0.8s" }} />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {languages.map((lang, i) => (
          <div key={i} className="qm-card p-4 rounded-xl flex items-center gap-3">
            <span className="qm-cyan text-lg">🌐</span>
            <span className="qm-white font-bold">{lang}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;