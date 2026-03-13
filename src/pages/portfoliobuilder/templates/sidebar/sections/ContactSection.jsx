import ContactForm from "../../../components/ContactForm";

function ContactSection({ data }) {
  return (
    <section className="pt-12" id="contact">
      <div className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
          </p>

          <div className="max-w-2xl mx-auto text-left bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl">
            <ContactForm data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;