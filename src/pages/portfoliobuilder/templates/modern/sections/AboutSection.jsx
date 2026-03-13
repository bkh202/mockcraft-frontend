function AboutSection({ data }) {
  return (
    <section id="about" className="text-center relative pt-10 animate-fade-in-up">
      <div className="mb-10 relative inline-block">
        <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl"
        />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></span>
        <span className="text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300">Available for new opportunities</span>
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          {data.name}
        </span>
      </h1>

      <p className="text-xl md:text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient font-semibold max-w-3xl mx-auto mb-8">
        {data.title}
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300 mb-12">
        {data.location && <span className="px-4 py-2 glass-card rounded-full flex items-center gap-2">📍 {data.location}</span>}
        {data.email && <a href={`mailto:${data.email}`} className="px-4 py-2 glass-card rounded-full flex items-center gap-2 hover:text-indigo-500 transition-colors">✉️ {data.email}</a>}
        {data.phone && <a href={`tel:${data.phone}`} className="px-4 py-2 glass-card rounded-full flex items-center gap-2 hover:text-indigo-500 transition-colors">📞 {data.phone}</a>}
      </div>

      <div className="glass-card rounded-4xl p-10 md:p-14 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500 max-w-4xl mx-auto text-left">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-semibold mb-6">About Me</h2>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          {data.summary}
        </p>
      </div>
    </section>
  );
}

export default AboutSection;