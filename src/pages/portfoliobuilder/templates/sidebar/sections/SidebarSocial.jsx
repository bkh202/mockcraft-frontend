import { getSkillLogo } from "../../../components/categorizeSkills";

function SidebarSocial({ data }) {
  if (!data.links || Object.keys(data.links).length === 0) return null;

  return (
    <div className="pt-8 border-t border-slate-800">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Connect</h2>
      <div className="flex flex-wrap gap-3">
        {Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              title={platform}
            >
              <img
                src={getSkillLogo(platform)}
                alt={platform}
                className="w-4 h-4 object-contain brightness-0 invert"
                onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarSocial;