// shared/useQuizEngine.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";

export function useQuizEngine(category, branch, resultPath) {
  const navigate = useNavigate();

  // Helper to convert index to A/B/C/D
  const indexToOption = (i) => {
    if (i === 0) return "A";
    if (i === 1) return "B";
    if (i === 2) return "C";
    if (i === 3) return "D";
    return null;
  };

  // Views: "cards", "form", "quiz"
  const [view, setView] = useState("cards");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [isLoadingNextQuestion, setIsLoadingNextQuestion] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer
  useEffect(() => {
    if (!quizStartTime) return;
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - quizStartTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [quizStartTime]);

  // Reset to cards view (e.g., when leaving quiz)
  const resetToCards = () => {
    setView("cards");
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setSelectedSubtopic("");
    setSkippedQuestions([]);
    setSelectedCompany(null); // optional
  };

  // Handle subject selection from cards view
  const handleSelectSubject = (subjectName) => {
    setSelectedSubject(subjectName);
    setSelectedSubtopic("");
    setView("form");
  };

  // Start quiz generation
  const handleStartQuiz = async (config) => {
    setIsGeneratingQuiz(true);
    const companyValue = selectedCompany === "GENERAL" ? null : selectedCompany;

    try {
      const res = await axios.post("/quiz/generate", {
        category,
        branch,
        subject: selectedSubject,
        unit: selectedSubtopic || "General",
        difficulty: config.difficulty,
        company: companyValue,
        totalQuestions: config.numberOfQuestions,
      });

      const aiQuestions = res.data;

      const formattedQuiz = {
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
          explanation: "",
          aiTip: "",
          learningObjective: "",
        })),
      };

      setQuizData(formattedQuiz);
      setQuizStartTime(Date.now());
      setElapsedTime(0);
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

  // Handle option selection
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  // Move to next question or submit
  const handleNextQuestion = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
    setIsLoadingNextQuestion(true);

    setTimeout(async () => {
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
        setIsLoadingNextQuestion(false);
      } else {
        // Final submission
        const finalAnswers = [...updatedAnswers];
        if (selectedOption !== null && finalAnswers[currentQuestionIndex] === null) {
          finalAnswers[currentQuestionIndex] = selectedOption;
        }

        const companyValue = selectedCompany === "GENERAL" ? null : selectedCompany;

        try {
          const res = await axios.post("/quiz/submit", {
            category,
            branch,
            subject: selectedSubject,
            unit: selectedSubtopic || "General",
            subtopic: selectedSubtopic || null,
            difficulty: quizData.difficulty,
            mode: "practice",
            timeTaken: Math.floor((Date.now() - quizStartTime) / 1000),
            company: companyValue,
            answers: finalAnswers.map((ans, index) => ({
              questionId: quizData.questions[index].id,
              selectedOption: indexToOption(ans),
            })),
          });

          navigate(resultPath.replace(":attemptId", res.data.attemptId));
        } catch (err) {
          console.error(err);
          alert("Failed to submit quiz");
        } finally {
          setIsLoadingNextQuestion(false);
        }
      }
    }, 500);
  };

  // Skip current question
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
        setIsLoadingNextQuestion(false);
      } else {
        const companyValue = selectedCompany === "GENERAL" ? null : selectedCompany;

        try {
          const res = await axios.post("/quiz/submit", {
            category,
            branch,
            subject: selectedSubject,
            unit: selectedSubtopic || "General",
            subtopic: selectedSubtopic || null,
            difficulty: quizData.difficulty,
            mode: "practice",
            timeTaken: Math.floor((Date.now() - quizStartTime) / 1000),
            company: companyValue,
            answers: updatedAnswers.map((ans, index) => ({
              questionId: quizData.questions[index].id,
              selectedOption: indexToOption(ans),
            })),
          });

          navigate(resultPath.replace(":attemptId", res.data.attemptId));
        } catch (err) {
          console.error(err);
          alert("Failed to submit quiz");
        } finally {
          setIsLoadingNextQuestion(false);
        }
      }
    }, 500);
  };

  return {
    // State
    view,
    selectedSubject,
    selectedSubtopic,
    selectedCompany,
    quizData,
    currentQuestionIndex,
    selectedOption,
    isGeneratingQuiz,
    isLoadingNextQuestion,
    userAnswers,
    skippedQuestions,
    quizStartTime,
    elapsedTime,

    // Setters (exposed for form view)
    setSelectedSubtopic,
    setSelectedCompany,

    // Actions
    handleSelectSubject,
    handleStartQuiz,
    handleOptionSelect,
    handleNextQuestion,
    handleSkipQuestion,
    resetToCards,
  };
}