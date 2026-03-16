import LandingPage from "../pages/landing/LandingPage";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

import Dashboard from "../pages/dashboard/Dashboard";
import EngineeringHome from "../pages/engineering/EngineeringHome";

import CSEPage from "../pages/engineering/branches/cse/CSEPage";
import ECPage from "../pages/engineering/branches/ec/ECPage";
import MEPage from "../pages/engineering/branches/me/MEPage";
import CivilPage from "../pages/engineering/branches/civil/CivilPage";
import EEPage from "../pages/engineering/branches/ee/EEPage";
import CommonSubjectsPage from "../pages/engineering/branches/common/CommonSubjectsPage";

import AptitudeHome from "../pages/aptitude/AptitudeHome";
import QuantitativeAptitude from "../pages/aptitude/QuantitativeAptitude";
import LogicalReasoning from "../pages/aptitude/LogicalReasoning";
import GeneralKnowledge from "../pages/aptitude/GeneralKnowledge";
import ComputerAptitude from "../pages/aptitude/ComputerAptitude";
import DataInterpretation from "../pages/aptitude/DataInterpretation";
import VerbalAbility from "../pages/aptitude/VerbalAbility";

import GovernmentHome from "../pages/goverment/GovernmentHome";
import MedicalHome from "../pages/medical/MedicalHome";
import NeetHome from "../pages/medical/NeetHome";


import PhysicsPage from "../pages/medical/physics/PhysicsPage";

import ChemistryPage from "../pages/medical/chemistry/ChemistryPage";
import BiologyPage from "../pages/medical/biology/BiologyPage";

import ReasoningPage from "../pages/goverment/branches/reasoning/ReasoningPage";

import EnglishPage from "../pages/goverment/branches/english/EnglishPage";
import GeneralAwarenessPage from "../pages/goverment/branches/general/GeneralAawarenessPage";
import Unauthorized from "../pages/Unauthorized";
import QuantitativeAptitudePage from "../pages/goverment/branches/quantative/QuantitativeAptitudePage";
import ReviewPage from "../pages/review/ReviewPage";

import UserFreeHistory from "../pages/history/components/free/UserFreeHistory";

import PremiumRoute from "./PremiumRoute";
import PremiumDashboard from "../pages/dashboard/PremiumDashboard";
import UserHistoryDashboard from "../pages/dashboard/UserHistoryDashboard";
import PremiumEngineeringDashboard from "../pages/premiumEngineering/PremiumEngineeringDashboard";
import CivilPremiumPage from "../pages/premiumEngineering/civil/CivilPremiumPage";
import CommonPremiumPage from "../pages/premiumEngineering/common/CommonPremiumPage";
import CSEPremiumPage from "../pages/premiumEngineering/cs/CSEPremiumPage";
import EEPremiumPage from "../pages/premiumEngineering/ee/EEPremiumPage";
import ECEPremiumPage from "../pages/premiumEngineering/ece/ECEPremiumPage";
import MechanicalPremiumPage from "../pages/premiumEngineering/me/MechanicalPremiumPage";
import Attemped from "../pages/history/components/premium/Attemped";
import FocusedQuizPage from "../pages/history/components/premium/FocusedQuizPage";
import CSEDashboard from "../pages/premiumEngineering/cs/CSEDashboard";
import TechnologyPage from "../pages/premiumEngineering/cs/TechnologyPage";
import CivilDashboard from "../pages/premiumEngineering/civil/CivilDashboard";
import CivilTechnologyPage from "../pages/premiumEngineering/civil/CivilTechnologyPage";
import ECEDashboard from "../pages/premiumEngineering/ece/ECEDashboard";
import ECETechnologyPage from "../pages/premiumEngineering/ece/ECETechnologyPage";
import MEDashboard from "../pages/premiumEngineering/me/MEDashboard";
import METechnologyPage from "../pages/premiumEngineering/me/METechnologyPage";
import EEDashboard from "../pages/premiumEngineering/ee/EEDashboard";
import EETechnologyPage from "../pages/premiumEngineering/ee/EETechnologyPage";
import PortfolioPage from "../pages/portfoliobuilder/components/PortfolioPage";
import PortfolioDashboard from "../pages/dashboard/PortfolioDashboard";


