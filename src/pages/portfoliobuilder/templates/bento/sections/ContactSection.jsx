import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="pb-32 pt-10 reveal-item">
      <div className="glass-premium rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden border-t border-indigo-500/30">
        <div className="absolute inset-0 bg-linear-to-t from-indigo-500/10 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
          Let's build something <span className="text-indigo-400 block sm:inline">incredible.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 relative z-10">
          {data.email && (
            <a href={`mailto:${data.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              <span>✉️</span> Say Hello
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-lg transition-all hover:scale-105">
              <span>📞</span> {data.phone}
            </a>
          )}
        </div>

        {data.location && (
          <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 font-medium">
            <span>📍</span> Based in {data.location}
          </div>
        )}
      </div>

      <div className="glitch-card p-3">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;