import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VoiceInterviewRoom({ questions, jobRole, company, experienceLevel }) {
  const navigate = useNavigate();

  const [currentIdx, setCurrentIdx]         = useState(0);
  const [isSpeakingAI, setIsSpeakingAI]     = useState(false);
  const [isRecordingUser, setIsRecordingUser] = useState(false);
  const [userAnswers, setUserAnswers]         = useState({});
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [micError, setMicError]   = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const handleOnline  = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online',  handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online',  handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const setupMic = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setMicError('');
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
          recognitionRef.current = new SpeechRecognition();
          recognitionRef.current.continuous      = true;
          recognitionRef.current.interimResults  = true;
          recognitionRef.current.onresult = (event) => {
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) transcript += event.results[i][0].transcript;
            setCurrentTranscript(transcript);
          };
          recognitionRef.current.onerror = (event) => {
            if (event.error === 'not-allowed') setMicError("Microphone access blocked. Please allow mic permissions in your browser.");
            setIsRecordingUser(false);
          };
        } else {
          setMicError("Speech Recognition not supported. Please use Google Chrome.");
        }
      } catch {
        setMicError("Microphone access denied or no microphone found.");
      }
    };
    setupMic();
    return () => {
      recognitionRef.current?.stop();
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakQuestion = (text) => {
    if (!text || micError) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate    = 0.9;
    utterance.onstart = () => setIsSpeakingAI(true);
    utterance.onend   = () => setIsSpeakingAI(false);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (questions && questions[currentIdx] && !micError) {
      speakQuestion(questions[currentIdx]);
      setCurrentTranscript(userAnswers[currentIdx] || '');
    }
  }, [currentIdx, questions, micError]);

  const toggleRecording = () => {
    if (micError) return;
    if (isRecordingUser) {
      recognitionRef.current?.stop();
      setIsRecordingUser(false);
      setUserAnswers(prev => ({ ...prev, [currentIdx]: currentTranscript }));
    } else {
      setCurrentTranscript(userAnswers[currentIdx] || '');
      recognitionRef.current?.start();
      setIsRecordingUser(true);
    }
  };

  const handleNextOrFinish = () => {
    window.speechSynthesis.cancel();
    const savedAnswer = currentTranscript || userAnswers[currentIdx] || "";
    if (isRecordingUser) { recognitionRef.current?.stop(); setIsRecordingUser(false); }
    const updatedAnswers = { ...userAnswers, [currentIdx]: savedAnswer };
    setUserAnswers(updatedAnswers);

    if (currentIdx === questions.length - 1) {
      const finalAnswersArray = questions.map((_, index) =>
        updatedAnswers[index]?.trim() ? updatedAnswers[index] : "User remained silent or skipped."
      );
      navigate('/evaluation', { state: { questions, answers: finalAnswersArray, jobRole, experienceLevel: experienceLevel || 'Mid-level' } });
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  // Guard
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 text-center">
          <i className="fa fa-spinner fa-spin text-3xl text-black mx-auto mb-4"></i>
          <p className="text-gray-700 font-bold text-lg">Setting up the interview room...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">

      {/* Offline Banner */}
      {isOffline && (
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white p-3 text-center font-bold flex items-center justify-center gap-2 z-50 text-base">
          <i className="fa fa-wifi"></i> You are offline! Speech recognition will fail. Reconnect immediately.
        </div>
      )}

      <div className="w-full max-w-3xl bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">

        {/* Mic Error Overlay */}
        {micError && (
          <div className="absolute inset-0 bg-white/95 z-40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 border border-gray-200">
              <i className="fa fa-exclamation-circle text-3xl text-black"></i>
            </div>
            <h2 className="text-2xl font-extrabold text-black mb-2">Microphone Blocked!</h2>
            <p className="text-gray-600 mb-5 text-base">{micError}</p>
            <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 max-w-sm">
              <p className="text-base text-black font-semibold">
                <i className="fa fa-lock mr-2"></i> Go to your browser's URL bar → click the lock icon → allow Microphone access → reload the page.
              </p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-extrabold text-black">{jobRole || "Technical"} Interview</h2>
            <p className="text-base text-gray-600 font-bold">@ {company || "MockCraft"}</p>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 font-mono text-base text-black font-bold">
            Q {currentIdx + 1} / {questions.length}
          </div>
        </div>

        {/* AI Avatar */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className={`w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center border-4 transition-all duration-300 ${
            isSpeakingAI ? 'border-black shadow-lg shadow-gray-300 animate-pulse' : 'border-gray-200'
          }`}>
            <span className="text-5xl">🤖</span>
          </div>
          <div className="h-6 mt-3">
            {isSpeakingAI && (
              <span className="text-sm text-black font-bold tracking-widest uppercase animate-pulse">
                AI is speaking...
              </span>
            )}
          </div>
        </div>

        {/* Current Question */}
        <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 mb-8 flex items-center justify-center text-center">
          <p className="text-xl font-bold text-black leading-relaxed">"{questions[currentIdx]}"</p>
        </div>

        {/* Transcript Box */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Your Answer</h3>
            {isRecordingUser && (
              <span className="text-sm font-bold text-red-600 animate-pulse flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span> Recording
              </span>
            )}
          </div>
          <div className="w-full h-36 p-4 bg-gray-50 text-black border border-gray-200 rounded-xl overflow-y-auto text-base leading-relaxed">
            {currentTranscript || userAnswers[currentIdx] || (
              <span className="text-gray-400 italic">Click the mic and start speaking your answer...</span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => speakQuestion(questions[currentIdx])}
            disabled={isRecordingUser}
            className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-black rounded-xl font-bold transition disabled:opacity-50 flex justify-center items-center gap-2 text-base border border-gray-200"
          >
            <i className="fa fa-play"></i> Repeat
          </button>

          <button
            onClick={toggleRecording}
            className={`w-full flex-1 py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 text-base ${
              isRecordingUser
                ? 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100'
                : 'bg-black text-white hover:bg-gray-800 border border-gray-300'
            }`}
          >
            {isRecordingUser
              ? <><i className="fa fa-stop"></i> Stop Answer</>
              : <><i className="fa fa-microphone"></i> Answer Question</>}
          </button>

          <button
            onClick={handleNextOrFinish}
            disabled={(isRecordingUser && !currentTranscript) || isSpeakingAI}
            className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-black rounded-xl font-bold transition disabled:opacity-50 flex justify-center items-center gap-2 text-base border border-gray-200"
          >
            {currentIdx === questions.length - 1 ? 'Finish Interview' : 'Next'} <i className="fa fa-chevron-right"></i>
          </button>
        </div>

      </div>
    </div>
  );
}