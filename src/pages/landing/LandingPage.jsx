import HeroSection from "./HeroSection";
import HowToUse from "./HowToUse";
import Features from "./Features";
import GrowthTips from "./GrowthTips";
import Motivation from "./Motivation";
import Navbar from "../../Componenets/nav/Navbar"; // already updated
import PremiumModules from "./PremiumModules";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <PremiumModules />
      <HowToUse />
      <Features />
      <GrowthTips />
      <Testimonials />
      <Motivation />
    </div>
  );
}

export default LandingPage;