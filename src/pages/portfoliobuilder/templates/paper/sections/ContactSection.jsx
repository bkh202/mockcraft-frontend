import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="py-24 pb-40 relative">
      <div className="pp-section-num">07</div>
      <h3 className="pp-serif text-4xl pp-dark font-bold mb-3">Get In Touch</h3>
      <div className="pp-line-brown w-32 mb-12" />
      <div className="pp-card p-12 rounded-sm mb-6 text-center">
        <p className="pp-hand text-2xl pp-brown mb-8" style={{ fontSize: "1.6rem" }}>
          "Let's create something wonderful together ✨"
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="pp-btn px-8 py-4 rounded-none flex items-center gap-2">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="pp-btn-outline px-8 py-4 rounded-none flex items-center gap-2">
              📞 {data.phone}
            </a>
          )}
        </div>
        {data.location && (
          <p className="pp-hand pp-light mt-6" style={{ fontSize: "1.1rem" }}>
            📍 {data.location}
          </p>
        )}
      </div>
      <div className="pp-card p-4 rounded-sm">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;