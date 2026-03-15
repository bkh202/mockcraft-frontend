import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";

const indexToOption = (i) => ["A", "B", "C", "D"][i] ?? null;

export function useQuizEngine(category, branch, resultPath) {
  const navigate = useNavigate();

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

  const resetToCards = () => {
    setView("cards");
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setSelectedSubtopic("");
    setSkippedQuestions([]);
    setSelectedCompany(null);
    setQuizStartTime(null);
    setElapsedTime(0);
  };

  const handleSelectSubject = (subjectName) => {
    setSelectedSubject(subjectName);
    setSelectedSubtopic("");
    setView("form");
  };

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
          explanation: "",
          aiTip: "",
          learningObjective: "",
        })),
      });

      setQuizStartTime(Date.now());
      setElapsedTime(0);
      setUserAnswers(new Array(aiQuestions.length).fill(null));
      setSkippedQuestions([]);
      setView("quiz");
    } catch (err) {
      console.error("Generate failed:", err);
      alert("Failed to generate quiz. Please try again.");
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  // ✅ Alag submitQuiz function — duplicate code nahi
  const submitQuiz = async (finalAnswers) => {
    const companyValue = selectedCompany === "GENERAL" ? null : selectedCompany;
    const timeTaken = quizStartTime
      ? Math.floor((Date.now() - quizStartTime) / 1000)
      : null;

    // ✅ localStorage mein meta save karo result page ke liye
    localStorage.setItem("quizMeta", JSON.stringify({
      category,
      branch,
      subject:   selectedSubject,
      company:   companyValue  || null,
      timeTaken: timeTaken     || null,
    }));

    try {
      const res = await axios.post("/quiz/submit", {
        category,
        branch,
        subject:    selectedSubject,
        unit:       selectedSubtopic || "General",
        subtopic:   selectedSubtopic || null,
        difficulty: quizData.difficulty,
        mode:       "practice",
        timeTaken,
        company:    companyValue,
        answers: finalAnswers.map((ans, index) => ({
          questionId:     quizData.questions[index].id,
          selectedOption: indexToOption(ans),
        })),
      });

      console.log("Submit response:", res.data);
      navigate(resultPath.replace(":attemptId", res.data.attemptId));
    } catch (err) {
      console.error("Submit failed:", err.response?.data || err.message);
      alert("Failed to submit quiz: " + (err.response?.data?.message || err.message));
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
          const finalAnswers = [...updatedAnswers];
          if (selectedOption !== null && finalAnswers[currentQuestionIndex] === null) {
            finalAnswers[currentQuestionIndex] = selectedOption;
          }
          await submitQuiz(finalAnswers);
        }
      } catch (err) {
        console.error("Next question error:", err);
      } finally {
        setIsLoadingNextQuestion(false);
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
          await submitQuiz(updatedAnswers);
        }
      } catch (err) {
        console.error("Skip question error:", err);
      } finally {
        setIsLoadingNextQuestion(false);
      }
    }, 500);
  };

  return {
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
    setSelectedSubtopic,
    setSelectedCompany,
    handleSelectSubject,
    handleStartQuiz,
    handleOptionSelect,
    handleNextQuestion,
    handleSkipQuestion,
    resetToCards,
  };
}