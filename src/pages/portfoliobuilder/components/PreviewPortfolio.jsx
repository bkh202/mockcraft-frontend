import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../api/axiosInstance';

// Import all templates (same as above)
import ModernTemplate from "../templates/modern/ModernTemplate";
import MinimalTemplate from "../templates/minimal/MinimalTemplate";
import CreativeTemplate from "../templates/creative/CreativeTemplate";
import SidebarTemplate from "../templates/sidebar/SidebarTemplate";
import TemplateBento from "../templates/bento/TemplateBento";
import TemplateCyber from "../templates/cyber/TemplateCyber";
import TemplateEditorial from "../templates/editorial/TemplateEditorial";
import TemplateNeumorphic from "../templates/neumorphic/TemplateNeumorphic";
import TemplateHolographic from "../templates/holographic/TemplateHolographic";
import TemplateVibrant from "../templates/vibrant/TemplateVibrant";
import TemplateBrutal from '../templates/brutal/TemplateBrutal';
import TemplateLuxury from '../templates/luxury/TemplateLuxury';
import TemplateMatrix from '../templates/matrix/TemplateMatrix';
import TemplateSpace from '../templates/space/TemplateSpace';
import TemplateSynthwave from '../templates/synthwave/TemplateSynthwave';
import TemplateAurora from '../templates/aurora/TemplateAurora';
import TemplateTokyoNeon from '../templates/tokyo/TemplateTokyoNeon';
import TemplatePaper from '../templates/paper/TemplatePaper';
import TemplateArtDeco from '../templates/deco/TemplateArtDeco';
import TemplateQuantum from '../templates/quantum/TemplateQuantum';

const templateComponents = {
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
  sidebar: SidebarTemplate,
  bento: TemplateBento,
  cyber: TemplateCyber,
  editorial: TemplateEditorial,
  neumorphic: TemplateNeumorphic,
  holographic: TemplateHolographic,
  vibrant: TemplateVibrant,
  brutal: TemplateBrutal,
  luxury: TemplateLuxury,
  matrix: TemplateMatrix,
  space: TemplateSpace,
  synthwave: TemplateSynthwave,
  aurora: TemplateAurora,
  tokyoneon: TemplateTokyoNeon,
  paper: TemplatePaper,
  artdeco: TemplateArtDeco,
  quantum: TemplateQuantum
};

function PreviewPortfolio() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    if (!id || id === 'undefined') {
      console.warn("🛑 DEBUG: Portfolio ID is undefined. API call aborted.");
      setLoading(false);
      return;
    }

    const fetchMyPortfolio = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/portfolio/preview/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = response.data;
        let parsedCustomData = {};
        if (data.customData) {
          try {
            parsedCustomData = typeof data.customData === 'string'
              ? JSON.parse(data.customData)
              : data.customData;
          } catch (parseErr) {
            console.error("JSON parse failed for customData:", parseErr);
          }
        }
        setPortfolio({
          ...data,
          parsedData: parsedCustomData
        });
      } catch (error) {
        console.error("Error fetching preview", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyPortfolio();
  }, [id]);

  const handlePublish = async () => {
    setPublishing(true);
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/portfolio/publish/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPortfolio(prev => ({ ...prev, isPublished: true }));
      alert("🎉 Portfolio Successfully Published!");
    } catch (error) {
      console.error("Error publishing", error);
      alert("Failed to publish. Check console logs.");
    } finally {
      setPublishing(false);
    }
  };

  if (loading) return (
    <div className="p-10 text-center font-bold text-xl text-gray-500">
      <i className="fa fa-spinner fa-spin mr-2"></i> Loading Preview...
    </div>
  );
  if (!portfolio) return <div className="p-10 text-center text-red-500">Portfolio not found!</div>;

  let configObj = portfolio.parsedData?.templateConfig;
  if (typeof configObj === "string") {
    try {
      configObj = JSON.parse(configObj);
    } catch (e) {
      console.error("JSON parse failed for templateConfig:", e);
    }
  }
  const templateName = configObj?.layout || portfolio.parsedData?.layout || "modern";
  const TemplateComponent = templateComponents[templateName] || ModernTemplate;

  return (
    <div className="relative min-h-screen pb-24 bg-white">
      <TemplateComponent data={portfolio.parsedData} />

      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-4 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-bold text-black text-lg">Preview Mode 👀</h3>
            <p className="text-sm text-gray-500">Check how your portfolio looks before making it live.</p>
          </div>

          <div className="flex items-center gap-4">
            {portfolio.isPublished ? (
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-sm rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> LIVE
                </span>
                <a
                  href={`/p/${portfolio.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-black hover:bg-gray-800 text-white font-bold rounded-lg transition-colors border border-gray-200"
                >
                  View Public Link <i className="fa fa-external-link-alt ml-2"></i>
                </a>
              </div>
            ) : (
              <button
                onClick={handlePublish}
                disabled={publishing}
                className="px-8 py-2.5 bg-black hover:bg-gray-800 text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all disabled:opacity-70 flex items-center gap-2 border border-gray-200"
              >
                {publishing ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-globe"></i>}
                {publishing ? "Publishing..." : "Publish to Web"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPortfolio;