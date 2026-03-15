import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-24">
      <div className="sw-section-title text-center mb-16">// CONTACT.SYS</div>
      <div className="sw-card p-10 rounded-sm text-center mb-8">
        <p className="sw-pixel text-2xl text-gray-300 mb-8 tracking-wider">
          READY TO COLLABORATE? INITIATE TRANSMISSION.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="sw-btn px-8 py-3 rounded-sm flex items-center gap-2">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="sw-btn px-8 py-3 rounded-sm flex items-center gap-2">
              📞 {data.phone}
            </a>
          )}
        </div>
        {data.location && <p className="sw-pixel text-gray-500 mt-6 tracking-widest">📍 {data.location}</p>}
      </div>
      <div className="sw-card p-4 rounded-sm">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;