import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

// Import all templates
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

export default function PortfolioPage() {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError("Invalid URL.");
      setLoading(false);
      return;
    }

    const fetchPublicPortfolio = async () => {
      try {
        const response = await axiosInstance.get(`/p/${slug}`);
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
      } catch (err) {
        console.error("Error fetching public portfolio", err);
        setError("Portfolio not found or is not published yet.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublicPortfolio();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center font-bold text-xl text-gray-500 animate-pulse">
          <i className="fa fa-spinner fa-spin mr-2"></i> Loading Portfolio...
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 text-center max-w-md">
          <div className="text-red-500 mb-4">
            <i className="fa fa-exclamation-triangle text-6xl"></i>
          </div>
          <h2 className="text-2xl font-black text-black mb-2">Oops!</h2>
          <p className="text-gray-600 font-medium">{error || "Portfolio not found!"}</p>
        </div>
      </div>
    );
  }

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
    <div className="w-full min-h-screen bg-white">
      <TemplateComponent data={portfolio.parsedData} />
    </div>
  );
}