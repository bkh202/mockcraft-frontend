import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-24 pb-40">
      <div className="text-center mb-16">
        <div className="sp-display text-xs tracking-[0.4em] sp-dim mb-4">SECTOR 05</div>
        <h3 className="sp-section-title text-3xl">OPEN CHANNEL</h3>
        <div
          className="h-px w-48 mx-auto mt-4"
          style={{ background: "linear-gradient(90deg,transparent,rgba(100,160,255,0.4),transparent)" }}
        />
      </div>
      <div className="sp-card p-12 rounded-2xl text-center mb-8">
        <p className="text-blue-300/60 text-lg mb-8 max-w-xl mx-auto">Signal received. Ready to connect across the universe.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="sp-btn px-8 py-4 rounded-full flex items-center gap-2">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="sp-btn px-8 py-4 rounded-full flex items-center gap-2">
              📞 {data.phone}
            </a>
          )}
        </div>
        {data.location && (
          <p className="sp-dim mt-6 text-sm sp-display tracking-wider">📍 {data.location}</p>
        )}
      </div>
      <div className="sp-card p-4 rounded-2xl">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;