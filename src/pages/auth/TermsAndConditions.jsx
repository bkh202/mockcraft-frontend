import { useNavigate } from "react-router-dom";

const SECTIONS = [
  {
    icon: "fa-file-alt",
    title: "1. Acceptance of Terms",
    content: `By creating an account or using MockCraft, you agree to these Terms and Conditions. If you do not agree, please do not use our services. These terms apply to all users including free, trial, and premium members.`,
  },
  {
    icon: "fa-bullseye",
    title: "2. Description of Service",
    content: `MockCraft provides AI-powered mock interview practice, resume analysis, portfolio building, placement quizzes, and performance analytics. We offer a 7-day free trial followed by a paid premium subscription. Features may be updated or changed at any time.`,
  },
  {
    icon: "fa-user",
    title: "3. User Accounts",
    content: `You must provide accurate information when registering. You are responsible for maintaining the confidentiality of your account credentials. You must be at least 13 years old to use MockCraft. One person may not maintain multiple accounts. We reserve the right to suspend accounts that violate these terms.`,
  },
  {
    icon: "fa-lock",
    title: "4. Privacy & Data",
    content: `We collect your name, email, and usage data to provide and improve our services. We do not sell your personal data to third parties. Your interview responses and resume data are stored securely and used only to generate AI feedback for you. You may request deletion of your data at any time by contacting support.`,
  },
  {
    icon: "fa-credit-card",
    title: "5. Payments & Subscriptions",
    content: `MockCraft Premium is available at ₹499/month. All payments are processed securely. Subscriptions auto-renew monthly unless cancelled. Refunds are available within 7 days of purchase if you have not used premium features. We reserve the right to change pricing with 30 days notice.`,
  },
  {
    icon: "fa-gift",
    title: "6. Free Trial",
    content: `New users receive a 7-day free trial with full access to all premium features. Only one trial per user is allowed. After the trial ends, a paid subscription is required to continue accessing premium features. Unused trial days cannot be transferred or extended.`,
  },
  {
    icon: "fa-robot",
    title: "7. AI-Generated Content",
    content: `MockCraft uses AI to generate interview questions, feedback, and resume suggestions. This content is for practice purposes only and does not guarantee job placement or interview success. AI responses may occasionally contain errors — always verify important information independently.`,
  },
  {
    icon: "fa-exclamation-triangle",
    title: "8. Prohibited Use",
    content: `You may not use MockCraft to: share account credentials with others, scrape or copy our content, attempt to reverse-engineer our AI systems, submit false or misleading information, or use our platform for any unlawful purpose. Violations may result in immediate account termination.`,
  },
  {
    icon: "fa-shield-alt",
    title: "9. Intellectual Property",
    content: `All content on MockCraft — including AI models, question banks, UI designs, and branding — is owned by MockCraft. You may not reproduce, distribute, or create derivative works without written permission. Your personal data (resumes, responses) remains yours.`,
  },
  {
    icon: "fa-phone",
    title: "10. Contact & Support",
    content: `For questions about these terms, billing issues, or account support, contact us at support@mockcraft.tech. We aim to respond within 48 business hours.`,
  },
];

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-black transition"
          >
            <i className="fa fa-arrow-left"></i> Back
          </button>
          <span className="text-base font-bold text-black">MockCraft</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl border border-gray-200">
            <i className="fa fa-file-contract text-black"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
            Terms & <span className="text-gray-700">Conditions</span>
          </h1>
          <p className="text-gray-500 text-base">
            Last updated: March 2026 &nbsp;·&nbsp; Effective immediately
          </p>
        </div>

        {/* Intro Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 mb-8">
          <p className="text-base text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold text-black">MockCraft</span>. Please read
            these terms carefully before using our platform. By signing up, you
            agree to be bound by these terms. These terms govern your use of our
            website, mobile app, and all related services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {SECTIONS.map((section, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200 mt-0.5">
                  <i className={`fa ${section.icon} text-black text-lg`}></i>
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-black mb-2">
                    {section.title}
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
          <p className="text-base text-gray-600 mb-4">
            By using MockCraft, you confirm that you have read and agree to
            these Terms & Conditions.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => navigate("/signup")}
              className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-xl text-base transition border border-gray-300"
            >
              I Agree — Create Account
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-white hover:bg-gray-100 text-gray-700 font-bold px-6 py-3 rounded-xl text-base transition border border-gray-300"
            >
              Go Back
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 MockCraft. All rights reserved.
        </p>
      </div>
    </div>
  );
}