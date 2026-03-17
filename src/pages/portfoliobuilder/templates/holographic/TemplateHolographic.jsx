import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection"
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function TemplateHolographic({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap');
        
        .font-spatial { font-family: 'Space Grotesk', sans-serif; }
        
        /* Deep Space Background with moving mesh */
        .bg-spatial {
          background-color: #020205;
          background-image: 
            radial-gradient(at 0% 0%, rgba(29, 78, 216, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.15) 0px, transparent 50%);
        }

        /* Holographic Glass Card */
        .spatial-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255,255,255,0.1);
          border-top-color: rgba(255,255,255,0.2);
          border-left-color: rgba(255,255,255,0.2);
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
          border-radius: 24px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .spatial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 40px 80px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 40px rgba(124, 58, 237, 0.2);
          border-color: rgba(124, 58, 237, 0.4);
        }

        /* Rotating Gradient Border for Avatar & Buttons */
        .spin-border-wrapper {
          position: relative;
          overflow: hidden;
          padding: 3px;
          border-radius: 9999px;
        }
        .spin-border-wrapper::before {
          content: "";
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: conic-gradient(transparent, rgba(124, 58, 237, 1), transparent 30%);
          animation: spin 3s linear infinite;
        }
        .spin-border-inner {
          position: relative;
          background: #020205;
          border-radius: 9999px;
          z-index: 1;
          transition: background 0.3s ease;
        }
        .spin-border-wrapper:hover .spin-border-inner {
          background: #0a0a1a;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Text Hologram Animation */
        .holo-text {
          background: linear-gradient(to right, #60a5fa, #c084fc, #f472b6, #60a5fa);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shineText 4s linear infinite;
        }
        @keyframes shineText { to { background-position: 200% center; } }

        /* Cinematic Reveal */
        @keyframes cinematicUp {
          from { opacity: 0; transform: translateY(60px) scale(0.95) rotateX(10deg); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0) scale(1) rotateX(0); filter: blur(0); }
        }
        .animate-cinematic {
          opacity: 0;
          animation: cinematicUp 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        /* Floating Animation */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-spatial text-gray-200 font-spatial overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-40">
          <AboutSection data={data} />
          <SkillsSection data={data} />
          {data.experience?.length > 0 && <ExperienceSection data={data} />}
          <ProjectsSection data={data} />
          <EducationSection data={data} />
          <LanguagesSection languages={data.languages} />
          <ContactSection data={data} />
        </div>
      </div>
    </Layout>
  );
}

export default TemplateHolographic;