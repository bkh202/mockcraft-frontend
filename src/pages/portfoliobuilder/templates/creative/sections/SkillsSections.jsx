import React from "react";
import { motion } from "framer-motion";
import { getSkillLogo } from "../../../components/categorizeSkills";

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

const SkillsSection = ({ categorizedSkills }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-center mb-16">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
          Tech Arsenal
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            key={category}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-2 h-6 bg-linear-to-b from-purple-500 to-pink-500 rounded-full" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900/50 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-300 border border-transparent hover:border-purple-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm"
                >
                  <img
                    src={getSkillLogo(skill)}
                    alt={skill}
                    className="w-4 h-4 object-contain"
                    onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;