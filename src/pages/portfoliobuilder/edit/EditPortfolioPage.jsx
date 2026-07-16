import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";

// Shared components (assume these are already updated to use FontAwesome & black/white)
import ProfileSection from "../shared/ProfileSection";
import SummarySection from "../shared/SummarySection";
import SkillsSection from "../shared/SkillsSection";
import LanguagesSection from "../shared/LanguagesSection";
import ProjectsSection from "../shared/ProjectsSection";
import ExperienceSection from "../shared/ExperienceSection";
import EducationSection from "../shared/EducationSection";
import CertificatesSection from "../shared/CertificatesSection";
import LinksSection from "../shared/LinksSection";
import TabBar from "../shared/TabBar";

// Local header component (or we could reuse a shared one, but we'll define it here)
function EditPortfolioHeader({ saving, saveSuccess, onSave }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-black">Edit Portfolio</h1>
        <p className="text-lg text-gray-600 mt-1">Update your details and save changes</p>
      </div>
      <button
        onClick={onSave}
        disabled={saving}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg transition-all ${
          saving
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800 shadow-sm"
        }`}
      >
        {saving ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-save"></i>}
        {saving ? "Saving..." : "Save Changes"}
        {saveSuccess && <i className="fa fa-check-circle text-green-500"></i>}
      </button>
    </div>
  );
}

// Tab definitions with FontAwesome icons
const tabs = [
  { id: "profile", label: "Profile", icon: "fa-user" },
  { id: "summary", label: "Summary", icon: "fa-edit" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "languages", label: "Languages", icon: "fa-globe" },
  { id: "projects", label: "Projects", icon: "fa-briefcase" },
  { id: "experience", label: "Experience", icon: "fa-graduation-cap" },
  { id: "education", label: "Education", icon: "fa-book" },
  { id: "certificates", label: "Certificates", icon: "fa-award" },
  { id: "links", label: "Links", icon: "fa-link" },
];

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-black">
          <i className="fa fa-spinner fa-spin text-3xl"></i>
          <span className="text-lg font-bold">Loading portfolio data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <EditPortfolioHeader
          saving={saving}
          saveSuccess={saveSuccess}
          onSave={handleSave}
        />

        {data && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
            <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="space-y-6 mt-6">
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