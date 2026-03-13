function AboutSection({ data }) {
  if (!data.summary) return null;

  return (
    <section className="relative" id="about">
      <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-6 flex items-center gap-4">
        <span className="w-8 h-px bg-teal-600 dark:bg-teal-400"></span> About Me
      </h2>
      <p className="text-xl md:text-3xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
        {data.summary}
      </p>
    </section>
  );
}

export default AboutSection;