import UniversalAptitudeResults from "../pages/aptitude/UniversalAptitudeResults";
import UniversalEngineeringResults from "../pages/engineering/UniversalEngineeringResults";
import UniversalNEETResults from "../pages/medical/UniversalNEETResults";
import UniversalGovernmentResults from "../pages/goverment/UniversalGovernmentResults";

import ResumeAnalyzerPage from "../resumeanalyzer/components/ResumeAnalyzerPage";
import ScanHistory from "../resumeanalyzer/components/ScanHistory";
import InterviewSetup from "../aiInterview/componenets/InterviewSetup";
import InterviewEvaluation from "../aiInterview/componenets/InterviewEvaluation";
import UpgradePage from "../payment/UpgradePage";
import EditPortfolioPage from "../pages/portfoliobuilder/edit/EditPortfolioPage";
import CreatePortfolioPage from "../pages/portfoliobuilder/createportfolio/CreatePortfolioPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import TermsAndConditions from "../pages/auth/TermsAndConditions";
import PremiumUniversalQuizResult from "../pages/premiumEngineering/PremiumUniversalQuizResult";
import PaymentStatusPage from "../payment/PaymentStatusPage";


// ─── Public Routes ────────────────────────────────────────────────────────────
export const publicRoutes = [
  { path: "/",             element: <LandingPage /> },
  { path: "/signup",       element: <Signup /> },
  { path: "/login",        element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "/p/:slug",      element: <PortfolioPage /> },
  { path: "/forgot-password",      element: <ForgotPassword /> },
  { path: "/terms",      element: <TermsAndConditions /> },
  { path: "/payment/status",      element: <PaymentStatusPage /> }

];

// ─── Resume / Interview / Payment Routes ─────────────────────────────────────
export const protectedResumeAnalyzerRoutes = [
  {
    path: "/resume-analyzer",
    element: (
      <PremiumRoute>
        <ResumeAnalyzerPage />
      </PremiumRoute>
    ),
  },
  { path: "/analyzer/history", element: <ScanHistory /> },

  // ✅ FIX: PremiumRoute wrap kiya — pehle missing tha, seedha allow ho raha tha
  {
    path: "/ai-mock-interview",
    element: (
      <PremiumRoute>
        <InterviewSetup />
      </PremiumRoute>
    ),
  },

  { path: "/evaluation", element: <InterviewEvaluation /> },
  { path: "/upgrade",    element: <UpgradePage /> },
];

// ─── Portfolio Routes ─────────────────────────────────────────────────────────
export const protectedPortfolioRoutes = [
  {
    path: "/resume-to-portfolio-dashboard",
    element: (
      <PremiumRoute>
        <PortfolioDashboard />
      </PremiumRoute>
    ),
  },
  { path: "/create",   element: <CreatePortfolioPage /> },
  { path: "/edit/:id", element: <EditPortfolioPage /> },
];

