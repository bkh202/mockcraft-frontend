import EngineeringBranchPage from "../shared/EngineeringBranchPage";

const config = {
  category: "TECHNOLOGY",
  branch: "CSE",
  resultPath: "/premium/engineering/result/:attemptId",
  pageTitle: "Technology Specializations",
  breadcrumb: "Specializations",
  description: "Master in‑demand tech domains with AI‑generated personalized quizzes",
  parentPath: "/technology",
  parentLabel: "Technology",
  subjects: [
    {
      name: "Web Development",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-globe",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "MERN", "MEAN", "Java (Spring)", "Python (Django/Flask)"]
    },
    {
      name: "AI/ML",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-robot",
      topics: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "TensorFlow", "PyTorch"]
    },
    {
      name: "Cyber Security",
      questions: "AI-Based",
      difficulty: "Hard",
      color: "bg-gray-100",
      icon: "fa-shield-alt",
      topics: ["Network Security", "Cryptography", "Ethical Hacking", "Penetration Testing", "Security Compliance"]
    },
    {
      name: "Data Science",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-chart-line",
      topics: ["Data Analysis", "Statistics", "Python", "R", "SQL", "Data Visualization", "Big Data"]
    },
    {
      name: "Cloud Computing",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-cloud",
      topics: ["AWS", "Azure", "GCP", "DevOps", "Docker", "Kubernetes"]
    },
    {
      name: "Mobile Development",
      questions: "AI-Based",
      difficulty: "Medium",
      color: "bg-gray-100",
      icon: "fa-mobile-alt",
      topics: ["Android (Kotlin/Java)", "iOS (Swift)", "React Native", "Flutter"]
    }
  ],
  companies: [
    "GENERAL", "AMAZON", "GOOGLE", "MICROSOFT", "FLIPKART",
    "RAZORPAY", "TCS", "INFOSYS", "ACCENTURE", "GOLDMAN SACHS"
  ],
  quickPractice: [
    { title: "Full Stack Challenge", description: "Mix of frontend, backend, and databases", subject: "Web Development" },
    { title: "Data Science Essentials", description: "Statistics, Python, and ML basics", subject: "Data Science" }
  ],
  adaptiveSubject: "Web Development",
  quizLabel: "Try AI‑Powered Technology Quiz",
  formIcon: "fa-rocket",
  formDescription: "Let our AI generate personalized questions based on your preferences"
};

export default function TechnologyPage() {
  return <EngineeringBranchPage config={config} />;
}