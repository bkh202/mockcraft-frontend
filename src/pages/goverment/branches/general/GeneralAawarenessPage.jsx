import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../../api/axiosInstance";
import TopicCardsView from "./components/TopicCardsView";
import QuizFormView from "./components/QuizFormView";
import QuizView from "./components/QuizView";

const indexToOption = (i) => ["A", "B", "C", "D"][i] ?? null;

export const SUBJECTS = [
  {
    name: "Current Affairs", questions: "500+", difficulty: "Medium",
    color: "bg-red-100", icon: "📰",
    topics: ["National News", "International Affairs", "Science & Tech", "Sports", "Awards & Honors", "Government Schemes"],
    examWeightage: { banking: "40-50%", ssc: "30-40%", upsc: "50-60%" }
  },
  {
    name: "History", questions: "300+", difficulty: "Medium",
    color: "bg-amber-100", icon: "🏛️",
    topics: ["Ancient India", "Medieval India", "Modern India", "World History", "Art & Culture", "Freedom Struggle"],
    examWeightage: { banking: "15-20%", ssc: "25-30%", upsc: "20-25%" }
  },
  {
    name: "Geography", questions: "250+", difficulty: "Medium",
    color: "bg-green-100", icon: "🌍",
    topics: ["Physical Geography", "Indian Geography", "World Geography", "Economic Geography", "Climate", "Resources"],
    examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "15-20%" }
  },
  {
    name: "Polity", questions: "200+", difficulty: "Hard",
    color: "bg-blue-100", icon: "⚖️",
    topics: ["Constitution", "Parliament", "Judiciary", "Local Government", "Amendment", "Fundamental Rights"],
    examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "20-25%" }
  },
  {
    name: "Economy", questions: "180+", difficulty: "Hard",
    color: "bg-purple-100", icon: "💰",
    topics: ["Basic Concepts", "Budget", "Planning", "Banking & Finance", "International Trade", "Economic Terms"],
    examWeightage: { banking: "20-25%", ssc: "10-15%", upsc: "15-20%" }
  },
  {
    name: "Science", questions: "220+", difficulty: "Medium",
    color: "bg-cyan-100", icon: "🔬",
    topics: ["Physics", "Chemistry", "Biology", "Space Science", "Technology", "Nobel Prizes"],
    examWeightage: { banking: "10-15%", ssc: "15-20%", upsc: "10-15%" }
  }
];

export default function GeneralAwarenessPage() {
  const navigate = useNavigate();

  const [view, setView] = useState("cards");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [isLoadingNextQuestion, setIsLoadingNextQuestion] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);

  const handleSelectSubject = (name) => {
    setSelectedSubject(name);
    setSelectedSubtopic("");
    setView("form");
  };

  const handleStartQuiz = async (config) => {
    setIsGeneratingQuiz(true);
    try {
      const res = await axios.post("/quiz/generate", {
        category: "GOVERNMENT",
        branch: "GENERAL_AWARENESS",
        subject: selectedSubject,
        unit: selectedSubtopic || "General",
        difficulty: config.difficulty,
        totalQuestions: config.numberOfQuestions
      });

      const aiQuestions = res.data;
      setQuizData({
        topic: selectedSubject,
        subtopic: selectedSubtopic || "All Subtopics",
        difficulty: config.difficulty,
        timePerQuestion: "2 min",
        totalQuestions: aiQuestions.length,
        questions: aiQuestions.map((q) => ({
          id: q.id, question: q.question, options: q.options,
          correctAnswer: null, explanation: ""
        }))
      });
      setUserAnswers(new Array(aiQuestions.length).fill(null));
      setSkippedQuestions([]);
      setView("quiz");
    } catch (err) {
      console.error(err);
      alert("Failed to generate quiz");
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const submitQuiz = async (finalAnswers) => {
    const res = await axios.post("/quiz/submit", {
      category: "GOVERNMENT",
      branch: "GENERAL_AWARENESS",
      subject: selectedSubject,
      unit: selectedSubtopic || "General",
      subtopic: selectedSubtopic || null,
      difficulty: quizData.difficulty,
      mode: "practice",
      timeTaken: null,
      answers: finalAnswers.map((ans, index) => ({
        questionId: quizData.questions[index].id,
        selectedOption: indexToOption(ans)
      }))
    });
    navigate(`/government/result/${res.data.attemptId}`);
  };

  const handleNextQuestion = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
    setIsLoadingNextQuestion(true);

    setTimeout(async () => {
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
      } else {
        await submitQuiz(updatedAnswers);
      }
      setIsLoadingNextQuestion(false);
    }, 500);
  };

  const handleSkipQuestion = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = null;
    setUserAnswers(updatedAnswers);
    setSkippedQuestions((prev) => [...prev, currentQuestionIndex]);
    setIsLoadingNextQuestion(true);

    setTimeout(async () => {
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
      } else {
        await submitQuiz(updatedAnswers);
      }
      setIsLoadingNextQuestion(false);
    }, 500);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const resetToCards = () => {
    setView("cards");
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setSelectedSubtopic("");
    setSkippedQuestions([]);
  };

  if (view === "quiz" && quizData) {
    return (
      <QuizView
        quizData={quizData}
        currentQuestionIndex={currentQuestionIndex}
        selectedOption={selectedOption}
        isLoadingNextQuestion={isLoadingNextQuestion}
        userAnswers={userAnswers}
        onOptionSelect={handleOptionSelect}
        onNext={handleNextQuestion}
        onSkip={handleSkipQuestion}
        onBack={resetToCards}
      />
    );
  }

  if (view === "form") {
    return (
      <QuizFormView
        selectedSubject={selectedSubject}
        selectedSubtopic={selectedSubtopic}
        setSelectedSubtopic={setSelectedSubtopic}
        isGeneratingQuiz={isGeneratingQuiz}
        onStart={handleStartQuiz}
        onBack={() => { setView("cards"); setSelectedSubtopic(""); }}
      />
    );
  }

  return (
    <TopicCardsView
      onSelectSubject={handleSelectSubject}
    />
  );
}