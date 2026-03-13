import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section id="contact" className="stripe-card p-10 md:p-16 text-center animate-reveal relative overflow-hidden mt-12" style={{ animationDelay: "0.6s" }}>
      <div className="absolute inset-0 bg-linear-to-t from-indigo-500/5 to-transparent pointer-events-none"></div>
      <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Let's work together</h2>
      <p className="text-gray-500 mb-8 max-w-xl mx-auto text-lg">Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects.</p>

      <div className="flex flex-wrap justify-center gap-4 relative z-10">
        {data.email && (
          <a href={`mailto:${data.email}`} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5">
            Say Hello 👋
          </a>
        )}
        {data.links?.linkedin && (
          <a href={`https://${data.links.linkedin}`} target="_blank" rel="noreferrer" className="px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            Connect on LinkedIn
          </a>
        )}
      </div>

      <div className="glitch-card p-2">
        <ContactForm data={data} />
      </div>
    </section>
  );
}

export default ContactSection;