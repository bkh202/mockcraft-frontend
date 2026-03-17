import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout"; // adjust path as needed
import { motion, useScroll, useSpring } from "framer-motion";
import { categorizeSkills } from "../../components/categorizeSkills";


// Section components
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSections";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";

const CreativeTemplate = ({ data }) => {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const categorizedSkills = categorizeSkills(data?.skills || []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  if (!data) return null;

  return (
    <Layout>
      <div className={`relative w-full overflow-x-hidden ${isDark ? 'dark' : ''} selection:bg-purple-500/30`}>
        <div className="bg-slate-50 dark:bg-[#0a0a0f] dark:text-gray-100 transition-colors duration-500 min-h-screen">

          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 z-50 origin-left"
            style={{ scaleX }}
          />

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Animated Background Blobs */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[120px]"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], x: [0, -80, 0], y: [0, 60, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] -left-20 h-125 w-125 rounded-full bg-pink-400/20 dark:bg-pink-600/10 blur-[120px]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-40">
            <HeroSection data={data} />
            <SkillsSection categorizedSkills={categorizedSkills} />

            {data.experience?.length > 0 && (
              <ExperienceSection experience={data.experience} />
            )}

            {data.projects?.length > 0 && (
              <ProjectsSection projects={data.projects} />
            )}

            {/* Education & Certifications side by side */}
            <div className="grid md:grid-cols-2 gap-12">
              <EducationSection education={data.education} />
              <LanguagesSection languages={data.languages} />
              {data.certificates?.length > 0 && (
                <CertificationsSection certificates={data.certificates} />
              )}
            </div>

            <ContactSection data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreativeTemplate;