import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance'; 

// Tera axios instance

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

export default function PortfolioPage() {
  // 🛑 THE BRUTAL FIX: Route '/p/:slug' hai, isliye 'slug' extract karna hai, 'id' nahi.
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
        // 🛑 THE REALITY CHECK: 
        // 1. Hum /p/{slug} hit kar rahe hain (PublicPortfolioController)
        // 2. Hum koi JWT Token nahi bhej rahe hain! 
        const response = await axiosInstance.get(`/p/${slug}`); 
        
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
      } catch (err) {
        console.error("Error fetching public portfolio", err);
        // Agar portfolio published nahi hai, ya exist nahi karta, toh backend yahi fail hoga
        setError("Portfolio not found or is not published yet.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublicPortfolio();
  }, [slug]);

  if (loading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center font-bold text-xl text-gray-500 animate-pulse">
                  Loading Portfolio...
              </div>
          </div>
      );
  }

  if (error || !portfolio) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="bg-white p-10 rounded-2xl shadow-xl text-center border border-red-100 max-w-md">
                  <div className="text-red-500 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 mb-2">Oops!</h2>
                  <p className="text-gray-600 font-medium">{error || "Portfolio not found!"}</p>
              </div>
          </div>
      );
  }

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

  // Notice: Yahan koi "Floating Control Bar" nahi hai. Ye live public page hai.
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <TemplateComponent data={portfolio.parsedData} />
    </div>
  );
}