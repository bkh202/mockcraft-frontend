import { getSkillLogo } from "../../../components/categorizeSkills";

function AboutSection({ data }) {
  return (
    <section id="about" className="mb-14 pt-4">
      <div className="relative inline-block mb-5 group">
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl ring-1 ring-black/5"
        />
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2 tracking-tight text-gray-900">
        {data.name}
      </h1>
      <p className="text-xl text-gray-500 font-medium mb-4">{data.title}</p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-7">
        {data.location && <span className="flex items-center gap-1.5">📍 <span className="border-b border-dotted border-gray-300">{data.location}</span></span>}
        {data.email && <a href={`mailto:${data.email}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-400 group">✉️ <span className="group-hover:text-gray-900">{data.email}</span></a>}
        {data.phone && <a href={`tel:${data.phone}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-400 group">📞 <span className="group-hover:text-gray-900">{data.phone}</span></a>}
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {data.links && Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-sm font-medium transition-all border border-gray-200/80 capitalize text-gray-700 hover:shadow-sm"
            >
              <img
                src={getSkillLogo(platform)}
                alt={platform}
                className="w-4 h-4 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                }}
              />
              {platform}
              <span className="text-gray-400 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          )
        })}
      </div>

      <div className="notion-callout text-base leading-relaxed text-[#2e2e2e]">
        <span className="text-2xl leading-none">💡</span>
        <div className="[&>p]:mt-0 [&>p]:mb-2">{data.summary}</div>
      </div>
    </section>
  );
}

export default AboutSection;