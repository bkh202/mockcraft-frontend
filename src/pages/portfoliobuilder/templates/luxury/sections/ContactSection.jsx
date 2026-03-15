import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-28 pb-40">
      <div className="text-center mb-20">
        <span className="lx-ornament mb-4" />
        <h3 className="lx-display text-3xl lx-gold mt-4 tracking-widest">CONNECT</h3>
        <div className="lx-divider w-48 mx-auto mt-6" />
      </div>
      <div className="lx-card p-16 text-center mb-8">
        <p className="lx-serif text-3xl italic text-stone-400 mb-10">
          "Every great collaboration begins with a conversation."
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="lx-btn px-10 py-4">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="lx-btn px-10 py-4">
              ✆ {data.phone}
            </a>
          )}
        </div>
        {data.location && <p className="lx-serif italic text-stone-600 mt-8">{data.location}</p>}
      </div>
      <div className="lx-card p-4">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;