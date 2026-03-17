import Layout from "../../components/Layout";
import QuantumBackground from "./sections/QuantumBackground";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificationsSection from "./sections/CertificationsSection";

function TemplateQuantum({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;700&display=swap');

        .qm-mono { font-family: 'IBM Plex Mono', monospace; }
        .qm-sans { font-family: 'IBM Plex Sans', sans-serif; }

        @keyframes scanH {
          0% { top:-2px; }
          100% { top:100%; }
        }
        @keyframes pulse {
          0%,100% { opacity:0.6; transform:scale(1); }
          50% { opacity:1; transform:scale(1.05); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes dataStream {
          0% { transform:translateY(0); opacity:1; }
          100% { transform:translateY(-20px); opacity:0; }
        }
        @keyframes borderPulse {
          0%,100% { border-color:rgba(0,212,255,0.15); }
          50% { border-color:rgba(0,212,255,0.4); }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow:0 0 10px rgba(0,212,255,0.1); }
          50% { box-shadow:0 0 30px rgba(0,212,255,0.25), 0 0 60px rgba(0,212,255,0.08); }
        }
        @keyframes progressFill {
          from { width:0; }
          to { width:100%; }
        }

        .qm-bg {
          background: #030812;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .qm-scan {
          position: fixed;
          left:0; right:0; height:2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent);
          animation: scanH 8s linear infinite;
          pointer-events: none;
          z-index: 99;
        }

        .qm-card {
          background: rgba(3,8,18,0.9);
          border: 1px solid rgba(0,212,255,0.12);
          backdrop-filter: blur(16px);
          transition: all 0.3s;
          animation: borderPulse 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .qm-card::before {
          content: '';
          position: absolute;
          top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent);
          opacity:0;
          transition: opacity 0.3s;
        }
        .qm-card:hover::before { opacity:1; }
        .qm-card:hover {
          border-color: rgba(0,212,255,0.35);
          animation: glowPulse 2s ease-in-out infinite;
          transform: translateY(-4px);
        }

        .qm-cyan { color:#00d4ff; }
        .qm-purple { color:#7c3aed; }
        .qm-white { color:#e0f2fe; }
        .qm-dim { color:rgba(224,242,254,0.35); }
        .qm-mid { color:rgba(224,242,254,0.6); }

        .qm-tag {
          background: rgba(0,212,255,0.04);
          border: 1px solid rgba(0,212,255,0.12);
          color: rgba(0,212,255,0.65);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.68rem;
          transition: all 0.2s;
        }
        .qm-tag:hover {
          background: rgba(0,212,255,0.1);
          border-color: rgba(0,212,255,0.4);
          color: #00d4ff;
          box-shadow: 0 0 10px rgba(0,212,255,0.1);
        }

        .qm-btn {
          background: transparent;
          border: 1px solid rgba(0,212,255,0.3);
          color: #00d4ff;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          transition: all 0.3s;
        }
        .qm-btn:hover {
          background: rgba(0,212,255,0.08);
          border-color: rgba(0,212,255,0.6);
          box-shadow: 0 0 20px rgba(0,212,255,0.1);
        }

        .qm-section-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          color: rgba(0,212,255,0.35);
          text-transform: uppercase;
        }

        .qm-progress {
          height: 1px;
          background: rgba(0,212,255,0.08);
          overflow: hidden;
          position: relative;
        }
        .qm-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #7c3aed, #00d4ff);
          box-shadow: 0 0 8px rgba(0,212,255,0.5);
          animation: progressFill 1.5s ease-out both;
        }

        .qm-reveal { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }

        .qm-hex {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px; height: 48px;
          border: 1px solid rgba(0,212,255,0.2);
          background: rgba(0,212,255,0.05);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          color: #00d4ff;
          clip-path: polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%);
        }

        .qm-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.25), rgba(124,58,237,0.25), transparent);
        }
      `}</style>

      <div className="qm-bg qm-sans text-blue-100">
        <QuantumBackground />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <HeroSection data={data} />
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

export default TemplateQuantum;