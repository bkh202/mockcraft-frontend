import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="nm-card p-8 md:p-12 relative overflow-hidden nm-reveal" style={{ animationDelay: '0.5s' }}>
      {/* Bottom gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.03) 0%, rgba(168,85,247,0.03) 100%)' }} />
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-[20px]"
        style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)' }} />

      <div className="relative text-center mb-10">
        <div className="nm-mono text-xs text-indigo-400 tracking-[0.2em] uppercase mb-3">Connect</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Let's work together
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-base font-light">
          Interested in collaborating or have a question? Feel free to reach out.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 relative">
        {data.email && (
          <a href={`mailto:${data.email}`}
            className="px-7 py-3 text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 text-sm"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              boxShadow: '0 4px 20px rgba(99,102,241,0.3)'
            }}>
            Say Hello 👋
          </a>
        )}
        {data.links?.linkedin && (
          <a href={data.links.linkedin} target="_blank" rel="noreferrer"
            className="nm-pill font-semibold px-6 py-3 text-sm">
            Connect on LinkedIn ↗
          </a>
        )}
      </div>

      {/* Form */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)' }}>
        <div className="p-4">
          <ContactForm data={data} />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;