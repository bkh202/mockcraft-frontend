import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CertificationsSection = ({ certificates }) => {
  return (
    <motion.div variants={fadeInUp}>
      <h2 className="text-3xl font-black mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
        <span className="w-2 h-8 bg-linear-to-b from-purple-500 to-pink-500 rounded-full" />
        Certifications
      </h2>
      <div className="space-y-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-5 rounded-2xl flex items-center gap-5 border border-purple-100 dark:border-purple-800/30"
          >
            <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md shrink-0">
              🏆
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">{cert.name || cert.title || cert}</h3>
              {cert.issuer && <p className="text-sm font-medium text-gray-500 mt-1">{cert.issuer} {cert.date && `• ${cert.date}`}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationsSection;