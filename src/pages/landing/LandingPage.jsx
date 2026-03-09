import HeroSection from "./HeroSection";
import HowToUse from "./HowToUse";
import Features from "./Features";
import GrowthTips from "./GrowthTips";
import Motivation from "./Motivation";
import Navbar from "../../Componenets/nav/Navbar";
import PremiumModules from "./PremiumModules";



const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      
      {/* 🚀 THE USP COMES RIGHT AFTER HERO */}
      <PremiumModules />
      
      <HowToUse />
      <Features />
      <GrowthTips />
      <Motivation />
    </div>
  );
}

export default LandingPage;