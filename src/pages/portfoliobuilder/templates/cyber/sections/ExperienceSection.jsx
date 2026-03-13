function ExperienceSection({ data }) {
  return (
    <section id="experience" className="pt-10">
      <h2 className="text-2xl font-bold mb-6">{">"} cat experience.log<span className="blinking-cursor"></span></h2>
      <div className="space-y-6">
        {data.experience.map((e, i) => (
          <div key={i} className="border-l-2 border-[#00ff41]/50 pl-6 py-2 relative hover:bg-[#00ff41]/5 transition-colors p-4">
            <div className="absolute -left-2.25 top-6 w-4 h-4 bg-[#050505] border-2 border-[#00ff41] shadow-[0_0_10px_#00ff41]"></div>
            <div className="text-xs opacity-50 mb-2 font-bold text-white">[{e.duration}]</div>
            <h3 className="text-xl font-bold text-white mb-1">{e.role} <span className="opacity-50 mx-2">@</span> <span className="text-[#00ff41]">{e.company}</span></h3>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;