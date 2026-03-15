import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-20 pb-32">
      <div className="mx-section-header mb-2">contact.connect()</div>
      <div className="mx-progress mb-12">
        <div className="mx-progress-bar" style={{ animationDelay: "1.2s" }} />
      </div>
      <div className="mx-card p-10 rounded-sm text-center mb-8">
        <p className="mx-mono text-green-600 text-sm mb-6">{"> CHANNEL OPEN. AWAITING INPUT..."}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="mx-btn px-8 py-3 rounded-sm text-sm">
              [EMAIL: {data.email}]
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="mx-btn px-8 py-3 rounded-sm text-sm">
              [CALL: {data.phone}]
            </a>
          )}
        </div>
        {data.location && <p className="mx-dim mt-4 text-xs mx-mono">📍 {data.location}</p>}
      </div>
      <div className="mx-card p-4 rounded-sm">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;