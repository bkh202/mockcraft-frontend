import React from "react";
import ContactForm from "../../../components/ContactForm"; // adjust path

const ContactSection = ({ data }) => {
  return (
    <section className="pt-10 border-t border-gray-100">
      <div className="bg-gray-50/50 rounded-3xl p-6 sm:p-10 ring-1 ring-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Let's Connect</h2>
          <p className="text-gray-500 text-sm">Have a project or opportunity? Send a message below.</p>
        </div>
        {/* Embedded Standard Contact Form */}
        <div className="max-w-2xl mx-auto">
          <ContactForm data={data} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;