import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <div className="relative mb-20">
      <div className="absolute top-0 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative flex flex-col items-center text-center">
        <div className="animate-float mb-6">
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop"}
            alt={data.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl animate-pulse-glow"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 animate-fade-up">
          {data.name}
        </h1>
        <p className="text-xl md:text-2xl text-purple-600 font-medium mb-6 animate-fade-up-delay-1">
          {data.title}
        </p>
        <p className="text-gray-600 max-w-2xl text-lg leading-relaxed mb-8 animate-fade-up-delay-2">
          {data.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-up-delay-2">
          {data.email && (
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-white transition-all border border-white/50 shadow-sm">
              ✉️ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-white transition-all border border-white/50 shadow-sm">
              📞 {data.phone}
            </a>
          )}
          {data.location && (
            <span className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/50 shadow-sm">
              📍 {data.location}
            </span>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-3 animate-fade-up-delay-2">
          {data.links && Object.entries(data.links).map(([platform, url]) => (
            url && (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 group"
              >
                <img
                  src={getSkillLogo(platform)}
                  alt={platform}
                  className="w-4 h-4 object-contain brightness-0 invert drop-shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                  }}
                />
                <span className="capitalize">{platform}</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;