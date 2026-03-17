import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import LanguagesSection from "./sections/LanguagesSection";


function TemplateBento({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;800&display=swap');
        
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        /* Background Animations */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Text Shine Animation */
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .text-shine {
          background: linear-gradient(to right, #fff 20%, #818cf8 40%, #818cf8 60%, #fff 80%);
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        /* Floating Animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .float-card { animation: float 6s ease-in-out infinite; }

        /* Reveal Animation */
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .reveal-item {
          opacity: 0;
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Premium Glassmorphism */
        .glass-premium {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-premium:hover {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.15);
        }

        /* Tags */
        .skill-tag { transition: all 0.3s ease; }
        .skill-tag:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-2px) scale(1.05);
          color: #fff;
        }
      `}</style>

      <div className="min-h-screen bg-[#030305] text-gray-200 font-outfit overflow-x-hidden relative selection:bg-indigo-500/30">

        {/* Animated Background Blobs */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-120 h-120 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-120 h-120 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-160 h-160 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 space-y-40">
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

export default TemplateBento;