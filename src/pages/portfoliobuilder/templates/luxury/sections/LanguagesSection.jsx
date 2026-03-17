function LanguagesSection({ languages }) {
  if (!languages?.length) return null;

  return (
    <section className="py-28">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">LANGUAGES</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map((lang, i) => (
          <span key={i} className="lx-tag px-5 py-2 text-sm">
            <span className="text-yellow-500 mr-2">✦</span> {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default LanguagesSection;