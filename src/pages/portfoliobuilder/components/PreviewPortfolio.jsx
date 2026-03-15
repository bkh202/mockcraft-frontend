import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../api/axiosInstance'; // Tera current path

// 1. Saare Templates Import Kar Le
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

// 2. THE REGISTRY
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
  const { id } = useParams(); // Yeh actually slug aa raha hai URL se
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    // 🛑 THE GUARD CLAUSE: Strict check to prevent backend crash
    if (!id || id === 'undefined') {
      console.warn("🛑 DEBUG: Portfolio ID is undefined. API call aborted.");
      setLoading(false);
      return;
    }

    const fetchMyPortfolio = async () => {
      try {
        const token = localStorage.getItem('token');

        // 🛑 THE BRUTAL FIX: Backend ke naye PREVIEW endpoint ko hit karo jahan Slug accept hota hai
        const response = await axios.get(`/portfolio/preview/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = response.data;

        // 🛑 SAFETY CHECK: Safe JSON parsing
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

  // Publish Handler
  const handlePublish = async () => {
    setPublishing(true);
    try {
      const token = localStorage.getItem('token');

      // Asli numeric ID bhej rahe hain Publish karne ke liye
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

  if (loading) return <div className="p-10 text-center font-bold text-xl">Loading Preview...</div>;
  if (!portfolio) return <div className="p-10 text-center text-red-500">Portfolio not found!</div>;

  // 🚀 Template Logic Extraction
  let configObj = portfolio.parsedData?.templateConfig;

  // Handle Double Stringified Data
  if (typeof configObj === "string") {
    try {
      configObj = JSON.parse(configObj);
    } catch (e) {
      console.error("JSON parse failed for templateConfig:", e);
    }
  }

  // Get layout name
  const templateName = configObj?.layout || portfolio.parsedData?.layout || "modern";

  // Find component from registry
  const TemplateComponent = templateComponents[templateName] || ModernTemplate;

  return (
    <div className="relative min-h-screen pb-24">
      {/* 🚀 Render the Correct Template Dynamically */}
      <TemplateComponent data={portfolio.parsedData} />

      {/* Floating Control Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

          <div>
            <h3 className="font-bold text-gray-800 text-lg">Preview Mode 👀</h3>
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
                  className="px-6 py-2 bg-gray-900 hover:bg-black text-white font-bold rounded-lg transition-colors"
                >
                  View Public Link ↗
                </a>
              </div>
            ) : (
              <button
                onClick={handlePublish}
                disabled={publishing}
                // FIXED TAILWIND CLASS: bg-gradient-to-r
                className="px-8 py-2.5 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center gap-2"
              >
                {publishing ? "Publishing..." : "🚀 Publish to Web"}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default PreviewPortfolio;