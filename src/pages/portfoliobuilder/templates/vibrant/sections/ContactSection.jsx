import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="mt-12">
      <div className="vibrant-card p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Let's Connect
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have a project in mind or just want to say hi? Drop a message!
          </p>
          <ContactForm data={data} />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;