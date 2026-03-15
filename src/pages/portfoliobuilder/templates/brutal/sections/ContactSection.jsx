import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="py-24 pb-40 relative">
      <div className="bt-section-num">05</div>
      <div className="flex items-center gap-4 mb-16">
        <div className="bt-line-accent" style={{ width: '40px', animationDelay: '1.2s' }} />
        <h3 className="bt-display text-5xl bt-white">LET'S WORK</h3>
      </div>
      <div className="bt-card p-12 bg-[#0a0a0a] bt-stripe mb-1">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="bt-display text-4xl bt-white mb-2">GOT A PROJECT?</h4>
            <p className="bt-mono text-sm bt-dim">Let's build something great together.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.email && (
              <a href={`mailto:${data.email}`} className="bt-btn px-8 py-3">
                SEND EMAIL
              </a>
            )}
            {data.phone && (
              <a href={`tel:${data.phone}`} className="bt-btn-outline px-8 py-3">
                CALL NOW
              </a>
            )}
          </div>
        </div>
        {data.location && (
          <>
            <div className="bt-line-h mt-8 mb-4" />
            <p className="bt-mono text-xs bt-dim">📍 {data.location}</p>
          </>
        )}
      </div>
      <div className="bt-card p-4 bg-[#0a0a0a]">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;