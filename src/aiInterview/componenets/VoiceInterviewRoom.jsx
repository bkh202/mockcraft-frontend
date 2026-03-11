// VoiceInterviewRoom.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, Play, ChevronRight, Loader2, AlertCircle, WifiOff } from 'lucide-react';
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
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
          <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 font-bold">Setting up the interview room...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">

      {/* Offline Banner */}
      {isOffline && (
        <div className="fixed top-0 left-0 w-full bg-rose-500 text-white p-3 text-center font-bold flex items-center justify-center gap-2 z-50">
          <WifiOff className="w-5 h-5" /> You are offline! Speech recognition will fail. Reconnect immediately.
        </div>
      )}

      <div className="w-full max-w-3xl bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">

        {/* Mic Error Overlay */}
        {micError && (
          <div className="absolute inset-0 bg-white/95 z-40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 mb-2">Microphone Blocked!</h2>
            <p className="text-gray-500 mb-5 text-sm">{micError}</p>
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 max-w-sm">
              <p className="text-sm text-indigo-700 font-semibold">
                🔒 Go to your browser's URL bar → click the lock icon → allow Microphone access → reload the page.
              </p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-black text-gray-900">{jobRole || "Technical"} Interview</h2>
            <p className="text-sm text-indigo-600 font-bold">@ {company || "MockCraft"}</p>
          </div>
          <div className="bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-100 font-mono text-sm text-indigo-600 font-bold">
            Q {currentIdx + 1} / {questions.length}
          </div>
        </div>

        {/* AI Avatar */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className={`w-28 h-28 rounded-full bg-indigo-50 flex items-center justify-center border-4 transition-all duration-300 ${
            isSpeakingAI ? 'border-indigo-500 shadow-lg shadow-indigo-200 animate-pulse' : 'border-indigo-100'
          }`}>
            <span className="text-5xl">🤖</span>
          </div>
          <div className="h-6 mt-3">
            {isSpeakingAI && (
              <span className="text-xs text-indigo-500 font-bold tracking-widest uppercase animate-pulse">
                AI is speaking...
              </span>
            )}
          </div>
        </div>

        {/* Current Question */}
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-8 flex items-center justify-center text-center">
          <p className="text-lg font-semibold text-gray-800 leading-relaxed">"{questions[currentIdx]}"</p>
        </div>

        {/* Transcript Box */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Answer</h3>
            {isRecordingUser && (
              <span className="text-xs font-bold text-rose-500 animate-pulse flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span> Recording
              </span>
            )}
          </div>
          <div className="w-full h-36 p-4 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl overflow-y-auto text-sm leading-relaxed">
            {currentTranscript || userAnswers[currentIdx] || (
              <span className="text-gray-300 italic">Click the mic and start speaking your answer...</span>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => speakQuestion(questions[currentIdx])}
            disabled={isRecordingUser}
            className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition disabled:opacity-50 flex justify-center items-center gap-2 text-sm"
          >
            <Play className="w-4 h-4" /> Repeat
          </button>

          <button
            onClick={toggleRecording}
            className={`w-full flex-1 py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm ${
              isRecordingUser
                ? 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-600'
            }`}
          >
            {isRecordingUser
              ? <><Square className="w-4 h-4" /> Stop Answer</>
              : <><Mic className="w-4 h-4" /> Answer Question</>}
          </button>

          <button
            onClick={handleNextOrFinish}
            disabled={(isRecordingUser && !currentTranscript) || isSpeakingAI}
            className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition disabled:opacity-50 flex justify-center items-center gap-2 text-sm"
          >
            {currentIdx === questions.length - 1 ? 'Finish Interview' : 'Next'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}