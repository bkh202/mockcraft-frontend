import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <section id="about" className="stripe-card p-8 md:p-12 relative overflow-hidden animate-reveal">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-linear-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row gap-10 items-center">
        <div className="shrink-0">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <img
              src={data.profileImage || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80"}
              alt="Profile"
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-white shadow-xl"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 border-4 border-white rounded-full animate-bounce"></div>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-3">
            {data.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-6 text-lg">
            {data.summary}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
            {data.email && (
              <a href={`mailto:${data.email}`} className="contact-icon" title={data.email}>
                <span className="text-lg">✉️</span>
              </a>
            )}
            {data.phone && (
              <a href={`tel:${data.phone}`} className="contact-icon" title={data.phone}>
                <span className="text-lg">📞</span>
              </a>
            )}
            {data.location && (
              <span className="contact-icon" title={data.location}>
                <span className="text-lg">📍</span>
              </span>
            )}

            <div className="w-px h-6 bg-gray-300 mx-2 hidden sm:block"></div>

            {data.links && Object.entries(data.links).map(([platform, url]) => (
              url && (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 transition-all shadow-sm flex items-center gap-2 capitalize"
                >
                  <img
                    src={getSkillLogo(platform)}
                    alt={platform}
                    className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                    }}
                  />
                  <span>{platform}</span>
                  <span className="text-xs text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;