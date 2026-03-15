import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-28 pb-40 relative">
      <div className="ad-num">V</div>
      <div className="text-center mb-20">
        <div className="ad-ornament mb-6">
          <div className="ad-ornament-line rev" />
          <div className="ad-diamond" />
          <div className="ad-ornament-line" />
        </div>
        <h3 className="ad-section-title text-3xl ad-cream">Correspondence</h3>
        <div className="ad-divider w-48 mx-auto mt-6" />
      </div>
      <div className="ad-card p-16 text-center mb-1">
        <p className="ad-serif italic text-3xl ad-mid mb-10">"Excellence is not a destination, it is a journey."</p>
        <div className="flex flex-wrap justify-center gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="ad-btn px-10 py-4">
              <span>✉ {data.email}</span>
            </a>
          )}
          {data.phone && (
            <a href={`tel:${data.phone}`} className="ad-btn px-10 py-4">
              <span>✆ {data.phone}</span>
            </a>
          )}
        </div>
        {data.location && <p className="ad-sans text-xs tracking-[0.3em] ad-dim mt-8">{data.location}</p>}
      </div>
      <div className="ad-card p-4 mt-1">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;