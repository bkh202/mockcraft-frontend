import ContactForm from "../../../components/ContactForm";
import { getSkillLogo } from "../../../components/categorizeSkills";

function ContactSection({ data }) {
  return (
    <section id="contact" className="pt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#00ff41]">
        {">"} ./connect.sh --all-ports<span className="blinking-cursor"></span>
      </h2>
      <div className="flex flex-wrap gap-4 pb-10">
        {data.email && (
          <a href={`mailto:${data.email}`} className="group glitch-card px-6 py-4 hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-sm uppercase flex items-center gap-3">
            <span className="text-lg opacity-80 group-hover:text-black transition-colors">✉️</span>
            [MAIL_PROTOCOL]
          </a>
        )}
        
        {data.phone && (
          <a href={`tel:${data.phone}`} className="group glitch-card px-6 py-4 hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-sm uppercase flex items-center gap-3">
            <span className="text-lg opacity-80 group-hover:text-black transition-colors">📞</span>
            [VOICE_LINK]
          </a>
        )}

        {data.links && Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group glitch-card px-6 py-4 hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-bold text-sm uppercase flex items-center gap-3"
            >
              <img
                src={getSkillLogo(platform)}
                alt={platform}
                className="w-5 h-5 object-contain opacity-80 drop-shadow-[0_0_5px_rgba(0,255,65,0.8)] group-hover:brightness-0 transition-all"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                }}
              />
              [{platform}]
            </a>
          )
        })}
      </div>

      <div className="glitch-card p-3 border border-[#00ff41]/30">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;