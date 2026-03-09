import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../../components/ContactForm"; // adjust path

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const ContactSection = ({ data }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="text-center pt-10"
    >
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-8">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
          Let's Connect
        </span>
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
        Got a project or an opportunity? Feel free to reach out. I'd love to hear from you!
      </motion.p>

      <motion.div variants={fadeInUp} className="max-w-2xl mx-auto bg-white dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-2 bg-linear-to-r from-purple-500 to-pink-500" />
        <div className="glitch-card p-4">
          <ContactForm data={data} />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;