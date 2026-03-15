function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="flex flex-col md:flex-row gap-8 items-start mx-reveal" style={{ animationDelay: "2s" }}>
        <div className="mx-card p-2 rounded-sm shrink-0">
          <img
            src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"}
            alt="Profile"
            className="w-40 h-40 object-cover"
            style={{ filter: "saturate(0) sepia(100%) hue-rotate(80deg) brightness(0.8) contrast(1.2)" }}
          />
        </div>
        <div>
          <div className="mx-dim text-sm mb-2">identity.profile</div>
          <h1 className="text-5xl md:text-6xl font-bold mx-title mb-2">{data.name}</h1>
          <h2 className="mx-code text-green-500 text-xl mb-4">{data.title}</h2>
          <p className="text-green-700 leading-relaxed max-w-xl">{data.summary}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {data.links &&
              Object.entries(data.links).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a key={platform} href={url} target="_blank" rel="noreferrer" className="mx-btn px-4 py-2 text-sm rounded-sm capitalize">
                    [{platform} ↗]
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;