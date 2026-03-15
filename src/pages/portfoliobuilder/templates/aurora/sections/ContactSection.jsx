import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-24 pb-40">
      <div className="text-center mb-16">
        <div className="ar-num mb-3">05 — CONTACT</div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white">Let's Connect</h3>
        <div className="ar-divider w-48 mx-auto mt-4" />
      </div>
      <div className="ar-card p-12 rounded-3xl text-center mb-6">
        <p className="text-emerald-300/50 text-lg max-w-xl mx-auto mb-8">
          Open to new opportunities and collaborations. Let's build something beautiful together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="ar-btn px-8 py-4 rounded-full">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="ar-btn px-8 py-4 rounded-full">
              📞 {data.phone}
            </a>
          )}
        </div>
        {data.location && (
          <p className="ar-dim ar-mono text-xs mt-6 tracking-widest">📍 {data.location}</p>
        )}
      </div>
      <div className="ar-card p-4 rounded-2xl">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;