import api from "../api/axiosInstance";

export const getFocusedQuiz = () =>
  api.post("/quiz/focused");

export const getStudyPlan = () => 
  api.post("/user/history/study-plan");

