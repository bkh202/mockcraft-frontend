import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="pt-4 pb-10 ed-reveal">
      <p className="ed-section-label">Connect</p>
      <h2 className="ed-serif text-3xl md:text-4xl text-[#111] mb-3">Get In Touch</h2>
      <p className="text-stone-400 text-sm mb-8 font-light">
        Open to new opportunities and collaborations.
      </p>

      {/* Quick contact buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {data.email && (
          <a href={`mailto:${data.email}`}
            className="ed-link-btn font-medium text-[#111]">
            ✉ {data.email}
          </a>
        )}
        {data.phone && (
          <a href={`tel:${data.phone}`}
            className="ed-link-btn font-medium text-[#111]">
            ☎ {data.phone}
          </a>
        )}
      </div>

      {/* Contact form */}
      <div className="ed-card p-6 md:p-8">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;