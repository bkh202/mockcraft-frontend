import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="mt-10 vb-reveal" style={{ animationDelay: '0.4s' }}>
      <div className="vb-card p-8 md:p-12 relative overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #6366f1, #06b6d4)' }} />

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(236,72,153,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

        <div className="relative text-center mb-10">
          <div className="vb-label mb-2">Connect</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Let's work together ✨
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base font-light">
            Have a project in mind or just want to say hi? I'm always open to new opportunities.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 relative">
          {data.email && (
            <a href={`mailto:${data.email}`} className="vb-pill text-sm">
              👋 Say Hello
            </a>
          )}
          {data.links?.linkedin && (
            <a href={data.links.linkedin} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-white border border-gray-200 text-gray-700 hover:border-pink-200 hover:text-pink-600 hover:shadow-md transition-all hover:-translate-y-0.5">
              LinkedIn ↗
            </a>
          )}
        </div>

        {/* Form */}
        <div className="relative rounded-2xl overflow-hidden p-1"
          style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.08))' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <ContactForm data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;