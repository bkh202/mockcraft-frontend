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

const ProjectsSection = ({ projects }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-center mb-16">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
          Featured Projects
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-4xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-purple-500/20 to-transparent rounded-bl-full z-0 transition-transform group-hover:scale-150 duration-500" />

            <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-lg">
                  {p.duration}
                </span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 font-bold hover:text-pink-500 transition-colors flex items-center gap-1 bg-purple-50 dark:bg-purple-900/20 px-4 py-1.5 rounded-full text-xs">
                    Live Demo ↗
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-purple-500 transition-colors">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 grow">
                {p.description}
              </p>

              {/* Tech Stack with Logos */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                {p.techStack?.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    <img
                      src={getSkillLogo(tech)}
                      alt={tech}
                      className="w-3.5 h-3.5 object-contain"
                      onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
                    />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;