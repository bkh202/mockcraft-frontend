function AboutSection({ data }) {
  return (
    <section id="about" className="pt-10">
      <div className="glitch-card p-8 rounded-sm">
        <div className="flex items-center gap-2 border-b border-[#00ff41]/30 pb-4 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs opacity-70">root@{data?.name?.replace(/\s+/g, '').toLowerCase() || 'sysadmin'}:~</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 shrink-0 border border-[#00ff41] p-1 bg-[#00ff41]/10 relative group">
            <div className="absolute inset-0 bg-[#00ff41]/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
            <img
              src={data.profileImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop"}
              alt="Profile"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
            />
          </div>

          <div className="grow">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center flex-wrap">
              {">"} <span className="typewriter-text ml-2">{data.name}_</span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 opacity-90 text-white">{">"} {data.title}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm opacity-80 bg-[#00ff41]/5 p-4 border border-[#00ff41]/20">
              {data.location && <div><span className="text-white">SYS_LOC:</span> {data.location}</div>}
              {data.email && <div><span className="text-white">SYS_MAIL:</span> {data.email}</div>}
              {data.phone && <div><span className="text-white">SYS_COMM:</span> {data.phone}</div>}
              <div><span className="text-white">STATUS:</span> ONLINE <span className="w-2 h-2 inline-block bg-green-500 rounded-full animate-pulse"></span></div>
            </div>

            <p className="mt-8 text-sm md:text-base leading-relaxed opacity-80">
              <span className="text-white font-bold">cat bio.txt</span><br />
              {data.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;