import Layout from "../../components/Layout";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

function TemplateNeumorphic({ data }) {
  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        .font-stripe { font-family: 'Inter', sans-serif; }
        
        .bg-stripe {
          background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
        }

        .stripe-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.7);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        
        .stripe-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 45px -15px rgba(79, 70, 229, 0.15), 0 8px 20px -8px rgba(0,0,0,0.1);
          background: white;
          border-color: rgba(255,255,255,1);
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          color: #4f46e5;
          transition: all 0.2s;
        }
        .contact-icon:hover {
          background: #4f46e5;
          color: white;
          transform: scale(1.1);
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: linear-gradient(145deg, #ffffff, #f9fafc);
          border: 1px solid #eef2f6;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1e293b;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          transition: all 0.2s;
        }
        .skill-tag:hover {
          background: white;
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transform: scale(1.02);
        }

        .gradient-line {
          height: 4px;
          width: 60px;
          background: linear-gradient(90deg, #4f46e5, #a855f7);
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        /* Smooth Reveal */
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="min-h-screen bg-stripe text-[#0f172a] font-stripe pb-24 antialiased">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-24 space-y-12">

          <AboutSection data={data} />

          {/* Main 3-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 space-y-8">
              <SkillsSection data={data} />
              <EducationSection data={data} />
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 space-y-8">
              {data.experience?.length > 0 && <ExperienceSection data={data} />}
              <ProjectsSection data={data} />
            </div>
          </div>

          <ContactSection data={data} />

        </div>
      </div>
    </Layout>
  );
}

export default TemplateNeumorphic;