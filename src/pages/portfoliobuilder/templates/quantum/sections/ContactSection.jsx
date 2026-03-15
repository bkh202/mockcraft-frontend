import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-24 pb-40">
      <div className="qm-section-label mb-2">module.contact</div>
      <div className="qm-progress mb-12">
        <div className="qm-progress-bar" style={{ animationDelay: "1.2s" }} />
      </div>
      <div className="qm-card p-12 rounded-xl text-center mb-6">
        <p className="qm-mono text-sm qm-dim mb-2">{"// initiating connection protocol..."}</p>
        <p className="qm-white text-lg mb-8">Ready to collaborate on the next breakthrough.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="qm-btn px-8 py-4 rounded-full flex items-center gap-2">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="qm-btn px-8 py-4 rounded-full flex items-center gap-2">
              📞 {data.phone}
            </a>
          )}
        </div>
        {data.location && <p className="qm-mono text-xs qm-dim mt-6">loc:// {data.location}</p>}
      </div>
      <div className="qm-card p-4 rounded-xl">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;