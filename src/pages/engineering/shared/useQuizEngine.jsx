import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";

const indexToOption = (i) => ["A", "B", "C", "D"][i] ?? null;

/**
 * useQuizEngine — reusable hook for all quiz branch pages
 * @param {string} category  - e.g. "ENGINEERING"
 * @param {string} branch    - e.g. "CSE", "CIVIL", "EE"
 * @param {string} resultPath - e.g. "/engineering/result" or "/government/result"
 */
export function useQuizEngine(category, branch, resultPath) {
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
        category,
        branch,
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
          id: q.id,
          question: q.question,
          options: q.options,
          correctAnswer: null,
          explanation: ""
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
  try {
    const res = await axios.post("/quiz/submit", {
      category,
      branch,
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
 
    navigate(resultPath.replace(":attemptId", res.data.attemptId));
  } catch (err) {
    console.error("Submit failed:", err.response?.data);
    alert("Submit failed: " + (err.response?.data?.message || err.message));
  }
};

 const handleNextQuestion = () => {
  const updatedAnswers = [...userAnswers];
  updatedAnswers[currentQuestionIndex] = selectedOption;
  setUserAnswers(updatedAnswers);
  setIsLoadingNextQuestion(true);

  setTimeout(async () => {
    try {
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
      } else {
        await submitQuiz(updatedAnswers); // ✅ await properly
      }
    } catch (err) {
      console.error("Next question error:", err);
    } finally {
      setIsLoadingNextQuestion(false); // ✅ hamesha false hoga
    }
  }, 500);
};

const handleSkipQuestion = () => {
  const updatedAnswers = [...userAnswers];
  updatedAnswers[currentQuestionIndex] = null;
  setUserAnswers(updatedAnswers);
  setSkippedQuestions((prev) => [...prev, currentQuestionIndex]);
  setIsLoadingNextQuestion(true);

  setTimeout(async () => {
    try {
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
      } else {
        await submitQuiz(updatedAnswers); // ✅ await properly
      }
    } catch (err) {
      console.error("Skip question error:", err);
    } finally {
      setIsLoadingNextQuestion(false); // ✅ hamesha false hoga
    }
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

  return {
    // state
    view, selectedSubject, selectedSubtopic, setSelectedSubtopic,
    quizData, currentQuestionIndex, selectedOption,
    isGeneratingQuiz, isLoadingNextQuestion,
    userAnswers, skippedQuestions,
    // handlers
    handleSelectSubject, handleStartQuiz,
    handleNextQuestion, handleSkipQuestion,
    handleOptionSelect, resetToCards
  };
}