import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function TemplateCyber({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap');
        
        .font-mono { font-family: 'Fira Code', monospace; }
        
        .scanlines {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 50;
        }
        
        .glitch-card {
          border: 1px solid #00ff41;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.1), inset 0 0 20px rgba(0, 255, 65, 0.05);
          background: rgba(0, 20, 0, 0.6);
          position: relative;
          transition: all 0.3s ease;
        }
        .glitch-card::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px; right: -1px; bottom: -1px;
          border: 1px solid #00ff41;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .glitch-card:hover {
          background: rgba(0, 40, 0, 0.8);
          transform: translateX(5px);
        }
        .glitch-card:hover::before {
          opacity: 1;
          box-shadow: 0 0 15px #00ff41;
        }

        .typewriter-text {
          overflow: hidden;
          border-right: .15em solid #00ff41;
          white-space: nowrap;
          margin: 0;
          letter-spacing: .05em;
          animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #00ff41; } }
        
        .blinking-cursor {
          display: inline-block;
          width: 10px;
          height: 1.2em;
          background-color: #00ff41;
          animation: blink-caret 1s step-end infinite;
          vertical-align: bottom;
          margin-left: 5px;
        }
      `}</style>

      <div className="min-h-screen bg-[#050505] text-[#00ff41] font-mono relative overflow-x-hidden selection:bg-[#00ff41] selection:text-black pb-20">
        <div className="scanlines"></div>

        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10 space-y-16">
          <AboutSection data={data} />
          <SkillsSection data={data} />
          <ProjectsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          <EducationSection data={data} />
          <LanguagesSection languages={data.languages} />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateCyber;