import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import MatrixRain from "./sections/MatrixRain";
import TerminalIntro from "./sections/TerminalIntro";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateMatrix({ data }) {
  const intro = `> INITIALIZING PORTFOLIO...\n> DECRYPTING PROFILE DATA...\n> ACCESS GRANTED. WELCOME.`;

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Source+Code+Pro:wght@400;600;700&display=swap');

        .mx-mono { font-family: 'Share Tech Mono', monospace; }
        .mx-code { font-family: 'Source Code Pro', monospace; }

        @keyframes matrixRain {
          0% { transform: translateY(-100%); opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes phosphorPulse {
          0%,100% { text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41; }
          50% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41; }
        }
        @keyframes scanCrt {
          0%,100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes crtFlicker {
          0%,100% { opacity:1; }
          92% { opacity:1; }
          93% { opacity:0.8; }
          94% { opacity:1; }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }

        .mx-bg {
          background: #000d00;
          min-height: 100vh;
          animation: crtFlicker 8s infinite;
        }
        .mx-rain-col {
          position: fixed;
          top: 0;
          font-family: 'Share Tech Mono', monospace;
          font-size: 14px;
          color: #00ff41;
          writing-mode: vertical-lr;
          pointer-events: none;
          z-index: 0;
          user-select: none;
          animation: matrixRain linear infinite;
          opacity: 0.12;
        }
        .mx-crt {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,20,0,0.04) 0px,
            rgba(0,20,0,0.04) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
          z-index: 99;
          animation: scanCrt 4s ease-in-out infinite;
        }

        .mx-card {
          background: rgba(0, 15, 0, 0.9);
          border: 1px solid rgba(0,255,65,0.2);
          transition: all 0.3s;
        }
        .mx-card:hover {
          border-color: rgba(0,255,65,0.6);
          box-shadow: 0 0 20px rgba(0,255,65,0.08), inset 0 0 30px rgba(0,255,65,0.03);
          transform: translateY(-2px);
        }

        .mx-title {
          color: #00ff41;
          animation: phosphorPulse 4s ease-in-out infinite;
        }
        .mx-dim { color: rgba(0,255,65,0.5); }
        .mx-bright { color: #00ff41; }
        .mx-accent { color: #00cc33; }

        .mx-tag {
          background: rgba(0,255,65,0.05);
          border: 1px solid rgba(0,255,65,0.2);
          color: rgba(0,255,65,0.7);
          transition: all 0.2s;
        }
        .mx-tag:hover {
          background: rgba(0,255,65,0.1);
          border-color: rgba(0,255,65,0.5);
          color: #00ff41;
        }

        .mx-progress {
          height: 2px;
          background: rgba(0,255,65,0.1);
          overflow: hidden;
        }
        .mx-progress-bar {
          height: 100%;
          background: #00ff41;
          box-shadow: 0 0 8px #00ff41;
          animation: progressBar 2s ease-out forwards;
        }

        .mx-section-header {
          font-family: 'Share Tech Mono', monospace;
          color: #00ff41;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .mx-reveal { animation: fadeIn 0.8s ease both; }

        .mx-btn {
          background: transparent;
          border: 1px solid #00ff41;
          color: #00ff41;
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 0.1em;
          transition: all 0.3s;
        }
        .mx-btn:hover {
          background: rgba(0,255,65,0.1);
          box-shadow: 0 0 15px rgba(0,255,65,0.2);
        }
      `}</style>

      <div className="mx-bg mx-code text-green-400 relative">
        <div className="mx-crt" />
        <MatrixRain />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <section className="min-h-screen flex flex-col justify-center py-20">
            <TerminalIntro text={intro} />
            <HeroSection data={data} />
          </section>

          <SkillsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          {data.projects?.length > 0 && <ProjectsSection data={data} />}
          {data.education?.length > 0 && <EducationSection data={data} />}
          <LanguagesSection languages={data.languages} />
          <CertificationsSection certificates={data.certificates} />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateMatrix;