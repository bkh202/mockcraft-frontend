import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="animate-cinematic pb-32 pt-10" style={{ animationDelay: '1s' }}>
      <div className="spatial-card p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter relative z-10">
          Initiate <span className="holo-text">Connection</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 font-light">
          My communication channels are open. Whether you have a project in mind or just want to connect, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 relative z-10">
          {data.email && (
            <div className="spin-border-wrapper hover:scale-105 transition-transform cursor-pointer">
              <a href={`mailto:${data.email}`} className="spin-border-inner flex items-center gap-3 px-10 py-5 font-bold text-white uppercase tracking-wider text-sm">
                ✉️ Transmit Message
              </a>
            </div>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="spatial-card flex items-center justify-center gap-3 px-10 py-5 font-bold text-white uppercase tracking-wider text-sm hover:border-cyan-400/50 hover:text-cyan-300">
              📞 {data.phone}
            </a>
          )}
        </div>
      </div>
      <div className="glitch-card p-4">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;