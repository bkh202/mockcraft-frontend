import React from "react";
import { motion } from "framer-motion";

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

const ExperienceSection = ({ experience }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative"
    >
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-center mb-20">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
          Work Experience
        </span>
      </motion.h2>

      <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-1 md:before:h-full md:before:bg-linear-to-b md:before:from-purple-500 md:before:via-pink-500 md:before:to-transparent border-purple-500/30 ml-4 md:ml-0 pl-6 md:pl-0 space-y-12">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
          >
            <div className="hidden md:block md:w-1/2" />

            {/* Timeline Dot */}
            <div className="absolute -left-8.25 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-[0_0_15px_rgba(236,72,153,0.6)]" />

            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-purple-500/20 hover:-translate-y-2 transition-all">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold text-xs rounded-lg mb-4">
                  {exp.duration}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg font-bold text-pink-500 mb-4">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;