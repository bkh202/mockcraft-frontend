import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const EducationSection = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <motion.div variants={fadeInUp}>
      <h2 className="text-3xl font-black mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
        <span className="w-2 h-8 bg-linear-to-b from-purple-500 to-pink-500 rounded-full" />
        Education
      </h2>
      <div className="space-y-6">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 10 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{ed.degree}</h3>
            <p className="text-purple-600 dark:text-purple-400 font-bold mt-1">{ed.college || ed.institution}</p>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-sm font-bold text-gray-500 uppercase">
              <span>{ed.year || ed.duration}</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Score: {ed.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;