function SidebarProfile({ data }) {
  return (
    <div className="text-center md:text-left">
      <div className="inline-block relative mb-6 group">
        <div className="absolute -inset-1.5 bg-linear-to-tr from-teal-400 to-rose-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
        {data.profileImage ? (
          <img
            src={data.profileImage}
            alt="Profile"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#0f172a]"
          />
        ) : (
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-4 border-[#0f172a] flex items-center justify-center text-4xl font-black text-slate-400">
            {data.name?.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
        {data.name}
      </h1>
      <p className="text-lg font-medium text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-teal-200 mb-6">
        {data.title}
      </p>

      <div className="space-y-3 text-sm font-medium text-slate-400">
        {data.email && (
          <a href={`mailto:${data.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
            <span className="text-teal-400">✉</span> {data.email}
          </a>
        )}
        {data.phone && (
          <div className="flex items-center gap-3">
            <span className="text-teal-400">📞</span> {data.phone}
          </div>
        )}
        {data.location && (
          <div className="flex items-center gap-3">
            <span className="text-teal-400">📍</span> {data.location}
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarProfile;