import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";
import {
  Save,
  Loader2,
  CheckCircle,
  User,
  Edit3,
  Code,
  Globe,
  Briefcase,
  GraduationCap,
  BookOpen,
  Award,
  Link
} from "lucide-react";

// Shared components
import ProfileSection from "../shared/ProfileSection";
import SummarySection from "../shared/SummarySection";
import SkillsSection from "../shared/SkillsSection";
import LanguagesSection from "../shared/LanguagesSection";
import ProjectsSection from "../shared/ProjectsSection";
import ExperienceSection from "../shared/ExperienceSection";
import EducationSection from "../shared/EducationSection"; // if exists
import CertificatesSection from "../shared/CertificatesSection";
import LinksSection from "../shared/LinksSection";
import TabBar from "../shared/TabBar";

// Edit-specific components
import PortfolioHeader from "../shared/PortfolioHeader";// or reuse a shared header?

function EditPortfolioPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/portfolio/${id}`);
      const parsed =
        typeof res.data.customData === "string"
          ? JSON.parse(res.data.customData)
          : res.data.customData;
      setData(parsed);
    } catch (err) {
      console.error("Failed to fetch portfolio", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setSaveSuccess(false);
      await axios.put("/portfolio/update", {
        portfolioId: id,
        customData: data
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error("Save failed", err);
      alert("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  // Helper functions for array updates
  const updateArrayField = (section, index, field, value) => {
    setData(prev => {
      const updated = [...(prev[section] || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const addItem = (section, template) => {
    setData(prev => ({
      ...prev,
      [section]: [...(prev[section] || []), template]
    }));
  };

  const removeItem = (section, index) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "summary", label: "Summary", icon: Edit3 },
    { id: "skills", label: "Skills", icon: Code },
    { id: "languages", label: "Languages", icon: Globe },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: GraduationCap },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "links", label: "Links", icon: Link }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-600">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <span className="text-lg">Loading portfolio data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioHeader
          saving={saving}
          saveSuccess={saveSuccess}
          onSave={handleSave}
        />

        {data && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-white/20">
            <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="space-y-6">
              {activeTab === "profile" && (
                <ProfileSection data={data} setData={setData} />
              )}
              {activeTab === "summary" && (
                <SummarySection data={data} setData={setData} />
              )}
              {activeTab === "skills" && (
                <SkillsSection
                  skills={data.skills || []}
                  setSkills={(newSkills) => setData({ ...data, skills: newSkills })}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
              {activeTab === "languages" && (
                <LanguagesSection
                  languages={data.languages || []}
                  setLanguages={(newLangs) => setData({ ...data, languages: newLangs })}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
              {activeTab === "projects" && (
                <ProjectsSection
                  projects={data.projects || []}
                  updateField={updateArrayField}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
              {activeTab === "experience" && (
                <ExperienceSection
                  experience={data.experience || []}
                  updateField={updateArrayField}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
              {activeTab === "education" && (
                <EducationSection
                  education={data.education || []}
                  updateField={updateArrayField}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
              {activeTab === "certificates" && (
                <CertificatesSection
                  certificates={data.certificates || []}
                  updateField={updateArrayField}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              )}
              {activeTab === "links" && (
                <LinksSection
                  links={data.links || {}}
                  setLinks={(newLinks) => setData({ ...data, links: newLinks })}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditPortfolioPage;