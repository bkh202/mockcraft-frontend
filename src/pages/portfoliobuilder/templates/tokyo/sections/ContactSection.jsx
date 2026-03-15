import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-24 pb-40">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="tn-sign text-4xl tn-red">連絡</h3>
        <span className="tn-display text-gray-600 text-xl">/ CONTACT</span>
      </div>
      <div className="tn-card p-12 rounded-sm mb-1">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="tn-display text-2xl tn-white mb-1">Let's Connect</p>
            <p className="tn-dim text-sm">東京から世界へ — Ready to collaborate worldwide</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.email && (
              <a href={`mailto:${data.email}`} className="tn-btn px-6 py-3">
                ✉ EMAIL
              </a>
            )}
            {data.phone && (
              <a href={`tel:${data.phone}`} className="tn-btn px-6 py-3">
                📞 CALL
              </a>
            )}
          </div>
        </div>
        {data.location && <p className="tn-code text-xs tn-dim mt-6">📍 {data.location}</p>}
      </div>
      <div className="tn-card p-4 rounded-sm mt-1">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;