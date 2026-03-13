import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

function TemplateVibrant({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-vibrant { font-family: 'Inter', sans-serif; }
        
        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 20px 5px rgba(236, 72, 153, 0.2); }
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .animate-fade-up-delay-1 {
          animation: fade-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-up-delay-2 {
          animation: fade-up 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        /* Card styles */
        .vibrant-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vibrant-card:hover {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 30px 50px -20px rgba(236, 72, 153, 0.4);
          border-color: rgba(236, 72, 153, 0.3);
          background: white;
        }
        
        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Skill chips upgraded */
        .chip-vibrant {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.4rem 1.2rem;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          background: linear-gradient(145deg, #fce7f3, #f3e8ff);
          color: #6b21a8;
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: 0 2px 5px rgba(0,0,0,0.02);
          transition: all 0.2s;
        }
        .chip-vibrant:hover {
          transform: scale(1.05);
          background: linear-gradient(145deg, #fbcfe8, #ede9fe);
          box-shadow: 0 8px 15px rgba(236, 72, 153, 0.2);
        }
        
        /* Background pattern */
        .bg-pattern {
          background-color: #f5f3ff;
          background-image: radial-gradient(at 30% 30%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
                            radial-gradient(at 70% 80%, rgba(139, 92, 246, 0.1) 0px, transparent 50%);
        }
      `}</style>

      <div className="font-vibrant bg-pattern min-h-screen text-gray-800 antialiased pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

          <AboutSection data={data} />

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 space-y-8">
              <SkillsSection data={data} />
              <CertificatesSection data={data} />
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 space-y-8">
              <ExperienceSection data={data} />
              <ProjectsSection data={data} />
              <EducationSection data={data} />
            </div>
          </div>

          <ContactSection data={data} />

        </div>
      </div>
    </Layout>
  );
}

export default TemplateVibrant;