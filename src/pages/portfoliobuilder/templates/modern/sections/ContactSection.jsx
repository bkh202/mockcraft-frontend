import ContactForm from "../../../components/ContactForm";
import { getSkillLogo } from "../../../components/categorizeSkills";

function ContactSection({ data }) {
  return (
    <section id="contact" className="py-24 animate-fade-in-up delay-500 text-center border-t border-gray-200/50 dark:border-gray-800/50 mt-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
        Let's create together.
      </h2>
      <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-16">
        {data.email && (
          <a
            href={`mailto:${data.email}`}
            className="group px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.6)] flex items-center gap-3"
          >
            <span className="text-xl">👋</span> Say Hello
          </a>
        )}

        {data.links && Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass-card text-gray-900 dark:text-white rounded-full font-semibold transition-all hover:-translate-y-1 flex items-center gap-3 capitalize"
            >
              <img
                src={getSkillLogo(platform)}
                alt={platform}
                className="w-5 h-5 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png";
                }}
              />
              {platform}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          )
        })}
      </div>

      <div className="glitch-card p-3 max-w-6xl mx-auto text-left">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;