// ─── Protected Routes ─────────────────────────────────────────────────────────
export const protectedRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/history",   element: <UserHistoryDashboard /> },
  { path: "/history/free", element: <UserFreeHistory /> },
  {
    path: "/history/premium",
    element: (
      <PremiumRoute>
        <PremiumDashboard />
      </PremiumRoute>
    ),
  },

  // ✅ FIX: PremiumRoute wrap kiya — pehle missing tha, seedha allow ho raha tha
  {
    path: "/premium/engineering",
    element: (
      <PremiumRoute>
        <PremiumEngineeringDashboard />
      </PremiumRoute>
    ),
  },

  { path: "/premium/engineering/civildash",                 element: <CivilDashboard /> },
  { path: "/premium/engineering/civildash/civilcore",       element: <CivilPremiumPage /> },
  { path: "/premium/engineering/civildash/civiltechnology", element: <CivilTechnologyPage /> },
  { path: "/premium/engineering/common",                    element: <CommonPremiumPage /> },
  { path: "/premium/engineering/csdash",                    element: <CSEDashboard /> },
  { path: "/premium/engineering/csdash/cscore",             element: <CSEPremiumPage /> },
  { path: "/premium/engineering/csdash/cstechnology",       element: <TechnologyPage /> },
  { path: "/premium/engineering/eedash",                    element: <EEDashboard /> },
  { path: "/premium/engineering/eedash/eecore",             element: <EEPremiumPage /> },
  { path: "/premium/engineering/eedash/eetechnology",       element: <EETechnologyPage /> },
  { path: "/premium/engineering/ecedash",                   element: <ECEDashboard /> },
  { path: "/premium/engineering/ecedash/ececore",           element: <ECEPremiumPage /> },
  { path: "/premium/engineering/ecedash/ecetechnology",     element: <ECETechnologyPage /> },
  { path: "/premium/engineering/medash",                    element: <MEDashboard /> },
  { path: "/premium/engineering/medash/mecore",             element: <MechanicalPremiumPage /> },
  { path: "/premium/engineering/medash/metechnology",       element: <METechnologyPage /> },
  { path: "/premium/engineering/attempted-quiz",            element: <Attemped /> },
  { path: "/premium/engineering/recommended-quiz",          element: <FocusedQuizPage /> },
  { path: "/premium/engineering/result/:attemptId",          element: <PremiumUniversalQuizResult /> },

  { path: "/engineering",                    element: <EngineeringHome /> },
  { path: "/engineering/cse",                element: <CSEPage /> },
  { path: "/engineering/ec",                 element: <ECPage /> },
  { path: "/engineering/me",                 element: <MEPage /> },
  { path: "/engineering/ee",                 element: <EEPage /> },
  { path: "/engineering/civil",              element: <CivilPage /> },
  { path: "/engineering/common",             element: <CommonSubjectsPage /> },
  { path: "/engineering/result/:attemptId",  element: <UniversalEngineeringResults /> },

  { path: "/aptitude",                       element: <AptitudeHome /> },
  { path: "/aptitude/quantitative",          element: <QuantitativeAptitude /> },
  { path: "/aptitude/logical",               element: <LogicalReasoning /> },
  { path: "/aptitude/gk",                    element: <GeneralKnowledge /> },
  { path: "/aptitude/computer",              element: <ComputerAptitude /> },
  { path: "/aptitude/di",                    element: <DataInterpretation /> },
  { path: "/aptitude/verbal",                element: <VerbalAbility /> },
  { path: "/aptitude/result/:attemptId",     element: <UniversalAptitudeResults /> },

  { path: "/government",                     element: <GovernmentHome /> },
  { path: "/government/quantitative",        element: <QuantitativeAptitudePage /> },
  { path: "/government/reasoning",           element: <ReasoningPage /> },
  { path: "/government/english",             element: <EnglishPage /> },
  { path: "/government/ga",                  element: <GeneralAwarenessPage /> },
  { path: "/government/result/:attemptId",   element: <UniversalGovernmentResults /> },

  { path: "/medical",                        element: <MedicalHome /> },
  { path: "/medical/neet",                   element: <NeetHome /> },
  { path: "/neet/result/:attemptId",         element: <UniversalNEETResults /> },
  { path: "/medical/neet/physics",           element: <PhysicsPage /> },
  { path: "/medical/neet/chemistry",         element: <ChemistryPage /> },
  { path: "/medical/neet/biology",           element: <BiologyPage /> },
  { path: "/review/:attemptId",              element: <ReviewPage /> },
];