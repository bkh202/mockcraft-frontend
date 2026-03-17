import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const LanguagesSection = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <motion.div variants={fadeInUp}>
      <h2 className="text-3xl font-black mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
        <span className="w-2 h-8 bg-linear-to-b from-purple-500 to-pink-500 rounded-full" />
        Languages
      </h2>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <span className="text-gray-900 dark:text-white font-medium">{lang}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LanguagesSection;