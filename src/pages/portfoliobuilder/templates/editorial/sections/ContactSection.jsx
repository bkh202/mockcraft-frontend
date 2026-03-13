import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <div className="glitch-card p-3">
      <ContactForm data={data} />
    </div>
  );
}

export default ContactSection;