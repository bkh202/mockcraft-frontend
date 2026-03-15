import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";

// Shared components
import ProfileSection from "../shared/ProfileSection";
import SummarySection from "../shared/SummarySection";
import SkillsSection from "../shared/SkillsSection";
import LanguagesSection from "../shared/LanguagesSection";
import ProjectsSection from "../shared/ProjectsSection";
import ExperienceSection from "../shared/ExperienceSection";
import CertificatesSection from "../shared/CertificatesSection";
import LinksSection from "../shared/LinksSection";
import TabBar from "../shared/TabBar";

// Create-specific components
import CreatePortfolioHeader from "./components/CreatePortfolioHeader";
import ErrorBanner from "./components/ErrorBanner";
import FileUploadSection from "./components/FileUploadSection";
import TemplateSelector from "./components/TemplateSelector";
import GenerateButton from "./components/GenerateButton";

// Icons for tabs
import { User, Edit3, Code, Globe, Briefcase, GraduationCap, Award, Link } from "lucide-react";

function CreatePortfolioPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [resumeId, setResumeId] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedTemplate, setSelectedTemplate] = useState(4);
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (msg) => {
    setErrorMessage(msg);
    setTimeout(() => setErrorMessage(""), 5000);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const interval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const res = await axios.post("/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      clearInterval(interval);
      setUploadProgress(100);
      setResumeId(res.data.resumeId);
      setTimeout(() => setUploadProgress(0), 500);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleParse = async () => {
    if (!resumeId) {
      alert("Upload resume first");
      return;
    }

    try {
      setIsParsing(true);
      const res = await axios.post(`/resume/parse/${resumeId}`);
      setParsedData(res.data.data);
      setEditedData(res.data.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 409 || err.response?.data?.message?.includes("duplicate")) {
        showError("Duplicate resume not allowed. Please upload a different file.");
      } else {
        alert("Parse failed");
      }
    } finally {
      setIsParsing(false);
    }
  };

  const handleGenerate = async () => {
    if (!selectedTemplate) {
      alert("Select a template first");
      return;
    }
    if (!resumeId) {
      alert("Resume ID missing. Please upload a resume first.");
      return;
    }

    try {
      setLoading(true);

      // Find the selected template layout
      const templates = [
        { id: 4, layout: "modern" },
        { id: 5, layout: "minimal" },
        { id: 6, layout: "creative" },
        { id: 7, layout: "sidebar" },
        { id: 8, layout: "cyber" },
        { id: 9, layout: "editorial" },
        { id: 10, layout: "bento" },
        { id: 11, layout: "neumorphic" },
        { id: 12, layout: "holographic" },
        { id: 13, layout: "vibrant" },
        { id: 14, layout: "synthwave" },
        { id: 15, layout: "matrix" },
        { id: 16, layout: "luxury" },
        { id: 17, layout: "space" },
        { id: 18, layout: "brutal" },
        { id: 19, layout: "aurora" },
        { id: 20, layout: "tokyoneon" },
        { id: 21, layout: "paper" },
        { id: 22, layout: "artdeco" },
        { id: 23, layout: "quantum" }


      ];
      const selectedTplObj = templates.find(t => t.id === selectedTemplate);
      const layoutString = selectedTplObj ? selectedTplObj.layout : "modern";

      const finalCustomData = {
        ...editedData,
        templateConfig: {
          ...(editedData.templateConfig || {}),
          layout: layoutString
        }
      };

      const payload = {
        resumeId,
        templateId: selectedTemplate,
        customData: finalCustomData
      };

      console.log("Sending payload:", payload);

      const res = await axios.post("/portfolio/generate", payload);
      const { portfolioId, slug, id } = res.data;
      const finalId = portfolioId || id;

      navigate(`/preview/${finalId}`);
    } catch (err) {
      console.error("Generate error:", err.response?.data);
      alert("Failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  // Helper functions for array updates
  const updateField = (section, index, field, value) => {
    setEditedData(prev => {
      const updated = [...(prev[section] || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const addItem = (section, template) => {
    setEditedData(prev => ({
      ...prev,
      [section]: [...(prev[section] || []), template]
    }));
  };

  const removeItem = (section, index) => {
    setEditedData(prev => ({
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
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "links", label: "Links", icon: Link }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <CreatePortfolioHeader />
        <ErrorBanner errorMessage={errorMessage} onDismiss={() => setErrorMessage("")} />

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20">
          <FileUploadSection
            file={file}
            setFile={setFile}
            loading={loading}
            isParsing={isParsing}
            uploadProgress={uploadProgress}
            resumeId={resumeId}
            onUpload={handleUpload}
            onParse={handleParse}
          />

          {editedData && (
            <div className="border-t pt-8">
              <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

              <div className="space-y-6">
                {activeTab === "profile" && (
                  <ProfileSection data={editedData} setData={setEditedData} />
                )}
                {activeTab === "summary" && (
                  <SummarySection data={editedData} setData={setEditedData} />
                )}
                {activeTab === "skills" && (
                  <SkillsSection
                    skills={editedData.skills || []}
                    setSkills={(newSkills) => setEditedData({ ...editedData, skills: newSkills })}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                )}
                {activeTab === "languages" && (
                  <LanguagesSection
                    languages={editedData.languages || []}
                    setLanguages={(newLangs) => setEditedData({ ...editedData, languages: newLangs })}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                )}
                {activeTab === "projects" && (
                  <ProjectsSection
                    projects={editedData.projects || []}
                    updateField={updateField}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                )}
                {activeTab === "experience" && (
                  <ExperienceSection
                    experience={editedData.experience || []}
                    updateField={updateField}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                )}
                {activeTab === "certificates" && (
                  <CertificatesSection
                    certificates={editedData.certificates || []}
                    updateField={updateField}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                )}
                {activeTab === "links" && (
                  <LinksSection
                    links={editedData.links || {}}
                    setLinks={(newLinks) => setEditedData({ ...editedData, links: newLinks })}
                  />
                )}
              </div>

              <TemplateSelector selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
              <GenerateButton loading={loading} isParsing={isParsing} onClick={handleGenerate} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatePortfolioPage;