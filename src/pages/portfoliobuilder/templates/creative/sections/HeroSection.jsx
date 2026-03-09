import React from "react";
import { motion } from "framer-motion";
import { getSkillLogo } from "../../../components/categorizeSkills";

// Animation variants
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

const HeroSection = ({ data }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center relative"
    >
      <motion.div variants={fadeInUp} className="mb-8 relative group">
        <div className="absolute -inset-2 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />
        <img
          src={data.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"}
          alt="Profile"
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="relative inline-block mb-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white">
          {data.name}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">.</span>
        </h1>
      </motion.div>

      <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 mb-6">
        {data.title}
      </motion.h2>

      <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {data.summary}
      </motion.p>

      {/* Social links */}
      <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-10">
        {data.links && Object.entries(data.links).map(([platform, url]) => {
          if (!url) return null;
          return (
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all group"
            >
              <img
                src={getSkillLogo(platform)}
                alt={platform}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/814/814820.png"; }}
              />
              <span className="font-bold text-gray-700 dark:text-gray-200 capitalize">{platform}</span>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;