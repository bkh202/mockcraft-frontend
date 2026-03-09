import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axiosInstance";

export function useAptitudeQuizEngine(branch, resultPath) {
  const navigate = useNavigate();

  const indexToOption = (i) => {
    if (i === 0) return "A";
    if (i === 1) return "B";
    if (i === 2) return "C";
    if (i === 3) return "D";
    return null;
  };

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

  const resetToCards = () => {
    setView("cards");
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setSelectedSubtopic("");
    setSkippedQuestions([]);
  };

  const handleSelectSubject = (subjectName) => {
    setSelectedSubject(subjectName);
    setSelectedSubtopic("");
    setView("form");
  };

  const handleStartQuiz = async (config) => {
    setIsGeneratingQuiz(true);

    try {
      const res = await axios.post("/quiz/generate", {
        category: "APTITUDE",
        branch,
        subject: selectedSubject,
        unit: selectedSubtopic || "General",
        difficulty: config.difficulty,
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

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
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
        setIsLoadingNextQuestion(false);
      } else {
        const finalAnswers = [...updatedAnswers];
        if (selectedOption !== null && finalAnswers[currentQuestionIndex] === null) {
          finalAnswers[currentQuestionIndex] = selectedOption;
        }

        try {
          const res = await axios.post("/quiz/submit", {
            category: "APTITUDE",
            branch,
            subject: selectedSubject,
            unit: selectedSubtopic || "General",
            subtopic: selectedSubtopic || null,
            difficulty: quizData.difficulty,
            mode: "practice",
            answers: finalAnswers.map((ans, index) => ({
              questionId: quizData.questions[index].id,
              selectedOption: indexToOption(ans),
            })),
          });

          navigate(`${resultPath}/${res.data.attemptId}`);
        } catch (err) {
          console.error(err);
          alert("Failed to submit quiz");
        } finally {
          setIsLoadingNextQuestion(false);
        }
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
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(userAnswers[currentQuestionIndex + 1]);
        setIsLoadingNextQuestion(false);
      } else {
        try {
          const res = await axios.post("/quiz/submit", {
            category: "APTITUDE",
            branch,
            subject: selectedSubject,
            unit: selectedSubtopic || "General",
            subtopic: selectedSubtopic || null,
            difficulty: quizData.difficulty,
            mode: "practice",
            answers: updatedAnswers.map((ans, index) => ({
              questionId: quizData.questions[index].id,
              selectedOption: indexToOption(ans),
            })),
          });

          navigate(`${resultPath}/${res.data.attemptId}`);
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
    view,
    selectedSubject,
    selectedSubtopic,
    quizData,
    currentQuestionIndex,
    selectedOption,
    isGeneratingQuiz,
    isLoadingNextQuestion,
    userAnswers,
    skippedQuestions,
    setSelectedSubtopic,
    handleSelectSubject,
    handleStartQuiz,
    handleOptionSelect,
    handleNextQuestion,
    handleSkipQuestion,
    resetToCards,
  };
}